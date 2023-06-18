
import { IMC } from "../imc.js";

var dados = IMC()


var msg = dados[3]


export function elementos(){
      // cria um novo elemento div
     // e dá à ele conteúdo

     

  var divNova = document.createElement("div");
  var conteudoNovo = document.createTextNode`${Nome}, seu IMC é: ${resultado}. ${msg}`;

  divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

  // adiciona o novo elemento criado e seu conteúdo ao DOM
  var divAtual = document.getElementById("div1");
  document.body.insertBefore(divNova, divAtual);
}