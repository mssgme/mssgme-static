(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8Rx0":function(e,t,a){"use strict";a.r(t);var n=a("O94r"),i=a.n(n),l=a("ERkP"),c=a.n(l),o=a("2F2M"),s=a("khBj"),r=a("OdJe"),m=a("pO4e"),p=a.n(m);t.default=e=>{let{theme:t,item:a,isOpen:n,onToggle:m}=e;const{headerStyle:d,contentStyle:h}=Object(l.useMemo)(()=>({headerStyle:r.a.compile({...t,textStyle:t.headerStyle}),contentStyle:r.a.compile(t)}),[t]),y=Object(l.useCallback)(()=>{m&&m(a)},[a,m]);return c.a.createElement("div",{className:p.a.item},c.a.createElement(o.b.div,{className:p.a.title,initial:!1,onClick:y,style:d},c.a.createElement("div",{className:p.a.titleText},a.title),c.a.createElement(s.a,{className:i()({[p.a.titleIcon]:!0,[p.a.opened]:n}),size:20})),c.a.createElement(o.a,{initial:!1},n&&c.a.createElement(o.b.section,{key:"content",initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto",marginTop:8},collapsed:{opacity:0,height:0,marginTop:0,overflow:"hidden"}},transition:{duration:.6,ease:"easeInOut"},className:p.a.content,style:h},a.content)))}}}]);
//# sourceMappingURL=15.c20ad01bc0f58dcc12ae.js.map