// - Example 1

const transform = (fn) => {
  let resultArray = [];

  return function (array) {
    for (let i = 0; i < array.length; i++) {
      resultArray.push(fn(array[i]));
    }

    return resultArray;
  };
};

const double = (x) => x * 2;

const doubledArray = transform(double)([1, 2, 3]);

console.log(doubledArray); // [2, 4, 6]

// - Example 2

const filterAndTransform = (fn) => {
  let filteredArray = [];

  for (let i = 0; i < arrayToBeFiltered.length; i++) {
    if (condition(arrayToBeFiltered[i])) {
      let y = transform(fn)([arrayToBeFiltered[i]])[0];
      filteredArray.push(y);
    } else {
      filteredArray.push(arrayToBeFiltered[i]);
    }
  }

  return filteredArray;
};

const double2 = (x) => x * 2;

const isEven = (x) => x % 2 == 0;

const arrayToBeFiltered = [1, 2, 3, 4, 5];

const filteredArray = filterAndTransform(double2, arrayToBeFiltered, isEven);

console.log(filteredArray); // [2, 4, 8]

// - Example 3

let array = [1, 2, 3, 4, 5];
let transformedArray = array.map((x) => (x % 2 === 0 ? x * 2 : x));

console.log(transformedArray); // [ 2, 4, 6, 8, 10 ]
