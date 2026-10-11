// MATHEMATICAL OPERATORS

var x = 17;
var y = 5;

var z = x + y;
console.log(`${x} + ${y} = ${z}`);

z = x - y;
console.log(`${x} - ${y} = ${z}`);

z = x * y;
console.log(`${x} * ${y} = ${z}`);

z = x / y;
console.log(`${x} / ${y} = ${z}`);

z = x % y;
console.log(`${x} % ${y} = ${z}`);

z = x ** y;
console.log(`${x} ** ${y} = ${z}`);

console.log(typeof x);

x = String(x);
console.log(typeof x);

console.log(x + " + " + String(y) + " = " + String(z));
console.log(x + String(y) + String(z));

firstname = "Morteza";

console.log(firstname + y);

// COMPARISON OPERATORS

x = 5;
y = 7;

z = x < y;
console.log(`${x} < ${y} => ${z}`);

z = x <= y;
console.log(`${x} <= ${y} => ${z}`);

z = x > y;
console.log(`${x} > ${y} => ${z}`);

z = x >= y;
console.log(`${x} >= ${y} => ${z}`);

z = x == y;
console.log(`${x} == ${y} => ${z}`);

z = x != y;
console.log(`${x} != ${y} => ${z}`);

z = x === y;
console.log(`${x} === ${y} => ${z}`);

z = "5" == 5;
console.log(`"5" == 5 => ${z}`);

z = "5" === 5;
console.log(`"5" === 5 => ${z}`);

// LOGICAl OPERATORS


z = true && true;
console.log(`true && true => ${z}`);

z = true && false;
console.log(`true && false => ${z}`);

z = false && true;
console.log(`false && true => ${z}`);

z = false && false;
console.log(`false && false => ${z}`);

z = true || true;
console.log(`true || true => ${z}`);

z = true || false;
console.log(`true || false => ${z}`);

z = false || true;
console.log(`false || true => ${z}`);

z = false || false;
console.log(`false || false => ${z}`);

z = !false;
console.log(`!false => ${z}`);

z = !true;
console.log(`!true => ${z}`);


z = !((true && (5 === "5")) || (false || !false));
console.log(z);

