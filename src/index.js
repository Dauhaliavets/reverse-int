module.exports = function reverse (n) {
    if(n < 0) {
        return +(n.toString().split('').splice(1).reverse().join(''));
    } 
    return +(n.toString().split('').reverse().join(''));
}
