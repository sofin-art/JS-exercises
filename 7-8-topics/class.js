//1
{class Song {
        constructor(name, author) {
            this._name = name;
            this._author = author;
        }

        get author() {
            return this._author;
        }

        set author(writer) {
            this._author = writer;
        }
    }
const newSong = new Song("Let's Get It Started", "The Blacj Eyed Peas");
console.log(newSong.author);
}

//2
{
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        return this.sides * this.sideLength;
    }
}
const square = new Shape("square", 4, 5);
console.log(square.calcPerimeter());

const triangle = new Shape("triangle", 3, 3);
console.log(triangle.calcPerimeter());
}

//3
{
class Employee {
    constructor(name, age, position, salary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }

    get age() {
        return this._age;
    }
    get position() {
        return this._position;
    }
    get salary() {
        return this._salary;
    }

    set age(a) {
        this._age = a;
    }
    set position(pos) {
        this._position = pos;
    }
    set salary(sal) {
        this._salary = sal;
    }
}

const newEmployee = new Employee("John", 26, "Manager", "1500 BYN");

console.log(newEmployee.age);

newEmployee.salary = "1550 BYN";
console.log(newEmployee.salary);
}

//4
{
class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    sayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}.`
    }
}

const person = new Person("John", "Doe", 0, "Male");
console.log(person.sayFullName());
console.log(person.greetExtraTerrestrials("Vulcan"));
}