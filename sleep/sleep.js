/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/6 5:03
 * @version     v1.0
 * @filename    sleep.js
 * @description
 ***************************************************************************/

function sleep(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms);
    })
}

console.log(1111)
sleep(2000)
console.log(2222)