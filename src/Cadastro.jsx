import { Box, Button, Container, FormControlLabel, Grid, TextField, Typography, Checkbox, Alert } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';

function Cadastro() {
  const [senha, setSenha ] = useState("");
  const [telefone, setTelefone ] = useState("");
  const [email, setEmail ] = useState("");
  const [nome, setNome ] = useState("");
  const [cpf, setCpf ] = useState("");
  const [lembrar, setLembrar] = useState(false);
  const [ cadastro, setCadastro] = useState(false);
  const [ erro, setErro] = useState(false);

  function Cadastrar(evento){
    
    evento.preventDefault();
    fetch(process.env.REACT_APP_BACKEND + "users",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email:email,
                    senha: senha,
                    cpf:cpf,
                    telefone:telefone,
                    nome:nome
                }
            )
        })
        .then((resposta)=>resposta.json())
        .then((json)=>{

            if(json.cpf){
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

    setNome("");
    setEmail("");
    setCpf("");
    setTelefone("");
    setSenha("");
  /*  setCadastro(false);*/

  }, [cadastro]);

  return (
    <>
      
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
          <Typography component ="h1" variant ='h5'>Comece Seu Cadastro</Typography>

              {erro && (<Alert severity="warning" sx={{mt:2, mb:2}}>Desculpe tente novamente</Alert>)}
              {cadastro && (<Alert severity="success" sx={{mt:2, mb:2}}></Alert>)}

            <Box component="form" onSubmit={Cadastrar}>
                <TextField
                label = "Email" 
                variant="filled" 
                type="Email"  
                fullWidth 
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
                />
                <TextField
                  label = "senha" 
                  variant="filled" 
                  type="password"  
                  fullWidth 
                  margin="normal"
                  onChange={(e) => setSenha(e.target.value)}
                  value={senha}
                />
                <TextField
                  label = "tel" 
                  variant="filled" 
                  type="tel"  
                  fullWidth 
                  margin="normal"
                  onChange={(e) => setTelefone(e.target.value)}
                  value={telefone}
                />
                <TextField
                  label = "Nome" 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
                  onChange={(e) => setNome(e.target.value)}
                  value={nome}
                />
                <TextField
                  label = "CPF" 
                  variant="filled" 
                  type="text"  
                  fullWidth 
                  margin="normal"
                  onChange={(e) => setCpf(e.target.value)}
                  value={cpf}
                />
                
                <FormControlLabel control={ <Checkbox value={lembrar} 
                    name="lembrar" onChange={(e) => setLembrar(!lembrar)}/>}
                    label="Eu concordo com a aquisição dos meus dados"
                    />

                <Button type="submit" 
                variant="contained" 
                fullWidth 
                sx={{mt:2,mb:2}}>Cadastrar</Button>

                <Grid container>
                  <Grid item xs>
                    Suporte
                  </Grid>
                  <Grid item>
                    <a style={{ color: "black", textDecoration: "none", }} href="http://localhost:3000/Login2">Login</a>
                  </Grid>
                </Grid>

            </Box>
          </Box>
      </Container>
    </>
  )
}

export default Cadastro;