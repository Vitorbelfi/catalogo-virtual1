import { Box, Container,  TextField, Typography,  Button, Alert } from '@mui/material';
import React from 'react'
import {useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';



function Produtos() {
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
    fetch(process.env.REACT_APP_BACKEND + "produtos",{
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
                    imagem:imagem,
                    usuario: localStorage.getItem( "usuario" )
                    
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

      useEffect(() => {

        setTitulo("");
        setDescricao("");
        setAno("");
        setDuracao("");
        setCategoria("");
        setImagem("");
        setCadastro(false);
      }, [cadastro]);
    

  return (
   
        

    <Container component="section" maxWidth="xs">
        <Box sx={{

        mt:10,
        backgroundColor:"white",
        padding:"50px",
        borderRadius:"10px",
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        


        }}>
          
          

            <Typography component ="h1" variant ='h5'>Cadastro Produto</Typography>

            {erro && (<Alert severity='warning'>Produto ja cadastrado , tente novamente please!</Alert>)}
            {cadastro && (<Alert severity='success'>Obrigado por cadastrar seu produto!</Alert>)}
            
            <Box component="form" onSubmit={Cadastrar}> 
                <TextField
                    label = "nome" 
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
                  label = "durabilidade" 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
                  onChange={(e) => setDuracao(e.target.value)}
                />
                <TextField
                  label = "tamanho" 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
                  onChange={(e) => setCategoria(e.target.value)}
                />
                <TextField
                  label = "cor " 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
                  onChange={(e) => setAno(e.target.value)}
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

export default Produtos;