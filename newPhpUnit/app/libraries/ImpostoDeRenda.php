<?php
namespace app\libraries;

class ImpostoDeRenda {
    private string $nome;
    private string $cpf;
    private float $rendimento;

    public function __construct(string $nome, string $cpf, float $rendimento) {
        $this->nome = $nome;
        $this->cpf = $cpf;
        $this->rendimento = $rendimento;
    }

    public function setNome(string $nome) {
        $this->nome = $nome;
    }

    public function getNome() : string {
        return $this->nome;
    }

    public function setCpf(string $cpf) {
        $this->cpf = $cpf;
    }

    public function getCpf() : string {
        return $this->cpf;
    }

    public function setRendimento(float $rendimento) {
        $this->rendimento = $rendimento;
    }

    public function getRendimento() : float {
        return $this->rendimento;
    }
}
?>
