// 1 Как записать проще не придумала
let locationStr = 'I am in the easycode',
    camelCase = '';
for (let i = 0; i < locationStr.length; i++){
    if (locationStr[i-1] === ' '){
        camelCase += locationStr[i].toUpperCase()
    } else camelCase += locationStr[i];
}
console.log( '1.', camelCase );

// 2
let str = 'tseb eht ma I',
    reverseStr = '';
for (let i = str.length-1; i >= 0; i--){
    reverseStr += str[i]
}
console.log( '2.', reverseStr );

//3
let factorial = 1,
    num = 10; //num = 10;-можно не задавать как переменную, а в i <= 10
for (let i = 1; i <= 10; i++){
    factorial *= i
}
console.log( '3.', factorial );

//4 numCount = 10;-можно не задавать как переменную, а в i <= 10
let counterStr = 'Считаем до 10:',
    numCount = 10;
for (let i = 1; i <= numCount; i++){
    counterStr += i + ','
}

console.log( '4.', counterStr );

//5
let camelCaseNoSpaces = '',
    string = 'JavaScript is a pretty good language';
for (let i = 0; i < string.length; i++){
    if (string[i-1] === ' ')camelCaseNoSpaces += string[i].toUpperCase();
    else if(string[i] === ' ') continue;
    else camelCaseNoSpaces += string[i];
}
console.log( '5.', camelCaseNoSpaces );

//6
for (let i = 1; i <= 15; i++ ){
   if (i%2) console.log( '6.',i );
   else continue;
}
