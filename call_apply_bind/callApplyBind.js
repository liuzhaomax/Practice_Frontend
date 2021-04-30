/****************************************************************************
 * @copyright   LIU Zhao
 * @authors     LIU Zhao (liuzhaomax@163.com)
 * @date        2021/5/1 3:56
 * @version     v1.0
 * @filename    callApplyBind.js
 * @description
 ***************************************************************************/
// call apply bind 改变this指向
function Fruits(){}

Fruits.prototype = {
    color: "red",
    say: function(){
        console.log("My color is " + this.color);
    }
};

var another = {
    color: "yellow"
};

var apple = new Fruits;
apple.say();                //My color is red
apple.say.call(another);    //My color is yellow
apple.say.apply(another);   //My color is yellow

// call(thisObj, arg1, arg2, arg3, arg4);
// apply(thisObj, [args]);
// bind(thisObj, arg1, arg2, arg3, arg4)(); bind 返回函数

//实现js继承
//父类
function Person(name, height) {
    this.sayInfo = function() {
        return "姓名：" + name + ", 身高：" + height + ", 体重：" + this.weight;
    }
}
//子类
function Chinese(name, height, weight) {
    Person.call(this, name, height);
    this.weight = weight;

    this.nation = function() {
        console.log("我是中国人");
    }
}
//子类
function America(name, height, weight) {
    Person.apply(this, [name, height]);
    this.weight = weight;
}

let chiness = new Chinese("成龙", "178cm", "60kg");
console.log(chiness.sayInfo());    //姓名：成龙, 身高：178cm, 体重：60kg
let america = new America("jack", "180cm", "55kg");
console.log(america.sayInfo());    //姓名：jack, 身高：180cm, 体重：55kg