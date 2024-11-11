/**
 *
 * @param str: {String}
 * @param symbolsCount: {Number}
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
    // Your implementation here
    // let str='asd'; let symbolsCount=3
    let symb=str.slice(-symbolsCount)
    
    str=symbolsCount<=str.length ? symb+str+symb : str
    // console.log(str);
    return str
    throw new Error('Task not implemented');
};

/**
 *
 * @param z: {Number}
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.nearest = function nearest(z, x, y) {
    // Your implementation here
// let z=100; let x=22; let y=122
let xz=Math.abs(z-x)
let yz=Math.abs(z-y)
if(xz<yz) return x;
if(xz>yz) return y;

    throw new Error('Task not implemented');
};

/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    // Your implementation here
    let uniqueArr = []; 

    for (let i = 0; i < arr.length; i++) {
      
      if (uniqueArr.indexOf(arr[i]) === -1) {
        uniqueArr.push(arr[i]); 
      }
    }
  
    return uniqueArr;

    throw new Error('Task not implemented');
};
