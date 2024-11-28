!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/price-channel
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Daniel Studencki
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/price-channel",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/price-channel"]=t(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,t)=>(()=>{"use strict";var r,i={512:e=>{e.exports=t},944:t=>{t.exports=e}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return i[e](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};o.d(s,{default:()=>M});var n=o(944),p=/*#__PURE__*/o.n(n);let l={getArrayExtremes:function(e,t,r){return e.reduce((e,i)=>[Math.min(e[0],i[t]),Math.max(e[1],i[r])],[Number.MAX_VALUE,-Number.MAX_VALUE])}};var h=o(512),c=/*#__PURE__*/o.n(h);let{sma:{prototype:f}}=c().seriesTypes,{defined:u,error:d,merge:g}=p();!function(e){let t=["bottomLine"],r=["top","bottom"],i=["top"];function a(e){return"plot"+e.charAt(0).toUpperCase()+e.slice(1)}function o(e,t){let r=[];return(e.pointArrayMap||[]).forEach(e=>{e!==t&&r.push(a(e))}),r}function s(){let e=this,t=e.pointValKey,r=e.linesApiNames,i=e.areaLinesNames,s=e.points,n=e.options,p=e.graph,l={options:{gapSize:n.gapSize}},h=[],c=o(e,t),y=s.length,m;if(c.forEach((e,t)=>{for(h[t]=[];y--;)m=s[y],h[t].push({x:m.x,plotX:m.plotX,plotY:m[e],isNull:!u(m[e])});y=s.length}),e.userOptions.fillColor&&i.length){let t=h[c.indexOf(a(i[0]))],r=1===i.length?s:h[c.indexOf(a(i[1]))],o=e.color;e.points=r,e.nextPoints=t,e.color=e.userOptions.fillColor,e.options=g(s,l),e.graph=e.area,e.fillGraph=!0,f.drawGraph.call(e),e.area=e.graph,delete e.nextPoints,delete e.fillGraph,e.color=o}r.forEach((t,r)=>{h[r]?(e.points=h[r],n[t]?e.options=g(n[t].styles,l):d('Error: "There is no '+t+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),e.graph=e["graph"+t],f.drawGraph.call(e),e["graph"+t]=e.graph):d('Error: "'+t+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")}),e.points=s,e.options=n,e.graph=p,f.drawGraph.call(e)}function n(e){let t,r=[],i=[];if(e=e||this.points,this.fillGraph&&this.nextPoints){if((t=f.getGraphPath.call(this,this.nextPoints))&&t.length){t[0][0]="L",r=f.getGraphPath.call(this,e),i=t.slice(0,r.length);for(let e=i.length-1;e>=0;e--)r.push(i[e])}}else r=f.getGraphPath.apply(this,arguments);return r}function p(e){let t=[];return(this.pointArrayMap||[]).forEach(r=>{t.push(e[r])}),t}function l(){let e=this.pointArrayMap,t=[],r;t=o(this),f.translate.apply(this,arguments),this.points.forEach(i=>{e.forEach((e,a)=>{r=i[e],this.dataModify&&(r=this.dataModify.modifyValue(r)),null!==r&&(i[t[a]]=this.yAxis.toPixels(r,!0))})})}e.compose=function(e){let a=e.prototype;return a.linesApiNames=a.linesApiNames||t.slice(),a.pointArrayMap=a.pointArrayMap||r.slice(),a.pointValKey=a.pointValKey||"top",a.areaLinesNames=a.areaLinesNames||i.slice(),a.drawGraph=s,a.getGraphPath=n,a.toYData=p,a.translate=l,e}}(r||(r={}));let y=r,m={colors:["#2caffe","#544fc5","#00e272","#fe6a35","#6b8abc","#d568fb","#2ee0ca","#fa4b42","#feb56a","#91e8e1"]},{sma:x}=c().seriesTypes,{merge:A,extend:b}=p();class v extends x{getValues(e,t){let r,i,a,o,s,n,p;let h=t.period,c=e.xData,f=e.yData,u=f?f.length:0,d=[],g=[],y=[];if(!(u<h)){for(p=h;p<=u;p++)o=c[p-1],s=f.slice(p-h,p),r=((i=(n=l.getArrayExtremes(s,2,1))[1])+(a=n[0]))/2,d.push([o,i,r,a]),g.push(o),y.push([i,r,a]);return{values:d,xData:g,yData:y}}}}v.defaultOptions=A(x.defaultOptions,{params:{index:void 0,period:20},lineWidth:1,topLine:{styles:{lineColor:m.colors[2],lineWidth:1}},bottomLine:{styles:{lineColor:m.colors[8],lineWidth:1}},dataGrouping:{approximation:"averages"}}),b(v.prototype,{areaLinesNames:["top","bottom"],nameBase:"Price Channel",nameComponents:["period"],linesApiNames:["topLine","bottomLine"],pointArrayMap:["top","middle","bottom"],pointValKey:"middle"}),y.compose(v),c().registerSeriesType("pc",v);let M=p();return s.default})());