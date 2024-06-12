import { Container } from "./styles";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { ButtonText } from '../ButtonText'

export function OrderCard({ data }) {
  const { user } = useAuth()

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:cart:${user.name}`)) || [])

  const navigate = useNavigate()

  function handleRemoveDishFromCart(deleted) {
    const confirmation = window.confirm('Deseja excluir este pedido do carrinho?')
    if (confirmation) {
      setCart(prevState => prevState.filter(item => item.id !== deleted))
      location.reload()
    }
  }

  useEffect(() => {
    localStorage.setItem(`@foodexplorer:cart:${user.name}`, JSON.stringify(cart))
  }, [cart])

  return (
    <Container>
      <div className="card">
        <Link to={`/details/${data.id}`}>
          <img src={data.image} />
        </Link>

        <div className="dishName">
          <Link to={`/details/${data.id}`}>
            <p>{data.quantity} x <strong>{data.title}</strong><span>R$ {data.price.toFixed(2)}</span></p>
          </Link>

          <ButtonText
            title='Excluir'
            onClick={() => handleRemoveDishFromCart(data.id)}
          />
        </div>
      </div>
    </Container>
  )
}