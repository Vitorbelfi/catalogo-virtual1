import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography,   } from '@mui/material'
import React from 'react'
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Img from './logo boxe react.png'






function MenuResponsivo() {

const [ nome , setNome]= useState('');
const [ avaliacao , setAvaliacao]= useState('');
const [ preco , setPreco]= useState('');
const [ img , setImg]= useState('');













  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  return (

   
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >                       
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',  } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon/>
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                       vertical: 'bottom',
                       horizontal: 'left',
                     }}
                     keepMounted
                     transformOrigin={{
                       vertical: 'top',
                       horizontal: 'left',
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                       display: { xs: 'block', md: 'none' },
                     }}
                  >
                 
                <h1>Kimonos</h1>
                  </Menu>
                </Box>

                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                    Catalogo Virtual
                </Typography>
                <Box sx={{ flexGrow: 1, alignItems:'center', fontSize:26,  display: { xs: 'none', md: 'flex', gap: 20,  } }}>
                  <img style={{ height:100, }} src={Img}/>
                <a style={{ color: "white", textDecoration: "none", }} href="http://localhost:3000/cadastro">Cadastro</a>
                <a style={{ color: "white", textDecoration: "none"}} href="http://localhost:3000/produtos">Cadastro Produto</a>
                <a style={{ color: "white", textDecoration: "none", marginLeft:900, }} href="http://localhost:3000/login2">Entrar</a>
                

                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton  onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    
                    </IconButton>
                  </Tooltip>
                  <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                  >
                  
                  </Menu>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>

  


  )
}

export default MenuResponsivo;