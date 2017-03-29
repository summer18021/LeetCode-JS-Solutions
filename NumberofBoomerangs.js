/*
Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var len = points.length;
    var res = 0;
    for(let i=0; i<len; i++){
        let hash = {};
        for(let j=0; j<len; j++){
            if(i===j) continue;
            let d = getDistance(points[i], points[j]);
            if(!hash[d]) hash[d]=1;
            else hash[d]++;
        }
        for(let k in hash){
            res += hash[k]*(hash[k]-1);
        }
    }
    return res;
};
var getDistance = function(p, q){
    let dx = p[0]-q[0];
    let dy = p[1]-q[1];
    return dx*dx+dy*dy;
};
