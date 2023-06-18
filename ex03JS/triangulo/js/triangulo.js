import { Dados } from "./index.js";

 export function Triangulo () {
 
var dados = Dados();

var Nome = dados[0]
var Peso = dados[1]
var Altura = dados[2]
var msg
  
    if(Nome == Peso && Peso == Altura && Nome == Altura) {
        console.log("Triângulo equilatero")
        msg =  'equilátero'

    } else if (Nome == Peso || Nome == Altura || Peso == Altura ) {
        console.log("isósceles")
        msg = ' isósceles'
    } else if (Nome != Peso && Nome != Altura && Altura != Peso) {
        console.log("escaleno")
        msg = 'escaleno'
    }else{
        console.log ("os lados não formam um triângulo")
        msg = 'os lados não formam um triângulo'
    }
    


    var variaveis = [Nome,Peso,Altura,msg]

      return variaveis
}