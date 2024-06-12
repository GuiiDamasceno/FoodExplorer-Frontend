import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 32rem;
  height: 100vh;
  min-height: 100%;

  h1 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2.4rem;
    font-weight: 600;

    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 121.2rem;
  height: 100%;
  margin: auto;
  padding: 2.4rem 4rem;

  overflow: hidden;

  main{
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 70vh;
    padding: 0 2rem 0 0;
  }

  main::-webkit-scrollbar {
    width: 8px;
    }
  
  main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
    border-radius: 8px;
  }

  .buttons{
    display: flex;
    margin-top: 3.2rem;
    align-self: flex-end;
    gap: 3.2rem;

    .delete-button > button{
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }
  }
`

export const Image = styled.div`
  position: relative;

  >img{
    width: 15rem;
    height: 15rem;
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

  #image{
    display: none;
  }

  svg{
    font-size: 2.6rem;
    color: ${({ theme }) => theme.COLORS.BLUE_100}
  }

  @media only screen and (max-width: 690px) {
    >label{
      bottom: .7rem;
      left: 10rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  
  gap: 1.4rem;
  max-width: 121rem;
  padding: 1rem;

  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  input{
    padding: 0 2rem;
  }

  input:hover, input:focus{
    padding: 0 1.2rem;
  }

  p{
    margin-bottom: 1.6rem;
  }

  >.details{
    display: flex;

    width: 100%;
    gap: 3.2rem;
    
    input[type='file'] {
      display: none;
    }

    >.dishName{
      width: 70%;
    }

    >.dishCategory select{
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

      border-radius: .5rem;
      border: none;
      
      height: 4rem;
      padding: 0 1.4rem;
      width: 100%;

      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  .ingredientsTag {
    display: flex;
    gap: 3.2rem;
    justify-content: space-between;

    >div{
      width: 100%;
    }
  }

  .ingredients{
    display: grid;
    grid-template-columns: repeat(6, 12rem);

    gap: 2.4rem;
    padding: .5rem;
    width: 100%;
    
    border-radius: .5rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    input{
      padding: 0;
    }
  } 

  .price{
    max-width: 15rem;

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }       
  }

  @media only screen and (max-width: 1120px) {
    .ingredients{
      grid-template-columns: repeat(5, 12rem);
    }
  }

  @media only screen and (max-width: 960px) {
    .ingredients{
      grid-template-columns: repeat(4, 12rem);
    }
  }

  @media only screen and (max-width: 820px) {
    .ingredients{
      grid-template-columns: repeat(3, 12rem);
    }
  }

  @media only screen and (max-width: 690px) {
    .details{
      display: grid;

      .dishName{
        width: 100%;
      }
    }

    .ingredientsTag {
      gap: 1rem;
    
    }
    .ingredients{
      grid-template-columns: repeat(2, 12rem);
      gap: 1rem;
    }

    .price input{
      padding: 1rem;
    }
  }
`