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
function runObject(obj) {
    return 'run' in obj;
}
function barkObject(obj) {
    return 'bark' in obj;
}
function swimsObject(obj) {
    return 'swims' in obj;
}
function meowObject(obj) {
    return 'meow' in obj;
}
function crawlingObject(obj) {
    return 'crawling' in obj;
}
function hasNoColor(obj) {
    return !obj.color;
}
function catchesMice(obj) {
    return (obj instanceof Cat || obj instanceof Dog || obj instanceof Turtle) && obj.miceCaught === true;
}
function knowsHowToGuard(obj) {
    return 'guardsTheHouse' in obj && obj.guardsTheHouse === true;
}
function isDog(obj) {
    return runObject(obj) && swimsObject(obj) && barkObject(obj) && !catchesMice(obj);
}
function isCat(obj) {
    return runObject(obj) && meowObject(obj) && catchesMice(obj);
}
function isFish(obj) {
    return swimsObject(obj) && hasNoColor(obj);
}
function isTurtle(obj) {
    return swimsObject(obj) && !catchesMice(obj) && crawlingObject(obj);
}
var Color;
(function (Color) {
    Color["white"] = "White Color";
    Color["black"] = "Black Color";
    Color["brown"] = "Brown Color";
    Color["green"] = "Green Color";
})(Color || (Color = {}));
var Animal = /** @class */ (function () {
    function Animal(name, age, color) {
        this.name = name;
        this.age = age;
        if (color) {
            this.color = color;
        }
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, color) {
        var _this = _super.call(this, name, age, color) || this;
        _this.guardsTheHouse = false;
        _this.miceCaught = true;
        return _this;
    }
    Cat.prototype.meow = function () {
        return true;
    };
    Cat.prototype.run = function () {
        return true;
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, color, guardsTheHouse) {
        var _this = _super.call(this, name, age, color) || this;
        _this.guardsTheHouse = true;
        _this.miceCaught = false;
        _this.guardsTheHouse = guardsTheHouse;
        return _this;
    }
    Dog.prototype.bark = function () {
        return true;
    };
    Dog.prototype.run = function () {
        return true;
    };
    Dog.prototype.swims = function () {
        return true;
    };
    return Dog;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age) {
        return _super.call(this, name, age) || this;
    }
    Fish.prototype.swims = function () {
        return true;
    };
    return Fish;
}(Animal));
var Turtle = /** @class */ (function (_super) {
    __extends(Turtle, _super);
    function Turtle(name, age, color) {
        var _this = _super.call(this, name, age, color) || this;
        _this.miceCaught = false;
        return _this;
    }
    Turtle.prototype.crawling = function () {
        return true;
    };
    Turtle.prototype.swims = function () {
        return true;
    };
    return Turtle;
}(Animal));
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
