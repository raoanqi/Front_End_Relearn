/**
 * js是面向对象的，但是js实现面向对象的方式和主流的流派并不一样，js使用原型的方式实现了“基于类的面向对象”
 *
 * new运算接受一个构造器和一组调用参数，实际工作流程如下：
 * （1）以构造器的prototype属性为原型，创建一个新的对象
 * （2）将this和调用参数传递给构造器并执行
 * （3）如果构造器返回的是对象，则返回该对象，否则返回（1）中创建的对象
 *
 */

// 使用function模拟类的两种方式

// 第一种：在构造器中添加属性
function c1 () {
    this.p1 = 1
    this.p2 = function () {
        console.log(this.p1)
    }
}

var o1 = new c1()
o1.p2()

// 第二种，在构造器的prototype中添加属性
function c2 () {
}

c2.prototype.p1 = 1
c2.prototype.p2 = function () {
    console.log(this.p1)
}
var o2 = new c2()
o2.p2()

// 使用class来模拟类
class Animal {
    constructor (name) {
        this.name = name
    }

    speak () {
        console.log(this.name)
    }
}