// var createCounter = function(n) {
//     return function() {
//         return n++
//     };
// };

// console.log(createCounter(2))

// /**
//  * @param {integer} init
//  * @return { increment: Function, decrement: Function, reset: Function }
//  */
// var createCounter = function (init) {
//     let result = init
//   return {
//     increment: () => {
//       return ++result
//     },
//     reset: () => {
//         const result = init
//       return result;
//     },
//     decrement: () => {
//       return --result
//     },
//   };
// };
// const soal1 = createCounter(5);
// console.log("soal 1");
// console.log({ inc: soal1.increment() });
// console.log({ inc: soal1.reset() });
// console.log({ inc: soal1.decrement() });
// // 6 5 4

// console.log("soal 2");
// const soal2 = createCounter(0);
// console.log({ inc: soal2.increment() });
// console.log({ inc: soal2.increment() });
// console.log({ inc: soal2.decrement() });
// console.log({ inc: soal2.reset() });
// console.log({ inc: soal2.reset() });
// // 1 2 1 0 0

// Tantangan 3
// Example 1:
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.

// Example 2:
// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.

// Example 3:
// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

var map = function (arr, fn) {
  let returnedArray = [];

  for (let i = 0; i < arr.length; i++) {
    returnedArray.push(fn(arr[i], i));
  }

  return returnedArray;
};

console.log(map([1,2,3], (num) => num + 1))


// Tantangan 4
// Example 1:
// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10

// Example 2:
// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]
// Explanation:
// fn can also accept the index of each element
// In this case, the function removes elements not at index 0

// Example 3:
// Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]
// Explanation:
// Falsey values such as 0 should be filtered out

var filter = function(arr, fn) {
    let returnedArray = []

    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            returnedArray.push(fn(arr[i], i))
        }
    }

    return returnedArray
};

console.log(filter([0, 10, 20, 30], (num) => {
    if(num > 10) {
        return num
    } else {
        return;
    }
}))

console.log(filter([1, 2, 3], (num) => {
    if(num === 1) {
        return num
    }
}))

console.log(filter([-2, -1, 0, 1, 2], (num => {
    if(num !== 0) {
        return num
    }
})))