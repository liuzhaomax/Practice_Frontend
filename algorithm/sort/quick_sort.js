/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/27 21:44
 * @version     v1.0
 * @filename    quick_sort.js
 * @description
 ***************************************************************************/

let quickSort = function(arr) {
    let _arr = arr
    if (_arr.length <= 1) { return _arr }
    let pivotIndex = Math.floor(_arr.length / 2)
    let pivot = _arr.splice(pivotIndex, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < _arr.length; i++){
        if (_arr[i] < pivot) {
            left.push(_arr[i])
        } else {
            right.push(_arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}