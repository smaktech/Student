(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[46],{1618:function(e,t,r){"use strict";r.d(t,"c",(function(){return b})),r.d(t,"b",(function(){return f})),r.d(t,"a",(function(){return I}));var a=r(5),n=r(10),i=r(82),c=r(0),o=Object(n.a)(i.a,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"center","& li":{width:18,height:18,opacity:.32,cursor:"pointer"},"& li.slick-active":Object(a.a)({opacity:1},t&&{"& .dotActive":{width:16,borderRadius:6}})}})),s=Object(n.a)("div")((function(){return{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}})),l=Object(n.a)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function b(e){var t=null===e||void 0===e?void 0:e.color,r=(null===e||void 0===e?void 0:e.rounded)||!1;return{appendDots:function(t){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o,Object(a.a)(Object(a.a)({rounded:r,component:"ul"},e),{},{children:t}))})},customPaging:function(){return Object(c.jsx)(s,{children:Object(c.jsx)(l,{className:"dotActive",sx:{bgcolor:t||"primary.main"}})})}}}var d=r(25),j=r(53),u=r(812),h=r(22),x=r(48),O=["filled","customIcon","onNext","onPrevious","children"],m=Object(n.a)(x.c,{shouldForwardProp:function(e){return"filled"!==e}})((function(e){var t=e.filled,r=e.theme;return Object(a.a)({width:40,height:40,cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:r.palette.text.primary}},t&&{opacity:.48,borderRadius:1.5*Number(r.shape.borderRadius),color:r.palette.common.white,backgroundColor:r.palette.grey[900],"&:hover":{opacity:1,color:r.palette.common.white,backgroundColor:r.palette.grey[900]}})}));function f(e){var t=e.filled,r=void 0!==t&&t,n=e.customIcon,o=e.onNext,s=e.onPrevious,l=e.children,b=Object(d.a)(e,O),h="rtl"===Object(j.a)().direction,x={position:"absolute",mt:-2.5,top:"50%",zIndex:9};return l?Object(c.jsxs)(i.a,Object(a.a)(Object(a.a)({},b),{},{children:[Object(c.jsx)(i.a,{className:"arrow left",sx:Object(a.a)(Object(a.a)({},x),{},{left:0}),children:Object(c.jsx)(m,{filled:r,onClick:s,children:p(n,h)})}),l,Object(c.jsx)(i.a,{className:"arrow right",sx:Object(a.a)(Object(a.a)({},x),{},{right:0}),children:Object(c.jsx)(m,{filled:r,onClick:o,children:g(n,h)})})]})):Object(c.jsxs)(u.a,Object(a.a)(Object(a.a)({direction:"row",spacing:1},b),{},{children:[Object(c.jsx)(m,{className:"arrow left",filled:r,onClick:s,children:p(n,h)}),Object(c.jsx)(m,{className:"arrow right",filled:r,onClick:o,children:g(n,h)})]}))}var p=function(e,t){return Object(c.jsx)(h.a,{icon:e||"eva:arrow-right-fill",sx:Object(a.a)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},g=function(e,t){return Object(c.jsx)(h.a,{icon:e||"eva:arrow-right-fill",sx:Object(a.a)({width:20,height:20},t&&{transform:" scaleX(-1)"})})},v=r(58),y=r(817),w=r(94),C=["index","total","onNext","onPrevious","customIcon"],k=Object(n.a)(i.a)((function(e){var t=e.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:Object(v.a)(t.palette.grey[900],.48)}})),S=Object(n.a)(y.a)((function(e){return{padding:6,opacity:.48,color:e.theme.palette.common.white,"&:hover":{opacity:1}}}));function I(e){var t=e.index,r=e.total,n=e.onNext,i=e.onPrevious,o=e.customIcon,s=Object(d.a)(e,C),l="rtl"===Object(j.a)().direction;return Object(c.jsxs)(k,Object(a.a)(Object(a.a)({},s),{},{children:[Object(c.jsx)(S,{size:"small",onClick:i,children:B(o,l)}),Object(c.jsxs)(w.a,{variant:"subtitle2",children:[t+1,"/",r]}),Object(c.jsx)(S,{size:"small",onClick:n,children:P(o,l)})]}))}var B=function(e,t){return Object(c.jsx)(h.a,{icon:e||"eva:arrow-right-fill",sx:Object(a.a)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},P=function(e,t){return Object(c.jsx)(h.a,{icon:e||"eva:arrow-right-fill",sx:Object(a.a)({width:20,height:20},t&&{transform:" scaleX(-1)"})})}},1685:function(e,t,r){"use strict";var a=r(107),n=r(8),i=r(3),c=r(2),o=r(11),s=r(239),l=r(165),b=r(58),d=r(16),j=r(53),u=r(10),h=r(18),x=r(138),O=r(150);function m(e){return Object(x.a)("MuiLinearProgress",e)}Object(O.a)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var f,p,g,v,y,w,C,k,S,I,B,P,M=r(0),N=["className","color","value","valueBuffer","variant"],R=Object(l.c)(C||(C=f||(f=Object(a.a)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),T=Object(l.c)(k||(k=p||(p=Object(a.a)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),D=Object(l.c)(S||(S=g||(g=Object(a.a)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),z=function(e,t){return"inherit"===t?"currentColor":"light"===e.palette.mode?Object(b.f)(e.palette[t].main,.62):Object(b.b)(e.palette[t].main,.5)},W=Object(u.a)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["color".concat(Object(d.a)(r.color))],t[r.variant]]}})((function(e){var t=e.ownerState,r=e.theme;return Object(i.a)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:z(r,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),A=Object(u.a)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,t){var r=e.ownerState;return[t.dashed,t["dashedColor".concat(Object(d.a)(r.color))]]}})((function(e){var t=e.ownerState,r=e.theme,a=z(r,t.color);return Object(i.a)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),Object(l.b)(I||(I=v||(v=Object(a.a)(["\n    animation: "," 3s infinite linear;\n  "]))),D)),G=Object(u.a)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,t){var r=e.ownerState;return[t.bar,t["barColor".concat(Object(d.a)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})((function(e){var t=e.ownerState,r=e.theme;return Object(i.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":r.palette[t.color].main},"determinate"===t.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===t.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(l.b)(B||(B=y||(y=Object(a.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),R)})),q=Object(u.a)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,t){var r=e.ownerState;return[t.bar,t["barColor".concat(Object(d.a)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})((function(e){var t=e.ownerState,r=e.theme;return Object(i.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":r.palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:z(r,t.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(l.b)(P||(P=w||(w=Object(a.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),T)})),H=c.forwardRef((function(e,t){var r=Object(h.a)({props:e,name:"MuiLinearProgress"}),a=r.className,c=r.color,l=void 0===c?"primary":c,b=r.value,u=r.valueBuffer,x=r.variant,O=void 0===x?"indeterminate":x,f=Object(n.a)(r,N),p=Object(i.a)({},r,{color:l,variant:O}),g=function(e){var t=e.classes,r=e.variant,a=e.color,n={root:["root","color".concat(Object(d.a)(a)),r],dashed:["dashed","dashedColor".concat(Object(d.a)(a))],bar1:["bar","barColor".concat(Object(d.a)(a)),("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&"barColor".concat(Object(d.a)(a)),"buffer"===r&&"color".concat(Object(d.a)(a)),("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return Object(s.a)(n,m,t)}(p),v=Object(j.a)(),y={},w={bar1:{},bar2:{}};if("determinate"===O||"buffer"===O)if(void 0!==b){y["aria-valuenow"]=Math.round(b),y["aria-valuemin"]=0,y["aria-valuemax"]=100;var C=b-100;"rtl"===v.direction&&(C=-C),w.bar1.transform="translateX(".concat(C,"%)")}else 0;if("buffer"===O)if(void 0!==u){var k=(u||0)-100;"rtl"===v.direction&&(k=-k),w.bar2.transform="translateX(".concat(k,"%)")}else 0;return Object(M.jsxs)(W,Object(i.a)({className:Object(o.a)(g.root,a),ownerState:p,role:"progressbar"},y,{ref:t},f,{children:["buffer"===O?Object(M.jsx)(A,{className:g.dashed,ownerState:p}):null,Object(M.jsx)(G,{className:g.bar1,ownerState:p,style:w.bar1}),"determinate"===O?null:Object(M.jsx)(q,{className:g.bar2,ownerState:p,style:w.bar2})]}))}));t.a=H},1817:function(e,t,r){"use strict";r.d(t,"g",(function(){return j})),r.d(t,"d",(function(){return C})),r.d(t,"i",(function(){return z})),r.d(t,"a",(function(){return E})),r.d(t,"e",(function(){return K})),r.d(t,"f",(function(){return Z})),r.d(t,"h",(function(){return re})),r.d(t,"c",(function(){return ce})),r.d(t,"b",(function(){return le}));var a=r(6),n=r(10),i=r(1453),c=r(1576),o=r(94),s=r(321),l=r(279),b=r(0),d=Object(n.a)(i.a)((function(e){var t=e.theme;return Object(a.a)({boxShadow:"none",textAlign:"center",backgroundColor:t.palette.primary.lighter},t.breakpoints.up("md"),{height:"100%",display:"flex",textAlign:"left",alignItems:"center",justifyContent:"space-between"})}));function j(){return Object(b.jsxs)(d,{children:[Object(b.jsxs)(c.a,{sx:{color:"grey.800",p:{md:0},pl:{md:5}},children:[Object(b.jsxs)(o.a,{gutterBottom:!0,variant:"h4",children:["Congratulations,",Object(b.jsx)("br",{})," Fabiana Capmany!"]}),Object(b.jsx)(o.a,{variant:"body2",sx:{pb:{xs:3,xl:5},maxWidth:480,mx:"auto"},children:"Best seller of the month You have done 57.6% more sales today."}),Object(b.jsx)(s.a,{variant:"contained",children:"Go Now"})]}),Object(b.jsx)(l.f,{sx:{p:3,width:360,margin:{xs:"auto",md:"inherit"}}})]})}var u=r(5),h=r(1624),x=r.n(h),O=r(58),m=r(53),f=r(82),p=r(1601),g=r(139),v=r(68),y=r(1618),w=[{image:"https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"},{image:"https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{image:"https://images.unsplash.com/photo-1599081593734-5e65dd7abfba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}];Object(n.a)("div")((function(e){var t=e.theme;return{top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute",backgroundColor:Object(O.a)(t.palette.grey[900],.64)}}));function C(){var e=Object(m.a)(),t=Object(u.a)({speed:1e3,dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===e.direction)},Object(y.c)({position:"absolute",right:24,bottom:24}));return Object(b.jsxs)(i.a,{id:"home_slider",sx:{boxShadow:10},children:[Object(b.jsx)(o.a,{sx:{fontSize:"1px"},children:"."}),Object(b.jsx)(x.a,Object(u.a)(Object(u.a)({},t),{},{children:w.map((function(e,t){return Object(b.jsx)(k,{item:e},t)}))}))]})}function k(e){var t=e.item,r=t.image;t.name;return Object(b.jsxs)(f.a,{sx:{position:"relative"},children:[Object(b.jsx)(p.a,{component:"img",height:"150",image:r,alt:"Paella dish"}),Object(b.jsx)(c.a,{sx:{left:0,bottom:0,zIndex:9,maxWidth:"80%",position:"absolute",color:"common.white"}})]})}var S=r(4),I=r(33),B=r(2),P=r(38),M=r.n(P),N=r(1575),R=r(1577),T=r(60),D=[{year:2019,data:[{name:"Total Income",data:[10,41,35,151,49,62,69,91,48]},{name:"Total Expenses",data:[10,34,13,56,77,88,99,77,45]}]},{year:2020,data:[{name:"Total Income",data:[148,91,69,62,49,51,35,41,10]},{name:"Total Expenses",data:[45,77,99,88,77,56,13,34,10]}]}];function z(){var e=Object(B.useState)(2019),t=Object(S.a)(e,2),r=t[0],a=t[1],n=Object(I.merge)(Object(T.a)(),{legend:{position:"top",horizontalAlign:"right"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}});return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(N.a,{title:"Yearly Sales",subheader:"(+43%) than last year",action:Object(b.jsx)(R.a,{select:!0,fullWidth:!0,value:r,SelectProps:{native:!0},onChange:function(e){a(Number(e.target.value))},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:D.map((function(e){return Object(b.jsx)("option",{value:e.year,children:e.year},e.year)}))})}),D.map((function(e){return Object(b.jsx)(f.a,{sx:{mt:3,mx:3},dir:"ltr",children:e.year===r&&Object(b.jsx)(M.a,{type:"area",series:e.data,options:n,height:364})},e.year)}))]})}var W=r(1583),A=r(1584),G=r(1585),q=r(1586),H=r(1587),L=r(1588),X=r(818),Y=r(95),F=r(241),J=r(83);function E(){var e=Object(m.a)();return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(N.a,{title:"Best Salesman",sx:{mb:3}}),Object(b.jsx)(J.a,{children:Object(b.jsx)(W.a,{sx:{minWidth:720},children:Object(b.jsxs)(A.a,{children:[Object(b.jsx)(G.a,{children:Object(b.jsxs)(q.a,{children:[Object(b.jsx)(H.a,{children:"Seller"}),Object(b.jsx)(H.a,{children:"Product"}),Object(b.jsx)(H.a,{children:"Country"}),Object(b.jsx)(H.a,{children:"Total"}),Object(b.jsx)(H.a,{align:"right",children:"Rank"})]})}),Object(b.jsx)(L.a,{children:g.w.map((function(t){return Object(b.jsxs)(q.a,{children:[Object(b.jsx)(H.a,{children:Object(b.jsxs)(f.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsx)(X.a,{alt:t.name,src:t.avatar}),Object(b.jsxs)(f.a,{sx:{ml:2},children:[Object(b.jsxs)(o.a,{variant:"subtitle2",children:[" ",t.name]}),Object(b.jsx)(o.a,{variant:"body2",sx:{color:"text.secondary"},children:t.email})]})]})}),Object(b.jsx)(H.a,{children:t.category}),Object(b.jsx)(H.a,{children:Object(b.jsx)(v.a,{src:t.flag,alt:"country flag",sx:{maxWidth:28}})}),Object(b.jsx)(H.a,{children:Object(Y.a)(t.total)}),Object(b.jsx)(H.a,{align:"right",children:Object(b.jsx)(F.a,{variant:"light"===e.palette.mode?"ghost":"filled",color:("Top 1"===t.rank?"primary":"Top 2"===t.rank&&"info")||"Top 3"===t.rank&&"success"||"Top 4"===t.rank&&"warning"||"error",children:t.rank})})]},t.name)}))})]})})})]})}var V=Object(n.a)("div")((function(e){var t=e.theme;return{height:392,marginTop:t.spacing(2),"& .apexcharts-canvas svg":{height:392},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(320,"px) !important")}}})),_=[44,75];function K(){var e=Object(m.a)(),t=Object(I.merge)(Object(T.a)(),{labels:["Mens","Womens"],legend:{floating:!0,horizontalAlign:"center"},fill:{type:"gradient",gradient:{colorStops:[[{offset:0,color:e.palette.primary.light},{offset:100,color:e.palette.primary.main}],[{offset:0,color:e.palette.warning.light},{offset:100,color:e.palette.warning.main}]]}},plotOptions:{radialBar:{hollow:{size:"68%"},dataLabels:{value:{offsetY:16},total:{formatter:function(){return Object(Y.c)(2324)}}}}}});return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(N.a,{title:"Sale By Gender"}),Object(b.jsx)(V,{dir:"ltr",children:Object(b.jsx)(M.a,{type:"radialBar",series:_,options:t,height:310})})]})}var Q=r(812),U=r(1685);function Z(){return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(N.a,{title:"Sales Overview"}),Object(b.jsx)(Q.a,{spacing:4,sx:{p:3},children:g.y.map((function(e){return Object(b.jsx)($,{progress:e},e.label)}))})]})}function $(e){var t=e.progress;return Object(b.jsxs)(Q.a,{spacing:1,children:[Object(b.jsxs)(Q.a,{direction:"row",alignItems:"center",children:[Object(b.jsx)(o.a,{variant:"subtitle2",sx:{flexGrow:1},children:t.label}),Object(b.jsx)(o.a,{variant:"subtitle2",children:Object(Y.a)(t.amount)}),Object(b.jsxs)(o.a,{variant:"body2",sx:{color:"text.secondary"},children:["\xa0(",Object(Y.d)(t.value),")"]})]}),Object(b.jsx)(U.a,{variant:"determinate",value:t.value,color:("Total Income"===t.label?"info":"Total Expenses"===t.label&&"warning")||"primary"})]})}var ee=r(22),te=Object(n.a)("div")((function(e){var t=e.theme;return{width:24,height:24,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",marginRight:t.spacing(1),color:t.palette.success.main,backgroundColor:Object(O.a)(t.palette.success.main,.16)}}));function re(e){var t=e.title,r=e.percent,a=e.total,n=e.chartColor,c=e.chartData,s=Object(I.merge)(Object(T.a)(),{colors:[n],chart:{animations:{enabled:!0},sparkline:{enabled:!0}},stroke:{width:2},tooltip:{x:{show:!1},y:{formatter:function(e){return Object(Y.c)(e)},title:{formatter:function(){return""}}},marker:{show:!1}}});return Object(b.jsxs)(i.a,{sx:{display:"flex",alignItems:"center",p:3},children:[Object(b.jsxs)(f.a,{sx:{flexGrow:1},children:[Object(b.jsx)(o.a,{variant:"subtitle2",paragraph:!0,children:t}),Object(b.jsx)(o.a,{variant:"h3",gutterBottom:!0,children:Object(Y.c)(a)}),Object(b.jsxs)(Q.a,{direction:"row",alignItems:"center",children:[Object(b.jsx)(te,{sx:Object(u.a)({},r<0&&{color:"error.main",bgcolor:function(e){return Object(O.a)(e.palette.error.main,.16)}}),children:Object(b.jsx)(ee.a,{width:16,height:16,icon:r>=0?"eva:trending-up-fill":"eva:trending-down-fill"})}),Object(b.jsxs)(o.a,{variant:"subtitle2",component:"span",children:[r>0&&"+",Object(Y.d)(r)]}),Object(b.jsx)(o.a,{variant:"body2",component:"span",noWrap:!0,sx:{color:"text.secondary"},children:"\xa0than last week"})]})]}),Object(b.jsx)(M.a,{type:"line",series:[{data:c}],options:s,width:120,height:80})]})}var ae=r(29),ne=r(429),ie=r(442);function ce(){return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(N.a,{title:"Latest Products"}),Object(b.jsx)(J.a,{children:Object(b.jsx)(Q.a,{spacing:3,sx:{p:3,pr:0},children:g.x.map((function(e){return Object(b.jsx)(oe,{product:e},e.id)}))})})]})}function oe(e){var t=e.product,r=t.name,a=t.image,n=t.price,i=t.priceSale,c=i>0;return Object(b.jsxs)(Q.a,{direction:"row",spacing:2,children:[Object(b.jsx)(v.a,{alt:r,src:a,sx:{width:48,height:48,borderRadius:1.5,flexShrink:0}}),Object(b.jsxs)(f.a,{sx:{flexGrow:1,minWidth:200},children:[Object(b.jsx)(ne.a,{component:ae.b,to:"#",sx:{color:"text.primary",typography:"subtitle2"},children:r}),Object(b.jsxs)(Q.a,{direction:"row",children:[c&&Object(b.jsx)(o.a,{variant:"body2",sx:{color:"text.secondary",textDecoration:"line-through"},children:Object(Y.a)(i)}),"\xa0",Object(b.jsx)(o.a,{variant:"body2",sx:{color:i?"error.main":"text.secondary"},children:Object(Y.a)(n)})]})]}),Object(b.jsx)(ie.a,{limit:3,colors:t.colors,sx:{minWidth:72,pr:3}})]})}var se=Object(n.a)("div")({display:"flex",justifyContent:"space-between"});function le(){var e=187650,t=162150;return Object(b.jsxs)(i.a,{sx:{p:3},children:[Object(b.jsx)(o.a,{variant:"subtitle2",gutterBottom:!0,children:"Your Current Balance"}),Object(b.jsxs)(Q.a,{spacing:2,children:[Object(b.jsx)(o.a,{variant:"h3",children:Object(Y.a)(t)}),Object(b.jsxs)(se,{children:[Object(b.jsx)(o.a,{variant:"body2",sx:{color:"text.secondary"},children:"Your Current Balance"}),Object(b.jsx)(o.a,{variant:"body2",children:Object(Y.a)(e)})]}),Object(b.jsxs)(se,{children:[Object(b.jsx)(o.a,{variant:"body2",sx:{color:"text.secondary"},children:"Sent Amount"}),Object(b.jsxs)(o.a,{variant:"body2",children:["- ",Object(Y.a)(25500)]})]}),Object(b.jsxs)(se,{children:[Object(b.jsx)(o.a,{variant:"body2",sx:{color:"text.secondary"},children:"Total Amount"}),Object(b.jsx)(o.a,{variant:"subtitle1",children:Object(Y.a)(t)})]}),Object(b.jsxs)(Q.a,{direction:"row",spacing:1.5,children:[Object(b.jsx)(s.a,{fullWidth:!0,variant:"contained",color:"warning",children:"Transfer"}),Object(b.jsx)(s.a,{fullWidth:!0,variant:"contained",children:"Receive"})]})]})]})}},2454:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var a=r(53),n=r(1451),i=r(240),c=r(96),o=r(322),s=r(1817),l=r(0);function b(){var e=Object(a.a)(),t=Object(c.a)().themeStretch;return Object(l.jsx)(o.a,{title:"General: E-commerce",children:Object(l.jsx)(n.a,{maxWidth:!t&&"xl",children:Object(l.jsxs)(i.a,{container:!0,spacing:3,children:[Object(l.jsx)(i.a,{item:!0,xs:12,md:8,children:Object(l.jsx)(s.g,{})}),Object(l.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(l.jsx)(s.d,{})}),Object(l.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(l.jsx)(s.h,{title:"Product Sold",percent:2.6,total:765,chartColor:e.palette.primary.main,chartData:[22,8,35,50,82,84,77,12,87,43]})}),Object(l.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(l.jsx)(s.h,{title:"Total Balance",percent:-.1,total:18765,chartColor:e.palette.chart.green[0],chartData:[56,47,40,62,73,30,23,54,67,68]})}),Object(l.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(l.jsx)(s.h,{title:"Sales Profit",percent:.6,total:4876,chartColor:e.palette.chart.red[0],chartData:[40,70,75,70,50,28,7,64,38,27]})}),Object(l.jsx)(i.a,{item:!0,xs:12,md:6,lg:4,children:Object(l.jsx)(s.e,{})}),Object(l.jsx)(i.a,{item:!0,xs:12,md:6,lg:8,children:Object(l.jsx)(s.i,{})}),Object(l.jsx)(i.a,{item:!0,xs:12,md:6,lg:8,children:Object(l.jsx)(s.f,{})}),Object(l.jsx)(i.a,{item:!0,xs:12,md:6,lg:4,children:Object(l.jsx)(s.b,{})}),Object(l.jsx)(i.a,{item:!0,xs:12,md:6,lg:8,children:Object(l.jsx)(s.a,{})}),Object(l.jsx)(i.a,{item:!0,xs:12,md:6,lg:4,children:Object(l.jsx)(s.c,{})})]})})})}}}]);
//# sourceMappingURL=46.b6feef55.chunk.js.map