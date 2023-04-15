// Write a function named reverseString that takes a string as its argument and returns 
// the string in reverse order. 
const word="Hello";
function reverseString(word){
    console.log(word.split('').reverse().join(''))
}
reverseString(word)

// Write a function that takes an array of numbers multiplied by 4
const num = [1,3,4,5]
function numbers(num){
    console.log(num.map(function(y){
        return y*4
    }))
}
numbers(num)

// Write a function that takes a string as input and returns a new string 
// with the words sorted alphabetically.

const str = "codingfun";
function words(str){
    console.log(str.split(``).sort().join(``))
}
words(str)

//Write a function that takes an array of numbers as input and returns
//the index of the first number that is divisible by 3. If no number
//is divisible by 3, the function should return -1.
let arr=[17,14,9,33,47,23]
function findFirstDivisible(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            return i;
        }
    }
    return -1;
}
console.log(findFirstDivisible(arr))

//Write a function that takes an array of numbers as input and returns
//the index of all numbers that is divisible by 3. If no number
//is divisible by 3, the function should return -1.
let nums =[23,15,9,45,12,11]
function IndicesDivisibleBy3(nums) {
    const indices = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 3 === 0) {
            indices.push(i);
        }
    }
    return -1
}
console.log(IndicesDivisibleBy3(nums))
