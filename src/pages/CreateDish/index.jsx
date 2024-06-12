import { Container, Content, Form, Image } from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

import imagePlaceholder from "../../assets/dishplaceholder.png"

export function CreateDish() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [loading, setLoading] = useState(false)

  const { user } = useAuth()

  const navigate = useNavigate()

  // handleTags functions
  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleBack(){
    navigate(-1)
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImage(imagePreview);
  }

  const [imageFile, setImageFile] = useState(null)
  const [image, setImage] = useState(imagePlaceholder)

  // Create Dish functions
  async function handleNewDish() {
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
      return alert('Por favor, adicione pelo menos um ingrediente ao prato')
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
      .post('/dishes', formData)
      .then(alert('Prato adicionado com sucesso!!'), navigate('/'))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Erro ao criar o prato.')
        }
      })

    setLoading(false)
  }

  return (
    <Container>
      <Header />

      {
        user.isAdmin ?

          <Content>
            <header>
            <ButtonText 
              title='voltar'
              icon={IoChevronBack}
              onClick={handleBack}
            />

              <h1>Criar Prato</h1>
            </header>

            <main>
              <Form>
                <div className="details">
                  <div className="dishImage">
                    <p>Imagem do Prato</p>
                    <Image>
                      <img src={image} alt="" />
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
                      onChange={e => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="dishCategory">
                    <p>Categoria</p>

                    <select
                      defaultValue={'default'}
                      onChange={e => setCategory(e.target.value)}
                    >
                      <option value="default" disabled>Selecione a categoria</option>
                      <option value="dishes">Refeição</option>
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
                        onClick={handleAddTag}
                      />
                    </div>
                  </div>

                  <div className="price">
                    <p>Preço</p>
                    <Input
                      placeholder="R$ 00,00"
                      type="number"
                      onChange={e => setPrice(e.target.value)}
                    />
                  </div>
                </div>

                <div className="textarea">
                  <p>Descrição</p>
                  <TextArea
                    placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>
              </Form>

              <div className="buttons">
                <Button
                  title={loading ? 'Salvando' : 'Salvar alterações'}
                  onClick={handleNewDish}
                />
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