// 创建对象
var person = new Object();
person.name = 'Nicholas';
person.age = 29;
person.job = "Software Engineer";

person.sayName = function() {
    alert(this.name);
}

// 对象字面量创建对象
var person = {
    name: 'Nicholas',
    age: 29,
    job: 'Software Engineer',
    sayName: function() {
        alert(this.name);
    }
}

// 修改属性默认的特性
// Object.definePerperty()
// @param {Object} 属性所在的对象
// @param {String} 属性的名字
// @param {Object} 描述符对象

var person = {};
Object.defineProperty(person, 'name', {
    writable: false,
    value: 'Nicholas'
})
console.log(person.name);  // Nicholas
person.name = 'Greg'; // 严格模式会抛出错误 TypeError: Cannot assign to read only property 'name' of object
console.log(person.name); // Nicholas




