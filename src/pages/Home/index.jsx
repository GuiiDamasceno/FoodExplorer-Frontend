import { Container, Content, Banner } from "./styles.js";
import { useEffect, useState } from "react";

import background from "../../assets/Mask group.png"

import { api } from "../../services/api.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export function Home() {
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState('')

  const breakPoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    },
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`)
      setDishes(response.data)
    }
    fetchDishes()
  }, [search])

  return (
    <Container>
      <Header
        search={setSearch}
      />
      <main>
        <Content>

          <Banner>
            <img src={background} alt="Imagem de ingredientes" />

            <div className="banner">
              <div className="title">
                <h1>Sabores inigualáveis</h1>
                <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
              </div>
            </div>
          </Banner>

          <div className="cards">
            <p>Pratos principais</p>

            {
              dishes.filter(dish => dish.category == 'dishes').length > 0 &&
              <Swiper
                grabCursor={true}
                loop={true}
                breakpoints={breakPoints}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {
                  dishes.filter(dish => dish.category == 'dishes').map((item, index) => (

                    <SwiperSlide
                      key={String(index)}
                    >
                      <Card
                        data={item}
                      />
                    </SwiperSlide>

                  ))
                }

              </Swiper>
            }


            <p>Sobremesas</p>
            {
              dishes.filter(dish => dish.category == 'dessert').length > 0 &&
              <Swiper
                grabCursor={true}
                loop={true}
                breakpoints={breakPoints}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {
                  dishes.filter(dish => dish.category == 'dessert').map(dish => (
                    <SwiperSlide
                      key={String(dish.id)}
                    >
                      <Card
                        data={dish}
                      />
                    </SwiperSlide>
                  ))
                }

              </Swiper>
            }

            <p>Bebidas</p>

            {
              dishes.filter(dish => dish.category == 'drinks').length > 0 &&
              <Swiper
                grabCursor={true}
                loop={true}
                breakpoints={breakPoints}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {
                  dishes.filter(dish => dish.category == 'drinks').map(dish => (
                    <SwiperSlide
                      key={String(dish.id)}
                    >
                      <Card
                        data={dish}
                      />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            }
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}