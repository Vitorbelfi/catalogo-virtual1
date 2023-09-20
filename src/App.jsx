import { Avatar, Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Produto from "./components/Filme";
import MenuResponsivo from "./components/MenuResponsivo";
import Body from './components/body.module.css';
import img2 from './kimono.webp';
import img3 from './kimono2.webp';
import img4 from './kimono3.webp';
import img5 from './kimono4.webp';
import faixabranca from './fb jiu.jpg';
import faixaazul from './fa jiu.jpg';
import faixaroxa from './fr jiu.jpg';
import faixamarrom from './fm jiu.jpg';
import faixapreta from './fp jiu.jpg';
import kimonoinfantil1 from './kimonoinfantil1.webp';
import kimonoinfantil2 from './kimono infantil2.jpg';
import kimonoinfantil3 from './kimono infantil3.webp';
import kimonoinfantil4 from './kimono infantil5.webp';
import womans1 from './womans kimono1.webp';
import womans2 from './womans2.webp';
import womans3 from './womans3.webp';
import ultimokimono from './ultimokimono.webp';



function App() {

    const [produto, setProduto] = useState();
    const [erro, setErro ] = useState();

    useEffect(() => {

      const usuario = localStorage.getItem("usuario");

      fetch(process.env.REACT_APP_BACKEND + "produtos/" + usuario, {
        headers: {
            'Content-Type': 'application/json'
        }
        
    })
    .then((resposta)=>resposta.json())
    .then( ( json ) => {setProduto(json)})

    .catch((erro)=>{setErro(true)})

    },[])

      function excluir(evento, id) {
        evento.preventDefault();
        fetch(process.env.REACT_APP_BACKEND + "produtos",{
          method: "DELETE",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          id:id,
          usuario: localStorage.getItem("usuario")
          
        
               
              })
      })
      .then((resposta)=>resposta.json())
      .then((json)=>{
          const novaLista = produto.filter((produto) => produto._id !==id) ;
          setProduto( novaLista );
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
                  <img src={ ultimokimono} style = {{width:240, height:300, }} /> <br />
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
                <Typography variant="h5" align="center" fontWeight='bold' ><br />
                WOMANS KIMONOS
              </Typography><br />
              <Container maxWidth="large" >
                <Box display="flex" justifyContent="center" gap="20px" textAlign="center" >
                  <Box fontSize="18px" fontWeight="bold" >
                  <img src={ womans1} style = {{width:240, height:300,  }} /> <br />
                  <span>Comp 450 V6 Gi - Black</span>
                  </Box>
                  <Box fontSize="18px" fontWeight="bold" >
                  <img src={ womans2} style = {{width:240, height:300, }} /> <br />
                  <span>The ONE Jiu Jitsu Gi - Blue </span>
                  </Box>
                  <Box fontSize="18px" fontWeight="bold" >
                  <img src={ womans3} style = {{width:240, height:300, }} /> <br />
                  <span>Comp 450 V6 Gi - White</span>
                  </Box>
                  <Box fontSize="18px" fontWeight="bold" >
                  <img src={ img5} style = {{width:240, height:300, }} /> <br />
                  <span>The ONE Womens Jiu Jitsu </span>
                  </Box>
                </Box>
        </Container>


                
              </Container>
        <Typography variant="h5" align="center" fontWeight='bold' ><br />
                FAIXAS
            </Typography><br />
        <Container>
          <Box display="flex" justifyContent="center" gap="48px" textAlign="center">
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
          <Typography variant="subtitle2"  color={""}>
          <img src="https://www.kingz.com/cdn/shop/files/2_220x.png?v=1614315537"  style = {{width:250, height:80,  }} /> <a style={{ color: "black", textDecoration: "none", fontSize:40, marginLeft:150,  }} href="http://localhost:3000/Login2">''Para muitos o chão é o fim, para nós é só o começo''.</a>     <p></p> 
           <img src="https://www.kingz.com/cdn/shop/files/Kingz-New-Tank-Tops-Desktop-Website-Banner_2000x_9488f099-a5c6-4433-8ff3-4e9282be4b79_2000x.png?v=1668801775" style = {{width:1400, height:500,  }} />
          </Typography>
        </Box>
          
            
        <Container sx={{
          display:"flex" ,
          flexFlow:"row" ,
          flexWrap:"wrap" ,
          gap: "2rem"        
        }}>
        { produto && (
          produto.map((produto, index) => (


            <Produto
              imagem={produto.imagem}
              titulo={produto.titulo}
              descricao={produto.descricao}
              categoria={produto.categoria}
              ano={produto.ano}
              duracao={produto.duracao}
              excluir={(e) => excluir(e, produto._id )}
              id = {produto._id}
            />

            
          ))
        )}
        </Container><br /><br />
        <Box sx={{p:6}} component= "footer">
          <Typography variant="subtitle2" align="center" color={"gray"}>
          Copyright © 2023.<p></p>
          Descubra a excelência do Jiu Jitsu em cada detalhe - nossa seleção incomparável de produtos oferece tudo o que você precisa para elevar sua prática e aprimorar suas habilidades no mundo dessa arte marcial fascinante.
          </Typography>
        </Box>
    </>
  );
}
export default App;
