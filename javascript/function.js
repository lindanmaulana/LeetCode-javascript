// basic function
function f(a, b) {
    const sum = a + b

    return sum
}

// anonymous function
const funcAnon = function(a, b) {
    const sum = a + b
    return sum
}

//IIFE function
const funcIIFE = (function(a, b) {
    const sum = a + b
    return sum
})()


// Function within function
function funcWithin() {
    function sum(a, b) {
        return a + b
    }

    return sum
}


// Clousure function
function funcClosure(a) {
    const sum = (b) => {
        return a + b
    }

    return sum
}

// Rest argument function
function funcRestArgument(...args) {
    const sum = args[0] + args[1]

    return sum
}