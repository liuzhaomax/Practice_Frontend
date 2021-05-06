/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/7 3:59
 * @version     v1.0
 * @filename    call.js
 * @description
 ***************************************************************************/

Function.prototype.call = function (context = window, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('not a function')
    }
    let fn = Symbol('fn')
    context[fn] = this
    let res = context[fn](...args)
    delete context[fn]
    return res
}