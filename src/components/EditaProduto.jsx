import { Alert, Box, Button, Container,  TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function EditaProduto() {

    const{id} = useParams();

    console.log(id);

    const [titulo, setTitulo ] = useState("");
    const [descricao, setDescricao ] = useState("");
    const [ano, setAno ] = useState("");
    const [duracao, setDuracao ] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [ editar, setEditar] = useState(false);
    const [ erro, setErro] = useState(false);
    const [ cadastro, setCadastro] = useState(false);

   
    useEffect (() => {
        fetch(process.env.REACT_APP_BACKEND + "filmes/" + id ,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
           
            })
            .then((resposta)=>resposta.json())
            .then((json)=>{
                if(!json.status){
                    setTitulo(json.titulo);
                    setDescricao(json.descricao);
                    setAno(json.ano);
                    setDuracao(json.duracao);
                    setCategoria(json.categoria);
                    setImagem(json.imagem);
                } else{
                    setErro( "Filme não encontrado");
                }

            })
            .catch((erro)=>{setErro(true)})
    }, []);

    function Editar(evento){
        evento.preventDefault();
        fetch(process.env.REACT_APP_BACKEND + "users",{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id:id,
                    titulo: titulo,
                    ano:ano,
                    duracao:duracao,
                    categoria:categoria,
                    imagem:imagem
                }
            )
        })
        .then((resposta)=>resposta.json())
            .then((json)=>{
                if(!json._id){
                   setEditar(true);
                   setErro(false);
                } else{
                    setErro( true);
                    setEditar(false);
                }

            })
            .catch((erro)=>{setErro(true)})
  

    }

  return (
    <Container component="section" maxWidth="xs">
        <Box sx={{
            mt:10,
            backgroundColor:"",
            padding:"50px",
            borderRadius:"10px",
            display: "flex",
            flexDirection:"column",
            alignItems:"center",
         }}>
            <h1>Edite seu Produto</h1>
            {erro && (<Alert severity="warning" sx={{mt:2, mb:2}}>Desculpe tente novamente</Alert>)}
            {editar && (<Alert severity="success" sx={{mt:2, mb:2}}>Filme editado com sucesso</Alert>)}

            <Box component="form" onSubmit={Editar}>
                <TextField
                label = "titulo" 
                variant="filled" 
                type="text"  
                fullWidth 
                margin="normal"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                />
                <TextField
                 label = "descrição" 
                 variant="filled" 
                 type="text"  
                 fullWidth 
                 margin="normal"
                 value={descricao}
                 onChange={(e) => setDescricao(e.target.value)}
                />
                <TextField
                    label = "ano" 
                    variant="filled" 
                    type="text"  
                    fullWidth 
                    margin="normal"
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                />
                <TextField
                 label = "duração" 
                 variant="filled" 
                 type="text"  
                 fullWidth 
                 margin="normal"
                 value={duracao}
                 onChange={(e) => setDuracao(e.target.value)}
                />
                <TextField
                    label = "categoria " 
                    variant="filled" 
                    type="text"  
                    fullWidth 
                    margin="normal"
                    value={categoria}
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
                sx={{mt:2,mb:2}}>Editar</Button>

                
            </Box>
        </Box>

    </Container>
  )
}

export default EditaProduto;