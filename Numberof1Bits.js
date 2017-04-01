/*
Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // method 1: toString(2)
    var arry = n.toString(2).split('');
    var count = 0;
    arry.forEach(function(item){
        if(item === '1') count++;
    });
    return count;
     
    // method 2: 
    // var ans = 0;
    // while(n) {
    //     if (n & 1) ans ++;
    //     n = Math.floor(n/2);
    // }
    // return ans;
};
