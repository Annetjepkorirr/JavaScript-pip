// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair
let arrr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

let sum = arrr1.map(function (num, index) { 
  return num + arr2[index];
 
}); 
console.log(sum)


// Get the sum of all elements in the following arrays.
let arr6=[1,2,3,4];
let arr7=[5,6,7,8];

let x =0;
for (let i = 0; i < arr6.length; i++) {
    x+=arr6[i]
  
}

for (let i = 0; i < arr7.length; i++) {
    x+=arr7[i]
    
}
   console.log(x) 


//Using a for loop print all even numbers up to and including n. Don’t include 0.
let num1=0;
for(let i=0;num1<22;i++){
    num1+=2
    console.log(num1)
}
let i=0;
while(i<22){
    i+=2
    console.log(i)
}
