// arrays declaration
let numsArray: number[] = [1, 2, 3, 4];
let stringsArray: string[] = ['Pesho', 'Gosho', 'Tosho', 'Ivan'];
let combinedArray: (string | number)[] = [1, 'Pesho', 'Ivan', 2];

// access element by index
stringsArray[0] // Pesho
stringsArray[1] // Gosho
combinedArray[3] // 2
//console.log(stringsArray[0], stringsArray[1], combinedArray[3]);

// access array length
numsArray.length // 4
stringsArray.length // 4
combinedArray.length // 4   

// method map
let multiplyNums = numsArray.map((num: number) => num * 2); // [2, 4, 6, 8]
let mapNames = stringsArray.map((currName: string) => `Hello, ${currName}`);
let checkTypeOf =  combinedArray.map((element: number | string) => {
    if (typeof element === "number") {
        return element + 5;
    }
    else {
        return `Welcome ${element}`;
    }
});
// console.log(multiplyNums);
// console.log(mapNames);
console.log(checkTypeOf);