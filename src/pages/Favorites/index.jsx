import { Container, Content } from "./styles";

import { useAuth } from "../../hooks/auth";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FavoriteCard } from "../../components/FavoriteCard";
import { useState } from "react";

export function Favorites({ data }) {
  const { user } = useAuth()

  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:favorites:${user.name}`)) || [])

  return (
    <Container>
      <Header />

      <Content>
        <h1 className="header">Meus favoritos</h1>
        <main>
          <div className="favorites-wrapper">
            {
              favorites &&
              favorites.map(item => (
                <FavoriteCard
                  key={String(item.id)}
                  data={item}
                />
              ))
            }
          </div>
        </main>
      </Content>

      <Footer />
    </Container>
  )
}