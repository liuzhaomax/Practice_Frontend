/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/7 2:34
 * @version     v1.0
 * @filename    flat.js
 * @description
 ***************************************************************************/

let arr = [1,[2,[3,[4, 5], 6]]]

// let res1 = arr.flat(Infinity)

let res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',') // return string
let res3 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']') // return array

function flatten1 (arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten1(cur) : cur)
    }, [])
}
let res4 = flatten1(arr)  // return array

let res5 = []
function flatten2 (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten2(arr[i])
        } else {
            res5.push(arr[i])
        }
    }
}
flatten2(arr)

console.log(res5)