import { Container, Content, Avatar, Form, Info } from "./styles";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { FiCamera, FiLock, FiMail, FiPlus, FiShoppingBag, FiUser } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import logo from '../../assets/logo.svg'

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from '../../components/Button'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const avatarUrl = user.avatar ?
    `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdateProfile() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }

    const userUpdated = Object.assign(user, updated)
    console.log(userUpdated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <Header />

      <Content>
        <div className="card">
          <Form>
            <Avatar>
              <img src={avatar} alt="User Image" />
              <label htmlFor="avatar">
                <FiCamera />

                <input
                  type="file"
                  id='avatar'
                  onChange={handleChangeAvatar}
                />
              </label>
            </Avatar>

            <div className="inputs">
              <Input
                type='text'
                placeholder={`${user.name}`}
                icon={FiUser}
                onChange={e => setName(e.target.value)}
              />

              <Input
                type='email'
                placeholder={`${user.email}`}
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
              />

              <Input
                type='password'
                placeholder='Senha atual'
                icon={FiLock}
                onChange={e => setOldPassword(e.target.value)}
              />

              <Input
                type='password'
                placeholder='Nova senha'
                icon={FiLock}
                onChange={e => setNewPassword(e.target.value)}
              />
            </div>

            <Button
              title='Salvar'
              onClick={handleUpdateProfile}
            />

          </Form>

          {
            user.isAdmin ?
              <Info>
                <div className="logo">
                  <img src={logo} alt="" />
                </div>

                <p>Olá, {user.name}!</p>

                <Link to='/orders'>
                  <Button
                    title='Ver pedidos'
                    icon={FiShoppingBag}
                  />
                </Link>

                <Link to='/createdish'>
                  <Button
                    title='Criar pratos'
                    icon={FiPlus}
                  />
                </Link>

              </Info>

              :

              <Info>
                <div className="logo">
                  <img src={logo} alt="" />
                </div>

                <p>Olá, {user.name}!</p>

                <Link to='/orders'>
                  <Button
                    title='Meus pedidos'
                    icon={FiShoppingBag}
                  />
                </Link>

                <Button
                  title='Contato por e-mail'
                  icon={FiMail}
                  onClick={() => window.location = 'mailto:contato@foodexplorer.com'}
                />

                <Button
                  title='Whatsapp'
                  icon={BsWhatsapp}
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=+999999999999&text=Oi pessoal do FoodExplorer! Gostaria de falar sobre o meu pedido!', '_blank')}
                />
              </Info>
          }
        </div>
      </Content>
    </Container>
  )
}