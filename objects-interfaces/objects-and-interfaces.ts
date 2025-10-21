// Interface declaration
interface Car {
    type: string;
    model: string;
    color: string;
    horsePower: number;
}

//Object declaration
const car: Car = {
    type: "Subaru",
    model: "Crosstrek",
    color: "blue",
    horsePower: 160,
};
//console.log(car);

// Interface person object
interface Person {
    name: string;
    lastName: string;
    address: string;
    age: number;
    hobbies: string[];
    greeting: () => string; 
}

//Object with method and array value
const person: Person = {
    name: "Ivan",
    lastName: "Ivanov",
    address: "bul. Vitosha 30",
    age: 30,
    hobbies: ["football", "tennis", "hiking"],
    greeting: function () {
        return "Hello! My name is Ivan.";
    },
};
//console.log(person);

// properties access
person.name;
person.age;
person.hobbies;
person["address"];
person.greeting();

// console.log(person.name);
// console.log(person["address"]);
// console.log(person.greeting());

// properties redeclaration 
person.age = 35;
//console.log(person.age);

// let vs const redeclaration
let dog = {name: "Spark"}
dog.name = "Bobb"
dog = {name: "Nik"}

const cat = {name: "Lucy", age: 10};
cat.name = "Kitty";
//cat = {name: "Tom", age: 20} 

// explicit object type
const mouse: {name: string, favFood: string, age: number} = {
    name: "Jerry",
    favFood: "cheese",
    age: 2
}
//console.log(mouse);

// Interfaces - optional parameters, readonly and string literals 
interface User {
    name: string;
    //readonly parameter
    readonly email:string;
    // string literals
    role: "user" | "admin" | "superadmin" | "superuser";
    //optional parameter
    job?: string;
    password?: string | number;
    location?: string;
};

const user: User = {
    name: "Tom",
    email: "tom@mail.com",
    role: "admin",
    location: "Bulgaria",
    job: "QA",
};
user.password=131213;
//user.email = "test@mail.com"
console.log(user);

const secondUser: User = {
    name: "Tom",
    email: "tom@mail.com",
    role: "superuser",
    job: "QA",
};

interface UserPermissions extends User {
    permissions: string;
};

const thirdUser: UserPermissions = {
    name: "Tom",
    email: "tom@mail.com",
    role: "superuser",
    job: "QA",
    permissions: "denied",
};


 