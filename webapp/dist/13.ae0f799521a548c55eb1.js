!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="70a26b20-b1b8-4c62-b382-f6536bc449ad",e._sentryDebugIdIdentifier="sentry-dbid-70a26b20-b1b8-4c62-b382-f6536bc449ad")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"350e2b17673c360ec0dde95ba93126aad4c3f3d5"},(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{PNWK:function(e,t,n){"use strict";n.r(t),n.d(t,"PageThumbnailRenderer",(function(){return y}));var a=n("xfSh"),r=n.n(a),i=n("r0ML"),l=n.n(i),c=n("QJEF"),d=n("63aL"),o=n("cpKZ"),s=n("S955"),b=n("VkFy"),u="GN77rEPe",f="_3ZSmcKz2",h="_1GjBGm9D",w="_2R38pYiA";const g=e=>{let{website:t,page:n,width:a,height:d,delay:o,onRendered:s,onError:u}=e;const f=Object(i.useMemo)(()=>({width:a,minWidth:a,height:d,minHeight:d,boxShadow:"none",borderRadius:0}),[a,d]),[w,g]=Object(i.useState)(),y=Object(i.useCallback)(async e=>{try{const t=await r()(e,{width:a,height:d,useCORS:!0}),n=await new Promise((e,n)=>{try{t.toBlob(e,"image/jpeg",80)}catch(e){n(e)}});return n||!1}catch(e){return console.log(e),!1}}),m=Object(i.useCallback)(e=>{e&&(s(null),g(e))},[n,t,s]);return Object(i.useEffect)(()=>{if(!w)return;const e=Object(c.default)((async function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;const a=await y(t);e.cancel(),a?s(a):--n>0?e(t,n):u&&u(new Error("Can't generate preview"))}),o);return u&&u(null),e(w),e.cancel},[w,s]),l.a.createElement("div",{className:h,style:f},l.a.createElement(b.a,{ref:m,style:f,interactive:!1,website:t,page:n}))},y=e=>{let{website:t,page:n,width:a,height:r,delay:i,src:c,error:b,onChange:h,onError:y,...m}=e;return l.a.createElement("div",Object(o.a)(u,m),l.a.createElement("div",{className:w},c?l.a.createElement("img",{src:c,alt:"Thumbnail"}):b?l.a.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",display:"flex"}},l.a.createElement(d.F,{size:20,color:"#999"})):l.a.createElement(s.a,null)),l.a.createElement("div",{className:f},l.a.createElement(g,{website:t,page:n,width:a,height:r,delay:i,onRendered:h,onError:y})))};y.defaultProps={width:375,height:506,delay:1500};t.default=y}}]);
//# sourceMappingURL=13.ae0f799521a548c55eb1.js.map