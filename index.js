var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Напишіть функцію isString, яка перевірятиме, чи є передане значення рядком. 
// Потім використовуйте її для звуження типу змінної.
function isString(value) {
    return typeof value === 'string';
}
// У вас є масив з елементами різних типів. 
// Напишіть функцію, яка приймає цей масив і фільтрує його так, щоб у підсумку в ньому залишилися тільки рядки. 
// Використовуйте захисника типу для цього завдання.
function isStringsInArray(value) {
    return value.filter(function (value) { return isString(value); });
}
function isStringBankAccountInObject(obj) {
    if (obj.bankAccount && typeof obj.bankAccount === 'string') {
        return obj.bankAccount;
    }
}
// Створіть кілька захисників типу, кожен з яких перевіряє певний аспект об'єкта (наприклад, наявність певної властивості або її тип). 
// Потім напишіть функцію, яка використовує цих захисників у комбінації для звуження типу об'єкта до більш конкретного типу.
var Manufacturer;
(function (Manufacturer) {
    Manufacturer[Manufacturer["AMD"] = 0] = "AMD";
    Manufacturer[Manufacturer["Intel"] = 1] = "Intel";
    Manufacturer[Manufacturer["Qualcomm"] = 2] = "Qualcomm";
})(Manufacturer || (Manufacturer = {}));
var AMDProcessor = /** @class */ (function () {
    function AMDProcessor() {
        this.name = 'Ryzen';
        this.manufacturer = Manufacturer.AMD;
        this.core = 16;
    }
    AMDProcessor.prototype.overclocking = function () {
        return true;
    };
    return AMDProcessor;
}());
var IntelProcessor = /** @class */ (function () {
    function IntelProcessor() {
        this.name = 'Core';
        this.manufacturer = Manufacturer.Intel;
        this.core = 24;
    }
    IntelProcessor.prototype.boost = function () {
        return true;
    };
    return IntelProcessor;
}());
var ARMProcessor = /** @class */ (function () {
    function ARMProcessor() {
        this.name = 'Snapdragon';
        this.manufacturer = Manufacturer.Qualcomm;
        this.core = 24;
    }
    ARMProcessor.prototype.run = function () {
        return true;
    };
    return ARMProcessor;
}());
function AMDManufacturer(obj) {
    return obj.manufacturer === Manufacturer.AMD;
}
function IntelManufacturer(obj) {
    return obj.manufacturer === Manufacturer.Intel;
}
function nameProcessorRyzen(name) {
    return name === 'Ryzen';
}
function nameProcessorIntel(name) {
    return name === 'Core';
}
function isAMD(obj) {
    return AMDManufacturer(obj) && nameProcessorRyzen(obj.name) && 'overclocking' in obj;
}
function isIntel(obj) {
    return IntelManufacturer(obj) && nameProcessorIntel(obj.name) && 'boost' in obj;
}
function runPerformance(obj) {
    if (isIntel(obj)) {
        obj.boost();
    }
    if (isAMD(obj)) {
        obj.overclocking();
    }
}
// У вас є змінна, яка може бути одного з декількох типів (наприклад, рядок або число). 
// Напишіть функцію, яка приймає цю змінну і виконує довільні операції, специфічні для кожного з типів.
function typeOperations(value) {
    if (typeof value === 'string') {
        value = "'".concat(value, "' - ").concat(value.length, " char(s)");
    }
    else if (typeof value === 'bigint') {
        value += 10n;
    }
    else {
        value *= 5;
    }
}
// Створіть захисник типу, який перевірятиме, чи є передане значення функцією. 
// Потім напишіть функцію, яка використовує цей гард для звуження типу змінної і викликає передану функцію, якщо вона існує.
function isFunction(value) {
    return typeof value === 'function';
}
function runFunction(value) {
    if (isFunction(value)) {
        value();
    }
}
//Створіть класи з ієрархією успадкування і потім напишіть функцію, яка використовує захисник типу для звуження типу об'єктів, що базуються на цій ієрархії.
var TypesOfAnimals;
(function (TypesOfAnimals) {
    TypesOfAnimals["Dog"] = "Dog";
    TypesOfAnimals["Cat"] = "Cat";
    TypesOfAnimals["Bird"] = "Bird";
})(TypesOfAnimals || (TypesOfAnimals = {}));
var AnimalColor;
(function (AnimalColor) {
    AnimalColor["White"] = "White";
    AnimalColor["Black"] = "Black";
    AnimalColor["Gray"] = "Gray";
    AnimalColor["Yellow"] = "Yellow";
})(AnimalColor || (AnimalColor = {}));
var Animal = /** @class */ (function () {
    function Animal(name, color) {
        this.name = name;
        this.color = color;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, color) {
        var _this = _super.call(this, name, color) || this;
        _this.typeOfAnimal = TypesOfAnimals.Cat;
        return _this;
    }
    Cat.prototype.meow = function () {
        return true;
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, color) {
        var _this = _super.call(this, name, color) || this;
        _this.typeOfAnimal = TypesOfAnimals.Dog;
        return _this;
    }
    Dog.prototype.bark = function () {
        return true;
    };
    return Dog;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, color) {
        var _this = _super.call(this, name, color) || this;
        _this.typeOfAnimal = TypesOfAnimals.Bird;
        return _this;
    }
    Bird.prototype.fly = function () {
        return true;
    };
    return Bird;
}(Animal));
function isCat(obj) {
    return 'typeOfAnimal' in obj && obj.typeOfAnimal === TypesOfAnimals.Cat;
}
function isDog(obj) {
    return 'typeOfAnimal' in obj && obj.typeOfAnimal === TypesOfAnimals.Dog;
}
function isBird(obj) {
    return 'typeOfAnimal' in obj && obj.typeOfAnimal === TypesOfAnimals.Bird;
}
function whatAnimal(value) {
    if (isCat(value)) { }
    if (isDog(value)) { }
    if (isBird(value)) { }
}
