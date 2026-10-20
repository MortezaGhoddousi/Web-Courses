var info = {
    name: "Morteza Ghoddousi",
    age: 32,
    weight: 80,
    height: 1.86,
    isMale: true,
    sayHello: () => {
        console.log("this is a method of info object which is called!");
        return "hello";
    },
};

console.log(info.name);

var x = info.sayHello();
// var x = "hello";

console.log(info.sayHello());
// console.log("hello");

console.log(info);
info.age = 33;
console.log(info);

info = { ...info, skills: ["HTML", "CSS", "JS"] };
console.log(info);
