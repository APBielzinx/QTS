import { elementos } from "./componentes.js";
import { Triangulo } from "./triangulo.js";

export function Dados(){

    const urlParams = new URLSearchParams(window.location.search);
    

    var ladoA = urlParams.get("ladoA")
    var ladoB = urlParams.get("ladoB")
    var ladoC = urlParams.get("ladoC")
    
    console.log(ladoA)
    
var dados = [
            ladoA,
            ladoB,
            ladoC
           ]

         
return dados

}
Dados()
Triangulo()
elementos()