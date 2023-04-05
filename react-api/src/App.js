//API E USESTATE

//aula 20 
//API 

// https://codesandbox.io/s/api-noite-20-03-11280f?file=/src/style.js

import React, { Component } from "react";
// import * as S from "./style.js";
//axios permite uma interaçao com serviço 
//npm install axios 
//importar biblioteca axios 
import axios from "axios";

// Método .create   acessa o link da biblioteca com o metoddo create, serve para guardar a url da base da api que estamos usando
const Api = axios.create({
baseURL : "https://rickandmortyapi.com/api/character"
});

class App extends Component {

    state ={
        informacoes: []
    }

//função para trazer as informações da api
// função asincrona - async - que não ocorre ou se efetiva ao mesmo tempo
//await - aguarda, espera 
//get - pegar 
//uma funçao assincrona vai esperar pela resposta da promessa..
//promessa - promessa de que algo ira acontecer,dando certo ou não..


    PegarPersonagem = async () =>{
        const resposta = await Api.get();
        //essa varia roda o await que vai esperar a promessa ser retornada, ou seja, promessa = api.

        console.log(resposta.data.results); //, ativa a função pra ver se ta funcionando. mostrando os dados da api

        // nova variavel que acessa e mapeia função  onde estao guardados os personagem
        // acessa a resposta
        const itens = resposta.data.results.map((item) =>{
            return{
                ...item
                //spread ... : usado quando todos so objetos presicam ser incluidos em um novo array (lista)
            }
        })
        //trazendo a Api para dentro da array informaçoes 
        this.setState({
            informacoes : itens //nome ds conts que pega os objetos array precisam ser incluídos em um ano
            // manipulando  o estado da array q vai receber os itens da api

        })
    };
  
    componentDidMount(){
        this.PegarPersonagem() //ativando a função e deixando ela sempre pre renderizada
    };


  render() {
    return (
      <>
      {/* <S.GlobalStyle/> */}
       <h1>oi</h1>
       {/* mapeamento das informaçoes e pegar o qeu queremos */}

       <div>
        {this.state.informacoes.map((item) =>(
            // o que for mapeado tem que ser envolvido por uma div 
         <div> 
            <h2> {item.name}</h2>
                <img src= {item.image} alt = ""/>
                <h3>{item.status}</h3>
                <h3>{item.gender}</h3>
                <h3>{item.species}</h3>

         </div>
    
        ))}
       </div>
      </>
    );
  }
}

export default App;



//ESSE CONTEUDO ESTA NA AULA3
//AULA Use State

// import React, {useState} from "react";
// import jesus from "./jesus.JPG";
// import baro from "./baro.JPG";
// import styled from "styled-components";

// export default function App(){
//  //sintax
//  const[titulo,setTitulo]  = useState("Boa noite");
// //  ternário sintaxe
// // condição ? caso verdade : caso falso  

// //Essa const cria um state (refri) e atualiza o estado dessa const com set (setRefri), useState é o método que gerenciam essa atualizaçao
// // os parenteses são os parametros onde indicamos o valor inicial
// const [refri,setRefri] = useState(baro); //valor inicial
 
//  const Div1 =styled.div`
//  border:solid black;
//  width:40vw;
//  display:flex;
//  justify-content:space-evenly;
//  `

// const ImgPrincipal =styled.img`
// width:20vw;
// `
// const ImgTransicao =styled.img`
// width:10vw;
// `
// const Main = styled.main`
// height:100vh;
// background-color:purple;
// display:flex;
// justify-content:space-evenly;
// flex-direction:column;
// align-items:center;`


//     return(
//         <Main>
//         <h1>{titulo} </h1>
//          {/* //lógica simples em uma linha */}
//         <button onClick={()=>{setTitulo("oi")}}> atualizando </button>
//         <button onClick={()=>{setTitulo("cansado")}}> atualizando para cansado  </button>

//         {/* ternario */}
//         <button onClick={()=>{setTitulo(titulo === "Boa Noite"? "boa tarde" :"oi")}}> atualizandopara ternario </button>
       
//         {/* imagem principal */}
//         <ImgPrincipal  src={refri} alt=""/>
//         <ImgPrincipal  src={refri} alt=""/>

//         {/* imagens que com uma fnçao anonima atualizam o estado de cada */}
//         <Div1>
//         {/* atualizando o state diretamente com o evento de click nas imagens  */}
//         <ImgTransicao onClick={()=>{setRefri(jesus)}} src={jesus} alt=""/> 
//         <ImgTransicao onClick={()=>{setRefri(baro)}} src={baro} alt=""/>

//        { <ImgTransicao onClick={()=>{setRefri(baro)}} src={baro} alt=""/>&&<Main></Main>}

//         </Div1>
   
//         </Main>
//     )
// }


// //  {this.state.ligado && 
// //             <BoxBtn >oi</BoxBtn>}