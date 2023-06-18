import { Dados } from "./index.js";

 export function IMC () {
 
var dados = Dados();

var Nome = dados[0]
var Peso = dados[1]
var Altura = dados[2]
var msg
var resultado = Peso/(Altura*Altura)

    if(resultado < 18.5) {
        console.log("Magreza")
        msg =  "Magreza"

    } else if ((resultado = 18.5) && (resultado <= 24.9)) {
        console.log("Normal")
        msg = ""
    } else if ((resultado = 25) && (resultado <= 29.9)) {
        console.log("Sobrepeso")
        msg = 'escaleno'
    } else if ((resultado = 30) && (resultado <= 39.9)) {
        console.log("Obesidade grau II")
        msg = 'escaleno'
    } else if ((resultado >= 40) ) {
        console.log("Obesidade grau III")
        msg = 'escaleno'
    }else{
        console.log ("Não foi possível calcular")
        msg = 'Não foi possível calcular'
    }
    


  

    


    var variaveis = [Nome,Peso,Altura,msg]

      return variaveis
}