function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if( num % i == 0) {
        return false
    }
  }
return num > 1
}

// isPrime - Returns true or false, indicating whether the given number is prime.
console.warn('1 => isPrime')
console.log(isPrime(0))                          // false
console.log(isPrime(1))                          // false
console.log(isPrime(17))                         // true
console.log(isPrime(10000000000000))             // false


function factorial(num) {
  if (num == 0) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

// factorial - Returns a number that is the factorial of the given number.
console.warn('2 => factorial')
console.log(factorial(0))                        // 1
console.log(factorial(1))                        // 1
console.log(factorial(6))                        // 720


function fib(num) {
   if (num < 2) {
     return num
   }
   return fib (num - 1) + fib (num - 2)
}

// fib - Returns the nth Fibonacci number.
console.warn('3 => fib')
console.log(fib(0))                              // 0
console.log(fib(1))                              // 1
console.log(fib(10))                               // 55
console.log(fib(20))                             // 6765


function isSorted(arr) {
  let num = arr.length - 1;
  return arr.every((_,i) => ((i < num) ? (arr[i] <= arr[i + 1]) : true));
}

// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
console.warn('4 => isSorted')
console.log(isSorted([]))                        // true
console.log(isSorted([-Infinity, -5, 0, 3, 9]))  // true
console.log(isSorted([3, 9, -3, 10]))            // false

function reverse(arr) {
  let str = ''
  let i = arr.length - 1
  for (i; i >= 0; i--) {
    str += arr[i]
  }
  return str
}

// reverse - Reverses the given string (yes, using the built in reverse function is cheating).
console.warn('5 => reverse')
console.log(reverse(''))                         // ''
console.log(reverse('abcdef'))                   // 'fedcba'

function indexOf(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elem) {
      return i
    }
  }
  return -1
}
//indexOf - Implement the indexOf function for arrays.
console.warn('6 => indexOf')
console.log(indexOf([1, 2, 3], 1))               // 0
console.log(indexOf([1, 2, 3], 4))               // -1

function isPalindrome(str) {
  let normalizeStr = str.replace(/[\W_]/g, '').toLowerCase()
  let reverseStr = normalizeStr.split('').reverse().join('')
  return normalizeStr === reverseStr;
}

// isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
console.warn('7 => isPalindrome')
console.log(isPalindrome(''))                                // true
console.log(isPalindrome('abcdcba'))                         // true
console.log(isPalindrome('abcd'))                            // false
console.log(isPalindrome('A man a plan a canal Panama'))     // true


function missing(array) {
  let max = Math.max(...array)
   for (let i = 1; i < max; i++) {
       if (array.indexOf(i) === -1) {
           return i
       }
   }
}

// missing - Takes an unsorted array of unique numbers (ie. no repeats)
// from 1 through some number n, and returns the missing number in the
// sequence (there are either no missing numbers, or exactly one missing number).
// Can you do it in O(N) time? Hint: There’s a clever formula you can use.

console.warn('8 => missing')
console.log(missing([]))                         // undefined
console.log(missing([1, 4, 3]))                  // 2
console.log(missing([2, 3, 4]))                  // 1
console.log(missing([5, 1, 4, 2]))               // 3
console.log(missing([1, 2, 3, 4]))               // undefined


function isBalanced (str) {
  let num1 = 0
  let num2 = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') num1++
    if (str[i] === '}') num2++
  }
  if (str.indexOf('{') < str.indexOf('}') && num1 === num2 && str.indexOf('{}')) {
    return true
  }
  return false
}

// isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
console.warn('9 => isBalanced')
console.log(isBalanced('}{'))                      // false
console.log(isBalanced('{{}'))                     // false
console.log(isBalanced('{}{}'))                    // false
console.log(isBalanced('foo { bar { baz } boo }')) // true
console.log(isBalanced('foo { bar { baz }'))       // false
console.log(isBalanced('foo { bar } }'))           // false
