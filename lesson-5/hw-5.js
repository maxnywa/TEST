//Задача 6
function fromArrToString (arr, handler){
    let newValue = '';
    for (let i = 0; i < arr.length; i++){
        newValue += ( handler(arr[i]) )
    }

    return 'New value:' + newValue
}

console.log ( fromArrToString( ['my','name','is','Trinity'], value => value[0].toUpperCase() + value.slice(1) ) );
console.log ( fromArrToString( [10,20,30], item => item * 10 + ',' ) );
console.log ( fromArrToString ( [{age:45, name:'Jhon'},{age:20, name:'Aaron'}], ({age,name}) => name +' is '+ age + ',') );
console.log ( fromArrToString ( ['abc', '123'], item => item.split('').reverse().join('') + ',' ) );

//Every,some
let numbArr = [2,4,7,1,-2,10,-9];
function every(arr,func){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if (!func(arr[i],i,arr)) count++
    }
    return count === 0
}

console.log ( 'every', every(numbArr, (items,i,arr) => {
    return items > 0;
}) );

function some(arr,func){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if (!func(arr[i],i,arr)) count++
    }
    return !(count === 0)
}

console.log ( 'some', some(numbArr, (items,i,arr) => {
    return items > 0;
}) );


//Массивы
//2
let numArr = [2,4,7,1,-2,10,-9];
numArr.sort((prev,next) => next-prev);

console.log(numArr);

//3

let getNewArr = (arr,start,end) => arr.slice(start,end+1)
console.log(getNewArr(['a','b','c','d','e','f'],2,4) );

//8
let sortArr = [[14,15],[1],['a','b','c']];
sortArr.sort((prev,next) => prev.length - next.length);

console.log(sortArr);

//10
 let proc = [
     {cpu:'intel',info:{cores:2,cache:3}},
     {cpu:'intel',info:{cores:4,cache:4}},
     {cpu:'amd',info:{cores:1,cache:1}},
     {cpu:'intel',info:{cores:3,cache:2}},
     {cpu:'amd',info:{cores:4,cache:2}},
 ];

proc.sort((prev,next) => prev.info.cores - next.info.cores);

console.log(proc);

//11
const products = [
    {title:'prod1',price:5.2},{title:'prod2',price:0.18},
    {title:'prod3',price:15},{title:'prod4',price:25},
    {title:'prod5',price:18.9},{title:'prod6',price:8},
    {title:'prod7',price:19},{title:'prod8',price:63},
];

function filterCollection(products,min,max) {
    let filterProducts = [];

    for (let i = 0; i < products.length; i++){
        if ( products[i].price >= min && products[i].price <= max ){
            filterProducts.push(products[i])
        }
    }

    return filterProducts.sort( (prev,next) => prev - next )
}

console.log (filterCollection(products,15,30));

// Второй вариант, но значенния min,max заданы вручную, можно их вынести в переменные
let filtredProducts = products.filter( (product) => {
    return (product.price >= 15 && product.price <= 30);
});

console.log ( filtredProducts.sort( (prev,next) => prev - next ) );

//массивы Es5

//2
let numbersArr = [1,2,3,5,8,9,10];
let newNumbersArr = numbersArr.map(number => {
    return {digit:number, odd:!(number%2 === 0)};
});
console.log(newNumbersArr);

//5

let chars = [
    {char:'a', index:12},{char:'w', index:8},{char:'y', index:10},
    {char:'p', index:3},{char:'N', index:6},{char:' ', index:5},
    {char:'y', index:4}, {char:'r', index:13},{char:'H', index:0},
    {char:'e', index:11},{char:'a', index:1},{char:' ', index:9},
    {char:'!', index:14},{char:'e', index:7},{char:'p', index:2}
];
 function joinSentence(chars) {
     let sentence = '';
     chars.sort((prev,next) => prev.index - next.index);
     sentence = chars.reduce((prevVal,item) =>{
        return prevVal + item.char;
     },' ');
     return sentence;
     }
console.log( joinSentence(chars) );

