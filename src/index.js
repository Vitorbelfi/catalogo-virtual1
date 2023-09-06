import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import Login from './login';
import Filmes from './filmes';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cadastro from './Cadastro'



const theme = createTheme({
  palette: {

          mode: 'light',
          primary: {
            main: '#1ab1bd',
          },
          secondary: {
            main: '#009c68',
          },
          error: {
            main: '#8a0909',
          },
          info: {
            main: '#401a58',
          },
  }
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
    path: "/filmes",
    element:<Filmes/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme ={theme}>
    <RouterProvider router = {router} />
  </ThemeProvider>
);


