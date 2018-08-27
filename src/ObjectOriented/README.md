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

1 [[Configurable]] 能否通过delete删除属性，修改属性的特性，能否吧属性修改为访问器属性 默认为true
2 [[Enumerable]]  是否可以for...in 默认为true
3 [[Writable]] 是否能修改属性的值  默认为true
4 [[Value]] 包含这个属性的数据值，默认为undefined

什么是访问器属性？

```