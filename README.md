
<h1 style="text-align: center;">
  <img alt="Logo do Food Explorer" src="./src/assets/logo.svg" style="vertical-align: middle; margin-right: 10px;">
  Food Explorer
</h1>

<p align="center">
  <a href="#project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#features">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pages">Páginas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Utilização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#users">Personas</a>
</p>

<h2 id='project'>Projeto</h2>

O Food Explorer é uma aplicação web desenvolvida com tecnologias como React.js no front-end e Node.js no [back-end](https://github.com/GuiiDamasceno/FoodExplorer-Backend) que tem como objetivo proporcionar uma experiência agradável de navegação para clientes de um restaurante.

O food explorer tem duas personas: o ***admin*** e o ***usuário***;

O admin é a pessoa responsável pelo restaurante, logo, poderá criar, visualizar, editar e apagar um prato a qualquer momento. Cada prato contem uma imagem, um nome, uma categoria, uma breve descrição, os ingredientes e o seu preço. Ao clicar em adicionar prato, o admin recebe uma mensagem de sucesso e será redirecionado para a página principal;

O usuário visualiza todos os pratos cadastrados e, quando clica em um prato, é redirecionado para uma nova tela com informações mais detalhadas sobre ele.

<h2 id="technologies">💻 Tecnologias</h2>

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Axios](https://www.npmjs.com/package/axios)
- [ReactJs](https://reactjs.org)
- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Router Dom](https://react-icons.github.io/react-icons/)
- [Styled Components](https://styled-components.com/)
- [Swiper](https://swiperjs.com/)
- [ViteJS](https://vitejs.dev/)
- [CORS](https://www.npmjs.com/package/cors)

<h2 id="features">🛠️ Funcionalidades</h2>

A aplicação apresenta as seguintes funcionalidades para usuários:

- Login
- Cadastro
- Mostrar pratos cadastrados
- Filtrar pratos
- Mostrar detalhes do prato
- Favoritar prato
- Remover prato dos favoritos
- Mostrar favoritos
- Adicionar prato ao carrinho
- Selecionar pagamento por pix ou cartão
- Logout

Também apresenta algumas funcionalidades para Administrador: 

- Criar prato
- Editar prato
- Excluir prato
- Cadastrar pratos
- Selecionar estado dos pedidos de cada usuário (Pendente, Cancelado, Entregue...)

<h2 id='pages'> 🎨 Layout</h2>

#### Usuários

- Login

![Login](https://github.com/GuiiDamasceno/FoodExplorer-Frontend/blob/main/.github/signin.png?raw=true)

- Cadastro

![Cadastro](https://github.com/GuiiDamasceno/FoodExplorer-Frontend/blob/main/.github/signup.png?raw=true)

- Home

![Home](https://github.com/GuiiDamasceno/FoodExplorer-Frontend/blob/main/.github/home.png?raw=true)

- Detalhes

![Details](https://github.com/GuiiDamasceno/FoodExplorer-Frontend/blob/main/.github/details.png?raw=true)

- Carrinho

![Cart](https://github.com/GuiiDamasceno/FoodExplorer-Frontend/blob/main/.github/cart.png?raw=true)

- Pedidos

![Orders](https://github.com/GuiiDamasceno/FoodExplorer-Frontend/blob/main/.github/orders.png?raw=true)

- Favoritos

![Favorites](https://github.com/GuiiDamasceno/FoodExplorer-Frontend/blob/main/.github/favorites.png?raw=true)

- Perfil

![Profile](https://github.com/GuiiDamasceno/FoodExplorer-Frontend/blob/main/.github/profile.png?raw=true)

#### Administrador

- Criar novo prato

![CreatDish](https://github.com/GuiiDamasceno/FoodExplorer-Frontend/blob/main/.github/createdish.png?raw=true)

- Editar prato

![EditDish](https://github.com/GuiiDamasceno/FoodExplorer-Frontend/blob/main/.github/editdish.png?raw=true)

## 🚀 Como utilizar

#### 💻 Executando o Front-end

```bash
# Clone o projeto para o local desejado em seu computador.
$ https://github.com/GuiiDamasceno/FoodExplorer-Frontend.git

# Acesse a pasta do projeto:
$ cd FoodExplorer-Frontend

# Instale as dependências:
$ npm install

# Inicie o servidor:
$ npm run dev

```
___

#### 🚧 Executando o Back-end
```bash
# No BackEnd insira uma porta e um secret no arquivo .env vazio
  AUTH_SECRET=
  PORT=

# Navegue até o diretório do BackEnd
$ cd food-explorer-backend

# Instale as dependências necessárias
$ npm install

# Agora inicie o servidor do BackEnd
$ npm run dev
```

<h2 id="users">👩🏾‍💻 Personas</h2>

O Food Explorer possui duas personas principais: o admin e o usuário. Você pode criar um novo usuário ou testar a aplicação usando as seguintes informações de login:

Admin:

- E-mail: admin@email.com
- Senha: admin123

Usuário:

- E-mail: user@email.com
- Senha: user123

O BackEnd foi hospedado diretamente no Render.
Já o Frontend foi hospedado diretamente no Netlify.
⚠️ **Importante**: Este projeto utiliza uma hospedagem gratuita para o back-end, portanto, pode haver atrasos no tempo de resposta do servidor.

[O resultado FINAL pode ser visto aqui](https://food-exxplorer.netlify.app/)

---
  <p align="center">
    Desenvolvido por: Guilherme Damasceno
  </p>