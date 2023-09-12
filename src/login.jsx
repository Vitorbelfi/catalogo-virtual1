import { Box, Button, Container, TextField, Checkbox, FormControlLabel, Grid, Typography, Alert } from '@mui/material';
import React from 'react'
import {useState, useEffect} from 'react';
import { useNavigate, json } from 'react-router-dom';

function Login() {

    const [email, setEmail ] = useState("");
    const [senha, setSenha ] = useState("");
    const [lembrar, setLembrar] = useState(false);
    const [login, setLogin ] = useState(false);
    const [erro, setErro] = useState(false);
    const navigate = useNavigate();
    
    /* função do useEffect em React é permitir que você realize efeitos colaterais em componentes de função. Efeitos colaterais são ações que acontecem além da renderização normal de um componente, como fazer chamadas de API, manipular o DOM, gerenciar assinaturas de eventos ou atualizar o estado do componente. */
    useEffect(() => {

       if(login){
            localStorage.setItem("usuario" , JSON.stringify({email: email}));
            setEmail("");
            setSenha("");
            navigate("/");
       }

    }, [login]);

    function Autenticar( evento )
    {
        fetch(process.env.REACT_APP_BACKEND + "login",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email:email,
                    senha:senha
                }
            )
        })
        .then((resposta)=>resposta.json())
        .then((json)=>{
            if(json.user ){
                setLogin(true);
            }else {
                setErro(true);
            }
        })
        .catch((erro)=>{setErro(true)})


        evento.preventDefault();
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

            <Typography component ="h1" variant ='h5'>Entrar</Typography>
            {erro && (<Alert severity='warning'>Revise seus dados e tente novamente</Alert>)}
            <Box component="form" onSubmit={Autenticar}>
                <TextField 
                label = "Email" 
                variant="filled" 
                type="Email"  
                fullWidth 
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                {...erro && ("error")}
                />
                
                <TextField 
                label = "senha" 
                variant="filled" 
                type="password"  
                fullWidth 
                margin="normal"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                
                />
                <FormControlLabel
                    control={ <Checkbox value={lembrar} 
                    name="lemrar" onChange={(e) => setLembrar(!lembrar)}/>}
                    label="Lembrar-me"
                />
                <Button 
                type="submit" 
                variant="contained" 
                fullWidth 
                sx={{mt:2,mb:2}}>Login</Button>


                <Grid container>
                    
                    <Grid item xs>
                        Esqueci a Senha
                    </Grid>

                    <Grid item >
                        Cadastrar
                    </Grid>

                </Grid>
            </Box>
        </Box>
    </Container>
  )
}

export default Login;