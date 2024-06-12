import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 121rem;

  gap: 4rem;

  margin: 0 auto;
  padding: 4rem;

  color: ${({ theme }) => theme.COLORS.WHITE};

  height: 100%;
`