import styled from "styled-components";

export const Container = styled.div`
  padding: 4px 8px;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.GRAY_500};

  margin-right: 12px;

  font-size: 14px;
  line-height: 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;

  max-width: 15rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
`