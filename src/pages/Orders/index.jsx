import { Container, Content } from "./styles";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useEffect, useState } from "react";

export function Orders() {
  const { user } = useAuth()
  const [orders, setOrders] = useState([])

  async function handleOrderStatus(order, event) {
    let statusSelected = event.target.value

    const cart = {
      id: order.id,
      orderStatus: statusSelected
    }

    await api.put('/orders', cart)
    location.reload()
  }

  function formatDate(date) {
    const dateFormatted = new Date(date);

    let monthFormatted = (dateFormatted.getMonth() + 1).toString();
    monthFormatted = monthFormatted.length == 1 ? `0${monthFormatted}` : monthFormatted;

    let minutesFormatted = dateFormatted.getMinutes().toString();
    minutesFormatted = minutesFormatted.length == 1 ? `0${minutesFormatted}` : minutesFormatted;

    return `${dateFormatted.getDate()}/${monthFormatted} às ${dateFormatted.getHours() - 3}h${minutesFormatted}`;
  }

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get("/orders")
      setOrders(response.data)
    }
    fetchOrders()
  }, [])

  return (
    <Container>
      <Header />

      <Content>

        <div className="orders">
          <h1>Pedidos</h1>
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Código</th>
                <th>Detalhamento</th>
                <th>Data e hora</th>
              </tr>
            </thead>

            {
              orders.length < 1 &&

              <tbody>
                <tr>
                  <td>
                    <div className="no-orders">
                      <p>Não existem pedidos cadastrados.</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            }

            {
              user.isAdmin ?

                <tbody>
                  {
                    orders &&

                    orders.map(order => (
                      <tr key={String(order.id)}>
                        <td className="status">
                          <select
                            defaultValue={order.orderStatus}
                            onChange={event => handleOrderStatus(order, event)}
                          >
                            <option value='🟡 Pendente'>🟡 Pendente</option>
                            <option value='🟠 Preparando'>🟠 Preparando</option>
                            <option value='🟢 Entregue'>🟢 Entregue</option>
                            <option value='🔴 Cancelado'>🔴 Cancelado</option>
                          </select>
                        </td>
                        <td>0000{order.id}</td>
                        <td>
                          {order.items.map((item) => (
                            <span className="dish-title"
                              key={item.title}
                            >
                              {item.quantity} x {item.title}, {' '}
                            </span>
                          ))
                          }
                        </td>
                        <td>{formatDate(order.created_at)}</td>
                      </tr>
                    ))
                  }
                </tbody>

                :

                <tbody>
                  {orders &&
                    orders.map(order => (
                      <tr key={String(order.id)}>
                        <td>{order.orderStatus}</td>
                        <td>0000{order.id}</td>
                        <td>
                          {order.items.map((item) => (
                            <span
                              key={item.title}
                              className="dish-title"
                            >
                              {item.quantity} x {item.title}, {' '}
                            </span>
                          ))
                          }
                        </td>
                        <td>{formatDate(order.created_at)}</td>
                      </tr>
                    ))
                  }
                </tbody>
            }
          </table>
        </div>

      </Content>
      <Footer />
    </Container>
  )
}