!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c3631b5b-71d2-494a-ace2-e7071b7ce73f",e._sentryDebugIdIdentifier="sentry-dbid-c3631b5b-71d2-494a-ace2-e7071b7ce73f")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"369123747c69c747c614ada29f0b6a21fcf81ca6"},(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{PNWK:function(e,t,n){"use strict";n.r(t),n.d(t,"PageThumbnailRenderer",(function(){return y}));var a=n("xfSh"),r=n.n(a),c=n("r0ML"),i=n.n(c),l=n("QJEF"),d=n("63aL"),o=n("cpKZ"),s=n("S955"),b=n("VkFy"),u="_3Sf_b2cH",f="_1qEdhbLc",h="_2fWpMh6f",w="_2u6Vezgs";const g=e=>{let{website:t,page:n,width:a,height:d,delay:o,onRendered:s,onError:u}=e;const f=Object(c.useMemo)(()=>({width:a,minWidth:a,height:d,minHeight:d,boxShadow:"none",borderRadius:0}),[a,d]),[w,g]=Object(c.useState)(),y=Object(c.useCallback)(async e=>{try{const t=await r()(e,{width:a,height:d,useCORS:!0}),n=await new Promise((e,n)=>{try{t.toBlob(e,"image/jpeg",80)}catch(e){n(e)}});return n||!1}catch(e){return console.log(e),!1}}),m=Object(c.useCallback)(e=>{e&&(s(null),g(e))},[n,t,s]);return Object(c.useEffect)(()=>{if(!w)return;const e=Object(l.default)((async function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;const a=await y(t);e.cancel(),a?s(a):--n>0?e(t,n):u&&u(new Error("Can't generate preview"))}),o);return u&&u(null),e(w),e.cancel},[w,s]),i.a.createElement("div",{className:h,style:f},i.a.createElement(b.a,{ref:m,style:f,interactive:!1,website:t,page:n}))},y=e=>{let{website:t,page:n,width:a,height:r,delay:c,src:l,error:b,onChange:h,onError:y,...m}=e;return i.a.createElement("div",Object(o.a)(u,m),i.a.createElement("div",{className:w},l?i.a.createElement("img",{src:l,alt:"Thumbnail"}):b?i.a.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",display:"flex"}},i.a.createElement(d.G,{size:20,color:"#999"})):i.a.createElement(s.a,null)),i.a.createElement("div",{className:f},i.a.createElement(g,{website:t,page:n,width:a,height:r,delay:c,onRendered:h,onError:y})))};y.defaultProps={width:375,height:506,delay:1500};t.default=y}}]);
//# sourceMappingURL=13.e5e8c42c70cbe88f7f23.js.map