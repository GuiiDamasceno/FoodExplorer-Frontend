import { Container, Content } from "./styles";
import { useNavigate } from "react-router-dom";

import { IoChevronBack } from 'react-icons/io5'

import { PaymentCard } from "../../components/PaymentCard";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";

export function Payment() {
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  return (
    <Container>
      <Header />


      <Content>
      <header>
        <ButtonText
          title='voltar'
          icon={IoChevronBack}
          onClick={handleBack}
        />
      </header>
        <PaymentCard />
      </Content>

      <Footer />
    </Container>
  )
}