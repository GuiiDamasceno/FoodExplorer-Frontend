import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;
`

export const Content = styled.div`
  position: relative;

  width: 30rem;
  height: 51.2rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_900};

  .edit-button, .addFavorites{
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3rem;
  }
  
  >.container{
    display: grid;

    justify-items: center;
    padding: 1rem;

    img{
      width: 17.6rem;
      height: 17.6rem;
      margin: 3rem;
      border-radius: 50%;
      object-fit: cover;
    }

    >.description{
      font-size: 1.2rem;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      max-height: 7rem;
      padding: 0 1rem;
      
      display: -webkit-box;
      overflow-wrap: break-word;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;

     }

    >.price{
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }

    .product-title{
      font-size: 2rem;
      line-height: 140%;
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.WHITE};

      margin-bottom: 1.5rem;
      padding: 0 1rem;
      white-space: break-spaces;

      display: -webkit-box;
      overflow-wrap: break-word;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .btns{
    display: flex;
    width: 70%;
    position: absolute;
    bottom: 2rem;
    right: 4.5rem;
    margin: auto;
    }
`

export const PurchaseCard = styled.div`
  display: flex;
  flex-direction: row;

  position: absolute;
  bottom: 2rem;
  right: 2rem;

  align-items: center;
  max-width: 24.6rem;
  height: 5.6rem;
  margin: 0 2.4rem 0;

  gap: 1.5rem;
`