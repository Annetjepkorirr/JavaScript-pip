// Write a function that takes a string as an argument and returns the string with
//  the first letter of each word capitalized.

function takeWords(wording){
    return wording.map(arr =>{
        const firstCapitalize =arr.charAt(0).toUpperCase();
        const restLetter = arr.slice(1).toLowerCase()

        return firstCapitalize+restLetter
    }) 
}
let wording =["banny","sanny"]
console.log(takeWords(wording))

// Write a function that takes an array of strings as an argument and returns a new array 
// with all the strings converted to uppercase.
function convertUppercase(names){
    let empty = []
    for (let i = 0; i < names.length; i++) {
        empty.push(names[i].toUpperCase())   
    }
    return empty
 
}
let names =["mart","mary","jane"];
console.log(convertUppercase(names));


//Write a function that takes a string as an argument and returns the length of the string.
function word(words){
    return words.length
}

let words ="student";
console.log(word(words));

// Write a function that takes an array of numbers as an argument and
//  returns the sum of all the numbers in the array.
function addNumbers(arrNum1){
    let y = 0;
    for (let i = 0; i < arrNum1.length; i++) {
        y+=arrNum[i]
        
    }
    return y
}
let arrNum1 =[10,20,30,40,50,60];
console.log(addNumbers(arrNum1));

function addNumbers(arrNum){
    let y = 0;
    arrNum.forEach(element => {
        y+=element
    });
    return y
}
let arrNum= [10,202,30,40,50,60]
console.log(addNumbers(arrNum))



// Write a function that takes two numbers as arguments and returns their sum.
function numbers(arr){
    let x =0;
    for (let i = 0; i < arr.length; i++) {
       x+=arr[i]
    }
    return x
}
let arr =[20,30];
console.log(numbers(arr));


// Write a function that takes an array of numbers as an argument and returns a 
// new array with all the even 
// numbers from the original array.
function findEven(evenNum){
    let emptyArr =[]
    for (let o = 0; o < evenNum.length; o++) {
        if (evenNum[o]%2===0) {
            emptyArr.push(evenNum[o])
        }
    }
    return emptyArr
}
let evenNum=[1,2,3,4,5,6,7];
console.log(findEven(evenNum));

let p= [1,2,3,,4,5,6,7,8,9,10];
let x= p.filter(evenN)
function evenN(even){
    return even%2 ===0;
}
console.log(x);
// Write a function that takes an array of strings as an argument and returns a
//  new array with all the strings sorted in alphabetical order.
function identify(identstr){
    return identstr.sort()
}
let identstr =["jane","rita","lana","para"]
console.log(identify(identstr));



// Write a function that takes a number as an argument and returns true
//  if the number is even and false if it is odd.
function args(numss){
    for (let n = 0; n < numss.length; n++) {
        if (numss[n]%2===0) {
            return true
        }
        else{
            return false
        }
        
    }
}
let numss = [3];
console.log(args(numss))

// Write a function that takes an array of numbers as an argument and returns the 
// average of all the numbers in the array.
function openNum(average){
    let sum1=0;
    for (let i = 0; i < average.length; i++) {
        sum1+=average[i]
        
    }
    return sum1/average.length
}
let average = [1,2,3,4,5,6,7,8,9];
console.log(openNum(average));

// Write a function that takes an array of numbers as an argument and returns a 
// new array with all the numbers in the array squared.
function numbses(nemsis){
    let r =[];
    for (let i = 0; i < nemsis.length; i++) {
        r.push(nemsis[i]**2)
    
    }
    return r
}
let nemsis = [10,20,30,40];
console.log(numbses(nemsis));

// Write a function that takes an array of strings as an argument and returns a new array with all 
// the strings that have a length of 4 or greater.
function arrString(namess){
    let newArr= [];
    for (let i = 0; i < namess.length; i++) {
        if (namess[i].length >= 4) {
            newArr.push(namess[i])
        } 
        
    }    
    return newArr;
}
let namess= ["lina","annette","jane","marlynn","tin"];
console.log(arrString(namess))





