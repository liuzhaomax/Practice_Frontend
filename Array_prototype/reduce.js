/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/7 3:29
 * @version     v1.0
 * @filename    reduce.js
 * @description reduce() 方法接收一个函数作为累加器，
 *              数组中的每个值（从左到右）开始缩减，最终计算为一个值。
 ***************************************************************************/

Array.prototype.reduce = function (callback, initialValue) {
    if (this == undefined) {
        throw new TypeError('this is null or undefined')
    }
    if (typeof  callback !== 'function') {
        throw new TypeError(callback + 'is not a function')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let accumulator = initialValue
    let k = 0
    if (accumulator === undefined) {
        // 如果initialValue是undefined，数组的第一个有效值为初始值
        while (k < len && !(k in O)) {
            k++
        }
        if (k >= len) {
            throw new TypeError('Reduce of empty array with no initial value')
        }
        accumulator = O[k++]
    }
    while (k < len) {
        if (k in O) {
            accumulator = callback.call(undefined, accumulator, O[k], k, O)
        }
        k++
    }
    return accumulator
}

let arr = [10, 7, 1, 2]
let res = arr.reduce((prev, curr) => {
    return prev - curr
}, 40)

console.log(res)
