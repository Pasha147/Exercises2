/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param step: {Number}
 * @returns {String}
 */
module.exports.createString = function createString(x, y, step) {
    // Your implementation here
    let str = "";
    for (let i = x; i <= y; i += step) {
        str = i==y? str + `${i}`: str + `${i} `;
    }
    return str;
    throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum1 = function rangeSum1(x, y) {
    // Your implementation here
    // let x=0; let y=4;
    let str = "";
    let sum=0
    for (let i = y; i >= x; i--) {
        for (let j = x; j <= i; j++) {
            str = str + `${j == x && i==y ? `${j}` : `+${j}`}`;
            sum=sum+j
        }
    }
    // console.log(`result: ${sum} (${str})`);
    // return `result: ${sum} (${str})`
    return sum
    
    throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum2 = function rangeSum2(x, y) {
    // Your implementation here
    // let x=0; let y=4;
    let sum=0
    let str=''
    for (let i=x; i<=y; i++){
        sum=sum+i
        str=i==x?`${i}`:str+`+${i}`
    }
    // console.log(`result: ${sum} ${str}`);
    // return `result: ${sum} ${str}`
    return sum
    
    throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @returns {String}
 */
module.exports.seriesSum = function seriesSum(x) {
    // Your implementation here
    let sum = 0;
    for (let i = 1; i <= x; i++) {
        sum += 1 / (i * i); 
    }

    return sum.toFixed(2); 
    throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @returns {Number}
 */
module.exports.countDigits = function countDigits(x) {
    // Your implementation here
    return x.toString().length;
    throw new Error("Task not implemented");
};
