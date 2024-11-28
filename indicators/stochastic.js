!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/stochastic
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Paweł Fus
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/stochastic",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/stochastic"]=t(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,t)=>(()=>{"use strict";var r,i={512:e=>{e.exports=t},944:t=>{t.exports=e}},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return i[e](r,r.exports,s),r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};s.d(o,{default:()=>v});var n=s(944),p=/*#__PURE__*/s.n(n);let l={getArrayExtremes:function(e,t,r){return e.reduce((e,i)=>[Math.min(e[0],i[t]),Math.max(e[1],i[r])],[Number.MAX_VALUE,-Number.MAX_VALUE])}};var h=s(512),c=/*#__PURE__*/s.n(h);let{sma:{prototype:u}}=c().seriesTypes,{defined:d,error:y,merge:f}=p();!function(e){let t=["bottomLine"],r=["top","bottom"],i=["top"];function a(e){return"plot"+e.charAt(0).toUpperCase()+e.slice(1)}function s(e,t){let r=[];return(e.pointArrayMap||[]).forEach(e=>{e!==t&&r.push(a(e))}),r}function o(){let e=this,t=e.pointValKey,r=e.linesApiNames,i=e.areaLinesNames,o=e.points,n=e.options,p=e.graph,l={options:{gapSize:n.gapSize}},h=[],c=s(e,t),g=o.length,m;if(c.forEach((e,t)=>{for(h[t]=[];g--;)m=o[g],h[t].push({x:m.x,plotX:m.plotX,plotY:m[e],isNull:!d(m[e])});g=o.length}),e.userOptions.fillColor&&i.length){let t=h[c.indexOf(a(i[0]))],r=1===i.length?o:h[c.indexOf(a(i[1]))],s=e.color;e.points=r,e.nextPoints=t,e.color=e.userOptions.fillColor,e.options=f(o,l),e.graph=e.area,e.fillGraph=!0,u.drawGraph.call(e),e.area=e.graph,delete e.nextPoints,delete e.fillGraph,e.color=s}r.forEach((t,r)=>{h[r]?(e.points=h[r],n[t]?e.options=f(n[t].styles,l):y('Error: "There is no '+t+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),e.graph=e["graph"+t],u.drawGraph.call(e),e["graph"+t]=e.graph):y('Error: "'+t+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")}),e.points=o,e.options=n,e.graph=p,u.drawGraph.call(e)}function n(e){let t,r=[],i=[];if(e=e||this.points,this.fillGraph&&this.nextPoints){if((t=u.getGraphPath.call(this,this.nextPoints))&&t.length){t[0][0]="L",r=u.getGraphPath.call(this,e),i=t.slice(0,r.length);for(let e=i.length-1;e>=0;e--)r.push(i[e])}}else r=u.getGraphPath.apply(this,arguments);return r}function p(e){let t=[];return(this.pointArrayMap||[]).forEach(r=>{t.push(e[r])}),t}function l(){let e=this.pointArrayMap,t=[],r;t=s(this),u.translate.apply(this,arguments),this.points.forEach(i=>{e.forEach((e,a)=>{r=i[e],this.dataModify&&(r=this.dataModify.modifyValue(r)),null!==r&&(i[t[a]]=this.yAxis.toPixels(r,!0))})})}e.compose=function(e){let a=e.prototype;return a.linesApiNames=a.linesApiNames||t.slice(),a.pointArrayMap=a.pointArrayMap||r.slice(),a.pointValKey=a.pointValKey||"top",a.areaLinesNames=a.areaLinesNames||i.slice(),a.drawGraph=o,a.getGraphPath=n,a.toYData=p,a.translate=l,e}}(r||(r={}));let g=r,{sma:m}=c().seriesTypes,{extend:x,isArray:A,merge:N}=p();class b extends m{init(){super.init.apply(this,arguments),this.options=N({smoothedLine:{styles:{lineColor:this.color}}},this.options)}getValues(e,t){let r=t.periods[0],i=t.periods[1],a=e.xData,s=e.yData,o=s?s.length:0,n=[],p=[],h=[],c,u,d,y=null,f,g;if(o<r||!A(s[0])||4!==s[0].length)return;let m=!0,x=0;for(g=r-1;g<o;g++){if(c=s.slice(g-r+1,g+1),u=(f=l.getArrayExtremes(c,2,1))[0],isNaN(d=(s[g][3]-u)/(f[1]-u)*100)&&m){x++;continue}m&&!isNaN(d)&&(m=!1);let e=p.push(a[g]);isNaN(d)?h.push([h[e-2]&&"number"==typeof h[e-2][0]?h[e-2][0]:null,null]):h.push([d,null]),g>=x+(r-1)+(i-1)&&(y=super.getValues({xData:p.slice(-i),yData:h.slice(-i)},{period:i}).yData[0]),n.push([a[g],d,y]),h[e-1][1]=y}return{values:n,xData:p,yData:h}}}b.defaultOptions=N(m.defaultOptions,{params:{index:void 0,period:void 0,periods:[14,3]},marker:{enabled:!1},tooltip:{pointFormat:'<span style="color:{point.color}">●</span><b> {series.name}</b><br/>%K: {point.y}<br/>%D: {point.smoothed}<br/>'},smoothedLine:{styles:{lineWidth:1,lineColor:void 0}},dataGrouping:{approximation:"averages"}}),x(b.prototype,{areaLinesNames:[],nameComponents:["periods"],nameBase:"Stochastic",pointArrayMap:["y","smoothed"],parallelArrays:["x","y","smoothed"],pointValKey:"y",linesApiNames:["smoothedLine"]}),g.compose(b),c().registerSeriesType("stochastic",b);let v=p();return o.default})());