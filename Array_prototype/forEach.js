/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/7 3:27
 * @version     v1.0
 * @filename    forEach.js
 * @description forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
 ***************************************************************************/

Array.prototype.forEach = function (callback, thisArg) {
    if (this == undefined) {
        throw new TypeError('this is null or undefined')
    }
    if (typeof  callback !== 'function') {
        throw new TypeError(callback + 'is not a function')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let k = 0
    while (k < len) {
        if (k in O) {
            callback.call(thisArg, O[k], k, O)
        }
        k++
    }
}