import { Container } from "./styles";

import { IoChevronBack } from "react-icons/io5";

import { ButtonText } from "../ButtonText";
import { Link } from "react-router-dom";

export function PageError() {
  return (
    <Container>

      <Link to='/'>
        <ButtonText 
          title='voltar'
          icon={IoChevronBack}
        />
      </Link>

      <div>
        <h1>Error 401</h1>
        <h2>Você não possui autorização para acessar esta página.</h2>
      </div>


    </Container>
  )
}