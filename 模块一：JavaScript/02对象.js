/**
 * 我们需要理解对象的概念，总结来说对象具有以下三个特点：
 * （1）具有唯一标识性：在编程语言中通常用内存地址来体现
 * （2）具有状态：
 * （3）具有行为：在js中将对象的状态和行为统一抽象为属性
 *
 * const obj = {
 *     a: 1,
 *     b: function () {
 *         console.log(this.a)
 *     }
 * }
 * 参照这个例子，js中将状态和行为统一抽象为属性
 * obj.b() ->输出1
 *
 * js中对象有两类属性，数据属性和访问器属性
 *
 * 数据属性具有四个特征：
 * （1）value：属性的值，默认值为undefined
 * （2）writable：决定能否修改属性的值，默认为true
 * （3）enumerable：决定for in是否可以枚举该属性，默认为true
 * （4）configurable：决定属性是否能被delete删除属性、改变特征值、能否把属性修改为访问器属性，默认为true
 *
 * 访问器属性具有四个特征：
 * （1）getter：是一个函数或者undefined，在获取属性值时会被调用，默认为undefined
 * （2）setter：是一个函数或者undefined，在设置属性值时会被调用，默认为undefined
 * （3）enumerable：决定for in是否可以枚举该属性，默认为true
 * （4）configurable：决定属性是否能被delete删除属性、改变特征值、能否把属性修改为数据属性，默认为true
 *
 * const obj={a:1}
 * 如何获取对象中某个属性的数据属性？
 * 使用Object.getOwnPropertyDescriptor(obj,'a')即可获得数据属性值
 *
 * 从上面的解析中，我们能较好地感受到，js的对象运行机制，本质上可以视作一套属性的集合
 */