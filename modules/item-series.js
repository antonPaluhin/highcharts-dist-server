!/**
 * Highcharts JS v12.0.1 (2024-11-28)
 * @module highcharts/modules/item-series
 * @requires highcharts
 *
 * Item series type for Highcharts
 *
 * (c) 2019 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("highcharts"),require("highcharts").SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/item-series",[["highcharts/highcharts"],["highcharts/highcharts","SeriesRegistry"]],e):"object"==typeof exports?exports["highcharts/item-series"]=e(require("highcharts"),require("highcharts").SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry)}(this,(t,e)=>(()=>{"use strict";var i={512:t=>{t.exports=e},944:e=>{e.exports=t}},s={};function o(t){var e=s[t];if(void 0!==e)return e.exports;var r=s[t]={exports:{}};return i[t](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var r={};o.d(r,{default:()=>P});var a=o(944),n=/*#__PURE__*/o.n(a),h=o(512),l=/*#__PURE__*/o.n(h);let{series:{prototype:{pointClass:d}},seriesTypes:{pie:{prototype:{pointClass:c}}}}=l(),{extend:p}=n();class g extends c{}p(g.prototype,{haloPath:d.prototype.haloPath});let{merge:u}=n(),f={endAngle:void 0,innerSize:"40%",itemPadding:.1,layout:"vertical",marker:u({lineWidth:2,allowPointSelect:!1,crisp:!0,showCheckbox:!1,animation:{duration:1e3},enableMouseTracking:!0,events:{},marker:{enabledThreshold:2,lineColor:"#ffffff",lineWidth:0,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:150},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{animation:{},align:"center",borderWidth:0,defer:!0,formatter:function(){let{numberFormatter:t}=this.series.chart;return"number"!=typeof this.y?"":t(this.y,-1)},padding:5,style:{fontSize:"0.7em",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:150},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},inactive:{animation:{duration:150},opacity:.2}},stickyTracking:!0,turboThreshold:1e3,findNearestPointBy:"x"}.marker,{radius:null}),rows:void 0,crisp:!1,showInLegend:!0,startAngle:void 0},{pie:m}=l().seriesTypes,{defined:y,extend:b,fireEvent:v,isNumber:x,merge:M,pick:w}=n();class A extends m{animate(t){let e=this.group;e&&(t?e.attr({opacity:0}):e.animate({opacity:1},this.options.animation))}drawDataLabels(){if(this.center&&this.slots)super.drawDataLabels();else for(let t of this.points)t.destroyElements({dataLabel:1})}drawPoints(){let t=this.options,e=this.chart.renderer,i=t.marker,s=this.borderWidth%2?.5:1,o=this.getRows(),r=Math.ceil(this.total/o),a=this.chart.plotWidth/r,n=this.chart.plotHeight/o,h=this.itemSize||Math.min(a,n),l=0;for(let d of this.points){let c,p,g,u,f,m;let v=d.marker||{},x=v.symbol||i.symbol,M=w(v.radius,i.radius),A=y(M)?2*M:h,P=A*t.itemPadding;if(d.graphics=p=d.graphics||[],this.chart.styledMode||(g=this.pointAttribs(d,d.selected&&"select")),!d.isNull&&d.visible){d.graphic||(d.graphic=e.g("point").add(this.group));for(let i=0;i<(d.y||0);++i){if(this.center&&this.slots){let t=this.slots.shift();u=t.x-h/2,f=t.y-h/2}else"horizontal"===t.layout?(u=l%r*a,f=n*Math.floor(l/r)):(u=a*Math.floor(l/o),f=l%o*n);u+=P,f+=P,m=Math.round(A-2*P),this.options.crisp&&(u=Math.round(u)-s,f=Math.round(f)+s),c={x:u,y:f,width:m,height:m},void 0!==M&&(c.r=M),g&&b(c,g);let y=p[i];y?y.animate(c):y=e.symbol(x,void 0,void 0,void 0,void 0,{backgroundSize:"within"}).attr(c).add(d.graphic),y.isActive=!0,p[i]=y,++l}}for(let t=0;t<p.length;t++){let e=p[t];if(!e)return;e.isActive?e.isActive=!1:(e.destroy(),p.splice(t,1),t--)}}}getRows(){let t=this.chart,e=this.total||0,i=this.options.rows,s;if(!i){if(s=t.plotWidth/t.plotHeight,i=Math.sqrt(e),s>1)for(i=Math.ceil(i);i>0&&!(e/i/i>s);)i--;else for(i=Math.floor(i);i<e&&!(e/i/i<s);)i++}return i}getSlots(){let t=this.center,e=t[2],i=this.slots=this.slots||[],s=this.endAngleRad-this.startAngleRad,o=this.options.rows,r=s%(2*Math.PI)==0,a=this.total||0,n=t[3],h,l,d,c,p,g,u,f,m=0,y,b=Number.MAX_VALUE,v,x,M,w=(e-n)/e;for(;b>a+(x&&r?x.length:0);){v=b,i.length=0,b=0,x=M,M=[],y=e/++m/2,o?(n=(y-o)/y*e)>=0?y=o:(n=0,w=1):y=Math.floor(y*w);for(let t=y;t>0;t--)p=Math.ceil((c=s*(d=(n+t/y*(e-n-m))/2))/m),M.push({rowRadius:d,rowLength:c,colCount:p}),b+=p+1}if(!x)return;let A=v-this.total-(r?x.length:0),P=t=>{A>0&&(t.row.colCount--,A--)};for(;A>0;)x.map(t=>({angle:t.colCount/t.rowLength,row:t})).sort((t,e)=>e.angle-t.angle).slice(0,Math.min(A,Math.ceil(x.length/2))).forEach(P);for(let e of x){let o=e.rowRadius,r=e.colCount;for(f=0,g=r?s/r:0;f<=r;f+=1)u=this.startAngleRad+f*g,h=t[0]+Math.cos(u)*o,l=t[1]+Math.sin(u)*o,i.push({x:h,y:l,angle:u})}return i.sort((t,e)=>t.angle-e.angle),this.itemSize=m,i}translate(t){0===this.total&&x(this.options.startAngle)&&x(this.options.endAngle)&&(this.center=this.getCenter()),this.slots||(this.slots=[]),x(this.options.startAngle)&&x(this.options.endAngle)?(super.translate(t),this.slots=this.getSlots()):(this.generatePoints(),v(this,"afterTranslate"))}}A.defaultOptions=M(m.defaultOptions,f),b(A.prototype,{markerAttribs:void 0,pointClass:g}),l().registerSeriesType("item",A);let P=n();return r.default})());