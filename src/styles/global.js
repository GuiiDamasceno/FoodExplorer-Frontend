import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    font-family: "Poppins", sans-serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.3s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
    outline: none;
    transition: all 0.3s ease-in-out;
  }
`