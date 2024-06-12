import styled from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  border: none;
  font-size: 2.4rem;
  font-weight: 600;

  background: transparent;

  display: flex;
  align-items: center;
  
  gap: 10px;

  >svg{
    font-size: 24px;
  }
`