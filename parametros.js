// parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
}

// console.log(soma(3, 4))

// a ordem dos parâmetros tem que ser observada!

function multiplica(num1 = 2, num2 = 3) {
    return num1 * num2;
}

console.log(multiplica(7, 50));
console.log(multiplica(soma(4, 5), soma(3, 3)));
console.log(multiplica(soma(4, 5)));