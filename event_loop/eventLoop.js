/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2022/2/15 0:20
 * @version     v1.0
 * @filename    eventLoop.js
 * @description
 ***************************************************************************/

async function async1() {
    console.log("async1 start");
    await async2();
    //断
    console.log("-----------------");
    await async3();
    console.log("async1 enddddddddddddddddddddddddddddddddddddddddddd");
}

async function async2() {
    console.log("async2");
}

async function async3() {
    console.log("async3");
}

console.log("script start");

setTimeout(function() {
    console.log("setTimeout");
}, 0);

async1();

new Promise(function(resolve) {
    console.log("promise1");
    resolve();
}).then(function() {
    console.log("promise2");
});

console.log("script end");