// day => 4 assinment
//1.print odd number inan array
const arr =[1,2,3,4,5,6,7,8,9];
const odd =arr.filter(Number =>{
    return Number % 2 !==0;
    
})
console.log(odd);
//
for(var i =0;i<array.length ; i++){
    if(array[i]%2!=0){
       console.log(array[i])
    } 
}
console.log(i)
//}
//2. convert all the String to title caps in a string array
const str = "foo bar baz";
const newStr = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(newStr);
  //end-here
});

//3. sum of all numbers in an array
var sum = [1, 2, 3].reduce(add, 0);
function add(a, b) {
  return a + b;
}
console.log(sum); // 6
  //console.log(userInput);

  //4. return all the prime numbers in an array.
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findPrimes(numbers)); // Output: [2, 3, 5, 7]

//5. return all the palindromes in an array.
function isPalindrome(n) {
    if (n < 10) return false;
    const str = String(n);
    return str === [...str].reverse().join('');
}

function sumArray(arr) {
  return arr
    .filter(isPalindrome)
    .reduce((a, b) => a + b, 0);
}


console.log(sumArray([12, 313, 11, 44, 9, 1]));
console.log(              313 +11+ 44);
Expan

//6. return median of two sorted array of the same size.
Input: ar1[] = {1, 12, 15, 26, 38}
ar2[] = {2, 13, 17, 30, 45}
//Output: 16
//Explanation:
//After merging two arrays, we get {1, 2, 12, 13, 15, 17, 26, 30, 38, 45}
//The middle two elements are 15 and 17
//The average of middle elements is (15 + 17)/2 which is equal to 16
 //7. remove duplicates from an array 
 let arr1 = ["apple", "mango", "apple", "orange", "mango", "mango"];
function removeDuplicates(arr) {
return arr.filter((item,
index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr1));
// 8. Rotate an array by k items

const rotateArray1 = function(nums, k) {

  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  return nums;
}
console.log(nums);
//2,1.Do the below programs in arrow functions.
//Print odd numbers in an array
console.log(Array.from({length: 100}, (_, i) => i).filter(n => n % 2));
//2,2.Convert all the strings to title caps in a string array
const str = "foo bar baz";
const newStr = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(newStr);
//2,3.Sum of all numbers in an array
const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum); // 6
//2,4.Return all the prime numbers in an array
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);
//2,5.Return all the palindromes in an array
function isPalindrome(n) {
  if (n < 10) return false;
  const str = String(n);
  return str === [...str].reverse().join('');
}

function sumArray(arr) {
return arr
  .filter(isPalindrome)
  .reduce((a, b) => a + b, 0);
}


console.log(sumArray([12, 313, 11, 44, 9, 1]));
console.log(              313 +11+ 44);























