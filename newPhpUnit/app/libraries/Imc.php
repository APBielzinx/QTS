<?php
namespace app\libraries;

class Imc {
    private string $nome;
    private float $peso;
    private float $altura;

    public function __construct(string $nome, float $peso, float $altura) {
        $this->nome = $nome;
        $this->peso = $peso;
        $this->altura = $altura;
    }

    public function setNome(string $nome) {
        $this->nome = $nome;
    }

    public function getNome() : string {
        return $this->nome;
    }

    public function setPeso(float $peso) {
        $this->peso = $peso;
    }

    public function getPeso() : float {
        return $this->peso;
    }

    public function setAltura(float $altura) {
        $this->altura = $altura;
    }

    public function getAltura() : float {
        return $this->altura;
    }
}
?>
