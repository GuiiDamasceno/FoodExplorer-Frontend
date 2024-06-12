import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: 'Roboto', sans-serif;
  
  .card {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1.6rem;
    width: 100%;
    padding: 1rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: .8rem;
  }

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.GRAY_200}
  }

  img{
    width: 7.2rem;
    height: 7.2rem;
    object-fit: cover;
    border-radius: 50%;
  }

  strong{
    display: -webkit-box;
    overflow-wrap: break-word;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    white-space: normal;
  }

  p{
    font-size: 2rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    white-space: nowrap;
  }

  span{
    display: flex;
    white-space: nowrap;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    margin-left: 1rem;
  }

  button{
    margin-top: .6rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.RED_100};
    font-size: 1.4rem;
    font-weight: 400;
  }
`