import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  max-width: 35rem;
  margin-top: 2rem;

  gap: 2rem;

  img{
    object-fit: cover;
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 50%;

    cursor: pointer;
  }

  .content{
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    
    >a{
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.GRAY_200}
    }

    h1{
      font-size: 2rem;
      font-weight: 400;
      line-height: 1.6;

      display: -webkit-box;
      overflow-wrap: break-word;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;

      text-decoration: none;

      cursor: pointer;
    }

    button{
      font-size: 1.2rem;
      font-weight: 200;
      color: ${({ theme }) => theme.COLORS.RED_100};
    }
  }
`