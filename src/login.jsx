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
function Login() {

  const [email, setEmail ] = useState("");
  const [senha, setSenha ] = useState("");
  const [lembrar, setLembrar] = useState(false);
  const [login, setLogin ] = useState(false);
  const [erro, setErro] = useState(false);
  const navigate = useNavigate();
  const defaultTheme = createTheme();
  
  /* função do useEffect em React é permitir que você realize efeitos colaterais em componentes de função. Efeitos colaterais são ações que acontecem além da renderização normal de um componente, como fazer chamadas de API, manipular o DOM, gerenciar assinaturas de eventos ou atualizar o estado do componente. */
  useEffect(() => {

     if(login){
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
              localStorage.setItem("usuario" , json.user._id );
              setLogin(true);
          }else {
              setErro(true);
          }
      })
      .catch((erro)=>{setErro(true)})


      evento.preventDefault();
  }

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
            backgroundImage: 'url(https://images.unsplash.com/photo-1624938518616-3be0add427d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aml1JTIwaml0c3V8ZW58MHx8MHx8fDA%3D&w=1000&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Entrar
            </Typography>
            {erro && (<Alert severity='warning' sx={{ mt: 2, mb: 2}} >Revise seus dados e tente novamente</Alert>)}
            <Box component="form" noValidate onSubmit={Autenticar} sx={{ mt: 1 }}>
              <TextField
                label = "Email" 
                type="Email"  
                fullWidth 
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                {...erro && ("error")}
              />
              <TextField
                label = "senha" 
                type="password"  
                fullWidth 
                margin="normal"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <FormControlLabel
                control={ <Checkbox value={lembrar} 
                name="lembrar" onChange={(e) => setLembrar(!lembrar)}/>}
                label="Lembrar-me"
              />
              <Button
                type="submit" 
                variant="contained" 
                fullWidth 
                sx={{mt:2,mb:2}}
                backgroundColor="#FFC600"
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                  <a style={{ color: "black", textDecoration: "none", }}>Esqueceu sua senha?</a>
                  </Link>
                </Grid>
                <Grid item>
                <a style={{ color: "black", textDecoration: "none", }} href="http://localhost:3000/cadastro">Começe seu cadastro</a>
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
export default Login;
