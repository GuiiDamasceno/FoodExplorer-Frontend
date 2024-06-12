import { Container, Content, SidebarHeader, Logout } from "./styles";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { BsReceipt, BsX } from "react-icons/bs";
import { FiSearch, FiShoppingBag, FiHeart, FiUser, FiPlus } from "react-icons/fi";

import { Input } from "../Input";
import { ButtonText } from "../ButtonText";

export function SideMenu({ active, search }) {
  const { user, signOut } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  function handleSearchSidebar(event) {
    event.preventDefault()

    active(false)
  }

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container $sidebar={active}>
      <SidebarHeader>
        <div className="header">
          <BsX onClick={closeSidebar} />
          Menu
        </div>
      </SidebarHeader>

      <Content>
        <form onSubmit={handleSearchSidebar}>
          <Input
            placeholder='Busque por pratos'
            icon={FiSearch}
            onChange={e => search(e.target.value)}
          />
        </form>

        {
          user.isAdmin ?
            <div className="user-menu">
              <Link to='/orders'>
                <ButtonText
                  icon={BsReceipt}
                  title='Pedidos'
                />
              </Link>
              <Link to='/createdish'>
                <ButtonText
                  icon={FiPlus}
                  title='Criar prato'
                />
              </Link>
              <Link to='/profile'>
                <ButtonText
                  icon={FiUser}
                  title='Meu perfil'
                />
              </Link>
            </div>

            :

            <div className="user-menu">
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
        }

        <Logout onClick={handleSignOut}>
          Sair
        </Logout>

      </Content>
    </Container>
  )
}