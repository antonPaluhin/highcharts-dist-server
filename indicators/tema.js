!/**
 * Highstock JS v11.4.0 (2024-03-04)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Rafal Sebestjanski
 *
 * License: www.highcharts.com/license
 */function(e){"object"==typeof module&&module.exports?(e.default=e,module.exports=e):"function"==typeof define&&define.amd?define("highcharts/indicators/tema",["highcharts","highcharts/modules/stock"],function(t){return e(t),e.Highcharts=t,e}):e("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(e){"use strict";var t=e?e._modules:{};function l(e,t,l,s){e.hasOwnProperty(t)||(e[t]=s.apply(null,l),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:e[t]}})))}l(t,"Stock/Indicators/TEMA/TEMAIndicator.js",[t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],function(e,t){let{ema:l}=e.seriesTypes,{correctFloat:s,isArray:i,merge:r}=t;class n extends l{getEMA(e,t,l,s,i,r){return super.calculateEma(r||[],e,void 0===i?1:i,this.EMApercent,t,void 0===s?-1:s,l)}getTemaPoint(e,t,l,i){return[e[i-3],s(3*l.level1-3*l.level2+l.level3)]}getValues(e,t){let l=t.period,s=2*l,r=3*l,n=e.xData,o=e.yData,a=o?o.length:0,u=[],h=[],v=[],d=[],c=[],p={},f=-1,g=0,m=0,E,y,M,A;if(this.EMApercent=2/(l+1),!(a<3*l-2)){for(i(o[0])&&(f=t.index?t.index:0),m=(g=super.accumulatePeriodPoints(l,f,o))/l,g=0,M=l;M<a+3;M++)M<a+1&&(p.level1=this.getEMA(o,E,m,f,M)[1],d.push(p.level1)),E=p.level1,M<s?g+=p.level1:(M===s&&(m=g/l,g=0),p.level1=d[M-l-1],p.level2=this.getEMA([p.level1],y,m)[1],c.push(p.level2),y=p.level2,M<r?g+=p.level2:(M===r&&(m=g/l),M===a+1&&(p.level1=d[M-l-1],p.level2=this.getEMA([p.level1],y,m)[1],c.push(p.level2)),p.level1=d[M-l-2],p.level2=c[M-2*l-1],p.level3=this.getEMA([p.level2],p.prevLevel3,m)[1],(A=this.getTemaPoint(n,r,p,M))&&(u.push(A),h.push(A[0]),v.push(A[1])),p.prevLevel3=p.level3));return{values:u,xData:h,yData:v}}}}return n.defaultOptions=r(l.defaultOptions),e.registerSeriesType("tema",n),n}),l(t,"masters/indicators/tema.src.js",[t["Core/Globals.js"]],function(e){return e})});