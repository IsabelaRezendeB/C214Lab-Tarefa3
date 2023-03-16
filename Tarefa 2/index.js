const Calculadora = require('./src/calculadora');

console.log("----- Cenários corretos -----\n");

let adicao = Calculadora.adicao(6, 2);
console.log("6 + 2 = " + adicao);

let subtracao = Calculadora.subtracao(6, 2);
console.log("6 - 2 = " + subtracao);

let multiplicacao = Calculadora.multiplicacao(6, 2);
console.log("6 x 2 = " + multiplicacao);

let divisao = Calculadora.divisao(6, 2);
console.log("6 / 2 = " + divisao);

let exponenciacao = Calculadora.exponenciacao(6, 2);
console.log("6 ^ 2 = " + exponenciacao);

console.log("\n----- Cenários de erro -----\n");

let adicaoErro = Calculadora.adicao(6, true);
console.log("6 + true = " + adicaoErro);

let subtracaoErro = Calculadora.subtracao(false, 2);
console.log("false - 2 = " + subtracaoErro);

let multiplicacaoErro = Calculadora.multiplicacao(6, "texto");
console.log("6 x texto = " + multiplicacaoErro);

let divisaoErro = Calculadora.divisao("texto", 2);
console.log("texto / 2 = " + divisaoErro);

let exponenciacaoErro = Calculadora.exponenciacao(6, 'l');
console.log("6 ^ l = " + exponenciacaoErro);