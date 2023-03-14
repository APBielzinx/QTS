import { Dados } from "./index.js";

 export function Triangulo () {
 
var dados = Dados();

var ladoA = dados[0]
var ladoB = dados[1]
var ladoC = dados[2]
var msg
  
    if(ladoA == ladoB && ladoB == ladoC && ladoA == ladoC) {
        console.log("Triângulo equilatero")
        msg = 'Triângulo equilatero'

    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC ) {
        console.log("Triângulo isosceles")
        msg = 'Triângulo isosceles'
    } else if (ladoA != ladoB && ladoA != ladoC && ladoC != ladoB) {
        console.log("Triângulo escaleno")
        msg = 'Triângulo escaleno'
    }else{
        console.log ("os lados não formam um triângulo")
        msg = 'os lados não formam um triângulo'
    }
    


    var variaveis = [ladoA,ladoB,ladoC,msg]

      return variaveis
}