const num1 = parseFloat(prompt('Enter a number: '));
const num2 = parseFloat(prompt('Enter another number: '));
const operator = prompt('Enter an operation you want to perform. For eg +-*/%');
let result = 0;
if (isNaN(num1) || isNaN(num2)){
    alert('This is not a number!');
}else if (operator == '+'){
    result = num1 + num2;
}else if (operator == '-'){
    result = num1 - num2;
}else if (operator == '*'){
    result = num1 * num2;
}else if (operator == '/'){
    result = num1 / num2;
}else if (operator == '%'){
    result = num1 % num2;
} 
document.write(num1 + operator + num2 + '=' + result);