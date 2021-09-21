let readlineSync = require('readline-sync');

var num1, num2, total;

num1 = readlineSync.question("Digite um valor inteiro: ");
num2 = readlineSync.question("Digite outro valor inteiro: ");
total = parseInt(num1)+ parseInt(num2);


//Uso da Crase para fazer interpolação
console.log(`A Soma entre ${num1} e ${num2} é:  ${total}`);