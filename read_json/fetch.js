/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/28 9:47
 * @version     v1.0
 * @filename    fetch.js
 * @description
 ***************************************************************************/

fetch("countries.json")
    .then(response => response.json())
    .then(json => console.log(json))