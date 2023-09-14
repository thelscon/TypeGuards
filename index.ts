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
function runObject( obj : Animal ) : boolean {
    return 'run' in obj ;
}
function barkObject( obj : Animal ) : boolean {
    return 'bark' in obj ;
}
function swimsObject( obj : Animal ) : boolean {
    return 'swims' in obj ;
}
function meowObject( obj : Animal ) : boolean {
    return 'meow' in obj ;
}
function crawlingObject( obj : Animal ) : boolean {
    return 'crawling' in obj ;
}
function hasNoColor( obj : Animal ) : boolean {
    return !obj.color ;
}
function catchesMice( obj : Animal ) : boolean {
    return ( obj instanceof Cat || obj instanceof Dog || obj instanceof Turtle ) &&  obj.miceCaught === true ;
}
function knowsHowToGuard( obj : Animal ) : boolean {
    return 'guardsTheHouse' in obj && obj.guardsTheHouse === true ;
}

function isDog( obj : Animal ) : obj is Dog {
    return runObject( obj ) && swimsObject( obj ) && barkObject( obj ) && !catchesMice( obj ) ;
}
function isCat( obj : Animal ) : obj is Cat {
    return runObject( obj ) && meowObject( obj ) && catchesMice( obj ) ;
}
function isFish( obj : Animal ) : obj is Fish {
    return swimsObject( obj ) && hasNoColor( obj ) ;
}
function isTurtle( obj : Animal ) : obj is Turtle {
    return swimsObject( obj ) && !catchesMice( obj ) && crawlingObject( obj ) ;
}

enum Color {
    white = 'White Color' ,
    black = 'Black Color' ,
    brown = 'Brown Color' ,
    green = 'Green Color'
}
class Animal {
    name : string ;
    age : number ;
    color ?: Color ;

    constructor( name: string , age : number , color ?: Color ){
        this.name = name ;
        this.age = age ;
        if ( color ) {
            this.color = color ;
        }
    }
}

class Cat extends Animal {
    guardsTheHouse : boolean = false ;
    miceCaught : boolean = true ;
    
    constructor( name: string , age : number , color : Color ){
        super( name , age , color ) ;
    }

    meow() : boolean {
        return true ;
    }
    run() : boolean {
        return true ;
    }
}

class Dog extends Animal {
    guardsTheHouse : boolean = true ;
    miceCaught : boolean = false ;
    
    constructor( name: string , age : number , color : Color , guardsTheHouse : boolean ){
        super( name , age , color ) ;

        this.guardsTheHouse = guardsTheHouse ;
    }

    bark() : boolean {
        return true ;
    }
    run() : boolean {
        return true ;
    }
    swims() : boolean {
        return true ;
    }
}

class Fish extends Animal {
    constructor( name: string , age : number ){
        super( name , age ) ;
    }

    swims() : boolean {
        return true ;
    }
}

class Turtle extends Animal {    
    miceCaught : boolean = false ;

    constructor( name: string , age : number , color : Color ){
        super( name , age , color ) ;
    }

    crawling() : boolean {
        return true ;
    }
    swims() : boolean {
        return true ;
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

