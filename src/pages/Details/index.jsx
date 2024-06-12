import { Container, Content, Ingredient } from "./styles";

import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { IoRemove, IoAdd, IoChevronBack } from 'react-icons/io5'
import { PiPencilSimple } from "react-icons/pi";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";

export function Details() {
  const [data, setData] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('@foodexplorer:cart')) || [])

  const { user } = useAuth()

  const navigate = useNavigate()

  const params = useParams()

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`

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

  function handleAddDishToCart(data, quantity, image) {
    try {
      const { id, title, price } = data
      const priceFormatted = quantity * Number(price.replace(',', '.'))
      const order = { id, title, price: priceFormatted, image, quantity }
      const orderExists = cart.some((userOrder) => userOrder.title === order.title)

      if (orderExists) {
        return alert("Esse item já está no carrinho")
      }
      setCart(prevState => [...prevState, order])
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível adicionar o item ao carrinho")
      }
    }
    alert("Item adicionado ao carrinho")
  }

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    localStorage.setItem('@foodexplorer:cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }
    fetchDish()
  }, [])

  return (
    <Container>
      <Header />

      {
        data &&
        <Content>

          <header>
            <ButtonText
              title='voltar'
              icon={IoChevronBack}
              onClick={handleBack}
            />
          </header>

          <main>
            <div className="image">
              <img src={imageURL} alt="" />
            </div>

            <div className="description">
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <div className="ingredients">
                <Ingredient>
                  {
                    data.ingredients.map(ingredient => (
                      <Tag
                        key={String(ingredient.id)}
                        title={ingredient.name}
                      />
                    ))
                  }
                </Ingredient>
              </div>

              {
                user.isAdmin ?

                  <div className="btns">
                    <div className="edit-dish-button">
                      <Button
                        icon={PiPencilSimple}
                        title="Editar prato"
                        onClick={() => navigate(`/editDish/${data.id}`)}
                      />
                    </div>
                  </div>

                  :

                  <div className="btns">
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
                      title={`incluir - R$ ${data.price}`}
                      onClick={() => handleAddDishToCart(data, quantity, imageURL)}
                    />
                  </div>
              }
            </div>
          </main>
        </Content>
      }

      <Footer />
    </Container>
  )
}