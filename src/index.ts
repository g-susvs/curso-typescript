
let id: number = 5;
let firstname: string = 'jesus';
let hasDog: boolean = true;

let unit: number;
unit = 5

// union types
let age: string | number;
age = 19;
age = '19';






// ========== Arrays =========
// let nros: number[] = [1, 2, 3];
// let names: string[] = ['Luis', 'Eva', 'Alex'];
// let anys: any[] = ['hello', 12, true];
// let person1: (string | number | boolean)[] = ['Danny', 20, true]; // union types

// // Tupla - They are stricter than regular arrays.
// let person2: [string, number, boolean] = ['Kiara', 10, true];





// =========== Objects ==========
// Declare a variable called person with a specific object type annotation
let person3: { name: string, location: string, isProgramer: boolean };

person3 = {
    name: 'José',
    location: 'PE',
    isProgramer: true
}




//Interface
// This is useful if we need to check that multiple objects have the same specific properties and value types
interface User { name: string, email: string, state: boolean };

let user1: User = { name: 'Marco', email: 'mco@example.com', state: true }
let user2: User = { name: 'Luna', email: 'lna@example.com', state: true }

interface Speech {
    sayHi(name: string): string,
    sayBye: (name: string) => string
}
let sayStuff: Speech = {
    sayHi: function (name: string) {
        return `Hi ${name}`;
    },
    sayBye: (name: string) => `Bye ${name}`
}
// console.log(sayStuff.sayHi('Jesús'));
// console.log(sayStuff.sayBye('Jesús'));





// ========== Funtions ==========

function circleFn(diam: number): string {
    return `area: ${Math.PI * diam}`;
}
const circleArrFn = (diam: number): string => `area: ${Math.PI * diam}`;
// Using explicit typing 
// const circle: Function = (diam: number): string => {
//     return 'The circumference is ' + Math.PI * diam;
// };

// parameter optional

const add = (a: number, b: number, c?: number | string): number => {
    console.log(c);
    return a + b;
}
// console.log(add(2,3, 'any'));

// void

const logMessage = (msg: string): void => console.log(`message: ${msg}`);
// logMessage("I'm developer :)");

// function variable
let logAdd: (a: number, b: number) => void;
logAdd = (a, b) => console.log(`${a} + ${b} = ${a + b}`);
// logAdd(6, 3);s






// ======= Type Any ========
// we can basically revert typescript into javascript
let num: any = '12';
num = 12;
num = { id: 1, name: 'nro' };

// ======= Type Aliases =======
type StringOrNumber = string | number;

type PersonObj = {
    name: string,
    id: StringOrNumber
}

let prsn1: PersonObj = {
    name: 'Deybi',
    id: 1
};
let prsn2: PersonObj = {
    name: 'Dalila',
    id: '2'
}
const sayHello = (person: PersonObj): void => console.log(`Hello ${person.name}`);
// sayHello(prsn1);
// sayHello(prsn2);






//=======================   DOM  =====================================
// typescript doesn´t have acces to the DOM like javascript 
// TypeScript is never sure that they actually exist

// let form = document.getElementById('myForm') as HTMLFormElement;

// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();
//     // console.log(e.target)
// });








// =================== Class =================================

// class Person{
//     readonly name: string;   // can only be read
//     private isCool: boolean; // Can only access or modify from methods within this class
//     protected email: string; // Can access or modify from this class and subclasses
//     public pets: number;     // Can access or modify from anywhere

//     constructor(n: string, c: boolean, e: string,p: number){
//         this.name = n;
//         this.isCool = c;
//         this.email = e;
//         this.pets = p;
//     }

//     sayHello(){
//         console.log(`Hi, my name is ${this.name} and I have ${this.pets} pets`);
//     }
// }

// constructing class properties
// the properties are automatically assigned in the constructor
// class Person {
//     constructor(
//         readonly name: string,
//         private isCool: boolean,
//         protected email: string,
//         public pets: number,
//     ) { }
//     sayHello() {
//         console.log(`Hi, my name is ${this.name} and I have ${this.pets} pets`);
//     }
// }

// const prsn3 = new Person('Alba', true, 'aba@test.com', 2);
// const prsn4 = new Person('Kevin', true, 'kvin@test.com', 4);

// prsn3.pets = 7;

// prsn3.sayHello();
// prsn4.sayHello();

