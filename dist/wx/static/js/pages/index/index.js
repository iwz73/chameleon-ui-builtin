var __CML__GLOBAL=require("../../manifest.js");__CML__GLOBAL.webpackJsonp([1],{204:function(t,e,n){n(205),n(206)},205:function(t,e){},206:function(t,e,n){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(207),i=o(a),c=n(0),r=o(c),s=n(2),p=o(s),u=n(90),d=o(u),f=n(1),g=o(f),l=d.default.routes,m={};l.forEach(function(t){m[t.name]=t});var _=function(){function t(){(0,r.default)(this,t),this.data={comList:[{id:"content",name:"基础内容",open:!1,pages:[m.text,m.view],src:n(210)},{id:"view",name:"视图容器",open:!1,pages:[m.list,m.scroller,m.carousel],src:n(91)},{id:"layout",name:"布局容器",open:!1,pages:[m.row,m.layout],src:n(91)},{id:"form",name:"表单组件",open:!1,pages:[m.button,m.input,m.textarea,m.switch,m.radio,m.checkbox],src:n(211)},{id:"media",name:"媒体组件",open:!1,pages:[m.image,m.video],src:n(212)}],apiList:[{id:"page",name:"界面",open:!1,pages:[m["cml.modal"],m["cml.toast"]],src:n(213)},{id:"network",name:"网络",open:!1,pages:[m["cml.post"],m["cml.get"]],src:n(214)},{id:"storage",name:"数据",open:!1,pages:[m["cml.storage"]],src:n(215)},{id:"weex",name:"weex端扩展能力",open:!1,pages:[m["cml.weex"]],src:n(216)}],comLogoSrc:n(217),apiLogoSrc:n(218),tabList:[{title:"组件",selected:!0,iconPath:n(219),selectedIconPath:n(220)},{title:"接口",selected:!1,iconPath:n(221),selectedIconPath:n(222)}],activeTab:"component",arrowIcon:"https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png"},this.computed={computedStyle:function(){return"transform: translateX("+("api"===this.activeTab?"-750":"0")+"cpx);"},bodyComputedStyl:function(){return""}},this.watch={},this.methods={kindToggle:function(t){for(var e=t.currentTarget.id,n="component"===this.activeTab?this.comList:this.apiList,o=0,a=n.length;o<a;++o)n[o].id==e?n[o].open=!n[o].open:n[o].open=!1},tabItemClick:function(t){var e=t.currentTarget,n=e.dataset,o=parseInt(n.index);this.tabList[o].selected=!0,this.tabList[(o+1)%2].selected=!1,this.activeTab=0==o?"component":"api"},routeTo:function(t){var e=t.currentTarget,n=e.dataset,o=n.routepath;n.routeurl,(0,i.default)({path:o})}}}return(0,p.default)(t,[{key:"mounted",value:function(){}}]),t}();e.default=new _,e.default=g.default.createPage(e.default).getOptions()},207:function(t,e,n){function o(t){var e=(0,c.queryStringify)(t.query)||"",n=t.path||"",o=t.url||"";i.default.navigateTo({path:n,url:o,query:e})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var a=n(208),i=function(t){return t&&t.__esModule?t:{default:t}}(a),c=n(64)},208:function(t,e,n){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),i=o(a),c=n(2),r=o(c),s=n(8),p=function(){function t(){(0,i.default)(this,t)}return(0,r.default)(t,[{key:"navigateTo",value:function(t){var e=t.path,n=t.query;-1===e.indexOf("?")&&(n="?"+n),e+=n,wx.navigateTo({url:e})}}]),t}();e.default=new p,(0,s.copyProtoProperty)(e.default)},210:function(t,e,n){t.exports=n.p+"static/img/content_615612b.png"},211:function(t,e,n){t.exports=n.p+"static/img/form_1d8d4bd.png"},212:function(t,e,n){t.exports=n.p+"static/img/media_1c79816.png"},213:function(t,e,n){t.exports=n.p+"static/img/page_7e6c522.png"},214:function(t,e,n){t.exports=n.p+"static/img/network_c9413b1.png"},215:function(t,e,n){t.exports=n.p+"static/img/storage_c45d61a.png"},216:function(t,e,n){t.exports=n.p+"static/img/device_804d59a.png"},217:function(t,e,n){t.exports=n.p+"static/img/logo_d6e75ef.png"},218:function(t,e,n){t.exports=n.p+"static/img/logo_0d40a73.png"},219:function(t,e,n){t.exports=n.p+"static/img/icon_component_90086e8.png"},220:function(t,e,n){t.exports=n.p+"static/img/icon_component_HL_23be89c.png"},221:function(t,e,n){t.exports=n.p+"static/img/icon_API_145b82b.png"},222:function(t,e,n){t.exports=n.p+"static/img/icon_API_HL_c803704.png"},91:function(t,e,n){t.exports=n.p+"static/img/view_b6fa835.png"}},[204]);