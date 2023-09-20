import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import Login from './login';
import Produtos from './components/Produto';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cadastro from './Cadastro'
import EditaProduto from './components/EditaProduto';





const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFC600',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: '#8a0909',
    },
    info: {
      main: '#401a58',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
    },
  },
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/cadastro",
    element:<Cadastro/>
  },
  {
    path: "/produtos",
    element:<Produtos/>
  },
  {
    path: "/edicao/:id",
    element: <EditaProduto/>
  }


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme ={theme}>
    <RouterProvider router = {router} />
  </ThemeProvider>
);


