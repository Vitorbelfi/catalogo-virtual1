import { Box, Container,  TextField, Typography,  Button, Alert } from '@mui/material';
import React from 'react'
import {useState, useEffect} from 'react';



function Filmes() {
    const [titulo, setTitulo ] = useState("");
    const [descricao, setDescricao ] = useState("");
    const [ano, setAno ] = useState("");
    const [duracao, setDuracao ] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [ cadastro, setCadastro] = useState(false);
    const [ erro, setErro] = useState(false);

function Cadastrar(evento){
    
    evento.preventDefault();
    fetch(process.env.REACT_APP_BACKEND + "filmes",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    titulo:titulo,
                    descricao: descricao,
                    ano:ano,
                    duracao:duracao,
                    categoria:categoria,
                    imagem:imagem
                }
                )
            })
            .then((resposta)=>resposta.json())
            .then((json)=>{
    
                if(json.titulo){
                    setCadastro(true);
                    setErro(false);
                }else {
                    setErro(true);
                    setCadastro(false);
                }
            })
            .catch((erro)=>{setErro(true)})
      }
    

  return (
    <Container component="section" maxWidth="xs">
        <Box sx={{

        mt:10,
        backgroundColor:"#CAF5FD",
        padding:"50px",
        borderRadius:"10px",
        display: "flex",
        flexDirection:"column",
        alignItems:"center",


        }}>
          

            <Typography component ="h1" variant ='h5'>Cadastro Filme</Typography>

            {erro && (<Alert severity='warning'>Filme ja cadastrado , tente novamente please!</Alert>)}
            {cadastro && (<Alert severity='success'>Obrigado por cadastrar seu filme!</Alert>)}
            
            <Box component="form" onSubmit={Cadastrar}> 
                <TextField
                    label = "titulo" 
                    variant="filled" 
                    type="text"  
                    fullWidth 
                    margin="normal"
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <TextField
                  label = "descrição" 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
                  onChange={(e) => setDescricao(e.target.value)}
                />
                <TextField
                  label = "ano" 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
                  onChange={(e) => setAno(e.target.value)}
                />
                <TextField
                  label = "duração" 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
                  onChange={(e) => setDuracao(e.target.value)}
                />
                <TextField
                  label = "categoria " 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
                  onChange={(e) => setCategoria(e.target.value)}
                />
                <TextField
                  label = "url da imagem" 
                  variant="filled" 
                  type="img" 
                  value={imagem} 
                  fullWidth 
                  margin="normal"
                  onChange={(e) => setImagem(e.target.value)}
                />
                <Button type="submit" 
                variant="contained" 
                fullWidth 
                sx={{mt:2,mb:2}}>Cadastrar</Button>



             </Box>

        </Box>
    </Container>
  )
}

export default Filmes