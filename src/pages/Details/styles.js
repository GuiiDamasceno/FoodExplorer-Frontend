import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 35rem;
  height: 100vh;

  overflow-x: hidden;

  @keyframes fade-in-forward {
    0% {
      opacity: 0;
      transform: scale(0.6);
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
  height: 100%;
  max-width: 121.2rem;
  margin: auto;
  padding: 3.5rem 4rem;

  overflow: auto;

  animation: fade-in-forward 1s ease 0s 1 normal forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }
    
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
    border-radius: 8px;
  }

  >header{
    display: flex;
    align-items: left;

    >a{
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      border: none;
      font-size: 2.4rem;
      font-weight: 900;

      background: transparent;

      display: flex;
      align-items: center;
  
      gap: 10px;

      >svg{
        font-size: 24px;
      }
    }
  }

  >main{
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    gap: 47px;

    margin-top: 42px;

    >div >img{
      width: 30rem;
      height: 30rem;
      object-fit: cover;
      border-radius: 50%;
    }
    
    >.description >p, h1{
      margin-top: 1.6rem;
      margin-bottom: 1.6rem;

      display: -webkit-box;
      overflow-wrap: break-word;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    >.description >.btns{
      display: flex;
      align-items: center;
      gap: 16px;

      font-size: 20px;
      line-height: 160%;
      font-weight: 400;

      margin-top: 2rem;

      >button{
        max-width: 20rem;
        white-space: nowrap;
      }

      @media (max-width: 690px) {
        >.edit-dish-button{
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 820px) {
    main{
      display: flex;
      flex-direction: column;
    }
  }
`

export const Ingredient = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, auto));
  gap: 1rem;

`