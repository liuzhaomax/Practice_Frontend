/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2022/2/13 9:26
 * @version     v1.0
 * @filename    index.js
 * @description
 ***************************************************************************/

// import fs from 'fs'
const fs = require('fs')
const path = require("path")
const parser = require("@babel/parser")
const traverse = require("@babel/traverse")
const ejs = require("ejs")
const { transformFromAst } = require("babel-core")

let id = 0

// 1. 获取文件内容
// 2. 获取依赖关系 AST
// 把依赖关系当成数据结构 图
// AST -> 抽象语法树

function createAsset(filePath) {
    // 1
    const source = fs.readFileSync(filePath, {
        encoding: "utf-8"
    })
    // console.log(source)

    // 2
    const ast = parser.parse(source, {
        sourceType: "module",
    })
    // console.log(ast)

    const deps = []
    traverse.default(ast, {
        ImportDeclaration({node}) {
            // console.log(node.source.value)
            deps.push(node.source.value)
        }
    })

    const {code} = transformFromAst(ast, null, {
        presets: ["env"],
    })

    return {
        filePath,
        code,
        deps,
        id: id++,
        mapping: {},
    }
}

// const asset = createAsset("./example/main.js")
// console.log(asset)

function createGraph(filePath) {
    const mainAsset = createAsset(filePath)
    const queue = [mainAsset]
    for (const asset of queue) {
        asset.deps.forEach(relativePath => {
            const child = createAsset(path.resolve("./example", relativePath))
            asset.mapping[relativePath] = child.id
            queue.push(child)
        })
    }
    return queue
}

const graph = createGraph("./example/main.js")
// console.log(graph)

function build(graph) {
    const template = fs.readFileSync("./bundle.ejs", {encoding:"utf-8"})
    const data = graph.map(asset => {
        const { id, code, mapping } = asset
        return {
            id,
            code,
            mapping,
        }
    })
    const code = ejs.render(template, { data })
    fs.writeFileSync("./dist/bundle.js", code)
}

build(graph)