//Functions
function displayPersonalData(name: string, age: number): string {
    return `${name} is ${age} years old.`
}

//console.log(displayPersonalData("Desi", 99));

const personalData: string = displayPersonalData("She", 25);
//console.log(personalData);

function devideNums(numOne: number, numTwo: number): number {
    return numOne / numTwo;
}
devideNums(10, 5);
devideNums(50, 5);
devideNums(100, 5);

//arrow functions
const sumNums = (a: number, b: number) => a + b;
//console.log(sumNums(3,2));

//optional parameters
function greeting(name: string, age?: number) {
    if (age) {
        console.log(`${name} is ${age} years old.`)
    }
    console.log(`Hi I am ${name}`);
}

// greeting("Todor");
// greeting("Trifon", 20);

//default parameters
function substractNums(numOne: number = 10, numTwo: number = 5) {
    console.log(numOne - numTwo);
}
// (substractNums(50));
// (substractNums(30));

// Function with parameter of union type
function printID(id: string | number) {
    console.log(`Id - ${id} is type of ${typeof id}`)
}

printID("#10");
printID(10);

