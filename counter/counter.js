/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/1 3:39
 * @version     v1.0
 * @filename    counter.js
 * @description
 ***************************************************************************/

function count(){
    let i=0;
    return function () {
        return ++i;
    }
}

c1 = count(); // 有引用，内存不被释放
console.log(c1());  //print1
console.log(c1());  //print2
console.log(c1());  //print3

c2 = count();
console.log(c2());  //print1

c1 = null // 手动释放内存
c2 = null

console.log(count()()) //print1 无引用，内存被释放
console.log(count()()) //print1 无引用，内存被释放