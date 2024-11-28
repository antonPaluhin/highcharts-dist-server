!/**
 * Highstock JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/renko
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Renko series type for Highcharts Stock
 *
 * (c) 2010-2024 Pawel Lysy
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("highcharts"),require("highcharts").SeriesRegistry,require("highcharts").Series.types.column):"function"==typeof define&&define.amd?define("highcharts/renko",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"],["highcharts/highcharts","Series","types","column"]],t):"object"==typeof exports?exports["highcharts/renko"]=t(require("highcharts"),require("highcharts").SeriesRegistry,require("highcharts").Series.types.column):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry,e.Highcharts.Series.types.column)}(this,(e,t,r)=>(()=>{"use strict";var s={448:e=>{e.exports=r},512:e=>{e.exports=t},944:t=>{t.exports=e}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return s[e](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};i.d(a,{default:()=>b});var h=i(944),n=/*#__PURE__*/i.n(h),p=i(512),l=/*#__PURE__*/i.n(p);let{column:{prototype:{pointClass:c}}}=l().seriesTypes;var u=i(448),g=/*#__PURE__*/i.n(u);let{extend:d,merge:f,relativeLength:y,isNumber:m}=n();class x extends g(){constructor(){super(...arguments),this.hasDerivedData=!0,this.allowDG=!1}init(){super.init.apply(this,arguments),this.renkoData=[]}setData(e,t,r){this.renkoData=[],super.setData(e,t,r,!1)}getXExtremes(e){return this.processData(),{min:(e=this.getColumn("x",!0))[0],max:e[e.length-1]}}getProcessedData(){let e=this.dataTable.modified,t=[],r=[],s=[],o=this.getColumn("x",!0),i=this.getColumn("y",!0);if(!this.renkoData||this.renkoData.length>0)return{modified:e,closestPointRange:1,cropped:!1,cropStart:0};let a=this.options.boxSize,h=m(a)?a:y(a,i[0]),n=[],p=o.length,l=0,c=i[0];for(let e=1;e<p;e++){let t=i[e]-i[e-1];if(t>h){2===l&&(c+=h);for(let r=0;r<t/h;r++)n.push({x:o[e]+r,low:c,y:c+h,color:this.options.color,upTrend:!0}),c+=h;l=1}else if(Math.abs(t)>h){1===l&&(c-=h);for(let r=0;r<Math.abs(t)/h;r++)n.push({x:o[e]+r,low:c-h,y:c,color:this.options.downColor,upTrend:!1}),c-=h;l=2}}for(let e of(this.renkoData=n,n))t.push(e.x),r.push(e.y),s.push(e.low);return this.processedData=n,e.setColumn("x",t),e.setColumn("y",r),e.setColumn("low",s),{modified:e,cropped:!1,cropStart:0,closestPointRange:1}}}x.defaultOptions=f(g().defaultOptions,{boxSize:4,groupPadding:0,pointPadding:0,downColor:"#ff0000",navigatorOptions:{type:"renko"},fillColor:"transparent",borderWidth:2,lineWidth:0,stickyTracking:!0,borderRadius:{where:"all"},tooltip:{pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.low:.2f} - {point.y:.2f}</b><br/>'}}),d(x.prototype,{pointClass:class extends c{getClassName(){return super.getClassName.call(this)+(this.upTrend?" highcharts-point-up":" highcharts-point-down")}}}),l().registerSeriesType("renko",x);let b=n();return a.default})());