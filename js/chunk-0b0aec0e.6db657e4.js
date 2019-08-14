(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b0aec0e"],{"26e8":function(e,n,t){},b9db:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-tabs",{model:{value:e.activeName,callback:function(n){e.activeName=n},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"JS 闭包",name:"first"}},[t("FirstClosure")],1)],1)],1)},s=[],r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",[e._v("Javascript变量作用域(全局变量,局部变量)。")]),t("p",[e._v("函数内部可以直接读取全局变量,函数外部自然无法读取函数内的局部变量")]),t("p",[e._v("函数内部声明变量的时候,要用var。如果不用,实际上声明了一个全局变量(声明提前)")]),t("h2",{staticClass:"color-green mt-20"},[e._v("什么是闭包")]),t("p",[t("span",{staticClass:"color-green"},[e._v("官方解释: ")]),e._v("\n    一个拥有许多变量和绑定了这些变量的环境的表达式（通常是一个函数）,因而这些变量也是该表达式的一部分\n  ")]),t("p",[t("span",{staticClass:"color-green"},[e._v("理解: ")]),e._v("\n    Javascript允许使用内部函数---即函数定义和函数表达式位于另一个函数的函数体内。\n    而且，这些内部函数可以访问它们所在的外部函数中声明的所有局部变量、参数和声明的其他内部函数。\n    当其中一个这样的内部函数在包含它们的外部函数之外被调用时，就会形成闭包\n  ")]),t("h2",{staticClass:"color-green mt-20"},[e._v("闭包的作用")]),t("p",[e._v("\n    通过使用闭包,我们可以做很多事情。比如模拟面向对象的代码风格;\n    更优雅，更简洁的表达出代码；在某些方面提升代码的执行效率\n  ")]),t("p",[e._v("\n    一个是前面提到的可以读取函数内部的变量,另一个就是让这些变量的值始终保持在内存中\n  ")]),t("h2",{staticClass:"color-green mt-20"},[e._v("闭包的特点")]),t("p",[e._v("\n    1. 由于闭包会使得函数中的变量都被保存在内存中,内存消耗很大,所以不能滥用闭包,\n    否则会造成网页的性能问题,在IE中可能导致内存泄露。\n    解决方法是,在退出函数之前，将不使用的局部变量全部删除。\n  ")]),t("h2",{staticClass:"color-green mt-20"},[e._v("JS 垃圾回收机制")]),t("p",[e._v("\n    1. 如果一个对象不再被引用,那么这个对象就会被GC回收。"),t("br"),e._v("\n    2. 如果两个对象互相引用,而不再被第3者所引用,那么这两个互相引用的对象也会被回收。"),t("br"),e._v("\n    3. 因为函数a被b引用,b又被a外的c引用,这就是为什么函数a执行后不会被回收的原因\n  ")])])}],l={},i=l,o=(t("f5be"),t("2877")),v=Object(o["a"])(i,r,c,!1,null,"078bd57e",null),u=v.exports,_={data:function(){return{activeName:"first"}},components:{FirstClosure:u}},p=_,b=Object(o["a"])(p,a,s,!1,null,"67d49f7e",null);n["default"]=b.exports},f5be:function(e,n,t){"use strict";var a=t("26e8"),s=t.n(a);s.a}}]);
//# sourceMappingURL=chunk-0b0aec0e.6db657e4.js.map