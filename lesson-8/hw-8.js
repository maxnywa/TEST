//1
const rectangle= {
    width : 20,
    height: 30,
    getSquare: function () {
        return this.width * this.height
    }
};
console.log(rectangle.getSquare());

// 2
const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price
    },
    getSalePrice: function () {
        return this.price / 100 * (100 - parseInt(this.discount));
    }
};
console.log(price.getSalePrice());

//3
const user = {
    name: 'Abraham',
    getName: getUserName,
};
function getUserName () {
    return this.name
}
console.log(user.getName());

//4
const object = {
    height: 10,
    increase: function () {
        return this.height + 1
    }
};
console.log(object.increase());

//5
const numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this
    },
    plusOne: function () {
        this.value += 1;
        return this
    },
    minusOne: function () {
        this.value -= 1;
        return this
    },
};
numerator.double()
    .plusOne()
    .plusOne()
    .minusOne();
console.log(numerator.value);

//6
const firstUser = {
    name: 'Abraham'
},
otherUser = {
  name: 'Jhon',
  getName: function () {
      return this.name;
  }
};

//firstUser.getName; - вызов не существующего метода
firstUser.getName = otherUser.getName; // одалживание метода

console.log(firstUser.getName());
console.log(otherUser.getName());