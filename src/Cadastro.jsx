import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Typography, Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState, useEffect} from 'react';
import { useNavigate, json } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Cadastro() {
  const [senha, setSenha ] = useState("");
  const [telefone, setTelefone ] = useState("");
  const [email, setEmail ] = useState("");
  const [nome, setNome ] = useState("");
  const [cpf, setCpf ] = useState("");
  const [lembrar, setLembrar] = useState(false);
  const [ cadastro, setCadastro] = useState(false);
  const [ erro, setErro] = useState(false);
  const defaultTheme = createTheme();

  function Cadastrar(evento){
    
    evento.preventDefault();
    fetch(process.env.REACT_APP_BACKEND + "usuarios",{
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
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:  'url(https://mind-setters.com/wp-content/uploads/2022/09/BJJ.jpg)',
            backgroundRepeat: 'no-repeat',
            
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: '100% 70%',
            backgroundPosition: 'center',
            backgroundColor: 'white'
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
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
                sx={{mt:2,mb:2}}
                backgroundColor="#FFC600"
                >Cadastrar</Button>

                <Grid container>
                  <Grid item xs>
                    Suporte
                  </Grid>
                  <Grid item>
                    <a style={{ color: "black", textDecoration: "none", }} href="http://localhost:3000/Login2">Login</a>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
      </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Cadastro;


              
            
