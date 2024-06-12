import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 4rem;

  width: 100%;
  max-width: 121.2rem;
  margin: auto;
  height: 100vh;
  flex-direction: row;

  animation: fade-in-backward 1s ease 0s 1 normal forwards;

  >.title{
    display: flex;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.2rem;
    font-weight: bolder;

    justify-content: center;
    align-items: center;
    gap: 19px;

    margin: 0 auto;
    padding: 19px;

    img{
      width: 50px;
      height: 50px;

      animation: rotate-center 1.5s ease-in both;
    }
  }

  @keyframes fade-in-backward {
    0% {
      opacity: 0;
      transform: scale(1.4);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .title{
      white-space: nowrap;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 45rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 1.6rem;
  padding: 6.4rem;

  float: right;

  box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.COLORS.BLUE_300};

  input{
    padding: 0 1.6rem;
  }

  input:hover, input:focus{
    padding: 0 1.2rem;
  }

  >h1{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 32px;
    font-weight: 400;
    line-height: 24px;

    text-align: center;
  }
 
  >div{
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 16px;
  }

  >a{
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;

    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }

  @media only screen and (max-width: 980px) {
    width: 40rem;
  }
`