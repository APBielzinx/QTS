<?php
namespace tests;

use PHPUnit\Framework\TestCase;
use app\libraries\ImpostoDeRenda;

class ImpostoDerendaTest extends TestCase {

    public function testNome() {
        $declararacao = new ImpostoDeRenda("João Silva", "123.456.789-00", 50000.0);

        $this->assertEquals("João Silva", $declararacao->getNome());
    }

    public function testCpf() {
        $declararacao = new ImpostoDeRenda("João Silva", "123.456.789-00", 50000.0);

        $this->assertEquals("123.456.789-00", $declararacao->getCpf());
    }

    public function testRendimento() {
        $declararacao = new ImpostoDeRenda("João Silva", "123.456.789-00", 50000.0);

        $this->assertEquals(50000.0, $declararacao->getRendimento());
    }
}
?>
