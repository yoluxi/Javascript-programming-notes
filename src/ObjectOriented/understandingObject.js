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


// 对象的数据属性的configurable设为false之后  delete无法删除 也不能修改configurable的值 只能更改writable属性的值
var person = {};
Object.defineProperty(person, 'name', {
    configurable: false,
    value: 'Nicholas'
})

delete person.name; 

// Object.defineProperty(person. 'name', {
//     configurable: true,
//     value: 'Nicholas'
// })

Object.defineProperty(person, 'age', {})


// 定义访问器属性
var book = {
    _year: 2004,
    edition: 1
}

// 为什么新定义了一个year属性 而不是原本属性_year ？
// 因为赋值后就会触发set函数 会造成循环调用 最终导致栈溢出

Object.defineProperty(book, 'year', {
    get: function() {
        return this._year;
    },
    set: function(newValue) {
        if (newValue > 2004) {
            this._year = newValue;
            this.edition = newValue - this.edition;
        }
    }
})

book.year = 2015;
console.log(book.edition); // 2


// 定义多个属性
Object.defineProperties(book, {
    _year: {
        value: 2015,
    },
    edition: {
        value: 1
    }
})

