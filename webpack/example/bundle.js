/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2022/2/13 10:25
 * @version     v1.0
 * @filename    bundle.js
 * @description
 ***************************************************************************/

(function (modules) {
    function require(id) {
        const [fn, mapping] = modules[id]
        const module = {
            exports: {},
        }
        function localRequire(filePath) {
            const id = mapping[filePath]
            return require(id)
        }
        fn(localRequire, module, module.exports)
        return module.exports
    }

    require(0)

})({
    0:  [
        function (require, module, exports) {
            const { foo } = require(1)

            foo()
            console.log("main.js")
        }, {
            "./foo.js": 1
        }
    ],
    1: [
        function (require, module, exports) {
            function foo() {
                console.log("foo.js")
            }
            module.exports = {
                foo,
            }
        }, {

        }
    ],
})