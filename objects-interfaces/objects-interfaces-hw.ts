interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
};

interface PersonInfo extends Person {
    country?: string;
    greeting?: () => void;
};

const personOne: Person = {
    name: "Ivan",
    lastName: "Petrov",
    age: 30,
    email: "i.petrov@mail.bg",
    phoneNumber: 888888,
};

const personTwo: PersonInfo = {
    name: "Ivan",
    lastName: "Petrov",
    age: 30,
    email: "i.petrov@mail.bg",
    phoneNumber: 888888,
    country: "Bulgaria",
    greeting: function () {
        return "Welcome!";
    }
};