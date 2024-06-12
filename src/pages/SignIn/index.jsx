import { Container, Content } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";

import image from '../../assets/logo.svg'

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const { signIn, loading } = useAuth()

  function handleSignIn(){
    signIn({ email, password })
  }

  return (
    <Container>

      <div className="title">
        <img src={image} alt="" />
        <h2>food explorer</h2>
      </div>

      <Content>
        <h1>Faça Login</h1>

        <div>
          <span>Email</span>
          <Input 
            placeholder='Exemplo: exemplo@exemplo.com.br'
            type='text'
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div>
          <span>Senha</span>
          <Input 
            placeholder='No mínimo 6 caracteres'
            type='password'
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button
          title={loading ? 'Entrando' : 'Entrar'}
          onClick={handleSignIn}
          disabled={loading}
        />

        <Link to='/register'>
          Crie sua conta
        </Link>
      </Content>
    </Container>
  )
}