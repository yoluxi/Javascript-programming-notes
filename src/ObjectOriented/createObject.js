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

// 通过createPerson() 能够创建Person对象
