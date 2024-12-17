!/**
 * Highcharts JS v12.1.0 (2024-12-17)
 * @module highcharts/modules/sankey
 * @requires highcharts
 *
 * Sankey diagram module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts,t._Highcharts.SeriesRegistry,t._Highcharts.Point,t._Highcharts.Color,t._Highcharts.SVGElement):"function"==typeof define&&define.amd?define("highcharts/modules/sankey",["highcharts/highcharts"],function(t){return e(t,t.SeriesRegistry,t.Point,t.Color,t.SVGElement)}):"object"==typeof exports?exports["highcharts/modules/sankey"]=e(t._Highcharts,t._Highcharts.SeriesRegistry,t._Highcharts.Point,t._Highcharts.Color,t._Highcharts.SVGElement):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry,t.Highcharts.Point,t.Highcharts.Color,t.Highcharts.SVGElement)}("undefined"==typeof window?this:window,(t,e,o,i,s)=>(()=>{"use strict";var n,r,l={620:t=>{t.exports=i},260:t=>{t.exports=o},28:t=>{t.exports=s},512:t=>{t.exports=e},944:e=>{e.exports=t}},a={};function h(t){var e=a[t];if(void 0!==e)return e.exports;var o=a[t]={exports:{}};return l[t](o,o.exports,h),o.exports}h.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return h.d(e,{a:e}),e},h.d=(t,e)=>{for(var o in e)h.o(e,o)&&!h.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},h.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var d={};h.d(d,{default:()=>tc});var p=h(944),c=h.n(p),u=h(512),f=h.n(u);let{series:{prototype:m,prototype:{pointClass:{prototype:g}}}}=f(),{defined:y,extend:x,find:b,merge:v,pick:k}=c();!function(t){function e(){return this.data=[].concat(this.points||[],this.nodes),m.destroy.apply(this,arguments)}function o(){this.nodes&&(this.nodes.forEach(t=>{t.destroy()}),this.nodes.length=0),m.setData.apply(this,arguments)}function i(t){let e=arguments,o=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];"select"!==t&&o.forEach(t=>{t&&t.series&&(g.setState.apply(t,e),!t.isNode&&(t.fromNode.graphic&&g.setState.apply(t.fromNode,e),t.toNode&&t.toNode.graphic&&g.setState.apply(t.toNode,e)))}),g.setState.apply(this,e)}function s(t,e,o,i){let s=this.series.options.nodes,n=this.series.options.data,r=n?.length||0,l=n?.[this.index];if(g.update.call(this,t,!this.isNode&&e,o,i),this.isNode){let t=(s||[]).reduce((t,e,o)=>this.id===e.id?o:t,-1),i=v(s&&s[t]||{},n?.[this.index]||{});n&&(l?n[this.index]=l:n.length=r),s?t>=0?s[t]=i:s.push(i):this.series.options.nodes=[i],k(e,!0)&&this.series.chart.redraw(o)}}t.compose=function(t,n){let r=t.prototype,l=n.prototype;return r.setNodeState=i,r.setState=i,r.update=s,l.destroy=e,l.setData=o,n},t.createNode=function(t){let e=this.pointClass,o=(t,e)=>b(t,t=>t.id===e),i=o(this.nodes,t),s;if(!i){s=this.options.nodes&&o(this.options.nodes,t);let n=new e(this,x({className:"highcharts-node",isNode:!0,id:t,y:1},s));n.linksTo=[],n.linksFrom=[],n.getSum=function(){let t=0,e=0;return n.linksTo.forEach(e=>{t+=e.weight||0}),n.linksFrom.forEach(t=>{e+=t.weight||0}),Math.max(t,e)},n.offset=function(t,e){let o=0;for(let i=0;i<n[e].length;i++){if(n[e][i]===t)return o;o+=n[e][i].weight}},n.hasShape=function(){let t=0;return n.linksTo.forEach(e=>{e.outgoing&&t++}),!n.linksTo.length||t!==n.linksTo.length},n.index=this.nodes.push(n)-1,i=n}return i.formatPrefix="node",i.name=i.name||i.options.id||"",i.mass=k(i.options.mass,i.options.marker&&i.options.marker.radius,this.options.marker&&this.options.marker.radius,4),i},t.destroy=e,t.generatePoints=function(){let t=this.chart,e={};m.generatePoints.call(this),this.nodes||(this.nodes=[]),this.colorCounter=0,this.nodes.forEach(t=>{t.linksFrom.length=0,t.linksTo.length=0,t.level=t.options.level}),this.points.forEach(o=>{y(o.from)&&(e[o.from]||(e[o.from]=this.createNode(o.from)),e[o.from].linksFrom.push(o),o.fromNode=e[o.from],t.styledMode?o.colorIndex=k(o.options.colorIndex,e[o.from].colorIndex):o.color=o.options.color||e[o.from].color),y(o.to)&&(e[o.to]||(e[o.to]=this.createNode(o.to)),e[o.to].linksTo.push(o),o.toNode=e[o.to]),o.name=o.name||o.id},this),this.nodeLookup=e},t.setNodeState=i,t.updateNode=s}(n||(n={}));let C=n;var N=h(260),P=h.n(N);let{column:L}=f().seriesTypes,{defined:S}=c();class T extends L.prototype.pointClass{applyOptions(t,e){return P().prototype.applyOptions.call(this,t,e),S(this.options.level)&&(this.options.column=this.column=this.options.level),this}getClassName(){return(this.isNode?"highcharts-node ":"highcharts-link ")+P().prototype.getClassName.call(this)}getFromNode(){let t=-1,e;for(let o=0;o<this.linksTo.length;o++){let i=this.linksTo[o];i.fromNode.column>t&&i.fromNode!==this&&(t=(e=i.fromNode).column)}return{fromNode:e,fromColumn:t}}setNodeColumn(){S(this.options.column)||(0===this.linksTo.length?this.column=0:this.column=this.getFromNode().fromColumn+1)}isValid(){return this.isNode||"number"==typeof this.weight}}let{defined:w,getAlignFactor:O,relativeLength:M}=c();!function(t){t.compose=function(t,o){return t.sankeyColumn=new e(t,o),t};class e{constructor(t,e){this.points=t,this.series=e}getTranslationFactor(t){let e=this.points,o=e.slice(),i=t.chart,s=t.options.minLinkWidth||0,n,r=0,l,a=(i.plotSizeY||0)-(t.options.borderWidth||0)-(e.length-1)*t.nodePadding;for(;e.length;){for(r=a/e.sankeyColumn.sum(),n=!1,l=e.length;l--;)e[l].getSum()*r<s&&(e.splice(l,1),a=Math.max(0,a-s),n=!0);if(!n)break}for(let t of(e.length=0,o))e.push(t);return r}top(t){let e=this.series,o=e.nodePadding,i=this.points.reduce((i,s)=>(i>0&&(i+=o),i+=Math.max(s.getSum()*t,e.options.minLinkWidth||0)),0);return O(e.options.nodeAlignment||"center")*((e.chart.plotSizeY||0)-i)}left(t){let e=this.series,o=e.chart,i=e.options.equalNodes,s=o.inverted?o.plotHeight:o.plotWidth,n=e.nodePadding,r=this.points.reduce((o,r)=>(o>0&&(o+=n),o+=i?s/r.series.nodes.length-n:Math.max(r.getSum()*t,e.options.minLinkWidth||0)),0);return((o.plotSizeX||0)-Math.round(r))/2}sum(){return this.points.reduce((t,e)=>t+e.getSum(),0)}offset(t,e){let o=this.points,i=this.series,s=i.nodePadding,n=0,r;if(i.is("organization")&&t.hangsFrom)return{absoluteTop:t.hangsFrom.nodeY};for(let l=0;l<o.length;l++){let a=o[l].getSum(),h=Math.max(a*e,i.options.minLinkWidth||0),d=t.options[i.chart.inverted?"offsetHorizontal":"offsetVertical"],p=t.options.offset||0;if(r=a?h+s:0,o[l]===t)return{relativeTop:n+(w(d)?M(d,h):M(p,r))};n+=r}}}t.SankeyColumnAdditions=e}(r||(r={}));let F=r;var W=h(620),H=h.n(W);let{extend:z,isArray:I,isNumber:D,isObject:B,merge:Y,pick:E,relativeLength:A}=c();var _=h(28),R=h.n(_);let{deg2rad:X}=c(),{addEvent:V,merge:j,uniqueKey:G,defined:$,extend:q}=c();function Z(t,e){e=j(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},e);let o=this.renderer.url,i=this.text||this,s=i.textPath,{attributes:n,enabled:r}=e;if(t=t||s&&s.path,s&&s.undo(),t&&r){let e=V(i,"afterModifyTree",e=>{if(t&&r){let s=t.attr("id");s||t.attr("id",s=G());let r={x:0,y:0};$(n.dx)&&(r.dx=n.dx,delete n.dx),$(n.dy)&&(r.dy=n.dy,delete n.dy),i.attr(r),this.attr({transform:""}),this.box&&(this.box=this.box.destroy());let l=e.nodes.slice(0);e.nodes.length=0,e.nodes[0]={tagName:"textPath",attributes:q(n,{"text-anchor":n.textAnchor,href:`${o}#${s}`}),children:l}}});i.textPath={path:t,undo:e}}else i.attr({dx:0,dy:0}),delete i.textPath;return this.added&&(i.textCache="",this.renderer.buildText(i)),this}function J(t){let e=t.bBox,o=this.element?.querySelector("textPath");if(o){let t=[],{b:i,h:s}=this.renderer.fontMetrics(this.element),n=s-i,r=RegExp('(<tspan>|<tspan(?!\\sclass="highcharts-br")[^>]*>|<\\/tspan>)',"g"),l=o.innerHTML.replace(r,"").split(/<tspan class="highcharts-br"[^>]*>/),a=l.length,h=(t,e)=>{let{x:s,y:r}=e,l=(o.getRotationOfChar(t)-90)*X,a=Math.cos(l),h=Math.sin(l);return[[s-n*a,r-n*h],[s+i*a,r+i*h]]};for(let e=0,i=0;i<a;i++){let s=l[i].length;for(let n=0;n<s;n+=5)try{let s=e+n+i,[r,l]=h(s,o.getStartPositionOfChar(s));0===n?(t.push(l),t.push(r)):(0===i&&t.unshift(l),i===a-1&&t.push(r))}catch(t){break}e+=s-1;try{let s=e+i,n=o.getEndPositionOfChar(s),[r,l]=h(s,n);t.unshift(l),t.unshift(r)}catch(t){break}}t.length&&t.push(t[0].slice()),e.polygon=t}return e}function K(t){let e=t.labelOptions,o=t.point,i=e[o.formatPrefix+"TextPath"]||e.textPath;i&&!e.useHTML&&(this.setTextPath(o.getDataLabelPath?.(this)||o.graphic,i),o.dataLabelPath&&!i.enabled&&(o.dataLabelPath=o.dataLabelPath.destroy()))}let{column:Q,line:U}=f().seriesTypes,{parse:tt}=H(),{getLevelOptions:te,getNodeWidth:to}={getColor:function(t,e){let o,i,s,n,r,l;let a=e.index,h=e.mapOptionsToLevel,d=e.parentColor,p=e.parentColorIndex,c=e.series,u=e.colors,f=e.siblings,m=c.points,g=c.chart.options.chart;return t&&(o=m[t.i],i=h[t.level]||{},o&&i.colorByPoint&&(n=o.index%(u?u.length:g.colorCount),s=u&&u[n]),c.chart.styledMode||(r=E(o&&o.options.color,i&&i.color,s,d&&(t=>{let e=i&&i.colorVariation;return e&&"brightness"===e.key&&a&&f?H().parse(t).brighten(e.to*(a/f)).get():t})(d),c.color)),l=E(o&&o.options.colorIndex,i&&i.colorIndex,n,p,e.colorIndex)),{color:r,colorIndex:l}},getLevelOptions:function(t){let e,o,i,s,n,r;let l={};if(B(t))for(s=D(t.from)?t.from:1,r=t.levels,o={},e=B(t.defaults)?t.defaults:{},I(r)&&(o=r.reduce((t,o)=>{let i,n,r;return B(o)&&D(o.level)&&(n=E((r=Y({},o)).levelIsConstant,e.levelIsConstant),delete r.levelIsConstant,delete r.level,B(t[i=o.level+(n?0:s-1)])?Y(!0,t[i],r):t[i]=r),t},{})),n=D(t.to)?t.to:1,i=0;i<=n;i++)l[i]=Y({},e,B(o[i])?o[i]:{});return l},getNodeWidth:function(t,e){let{chart:o,options:i}=t,{nodeDistance:s=0,nodeWidth:n=0}=i,{plotSizeX:r=1}=o;if("auto"===n){if("string"==typeof s&&/%$/.test(s))return r/(e+parseFloat(s)/100*(e-1));let t=Number(s);return(r+t)/(e||1)-t}return A(n,r)},setTreeValues:function t(e,o){let i=o.before,s=o.idRoot,n=o.mapIdToNode[s],r=!1!==o.levelIsConstant,l=o.points[e.i],a=l&&l.options||{},h=[],d=0;e.levelDynamic=e.level-(r?0:n.level),e.name=E(l&&l.name,""),e.visible=s===e.id||!0===o.visible,"function"==typeof i&&(e=i(e,o)),e.children.forEach((i,s)=>{let n=z({},o);z(n,{index:s,siblings:e.children.length,visible:e.visible}),i=t(i,n),h.push(i),i.visible&&(d+=i.val)});let p=E(a.value,d);return e.visible=p>=0&&(d>0||e.visible),e.children=h,e.childrenTotal=d,e.isLeaf=e.visible&&!d,e.val=p,e},updateRootId:function(t){let e,o;return B(t)&&(o=B(t.options)?t.options:{},e=E(t.rootNode,o.rootId,""),B(t.userOptions)&&(t.userOptions.rootId=e),t.rootNode=e),e}},{clamp:ti,crisp:ts,extend:tn,isObject:tr,merge:tl,pick:ta,relativeLength:th,stableSort:td}=c();({compose:function(t){V(t,"afterGetBBox",J),V(t,"beforeAddingDataLabel",K);let e=t.prototype;e.setTextPath||(e.setTextPath=Z)}}).compose(R());class tp extends Q{static getDLOptions(t){let e=tr(t.optionsPoint)?t.optionsPoint.dataLabels:{};return tl({style:{}},tr(t.level)?t.level.dataLabels:{},e)}createNodeColumns(){let t=[];for(let e of this.nodes)e.setNodeColumn(),t[e.column]||(t[e.column]=F.compose([],this)),t[e.column].push(e);for(let e=0;e<t.length;e++)void 0===t[e]&&(t[e]=F.compose([],this));return t}order(t,e){if(void 0===t.level)for(let o of(t.level=e,t.linksFrom))o.toNode&&this.order(o.toNode,e+1)}generatePoints(){if(C.generatePoints.apply(this,arguments),this.orderNodes){for(let t of this.nodes)0===t.linksTo.length&&this.order(t,0);td(this.nodes,(t,e)=>t.level-e.level)}}getNodePadding(){let t=this.options.nodePadding||0;if(this.nodeColumns){let e=this.nodeColumns.reduce((t,e)=>Math.max(t,e.length),0);e*t>this.chart.plotSizeY&&(t=this.chart.plotSizeY/e)}return t}hasData(){return!!this.dataTable.rowCount}pointAttribs(t,e){if(!t)return{};let o=this,i=t.isNode?t.level:t.fromNode.level,s=o.mapOptionsToLevel[i||0]||{},n=t.options,r=s.states&&s.states[e||""]||{},l=["colorByPoint","borderColor","borderWidth","linkOpacity","opacity"].reduce((t,e)=>(t[e]=ta(r[e],n[e],s[e],o.options[e]),t),{}),a=ta(r.color,n.color,l.colorByPoint?t.color:s.color);return t.isNode?{fill:a,stroke:l.borderColor,"stroke-width":l.borderWidth,opacity:l.opacity}:{fill:H().parse(a).setOpacity(l.linkOpacity).get()}}drawTracker(){Q.prototype.drawTracker.call(this,this.points),Q.prototype.drawTracker.call(this,this.nodes)}drawPoints(){Q.prototype.drawPoints.call(this,this.points),Q.prototype.drawPoints.call(this,this.nodes)}drawDataLabels(){Q.prototype.drawDataLabels.call(this,this.points),Q.prototype.drawDataLabels.call(this,this.nodes)}translate(){this.generatePoints(),this.nodeColumns=this.createNodeColumns();let t=this,e=this.chart,o=this.options,i=this.nodeColumns,s=i.length;for(let n of(this.nodeWidth=to(this,s),this.nodePadding=this.getNodePadding(),this.translationFactor=i.reduce((e,o)=>Math.min(e,o.sankeyColumn.getTranslationFactor(t)),1/0),this.colDistance=(e.plotSizeX-this.nodeWidth-o.borderWidth)/Math.max(1,i.length-1),t.mapOptionsToLevel=te({from:1,levels:o.levels,to:i.length-1,defaults:{borderColor:o.borderColor,borderRadius:o.borderRadius,borderWidth:o.borderWidth,color:t.color,colorByPoint:o.colorByPoint,levelIsConstant:!0,linkColor:o.linkColor,linkLineWidth:o.linkLineWidth,linkOpacity:o.linkOpacity,states:o.states}}),i))for(let e of n)t.translateNode(e,n);for(let e of this.nodes)for(let o of e.linksFrom)(o.weight||o.isNull)&&o.to&&(t.translateLink(o),o.allowShadow=!1)}translateLink(t){let e=(e,o)=>{let i=e.offset(t,o)*r;return Math.min(e.nodeY+i,e.nodeY+(e.shapeArgs&&e.shapeArgs.height||0)-u)},o=t.fromNode,i=t.toNode,s=this.chart,{inverted:n}=s,r=this.translationFactor,l=this.options,a=ta(t.linkColorMode,l.linkColorMode),h=(s.inverted?-this.colDistance:this.colDistance)*l.curveFactor,d=o.nodeX,p=i.nodeX,c=t.outgoing,u=Math.max(t.weight*r,this.options.minLinkWidth),f=e(o,"linksFrom"),m=e(i,"linksTo"),g=this.nodeWidth,y=p>d+g;if(s.inverted&&(f=s.plotSizeY-f,m=(s.plotSizeY||0)-m,g=-g,u=-u,y=d>p),t.shapeType="path",t.linkBase=[f,f+u,m,m+u],y&&"number"==typeof m)t.shapeArgs={d:[["M",d+g,f],["C",d+g+h,f,p-h,m,p,m],["L",p+(c?g:0),m+u/2],["L",p,m+u],["C",p-h,m+u,d+g+h,f+u,d+g,f+u],["Z"]]};else if("number"==typeof m){let e=s.plotHeight-f-u,o=p-20-u,i=p-20,n=d+g,r=n+20,l=r+u,a=f,h=f+u,c=h+20,y=c+e,x=y+20,b=x+u,v=m,k=v+u,C=k+20,N=h-.7*u,P=x+.7*u,L=k-.7*u,S=p-.7*u,T=n+.7*u;t.shapeArgs={d:[["M",n,a],["C",T,a,l,N,l,c],["L",l,y],["C",l,P,T,b,n,b],["L",p,b],["C",S,b,o,P,o,y],["L",o,C],["C",o,L,S,v,p,v],["L",p,k],["C",i,k,i,k,i,C],["L",i,y],["C",i,x,i,x,p,x],["L",n,x],["C",r,x,r,x,r,y],["L",r,c],["C",r,h,r,h,n,h],["Z"]]}}if(t.dlBox={x:d+(p-d+g)/2,y:f+(m-f)/2,height:u,width:0},t.tooltipPos=s.inverted?[s.plotSizeY-t.dlBox.y-u/2,s.plotSizeX-t.dlBox.x]:[t.dlBox.x,t.dlBox.y+u/2],t.y=t.plotY=1,t.x=t.plotX=1,!t.options.color){if("from"===a)t.color=o.color;else if("to"===a)t.color=i.color;else if("gradient"===a){let e=tt(o.color).get(),s=tt(i.color).get();t.color={linearGradient:{x1:1,x2:0,y1:0,y2:0},stops:[[0,n?e:s],[1,n?s:e]]}}}}translateNode(t,e){let o=this.translationFactor,i=this.chart,s=this.options,{borderRadius:n,borderWidth:r=0}=s,l=t.getSum(),a=Math.max(Math.round(l*o),this.options.minLinkWidth),h=Math.round(this.nodeWidth),d=e.sankeyColumn.offset(t,o),p=ts(ta(d.absoluteTop,e.sankeyColumn.top(o)+d.relativeTop),r),c=ts(this.colDistance*t.column+r/2,r)+th(t.options[i.inverted?"offsetVertical":"offsetHorizontal"]||0,h),u=i.inverted?i.plotSizeX-c:c;if(t.sum=l,l){t.shapeType="roundedRect",t.nodeX=u,t.nodeY=p;let e=u,o=p,r=t.options.width||s.width||h,l=t.options.height||s.height||a,d=ti(th("object"==typeof n?n.radius:n||0,r),0,a/2);i.inverted&&(e=u-h,o=i.plotSizeY-p-a,r=t.options.height||s.height||h,l=t.options.width||s.width||a),t.dlOptions=tp.getDLOptions({level:this.mapOptionsToLevel[t.level],optionsPoint:t.options}),t.plotX=1,t.plotY=1,t.tooltipPos=i.inverted?[i.plotSizeY-o-l/2,i.plotSizeX-e-r/2]:[e+r/2,o+l/2],t.shapeArgs={x:e,y:o,width:r,height:l,r:d,display:t.hasShape()?"":"none"}}else t.dlOptions={enabled:!1}}}tp.defaultOptions=tl(Q.defaultOptions,{borderWidth:0,colorByPoint:!0,curveFactor:.33,dataLabels:{enabled:!0,backgroundColor:"none",crop:!1,nodeFormat:void 0,nodeFormatter:function(){return this.point.name},format:void 0,formatter:function(){},inside:!0},inactiveOtherPoints:!0,linkColorMode:"from",linkOpacity:.5,opacity:1,minLinkWidth:0,nodeAlignment:"center",nodeWidth:20,nodePadding:10,nodeDistance:30,showInLegend:!1,states:{hover:{linkOpacity:1,opacity:1},inactive:{linkOpacity:.1,opacity:.1,animation:{duration:50}}},tooltip:{followPointer:!0,headerFormat:'<span style="font-size: 0.8em">{series.name}</span><br/>',pointFormat:"{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>",nodeFormat:"{point.name}: <b>{point.sum}</b><br/>"}}),C.compose(T,tp),tn(tp.prototype,{animate:U.prototype.animate,createNode:C.createNode,forceDL:!0,invertible:!0,isCartesian:!1,orderNodes:!0,noSharedTooltip:!0,pointArrayMap:["from","to","weight"],pointClass:T,searchPoint:c().noop}),f().registerSeriesType("sankey",tp);let tc=c();return d.default})());