### 面向对象的程序设计
```
js中没有类的概念，因此跟传OO的语言有所不同
```

### 什么是对象
```
ECMA-262对象的定义： 无序属性的集合，其属性可以包含基本值，对象或者函数。
                   每个对象都是基于一个引用类型创建的
```

### 属性类型
```
ECMAScript中有两种属性： 数据属性和访问器属性

什么是数据属性？
数据属性包含一个数据值的位置，从这个位置可以读取和写入值，数据属性有4个描述其行为的4个特性

1 [[Configurable]]  能否通过delete删除属性，修改属性的特性，能否吧属性修改为访问器属性 默认为true
2 [[Enumerable]]  是否可以for...in 默认为true
3 [[Writable]]  是否能修改属性的值  默认为true
4 [[Value]]  包含这个属性的数据值，默认为undefined

在调用Object.defineProperty()时  若不指定数据属性的特性 除[[Value]]外都是false

为什么IE8上不能使用Object.defineProperty()?
IE8这个方法只作用域DOM, 而且只能创建访问器属性

什么是访问器属性？
访问器属性不包含数据值，它们包含一堆getter，setter函数，访问器属性有4个特性

1 [[Configurable]]  能否通过delete删除属性，修改属性的特性，能否吧属性修改为访问器属性 默认为true
2 [[Enumerable]]  是否可以for...in 默认为true
3 [[Set]]  在写入属性时调用的函数 默认值为undefined
4 [[Get]]  在读取属性时调用的函数 默认值为undefined

访问器属性不能直接定义，必须使用Object.defineProperty()来定义

在不支持Object.defineProperty()方法的浏览器中，不能修改[[Configurable]]和[[Enumerable]]

```