import { Avatar, Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Filme from "./components/Filme";
import MenuResponsivo from "./components/MenuResponsivo";
import Body from './components/body.module.css';
import img2 from './kimono.webp';
import img3 from './kimono2.webp';
import img4 from './kimono3.webp';
import img5 from './kimono4.webp';
import faixabranca from './faixa branca.jpg';
import faixaazul from './faixa azul.jpg';
import faixaroxa from './faixa roxa.jpg';
import faixamarrom from './faixa marrom.jpg';
import faixapreta from './faixa preta.jpg';
import kimonoinfantil1 from './kimonoinfantil1.webp';
import kimonoinfantil2 from './kimono infantil2.jpg';
import kimonoinfantil3 from './kimono infantil3.webp';
import kimonoinfantil4 from './kimono infantil5.webp';






function App() {

    const [filmes, setFilmes] = useState();
    const [erro, setErro ] = useState();

    useEffect(() => {

      fetch(process.env.REACT_APP_BACKEND + "Filmes",{
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        
    })
    .then((resposta)=>resposta.json())
    .then( ( json ) => {setFilmes(json)})

    .catch((erro)=>{setErro(true)})

    },[])

      function excluir(evento, id) {
        evento.preventDefault();
        fetch(process.env.REACT_APP_BACKEND + "login",{
          method: "DELETE",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                 id:id
              })
      })
      .then((resposta)=>resposta.json())
      .then((json)=>{
          const novaLista = filmes.filter((filme) => filme._id !==id) ;
          setFilmes( novaLista );
      })
      .catch((erro)=>{setErro(true)})
  }


  return (
    <>
        <MenuResponsivo />
              <Typography variant="h5" align="center" fontWeight='bold' ><br />
                KIMONOS
              </Typography><br />
              <Container maxWidth="large" >
                <Box display="flex" justifyContent="center" gap="20px" textAlign="center" >
                  <Box fontSize="18px" fontWeight="bold" >
                  <img src={ img2} style = {{width:240, height:300,  }} /> <br />
                  <span>Comp 450 V6 Gi - Black</span>
                  </Box>
                  <Box fontSize="18px" fontWeight="bold" >
                  <img src={ img3} style = {{width:240, height:300, }} /> <br />
                  <span>The ONE Jiu Jitsu Gi - Blue </span>
                  </Box>
                  <Box fontSize="18px" fontWeight="bold" >
                  <img src={ img4} style = {{width:240, height:300, }} /> <br />
                  <span>Comp 450 V6 Gi - White</span>
                  </Box>
                  <Box fontSize="18px" fontWeight="bold" >
                  <img src={ img5} style = {{width:240, height:300, }} /> <br />
                  <span>The ONE Womens Jiu Jitsu </span>
                  </Box>
                </Box>
        </Container>


        <Typography variant="h5" align="center" fontWeight='bold' ><br />
                KIMONOS INFANTIL
              </Typography><br />
              <Container maxWidth="large">
                <Box display="flex" justifyContent="center" gap="20px" textAlign="center" >
                <Box fontSize="18px" fontWeight="bold" >
                  <img src={ kimonoinfantil1} style = {{width:240, height:300, }} /> <br />
                  <span>CHILDREN'S WHITE KIMONO</span>
                  </Box>
                  <Box fontSize="18px" fontWeight="bold" >
                  <img src={ kimonoinfantil2} style = {{width:240, height:300, }} /> <br />
                  <span>CHILDREN'S BLACK KIMONO</span>
                  </Box>
                  <Box fontSize="18px" fontWeight="bold" >
                  <img src={kimonoinfantil3 } style = {{width:240, height:300, }} /> <br />
                  <span>CHILDREN'S BLUE KIMONO</span>
                  </Box>
                  <Box fontSize="18px" fontWeight="bold" >
                  <img src={ kimonoinfantil4} style = {{width:240, height:300, }} /> <br />
                  <span>CHILDREN'S WHITE KIMONO</span>
                  </Box>
                  
                </Box>
              </Container>
        <Typography variant="h5" align="center" fontWeight='bold' ><br />
                FAIXAS
            </Typography><br />
        <Container>
          <Box display="flex" justifyContent="center" gap="20px" textAlign="center">
          <Box fontSize="18px" fontWeight="bold" >
                  <img src={ faixabranca} style = {{width:170, height:190,  }} /> <br />
                  <span>WHITE BELT </span>
                  </Box>
                  <Box fontSize="18px" fontWeight="bold" >
                  <img src={ faixaazul} style = {{width:170, height:190,  }} /> <br />
                  <span>BLUE BELT </span>
                  </Box>
                  <Box fontSize="18px" fontWeight="bold" >
                  <img src={ faixaroxa} style = {{width:170, height:190,  }} /> <br />
                  <span>PURPLE BELT</span>
                  </Box>
                  <Box fontSize="18px" fontWeight="bold" >
                  <img src={ faixamarrom} style = {{width:170, height:190,  }} /> <br />
                  <span>BROWN BELT </span>
                  </Box>
                  <Box fontSize="18px" fontWeight="bold" >
                  <img src={ faixapreta} style = {{width:170, height:190,  }} /> <br />
                  <span> BLACK BELT</span>
                  </Box>
          </Box>

        </Container><br /><br />
        <Box sx={{p:6}} component= "footer">
          <Typography variant="subtitle2" align="center" color={"gray"}>
          Copyright © 2023.<p></p>
          Descubra a excelência do Jiu Jitsu em cada detalhe - nossa seleção incomparável de produtos oferece tudo o que você precisa para elevar sua prática e aprimorar suas habilidades no mundo dessa arte marcial fascinante.
          </Typography>
        </Box>
          
            
        <Container sx={{
          display:"flex" ,
          flexFlow:"row" ,
          flexWrap:"wrap" ,
          gap: "2rem"        
        }}>
        { filmes && (
          filmes.map((filme, index) => (


            <Filme
              imagem={filme.imagem}
              titulo={filme.titulo}
              descricao={filme.descricao}
              categoria={filme.categoria}
              ano={filme.ano}
              duracao={filme.duracao}
              excluir={(e) => excluir(e, filme._id )}
              id = {filme._id}
            />

            
          ))
        )}
        </Container>
    </>
  );
}
export default App;
