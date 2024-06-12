import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 0 1.6rem;
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};
  border-radius: .9rem;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.GRAY_300};

  svg{
    vertical-align: middle;
  }

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > input {
    max-width: 8rem;
    height: 2.8rem;
    border: none;
    outline: none;
        
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    font-family: 'Roboto', sans-serif;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-family: 'Roboto', sans-serif;
    }
  }
`