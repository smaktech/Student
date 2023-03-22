(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[36],{1618:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return S}));var r=n(5),i=n(10),a=n(82),c=n(0),o=Object(i.a)(a.a,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"center","& li":{width:18,height:18,opacity:.32,cursor:"pointer"},"& li.slick-active":Object(r.a)({opacity:1},t&&{"& .dotActive":{width:16,borderRadius:6}})}})),s=Object(i.a)("div")((function(){return{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}})),l=Object(i.a)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function d(e){var t=null===e||void 0===e?void 0:e.color,n=(null===e||void 0===e?void 0:e.rounded)||!1;return{appendDots:function(t){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o,Object(r.a)(Object(r.a)({rounded:n,component:"ul"},e),{},{children:t}))})},customPaging:function(){return Object(c.jsx)(s,{children:Object(c.jsx)(l,{className:"dotActive",sx:{bgcolor:t||"primary.main"}})})}}}var j=n(25),u=n(53),b=n(812),h=n(22),O=n(48),x=["filled","customIcon","onNext","onPrevious","children"],f=Object(i.a)(O.c,{shouldForwardProp:function(e){return"filled"!==e}})((function(e){var t=e.filled,n=e.theme;return Object(r.a)({width:40,height:40,cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:n.palette.text.primary}},t&&{opacity:.48,borderRadius:1.5*Number(n.shape.borderRadius),color:n.palette.common.white,backgroundColor:n.palette.grey[900],"&:hover":{opacity:1,color:n.palette.common.white,backgroundColor:n.palette.grey[900]}})}));function v(e){var t=e.filled,n=void 0!==t&&t,i=e.customIcon,o=e.onNext,s=e.onPrevious,l=e.children,d=Object(j.a)(e,x),h="rtl"===Object(u.a)().direction,O={position:"absolute",mt:-2.5,top:"50%",zIndex:9};return l?Object(c.jsxs)(a.a,Object(r.a)(Object(r.a)({},d),{},{children:[Object(c.jsx)(a.a,{className:"arrow left",sx:Object(r.a)(Object(r.a)({},O),{},{left:0}),children:Object(c.jsx)(f,{filled:n,onClick:s,children:m(i,h)})}),l,Object(c.jsx)(a.a,{className:"arrow right",sx:Object(r.a)(Object(r.a)({},O),{},{right:0}),children:Object(c.jsx)(f,{filled:n,onClick:o,children:p(i,h)})})]})):Object(c.jsxs)(b.a,Object(r.a)(Object(r.a)({direction:"row",spacing:1},d),{},{children:[Object(c.jsx)(f,{className:"arrow left",filled:n,onClick:s,children:m(i,h)}),Object(c.jsx)(f,{className:"arrow right",filled:n,onClick:o,children:p(i,h)})]}))}var m=function(e,t){return Object(c.jsx)(h.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},p=function(e,t){return Object(c.jsx)(h.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20},t&&{transform:" scaleX(-1)"})})},g=n(58),w=n(817),y=n(94),k=["index","total","onNext","onPrevious","customIcon"],C=Object(i.a)(a.a)((function(e){var t=e.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:Object(g.a)(t.palette.grey[900],.48)}})),N=Object(i.a)(w.a)((function(e){return{padding:6,opacity:.48,color:e.theme.palette.common.white,"&:hover":{opacity:1}}}));function S(e){var t=e.index,n=e.total,i=e.onNext,a=e.onPrevious,o=e.customIcon,s=Object(j.a)(e,k),l="rtl"===Object(u.a)().direction;return Object(c.jsxs)(C,Object(r.a)(Object(r.a)({},s),{},{children:[Object(c.jsx)(N,{size:"small",onClick:a,children:R(o,l)}),Object(c.jsxs)(y.a,{variant:"subtitle2",children:[t+1,"/",n]}),Object(c.jsx)(N,{size:"small",onClick:i,children:P(o,l)})]}))}var R=function(e,t){return Object(c.jsx)(h.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},P=function(e,t){return Object(c.jsx)(h.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20},t&&{transform:" scaleX(-1)"})})}},1621:function(e,t,n){"use strict";var r=n(15),i=n(4),a=n(8),c=n(3),o=n(815),s=n(10),l=n(18),d=n(67),j=n(93),u=n(275),b=n(428),h=n(11),O=n(2),x=n(430),f=n(320);function v(e){return Object(x.a)("MuiMasonry",e)}Object(f.a)("MuiMasonry",["root"]);var m=n(0),p=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],g=function(e){return Number(e.replace("px",""))},w=Object(s.a)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,r={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},i={};if(t.isSSR){for(var a={},o=Number(n.spacing(t.defaultSpacing).replace("px","")),s=1;s<=t.defaultColumns;s+=1)a["&:nth-of-type(".concat(t.defaultColumns,"n+").concat(s%t.defaultColumns,")")]={order:s};return i.height=t.defaultHeight,i.margin=-o/2,i["& > *"]=Object(c.a)({},r["& > *"],a,{margin:o/2,width:"calc(".concat((100/t.defaultColumns).toFixed(2),"% - ").concat(o,"px)")}),Object(c.a)({},r,i)}var l=Object(d.d)({values:t.spacing,breakpoints:n.breakpoints.values}),b=Object(j.a)(n);r=Object(u.a)(r,Object(d.b)({theme:n},l,(function(e){var n=Number(e),r=Number(Object(j.d)(b,n).replace("px",""));return Object(c.a)({margin:-r/2,"& > *":{margin:r/2}},t.maxColumnHeight&&{height:Math.ceil(t.maxColumnHeight+r)})})));var h=Object(d.d)({values:t.columns,breakpoints:n.breakpoints.values});return r=Object(u.a)(r,Object(d.b)({theme:n},h,(function(e){var t=Number(e),n="".concat((100/t).toFixed(2),"%"),r="object"!==typeof l?Object(j.d)(b,Number(l)):"0px";return{"& > *":{width:"calc(".concat(n," - ").concat(r,")")}}}))),"object"===typeof l&&(r=Object(u.a)(r,Object(d.b)({theme:n},l,(function(e,t){if(t){var n=Number(e),r=Object.keys(h).pop(),i=Object(j.d)(b,n),a="object"===typeof h?h[t]||h[r]:h,c="".concat((100/a).toFixed(2),"%");return{"& > *":{width:"calc(".concat(c," - ").concat(i,")")}}}return null})))),r})),y=O.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiMasonry"}),s=n.children,d=n.className,j=n.component,u=void 0===j?"div":j,x=n.columns,f=void 0===x?4:x,y=n.spacing,k=void 0===y?1:y,C=n.defaultColumns,N=n.defaultHeight,S=n.defaultSpacing,R=Object(a.a)(n,p),P=O.useRef(),T=O.useState(),B=Object(i.a)(T,2),M=B[0],I=B[1],z=!M&&N&&void 0!==C&&void 0!==S,W=O.useState(z?C-1:0),A=Object(i.a)(W,2),F=A[0],H=A[1],E=Object(c.a)({},n,{spacing:k,columns:f,maxColumnHeight:M,defaultColumns:C,defaultHeight:N,defaultSpacing:S,isSSR:z}),L=function(e){var t=e.classes;return Object(o.a)({root:["root"]},v,t)}(E),X=O.useRef("undefined"===typeof ResizeObserver?void 0:new ResizeObserver((function(e){if(e){var t,n,i,a,c,o,s,l,d,j;if(e[0].target.className.includes(L.root))t=e[0].target,i=e[0].contentRect.width,a=(null==(o=n=(null==(c=e[1])?void 0:c.target)||t.firstChild)||null==(s=o.contentRect)?void 0:s.width)||(null==(l=n)?void 0:l.clientWidth)||0;else n=e[0].target,a=e[0].contentRect.width,i=(null==(j=(t=(null==(d=e[1])?void 0:d.target)||n.parentElement).contentRect)?void 0:j.width)||t.clientWidth;if(0!==i&&0!==a&&t&&n){var u=window.getComputedStyle(n),b=g(u.marginLeft),h=g(u.marginRight),O=Math.round(i/(a+b+h)),x=new Array(O).fill(0),f=!1;if(t.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!f){var t=window.getComputedStyle(e),n=g(t.marginTop),i=g(t.marginBottom),a=g(t.height)?Math.ceil(g(t.height))+n+i:0;if(0!==a){for(var c=0;c<e.childNodes.length;c+=1){var o=e.childNodes[c];if("IMG"===o.tagName&&0===o.clientHeight){f=!0;break}}if(!f){var s=x.indexOf(Math.min.apply(Math,Object(r.a)(x)));x[s]+=a;var l=s+1;e.style.order=l}}else f=!0}})),!f)I(Math.max.apply(Math,Object(r.a)(x))),H(O>0?O-1:0)}}})));O.useEffect((function(){var e=X.current;if(void 0!==e){var t=P.current;return t&&e&&(e.observe(t),t.firstChild&&e.observe(t.firstChild)),function(){return e?e.disconnect():{}}}}),[f,k,s]);var D=Object(b.a)(t,P),J={flexBasis:"100%",width:0,margin:0,padding:0},G=new Array(F).fill("").map((function(e,t){return Object(m.jsx)("span",{"data-class":"line-break",style:Object(c.a)({},J,{order:t+1})},t)}));return Object(m.jsxs)(w,Object(c.a)({as:u,className:Object(h.a)(L.root,d),ref:D,ownerState:E},R,{children:[s,G]}))}));t.a=y},1634:function(e,t,n){"use strict";var r=n(5),i=n(25),a=n(2),c=n(429),o=n(94),s=n(77),l=n(0),d=["asLink","variant","line","persistent","children","sx"],j=Object(a.forwardRef)((function(e,t){var n=e.asLink,a=e.variant,j=void 0===a?"body1":a,u=e.line,b=void 0===u?2:u,h=e.persistent,O=void 0!==h&&h,x=e.children,f=e.sx,v=Object(i.a)(e,d),m=Object(s.a)(j).lineHeight,p=Object(r.a)(Object(r.a)({overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:b,WebkitBoxOrient:"vertical"},O&&{height:m*b}),f);return n?Object(l.jsx)(c.a,Object(r.a)(Object(r.a)({color:"inherit",ref:t,variant:j,sx:Object(r.a)({},p)},v),{},{children:x})):Object(l.jsx)(o.a,Object(r.a)(Object(r.a)({ref:t,variant:j,sx:Object(r.a)({},p)},v),{},{children:x}))}));t.a=j},1753:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n(5),i=n(4),a=n(1624),c=n.n(a),o=n(1556),s=n(2),l=n(53),d=n(58),j=n(1453),u=n(537),b=n(82),h=n(1576),O=n(94),x=n(321),f=n(139),v=n(68),m=n(48),p=n(1618),g=n(0);function w(){var e=Object(l.a)(),t=Object(s.useRef)(null),n=Object(s.useState)("rtl"===e.direction?f.s.length-1:0),a=Object(i.a)(n,2),o=a[0],d=a[1],u={speed:800,dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===e.direction),beforeChange:function(e,t){return d(t)}};return Object(g.jsxs)(j.a,{children:[Object(g.jsx)(c.a,Object(r.a)(Object(r.a)({ref:t},u),{},{children:f.s.map((function(e,t){return Object(g.jsx)(y,{item:e,isActive:t===o},e.id)}))})),Object(g.jsx)(p.a,{index:o,total:f.s.length,onNext:function(){var e;null===(e=t.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=t.current)||void 0===e||e.slickPrev()}})]})}function y(e){var t=e.item,n=e.isActive,r=Object(l.a)(),i=t.image,a=t.title;return Object(g.jsxs)(u.a,{sx:{position:"relative"},children:[Object(g.jsx)(v.a,{alt:a,src:i,ratio:"16/9"}),Object(g.jsx)(b.a,{sx:{top:0,width:"100%",height:"100%",position:"absolute",backgroundImage:"linear-gradient(to top, ".concat(r.palette.grey[900]," 0%,").concat(Object(d.a)(r.palette.grey[900],0)," 100%)")}}),Object(g.jsx)(h.a,{sx:{bottom:0,width:"100%",maxWidth:480,textAlign:"left",position:"absolute",color:"common.white"},children:Object(g.jsxs)(m.d,{animate:n,action:!0,children:[Object(g.jsx)(o.a.div,{variants:Object(m.k)().inRight,children:Object(g.jsx)(O.a,{variant:"h3",gutterBottom:!0,children:t.title})}),Object(g.jsx)(o.a.div,{variants:Object(m.k)().inRight,children:Object(g.jsx)(O.a,{variant:"body2",noWrap:!0,gutterBottom:!0,children:t.description})}),Object(g.jsx)(o.a.div,{variants:Object(m.k)().inRight,children:Object(g.jsx)(x.a,{variant:"contained",sx:{mt:3},children:"View More"})})]})})]})}},2544:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Y}));var r=n(10),i=n(82),a=n(1451),c=n(1453),o=n(1575),s=n(1576),l=n(812),d=n(1621),j=n(37),u=n(322),b=n(538),h=n(5),O=n(4),x=n(1624),f=n.n(x),v=n(2),m=n(53),p=n(139),g=n(68),w=n(1618),y=n(0);function k(){var e=Object(m.a)(),t=Object(v.useRef)(null),n=Object(v.useState)("rtl"===e.direction?p.s.length-1:0),r=Object(O.a)(n,2),i=r[0],a=r[1],o={dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===e.direction),beforeChange:function(e,t){return a(t)}};return Object(y.jsxs)(c.a,{children:[Object(y.jsx)(f.a,Object(h.a)(Object(h.a)({ref:t},o),{},{children:p.s.map((function(e){return Object(y.jsx)(C,{item:e},e.id)}))})),Object(y.jsx)(w.a,{index:i,total:p.s.length,onNext:function(){var e;null===(e=t.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=t.current)||void 0===e||e.slickPrev()}})]})}function C(e){var t=e.item,n=t.image,r=t.title;return Object(y.jsx)(g.a,{alt:r,src:n,ratio:"1/1"})}var N=n(94);function S(){var e=Object(m.a)(),t=Object(v.useRef)(null),n=Object(v.useState)(2),r=Object(O.a)(n,2),i=r[0],a=r[1],o={dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,initialSlide:i,fade:Boolean("rtl"!==e.direction),rtl:Boolean("rtl"===e.direction),beforeChange:function(e,t){return a(t)}};return Object(y.jsxs)(c.a,{children:[Object(y.jsx)(f.a,Object(h.a)(Object(h.a)({ref:t},o),{},{children:p.s.map((function(e){return Object(y.jsx)(R,{item:e},e.id)}))})),Object(y.jsx)(w.a,{index:i,total:p.s.length,onNext:function(){var e;null===(e=t.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=t.current)||void 0===e||e.slickPrev()},sx:{bottom:120}})]})}function R(e){var t=e.item,n=t.image,r=t.title,i=t.description;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(g.a,{alt:r,src:n,ratio:"4/3"}),Object(y.jsxs)(s.a,{sx:{textAlign:"left"},children:[Object(y.jsx)(N.a,{variant:"h6",noWrap:!0,gutterBottom:!0,children:r}),Object(y.jsx)(N.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:i})]})]})}var P=Object(r.a)(i.a)((function(e){var t=e.theme;return{position:"relative","& .slick-list":{boxShadow:t.customShadows.z16,borderRadius:2*Number(t.shape.borderRadius)}}}));function T(){var e=Object(m.a)(),t=Object(v.useRef)(null),n=Object(h.a)({dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===e.direction)},Object(w.c)({rounded:!0,sx:{mt:3}}));return Object(y.jsx)(P,{children:Object(y.jsx)(w.b,{filled:!0,onNext:function(){var e;null===(e=t.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=t.current)||void 0===e||e.slickPrev()},sx:{"& .arrow":{"&.left":{left:16},"&.right":{right:16}}},children:Object(y.jsx)(f.a,Object(h.a)(Object(h.a)({ref:t},n),{},{children:p.s.map((function(e){return Object(y.jsx)(B,{item:e},e.id)}))}))})})}function B(e){var t=e.item,n=t.image,r=t.title;return Object(y.jsx)(g.a,{alt:r,src:n,ratio:"1/1"})}var M=n(58),I=n(817),z=n(104),W=n(22),A=Object(r.a)("div")((function(e){var t=e.theme;return Object(h.a)(Object(h.a)({},Object(z.a)().bgBlur({color:t.palette.grey[900]})),{},{bottom:0,zIndex:9,width:"100%",display:"flex",position:"absolute",alignItems:"center",padding:t.spacing(3),borderBottomLeftRadius:16,borderBottomRightRadius:16,justifyContent:"space-between",flexDirection:"rtl"===t.direction?"row-reverse":"row"})}));function F(){var e=Object(m.a)(),t=Object(v.useRef)(null),n={dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,fade:Boolean("rtl"!==e.direction),rtl:Boolean("rtl"===e.direction)};return Object(y.jsx)(c.a,{children:Object(y.jsx)(w.b,{filled:!0,onNext:function(){var e;null===(e=t.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=t.current)||void 0===e||e.slickPrev()},sx:{"& .arrow":{"&.left":{left:16},"&.right":{right:16}}},children:Object(y.jsx)(f.a,Object(h.a)(Object(h.a)({ref:t},n),{},{children:p.s.map((function(e){return Object(y.jsx)(H,{item:e},e.id)}))}))})})}function H(e){var t=e.item,n=t.image,r=t.title;return Object(y.jsxs)(i.a,{sx:{position:"relative",zIndex:0},children:[Object(y.jsx)(g.a,{alt:r,src:n,ratio:"1/1"}),Object(y.jsxs)(A,{children:[Object(y.jsx)(N.a,{variant:"h6",sx:{color:"common.white"},children:t.title}),Object(y.jsx)(I.a,{onClick:function(){},sx:{color:"common.white","&:hover":{bgcolor:function(e){return Object(M.a)(e.palette.common.white,e.palette.action.hoverOpacity)}}},children:Object(y.jsx)(W.a,{icon:"eva:more-horizontal-fill"})})]})]})}var E=n(1753),L=64,X=Object(r.a)(i.a)((function(e){return{root:{"& .slick-slide":{float:"rtl"===e.theme.direction?"right":"left"}}}}));function D(){var e=Object(v.useState)(0),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(v.useState)(void 0),c=Object(O.a)(a,2),o=c[0],s=c[1],l=Object(v.useState)(void 0),d=Object(O.a)(l,2),j=d[0],u=d[1],b=Object(v.useRef)(null),x=Object(v.useRef)(null),m={dots:!1,arrows:!1,slidesToShow:1,draggable:!1,slidesToScroll:1,adaptiveHeight:!0,beforeChange:function(e,t){return r(t)}},k={dots:!1,arrows:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,variableWidth:!0,centerPadding:"0px",slidesToShow:p.s.length>3?3:p.s.length};Object(v.useEffect)((function(){b.current&&s(b.current),x.current&&u(x.current)}),[]);return Object(y.jsxs)(X,{children:[Object(y.jsxs)(i.a,{sx:{zIndex:0,borderRadius:2,overflow:"hidden",position:"relative"},children:[Object(y.jsx)(f.a,Object(h.a)(Object(h.a)({},m),{},{asNavFor:j,ref:b,children:p.s.map((function(e){return Object(y.jsx)(g.a,{alt:e.title,src:e.image,ratio:"16/9"},e.id)}))})),Object(y.jsx)(w.a,{index:n,total:p.s.length,onNext:function(){var e;null===(e=x.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=x.current)||void 0===e||e.slickPrev()}})]}),Object(y.jsx)(i.a,{sx:Object(h.a)(Object(h.a)(Object(h.a)(Object(h.a)(Object(h.a)({mt:3,mx:"auto"},1===p.s.length&&{maxWidth:80}),2===p.s.length&&{maxWidth:160}),3===p.s.length&&{maxWidth:240}),4===p.s.length&&{maxWidth:240}),5===p.s.length&&{maxWidth:384}),children:Object(y.jsx)(f.a,Object(h.a)(Object(h.a)({},k),{},{asNavFor:o,ref:x,children:p.s.map((function(e,t){return Object(y.jsx)(i.a,{sx:{mx:1},children:Object(y.jsx)(g.a,{alt:e.title,src:e.image,sx:Object(h.a)({opacity:.48,borderRadius:1,width:L,height:L},n===t&&{opacity:1,border:function(e){return"solid 3px ".concat(e.palette.primary.main)}})})},e.title)}))}))})]})}var J=n(29),G=n(537),V=n(429),_=n(1634),q=Object(r.a)(i.a)((function(){return{overflow:"hidden",position:"relative"}}));function K(){var e=Object(v.useRef)(null),t=Object(m.a)(),n={slidesToShow:3,centerMode:!0,centerPadding:"60px",rtl:Boolean("rtl"===t.direction),responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,centerPadding:"0"}}]};return Object(y.jsx)(q,{children:Object(y.jsx)(w.b,{filled:!0,onNext:function(){var t;null===(t=e.current)||void 0===t||t.slickNext()},onPrevious:function(){var t;null===(t=e.current)||void 0===t||t.slickPrev()},sx:{"& .arrow":{"&.left":{left:16},"&.right":{right:16}}},children:Object(y.jsx)(f.a,Object(h.a)(Object(h.a)({ref:e},n),{},{children:p.s.map((function(e){return Object(y.jsx)(i.a,{sx:{px:1},children:Object(y.jsx)(Q,{item:e})},e.id)}))}))})})}function Q(e){var t=e.item,n=t.image,r=t.title;return Object(y.jsxs)(G.a,{sx:{borderRadius:2,overflow:"hidden",position:"relative"},children:[Object(y.jsx)(g.a,{alt:r,src:n,ratio:"3/4"}),Object(y.jsxs)(s.a,{sx:{bottom:0,zIndex:9,width:"100%",textAlign:"left",position:"absolute",color:"common.white",backgroundImage:function(e){return"linear-gradient(to top, ".concat(e.palette.grey[900]," 0%,").concat(Object(M.a)(e.palette.grey[900],0)," 100%)")}},children:[Object(y.jsx)(_.a,{variant:"h4",paragraph:!0,children:r}),Object(y.jsxs)(V.a,{to:"#",color:"inherit",variant:"overline",component:J.b,sx:{opacity:.72,alignItems:"center",display:"inline-flex",transition:function(e){return e.transitions.create("opacity")},"&:hover":{opacity:1}},children:["learn More",Object(y.jsx)(W.a,{icon:"eva:arrow-forward-fill",sx:{width:16,height:16,ml:1}})]})]})]})}var U=Object(r.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function Y(){return Object(y.jsx)(u.a,{title:"Components: Carousel",children:Object(y.jsxs)(U,{children:[Object(y.jsx)(i.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(y.jsx)(a.a,{children:Object(y.jsx)(b.a,{heading:"Carousel",links:[{name:"Components",href:j.d.components},{name:"Carousel"}],moreLink:"https://react-slick.neostack.com"})})}),Object(y.jsxs)(a.a,{children:[Object(y.jsxs)(d.a,{columns:{xs:1,md:2},spacing:3,children:[Object(y.jsxs)(c.a,{children:[Object(y.jsx)(o.a,{title:"Carousel Basic 1"}),Object(y.jsx)(s.a,{children:Object(y.jsx)(k,{})})]}),Object(y.jsxs)(c.a,{children:[Object(y.jsx)(o.a,{title:"Carousel Basic 2"}),Object(y.jsx)(s.a,{children:Object(y.jsx)(S,{})})]}),Object(y.jsxs)(c.a,{children:[Object(y.jsx)(o.a,{title:"Carousel Basic 3"}),Object(y.jsx)(s.a,{children:Object(y.jsx)(T,{})})]}),Object(y.jsxs)(c.a,{children:[Object(y.jsx)(o.a,{title:"Carousel Basic 4"}),Object(y.jsx)(s.a,{children:Object(y.jsx)(F,{})})]})]}),Object(y.jsxs)(l.a,{spacing:3,children:[Object(y.jsxs)(c.a,{children:[Object(y.jsx)(o.a,{title:"Carousel Thumbnail"}),Object(y.jsx)(s.a,{children:Object(y.jsx)(D,{})})]}),Object(y.jsxs)(c.a,{children:[Object(y.jsx)(o.a,{title:"Carousel Center Mode"}),Object(y.jsx)(s.a,{children:Object(y.jsx)(K,{})})]}),Object(y.jsxs)(c.a,{children:[Object(y.jsx)(o.a,{title:"Carousel Animation"}),Object(y.jsx)(s.a,{children:Object(y.jsx)(E.a,{})})]})]})]})]})})}}}]);
//# sourceMappingURL=36.358af677.chunk.js.map