// function that reverse a string//

function reverseStringLoop(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseStringLoop("world"));    // Output: "dlrow//

// Function that counts character//

function countCharacters(str) {
  return str.length;
}

console.log(countCharacters("hello"));           // Output: 5//


// Function that Capitalize Words//

function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}


console.log("\n=== CAPITALIZE WORDS ===");
console.log(capitalizeWords("hello world"));     // Output: "Hello World"//

// functionn that find maximum and minimum in an array//

function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}

function findMin(arr) {
  let min = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
  }
  return min;
}
 
// Sum of Array function//
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// function that Filter Array Based on a Condition //

function filterEven(arr) {
  return arr.filter(num => num % 2 === 0);
}

function filterGreaterThanTen(arr) {
  return arr.filter(num => num > 10);
}

// function that calculatenthe factorial of a number//

function factorial(n) {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 120

// Prime Number Check Function//

function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(17)); // true
console.log(isPrime(18)); // false

// Fibonacci Sequence Function//

function fibonacci(terms) {
    let seq = [];
    let a = 0, b = 1;

    for (let i = 0; i < terms; i++) {
        seq.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    return seq;
}

console.log(fibonacci(8));     // [0, 1, 1, 2, 3, 5, 8, 13]//