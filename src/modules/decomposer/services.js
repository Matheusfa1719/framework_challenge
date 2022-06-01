function isPrimo(numero) {
  for(let i = 2; i <numero; i++)
    if(numero % i === 0) {
      return false;
    }
  return numero > 1;
}

export const getDivisores = (number) => {
  const divisores = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisores.push(i);
    }
  }
  return divisores;
};

export const getDivisoresPrimos = (divisores) => {
  const primos = divisores.filter((number) => {
    if (isPrimo(number)) {
      return number;
    }
  });
  return primos;
};



