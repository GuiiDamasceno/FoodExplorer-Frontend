import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  width: 100%;

  height: 46px;
  padding: 0 16px;
  
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;

  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

`