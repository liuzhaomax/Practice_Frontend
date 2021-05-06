/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/7 3:15
 * @version     v1.0
 * @filename    filter.js
 * @description filter() 方法创建一个新的数组，
 *              新数组中的元素是通过检查指定数组中符合条件的所有元素。
 ***************************************************************************/

Array.prototype.filter = function (callback, thisArg) {
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
            if (callback.call(thisArg, O[i], i, O)) {
                res.push(O[i])
            }
        }
    }
    return res
}