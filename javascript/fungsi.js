// var createCounter = function(n) {
//     return function() {
//         return n++
//     };
// };

 
// const counter = createCounter(10)
// console.log(counter()) // 10
// console.log(counter()) // 11
// console.log(counter()) // 12


function expect(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}



console.log(expect(5).toBe(5)) // true
console.log(expect(5).notToBe(5)) // throws "Equal"
