// for single line//
// const person = { name: "name-jack", address: "address-dhaka", phone: "1234" };
// const { name, address } = person;
// console.log(name, address);

//  for nested  object//

// const student = {
//   age: 24,
//   info: {
//     name: "sourav",
//     id: 1620,
//   },
// };
// const { name } = student.info;
// console.log(name);

// for array
const friends = ["aam", "jam", "lichu", "kola"];
const [chotoFriend, ...restfriends] = friends;
console.log(...restfriends);
