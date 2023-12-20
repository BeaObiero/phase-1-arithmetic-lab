//1)
num1 = 62
num2 = 1
multiply = num1 * num2
console.log(multiply);

//2)
function generateRandomNumber() {
    return Math.ceil(Math.random() * 10);
}
console.log(generateRandomNumber());


//3)
const num3 = 25
const num4 = 7
function calculateMod(num3,num4) {
    return num3 % num4; 
}
console.log(calculateMod(num3,num4));


//4)
let numbers = [15,5,10,20,1]
function findMaxNumber (numbers) {
    return Math.max(...numbers)
}
console.log(findMaxNumber(numbers));
