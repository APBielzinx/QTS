import { IMC } from "./imc.js";

var dados = IMC()

export function elementos(){
      // cria um novo elemento div
     // e dá à ele conteúdo

     var Nome = dados[0]
     var msg = dados[3]
     var imc = dados[4]


     let body = document.querySelector('body')

     
function criarTags(tag) {
  let novaTag = document.createElement(tag)
  return novaTag
}


let nomeNaTela = new criarTags('h1') 
body.appendChild(nomeNaTela)
nomeNaTela.textContent = `Olá, ${Nome}`
nomeNaTela.classList = "nomeNaTela"

let imcNaTela = new criarTags('h1') 
body.appendChild(imcNaTela)
imcNaTela.textContent = `. Seu imc é: ${imc.toFixed(2)}`

let msgNaTela = new criarTags('h1') 
body.appendChild(msgNaTela)
msgNaTela.textContent = `. Sua classificação é:  ${msg}`

}