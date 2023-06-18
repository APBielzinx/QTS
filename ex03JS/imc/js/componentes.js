import { IMC } from "./imc.js";

var dados = IMC()

export function elementos(){
      // cria um novo elemento div
     // e dá à ele conteúdo

     var Nome = dados[0]
     var msg = dados[3]


     let body = document.querySelector('body')

     
function criarTags(tag) {
  let novaTag = document.createElement(tag)
  return novaTag
}


let texto = new criarTags('h1') 
body.appendChild(texto)
texto.textContent = `Olá ${Nome} seu imc é ${msg}`

}