import { Container, Content, PurchaseCard } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { IoRemove, IoAdd } from "react-icons/io5";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsReceipt } from "react-icons/bs";
import { PiPencilSimple } from "react-icons/pi";

import imagePlaceHolder from '../../assets/image-not-found-icon.svg'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { ButtonText } from '../ButtonText'
import { Button } from "../Button";

export function Card({ data, ...rest }) {
  const { user } = useAuth()

  const [quantity, setQuantity] = useState(1)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:cart:${user.name}`)) || [])
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:favorites:${user.name}`)) || [])

  const navigate = useNavigate()

  const imageURL = data.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceHolder

  const isFavorite = favorites.some((dish) => dish.title === data.title)

  const increase = () => {
    if (quantity > 9) {
      alert('A quantidade máxima é de 10 itens.')
      return
    }
    setQuantity(count => count + 1)
  }

  const decrease = () => {
    if (quantity < 2) {
      alert('A quantidade mínima é de 1 item.')
      return
    }
    setQuantity(count => count - 1)
  }

  async function addDishToFavorite(data) {
    let getFavorites = JSON.parse(localStorage.getItem(`@foodexplorer:favorites:${user.name}`))
    setFavorites([...getFavorites, data])
  }

  async function removeDishFromFavorites(data) {
    setFavorites(favorites.filter((dish) => dish.id !== data.id))
  }

  function handleAddDishToCart(data, quantity, image) {
    try {
      const { id, title, price } = data
      const priceFormatted = quantity * Number(price.replace(',', '.'))
      const order = { id, title, price: priceFormatted, image, quantity }

      let getCart = JSON.parse(localStorage.getItem(`@foodexplorer:cart:${user.name}`))
      setCart(prevState => [...prevState, order])
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível adicionar o item ao carrinho")
      }
    }
    location.reload()
    alert("Item adicionado ao carrinho")
  }

  useEffect(() => {
    localStorage.setItem(`@foodexplorer:cart:${user.name}`, JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem(`@foodexplorer:favorites:${user.name}`, JSON.stringify(favorites))
  }, [favorites])

  return (
    <Container {...rest}>
      {
        user.isAdmin ?

          <Content>
            <button
              className="edit-button"
              onClick={() => navigate(`/editDish/${data.id}`)}
            >
              <PiPencilSimple />
            </button>

            <div className="container">
              <img src={imageURL} alt="Dish Image" />
              <Link to={`/details/${data.id}`}>
                <h1 className="product-title">{data.title} {' >'}</h1>
              </Link>
              <p className="description">{data.description}</p>
              <span className="price">R$ {data.price}</span>
            </div>

            <div className="btns">
              <Button
                icon={PiPencilSimple}
                title="Editar prato"
                onClick={() => navigate(`/editDish/${data.id}`)}
              />
            </div>
          </Content>

          :

          <Content>
            <button
              className="addFavorites"
              onClick={() => isFavorite ? removeDishFromFavorites(data) : addDishToFavorite(data)}
            >
              {
                isFavorite ?
                  <AiFillHeart />
                  :
                  <AiOutlineHeart />
              }
            </button>

            <div className="container">
              <Link to={`/details/${data.id}`}>
                <img src={imageURL} alt="Dish Image" />
              </Link>
              <Link to={`/details/${data.id}`}>
                <h1 className="product-title">{data.title} {' >'}</h1>
              </Link>
              <p className="description">{data.description}</p>
              <span className="price">R$ {data.price}</span>
            </div>

            <PurchaseCard>
              <ButtonText
                icon={IoRemove}
                onClick={decrease}
              />

              <span>{quantity.toString().padStart(2, '0')}</span>

              <ButtonText
                icon={IoAdd}
                onClick={increase}
              />

              <Button
                title='incluir'
                icon={BsReceipt}
                onClick={() => handleAddDishToCart(data, quantity, imageURL)}
              />
            </PurchaseCard>
          </Content>
      }
    </Container>
  )
}