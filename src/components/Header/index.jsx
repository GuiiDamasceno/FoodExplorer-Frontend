import { Container, Logout, Brand, Content, Profile, Menu } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { FiHeart, FiLogOut, FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi'
import { BsList, BsReceipt } from "react-icons/bs";

import logo from '../../assets/logo.svg'

import { Input } from "../Input";
import { Button } from "../Button";
import { ButtonText } from '../ButtonText'
import { SideMenu } from "../SideMenu";


export function Header({ search }) {
  const { user, signOut } = useAuth()

  const [orders, setOrders] = useState([])
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:cart:${user.name}`)) || [])
  const [sidebar, setSidebar] = useState(false)

  const navigate = useNavigate()

  function userMenu() {
    document.getElementById('user-menu').classList.toggle('active')
  }

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  const showSidebar = () => setSidebar(!sidebar)

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get("/orders")
      setOrders(response.data)
    }
    fetchOrders()
  }, [])

  return (
    <Container>

      <div className="content">

        <Menu>
          <BsList onClick={showSidebar} />
          {sidebar && 
            <SideMenu 
              active={setSidebar}
              search={search}
            />}
        </Menu>

        {
          user.isAdmin ?

            <Brand to='/'>
              <div className="logo-title">
                <img src={logo} alt="logo" />
                <h2>food explorer</h2>
              </div>
              <p>Admin</p>
            </Brand>

            :

            <Brand to='/'>
              <div className="logo-title">
                <img src={logo} alt="logo" />
                <h2>food explorer</h2>
              </div>
            </Brand>
        }

        <Content>

          <Input
            placeholder='Busque por pratos'
            icon={FiSearch}
            onChange={e => search(e.target.value)}
          />

          {
            user.isAdmin ?
              <Link to='/orders'>
                <Button
                  type='button'
                  title={`Ver pedidos (${orders.length})`}
                  icon={BsReceipt}
                >
                </Button>
              </Link>

              :

              <Link to='/cart'>
                <Button
                  type='button'
                  title={`Carrinho (${cart.length})`}
                  icon={BsReceipt}
                />
              </Link>
          }

          {
            user.isAdmin ?
              <Link to='/profile'>
                <Profile>
                  <FiUser />
                </Profile>
              </Link>

              :

              <Profile onClick={userMenu}>
                <FiUser />
                <div id="user-menu">
                  <Link to='/orders'>
                    <ButtonText
                      icon={FiShoppingBag}
                      title='Meus pedidos'
                    />
                  </Link>

                  <Link to='/favorites'>
                    <ButtonText
                      icon={FiHeart}
                      title='Meus favoritos'
                    />
                  </Link>

                  <Link to='/profile'>
                    <ButtonText
                      icon={FiUser}
                      title='Meu perfil'
                    />
                  </Link>
                </div>
              </Profile>
          }

          <Logout onClick={handleSignOut}>
            <FiLogOut />
          </Logout>

        </Content>

        {user.isAdmin ?
          <Link to='/orders'>
            <Menu>
              <div className="orders-menu-wrapper">
                <p className="cart-length">{`${orders.length}`}</p>
                <BsReceipt />
              </div>
            </Menu>
          </Link>

          :

          <Link to="/cart">
            <Menu>
              <div className="orders-menu-wrapper">
                <p className="cart-length">{`${cart.length}`}</p>
                <BsReceipt />
              </div>
            </Menu>
          </Link>
        }
      </div>
    </Container>
  )
}