// 1

const expect = (a) => {
    let hasil;

    return {
        toBe: (b) => {
            switch(a === b) {
                case true:
                    hasil = true
                break
                default:
                    throw new Error("Not Equal")
            }

            return hasil
        },

        notToBe: (b) => {
            switch(a !== b) {
                case true:
                    hasil = true
                break;
                default:
                    throw new Error( "Equal")
            }

            return hasil
        }
    }
}


// 2
const removeFalsy = (obj) => {
    if(Array.isArray(obj)) {
        return obj.map(item => removeFalsy(item)).filter(n => n > 1)
    } else if(obj !== null && typeof obj === "object") {
        const newObj = {}
        for(key in obj) {
            console.log(obj[key])
        }

    } else {
        return obj
    }
}

console.log(removeFalsy({nama: "lindan", kelas: "Ti"}))


const data = [
  { id: 1, name: "Dian", email: "dian@email.com" },
  { id: 2, name: null, email: "budi@email.com" },
  { id: null, name: null, email: "lindan" }
];

console.log(data.filter(n => Boolean(n.id)))

const obj = { id: 1, name: "Dian", email: "dian@email.com" }
console.log(obj['id'])

// 3

const createCounter = (init) => {
    let result = init
  return {
    increment: () => {
      result++

      return result;
    },

    decrement: () => {
      result--

      return result;
    },

    reset: () => {
        result = init
        return result
    },
  };
};

const counter = createCounter(0);
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());


// 4
const map = function(arr, fn) {
    return arr.map((value, index) => fn(value, index))
};

const plusone = (n) => {
    return n + 1
}

const plusIn = (n, i) => {
    return n + i
}

const constant = () => {
    return 42
}
console.log(map([1,2,3], plusone))
console.log(map([1,2,3], plusIn))
console.log(map([42,42,42], constant))

// soal 5 Filter Elements from Array
const filter = function (arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  return result;
};

const arr = [0, 10, 20, 30];
const greaterThan10 = (n) => {
  return n > 10;
};

const arr2 = [1, 2, 3]
const firstIndex = (n, i) => {
    if(i === 0) return n
}

const arr3 = [-2, -1, 0, 1, 2]
const plusOne = (n) => {
    return n !== 0
}

console.log(filter(arr, greaterThan10));
console.log(filter(arr2, firstIndex));
console.log(filter(arr3, plusOne));

// soal 6 Array Reduce Transformation
const reduce = function(nums, fn, init) {
    let result = init

    for(const num of nums) {
      result = fn(result, num)
    }

    return result
};

const init1 = 0
const nums1 = [1,2,3,4]
const fn1 = (init, valueInArray) => {
  return init + valueInArray
}

const init2 = 100
const nums2 = [1,2,3,4]
const fn2 = (init, valueInArray) => {
  return init + valueInArray * valueInArray
}

const init3 = 25
const nums3 = []
const fn3 = (init, valueInArray) => {
  console.log("fn3 di jalankan")
  return init + valueInArray
}

const result1 = reduce(nums1, fn1, init1)
const result2 = reduce(nums2, fn2, init2)
const result3 = reduce(nums3, fn3, init3)
console.log({result1})
console.log({result2})
console.log({result3})