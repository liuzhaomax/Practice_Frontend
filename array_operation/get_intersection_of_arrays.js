/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/6 4:47
 * @version     v1.0
 * @filename    get_intersection_of_arrays.js
 * @description
 ***************************************************************************/

function getIntersection(list, ...args) {
    return list.filter(item => args.every(list => list.includes(item)))
}

console.log(getIntersection([2,1], [2,3]))
console.log(getIntersection([1,2], [3,4]))