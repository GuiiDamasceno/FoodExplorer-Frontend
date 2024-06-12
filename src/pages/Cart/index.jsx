import { Container, Content } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { OrderCard } from "../../components/OrderCard";
import { PaymentCard } from "../../components/PaymentCard";
import { Button } from "../../components/Button";
import { FiArrowRight } from "react-icons/fi";

export function Cart() {
  const { user } = useAuth()

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:cart:${user.name}`)) || [])


  const total = cart.reduce((value, item) => {
    return value + item.price
  }, 0)

  return (
    <Container>

      <Header />

      {cart.length > 0 ?
        <Content>
          <div className="cart-wrapper">
            <div className="order-wrapper">
              <h1>Meus pedidos</h1>

              <main>
                {cart &&
                  cart.map(item => (
                    <OrderCard
                      key={String(item.id)}
                      data={item}
                    />
                  ))
                }
              </main>

            </div>
            <div className="total">
              <p>Total: R$ {total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
            </div>
          </div>

          <div className="go-to-payment-button">
            <Link to='/payment'>
              <Button
                title='Ir para pagamento'
                icon={FiArrowRight}
              />
            </Link>
          </div>

          <div className="payment-card">
            <PaymentCard />
          </div>
        </Content>
        :
        <Content>
          <h2>Seu carrinho está vazio</h2>
        </Content>
      }

      <Footer />
    </Container>
  )
}