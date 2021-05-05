/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/6 5:19
 * @version     v1.0
 * @filename    fade.js
 * @description [not confirmed]
 ***************************************************************************/

function fade(el, type = "in") {
    el.style.opacity = type === "in" ? 0 : 1
    let last = +new Date() //1970年1月1日午夜以来的毫秒数
    function tick() {
        let opacityValue = type === "in"
            ? (new Date() - last) / 400
            : -(new Date() - last) / 400
        el.style.opacity = +el.style.opacity + opacityValue
        last = +new Date()
        if ( type === "in"
            ? (+el.style.opacity < 1)
            : (+el.style.opacity > 0)) {
            requestAnimationFrame(tick)
        }
    }
    tick()
}