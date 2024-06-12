import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  @media (max-width: 690px) {
    position: absolute;
    z-index: 1;

    top: 0px;
    left: 0px;

    animation: showSidebar .4s;

    &[active="false"] {
      transform: translateX(0);
    }

    @keyframes showSidebar {
      from {
        opacity: 0;
        transform: translateX(-100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;

  height: 7.4rem;

  font-size: 2.4rem;
  gap: 2rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  .header {
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.COLORS.GRAY_200};

    svg {
      font-size: 4.6rem;
      margin-left: 4rem;
      cursor: pointer;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 4rem;

  margin-top: 4rem;

  .user-menu {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-top: 4rem;

    button {
      font-weight: 400;
    }
  }

  .user-menu svg:hover {
    animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
`

export const Logout = styled.button`
  display: flex;

  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: 'Poppins', sans-serif;
  font-size: 2.4rem;
  font-weight: 300;

  margin-top: 4rem;

  padding-bottom: 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
`