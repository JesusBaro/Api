

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
