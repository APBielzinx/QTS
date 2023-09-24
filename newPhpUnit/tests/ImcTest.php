<?php
namespace tests;

use PHPUnit\Framework\TestCase;
use app\libraries\Imc;

class ImcTest extends TestCase {

    public function testNome() {
        $Imc = new Imc("Maria Souza", 60.0, 1.65);

        $this->assertEquals("Maria Souza", $Imc->getNome());
    }

    public function testPeso() {
        $Imc = new Imc("Maria Souza", 60.0, 1.65);

        $this->assertEquals(60.0, $Imc->getPeso());
    }

    public function testAltura() {
        $Imc = new Imc("Maria Souza", 60.0, 1.65);

        $this->assertEquals(1.65, $Imc->getAltura());
    }
}
?>
