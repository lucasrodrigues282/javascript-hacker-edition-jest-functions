// Função que soma dois números
function somar(a, b) {
  return a + b;
}

// Função que subtrai dois números
function subtrair(a, b) {
  return a - b;
}

// Função que multiplica dois números
function multiplicar(a, b) {
  return a * b;
}

// Função que divide dois números, com verificação de divisão por zero
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }
  return a / b;
}

// Função que verifica se um número é par
function ehPar(num) {
  return num % 2 === 0;
}

// Exporta todas as funções para serem usadas nos testes
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
};

