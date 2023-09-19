import { Box, Container,  TextField, Typography,  Button, Alert } from '@mui/material';
import React from 'react'
import {useState, useEffect} from 'react';



function Filmes() {
    const [nome, setNome ] = useState("");
    const [descricao, setDescricao ] = useState("");
    const [durabilidade, setDurabilidade ] = useState("");
    const [tamanho, setTamanho ] = useState("");
    const [cor, setCor] = useState("");
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
                    nome:nome,
                    descricao: descricao,
                    durabilidade:durabilidade,
                    tamanho:tamanho,
                    cor:cor,
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
                    onChange={(e) => setNome(e.target.value)}
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
                  onChange={(e) => setDurabilidade(e.target.value)}
                />
                <TextField
                  label = "tamanho" 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
                  onChange={(e) => setTamanho(e.target.value)}
                />
                <TextField
                  label = "cor " 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
                  onChange={(e) => setCor(e.target.value)}
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