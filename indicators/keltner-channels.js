!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/keltner-channels
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Daniel Studencki
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/keltner-channels",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],t):"object"==typeof exports?exports["highcharts/keltner-channels"]=t(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,t)=>(()=>{"use strict";var i,r={512:e=>{e.exports=t},944:t=>{t.exports=e}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};s.d(a,{default:()=>v});var n=s(944),p=/*#__PURE__*/s.n(n),l=s(512),h=/*#__PURE__*/s.n(l);let{sma:{prototype:c}}=h().seriesTypes,{defined:d,error:u,merge:y}=p();!function(e){let t=["bottomLine"],i=["top","bottom"],r=["top"];function o(e){return"plot"+e.charAt(0).toUpperCase()+e.slice(1)}function s(e,t){let i=[];return(e.pointArrayMap||[]).forEach(e=>{e!==t&&i.push(o(e))}),i}function a(){let e=this,t=e.pointValKey,i=e.linesApiNames,r=e.areaLinesNames,a=e.points,n=e.options,p=e.graph,l={options:{gapSize:n.gapSize}},h=[],f=s(e,t),m=a.length,g;if(f.forEach((e,t)=>{for(h[t]=[];m--;)g=a[m],h[t].push({x:g.x,plotX:g.plotX,plotY:g[e],isNull:!d(g[e])});m=a.length}),e.userOptions.fillColor&&r.length){let t=h[f.indexOf(o(r[0]))],i=1===r.length?a:h[f.indexOf(o(r[1]))],s=e.color;e.points=i,e.nextPoints=t,e.color=e.userOptions.fillColor,e.options=y(a,l),e.graph=e.area,e.fillGraph=!0,c.drawGraph.call(e),e.area=e.graph,delete e.nextPoints,delete e.fillGraph,e.color=s}i.forEach((t,i)=>{h[i]?(e.points=h[i],n[t]?e.options=y(n[t].styles,l):u('Error: "There is no '+t+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),e.graph=e["graph"+t],c.drawGraph.call(e),e["graph"+t]=e.graph):u('Error: "'+t+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")}),e.points=a,e.options=n,e.graph=p,c.drawGraph.call(e)}function n(e){let t,i=[],r=[];if(e=e||this.points,this.fillGraph&&this.nextPoints){if((t=c.getGraphPath.call(this,this.nextPoints))&&t.length){t[0][0]="L",i=c.getGraphPath.call(this,e),r=t.slice(0,i.length);for(let e=r.length-1;e>=0;e--)i.push(r[e])}}else i=c.getGraphPath.apply(this,arguments);return i}function p(e){let t=[];return(this.pointArrayMap||[]).forEach(i=>{t.push(e[i])}),t}function l(){let e=this.pointArrayMap,t=[],i;t=s(this),c.translate.apply(this,arguments),this.points.forEach(r=>{e.forEach((e,o)=>{i=r[e],this.dataModify&&(i=this.dataModify.modifyValue(i)),null!==i&&(r[t[o]]=this.yAxis.toPixels(i,!0))})})}e.compose=function(e){let o=e.prototype;return o.linesApiNames=o.linesApiNames||t.slice(),o.pointArrayMap=o.pointArrayMap||i.slice(),o.pointValKey=o.pointValKey||"top",o.areaLinesNames=o.areaLinesNames||r.slice(),o.drawGraph=a,o.getGraphPath=n,o.toYData=p,o.translate=l,e}}(i||(i={}));let f=i,{sma:m}=h().seriesTypes,{correctFloat:g,extend:x,merge:A}=p();class b extends m{init(){h().seriesTypes.sma.prototype.init.apply(this,arguments),this.options=A({topLine:{styles:{lineColor:this.color}},bottomLine:{styles:{lineColor:this.color}}},this.options)}getValues(e,t){let i,r,o,s,a,n,p;let l=t.period,c=t.periodATR,d=t.multiplierATR,u=t.index,y=e.yData,f=y?y.length:0,m=[],x=h().seriesTypes.ema.prototype.getValues(e,{period:l,index:u}),A=h().seriesTypes.atr.prototype.getValues(e,{period:c}),b=[],v=[];if(!(f<l)){for(p=l;p<=f;p++)a=x.values[p-l],n=A.values[p-c],s=a[0],r=g(a[1]+d*n[1]),o=g(a[1]-d*n[1]),i=a[1],m.push([s,r,i,o]),b.push(s),v.push([r,i,o]);return{values:m,xData:b,yData:v}}}}b.defaultOptions=A(m.defaultOptions,{params:{index:0,period:20,periodATR:10,multiplierATR:2},bottomLine:{styles:{lineWidth:1,lineColor:void 0}},topLine:{styles:{lineWidth:1,lineColor:void 0}},tooltip:{pointFormat:'<span style="color:{point.color}">●</span><b> {series.name}</b><br/>Upper Channel: {point.top}<br/>EMA({series.options.params.period}): {point.middle}<br/>Lower Channel: {point.bottom}<br/>'},marker:{enabled:!1},dataGrouping:{approximation:"averages"},lineWidth:1}),x(b.prototype,{nameBase:"Keltner Channels",areaLinesNames:["top","bottom"],nameComponents:["period","periodATR","multiplierATR"],linesApiNames:["topLine","bottomLine"],pointArrayMap:["top","middle","bottom"],pointValKey:"middle"}),f.compose(b),h().registerSeriesType("keltnerchannels",b);let v=p();return a.default})());