// // array of persons
// let People: Person[] = [prsn3, prsn4];

// // classes can also be extended
// class Programer extends Person{

//     programingLanguages: string[];

//     constructor(
//         name: string,
//         isCool: boolean,
//         email: string,
//         pets: number,
//         pl: string[]
        
//     ){
//         super(name, isCool, email, pets);
//         this.programingLanguages = pl
//     }
// }



// ================== INTERFACES =============================
// They are useful for defining objects.

// interface Person {
//     name: string;
//     age: number
// }

// let person1: Person = {
//     name: 'Pedro',
//     age: 20
// }

// using a type alias
// type Person = {
//     name: string;
//     age: number
// }
// let person1: Person = {
//     name: 'Pedro',
//     age: 20
// }

// const sayHi = (person: Person) => {
//     console.log(`Hi, my name is ${person.name}`);
// }

// an object type could be defined anonymously
// const sayHi = (person: {name: string, age: number}) => {
//     console.log(`Hi, my name is ${person.name} and I'm ${person.age} years old`);
// }

// sayHi({
//     name: 'Luisa',
//     age: 28
// });

// Extending an interface

interface Animal {
    name: string;
}

interface Dog extends Animal{
    tail: boolean;
}

// let myPet: Dog = {
//     name: 'Max',
//     tail: true
// }

// Adding new fields to an existing interface:

interface Dog {
    color: string
}
let myPet: Dog = {
    name: 'Max',
    tail: true,
    color: 'brown'
}

// Extending a type via intersections:
type Employee ={
    name: string
}
type Developer = Employee & {
    PL: string[]
}
let io: Developer = {
    name: 'Jesús',
    PL: ['TS','JAVA']
}

interface HasFormatter {
    format() : string
}

class Person implements HasFormatter{
    constructor(
        public username: string,
        protected password: string
    ){}

    format(){
        return `${this.username.toLowerCase()}`
    }
}

let person1: HasFormatter;
let person2: HasFormatter;

person1 = new Person('David', '123abc');
person2 = new Person('Andres', 'fasdfwc');

// console.log(person1.format());
// console.log(person2.format());



// ================ Literal types in typscritp =================
// union type with a literal type in each position
let myColor: 'red' | 'blue' | 'green' | 'yellow';
myColor = 'red';

// ================ Generic ============================
const addId = <T extends {name:string, age:string}>(obj: T) => {
    
    const identy = Math.floor(Math.random() * 1000);
    
    return {...obj, id};
}

// console.log(addId({name: 'Diego', age: '18'}));
const psn1 = addId({name: 'Diego', age: '18'});
// const psn1 = addId(['hola']);
// console.log(psn1);
// console.log(psn1.id);
// console.log(psn1.name);




// =============== Enums ====================
// Enums allow us define or declare a collection of related values
enum programigLangs{
    python = 1,
    javascript,
    java,
    dart,
    go,
    rust,
}

// console.log(programigLangs.python);
// console.log(programigLangs.rust);

enum directions{
    Up = 'Up',
    Left = 'Left',
    Right = 'Right',
    Down = 'Down'
}
// console.log(directions.Down);
const getSong = () => {
    return 'song';
};

let whoSangThis: string = getSong();

const singles = [
  { song: 'touch of grey', artist: 'grateful dead' },
  { song: 'paint it black', artist: 'rolling stones' },
];

const single = singles.find((s) => s.song == whoSangThis);

if(single){
    console.log('hola mundo')
    console.log(single.artist);
}

// ============= Narrowing =======

interface Vehicle {
    topSpeed: number;
}
interface Train extends Vehicle{
    type: 'Train', //  now have a type property equal to 'Train'
    carriages: number
}
interface Plane extends Vehicle{
    type: 'Plane',
    wingSpan: number
}

type PlaneOrTrain = Train | Plane;

function getInfoVehicle(v: PlaneOrTrain){
    if( v.type == 'Plane') console.log(v.wingSpan);

    if( v.type == 'Train') console.log(v.carriages);
}

let thomas: Train = {
    type: 'Train',
    topSpeed: 60,
    carriages: 8,
}
getInfoVehicle(thomas);

const Projects = [
    "Todo-App",
    "Weather-App",
    "Authentication-App"
]

let myProject = Projects.find( p => p == 'Todo-App');

console.log(myProject)
