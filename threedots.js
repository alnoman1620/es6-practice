// add multiple value in an array normal method
const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);

// es6 method (spread operator/ threedots ...)
const ages4 = [12, 14, 16, 13, 17];
const ages5 = [15, 16, 12];
const ages6 = [25, 36, 22, 29];
const allAges2 = [...ages3, ...ages4, ...ages6, 5];
console.log(allAges2);

// finding max number using speard operator / threedots ...
const num = [20, 546, 21];
const maximum = Math.max(...num);
console.log(maximum);
