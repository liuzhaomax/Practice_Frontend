/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/6 4:35
 * @version     v1.0
 * @filename    list_split.js
 * @description
 ***************************************************************************/

function listChunk(list, size = 1, cacheList = []) {
    let tmp = [...list]
    if (size <= 0) {
        return cacheList
    }
    while (tmp.length) {
        cacheList.push(tmp.splice(0, size))
    }
    return cacheList
}

console.log(listChunk([1,2,3,4,5]))
console.log(listChunk([1,2,3,4,5,6], 2))
console.log(listChunk([1,2,3,4,5], 2))