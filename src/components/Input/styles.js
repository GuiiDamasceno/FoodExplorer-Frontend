import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  border-radius: 1rem;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  
  >input{
    width: 100%;
    height: 4.2rem;
    padding: 0 4.6rem;
    
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;

    border: 2px solid transparent;
    transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  input:focus, input:hover {
    outline: none;
    padding: 0 4.2rem;
    border-radius: 1rem;
    border-color: ${({ theme }) => theme.COLORS.BLUE_100};
  }

  input:focus::placeholder {
    opacity: 0;
    transition: opacity .3s;
  }

  >svg{
    margin-left: 16px;
    position: absolute;
  }
`