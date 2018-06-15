//1

function Car(model, age) {
    this.model = model;
    this.age = age;
    this.getModel = function () {return this.model;}
    this.getYear = function () {
        return new Date().getFullYear()- this.age
    }
}
let lexus = new Car('lexus',2);
console.log(lexus.getModel());
console.log(lexus.getYear());

//2
function StringScrambler(str) {
    this.str = str;
    this.reverse = function () {
        return this.str.split('').reverse().join('');
    };
    this.unicode = function () {
        let unicodeStr = '';
        this.str.split('').forEach(char => {
            return unicodeStr += char.charCodeAt(0);
        });
        return unicodeStr
    };
    this.deleteStr = function () {
        return this.str = '';
    }
}
let scrumb = new StringScrambler('abcdef');
console.log(scrumb.unicode());
console.log(scrumb.deleteStr());

//3
function ClassString(str) {
    this.string = str;
    this.getString = function () {
        return this.string
    };
    this.setNewStringValue = function (value) {
        return this.string = value;
    };
    this.length = function () {
        return this.string.length;
    };
    this.toString = function () {
        return this.string;
    };
    this.toNumber = function () {
        return this.string.length;
    }
}

let str = new ClassString('test');