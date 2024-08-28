const numbers = [45, 69, 25, 6, 4, 558, 46, 12]
// old 
let array = [];
let result;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    result = element * 2;
    array.push(result)
}
console.log(array);

// new system

const big = numbers.map(number => number * 2)
console.log(big);