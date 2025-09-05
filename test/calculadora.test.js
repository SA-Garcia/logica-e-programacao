const { somarDoisNumeros } = require('../src/calculadora');
// ../voltar um diretório -- require (importar)
const { expect } = require('chai');

//const resultadoDaSoma = somarDoisNumeros (-8, -5); - teste manual sem uso de biblioteca.
//console.log(resultadoDaSoma); - teste manual sem uso de biblioteca.

describe('Testes da Função do grupo de Soma', function () {
    it('A função deve ser capaz de somar dois números positivos', function (){
       // Coleta o resultado da função
       const resultadoDaSoma = somarDoisNumeros(5,3);
       //Compara o resultado com o valor que você espera
       expect(resultadoDaSoma).to.equal(8);
    });

    it('A função deve ser capaz de somar um número postivo e um negativo', function (){
        // Coleta o resultado da função
       const resultadoDaSoma = somarDoisNumeros(50,-15);
       //Compara o resultado com o valor que você espera
       expect(resultadoDaSoma).to.equal(35);
    });
});