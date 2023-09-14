// Напишіть функцію isString, яка перевірятиме, чи є передане значення рядком. 
// Потім використовуйте її для звуження типу змінної.
function isString( value : any ) : value is string {
    return typeof value === 'string'
}


// У вас є масив з елементами різних типів. 
// Напишіть функцію, яка приймає цей масив і фільтрує його так, щоб у підсумку в ньому залишилися тільки рядки. 
// Використовуйте захисника типу для цього завдання.
function isStringsInArray( value : any[] ) : string[]  {
    return value.filter( ( value : any ) => isString( value ) ) ;
}


// У вас є об'єкт, який може містити довільні властивості. 
// Напишіть функцію, яка приймає цей об'єкт і повертає значення однієї з властивостей, якщо воно існує і має певний тип.
type Obj = {
    nickName : string ;
    id : number ;
    bankAccount ?: string | number ;
    availabilityOfACar : boolean ;
}
function isStringBankAccountInObject( obj : Obj ) : string | void {
    if ( obj.bankAccount && typeof obj.bankAccount === 'string' ) {
        return obj.bankAccount ;
    }
}


// Створіть кілька захисників типу, кожен з яких перевіряє певний аспект об'єкта (наприклад, наявність певної властивості або її тип). 
// Потім напишіть функцію, яка використовує цих захисників у комбінації для звуження типу об'єкта до більш конкретного типу.
enum Manufacturer {
    AMD ,
    Intel ,
    Qualcomm
}

class AMDProcessor {
    name = 'Ryzen' ;
    manufacturer = Manufacturer.AMD ;
    core = 16 ;

    overclocking () : boolean {
        return true ;
    }
}
class IntelProcessor  {
    name = 'Core' ;
    manufacturer = Manufacturer.Intel ;
    core = 24 ;

    boost(): boolean {
        return true ;
    }
}
class ARMProcessor{
    name = 'Snapdragon' ;
    manufacturer = Manufacturer.Qualcomm ;
    core = 24 ;

    run() : boolean {
        return true;
    }
}

function AMDManufacturer ( obj : AMDProcessor | IntelProcessor | ARMProcessor ) : boolean {
    return obj.manufacturer === Manufacturer.AMD ;
}
function IntelManufacturer ( obj : AMDProcessor | IntelProcessor | ARMProcessor ) : boolean {
    return obj.manufacturer === Manufacturer.Intel ;
} 
function nameProcessorRyzen ( name : string ) : boolean {
    return name === 'Ryzen' ;
}
function nameProcessorIntel ( name : string ) : boolean {
    return name === 'Core' ;
}

function isAMD ( obj : AMDProcessor | IntelProcessor | ARMProcessor ) : obj is AMDProcessor {
    return AMDManufacturer ( obj ) && nameProcessorRyzen ( obj.name ) && 'overclocking' in obj ;
}
function isIntel ( obj : AMDProcessor | IntelProcessor | ARMProcessor ) : obj is IntelProcessor {
    return IntelManufacturer ( obj ) && nameProcessorIntel ( obj.name ) && 'boost' in obj ;
}

function runPerformance ( obj : AMDProcessor | IntelProcessor ) : void {
    if ( isIntel ( obj ) ) {
        obj.boost () ;
    }
    if ( isAMD ( obj ) ) {
        obj.overclocking () ;
    }
}


// У вас є змінна, яка може бути одного з декількох типів (наприклад, рядок або число). 
// Напишіть функцію, яка приймає цю змінну і виконує довільні операції, специфічні для кожного з типів.
function typeOperations ( value : number | bigint | string ) : void {
    if ( typeof value === 'string' ) {
        value = `'${value}' - ${value.length} char(s)`;
    }
    else if ( typeof value === 'bigint' ) {
        value += 10n ;
    }
    else {
        value *= 5 ;
    }
}


// Створіть захисник типу, який перевірятиме, чи є передане значення функцією. 
// Потім напишіть функцію, яка використовує цей гард для звуження типу змінної і викликає передану функцію, якщо вона існує.


function isFunction ( value : any ) : value is Function {
    return typeof value === 'function'
}

function runFunction ( value : Function | unknown ) : void {
    if ( isFunction ( value ) ) {
        value () ;
    }
}

//Створіть класи з ієрархією успадкування і потім напишіть функцію, яка використовує захисник типу для звуження типу об'єктів, що базуються на цій ієрархії.

enum TypesOfAnimals {
    Dog = 'Dog' , 
    Cat = 'Cat' ,
    Bird = 'Bird'
}
enum AnimalColor {
    White = 'White' ,
    Black = 'Black' ,
    Gray = 'Gray' ,
    Yellow = "Yellow"
}
class Animal {
    name : string ;
    color : AnimalColor ;

    constructor ( name : string , color : AnimalColor ) {
        this.name = name ;
        this.color = color ;
    }
}

class Cat extends Animal {
    typeOfAnimal : TypesOfAnimals = TypesOfAnimals.Cat ;

    constructor ( name : string , color : AnimalColor ) {
        super ( name , color ) ;
    }

    meow() : boolean {
        return true ;
    }
}
class Dog extends Animal {
    typeOfAnimal : TypesOfAnimals = TypesOfAnimals.Dog  ;

    constructor (  name : string , color : AnimalColor )  {
        super ( name , color ) ;
    }

    bark() : boolean {
        return true ;
    }
}
class Bird extends Animal {
    typeOfAnimal : TypesOfAnimals = TypesOfAnimals.Bird

    constructor (  name : string , color : AnimalColor )  {
        super ( name , color ) ;
    }

    fly () : boolean {
        return true ;
    }
}

function isCat ( obj : Animal ) : obj is Cat {
    return 'typeOfAnimal' in obj && obj.typeOfAnimal === TypesOfAnimals.Cat  ;         
}
function isDog ( obj : Animal ) : obj is Dog {
    return 'typeOfAnimal' in obj && obj.typeOfAnimal === TypesOfAnimals.Dog  ;         
}
function isBird ( obj : Animal ) : obj is Bird {
    return 'typeOfAnimal' in obj && obj.typeOfAnimal === TypesOfAnimals.Bird  ;         
}
function whatAnimal ( value : Animal )  {
    if ( isCat( value ) ) {}
    if ( isDog( value ) ) {}
    if ( isBird( value ) ) {}
}