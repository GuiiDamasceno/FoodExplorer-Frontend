import { Container, Content } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logoImage from '../../assets/logo.svg'

import { api } from '../../services/api'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Por favor, preencha todos os campos.')
    }

    setLoading(true)

    api.post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso')
        navigate('/')
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar.')
        }

        setLoading(false)
      })
  }

  return (
    <Container>

      <div className="title">
        <img src={logoImage} alt="Logo Image svg" />
        <h2>food explorer</h2>
      </div>

      <Content>
        <h1>Crie sua conta</h1>

        <div>
          <span>Seu nome</span>
          <Input
            placeholder='Exemplo: Maria da Silva'
            type='text'
            onChange={e => setName(e.target.value)}
          />
        </div>

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
          title={loading ? 'Cadastrando' : 'Criar Conta'}
          onClick={handleSignUp}
          disabled={loading}
        />

        <Link to='/'>
          Já tenho uma conta
        </Link>
      </Content>
    </Container>
  )
}