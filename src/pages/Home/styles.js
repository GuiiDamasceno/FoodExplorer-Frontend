import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
    
  width: 100%;
  min-width: 35rem;
  height: 100vh;

  overflow: auto;
  overflow: overlay; 
    
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  main{
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 0 2rem 0 0;

    overflow-y: auto;
  }
  
  main::-webkit-scrollbar {
    width: 8px;
    }
  
  main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
    border-radius: 8px;
  }

  @keyframes fade-in-forward {
    0% {
      opacity: 0;
      transform: scale(1.2);
	  }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  max-width: 121rem;
  height: 100vh;
  margin: auto;
  padding: 3.5rem 4rem;

  font-family: 'Poppins', sans-serif;

  animation: fade-in-forward 1s ease 0s 1 normal forwards;

    .swiper {
      margin-bottom: 6rem;
    }

    p {
      font-size: 3.2rem;
      margin-bottom: 3rem;
    }
    
    .swiper-slide {
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    
    .swiper-button-next,
    .swiper-button-prev {
      width: 5rem;
      height: 51.2rem;
      margin: -25.6rem -1rem;
      
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-weight: bolder;
      mask-image: none;
    }

    .swiper-button-next:hover,
    .swiper-button-prev:hover {
	    animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    .swiper-button-prev {
      background: linear-gradient(to left, transparent 0%, ${({ theme }) => theme.COLORS.BACKGROUND_700} 50% 0%, transparent 100%);
    }

    .swiper-button-next {
      background: linear-gradient(to right, transparent 0%, ${({ theme }) => theme.COLORS.BACKGROUND_700} 50% 0%, transparent 100%);
    }

    @keyframes scale-up-center {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.2);
      }
    }
`;

export const Banner = styled.div`
  text-align: center;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;

  margin-bottom: 6.2rem;

    .banner {
      background: linear-gradient(180deg, ${({ theme }) => theme.COLORS.LINEAR_200} 0%, ${({ theme }) => theme.COLORS.LINEAR_100} 100%);
      border-radius: 0.8rem;
      position: relative;
      box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.COLORS.BLUE_300};
    }

    .title {
      padding: 1rem;
    }

    img {
      width: 40rem;
      margin-bottom: -2.7rem;   
      z-index: -1;
    }

    h1 {
      line-height: 140%;
      font-size: clamp(1rem, 6vw, 4rem);
      font-weight: 500;

      margin-bottom: 0.8rem;
    }

    span {
      font-size: clamp(1rem, 2.5vw, 1.6rem);
    }

    @media only screen and (min-width: 1060px) {
    position: relative;
    margin-top: 16.4rem;

    .banner {
      display: flex;
      justify-content: end;
    }
        
    .title {
      width: 54rem;
      height: 26rem;

      padding: 8.7rem 4.6rem 0 0;
      text-align: right;
    }

    img {
      width: 65.6rem;
      position: absolute;
      bottom: 1.3rem;
      z-index: 1;
      left: -5rem;
    }
  }
`;