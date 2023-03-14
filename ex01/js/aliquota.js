import { Dados } from "./index.js";


var dados = Dados();

var nome = dados[0]
var cpf = dados[1]
var rendimento = dados[2]

export function aliquota(){

    
    let aliquota, valorPagar;

    if (rendimento <= 1903.98) {
        aliquota = 0;
        valorPagar = 0;
        alert("Você está livre desse imposto :)")
      } else if (rendimento <= 2826.65) {
        aliquota = 7.5;
        valorPagar = (rendimento - 1903.98) * 0.075;
      } else if (rendimento <= 3751.05) {
        aliquota = 15;
        valorPagar = (rendimento - 2826.65) * 0.15 + 142.80;
      } else if (rendimento <= 4664.68) {
        aliquota = 22.5;
        valorPagar = (rendimento - 3751.05) * 0.225 + 354.80;
      } else {
        aliquota = 27.5;
        valorPagar = (rendimento - 4664.68) * 0.275 + 636.13;
      }

      /*console.log(`Nome: ${nome}`)
      console.log(`CPF: ${cpf}`);
      console.log(`Rendimento anual: R$ ${rendimento}`);
      console.log(`Alíquota do imposto de renda: ${aliquota}%`);
      console.log(`Valor a pagar: R$ ${valorPagar.toFixed(2)}`);
*/
      var variaveis = [nome,cpf,rendimento,aliquota,valorPagar]

      return variaveis

}
