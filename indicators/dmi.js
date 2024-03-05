!/**
 * Highstock JS v11.4.0 (2024-03-04)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Rafal Sebestjanski
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/indicators/dmi",["highcharts","highcharts/modules/stock"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function s(t,e,s,i){t.hasOwnProperty(e)||(t[e]=i.apply(null,s),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}s(e,"Stock/Indicators/MultipleLinesComposition.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e){var s;let{sma:{prototype:i}}=t.seriesTypes,{defined:a,error:o,merge:n}=e;return function(t){let e=["bottomLine"],s=["top","bottom"],l=["top"];function r(t){return"plot"+t.charAt(0).toUpperCase()+t.slice(1)}function p(t,e){let s=[];return(t.pointArrayMap||[]).forEach(t=>{t!==e&&s.push(r(t))}),s}function h(){let t=this,e=t.pointValKey,s=t.linesApiNames,l=t.areaLinesNames,h=t.points,u=t.options,c=t.graph,d={options:{gapSize:u.gapSize}},m=[],f=p(t,e),y=h.length,g;if(f.forEach((t,e)=>{for(m[e]=[];y--;)g=h[y],m[e].push({x:g.x,plotX:g.plotX,plotY:g[t],isNull:!a(g[t])});y=h.length}),t.userOptions.fillColor&&l.length){let e=m[f.indexOf(r(l[0]))],s=1===l.length?h:m[f.indexOf(r(l[1]))],a=t.color;t.points=s,t.nextPoints=e,t.color=t.userOptions.fillColor,t.options=n(h,d),t.graph=t.area,t.fillGraph=!0,i.drawGraph.call(t),t.area=t.graph,delete t.nextPoints,delete t.fillGraph,t.color=a}s.forEach((e,s)=>{m[s]?(t.points=m[s],u[e]?t.options=n(u[e].styles,d):o('Error: "There is no '+e+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),t.graph=t["graph"+e],i.drawGraph.call(t),t["graph"+e]=t.graph):o('Error: "'+e+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")}),t.points=h,t.options=u,t.graph=c,i.drawGraph.call(t)}function u(t){let e,s=[],a=[];if(t=t||this.points,this.fillGraph&&this.nextPoints){if((e=i.getGraphPath.call(this,this.nextPoints))&&e.length){e[0][0]="L",s=i.getGraphPath.call(this,t),a=e.slice(0,s.length);for(let t=a.length-1;t>=0;t--)s.push(a[t])}}else s=i.getGraphPath.apply(this,arguments);return s}function c(t){let e=[];return(this.pointArrayMap||[]).forEach(s=>{e.push(t[s])}),e}function d(){let t=this.pointArrayMap,e=[],s;e=p(this),i.translate.apply(this,arguments),this.points.forEach(i=>{t.forEach((t,a)=>{s=i[t],this.dataModify&&(s=this.dataModify.modifyValue(s)),null!==s&&(i[e[a]]=this.yAxis.toPixels(s,!0))})})}t.compose=function(t){let i=t.prototype;return i.linesApiNames=i.linesApiNames||e.slice(),i.pointArrayMap=i.pointArrayMap||s.slice(),i.pointValKey=i.pointValKey||"top",i.areaLinesNames=i.areaLinesNames||l.slice(),i.drawGraph=h,i.getGraphPath=u,i.toYData=c,i.translate=d,t}}(s||(s={})),s}),s(e,"Stock/Indicators/DMI/DMIIndicator.js",[e["Stock/Indicators/MultipleLinesComposition.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e,s){let{sma:i}=e.seriesTypes,{correctFloat:a,extend:o,isArray:n,merge:l}=s;class r extends i{calculateDM(t,e,s){let i=t[e][1],o=t[e][2],n=t[e-1][1],l=t[e-1][2];return a(i-n>l-o?s?Math.max(i-n,0):0:s?0:Math.max(l-o,0))}calculateDI(t,e){return t/e*100}calculateDX(t,e){return a(Math.abs(t-e)/Math.abs(t+e)*100)}smoothValues(t,e,s){return a(t-t/s+e)}getTR(t,e){return a(Math.max(t[1]-t[2],e?Math.abs(t[1]-e[3]):0,e?Math.abs(t[2]-e[3]):0))}getValues(t,e){let s=e.period,i=t.xData,a=t.yData,o=a?a.length:0,l=[],r=[],p=[];if(i.length<=s||!n(a[0])||4!==a[0].length)return;let h=0,u=0,c=0,d;for(d=1;d<o;d++){let t,e,o,n,m,f,y,g,D;d<=s?(n=this.calculateDM(a,d,!0),m=this.calculateDM(a,d),f=this.getTR(a[d],a[d-1]),h+=n,u+=m,c+=f,d===s&&(y=this.calculateDI(h,c),g=this.calculateDI(u,c),D=this.calculateDX(h,u),l.push([i[d],D,y,g]),r.push(i[d]),p.push([D,y,g]))):(n=this.calculateDM(a,d,!0),m=this.calculateDM(a,d),f=this.getTR(a[d],a[d-1]),t=this.smoothValues(h,n,s),e=this.smoothValues(u,m,s),o=this.smoothValues(c,f,s),h=t,u=e,c=o,y=this.calculateDI(h,c),g=this.calculateDI(u,c),D=this.calculateDX(h,u),l.push([i[d],D,y,g]),r.push(i[d]),p.push([D,y,g]))}return{values:l,xData:r,yData:p}}}return r.defaultOptions=l(i.defaultOptions,{params:{index:void 0},marker:{enabled:!1},tooltip:{pointFormat:'<span style="color: {point.color}">●</span><b> {series.name}</b><br/><span style="color: {point.color}">DX</span>: {point.y}<br/><span style="color: {point.series.options.plusDILine.styles.lineColor}">+DI</span>: {point.plusDI}<br/><span style="color: {point.series.options.minusDILine.styles.lineColor}">-DI</span>: {point.minusDI}<br/>'},plusDILine:{styles:{lineWidth:1,lineColor:"#06b535"}},minusDILine:{styles:{lineWidth:1,lineColor:"#f21313"}},dataGrouping:{approximation:"averages"}}),o(r.prototype,{areaLinesNames:[],nameBase:"DMI",linesApiNames:["plusDILine","minusDILine"],pointArrayMap:["y","plusDI","minusDI"],parallelArrays:["x","y","plusDI","minusDI"],pointValKey:"y"}),t.compose(r),e.registerSeriesType("dmi",r),r}),s(e,"masters/indicators/dmi.src.js",[e["Core/Globals.js"]],function(t){return t})});