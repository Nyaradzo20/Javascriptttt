// Define a Person class with properties and methods for name, age, introduction, adulthood check, and name change
class Person{
    constructor(name,age){
        this.name = name;
        this.age =age;
    }
    // Method to introduce the person
    introduce(params) {
        console.log(`Hi , I am ${this.name} I am ${this.age}`)
    }
    // Method to check if the person is an adult
    isAdult(age){
        if(this.age >= 18)
        {
            console.log(`${this.name} is an adult`);
        }
        else{
            console.log("Person is a child");
        }
    }
    // Method to change the person's name
    changeName(newName){
        newName = this.name;
        console.log(`${this.name} is changing their name to ${newName}`);
    }
}

// Create several Person instances
const nyarie = new Person("Nyarieee", 22);
const joel = new Person("Joel", 30);
const lara = new Person("Lara", 19);
const ella = new Person("Ella", 20);
const minnie = new Person("Minnie", 9);
const tim = new Person("Tim", 17);
const loreen = new Person("Loreen", 19);

// Example usage of Person methods (commented out)
// nyarie.introduce();
// loreen.isAdult()
// nyarie.changeName("Britney")

// Define a Student class that extends Person and adds course and university
class Student extends Person{
    constructor(name, age, course,university){
        super(name,age);
        this.course = course;
        this.university = university;
    }
    // Method to introduce the student with additional info
    intro(){
        console.log(`Hi I am ${this.name}, age ${this.age}, studying ${this.course} at ${this.university}`);
    }
}

// Create a Student instance and demonstrate methods
let lily = new Student("Lily", 20, "Computer Science", "UCT");
lily.intro()
lily.isAdult()

// Create an array of people including students and persons
let people =[lily,nyarie,joel,lara,loreen,ella,minnie,tim];

// Function to add a new person to the people array
function addPerson(name,age){
      const newPerson = new Person(name, age);
      people.push(newPerson);
}

// Example usage of addPerson and introduce (commented out)
/*
addPerson("Luke", 23);
for(let person of people){
    person.introduce();
}
*/

// Function to list all adults in the people array
function listAdults(people){
    for(let person of people){
        if(person.age >=18){
            console.log(`${person.name} is an adult, she is ${person.age} years old`);
        }
        else{
            continue;
        }
    }
}

// Call the function to list adults
listAdults(people);