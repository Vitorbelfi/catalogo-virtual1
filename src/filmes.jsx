import { Box, Container,  TextField, Typography,  Button } from '@mui/material';
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
    fetch("http://10.139.75.32:8080/users",{
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
      useEffect(() =>{

        setTitulo("");
        setDescricao ("");
        setAno("");
        setDuracao("");
        setCategoria("");
        setImagem("");
      /*  setCadastro(false);*/
    
      }, [cadastro]);
    

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
            
            <Box component="form" onSubmit=""> 
                <TextField
                    label = "titulo" 
                    variant="filled" 
                    type="text"  
                    fullWidth 
                    margin="normal"
                />
                <TextField
                  label = "descrição" 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
                />
                <TextField
                  label = "ano" 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
                />
                <TextField
                  label = "duração" 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
                />
                <TextField
                  label = "categoria " 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
                />
                <TextField
                  label = "imagem" 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
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