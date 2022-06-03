/**
 * JS中目前支持了7种类型
 * Undefined
 * Null
 * Boolean
 * String
 * Number
 * Symbol
 * Object
 *
 * Undefined:代表未定义，此类型仅有一个值，就是undefined
 *
 * 问题：为何有的编程规范中，要求使用void 0来替代undefined？
 * JS在设计时，undefined并不属于关键字，仅仅代表一个变量的值，因此为了避免被无意中篡改，建议使用void 0进行替代
 *
 * Null:代表定义了但是为空（因此在实际编程时，一般不会将变量赋值为undefined），此类型仅有一个值，就是null，请注意，null是JS种的关键字，这点与undefined不同
 *
 * Boolean:有两个值，true和false，true和false均为JS的关键字
 *
 * String:用于表示文本数据
 *
 * Number:数字类型，范围在[2^64-2, 2^53+3]
 *
 * 此外，JS为了表达几个额外的场景，设置了几个例外的情况：
 * NaN:表示非数字
 * Infinity:无穷大
 * -Infinity:负无穷大
 *
 * 此外，JS中存在+0和-0，在加法运算中不会有差异，但是在除法运算中需要留意，例如1/-0得到的是-Infinity而不是Infinity
 * 区分+0与-0，可以根据1/x得到的是-Infinity还是Infinity来进行判断
 *
 * 在JS中，不要使用==或者===来对浮点数进行比较，这样可能会得到错误的结果，
 * 正确的方式，是判断运算结果的绝对值是否小于最小精度
 * Math.abs(0.1+0.2-0.3)<=Number.EPSILON
 *
 * Symbol:ES6中新增的类型，创建Symbol类型的方式，是使用全局的Symbol函数，
 * 例如  let sym01=Symbol('test')
 *
 * Object: 对象类型，是JS种最复杂的类型，也是JS的核心机制之一
 *
 * 类型转换：JS是弱类型语言，因此会频繁地进行类型转换，规则可参考https://zhuanlan.zhihu.com/p/85731460
 *
 * 其中，有几种类型转换需要我们注意：
 *
 * （1）String->Number: 支持十进制、二进制、八进制、十六进制，此外JS支持的字符串语法也允许正负号科学计数法，
 * 可以使用大写或者小写的e来表示，例如：Number('1e3')就是1000
 *
 * （2）parseInt和parseFloat并不使用上述机制进行实现，具体可参考https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 * 在多数情况下，Number是比parseInt，parseFloat更好的方案
 *
 * （3）Number->String: 当Number的绝对值较大或者较小时，字符串会使用科学计数法进行表示，其实是为了保证产生的字符串不会过长
 *
 * （4）装箱转换：Number，String，Boolean，Symbol在对象中都有对应的类，装箱就是将基本类型转换为对应的对象，装箱机制会频繁产生临时对象，
 * 在一些对性能要求较高的场景下，应该尽量避免对基本类型进行装箱转换
 *
 * （5）拆箱转换：将对象类型转换为基本类型，拆箱转换会尝试调用valueOf和toString来获取拆箱后的基本类型，如果这两个方法都不存在，
 * 或者没有返回基本类型，就会产生类型错误TypeError
 * 例如：
 * let o={
 *     valueOf(){
 *         console.log('valueOf')
 *         return {}
 *     },
 *     toString(){
 *         console.log('toString')
 *         return {}
 *     }
 * }
 * o*2会输出：
 * valueOf  -> 调用了valueOf
 * toString -> 调用了toString
 * TypeError -> 依然没有返回基本类型，报错，拆箱失败
 *
 * 注意，在ES6之后，允许使用Symbol.toPrimitive覆盖原有的行为，例如：
 * let o={
 *     valueOf(){
 *         console.log('valueOf')
 *         return {}
 *     },
 *     toString(){
 *         console.log('toString')
 *         return {}
 *     }
 * }
 * o[Symbol.toPrimitive]=()=>{console.log('test');return 'hello'}
 * console.log(o+'') -> 会使用新定义的方法，输出test，并完成字符串拼接hello
 */
