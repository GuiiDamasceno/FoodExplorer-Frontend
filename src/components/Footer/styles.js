import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 121.2rem;
  height: 6rem;
  padding: 0 4rem;
  margin: auto;

  p{
    color: ${({ theme }) => theme.COLORS.WHITE_100}
  }

  @media only screen and (max-width: 590px){
    display: flex;
    flex-direction: column;
    white-space: nowrap;

    p{
      font-size: 1.2rem;
    }
  }
`

export const Brand = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  display: flex;
  align-items: center;
  gap: 10px;

  img{
    width: 28px;
    height: 28px;
    filter: grayscale(.8);
  }

  @media only screen and (max-width: 590px){
    font-size: 1.4rem;
    padding: 0.5rem;
  }
`