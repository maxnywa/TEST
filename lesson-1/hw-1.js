//Переменные
// 1
let price;
const maxNum = 5;
// const user = Masha;
let userInfo;
// 2 в консоле будет
//string
// string № 2
//3
//string
//через const не перезапишет, будет сообщение что такая перменная уже обьявленна
let someVariable = 15;
//let someVariable = 10 не сработает, так как переменная уже обьявленна
someVariable = 10;// такая запись перезапишет значение в переменной

//Строки
let string = "some test string";
console.log( string[0].toUpperCase() );
console.log( string[string.length-1].toUpperCase() );
console.log( string.indexOf('string') );
console.log( string.indexOf(' ', 5) );
console.log( string.substr(5,[4]) );
console.log( string.slice(5,[10]) );
console.log( string.slice(0,[-6] ) );

let a = 20, b = 16, stringYear;
stringYear = `${a}${b}`;
console.log(stringYear);

//Числа
console.log( (Math.PI).toFixed(2) );
console.log( Math.max(15,22,51,12,13,11) );
console.log( Math.min(15,22,51,12,13,11) );
console.log( (Math.random()).toFixed(2) );
console.log( Math.round(Math.random()*10) );

console.log( (0.6+0.7).toFixed(2) );
console.log( parseInt('100$') );

//Обьекты
let obj = {
  product: 'iphone'
};
obj.price = 1000;
obj['currency'] = 'dollar';
obj.details = {
    model: 7,
    color: 'roseGold'
};
console.log (obj);