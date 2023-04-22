// Write a function that takes an array of numbers as input and returns the sum of all the numbers.
let array = [10,34,67,78,20];
function numbers(array){
    let sum = 0
   for (let i = 0; i < array.length; i++) {
    sum+=array[i]
   }
   return sum
}
console.log(numbers(array));

// Write a function that takes an array of strings as input and returns a new array 
// with only the strings that have a length greater than 5.
function string (strings){
  return strings.filter(arr=>arr.length>5)
}
let strings = ["eclipsecross","tesla","vogue","rush","vit"];
console.log(string(strings));

// Write a function that takes two arrays as input and returns a new array 
// with the elements that are common to both arrays.
function nums(array1,array2) {
    let empty =[];
    for (let i = 0; i < array1.length; i++) {
       if (array2.includes(array1[i])) {
        empty.push(array1[i])
       }
      
    }
    return empty 
}
let array1=[70,34,46,30,50];
let array2 =[50,23,40,13,70];
let total = nums(array1,array2);
console.log(total);

// Write a function that takes an array of numbers as input and returns a new array 
// with the numbers sorted in ascending order.
function arrnums(number){
    if (number.length <=1) {
        return number 
    }
    let middle =Math.floor(number.length/2);
    let left = number.slice(0,middle);
    let right = number.slice(middle);
    return sort(arrnums(left),arrnums(right))

}
function sort(left,right){
    let emptyarr= []
    while (left.length && right.length) {
        if (left[0]<right[0]) {
            emptyarr.push(left.shift())
        }
        else{
            emptyarr.push(right.shift())
        }
    }
    return[...emptyarr,...left,...right]
}

let number =[5,10,13,17,8,2,30];
console.log(arrnums(number))

// Write a function that takes an array of numbers as input and returns 
// the average of all the numbers.
function averages(average1){
    let sum = 0
    for (let i = 0; i < average1.length; i++) {
       sum+=average1[i]
        
    }
    return sum/average1.length
}
let average1 =[10,45,23,12,56];
console.log(averages(average1))

// Write a function that takes an array of strings as input and returns a new array with only the 
// strings that start with the letter "a".
function findA(letterA){
    let getEmpty =[];
    for (let i = 0; i < letterA.length; i++) {
        if (letterA[i][0]==='a') {
            getEmpty.push(letterA[i])
        }
    }
    return getEmpty
}
const letterA=["apricot","mango","orange","avocado","kiwi","apple"];
console.log(findA(letterA))