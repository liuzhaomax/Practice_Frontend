/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/7 2:55
 * @version     v1.0
 * @filename    remove_duplication.js
 * @description
 ***************************************************************************/

let arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]

let res1 = Array.from(new Set(arr))
function unique2(arr) {
    let res = []
    for (let i = 0; i <arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res
}
let res2 = unique2(arr)

function unique3(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}
let res3 = unique3(arr)

function unique4(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index
    })
}
let res4 = unique4(arr)

function unique5(arr) {
    let map = new Map()
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], true)
            res.push(arr[i])
        }
    }
    return res
}
let res5 = unique5(arr)

console.log(res5)