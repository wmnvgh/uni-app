(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0968":function(t,a,e){var i=e("0a51");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("e34bcd4c",i,!0,{sourceMap:!1,shadowMode:!1})},"0a51":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"uni-page-head[data-v-3a4bb140]{display:none}",""]),t.exports=a},"3c78":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{intt:[],ndate:"",old:[],lll:[],da:0,date:0,loding:!0}},onLoad:function(){var t=this;uni.request({url:"https://apis.netstart.cn/zhihudaily/stories/latest",success:function(a){t.intt=a.data,t.ndate=a.data.date}})},onReachBottom:function(){var t=this;uni.request({url:"https://apis.netstart.cn/zhihudaily/stories/before/"+this.ndate,success:function(a){t.old=a.data,t.lll.push(t.old),t.ndate=t.old.date}})},methods:{navTo:function(t){uni.navigateTo({url:"../detail/detail?id="+t.currentTarget.dataset.x})},one:function(){uni.navigateTo({url:"../person/person"})}},computed:{hello:function(){var t=(new Date).getHours();return t<10&&t>6?"早上好":t<18&&t>14?"下午好":t<22&&t>20?"晚上好":t<5?"早点休息~":"知乎日报"},CM:function(){return(new Date).getMonth()+1===1?"一月":(new Date).getMonth()+1===2?"二月":(new Date).getMonth()+1===3?"三月":(new Date).getMonth()+1===4?"四月":(new Date).getMonth()+1===5?"五月":(new Date).getMonth()+1===6?"六月":(new Date).getMonth()+1===7?"七月":(new Date).getMonth()+1===8?"八月":(new Date).getMonth()+1===9?"九月":(new Date).getMonth()+1===10?"十月":(new Date).getMonth()+1===11?"十一月":"十二月"},TD:function(){return(new Date).getDate()}}};a.default=i},"436d":function(t,a,e){"use strict";e.r(a);var i=e("3c78"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"491e":function(t,a,e){"use strict";e.r(a);var i=e("ea32"),n=e("436d");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("85e5"),e("9477");var s,r=e("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"3a4bb140",null,!1,i["a"],s);a["default"]=l.exports},"85e5":function(t,a,e){"use strict";var i=e("9498"),n=e.n(i);n.a},"8d7e":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.top[data-v-3a4bb140]{display:flex;align-items:center;padding:2px 15px}.top .t1[data-v-3a4bb140]{text-align:center;position:relative;margin-right:20px}.top .t1 uni-view[data-v-3a4bb140]:nth-child(1){font-weight:600;font-size:20px}.top .t1[data-v-3a4bb140]::after{position:absolute;left:38px;top:11px;content:"";width:1px;height:25px;border-right:2px solid #ccc;clear:both}.top .t2[data-v-3a4bb140]{font-size:25px;font-weight:600}.top .t3[data-v-3a4bb140]{margin-left:auto}.top .t3 uni-image[data-v-3a4bb140]{width:35px;height:35px}.banner[data-v-3a4bb140]{position:relative}.banner .b1[data-v-3a4bb140]{position:absolute;bottom:30px;left:0;color:#fff;padding:0 20px 0 10px}.banner .b1 uni-view[data-v-3a4bb140]:nth-child(1){font-size:20px;font-weight:500;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;margin-bottom:10px}.banner .b1 uni-view[data-v-3a4bb140]:nth-child(2){font-size:14px;color:#ccc}.bot .Past .Pastdata[data-v-3a4bb140]{color:#aaa;padding-left:15px;font-weight:600;position:relative}.bot .Past .Pastdata[data-v-3a4bb140]::after{position:absolute;content:"";height:%?1?%;width:72%;background-color:#d5d5d6;top:50%;left:64%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.bot .lr[data-v-3a4bb140]{display:flex;padding:15px}.bot .lr .left[data-v-3a4bb140]{flex:1}.bot .lr .left .lef[data-v-3a4bb140]{width:%?500?%}.bot .lr .left uni-view[data-v-3a4bb140]:nth-child(1){\n  /* flex: 0.7; */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;font-weight:600;font-size:18px;margin-bottom:7px}.bot .lr .left uni-view[data-v-3a4bb140]:nth-child(2){\n  /* flex: 0.3; */font-size:14px;color:rgba(97,97,97,.55);font-weight:400}.bot .lr .right uni-image[data-v-3a4bb140]{width:%?150?%;height:%?150?%}',""]),t.exports=a},9477:function(t,a,e){"use strict";var i=e("0968"),n=e.n(i);n.a},9498:function(t,a,e){var i=e("8d7e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("53579f12",i,!0,{sourceMap:!1,shadowMode:!1})},"9afc":function(t,a,e){t.exports=e.p+"static/img/user.e543f59b.svg"},ea32:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"t1"},[i("v-uni-view",[t._v(t._s(t.TD))]),i("v-uni-view",[t._v(t._s(t.CM))])],1),i("v-uni-view",{staticClass:"t2"},[t._v(t._s(t.hello))]),i("v-uni-view",{staticClass:"t3"},[i("v-uni-image",{attrs:{src:e("9afc"),mode:""},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.one.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"banner"},[i("v-uni-swiper",{staticStyle:{height:"700rpx"},attrs:{"indicator-dots":!0,autoplay:!0,circular:!0,"indicator-active-color":"#fff"}},t._l(t.intt.top_stories,(function(a,e){return i("v-uni-swiper-item",{key:e},[i("v-uni-image",{staticStyle:{width:"100%",height:"700rpx"},attrs:{src:a.image,"data-x":a.id},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navTo.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"b1"},[i("v-uni-view",[t._v(t._s(a.title))]),i("v-uni-view",[t._v(t._s(a.hint))])],1)],1)})),1)],1),i("v-uni-view",{staticClass:"bot"},[t._l(t.intt.stories,(function(a,e){return i("v-uni-view",{key:e,staticClass:"lr",attrs:{"data-x":a.id},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navTo.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"lef"},[i("v-uni-view",[t._v(t._s(a.title))]),i("v-uni-view",[t._v(t._s(a.hint))])],1)],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-image",{attrs:{src:a.images[0]}})],1)],1)})),t._l(t.lll,(function(a,e){return i("v-uni-view",{staticClass:"Past"},[i("v-uni-view",{staticClass:"Pastdata"},[t._v(t._s(t._f("newDate")(a.date)))]),t._l(a.stories,(function(a){return i("v-uni-view",{key:a.id,staticClass:"lr",attrs:{"data-x":a.id},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navTo.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"lef"},[i("v-uni-view",[t._v(t._s(a.title))]),i("v-uni-view",[t._v(t._s(a.hint))])],1)],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-image",{attrs:{src:a.images[0]}})],1)],1)}))],2)}))],2)],1)},o=[]}}]);