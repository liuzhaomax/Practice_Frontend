/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/7 4:00
 * @version     v1.0
 * @filename    bind.js
 * @description
 ***************************************************************************/

Function.prototype.bind = function (context = window, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('not a function')
    }
    var self = this
    return function F() {
        // 考虑new的情况
        if (this instanceof F) {
            return new self(...args, ...arguments)
        }
        return self.apply(context, [...args, ...arguments])
    }
}