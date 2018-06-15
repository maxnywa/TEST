//1
// функция вернет "IVAN";
//функция вызвана с аргументом name = userName, переменная заданная через var всплывет

//2
let userName = 'ivan';
function test() {
    let name = 'vasya';
    return getBigName(userName);
    // функция возвращает вызов внешней функции с аргументом userName
    //так как в LE данной функции нет переменной с именем userName, то сработает scoop: global LE
    //произойдет вызов getBigName(userName),где userName = 'ivan'
}

function getBigName(name){
    name = name + '';
    return name.toUpperCase()
}
test();// функция вернет "IVAN";

//3
//в консоле будет 'cucumber'
//так как в анонимной самовызывающейся функции происходит вызов функции getFood()
//в LE getFood нет food, поиск идет на глобальный уровень

//Замыкание.Задачи
//1 getDollar() вернет 0,так как функция имеет доступ к переменной var dollar = 0 посредством замыкания,
// внутри самовызывающейся функции


//2
//В результате работы анонимной самовызывающейся фунции в консоле будет 'Hello World'
//вызов выражения console.log(greet + text) вернет ошибку, так как переменной text в global LE нет

//3

function minus(num) {
    num = num || 0;

    return function (min) {
        min = min || 0;
        return num - min;
    }
}
console.log( minus(10)(6) );
console.log( minus(5)(6) );
console.log( minus(10)() );
console.log( minus()(6) );
console.log( minus()() );

//4
function multiplyMaker(i) {
  let value = i;

  return function (n) {
      return value *= n;
  }
}
 const multiply = multiplyMaker(2);
console.log( '4 задача)',multiply(2) );
console.log( multiply(1) );
console.log( multiply(3) );
console.log( multiply(10) );

//5

let stringOperations = (function () {
    let str;
    function initString(value) {
        if (typeof value === 'number') str = +value;
        if (value.length = 0) str = '';
        else str = value;
    }

    function getString() {
        return str;
    }

    function getStringLength() {
        return str.length;
    }
    function getReverceString() {
        return str.split('').reverse().join('');
    }
    return {
        initString,
        getString,
        getStringLength,
        getReverceString
    }
}());

console.log( stringOperations.initString('abcdf') );
console.log( stringOperations.getString() );
console.log( stringOperations.getStringLength() );
console.log( stringOperations.getReverceString() );
    
//6
let numberOperations = (function () {
    let num;
    function initNumber(value) {
        if (typeof value !== 'number') return new Error ('Please provide number');
        else num = value;
        return this
    }
    function plus(n) {
        num += n;
        return this
    }
    function minus(n) {
        num -= n;
        return this
    }
    function multiply(n) {
        num *= n;
        return this
    }
    function division(n) {
        if (n === 0) {
            return throw new Error('division on 0');
        }

        num /= n;
        return this
    }
    function degree(n) {
        Math.pow(num,n);
        return this
    }
    function getResult() {
        return Number(num.toFixed(2))
    }

    return {
        initNumber,
        plus,
        minus,
        division,
        multiply,
        degree,
        getResult
    }
}());

numberOperations.initNumber(10) ;
numberOperations.plus(5);
numberOperations.multiply(2);
numberOperations.division(0);
console.log('Результат', numberOperations.getResult() );

//console.log( 'цепочка', numberOperations.initNumber(10).plus(5).division(0).getResult() );