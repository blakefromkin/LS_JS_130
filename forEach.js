// Emulate the forEach method

function forEach(arr, func, thisArg) {
  for (let val of arr) {
    func.call(thisArg, val, arr.indexOf(val), arr);
  }
}

// tests:
// Test 1: iteration and callback
let arr = [1, 2, 3, 4];
forEach(arr, value => console.log(value * value));

// Test 2: Optional thisArg
class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);

// Test 3: passing the callback function the optional values for idx and arr
["a", "b", "c"].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});
