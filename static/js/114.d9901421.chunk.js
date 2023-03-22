(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[114],{2559:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return V}));var r=a(6),n=a(1549),i=a(29),s=a(10),c=a(1453),o=a(94),l=a(429),b=a(1451),d=a(82),j=a(819),u=a(1562),m=a(84),h=a(103),p=a(37),x=a(322),O=a(91),f=a(68),g=a(5),v=a(7),y=a.n(v),w=a(13),S=a(4),k=a(323),T=a(2),q=a(112),N=a(102),P=a(812),C=a(1577),W=a(1456),B=a(817),L=a(1608),I=a(333),E=a(22),A=a(48),z=a(0);function F(){var e=Object(m.a)().register,t=Object(I.a)(),a=Object(q.b)(),r=a.enqueueSnackbar,n=a.closeSnackbar,i=Object(T.useState)(!1),s=Object(S.a)(i,2),c=s[0],o=s[1],l=k.f().shape({name:k.h().min(2,"Too Short!").max(50,"Too Long!").required("First name required"),phoneNumber:k.h().min(10,"Too Short!").max(10,"Too Long!").required("Phone Number required"),school:k.h().min(3,"Too Short!").max(50,"Too Long!").required("School name required"),email:k.h().email("Email must be a valid email address").required("Email is required"),password:k.h().min(8,"Password Should be of 8 characters").required("Password is required")}),b=Object(N.d)({initialValues:{name:"",phoneNumber:"",school:"",email:"",password:""},validationSchema:l,onSubmit:function(){var a=Object(w.a)(y.a.mark((function a(i,s){var c,o;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=s.setErrors,o=s.setSubmitting,a.prev=1,a.next=4,e(i.email,i.password,i.name,i.phoneNumber,i.school);case 4:r("Register success",{variant:"success",action:function(e){return Object(z.jsx)(A.c,{size:"small",onClick:function(){return n(e)},children:Object(z.jsx)(E.a,{icon:"eva:close-fill"})})}}),t.current&&o(!1),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),console.error(a.t0),t.current&&(c({afterSubmit:a.t0.message}),o(!1));case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e,t){return a.apply(this,arguments)}}()}),d=b.errors,j=b.touched,h=b.handleSubmit,p=b.isSubmitting,x=b.getFieldProps;return Object(z.jsx)(N.b,{value:b,children:Object(z.jsx)(N.a,{autoComplete:"off",noValidate:!0,onSubmit:h,children:Object(z.jsxs)(P.a,{spacing:3,children:[d.afterSubmit&&Object(z.jsx)(u.a,{severity:"error",children:d.afterSubmit}),Object(z.jsx)(C.a,Object(g.a)(Object(g.a)({fullWidth:!0,label:"Name"},x("name")),{},{error:Boolean(j.name&&d.name),helperText:j.name&&d.name})),Object(z.jsx)(C.a,Object(g.a)(Object(g.a)({fullWidth:!0,autoComplete:"username",type:"email",label:"Email address"},x("email")),{},{error:Boolean(j.email&&d.email),helperText:j.email&&d.email})),Object(z.jsx)(C.a,Object(g.a)(Object(g.a)({fullWidth:!0,label:"Phone Number"},x("phoneNumber")),{},{error:Boolean(j.phoneNumber&&d.phoneNumber),helperText:j.phoneNumber&&d.phoneNumber})),Object(z.jsx)(C.a,Object(g.a)(Object(g.a)({fullWidth:!0,label:"School"},x("school")),{},{error:Boolean(j.school&&d.school),helperText:j.school&&d.school})),Object(z.jsx)(C.a,Object(g.a)(Object(g.a)({fullWidth:!0,autoComplete:"current-password",type:c?"text":"password",label:"Password"},x("password")),{},{InputProps:{endAdornment:Object(z.jsx)(W.a,{position:"end",children:Object(z.jsx)(B.a,{edge:"end",onClick:function(){return o((function(e){return!e}))},children:Object(z.jsx)(E.a,{icon:c?"eva:eye-fill":"eva:eye-off-fill"})})})},error:Boolean(j.password&&d.password),helperText:j.password&&d.password})),Object(z.jsx)(L.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:p,children:"Register"})]})})})}var R=a(740),D=Object(s.a)("div")((function(e){var t=e.theme;return Object(r.a)({},t.breakpoints.up("md"),{display:"flex"})})),G=Object(s.a)("header")((function(e){var t=e.theme;return Object(r.a)({top:0,zIndex:9,lineHeight:0,width:"100%",display:"flex",alignItems:"center",position:"absolute",padding:t.spacing(3),justifyContent:"space-between"},t.breakpoints.up("md"),{alignItems:"flex-start",padding:t.spacing(7,5,0,7)})})),H=Object(s.a)(c.a)((function(e){return{width:"100%",maxWidth:464,display:"flex",flexDirection:"column",justifyContent:"center",margin:e.theme.spacing(2,0,2,2)}})),J=Object(s.a)("div")((function(e){return{maxWidth:480,margin:"auto",display:"flex",minHeight:"100vh",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(12,0)}}));function V(){var e=Object(m.a)(),t=e.method,a=e.loginError,r=e.googleLogin;console.log(t);var s=Object(h.a)("up","sm"),c=Object(h.a)("up","md");return Object(z.jsx)(x.a,{title:"Register",children:Object(z.jsxs)(D,{children:[Object(z.jsxs)(G,{children:[Object(z.jsx)(O.a,{}),s&&Object(z.jsxs)(o.a,{variant:"body2",sx:{mt:{md:-2}},children:["Already have an account?"," ",Object(z.jsx)(l.a,{variant:"subtitle2",component:i.b,to:p.a.login,children:"Login"})]})]}),c&&Object(z.jsxs)(H,{children:[Object(z.jsx)(o.a,{variant:"h3",sx:{px:5,mt:10,mb:5},children:"Sign Up"}),Object(z.jsx)(f.a,{alt:"register",src:"https://minimal-assets-api.vercel.app/assets/illustrations/illustration_register.png"})]}),Object(z.jsx)(b.a,{children:Object(z.jsxs)(J,{children:[Object(z.jsxs)(d.a,{sx:{mb:5,display:"flex",alignItems:"center"},children:[Object(z.jsx)(d.a,{sx:{flexGrow:1},children:Object(z.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:"Get started."})}),Object(z.jsx)(j.a,{title:Object(n.a)(t),children:Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(O.a,{})})})]}),a&&Object(z.jsx)(u.a,{severity:"error",sx:{mb:3},children:a}),"firebase"===t&&Object(z.jsx)(R.a,{googleLogin:r}),Object(z.jsx)(F,{}),Object(z.jsxs)(o.a,{variant:"body2",align:"center",sx:{color:"text.secondary",mt:3},children:["By registering, I agree to Minimal\xa0",Object(z.jsx)(l.a,{underline:"always",color:"text.primary",href:"#",children:"Terms of Service"}),"and",Object(z.jsx)(l.a,{underline:"always",color:"text.primary",href:"#",children:"Privacy Policy"}),"."]}),!s&&Object(z.jsxs)(o.a,{variant:"body2",sx:{mt:3,textAlign:"center"},children:["Already have an account?"," ",Object(z.jsx)(l.a,{variant:"subtitle2",to:p.a.login,component:i.b,children:"Login"})]})]})})]})})}}}]);
//# sourceMappingURL=114.d9901421.chunk.js.map