import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 320px;
  height: 100vh;
  min-height: 100%;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  max-width: 121.2rem;
  margin: auto;
  padding: 2.4rem 4rem;

  h2{
    font-size: 2.4rem;
    font-weight: 600;
  }

  .order-wrapper{
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    h1{
      font-size: 2.4rem;
      font-weight: 600;
    }

    main{
      display: flex;
      flex-direction: column;
      gap: 3.2rem;

      overflow-y: auto;
      height: 70vh;
      padding: 0 2rem 0 0;
      margin-right: 2rem;
    }

    main::-webkit-scrollbar {
      width: 8px;
      }
    
    main::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.BLUE_200};
      border-radius: 8px;
    }
  }

  .go-to-payment-button {
    display: none;
  }
  
  @media only screen and (max-width: 820px) {
    flex-direction: column;
    overflow: auto;

    .order-wrapper main{
      height: 55vh;
      margin-bottom: 2rem;   
    }
    
    .total {
      margin-bottom: 2rem;
    }

    .go-to-payment-button{
      display: flex;
      align-items: center;
      justify-content: center;

      button{
        padding: 0 8rem;
      }
    }

    .payment-card{
      display: none;
    }

    &::-webkit-scrollbar {
      width: 8px;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.BLUE_200};
      border-radius: 8px;
    }
  }
`