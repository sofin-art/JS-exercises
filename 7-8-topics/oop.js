//1
{
class Car {
    constructor(model, colour, year) {
        this.model = model;
        this.colour = colour;
        this.year = year;
    }
}

class Zhiguli extends Car {
    constructor(model, colour, year, place, maxSpeed) {
        super(model, colour, year);
        this.place = place;
        this.maxSpeed = maxSpeed;
    }
}

const newZhiguli = new Zhiguli("VAZ-2101", "white", 1975, "Togliatti", "140 km/h");
console.log(newZhiguli);
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

class Square extends Shape {
    constructor(sideLength) {
        super("square", 4, sideLength);
    }

    calcArea() {
        return this.sideLength * this.sideLength;
    }
}

const square = new Square(6);
console.log(square.calcPerimeter());
console.log(square.calcArea()); 
}

//3
{
class Human {
    constructor(name, age, interest) {
        this.name = name;
        this.age = age;
        this.interest = interest;
    }

    info() {
        return `${this.name}(${this.age} лет). Интерес: ${this.interest}.`
    }
}

const newHuman = new Human('Катя', 26, 'спорт');
const newHuman2 = new Human('Юра', 38, 'пение');

console.log(newHuman.info());
console.log(newHuman2.info());
}

//4
{
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    getFood(foodType, quantity, brand) {
        const argsCount = arguments.length;
        
        if (argsCount === 0) {
            return "All dogs love to eat!";
        }
        
        if (argsCount === 1) {
            return `${this.breed} ${this.name} eats ${foodType} food.`;
        }
        
        if (argsCount === 2) {
            return `${this.breed} ${this.name} eats ${quantity} bowls a day of ${foodType} food.`;
        }
        
        if (argsCount === 3) {
            return `${this.breed} ${this.name} eats ${quantity} bowls a day of ${foodType} food by ${brand}.`;
        }
    }
}

const newDog = new Dog("Masha", "Shepherd");
const newDog2 = new Dog("Demi", "Poodle");
const newDog3 = new Dog("Henry", "Corgi");

console.log(newDog.getFood());
console.log(newDog.getFood("dry"));
console.log(newDog2.getFood("wet", 2));
console.log(newDog3.getFood("dry", 3, "Royаl Canin"));
}

//5
{
class User {
    #password

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    get username() {
        return this._username;
    }
    set username(value) {
        if (typeof value !== 'string' || value.length < 2) {
            console.log("Имя должно быть строкой минимум из 2 символов.");
            return;
        }
        this._username = value;
    }
    
    #validatePassword(password) {
        if (password.length < 6) {
            throw new Error("Пароль должен быть минимум 6 символов.");
        }
        if (password === this.#password) {
            console.log("Новый пароль совпадает со старым.");
            return false;
        }
        return true;
    }
    
    #updatePassword(newPassword) {
        if (!this.#validatePassword(newPassword)) {
            return;
        }
        this.#password = newPassword;
        console.log("Пароль обновлен");
    }
    
    resetPassword(newPassword) {
        this.#updatePassword(newPassword);
    }
    
    getPassword() {
        return this.#password;
    }
}

class Admin extends User {
    isAdmin = true;

    constructor(username, password) {
        super(username, password);
    }

    deleteUser(userToDelete) {
        return `Пользователь ${userToDelete} был удален.`;
    }
}

const testUser = new User("john123", "password123");
const testAdmin = new Admin("ashley456", "admin456");
const result = [testUser, testAdmin];

console.log(result);

testUser.resetPassword("user123");
console.log(testUser.getPassword());

console.log(testAdmin.deleteUser("john123"));
}