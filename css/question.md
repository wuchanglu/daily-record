# 真题

## 隐藏元素的方式

1. display: none; 完全隐藏
2. opacity: 0; 视觉隐藏
3. visibility: hidden; 视觉隐藏
4. 宽高为 0; 视觉隐藏
5. 定位出视图; 视觉隐藏
6. 设置 aria-hiden="true" 语义上隐藏，针对读屏软件

## css 中属性的计算过程

1. 使用样式声明，如果遇到了层叠冲突就根据权重解决冲突
2. 如果没有样式声明，就使用继承的样式如 font-size color font-weight 等(继承走就进原则)
3. 如果没有样式声明，也没有继承到对应的样式，那就使用默认值

## 权重计算分值

1. 行间样式 1000
2. id 选择器 100
3. 类、伪类、属性选择器 10
4. 标签、伪元素选择器 1

## 简述 css 中的层叠规则

1. 重要性 !important：设置对应条目样式属性值最重要
2. 专用性： 专用性主要是指看能匹配多少元素，能匹配的元素越少专用性越高(css 权重)
3. 源代码的次序：在重要性和专用性一致的情况下，由源代码的先后顺序来决定。后写的覆盖前面的

## css引用的方式有哪些？link和@import的区别?
css引用的方式有: 
- 外联，通过link标签外部链接样式文件
- 内联，在head标记中使用style标记定义样式
- 嵌入，在元素的开始标记里通过style属性定义样式  

link 和 @import的区别
1. link属于html标签，而@import完全是css提供的一种方式
2. 加载顺序不同 @import需要页面网页完全载入以后加载 而link标签按顺序加载
3. 兼容性的差别，IE5以上的浏览器才能使用@import
4. link支持使用Javascript控制DOM去改变样式；而@import不支持。