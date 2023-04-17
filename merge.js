// //Given an array of numbers,sort the array in a
// // descending order
function divide(arr){
    if (arr.length<=1) {
        return arr
    }
    let middle= Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    return mergeSort(divide(left),divide(right))
}
function mergeSort(left,right){
    let emptyArray=[]
    while (left.length && right.length) {
        if (left[0]>right[0]) {
          emptyArray.push(left.shift())  
        }
        else{
            emptyArray.push(right.shift())
        }
    }
    return[...emptyArray,...left,...right];
}

let arr =[15,39,20,12,7,9,5];
console.log(divide(arr));

// Write a function that takes in the following array and sorts it using merge sort
//let num =[20,62,47,19,38,67]

function merge(num){
    if(num.length<=1) {
      return num
    }
  
  
  let middle=Math.floor(num.length/2);
  let left=num.slice(0,middle);
  let right=num.slice(middle);
  return sortedArray(merge(left),merge(right))
  }
  function sortedArray(left,right){
    let emptyArray=[]
    while (left.length && right.length) {
      if (left[0]<right[0]) {
        emptyArray.push(left.shift())
      }
      else{
        emptyArray.push(right.shift())
      }
    }
    return[...emptyArray,...left,...right]
  }
  let num =[20,62,47,19,38,67];
  console.log(merge(num))