// 工厂模式
function createPeron(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;

    o.sayName = function() {
        alert(this.name);
    }

    return o;
}

// 通过createPerson() 能够创建Person对象，存在一个缺点，无法知道一个对象的类型  所以产生了后来的构造函数模式


// 构造函数模式
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    this.sayName = function() {
        alert(this.name);
    }
}

// 原型模式
function Person() {

}
Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function() {
    alert(this.name);
}


// isPrototypeOf 确定对象之间的关系


// Object.getPrototypeOf(实例) 获取实例对象中原型对象的引用


// object.hasOwnProperty(属性名) 判断该属性是否存在当前对象中 而非原型对象中

// Object.getOwnPropertyDescriptor(实例, 属性名) 只能用于实例属性

// for...in 





//// 更简单的原型语法 ////
function Person() {

}

Person.prototype = {
    name: 'Nicholas',
    age: 29,
    job: 'Software Engineer',
    sayName: function() {
        alert(this.name);
    }
}

/**
 * 存在的问题 修改了原型对象  无法通过constructor确定实例的类型了
 * 给重新定义的原型对象添加constructor 指向正确的构造函数
 */

Person.prototype = {
    constructor: Person,
    name: 'Nicholas',
    age: 29,
    job: 'Software Engineer',
    sayName: function() {
        alert(this.name);
    }
}

/**
 * 存在的问题 导致了constructor属性变成了可枚举，默认应该是不可枚举
 * 通过使用Object.defineProperty() 设置数据属性
 */

 Object.defineProperty(Person.prototype, 'constructor', {
     enumerable: false,
     value: Person
 })


//// 原型的动态性 ////
var friend = new Person();
Person.prototype.sayHi = function() {
    alert(this.name);
}
friend.sayName();


// 组合使用构造函数和原型对象模式
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    constructor: Person,
    sayName: function() {
        alert(this.name);
    }
}

// 动态原型模式
function Person(name, age) {
    this.name = name;
    this.age = age;

    if (typeof this.sayName !== 'function') {
        Person.prototype.sayName = function() {
            alert(this.name);
        }
    }
}


// 寄生构模式
function Person(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name);
    };
    return o; 
}

var person = new Person('1', 2, '3')
 
function specialArray() {
    var values = new Array();

    values.push.apply(values, arguments);

    values.toPipedString = function() {
        return this.join("|")
    }

    return values;
}


// 稳妥构造函数模式



