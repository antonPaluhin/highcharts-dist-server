!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/indicators/supertrend
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/supertrend",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],o):"object"==typeof exports?exports["highcharts/supertrend"]=o(require("highcharts"),require("highcharts").SeriesRegistry):e.Highcharts=o(e.Highcharts,e.Highcharts.SeriesRegistry)}(this,(e,o)=>(()=>{"use strict";var r={512:e=>{e.exports=o},944:o=>{o.exports=e}},t={};function l(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,l),i.exports}l.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return l.d(o,{a:o}),o},l.d=(e,o)=>{for(var r in o)l.o(o,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},l.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o);var i={};l.d(i,{default:()=>S});var s=l(944),n=/*#__PURE__*/l.n(s),p=l(512),h=/*#__PURE__*/l.n(p);let{atr:a,sma:c}=h().seriesTypes,{addEvent:d,correctFloat:u,isArray:g,isNumber:x,extend:y,merge:f,objectEach:m}=n();function C(e,o){return{index:o,close:e.getColumn("close")[o],x:e.getColumn("x")[o]}}class T extends c{init(){let e=this;super.init.apply(e,arguments);let o=d(this.chart.constructor,"afterLinkSeries",()=>{if(e.options){let o=e.options,r=e.linkedParent.options;o.cropThreshold=r.cropThreshold-(o.params.period-1)}o()},{order:1})}drawGraph(){let e=this,o=e.options,r=e.linkedParent,t=r.getColumn("x"),l=r?r.points:[],i=e.points,s=e.graph,n=l.length-i.length,p=n>0?n:0,h={options:{gapSize:o.gapSize}},a={top:[],bottom:[],intersect:[]},d={top:{styles:{lineWidth:o.lineWidth,lineColor:o.fallingTrendColor||o.color,dashStyle:o.dashStyle}},bottom:{styles:{lineWidth:o.lineWidth,lineColor:o.risingTrendColor||o.color,dashStyle:o.dashStyle}},intersect:o.changeTrendLine},u,g,y,T,S,b,v,D,L,j=i.length;for(;j--;)u=i[j],g=i[j-1],y=l[j-1+p],T=l[j-2+p],S=l[j+p],b=l[j+p+1],v=u.options.color,D={x:u.x,plotX:u.plotX,plotY:u.plotY,isNull:!1},!T&&y&&x(t[y.index-1])&&(T=C(r,y.index-1)),!b&&S&&x(t[S.index+1])&&(b=C(r,S.index+1)),!y&&T&&x(t[T.index+1])?y=C(r,T.index+1):!y&&S&&x(t[S.index-1])&&(y=C(r,S.index-1)),u&&y&&S&&T&&u.x!==y.x&&(u.x===S.x?(T=y,y=S):u.x===T.x?(y=T,T={close:r.getColumn("close")[y.index-1],x:t[y.index-1]}):b&&u.x===b.x&&(y=b,T=S)),g&&T&&y?(L={x:g.x,plotX:g.plotX,plotY:g.plotY,isNull:!1},u.y>=y.close&&g.y>=T.close?(u.color=v||o.fallingTrendColor||o.color,a.top.push(D)):u.y<y.close&&g.y<T.close?(u.color=v||o.risingTrendColor||o.color,a.bottom.push(D)):(a.intersect.push(D),a.intersect.push(L),a.intersect.push(f(L,{isNull:!0})),u.y>=y.close&&g.y<T.close?(u.color=v||o.fallingTrendColor||o.color,g.color=v||o.risingTrendColor||o.color,a.top.push(D),a.top.push(f(L,{isNull:!0}))):u.y<y.close&&g.y>=T.close&&(u.color=v||o.risingTrendColor||o.color,g.color=v||o.fallingTrendColor||o.color,a.bottom.push(D),a.bottom.push(f(L,{isNull:!0}))))):y&&(u.y>=y.close?(u.color=v||o.fallingTrendColor||o.color,a.top.push(D)):(u.color=v||o.risingTrendColor||o.color,a.bottom.push(D)));m(a,function(o,r){e.points=o,e.options=f(d[r].styles,h),e.graph=e["graph"+r+"Line"],c.prototype.drawGraph.call(e),e["graph"+r+"Line"]=e.graph}),e.points=i,e.options=o,e.graph=s}getValues(e,o){let r=o.period,t=o.multiplier,l=e.xData,i=e.yData,s=[],n=[],p=[],h=0===r?0:r-1,c=[],d=[],x=[],y,f,m,C,T,S,b,v,D;if(!(l.length<=r)&&g(i[0])&&4===i[0].length&&!(r<0)){for(D=0,x=a.prototype.getValues.call(this,e,{period:r}).yData;D<x.length;D++)v=i[h+D],b=i[h+D-1]||[],C=c[D-1],T=d[D-1],S=p[D-1],0===D&&(C=T=S=0),y=u((v[1]+v[2])/2+t*x[D]),f=u((v[1]+v[2])/2-t*x[D]),y<C||b[3]>C?c[D]=y:c[D]=C,f>T||b[3]<T?d[D]=f:d[D]=T,S===C&&v[3]<c[D]||S===T&&v[3]<d[D]?m=c[D]:(S===C&&v[3]>c[D]||S===T&&v[3]>d[D])&&(m=d[D]),s.push([l[h+D],m]),n.push(l[h+D]),p.push(m);return{values:s,xData:n,yData:p}}}}T.defaultOptions=f(c.defaultOptions,{params:{index:void 0,multiplier:3,period:10},risingTrendColor:"#06b535",fallingTrendColor:"#f21313",changeTrendLine:{styles:{lineWidth:1,lineColor:"#333333",dashStyle:"LongDash"}}}),y(T.prototype,{nameBase:"Supertrend",nameComponents:["multiplier","period"]}),h().registerSeriesType("supertrend",T);let S=n();return i.default})());