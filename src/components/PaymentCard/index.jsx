import { Container, Content } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from 'react-qr-code'

import { FaPix, FaRegCreditCard } from "react-icons/fa6";
import { BsReceipt } from "react-icons/bs";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

import { Button } from "../Button"
import { Input } from "../Input"

import QrCode from '../../assets/elements.png'
import paymentAprovedImage from '../../assets/CheckCircle.svg'
import waitImage from '../../assets/Clock.svg'
import forkImage from '../../assets/ForkKnife.svg'
import cartImage from '../../assets/cart.svg'

export function PaymentCard() {
  const { user } = useAuth()

  const [isPixVisible, setIsPixVisible] = useState(false)
  const [isCreditCardVisible, setIsCreditCardVisible] = useState(false)
  const [pixActive, setPixActive] = useState(false)
  const [creditCardActive, setCreditCardActive] = useState(false)
  const [isClockActive, setClockActive] = useState(false)
  const [isAprovedActive, setIsAprovedActive] = useState(false)
  const [isDelivered, setIsDelivered] = useState(false)
  const [isCartVisible, setIsCartVisible] = useState(true)

  const [cardNum, setCardNum] = useState('')
  const [cvc, setCvc] = useState('')

  const [disabledButton, setDisabledButton] = useState(false)
  const [loading, setLoading] = useState(false)

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:cart:${user.name}`)) || [])

  const navigate = useNavigate()

  async function handleClearCart() {
    localStorage.removeItem(`@foodexplorer:cart:${user.name}`)
    setCart([])
  }

  const total = cart.reduce((value, item) => {
    return value + item.price
  }, 0)

  function handleCreateCart() {
    return {
      orderStatus: '🟡 Pendente',
      paymentMethod: pixActive ? 'pix' : 'creditCard',
      totalPrice: total,
      cart: cart.map(item => (
        {
          id: item.id,
          title: item.title,
          quantity: item.quantity,
        }
      ))
    }
  }

  async function handleFinishPayment(cart) {
    const newCart = handleCreateCart(cart)

    // validations
    if (!pixActive && cardNum.length < 16) {
      alert('Número de cartão inválido')
      return
    }

    if (!pixActive && cvc.length < 3) {
      alert('CVC inválido')
      return
    }

    if (cart.length < 1) {
      return alert('Não há itens no carrinho.')
    }

    setLoading(true)

    await api.post('/orders', newCart)
      .then(() => {
        disableButton()
        setTimeout(() => {
          alert('Pedido cadastrado!')
          handleClearCart()
          deliveredButton()
        }, 5000)
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Desculpe. Não foi possível cadastrar o seu pedido.')
        }
      })
    setLoading(false)
  }

  const handleCardNumChange = event => {
    const limit = 16
    setCardNum(event.target.value.slice(0, limit))
  }

  const handleCvcChange = event => {
    const limit = 3
    setCvc(event.target.value.slice(0, limit))
  }

  const handleCreditCard = () => {
    setIsPixVisible(false)
    setIsCreditCardVisible(true)
    setIsCartVisible(false)
    setPixActive(false)
    setCreditCardActive(true)
  }

  const handlePix = () => {
    setIsPixVisible(true)
    setIsCreditCardVisible(false)
    setIsCartVisible(false)
    setPixActive(true)
    setCreditCardActive(false)
  }

  const disableButton = () => {
    setDisabledButton(true)
    setIsCreditCardVisible(false)
    setIsPixVisible(false)
    setClockActive(true)
    setIsAprovedActive(false)
    setIsDelivered(false)

    setTimeout(() => {
      setClockActive(false)
      setIsAprovedActive(true)
      setIsDelivered(false)
    }, 2000)
  }

  const deliveredButton = () => {
    setIsCreditCardVisible(false)
    setIsPixVisible(false)
    setClockActive(false)
    setIsAprovedActive(false)
    setIsDelivered(true)
  }

  useEffect(() => {
    localStorage.setItem('@foodexplorer:cart', JSON.stringify(cart));
  }, [cart])

  return (
    <Container>
      <div className="payment-card-wrapper">
        <div className="payment">
          <h2>Pagamento</h2>
          <div className="payment-card">
            <div className="payment-option">
              <button
                className={pixActive === true ? 'active' : ''}
                onClick={handlePix}
                disabled={disabledButton}
              >
                <FaPix />
                Pix
              </button>
              <button
                className={creditCardActive === true ? 'active' : ''}
                onClick={handleCreditCard}
                disabled={disabledButton}
              >
                <FaRegCreditCard />
                Crédito
              </button>
            </div>

            <Content>

              {isCartVisible &&
                <div className="cart">
                  <img src={cartImage} alt="Cart image" />
                  <p>Selecione uma forma de pagamento.</p>
                </div>
              }

              {isPixVisible &&
                <div className="payment-method">
                  <div className="payment-method-image">
                    <QRCode
                      size={256}
                      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                      value={toString(total)}
                      viewBox={`0 0 256 256`}
                    />
                  </div>

                  <div className="btns">
                    <Button
                      icon={BsReceipt}
                      title='Finalizar Pagamento'
                      className='finishPaymentButton'
                      onClick={() => handleFinishPayment(cart)}
                    />
                  </div>
                </div>
              }

              {isCreditCardVisible &&
                <div className="credit-card">
                  <div className="card-number">
                    <p>Número do Cartão</p>
                    <Input
                      type="number"
                      placeholder='0000 0000 0000 0000'
                      value={cardNum}
                      onChange={handleCardNumChange}
                    />
                  </div>

                  <div className="card-info">
                    <div className="card-expiring-date">
                      <p>Validade</p>
                      <Input
                        type="text"
                        placeholder='04/25'
                        maxLength='5'
                        required='5'
                      />
                    </div>

                    <div className="cvc">
                      <p>CVC</p>
                      <Input
                        type="number"
                        placeholder='000'
                        value={cvc}
                        onChange={handleCvcChange}
                      />
                    </div>
                  </div>

                  <div className="btns">
                    <Button
                      icon={BsReceipt}
                      title='Finalizar Pagamento'
                      className='finishPaymentButton'
                      onClick={() => handleFinishPayment(cart)}
                    />
                  </div>
                </div>

              }

              {isClockActive &&
                <div className="waiting">
                  <div className="waiting-image">
                    <img src={waitImage} alt="Awaiting payment" />
                  </div>
                  <p>Aguardando pagamento no caixa</p>
                </div>

              }

              {isAprovedActive &&
                <div className="approved">
                  <div className="approved-image">
                    <img src={paymentAprovedImage} alt="Approved Image" />
                  </div>
                  <p>Pagamento aprovado!</p>
                </div>

              }

              {isDelivered &&
                <div className="delivered">
                  <div className="delivered-image">
                    <img src={forkImage} alt="Delivered Image" />
                  </div>
                  <p>O pedido foi entregue!</p>
                </div>
              }

            </Content>
          </div>
        </div>
      </div>
    </Container>
  )
}