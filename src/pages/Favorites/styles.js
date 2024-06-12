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
  width: 100%;
  max-width: 121.2rem;
  height: 100%;
  margin: auto;
  padding: 2.4rem 4rem;

  overflow: hidden;

  h1{
    font-size: 2.4rem;
    font-weight: 600;
  }

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

  .favorites-wrapper{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 0 5rem 0;

    @media only screen and (max-width: 1130px){
      grid-template-columns: repeat(2, 1fr); 
    }

    @media only screen and (max-width: 690px) {
      grid-template-columns: repeat(1, 1fr); 
    }
  }
`