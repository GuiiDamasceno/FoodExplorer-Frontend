import { Container, Brand, Content } from "./styles";

import image from '../../assets/logo.svg'

export function Footer() {
  return (
    <Container>
      <Content>
        <Brand>
          <img src={image} alt="" />
          <h2>food explorer</h2>
        </Brand>

        <div>
          <p>© 2023 - Todos os direitos reservados</p>
        </div>
      </Content>
    </Container>
  )
}