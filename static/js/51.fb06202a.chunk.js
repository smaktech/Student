(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[51],{1615:function(e,t,r){"use strict";r.d(t,"b",(function(){return c}));var a=r(138),i=r(150);function c(e){return Object(a.a)("MuiSwitch",e)}var o=Object(i.a)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);t.a=o},1626:function(e,t,r){"use strict";var a=r(6),i=r(8),c=r(3),o=r(2),n=r(11),s=r(239),l=r(58),d=r(16),b=r(324),j=r(18),u=r(10),h=r(1615),p=r(0),x=["className","color","edge","size","sx"],m=Object(u.a)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.edge&&t["edge".concat(Object(d.a)(r.edge))],t["size".concat(Object(d.a)(r.size))]]}})((function(e){var t,r=e.ownerState;return Object(c.a)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===r.edge&&{marginLeft:-8},"end"===r.edge&&{marginRight:-8},"small"===r.size&&(t={width:40,height:24,padding:7},Object(a.a)(t,"& .".concat(h.a.thumb),{width:16,height:16}),Object(a.a)(t,"& .".concat(h.a.switchBase),Object(a.a)({padding:4},"&.".concat(h.a.checked),{transform:"translateX(16px)"})),t))})),O=Object(u.a)(b.a,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var r=e.ownerState;return[t.switchBase,Object(a.a)({},"& .".concat(h.a.input),t.input),"default"!==r.color&&t["color".concat(Object(d.a)(r.color))]]}})((function(e){var t,r=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:"light"===r.palette.mode?r.palette.common.white:r.palette.grey[300],transition:r.transitions.create(["left","transform"],{duration:r.transitions.duration.shortest})},Object(a.a)(t,"&.".concat(h.a.checked),{transform:"translateX(20px)"}),Object(a.a)(t,"&.".concat(h.a.disabled),{color:"light"===r.palette.mode?r.palette.grey[100]:r.palette.grey[600]}),Object(a.a)(t,"&.".concat(h.a.checked," + .").concat(h.a.track),{opacity:.5}),Object(a.a)(t,"&.".concat(h.a.disabled," + .").concat(h.a.track),{opacity:"light"===r.palette.mode?.12:.2}),Object(a.a)(t,"& .".concat(h.a.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,r=e.theme,i=e.ownerState;return Object(c.a)({"&:hover":{backgroundColor:Object(l.a)(r.palette.action.active,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&(t={},Object(a.a)(t,"&.".concat(h.a.checked),Object(a.a)({color:r.palette[i.color].main,"&:hover":{backgroundColor:Object(l.a)(r.palette[i.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(h.a.disabled),{color:"light"===r.palette.mode?Object(l.f)(r.palette[i.color].main,.62):Object(l.b)(r.palette[i.color].main,.55)})),Object(a.a)(t,"&.".concat(h.a.checked," + .").concat(h.a.track),{backgroundColor:r.palette[i.color].main}),t))})),v=Object(u.a)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:"light"===t.palette.mode?t.palette.common.black:t.palette.common.white,opacity:"light"===t.palette.mode?.38:.3}})),g=Object(u.a)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){return{boxShadow:e.theme.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),f=o.forwardRef((function(e,t){var r=Object(j.a)({props:e,name:"MuiSwitch"}),a=r.className,o=r.color,l=void 0===o?"primary":o,b=r.edge,u=void 0!==b&&b,f=r.size,y=void 0===f?"medium":f,w=r.sx,k=Object(i.a)(r,x),C=Object(c.a)({},r,{color:l,edge:u,size:y}),S=function(e){var t=e.classes,r=e.edge,a=e.size,i=e.color,o=e.checked,n=e.disabled,l={root:["root",r&&"edge".concat(Object(d.a)(r)),"size".concat(Object(d.a)(a))],switchBase:["switchBase","color".concat(Object(d.a)(i)),o&&"checked",n&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},b=Object(s.a)(l,h.b,t);return Object(c.a)({},t,b)}(C),R=Object(p.jsx)(g,{className:S.thumb,ownerState:C});return Object(p.jsxs)(m,{className:Object(n.a)(S.root,a),sx:w,ownerState:C,children:[Object(p.jsx)(O,Object(c.a)({type:"checkbox",icon:R,checkedIcon:R,ref:t,ownerState:C},k,{classes:Object(c.a)({},S,{root:S.switchBase})})),Object(p.jsx)(v,{className:S.track,ownerState:C})]})}));t.a=f},1636:function(e,t,r){"use strict";r.d(t,"b",(function(){return D})),r.d(t,"c",(function(){return A})),r.d(t,"a",(function(){return E}));var a=r(5),i=r(25),c=r(6),o=r(33),n=r(539),s=r(1568),l=r(1556),d=r(10),b=r(58),j=r(537),u=r(82),h=r(94),p=r(1581),x=r(1603),m=r(817),O=r(1548),v=r(1541),g=r(1604),f=r(812),y=r(321),w=r(95),k=r(279),C=r(68),S=r(22),R=r(48),z=r(0),q=["error","showPreview","files","onRemove","onRemoveAll","sx"],B=Object(d.a)("div")((function(e){var t=e.theme;return Object(c.a)({outline:"none",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,1),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function D(e){var t=e.error,r=e.showPreview,c=void 0!==r&&r,d=e.files,D=e.onRemove,P=e.onRemoveAll,U=e.sx,A=Object(i.a)(e,q),N=d.length>0,I=Object(n.a)(Object(a.a)({},A)),T=I.getRootProps,W=I.getInputProps,E=I.isDragActive,F=I.isDragReject,M=I.fileRejections,V=function(){return Object(z.jsx)(j.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(b.a)(e.palette.error.main,.08)}},children:M.map((function(e){var t=e.file,r=e.errors,a=t.path,i=t.size;return Object(z.jsxs)(u.a,{sx:{my:1},children:[Object(z.jsxs)(h.a,{variant:"subtitle2",noWrap:!0,children:[a," - ",Object(w.b)(i)]}),r.map((function(e){return Object(z.jsxs)(h.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},a)}))})};return Object(z.jsxs)(u.a,{sx:Object(a.a)({width:"100%"},U),children:[Object(z.jsxs)(B,Object(a.a)(Object(a.a)({},T()),{},{sx:Object(a.a)(Object(a.a)({},E&&{opacity:.72}),(F||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(z.jsx)("input",Object(a.a)({},W())),Object(z.jsx)(k.o,{sx:{width:220}}),Object(z.jsxs)(u.a,{sx:{p:3,ml:{md:2}},children:[Object(z.jsx)(h.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(z.jsxs)(h.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(z.jsx)(h.a,{variant:"body2",component:"span",sx:{color:"primary.main",textDecoration:"underline"},children:"browse"}),"\xa0thorough your machine"]})]})]})),M.length>0&&Object(z.jsx)(V,{}),Object(z.jsx)(p.a,{disablePadding:!0,sx:Object(a.a)({},N&&{my:3}),children:Object(z.jsx)(s.a,{children:d.map((function(e){var t=function(e){return"string"===typeof e?{key:e}:{key:e.name,name:e.name,size:e.size,preview:e.preview}}(e),r=t.key,i=t.name,n=t.size,s=t.preview;return c?Object(z.jsxs)(x.a,Object(a.a)(Object(a.a)({component:l.a.div},Object(R.k)().inRight),{},{sx:{p:0,m:.5,width:80,height:80,borderRadius:1.5,overflow:"hidden",position:"relative",display:"inline-flex"},children:[Object(z.jsx)(C.a,{src:Object(o.isString)(e)?e:s,ratio:"1/1"}),Object(z.jsx)(u.a,{sx:{top:6,right:6,position:"absolute"},children:Object(z.jsx)(m.a,{size:"small",onClick:function(){return D(e)},sx:{p:"2px",color:"common.white",bgcolor:function(e){return Object(b.a)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return Object(b.a)(e.palette.grey[900],.48)}}},children:Object(z.jsx)(S.a,{icon:"eva:close-fill"})})})]}),r):Object(z.jsxs)(x.a,Object(a.a)(Object(a.a)({component:l.a.div},Object(R.k)().inRight),{},{sx:{my:1,py:.75,px:2,borderRadius:1,border:function(e){return"solid 1px ".concat(e.palette.divider)},bgcolor:"background.paper"},children:[Object(z.jsx)(O.a,{children:Object(z.jsx)(S.a,{icon:"eva:file-fill",width:28,height:28})}),Object(z.jsx)(v.a,{primary:Object(o.isString)(e)?e:i,secondary:Object(o.isString)(e)?"":Object(w.b)(n||0),primaryTypographyProps:{variant:"subtitle2"},secondaryTypographyProps:{variant:"caption"}}),Object(z.jsx)(g.a,{children:Object(z.jsx)(m.a,{edge:"end",size:"small",onClick:function(){return D(e)},children:Object(z.jsx)(S.a,{icon:"eva:close-fill"})})})]}),r)}))})}),N&&Object(z.jsxs)(f.a,{direction:"row",justifyContent:"flex-end",children:[Object(z.jsx)(y.a,{onClick:P,sx:{mr:1.5},children:"Remove all"}),Object(z.jsx)(y.a,{variant:"contained",children:"Upload files"})]})]})}var P=["error","file","sx"],U=Object(d.a)("div")((function(e){var t=e.theme;return Object(c.a)({outline:"none",display:"flex",overflow:"hidden",textAlign:"center",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,0),borderRadius:t.shape.borderRadius,transition:t.transitions.create("padding"),backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function A(e){var t=e.error,r=void 0!==t&&t,c=e.file,s=e.sx,l=Object(i.a)(e,P),d=Object(n.a)(Object(a.a)({multiple:!1},l)),p=d.getRootProps,x=d.getInputProps,m=d.isDragActive,O=d.isDragReject,v=d.fileRejections,g=function(){return Object(z.jsx)(j.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(b.a)(e.palette.error.main,.08)}},children:v.map((function(e){var t=e.file,r=e.errors,a=t.path,i=t.size;return Object(z.jsxs)(u.a,{sx:{my:1},children:[Object(z.jsxs)(h.a,{variant:"subtitle2",noWrap:!0,children:[a," - ",Object(w.b)(i)]}),r.map((function(e){return Object(z.jsxs)(h.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},a)}))})};return Object(z.jsxs)(u.a,{sx:Object(a.a)({width:"100%"},s),children:[Object(z.jsxs)(U,Object(a.a)(Object(a.a)({},p()),{},{sx:Object(a.a)(Object(a.a)(Object(a.a)({},m&&{opacity:.72}),(O||r)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),c&&{padding:"12% 0"}),children:[Object(z.jsx)("input",Object(a.a)({},x())),Object(z.jsx)(k.o,{sx:{width:220}}),Object(z.jsxs)(u.a,{sx:{p:3,ml:{md:2}},children:[Object(z.jsx)(h.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(z.jsxs)(h.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(z.jsx)(h.a,{variant:"body2",component:"span",sx:{color:"primary.main",textDecoration:"underline"},children:"browse"}),"\xa0thorough your machine"]})]}),c&&Object(z.jsx)(C.a,{alt:"file preview",src:Object(o.isString)(c)?c:c.preview,sx:{top:8,borderRadius:1,objectFit:"cover",position:"absolute",width:"calc(100% - 24px)",height:"calc(100% - 24px)"}})]})),v.length>0&&Object(z.jsx)(g,{})]})}var N=["error","file","caption","sx"],I=Object(d.a)("div")((function(e){var t=e.theme;return{width:144,height:144,margin:"auto",borderRadius:"50%",padding:t.spacing(1),border:"1px dashed ".concat(t.palette.grey[50032])}})),T=Object(d.a)("div")({zIndex:0,width:"100%",height:"100%",outline:"none",display:"flex",overflow:"hidden",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center","& > *":{width:"100%",height:"100%"},"&:hover":{cursor:"pointer","& .placeholder":{zIndex:9}}}),W=Object(d.a)("div")((function(e){var t=e.theme;return{display:"flex",position:"absolute",alignItems:"center",flexDirection:"column",justifyContent:"center",color:t.palette.text.secondary,backgroundColor:t.palette.background.neutral,transition:t.transitions.create("opacity",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&:hover":{opacity:.72}}}));function E(e){var t=e.error,r=e.file,c=e.caption,s=e.sx,l=Object(i.a)(e,N),d=Object(n.a)(Object(a.a)({multiple:!1},l)),p=d.getRootProps,x=d.getInputProps,m=d.isDragActive,O=d.isDragReject,v=d.fileRejections,g=function(){return Object(z.jsx)(j.a,{variant:"outlined",sx:{py:1,px:2,my:2,borderColor:"error.light",bgcolor:function(e){return Object(b.a)(e.palette.error.main,.08)}},children:v.map((function(e){var t=e.file,r=e.errors,a=t.path,i=t.size;return Object(z.jsxs)(u.a,{sx:{my:1},children:[Object(z.jsxs)(h.a,{variant:"subtitle2",noWrap:!0,children:[a," - ",Object(w.b)(i)]}),r.map((function(e){return Object(z.jsxs)(h.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},a)}))})};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(I,{sx:s,children:Object(z.jsxs)(T,Object(a.a)(Object(a.a)({},p()),{},{sx:Object(a.a)(Object(a.a)({},m&&{opacity:.72}),(O||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(z.jsx)("input",Object(a.a)({},x())),r&&Object(z.jsx)(C.a,{alt:"avatar",src:Object(o.isString)(r)?r:r.preview,sx:{zIndex:8}}),Object(z.jsxs)(W,{className:"placeholder",sx:Object(a.a)({},r&&{opacity:0,color:"common.white",bgcolor:"grey.900","&:hover":{opacity:.72}}),children:[Object(z.jsx)(S.a,{icon:"ic:round-add-a-photo",sx:{width:24,height:24,mb:1}}),Object(z.jsx)(h.a,{variant:"caption",children:r?"Update photo":"Upload photo"})]})]}))}),c,v.length>0&&Object(z.jsx)(g,{})]})}},2575:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return N}));var a=r(1607),i=r(1549),c=r(39),o=r(1451),n=r(37),s=r(96),l=r(139),d=r(322),b=r(538),j=r(5),u=r(7),h=r.n(u),p=r(13),x=r(323),m=r(2),O=r(112),v=r(102),g=r(1608),f=r(240),y=r(1453),w=r(82),k=r(94),C=r(1582),S=r(1595),R=r(1626),z=r(812),q=r(1577),B=r(95),D=r(241),P=r(1636),U=r(0);function A(e){var t=e.isEdit,r=e.currentUser,a=Object(c.g)(),i=Object(O.b)().enqueueSnackbar,o=x.f().shape({name:x.h().required("Name is required"),email:x.h().required("Email is required").email(),phoneNumber:x.h().required("Phone number is required"),address:x.h().required("Address is required"),country:x.h().required("country is required"),company:x.h().required("Company is required"),state:x.h().required("State is required"),city:x.h().required("City is required"),role:x.h().required("Role Number is required"),avatarUrl:x.d().required("Avatar is required")}),s=Object(v.d)({enableReinitialize:!0,initialValues:{name:(null===r||void 0===r?void 0:r.name)||"",email:(null===r||void 0===r?void 0:r.email)||"",phoneNumber:(null===r||void 0===r?void 0:r.phoneNumber)||"",address:(null===r||void 0===r?void 0:r.address)||"",country:(null===r||void 0===r?void 0:r.country)||"",state:(null===r||void 0===r?void 0:r.state)||"",city:(null===r||void 0===r?void 0:r.city)||"",zipCode:(null===r||void 0===r?void 0:r.zipCode)||"",avatarUrl:(null===r||void 0===r?void 0:r.avatarUrl)||null,isVerified:(null===r||void 0===r?void 0:r.isVerified)||!0,status:null===r||void 0===r?void 0:r.status,company:(null===r||void 0===r?void 0:r.company)||"",role:(null===r||void 0===r?void 0:r.role)||""},validationSchema:o,onSubmit:function(){var e=Object(p.a)(h.a.mark((function e(r,c){var o,s,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.setSubmitting,s=c.resetForm,l=c.setErrors,e.prev=1,e.next=4,new Promise((function(e){return setTimeout(e,500)}));case 4:s(),o(!1),i(t?"Update success":"Create success",{variant:"success"}),a(n.b.user.list),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),o(!1),l(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r){return e.apply(this,arguments)}}()}),d=s.errors,b=s.values,u=s.touched,A=s.handleSubmit,N=s.isSubmitting,I=s.setFieldValue,T=s.getFieldProps,W=Object(m.useCallback)((function(e){var t=e[0];t&&I("avatarUrl",Object(j.a)(Object(j.a)({},t),{},{preview:URL.createObjectURL(t)}))}),[I]);return Object(U.jsx)(v.b,{value:s,children:Object(U.jsx)(v.a,{noValidate:!0,autoComplete:"off",onSubmit:A,children:Object(U.jsxs)(f.a,{container:!0,spacing:3,children:[Object(U.jsx)(f.a,{item:!0,xs:12,md:4,children:Object(U.jsxs)(y.a,{sx:{py:10,px:3},children:[t&&Object(U.jsx)(D.a,{color:"active"!==b.status?"error":"success",sx:{textTransform:"uppercase",position:"absolute",top:24,right:24},children:b.status}),Object(U.jsxs)(w.a,{sx:{mb:5},children:[Object(U.jsx)(P.a,{accept:"image/*",file:b.avatarUrl,maxSize:3145728,onDrop:W,error:Boolean(u.avatarUrl&&d.avatarUrl),caption:Object(U.jsxs)(k.a,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",Object(U.jsx)("br",{})," max size of ",Object(B.b)(3145728)]})}),Object(U.jsx)(C.a,{error:!0,sx:{px:2,textAlign:"center"},children:u.avatarUrl&&d.avatarUrl})]}),t&&Object(U.jsx)(S.a,{labelPlacement:"start",control:Object(U.jsx)(R.a,{onChange:function(e){return I("status",e.target.checked?"banned":"active")},checked:"active"!==b.status}),label:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(k.a,{variant:"subtitle2",sx:{mb:.5},children:"Banned"}),Object(U.jsx)(k.a,{variant:"body2",sx:{color:"text.secondary"},children:"Apply disable account"})]}),sx:{mx:0,mb:3,width:1,justifyContent:"space-between"}}),Object(U.jsx)(S.a,{labelPlacement:"start",control:Object(U.jsx)(R.a,Object(j.a)(Object(j.a)({},T("isVerified")),{},{checked:b.isVerified})),label:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(k.a,{variant:"subtitle2",sx:{mb:.5},children:"Email Verified"}),Object(U.jsx)(k.a,{variant:"body2",sx:{color:"text.secondary"},children:"Disabling this will automatically send the user a verification email"})]}),sx:{mx:0,width:1,justifyContent:"space-between"}})]})}),Object(U.jsx)(f.a,{item:!0,xs:12,md:8,children:Object(U.jsx)(y.a,{sx:{p:3},children:Object(U.jsxs)(z.a,{spacing:3,children:[Object(U.jsxs)(z.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(U.jsx)(q.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"Full Name"},T("name")),{},{error:Boolean(u.name&&d.name),helperText:u.name&&d.name})),Object(U.jsx)(q.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"Email Address"},T("email")),{},{error:Boolean(u.email&&d.email),helperText:u.email&&d.email}))]}),Object(U.jsxs)(z.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(U.jsx)(q.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"Phone Number"},T("phoneNumber")),{},{error:Boolean(u.phoneNumber&&d.phoneNumber),helperText:u.phoneNumber&&d.phoneNumber})),Object(U.jsxs)(q.a,Object(j.a)(Object(j.a)({select:!0,fullWidth:!0,label:"Country",placeholder:"Country"},T("country")),{},{SelectProps:{native:!0},error:Boolean(u.country&&d.country),helperText:u.country&&d.country,children:[Object(U.jsx)("option",{value:""}),l.R.map((function(e){return Object(U.jsx)("option",{value:e.label,children:e.label},e.code)}))]}))]}),Object(U.jsxs)(z.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(U.jsx)(q.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"State/Region"},T("state")),{},{error:Boolean(u.state&&d.state),helperText:u.state&&d.state})),Object(U.jsx)(q.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"City"},T("city")),{},{error:Boolean(u.city&&d.city),helperText:u.city&&d.city}))]}),Object(U.jsxs)(z.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(U.jsx)(q.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"Address"},T("address")),{},{error:Boolean(u.address&&d.address),helperText:u.address&&d.address})),Object(U.jsx)(q.a,Object(j.a)({fullWidth:!0,label:"Zip/Code"},T("zipCode")))]}),Object(U.jsxs)(z.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(U.jsx)(q.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"Company"},T("company")),{},{error:Boolean(u.company&&d.company),helperText:u.company&&d.company})),Object(U.jsx)(q.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"Role"},T("role")),{},{error:Boolean(u.role&&d.role),helperText:u.role&&d.role}))]}),Object(U.jsx)(w.a,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:Object(U.jsx)(g.a,{type:"submit",variant:"contained",loading:N,children:t?"Save Changes":"Create User"})})]})})})]})})})}function N(){var e=Object(s.a)().themeStretch,t=Object(c.f)().pathname,r=Object(c.h)().name,j=void 0===r?"":r,u=t.includes("edit"),h=l.P.find((function(e){return Object(a.a)(e.name)===j}));return Object(U.jsx)(d.a,{title:"User: Create a new user",children:Object(U.jsxs)(o.a,{maxWidth:!e&&"lg",children:[Object(U.jsx)(b.a,{heading:u?"Edit user":"Create a new user",links:[{name:"Dashboard",href:n.b.root},{name:"User",href:n.b.user.list},{name:u?Object(i.a)(j):"New user"}]}),Object(U.jsx)(A,{isEdit:u,currentUser:h})]})})}}}]);
//# sourceMappingURL=51.fb06202a.chunk.js.map