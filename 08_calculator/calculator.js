const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  if (numbers.length === 0) {return 0};
	const numSum = numbers.reduce(number => {
    let sum = 0;
    for (let i=0; i < numbers.length; i++){
      sum += Number(numbers[i]);
    };
    return sum;
  });
  return numSum;
};

const multiply = function(numbers) {
  const product = numbers.reduce(number => {
    let parProd = 1;
    for (let i=0; i < numbers.length; i++){
      parProd *= Number(numbers[i])
    };
    return parProd;
  });
  return product;
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
  let fact = 1
	for (let i = num; i > 0; i--) {
    fact *=i
  }
  return fact
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
