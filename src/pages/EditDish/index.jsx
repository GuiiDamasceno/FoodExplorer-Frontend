import { Container, Content, Form, Image } from "./styles";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { IoChevronBack } from 'react-icons/io5'
import { FiUpload } from "react-icons/fi";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonText } from '../../components/ButtonText'
import { IngredientsTag } from "../../components/IngredientsTag";
import { Input } from "../../components/Input";
import { TextArea } from '../../components/TextArea'
import { Button } from "../../components/Button";
import { PageError } from "../../components/PageError";

export function EditDish() {
  const [data, setData] = useState(null)

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [imageFile, setImageFile] = useState(null)
  const [image, setImage] = useState()

  const [loading, setLoading] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)

  const { user } = useAuth()
  const params = useParams()

  const navigate = useNavigate()

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`

  function handleChangeImage(event) {
    const file = event.target.files[0]
    setImageFile(file)
    const imagePreview = URL.createObjectURL(file)
    setImage(imagePreview)
  }

  function handleAddIngredient() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleUpdateDish() {
    if (!image) {
      return alert('Você não inseriu imagem para o prato')
    }
    if (!title) {
      return alert('Você não informou o nome do prato')
    }
    if (!category) {
      return alert('Você não informou a categoria do prato')
    }
    if (!price) {
      return alert('Você não informou o preço do prato')
    }
    if (!description) {
      return alert('Você não informou a descrição do prato')
    }
    if (tags.length < 1) {
      return alert('Você não informou os ingredientes do prato')
    }
    if (newTag) {
      return alert('Você deixou um ingrediente no campo para adicionar, mas não adicionou!')
    }

    setLoading(true)

    const formData = new FormData()
    formData.append('image', imageFile)
    formData.append('title', title)
    formData.append('category', category)
    formData.append('price', price)
    formData.append('description', description)

    tags.map(tag => (
      formData.append('ingredients', tag)
    ))

    await api
      .put(`/dishes/${params.id}`, formData)
      .then(alert('Prato atualizado com sucesso!'), navigate('/'))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Erro ao atualizar o prato.')
        }
      })
    setLoading(false)
  }

  async function handleDeleteDish() {
    setLoadingDelete(true)
    const confirmation = confirm('Tem certeza que deseja remover este prato?')

    if (confirmation) {
      await api.delete(`/dishes/${params.id}`)
        .then(() => {
          alert('Prato removido com sucesso!')
          navigate('/')
          setLoadingDelete(false)
        })
    } else {
      return
    }
  }

  function handleBack(){
    navigate(-1)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)

      const { title, description, category, price, ingredients } = response.data
      setTitle(title)
      setDescription(description)
      setCategory(category)
      setPrice(price)
      setTags(ingredients.map(tag => tag.name))
    }

    fetchDish()
  }, [])

  return (
    <Container>
      <Header />

      {user.isAdmin ?
        <Content>
          <header>
            <ButtonText 
              title='voltar'
              icon={IoChevronBack}
              onClick={handleBack}
            />
            
            <h1>Editar prato</h1>
          </header>

          <main>
            <Form>
              <div className="details">
                <div className="dishImage">
                  <p>Imagem do Prato</p>
                  <Image>
                    <img src={image ? image : imageURL} alt="" />
                    <label htmlFor="image">
                      <FiUpload />
                    </label>
                    <input
                      type='file'
                      id='image'
                      name='image'
                      onChange={handleChangeImage}
                    />
                  </Image>
                </div>

                <div className="dishName">
                  <p>Nome</p>
                  <Input
                    type="text"
                    placeholder="Ex.: Salada Ceasar"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                </div>
                <div className="dishCategory">
                  <p>Categoria</p>

                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                  >
                    <option value="default" disabled>Selecione a categoria</option>
                    <option value="dishes">Pratos</option>
                    <option value="drinks">Bebidas</option>
                    <option value="dessert">Sobremesas</option>
                  </select>
                </div>
              </div>

              <div className="ingredientsTag">
                <div>
                  <p>Ingredientes</p>

                  <div className="ingredients">

                    {
                      tags.map((tag, index) => (
                        <IngredientsTag
                          key={String(index)}
                          value={tag}
                          onClick={() => handleRemoveTag(tag)}
                        />
                      ))
                    }
                    <IngredientsTag
                      isNew
                      placeholder="Adicionar"
                      onChange={e => setNewTag(e.target.value)}
                      value={newTag}
                      onClick={handleAddIngredient}
                    />
                  </div>
                </div>

                <div className="price">
                  <p>Preço</p>
                  <Input
                    placeholder="R$ 00,00"
                    type="number"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="textarea">
                <p>Descrição</p>
                <TextArea
                  placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                  defaultValue={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>
            </Form>

            <div className="buttons">
              <div className="delete-button">
                <Button
                  title={loadingDelete ? 'Excluindo' : 'Excluir prato'}
                  onClick={handleDeleteDish}
                  disabled={loadingDelete}
                />
              </div>
              <div className="add-button">
                <Button
                  title={loading ? 'Salvando alterações' : 'Salvar alterações'}
                  onClick={handleUpdateDish}
                  disabled={loading}
                />
              </div>
            </div>
          </main>
        </Content>

        :

        <Content>
          <PageError />
        </Content>

      }

      <Footer />
    </Container>
  )
}