(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{487:function(a,t,s){"use strict";s.r(t);var r=s(10),i=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mysql-索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-索引"}},[a._v("#")]),a._v(" MYSQL 索引")]),a._v(" "),s("h2",{attrs:{id:"主键索引-聚集索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主键索引-聚集索引"}},[a._v("#")]),a._v(" 主键索引（聚集索引）")]),a._v(" "),s("h2",{attrs:{id:"辅助索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#辅助索引"}},[a._v("#")]),a._v(" 辅助索引")]),a._v(" "),s("p",[a._v("辅助索引的叶子节点并不包含记录的全部数据。叶子节点除了包含键值以外，每个叶子节点中的索引行中还包含了一个书签（"),s("code",[a._v("bookmark")]),a._v("），也就是主键。该书签用来找到索引对应的行数据。")]),a._v(" "),s("h2",{attrs:{id:"联合索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联合索引"}},[a._v("#")]),a._v(" 联合索引")]),a._v(" "),s("h2",{attrs:{id:"全文索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全文索引"}},[a._v("#")]),a._v(" 全文索引")]),a._v(" "),s("h2",{attrs:{id:"hash索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash索引"}},[a._v("#")]),a._v(" hash索引")]),a._v(" "),s("h2",{attrs:{id:"索引的一些运用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引的一些运用"}},[a._v("#")]),a._v(" 索引的一些运用")]),a._v(" "),s("h3",{attrs:{id:"联合索引-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联合索引-2"}},[a._v("#")]),a._v(" 联合索引")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.clinan.xyz/mulit-index.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"覆盖索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#覆盖索引"}},[a._v("#")]),a._v(" 覆盖索引")]),a._v(" "),s("p",[s("code",[a._v("explain select count(1) from aaa")]),a._v(" 之后，如果aaa有辅助索引，则不会使用主键索引去count()数据。因为主键索引里面数据，会导致更多的IO。extra里面使用了using index。")]),a._v(" "),s("h3",{attrs:{id:"mrr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mrr"}},[a._v("#")]),a._v(" MRR")]),a._v(" "),s("p",[a._v("使用辅助索引查询到主键之后，对主键进行排序，再进行主表查询。可以最大程度的避免磁盘的随机访问。")]),a._v(" "),s("h3",{attrs:{id:"icp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icp"}},[a._v("#")]),a._v(" ICP")]),a._v(" "),s("p",[a._v("提前过滤数据。避免更多的数据到达SQL层。")]),a._v(" "),s("h2",{attrs:{id:"b-树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-树"}},[a._v("#")]),a._v(" B+树")]),a._v(" "),s("p",[a._v("Innodb按页存储数据，一页是默认是16KB，一个指针6个字节，一个ID最长为bigint，为8个字节。\n$$\n16KB/14byte=1170\n$$\n所以一页可以保存1170个ID和指针的符合结构。")]),a._v(" "),s("ul",[s("li",[a._v("因此一颗2层高的B+树可以保存")])]),a._v(" "),s("section",[s("eqn",[s("span",{staticClass:"katex-display"},[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[a._v("16")]),s("mo",[a._v("∗")]),s("mn",[a._v("1170")]),s("mo",[a._v("=")]),s("mn",[a._v("18720")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("\n16*1170=18720\n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[a._v("1")]),s("span",{staticClass:"mord"},[a._v("6")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[a._v("∗")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[a._v("1")]),s("span",{staticClass:"mord"},[a._v("1")]),s("span",{staticClass:"mord"},[a._v("7")]),s("span",{staticClass:"mord"},[a._v("0")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[a._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[a._v("1")]),s("span",{staticClass:"mord"},[a._v("8")]),s("span",{staticClass:"mord"},[a._v("7")]),s("span",{staticClass:"mord"},[a._v("2")]),s("span",{staticClass:"mord"},[a._v("0")])])])])])])],1),s("ul",[s("li",[a._v("3层高的B+树可以保存\n$$\n16"),s("em",[a._v("1170")]),a._v("1170=21902400\n$$")])])])}),[],!1,null,null,null);t.default=i.exports}}]);