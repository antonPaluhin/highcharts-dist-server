/*
 Highstock JS v9.1.1 (2021-06-03)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Pawe Dalek

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/volume-by-price",["highcharts","highcharts/modules/stock"],function(n){a(n);a.Highcharts=n;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function n(a,n,p,h){a.hasOwnProperty(n)||(a[n]=h.apply(null,p))}a=a?a._modules:{};n(a,"Stock/Indicators/VBP/VBPIndicator.js",[a["Core/Animation/AnimationUtilities.js"],
a["Core/Globals.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,n,p,h){var E=this&&this.__extends||function(){var a=function(e,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,m){b.__proto__=m}||function(b,m){for(var c in m)m.hasOwnProperty(c)&&(b[c]=m[c])};return a(e,b)};return function(e,b){function d(){this.constructor=e}a(e,b);e.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)}}(),F=a.animObject;a=n.noop;var A=p.seriesTypes.sma,
B=h.addEvent,C=h.arrayMax,G=h.arrayMin,y=h.correctFloat,z=h.error,D=h.extend,H=h.isArray,I=h.merge,u=Math.abs,x=p.seriesTypes.column.prototype;h=function(a){function e(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.negWidths=void 0;b.options=void 0;b.points=void 0;b.posWidths=void 0;b.priceZones=void 0;b.rangeStep=void 0;b.volumeDataArray=void 0;b.zoneStarts=void 0;b.zoneLinesSVG=void 0;return b}E(e,a);e.prototype.init=function(b){n.seriesTypes.sma.prototype.init.apply(this,arguments);
var d=this.options.params;var m=this.linkedParent;d=b.get(d.volumeSeriesID);this.addCustomEvents(m,d);return this};e.prototype.addCustomEvents=function(b,d){function m(){c.chart.redraw();c.setData([]);c.zoneStarts=[];c.zoneLinesSVG&&(c.zoneLinesSVG=c.zoneLinesSVG.destroy())}var c=this;c.dataEventsToUnbind.push(B(b,"remove",function(){m()}));d&&c.dataEventsToUnbind.push(B(d,"remove",function(){m()}));return c};e.prototype.animate=function(b){var d=this,m=d.chart.inverted,c=d.group,a={};!b&&c&&(b=m?
d.yAxis.top:d.xAxis.left,m?(c["forceAnimate:translateY"]=!0,a.translateY=b):(c["forceAnimate:translateX"]=!0,a.translateX=b),c.animate(a,D(F(d.options.animation),{step:function(b,c){d.group.attr({scaleX:Math.max(.001,c.pos)})}})))};e.prototype.drawPoints=function(){this.options.volumeDivision.enabled&&(this.posNegVolume(!0,!0),x.drawPoints.apply(this,arguments),this.posNegVolume(!1,!1));x.drawPoints.apply(this,arguments)};e.prototype.posNegVolume=function(b,d){var a=d?["positive","negative"]:["negative",
"positive"],c=this.options.volumeDivision,q=this.points.length,t=[],f=[],k=0,l;b?(this.posWidths=t,this.negWidths=f):(t=this.posWidths,f=this.negWidths);for(;k<q;k++){var g=this.points[k];g[a[0]+"Graphic"]=g.graphic;g.graphic=g[a[1]+"Graphic"];if(b){var e=g.shapeArgs.width;var v=this.priceZones[k];(l=v.wholeVolumeData)?(t.push(e/l*v.positiveVolumeData),f.push(e/l*v.negativeVolumeData)):(t.push(0),f.push(0))}g.color=d?c.styles.positiveColor:c.styles.negativeColor;g.shapeArgs.width=d?this.posWidths[k]:
this.negWidths[k];g.shapeArgs.x=d?g.shapeArgs.x:this.posWidths[k]}};e.prototype.translate=function(){var b=this,d=b.options,a=b.chart,c=b.yAxis,q=c.min,t=b.options.zoneLines,f=b.priceZones,k=0,l,g,e;x.translate.apply(b);var v=b.points;if(v.length){var h=.5>d.pointPadding?d.pointPadding:.1;d=b.volumeDataArray;var n=C(d);var r=a.plotWidth/2;var J=a.plotTop;var w=u(c.toPixels(q)-c.toPixels(q+b.rangeStep));var p=u(c.toPixels(q)-c.toPixels(q+b.rangeStep));h&&(q=u(w*(1-2*h)),k=u((w-q)/2),w=u(q));v.forEach(function(a,
d){g=a.barX=a.plotX=0;e=a.plotY=c.toPixels(f[d].start)-J-(c.reversed?w-p:w)-k;l=y(r*f[d].wholeVolumeData/n);a.pointWidth=l;a.shapeArgs=b.crispCol.apply(b,[g,e,l,w]);a.volumeNeg=f[d].negativeVolumeData;a.volumePos=f[d].positiveVolumeData;a.volumeAll=f[d].wholeVolumeData});t.enabled&&b.drawZones(a,c,b.zoneStarts,t.styles)}};e.prototype.getValues=function(b,a){var d=b.processedXData,c=b.processedYData,e=this.chart,t=a.ranges,f=[],k=[],l=[],g;if(b.chart)if(g=e.get(a.volumeSeriesID))if((a=H(c[0]))&&4!==
c[0].length)z("Type of "+b.name+" series is different than line, OHLC or candlestick.",!0,e);else return(this.priceZones=this.specifyZones(a,d,c,t,g)).forEach(function(b,a){f.push([b.x,b.end]);k.push(f[a][0]);l.push(f[a][1])}),{values:f,xData:k,yData:l};else z("Series "+a.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e);else z("Base series not found! In case it has been removed, add a new one.",!0,e)};e.prototype.specifyZones=function(b,a,e,c,q){if(b){var d=e.length;for(var f=e[0][3],k=
f,l=1,g;l<d;l++)g=e[l][3],g<f&&(f=g),g>k&&(k=g);d={min:f,max:k}}else d=!1;d=(f=d)?f.min:G(e);g=f?f.max:C(e);f=this.zoneStarts=[];k=[];var m=0;l=1;if(!d||!g)return this.points.length&&(this.setData([]),this.zoneStarts=[],this.zoneLinesSVG&&(this.zoneLinesSVG=this.zoneLinesSVG.destroy())),[];var h=this.rangeStep=y(g-d)/c;for(f.push(d);m<c-1;m++)f.push(y(f[m]+h));f.push(g);for(c=f.length;l<c;l++)k.push({index:l-1,x:a[0],start:f[l-1],end:f[l]});return this.volumePerZone(b,k,q,a,e)};e.prototype.volumePerZone=
function(b,a,e,c,h){var d=this,f=e.processedXData,k=e.processedYData,l=a.length-1,g=h.length;e=k.length;var m,n,q,p,r;u(g-e)&&(c[0]!==f[0]&&k.unshift(0),c[g-1]!==f[e-1]&&k.push(0));d.volumeDataArray=[];a.forEach(function(a){a.wholeVolumeData=0;a.positiveVolumeData=0;for(r=a.negativeVolumeData=0;r<g;r++)q=n=!1,p=b?h[r][3]:h[r],m=r?b?h[r-1][3]:h[r-1]:p,p<=a.start&&0===a.index&&(n=!0),p>=a.end&&a.index===l&&(q=!0),(p>a.start||n)&&(p<a.end||q)&&(a.wholeVolumeData+=k[r],m>p?a.negativeVolumeData+=k[r]:
a.positiveVolumeData+=k[r]);d.volumeDataArray.push(a.wholeVolumeData)});return a};e.prototype.drawZones=function(a,d,e,c){var b=a.renderer,h=this.zoneLinesSVG,f=[],k=a.plotWidth,l=a.plotTop,g;e.forEach(function(b){g=d.toPixels(b)-l;f=f.concat(a.renderer.crispLine([["M",0,g],["L",k,g]],c.lineWidth))});h?h.animate({d:f}):h=this.zoneLinesSVG=b.path(f).attr({"stroke-width":c.lineWidth,stroke:c.color,dashstyle:c.dashStyle,zIndex:this.group.zIndex+.1}).add(this.group)};e.defaultOptions=I(A.defaultOptions,
{params:{index:void 0,period:void 0,ranges:12,volumeSeriesID:"volume"},zoneLines:{enabled:!0,styles:{color:"#0A9AC9",dashStyle:"LongDash",lineWidth:1}},volumeDivision:{enabled:!0,styles:{positiveColor:"rgba(144, 237, 125, 0.8)",negativeColor:"rgba(244, 91, 91, 0.8)"}},animationLimit:1E3,enableMouseTracking:!1,pointPadding:0,zIndex:-1,crisp:!0,dataGrouping:{enabled:!1},dataLabels:{allowOverlap:!0,enabled:!0,format:"P: {point.volumePos:.2f} | N: {point.volumeNeg:.2f}",padding:0,style:{fontSize:"7px"},
verticalAlign:"top"}});return e}(A);D(h.prototype,{nameBase:"Volume by Price",nameComponents:["ranges"],bindTo:{series:!1,eventName:"afterSetExtremes"},calculateOn:"render",markerAttribs:a,drawGraph:a,getColumnMetrics:x.getColumnMetrics,crispCol:x.crispCol});p.registerSeriesType("vbp",h);"";return h});n(a,"masters/indicators/volume-by-price.src.js",[],function(){})});
//# sourceMappingURL=volume-by-price.js.map