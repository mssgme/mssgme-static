!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0e584def-dd99-4bdd-9b31-1276191f72ff",e._sentryDebugIdIdentifier="sentry-dbid-0e584def-dd99-4bdd-9b31-1276191f72ff")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"d0066d33f280e626d1027d67a56bce4fe9db3f09"},(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{jihJ:function(e,t,n){"use strict";n.r(t);var a=n("Pc05"),i=n.n(a),o=n("r0ML"),l=n.n(o),r=n("oZLZ"),d=n("4OES"),s=n("7+Q5");function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e){return l.a.createElement(s.b,c({stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",viewBox:"0 0 24 24"},e),l.a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}var p=n("0ZkQ");t.default=e=>{let{theme:t,item:n,isOpen:a,onToggle:s}=e;const{headerStyle:c,contentStyle:u}=Object(o.useMemo)(()=>({headerStyle:d.a.compile({...t,textStyle:t.headerStyle}),contentStyle:d.a.compile(t)}),[t]),y=Object(o.useCallback)(()=>{s&&s(n)},[n,s]);return l.a.createElement("div",{className:p.a.item},l.a.createElement(r.b.div,{className:p.a.title,initial:!1,onClick:y,style:c},l.a.createElement("div",{className:p.a.titleText},n.title),l.a.createElement(f,{className:i()({[p.a.titleIcon]:!0,[p.a.opened]:a}),size:20})),l.a.createElement(r.a,{initial:!1},a&&l.a.createElement(r.b.section,{key:"content",initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto",marginTop:8},collapsed:{opacity:0,height:0,marginTop:0,overflow:"hidden"}},transition:{duration:.6,ease:"easeInOut"},className:p.a.content,style:u},n.content)))}}}]);
//# sourceMappingURL=16.1a51fd72779a38628318.js.map