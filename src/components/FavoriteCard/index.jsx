import { Container } from "./styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { ButtonText } from "../ButtonText";

import imagePlaceHolder from '../../assets/image-not-found-icon.svg'

export function FavoriteCard({ data }) {
  const { user } = useAuth()

  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:favorites:${user.name}`)) || [])

  const imageURL = data.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceHolder

  async function handleRemoveDishFromFavorites(deleted) {
    const confirmation = window.confirm('Tem certeza que deseja remover este items dos favoritos?')
    if (confirmation) {
      setFavorites(prevState => prevState.filter(item => item.id !== deleted))
      location.reload()
    }
  }

  useEffect(() => {
    localStorage.setItem(`@foodexplorer:favorites:${user.name}`, JSON.stringify(favorites))
  }, [favorites])

  return (
    <Container>
      <Link to={`/details/${data.id}`}>
        <img src={imageURL} alt="" />
      </Link>
      <div className="content">
        <Link to={`/details/${data.id}`}>
          <h1>{data.title}</h1>
        </Link>
        <ButtonText
          title='Remover dos favoritos'
          onClick={() => handleRemoveDishFromFavorites(data.id)}
        />
      </div>
    </Container>
  )
}