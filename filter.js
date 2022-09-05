// Emulate the basics of the filter method

function filter(arr, func) {
  let newArr = [];
  for (let val of arr) {
    if (func(val, arr.indexOf(val), arr)) newArr.push(val);
  }
  return newArr;
}


// Tests:
let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]



// Now emulate filter using the reduce method
function filterReduce(arr, func) {
  return arr.reduce((accum, val) => {
    if (func(val)) {
      accum.push(val);
      return accum;
    }
  }, []);
}
