class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getInfo() {
        return `${this.name}(${this.age} лет), ${this.gender}`;
    }
}

class Student extends Person {
    constructor(name, age, gender, course, major, gpa) {
        super(name, age, gender);
        this.course = course;
        this.major = major;
        this.gpa = gpa;
    }

    getInfo() {
        return `${super.getInfo()}, ${this.course} курс, специальность: ${this.major}, GPA: ${this.gpa}`;
    }
}

class Teacher extends Person {
    constructor(name, age, gender, salary, workHours) {
        super(name, age, gender);
        this.salary = salary;
        this.workHours = workHours;
    }
    
    getInfo() {
        return `${super.getInfo()}, зарплата: ${this.getTotalYearlyIncome()} BYN в год, часы работы: ${this.workHours} ч`;
    }
    
    getSalary() {
        return this.salary;
    }

    getTotalYearlyIncome() {
        return this.getSalary() * 12;
    }
}

class Dean extends Teacher {
    constructor(name, age, gender, salary, workHours) {
        super(name, age, gender, salary, workHours);
        this.bonus = salary;
    }

    getSalary() {
        return this.salary * 2;
    }
    
    getYearlyBonus() {
        return this.bonus;
    }
    
    getTotalYearlyIncome() {
        return this.getSalary() * 12 + this.bonus;
    }
    
    getInfo() {
        return `${super.getInfo()} (ДЕКАН), зарплата: ${this.getTotalYearlyIncome()} BYN в год.`;
    }
}

class Director extends Person {
    constructor(name, age, gender, salary) {
        super(name, age, gender);
        this.salary = salary;
        this.bonus = salary * 2;
    }

    getSalary() {
        return this.salary * 1.5 * 2;
    }
    
    getYearlyBonus() {
        return this.bonus;
    }
    
    getTotalYearlyIncome() {
        return this.getSalary() * 12 + this.bonus;
    }
    
    getInfo() {
        return `${super.getInfo()} (ДИРЕКТОР), зарплата: ${this.getTotalYearlyIncome()} BYN в год.`;
    }
}

class School {
    constructor(name) {
        this.name = name;
        this.people = [];
        this.students = [];
        this.teachers = [];
        this.deans = [];
        this.director = null;
    }

    addPerson(person) {
        this.people.push(person);
        
        if (person instanceof Student) {
            this.students.push(person);
        } else if (person instanceof Dean) {
            this.deans.push(person);
        } else if (person instanceof Teacher && !(person instanceof Dean)) {
            this.teachers.push(person);
        } else if (person instanceof Director) {
            this.director = person;
        }
    }
    
    printAllPeople() {
        console.log(`\n=== ${this.name} ===`);
        console.log("Список всех людей:\n");
        this.people.forEach((person, index) => {
            console.log(`${index + 1}: ${person.getInfo()}`);
        });
    }

    printDirectorSalary() {
        if (this.director) {
            console.log(`\n${this.director.getInfo()}`);
        } else {
            console.log("Директор не назначен");
        }
    }

    findValedictorian() {
        if (this.students.length === 0) {
            console.log("Нет студентов");
            return null;
        }
        
        let bestStudent = this.students[0];
        for (let student of this.students) {
            if (student.gpa > bestStudent.gpa) {
                bestStudent = student;
            }
        }
        return bestStudent;
    }
    
    printValedictorian() {
        const valedictorian = this.findValedictorian();
        if (valedictorian) {
            console.log(`\n=== VALEDICTORIAN ===`);
            console.log(valedictorian.getInfo());
        }
    }
}

const school = new School("College №3");

const students = [
    new Student("John Doe", 19, "Male", 3, "Philosophy", 3.2),
    new Student("Jane Doe", 20, "Female", 4, "Programming", 3.7),
    new Student("Dawid Bowie", 21, "Male", 4, "Music", 4.0),
    new Student("Bella Ramsey", 18, "NB", 1, "Acting", 3.9),
    new Student("Ashley Graham", 20, "Female", 3, "Economics", 2.5)
];

const teacher1 = new Teacher("Leon S. Kennedy", 32, "Male", 1500, 40);
const teacher2 = new Teacher("Ada Wang", 30, "Female", 1600, 36);
const teacher3 = new Teacher("John Wick", 42, "Male", 1500, 40);

const dean1 = new Dean("Wei Ling Ying", 50, "Female", 1700, 45);

const director1 = new Director("Sabine Callas", 58, "Female", 1700);

students.forEach(s => school.addPerson(s));
school.addPerson(teacher1);
school.addPerson(teacher2);
school.addPerson(teacher3);
school.addPerson(dean1);
school.addPerson(director1);

school.printAllPeople();

school.printDirectorSalary();

school.printValedictorian();
