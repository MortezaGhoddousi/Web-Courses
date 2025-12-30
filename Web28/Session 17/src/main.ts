var h: number = 4;
for (let i: number = 0; i < 3; i++) {
    console.log(i);
}

h = 5;
console.log(h);

let firstName: string;

firstName = "Morteza";

let isMale: boolean = true;

let myInfo: string[] = ["Morteza", "Ghoddousi"];

let anotherArray: [string, string, number, boolean];

anotherArray = ["Morteza", "Ghoddousi", 31, true];

let lastArray: any[];

let anArray: {
    firstName: string;
    lastName: string;
    age: number;
    isMale: boolean;
    weight?: number;
};

anArray = {
    firstName: "Morteza",
    lastName: "Ghoddousi",
    age: 31,
    isMale: true,
    weight: 83,
};

function addNumbers(a: number, b: number): number {
    return a + b;
}

let c: number = addNumbers(4, 5);

const subtractNumbers = (a: number, b: number): void => {
    console.log(a - b);
};

subtractNumbers(9, 2);
