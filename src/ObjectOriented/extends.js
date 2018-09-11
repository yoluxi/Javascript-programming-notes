// 继承


// 实例和原型的关系
function SuperType() {

}

SuperType.prototype.getSuperValue = function() {
    return true;
}

function SubType() {

}

SubType.prototype = new SuperType();

var instance = new SubType();

console.log(instance instanceof SubType)  // true
console.log(instance instanceof SuperType) // true 
console.log(instance instanceof Object)  // true

// instanceof 用来判断构造函数的原型对象是否存在于实例的原型链上


// 借用构造函数
function SuperType() {
    this.colors = ['blue', 'red', 'green']
}

SuperType.prototype.getSuperValue = function() {

}

function SubType() {
    SuperType.call(this)  // 如果不使用借用构造函数的话 会导致colors在子类中共享 无法隔离
}

// 组合继承
SubType.prototype = new SuperType();

var instance1 = new SubType();
var instance2 = new SubType();
instance1.colors.push('gray');
console.log(instance1.colors)
console.log(instance2.colors)


// 原型式继承
function object(o) {
    function F() {}
    F.prototype = o
    return new F()
}

var person = {
    name: 'bob',
    colors: ['blue', 'red']
}

var instance3 = object(person);
var instance4 = object(person);
instance4.colors.push('green')
console.log(instance3.colors)



// 寄生式继承
function createAnother(original) {
    var clone = object(original)
    clone.sayName = function() {
        alert('hi')
    }
    return clone;
}


// 寄生组合式继承
function inheritPrototype(SubType, SuperType) {
    var prototype = object(SuperType);
    prototype.constructor = SubType;
    SubType.prototype = prototype;
}


function SuperType(name) {
    this.name = name;
    this.colors = ['blue', 'red'];
}

SuperType.prototype.sayName = function() {
    alert(this.name);
}

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;

}

inheritPrototype(SubType, SuperType)
SubType.prototype.sayAge = function() {
    alert(this.age);
}





