// class Parent {
//   constructor() {
//     this.fatherName = "Shahid";
//     this.motherName = "shuly";
//   }
// }
// class Child extends Parent {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }
// const baby = new Child("Sourav");
// const baby2 = new Child("rushfi");

// console.log(baby, baby2);

// using function in the class//
class Parent {
  constructor() {
    this.fatherName = "Shahid";
    this.motherName = "shuly";
  }
}
class Child extends Parent {
  constructor(name) {
    super();
    this.name = name;
  }
  getFullName() {
    return this.name + " " + this.fatherName + this.motherName;
  }
}
const baby = new Child("Sourav");

console.log(baby.getFullName());
