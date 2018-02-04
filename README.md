* for of 遍历数组，能保证顺序，推荐使用 for of 遍历数组。

* for in 可以遍历到对象的原型方法和属性

* Object.keys(myObject) 不包括原型方法和属性

### 数组 的遍历方法：
1. 加强型for循环
1. for in：遍历的是数组的索引（即键名）
1. for of：遍历的是数组元素值

### 对象 的遍历方法
1. for in：遍历对象的键名
1. 用 Object.keys(obj)、Object.values(obj)、Object.entries(obj) 生成一个数组，然后遍历这个数组
1. 