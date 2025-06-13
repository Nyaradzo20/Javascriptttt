class Person{
    constructor(name,age){
        this.name = name;
        this.age =age;
    }
    introduce(params) {
        console.log(`Hi , I am ${this.name} I am ${this.age}`)
        
    }
    isAdult(age){
        if(this.age >= 18)
        {
            console.log(`${this.name} is an adult`);
        }
        else{
            console.log("Person is a child");
        }
    }
    changeName(newName){
        
        newName = this.name;
        console.log(`${this.name} is changing their name to ${newName}`);

    }
}
 const nyarie = new Person("Nyarieee", 22);
 const joel = new Person("Joel", 30);
const lara = new Person("Lara", 19);
const ella = new Person("Ella", 20);
const minnie = new Person("Minnie", 9);
const tim = new Person("Tim", 17);
const loreen = new Person("Loreen", 19);
/*nyarie.introduce();
loreen.isAdult()
nyarie.changeName("Britney")*/

class Student extends Person{
    constructor(name, age, course,university){
        super(name,age);
        this.course = course;
        this.university = university;
    }
    intro(){
        console.log(`Hi I am ${this.name}, age ${this.age}, studying ${this.course} at ${this.university}`);
    }
}

let lily = new Student("Lily", 20, "Computer Science", "UCT");
lily.intro()
lily.isAdult()

let people =[lily,nyarie,joel,lara,loreen,ella,minnie,tim];
/*for(let person of people){
    person.introduce();
}
*/
function addPerson(name,age){
      const newPerson = new Person(name, age);
      people.push(newPerson);
      }

   /* addPerson("Luke", 23);
   for(let person of people){
    person.introduce();
} */
 
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

listAdults(people);