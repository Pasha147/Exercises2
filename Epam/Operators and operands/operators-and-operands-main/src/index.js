/**
 *
 * @param number1: {Number}
 * @param nunber2: {Number}
 * @returns {Number}
 */
module.exports.getSum = function getSum(number1, number2) {
     // Your implementation here
     let sum=number1+number2
     sum=parseFloat(sum.toFixed(1))
    return sum
    throw new Error('Task not implemented');
};

/**
 *
 * @param name: {String}
 * @param surname: {String}
 * @param age: {Number}
 * @returns {String}
 */
 module.exports.greeting = function greeting (name, surname, age)  {
    // Your implementation here
    return `Hello, my name is ${name} ${surname} and I am ${age} years old.`
    throw new Error('Task not implemented');
};

/**
 *
 * @param x: {Number}
 * @returns {Boolean}
 */
module.exports.isSquare = function isSquare(x) {
    // Your implementation here
    return Math.sqrt(x) % 1 === 0;
    throw new Error('Task not implemented');
};


