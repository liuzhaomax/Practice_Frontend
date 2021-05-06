/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/7 3:47
 * @version     v1.0
 * @filename    apply.js
 * @description
 ***************************************************************************/

Function.prototype.apply = function (context = window, args) {
    if (typeof this !== 'function') {
        throw new TypeError('not a function')
    }
    let fn = Symbol('fn')
    context[fn] = this
    let res = context[fn](...args)
    delete context[fn]
    return res
}