import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 40rem;
  margin-left: 10rem;

  h2{
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 3.2rem;
  }

  .payment-option{
    display: flex;
    height: 7rem;
    
    button{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .8rem;
  
      width: 100%;
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  
    button:first-child{
      border-radius: 0.8rem 0 0;
    }
  
    button:last-child{
      border-radius: 0 0.8rem 0 0;
    }
  
    button.active {
      top: 2px;
      left: 1px;
      box-shadow: none;
      background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    } 
  }

  @media only screen and (max-width: 1120px) {
    margin-left: 5rem;
  }

  @media only screen and (max-width: 960px) {
    margin-left: 0;
  }
`

export const Content = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 0 0 .8rem .8rem;
  width: 100%;
  max-width: 45rem;
  max-height: 48rem;

  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  .btns{
    margin-top: 2rem;
    width: 100%;
  }

  p{
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 0.5rem;
  }

  input{
    padding: 0 1.6rem;
  }

  input:hover{
    padding: 0 1.2rem;
  }

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .approved,
  .waiting,
  .delivered,
  .cart{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 17rem;

    gap: 3rem;
  }

  .card-number{
    width: 100%;
    margin-bottom: 1rem;
  }

  .card-info{
    display: flex;
    gap: 2rem;
  }

  .hide{
    display: none;
  }
`