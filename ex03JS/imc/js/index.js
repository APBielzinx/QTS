import { elementos } from "./componentes.js";
import { IMC } from "./imc.js";

export function Dados(){

    const urlParams = new URLSearchParams(window.location.search);
    

    var Nome = urlParams.get("Nome")
    var Peso = urlParams.get("Peso")
    var Altura = urlParams.get("Altura")
    
    console.log(Nome)
    
var dados = [
             Nome,
            Peso,
            Altura
           ]

         
return dados

}
Dados()
IMC()
elementos()