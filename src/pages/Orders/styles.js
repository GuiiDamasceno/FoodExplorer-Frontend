import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
    
  width: 100%;
  height: 100vh;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  max-width: 121rem;
  margin: auto;
  padding: 3.2rem 4rem;

  table::-webkit-scrollbar {
    width: .8rem;
  }
  
  table::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
    border-radius: 1rem;
  }

  table{
    display: block;
    overflow: auto;

    width: 100%;
    max-height: 60rem;
    margin: 3.5rem 0;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: .8rem;
    border-collapse: collapse;

    .status select{
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

      border-radius: .5rem;
      border: none;
      
      height: 4rem;
      padding: 0 1rem;
      width: 100%;

      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  table * {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE}
  }

  table th{
    height: 6.4rem;
    padding: 2rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    text-align: left;
  }

  table th:first-child{
    width: 28rem;
  }

  table th:nth-child(2){
    width: 16rem;
  }

  table th:nth-child(3){
    width: 70rem
  }

  table th:last-child{
    width: 25rem;
  }

  table td{
    height: 8rem;
    padding: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

    >.dish-title{
      display: -webkit-box;
      overflow-wrap: break-word;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;

      max-width: 60rem;
    }
  }

  table td:nth-child(-n+3),
  table th:nth-child(-n+3){
    border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  }

  @media only screen and (max-width: 1024px) {
    max-width: 121rem;
    height: 100%;

    table th:first-child{
      min-width: 150px;
    }
    table td{
      >.dish-title{
        max-width: 20rem;
      }
    }
  }

  @media only screen and (max-width: 690px) {
    table td, table th{
      padding: 1rem;
    }

    table th:first-child{
      min-width: 100px;
    }
  }
`