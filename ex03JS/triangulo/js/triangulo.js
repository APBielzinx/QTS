import { Dados } from "./index.js";

 export function Triangulo () {
 
var dados = Dados();

var ladoA = dados[0]
var ladoB = dados[1]
var ladoC = dados[2]
var msg
  
    if(ladoA == ladoB && ladoB == ladoC && ladoA == ladoC) {
        console.log("Triângulo equilatero")
        msg =  'equilátero'

    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC ) {
        console.log("isósceles")
        msg = ' isósceles'
    } else if (ladoA != ladoB && ladoA != ladoC && ladoC != ladoB) {
        console.log("escaleno")
        msg = 'escaleno'
    }else{
        console.log ("os lados não formam um triângulo")
        msg = 'os lados não formam um triângulo'
    }
    


    var variaveis = [ladoA,ladoB,ladoC,msg]

      return variaveis
}