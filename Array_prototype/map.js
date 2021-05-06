/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/7 3:20
 * @version     v1.0
 * @filename    map.js
 * @description map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
 ***************************************************************************/

Array.prototype.map = function (callback, thisArg) {
    if (this == undefined) {
        throw new TypeError('this is null or undefined')
    }
    if (typeof  callback !== 'function') {
        throw new TypeError(callback + 'is not a function')
    }
    let res = []
    let O = Object(this)
    let len = O.length >>> 0
    for (let i = 0; i < len; i++) {
        if (i in O) {
            res[i] = callback.call(thisArg, O[i], i, this)
        }
    }
    return res
}