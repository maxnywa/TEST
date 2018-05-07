// Присваивание
// 1
let a, b, c, x, y, i, value;
// a += 10;
// b *= 18;
// c -=10;
// x += a;
// y *= z;
// i *= 5 * y;

// 2 Возведение в квадрат
x *= x;

// Условные операторы

if (value === 'hidden') value = 'visible';
else value = 'hidden';

value = value === 'hidden'? 'visible': 'hidden';

if (x === 0) x = 1;
else if (x < 0) x = 'less then zero';
else x *= 10;

x = x === 0 ? 1
    :x < 0 ? 'less then zero'
        : x * 10;

// Switch case

switch (a){
    case 'block':
        console.log ('block');
        break;
    case 'none':
        console.log ('none');
        break;
    case 'inline':
        console.log ('inline');
        break;
    default:
        console.log ('other');
};

// Преобразование типов

a = 0 || 'string'; //'string' - так как true
a = 1 && 'string'; //'string' - так как && ищет false, в случае отсутствия выдаст поледнее true
a = null || 25; // 25 -true
a = null && 25; // null - false
a = null || 0 || 35; // 35 -true
a = null && 0 && 35; // null -на первом false остановится

// 12 + 14 + '12' - '2612' - сработает первое математическое сложение, а дальше конкатенация
// 3 + 2 - '1' - 4 - нет + перед строкой, будет преобразование к числу
// '3' + 2 - 1 - 31 - справа математическое вычетание, а потом сложение со строкой приведет к строке
// true + 2 - 3, true - преобразуется к числу - 1
// +'10' + 1 - 11, + перед строкой приводит к преобразованию к числу
// undefined + 2 - NaN - undefined не преобразовывается к числу
// null + 5 - 5, null->0
// true + undefined - NaN, undefined != 0

