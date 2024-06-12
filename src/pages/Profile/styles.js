import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;

  overflow: auto;
  overflow: overlay;

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
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 100rem;
  margin: auto;
  padding: 8rem;

  
  animation: fade-in-backward 1s ease 0s 1 normal forwards;
  
  .card {
    display: flex;
  }

  @media only screen and (max-width: 820px) {
   .card {
      display: grid;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 80%;

  padding: 5rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 1rem 0 0 1rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};

  .inputs{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  button{
    width: 100%;
  }

  label{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    border-radius: .5rem;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  svg{
    color: ${({ theme }) => theme.COLORS.GRAY_300}
  }

  @media only screen and (max-width: 820px) {
    width: 100%;
    border-radius: 1rem 1rem 0 0;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: 0 3rem 3rem;

  >img{
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid ${({ theme }) => theme.COLORS.BLUE_100};
  }

  >label{
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: .7rem;
    right: .7rem;

    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.COLORS.BLUE_100};
    cursor: pointer;
  }

  #avatar{
    display: none;
  }

  svg{
    font-size: 2.6rem;
    
    color: ${({ theme }) => theme.COLORS.BLUE_100}
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 5rem;

  border-radius: 0 1rem 1rem 0;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};

  img{
    display: flex;
    justify-content: center;
    width: 8rem;
    margin-bottom: 3rem;
  }
  
  p{
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 3rem;
  }

  a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  button{
    max-width: 30rem;
    margin-bottom: 3rem;
  }

  @media only screen and (max-width: 820px) {
    border-radius: 0 0 1rem 1rem;
  }
`