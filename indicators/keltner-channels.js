!/**
 * Highstock JS v11.4.0 (2024-03-04)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Daniel Studencki
 *
 * License: www.highcharts.com/license
 */function(e){"object"==typeof module&&module.exports?(e.default=e,module.exports=e):"function"==typeof define&&define.amd?define("highcharts/indicators/keltner-channels",["highcharts","highcharts/modules/stock"],function(t){return e(t),e.Highcharts=t,e}):e("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(e){"use strict";var t=e?e._modules:{};function i(e,t,i,o){e.hasOwnProperty(t)||(e[t]=o.apply(null,i),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:e[t]}})))}i(t,"Stock/Indicators/MultipleLinesComposition.js",[t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],function(e,t){var i;let{sma:{prototype:o}}=e.seriesTypes,{defined:s,error:n,merge:r}=t;return function(e){let t=["bottomLine"],i=["top","bottom"],a=["top"];function l(e){return"plot"+e.charAt(0).toUpperCase()+e.slice(1)}function p(e,t){let i=[];return(e.pointArrayMap||[]).forEach(e=>{e!==t&&i.push(l(e))}),i}function h(){let e=this,t=e.pointValKey,i=e.linesApiNames,a=e.areaLinesNames,h=e.points,c=e.options,d=e.graph,u={options:{gapSize:c.gapSize}},m=[],f=p(e,t),y=h.length,g;if(f.forEach((e,t)=>{for(m[t]=[];y--;)g=h[y],m[t].push({x:g.x,plotX:g.plotX,plotY:g[e],isNull:!s(g[e])});y=h.length}),e.userOptions.fillColor&&a.length){let t=m[f.indexOf(l(a[0]))],i=1===a.length?h:m[f.indexOf(l(a[1]))],s=e.color;e.points=i,e.nextPoints=t,e.color=e.userOptions.fillColor,e.options=r(h,u),e.graph=e.area,e.fillGraph=!0,o.drawGraph.call(e),e.area=e.graph,delete e.nextPoints,delete e.fillGraph,e.color=s}i.forEach((t,i)=>{m[i]?(e.points=m[i],c[t]?e.options=r(c[t].styles,u):n('Error: "There is no '+t+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),e.graph=e["graph"+t],o.drawGraph.call(e),e["graph"+t]=e.graph):n('Error: "'+t+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")}),e.points=h,e.options=c,e.graph=d,o.drawGraph.call(e)}function c(e){let t,i=[],s=[];if(e=e||this.points,this.fillGraph&&this.nextPoints){if((t=o.getGraphPath.call(this,this.nextPoints))&&t.length){t[0][0]="L",i=o.getGraphPath.call(this,e),s=t.slice(0,i.length);for(let e=s.length-1;e>=0;e--)i.push(s[e])}}else i=o.getGraphPath.apply(this,arguments);return i}function d(e){let t=[];return(this.pointArrayMap||[]).forEach(i=>{t.push(e[i])}),t}function u(){let e=this.pointArrayMap,t=[],i;t=p(this),o.translate.apply(this,arguments),this.points.forEach(o=>{e.forEach((e,s)=>{i=o[e],this.dataModify&&(i=this.dataModify.modifyValue(i)),null!==i&&(o[t[s]]=this.yAxis.toPixels(i,!0))})})}e.compose=function(e){let o=e.prototype;return o.linesApiNames=o.linesApiNames||t.slice(),o.pointArrayMap=o.pointArrayMap||i.slice(),o.pointValKey=o.pointValKey||"top",o.areaLinesNames=o.areaLinesNames||a.slice(),o.drawGraph=h,o.getGraphPath=c,o.toYData=d,o.translate=u,e}}(i||(i={})),i}),i(t,"Stock/Indicators/KeltnerChannels/KeltnerChannelsIndicator.js",[t["Stock/Indicators/MultipleLinesComposition.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],function(e,t,i){let{sma:o}=t.seriesTypes,{correctFloat:s,extend:n,merge:r}=i;class a extends o{init(){t.seriesTypes.sma.prototype.init.apply(this,arguments),this.options=r({topLine:{styles:{lineColor:this.color}},bottomLine:{styles:{lineColor:this.color}}},this.options)}getValues(e,i){let o,n,r,a,l,p,h;let c=i.period,d=i.periodATR,u=i.multiplierATR,m=i.index,f=e.yData,y=f?f.length:0,g=[],C=t.seriesTypes.ema.prototype.getValues(e,{period:c,index:m}),A=t.seriesTypes.atr.prototype.getValues(e,{period:d}),x=[],b=[];if(!(y<c)){for(h=c;h<=y;h++)l=C.values[h-c],p=A.values[h-d],a=l[0],n=s(l[1]+u*p[1]),r=s(l[1]-u*p[1]),o=l[1],g.push([a,n,o,r]),x.push(a),b.push([n,o,r]);return{values:g,xData:x,yData:b}}}}return a.defaultOptions=r(o.defaultOptions,{params:{index:0,period:20,periodATR:10,multiplierATR:2},bottomLine:{styles:{lineWidth:1,lineColor:void 0}},topLine:{styles:{lineWidth:1,lineColor:void 0}},tooltip:{pointFormat:'<span style="color:{point.color}">●</span><b> {series.name}</b><br/>Upper Channel: {point.top}<br/>EMA({series.options.params.period}): {point.middle}<br/>Lower Channel: {point.bottom}<br/>'},marker:{enabled:!1},dataGrouping:{approximation:"averages"},lineWidth:1}),n(a.prototype,{nameBase:"Keltner Channels",areaLinesNames:["top","bottom"],nameComponents:["period","periodATR","multiplierATR"],linesApiNames:["topLine","bottomLine"],pointArrayMap:["top","middle","bottom"],pointValKey:"middle"}),e.compose(a),t.registerSeriesType("keltnerchannels",a),a}),i(t,"masters/indicators/keltner-channels.src.js",[t["Core/Globals.js"]],function(e){return e})});