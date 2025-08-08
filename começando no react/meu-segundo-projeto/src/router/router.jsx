import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'
import Perfil from '../pages/Perfill/Perfil'
import CadastroProduto from '../pages/CadastroDeProduto/CadastroProduto'
import Produto from '../pages/Produto/Produto'

const router = createBrowserRouter([

    {path:"/", element: <Login/>},
    {path:"/cadastro", element:<Cadastro/>},
    {path:"/perfil", element: <Perfil/>},
    {path:"/cadastroProduto", element:<CadastroProduto/>},
    {path:"/produto", element:<Produto/>}
])

export default router