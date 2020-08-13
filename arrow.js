// function doubleIt(num) {
//   return num * 2;
// }

// const doubleIt = function (num) {
//   return num * 2;
// };

// for single parameter
const doubleIt = (num) => num * 2;

const result = doubleIt(22);
console.log(result);

// for multiple parameter
const add = (x, y) => x + y;
const result2 = add(22, 28);
console.log(result2);

// for empty parameter
const give5 = () => 5;
const result3 = give5();
console.log(result3);

// for multiline arrow function
const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const resultMulti = sum * diff;
  return resultMulti;
};
const result4 = doMath(7, 5);
console.log(result4);
