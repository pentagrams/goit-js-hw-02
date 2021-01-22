let input;
const numbers = [];
let total = 0;

const addArray = function (number) {   
   while(input !== null){
        input = prompt();
        numbers.push(Number(input));
    }
    return numbers;
  }

const sumArray = function (array) {   
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }
    
    return total;
}
addArray()
sumArray(numbers)
console.log(total)
