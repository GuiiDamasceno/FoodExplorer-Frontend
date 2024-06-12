import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;
  padding: 1.4rem;
  border-radius: .5rem;
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;

  resize: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  border: 2px solid transparent;
  transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  &:focus, &:hover {
    outline: none;
    padding: 1.4rem 1.1rem;
    border-radius: 1rem;
    border-color: ${({ theme }) => theme.COLORS.BLUE_100};
  }

  &:focus::placeholder {
    opacity: 0;
    transition: opacity .3s;
  }
`