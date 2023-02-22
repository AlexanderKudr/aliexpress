export const welcomePeople = <T> (x: T | string) => {
  // if (Array.isArray(x)) {
  if (x instanceof Array) {
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
};

// let something = "Hello"; //figured out, let showing the type of string
const somethingElse = "Hello"; //but const acutally showing the type value
// console.log(something); //hover to check the type
console.log(somethingElse); //hover to check the type

