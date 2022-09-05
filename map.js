// Emulate the map method

function map(arr, func, thisArg) {
  let newArr = [];
  for (let val of arr) {
    newArr.push(func.call(thisArg, val, arr.indexOf(val), arr));
  }
  return newArr;
}

// Tests:
let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]


// Now emulate map using the reduce method:
function mapReduce(arr, func) {
  return arr.reduce((accum, val) => {
    accum.push(func(val));
    return accum;s
  }, []);
}
