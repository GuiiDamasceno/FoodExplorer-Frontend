import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-area: header;
  
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  top: 0;
  z-index: 999;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  >div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    
    width: 121.2rem;
    height: 7.4rem;
    
    padding: 0 4rem;
    gap: 3.2rem;
  }

  @media only screen and (max-width: 690px) {

  }

  @keyframes scale-up-center {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }

  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
 
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Brand = styled(Link)`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.WHITE};

  cursor: pointer;

  h2{
    display: flex;
    width: max-content;
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  }

  img{
    width: 30px;
    height: 30px;
  }

  img:hover {
    -webkit-animation: rotate-center 0.6s ease-in-out both;
    animation: rotate-center 0.6s ease-in-out both;
  }

  .logo-title{
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  p{
    position: absolute;
    top: 2.6rem;
    left: 16rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  }

  @media only screen and (max-width: 690px){
    display: flex;
    align-items: center;
  }
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  gap: 3.2rem;
  
  @media only screen and (max-width: 690px) {
    display: none;
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 36px;
  }

  svg:hover{
    animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 4.6rem;

  cursor: pointer;

  svg{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.2rem;
  }

  svg:hover{
    animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  #user-menu{
    display: none;

    button{
      font-size: 1.6rem;
      font-weight: 400;
    }
  }

  #user-menu.active{
    display: flex;
    flex-direction: column;
    align-self: center;

    position: absolute;
    z-index: 9999;
    margin-top: 23rem;

    gap: 1rem;
    padding: 2rem;

    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    box-shadow: 0px 0px 5px 5px ${({ theme }) => theme.COLORS.BLUE_300};
    background: linear-gradient(180deg, ${({ theme }) => theme.COLORS.LINEAR_200} 50%, ${({ theme }) => theme.COLORS.LINEAR_100} 100%);
  }

  @media only screen and (max-width: 690px) {
    #user-menu.active{
      right: 2rem;
    }
  }
`

export const Menu = styled.div`
  background: none;
  border: none;
  display: none;

  svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.6rem;
    cursor: pointer;
  }

  .orders-menu-wrapper{
    position: relative;
  }

  .cart-length{
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 1.5rem;
    right: -1rem;

    width: 3rem;
    height: 3rem;

    background-color: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 50%;
    cursor: pointer;
  }

  @media (max-width: 690px) {
    display: block;
    padding: 1.6rem 3rem;

    align-items: center;
    line-height: 0;
  }
`