var compose = function(functions) {
    return function(x) {
        let result = x

        for(let i = functions.length - 1; i >= 0; i--) {
          result = functions[i](result)
        }

        return result
    }
};

const functions1 = [x => x + 1, x => x * x, x => 2 * x]
const function1 = 4
const run1 = compose(functions1)
const runGo1 = run1(function1)
console.log(runGo1)


const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x]
const function2 = 1
const run2 = compose(functions2)
const runGo2 = run2(function2)
console.log(runGo2)