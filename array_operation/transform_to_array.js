/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/7 3:09
 * @version     v1.0
 * @filename    transform_to_array.js
 * @description 具有length属性的类数组转化为数组
 ***************************************************************************/

Array.from(document.querySelectorAll('div'))
Array.prototype.slice.call(document.querySelectorAll('div'))
let res = [...document.querySelectorAll('div')]
Array.prototype.concat.apply([], document.querySelectorAll('div'))
