let score = undefined;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// if we want to convert to a number by using Number(score)
// "33" => 33
// "33abc" => NaN
// true => 1, false => 0;

let isLoggedIn = "Zarnab";

let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn);

// 1 => true;
// 0 => false;
// "" => false;
// "Zarnab" => true;

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(typeof stringNumber);


