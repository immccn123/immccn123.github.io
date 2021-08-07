---
title: 如何展示一个无法拖动的图片
layout: post
type: post
---
> 这篇~~辣鸡~~文章教你利用HTML+CSS展示一个无法在网页上拖动的图片。

当你有些图片不想被人用<kbd>F12</kbd>开发者工具扒下来的时候，你可以使用这个方法。

首先，整一个`<style>`标签：
```html
<style>

</style>
```
然后敲上一个class:
```html
<style>
    .image {
        background-image: url("[这里写你的图片链接]");
    }
</style>
```
完成。效果如上面的封面图。

水博客是一件开心的事情。