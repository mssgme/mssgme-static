!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c0e6fdfd-9ea8-4476-8941-5012e0d8d06a",e._sentryDebugIdIdentifier="sentry-dbid-c0e6fdfd-9ea8-4476-8941-5012e0d8d06a")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"fcb539985d4103eb7bc71c2c501e559f1b61fefa"},(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{vcR4:function(e,t,a){"use strict";a.r(t),a.d(t,"Giphy",(function(){return j})),a.d(t,"Audio",(function(){return V})),a.d(t,"Video",(function(){return S})),a.d(t,"ImageGallery",(function(){return re})),a.d(t,"VideoGallery",(function(){return Z}));var n=a("Pc05"),l=a.n(n),i=a("r0ML"),r=a.n(i),o=a("wUPD"),c=a("iFO/"),s=a("qhve"),d=a("+sqJ"),u=a("cGUp"),b=a("FC9d"),p=a("cpKZ"),f=a("U0qp"),g=a("n9c3"),y="_3_0SlzVw",m="cBF1w0Uq",v="_2ZryztaH";function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e){let{block:t,style:a,...n}=e;const{style:b}=Object(f.a)(t),[O,j]=Object(i.useState)(null),[w,{width:_}]=Object(o.a)(),k=Object(i.useMemo)(()=>new d.GiphyFetch(u.giphy_public_key),[]),E=Object(i.useMemo)(()=>_,[!!_]),P=(null==O?void 0:O.images.original.width)>E?E:null==O?void 0:O.images.original.width,$=Object(i.useMemo)(()=>a?{...b,...a}:b,[b,a]);return Object(c.a)(async()=>{const{data:e}=await k.gif(t.giphyId);j(e)},[t.giphyId]),r.a.createElement(g.a,h({style:$},Object(p.a)(y,n)),r.a.createElement("div",{className:l()({[m]:!0,[v]:!O}),ref:w},O&&r.a.createElement(s.Gif,{gif:O,backgroundColor:"transparent",hideAttribution:!0,width:P||200,borderRadius:16,noLink:!0})))}O.defaultProps=g.a.defaultProps,O.kind=b.h;var j=O,w=a("UwX1"),_=a.n(w),k=a("I4QV"),E="_2H4Kh_Tb",P="_15wVVn_P",$="ouzA8cnf",C="_3hxgcr7s";function I(){return(I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function M(e){let{block:t,block:{url:a},insets:n,...i}=e;const{theme:o,style:c}=Object(f.a)(t),s=_.a.canPlay(a),d=Object(k.b)(n,"yes"===o.padding);return r.a.createElement(g.a,I({insets:d},Object(p.a)(i)),r.a.createElement("div",{className:l()(E,{[P]:s}),style:c},s&&r.a.createElement(_.a,{className:l()({[$]:!0,[C]:a.includes("mixcloud.com")}),url:a,width:"100%",height:"100%",config:{mixcloud:{options:{hide_cover:!1,hide_tracklist:!1,hide_artwork:!1}}}})))}M.defaultProps=g.a.defaultProps,M.kind=b.c;var V=M,N={root:"_INhI_bV",hasVideo:"_11w5YwQB",square:"na_8M-Rk",vertical:"_1TWu5b9v",yes:"_5z1cIqkA",player:"_22lEwVqJ"};function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S(e){let{block:t,block:{url:a},insets:n,...i}=e;const{theme:o,style:c}=Object(f.a)(t),s=(e=>e&&e.replace(/(youtu(?:.be|be.com))\/shorts/i,"$1/embed"))(a),d=_.a.canPlay(s),u=Object(k.b)(n,"yes"===o.padding);return r.a.createElement(g.a,x({insets:u},Object(p.a)(N.wrapper,i)),r.a.createElement("div",{className:l()(N.root,N[o.ratio],{[N.hasVideo]:d}),style:c},d&&r.a.createElement(_.a,{className:N.player,light:!0,playing:!0,controls:!0,url:s,width:"100%",height:"100%"})))}S.defaultProps=g.a.defaultProps,S.kind=b.x;var z=a("Cy+X"),A=a("oLsa"),L=a("JOsV"),T=a("dDnn"),U={inList:"_3IEZpfg8",clickablePagination:"_2bCHug6T",bullet:"yaXizT08",activeBullet:"_431eztYO",videoContainer:"_3megdc8y",hasVideo:"_1l7svieH",square:"_2F5ipO4g",vertical:"_23y8R5lt",yes:"_1aLQ0kpc",player:"_3tA5fJBo",annotation:"_30bSzuZU",preview:"_2lDATHpQ",placeholder:"_2utVLZLl",rectangle:"_2KR6UaEN"};function q(){return(q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const B=/^https:\/\/(www.)?youtu\.?be/,F=/v\/|v=|youtu\.be\//,R=e=>{let{url:t,annotation:a="",isActive:n=!0,ratio:l,...o}=e;const[c,s]=Object(T.a)(!1),[d,u,b]=Object(T.a)(!1),[f,g]=Object(i.useMemo)(()=>{const e=(e=>e&&e.replace(/(youtu(?:\.be|be\.com))\/shorts/i,"$1/embed"))(t)||"",a=(e=>{var t;const a=e.match(B)?null===(t=e.split(F)[1])||void 0===t?void 0:t.split(/[?&]/)[0]:null;if(a)return`https://i.ytimg.com/vi/${a}/hqdefault.jpg`})(e);return[_.a.canPlay(e),{light:a||!0,url:e}]},[t]);return Object(i.useEffect)(()=>{c&&u()},[c]),r.a.createElement("div",Object(p.a)([U.videoContainer,U[l],{[U.hasVideo]:f}],o),f&&r.a.createElement(_.a,q({className:U.player,controls:!0,playing:d&&n,width:"100%",height:"100%",onPause:b,onPlay:u,onReady:s},g)),a&&!c&&!d&&r.a.createElement("div",{className:U.annotation},a))};function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const H={crossFade:!0};function G(e){let{block:t,insets:a,style:n,...c}=e;const[s,{width:d}]=Object(o.a)(),[u,b]=Object(i.useState)(null),{theme:{ratio:y,padding:m,autoplay:v,effect:h},style:O}=Object(f.a)(t),{color:j,hasImage:w}=Object(L.b)(),{resolvedInsets:_,margin:E}=Object(k.c)(a,m),P=w&&(Object(z.a)(j)?"#333":"#eee"),$=t.videos.length>1,C=Object(i.useMemo)(()=>!!$&&{renderBullet:(e,t)=>`<span style="background-color: ${j};${P?"border: 1px solid "+P:""};" class="${t+" "+U.bullet}"></span>`,clickable:!0,clickableClass:U.clickablePagination,bulletActiveClass:U.activeBullet},[$,j]),I=1e3*v,M=Object(i.useMemo)(()=>$&&!!I&&{delay:I},[$,I]),V=Object(i.useCallback)(()=>{null==u||u.autoplay.stop()},[]);return r.a.createElement(g.a,D({lazy:!0,ref:s,insets:_},Object(p.a)(U.root,c)),0===t.videos.length?r.a.createElement("div",{className:U.preview},r.a.createElement("div",{className:l()(U.placeholder,U[y])})):r.a.createElement(A.a,{key:`${t.videos.length}-${v}-${h}-${d}-${j}`,flex:!0,slideStyle:m?{padding:`0 ${E}px`}:void 0,interactive:c.interactive,allowTouchMove:$&&!c.embedded,autoplay:M,effect:h,pagination:C,fadeEffect:H,onSliderMove:V,onSwiper:b},t.videos.map((e,t)=>Object.assign(t=>{let{isActive:a}=t;return r.a.createElement(R,{url:e.url,annotation:e.annotation,style:O,ratio:y,isActive:a,onClick:V})},{key:e._id||`${e.url}-${t}`}))))}G.defaultProps=g.a.defaultProps,G.kind=b.y;var Z=G,J=a("+mqk"),W=a("pH6o"),Y=a("S955"),K=a("h8yL"),Q=a("peeh"),X={blurred:"_2SQP50zU",slide:"_3ApCJp8f",clickablePagination:"_3uUWLu9w",bullet:"TMRbLxsL",activeBullet:"_1WqZMWuM",imageBlock:"_3syeP3kO",annotation:"_3eIHGrgt",imageContainer:"_3vgZ30eF",preloader:"_2ua8BzK7",placeholder:"_3Kk5dGzO",original:"_1R8i2FGr",loaded:"_1XwUbDFh",square:"_1EDcNE74",image:"_3hx4kuvg",rectangle:"_2t8Fprr8",fitInside:"xmrxR5C5",fitOutside:"_2ZiYdf6X",stretch:"_2FarEzIy",fill:"_YDM3bIa","perView-2":"p4dnBM7Y","perView-3":"TatE6ECD","perView-4":"_39kUjxRW","perView-5":"_3Wp_-6fz",preview:"_2qam-SEb"};function ee(){return(ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const te=e=>{let{index:t,image:a,style:n,theme:{ratio:o},onClick:c,swiper:s,isViewMode:d,interactive:u}=e;const{Tag:b,tagAttributes:p,scrollToHash:f}=Object(K.a)({action:a.action,isViewMode:d,interactive:u}),{getMediaSizeUrl:g}=Object(Q.b)(),y=g(a.url,Q.a.Large),m="original"!==o,v=Object(i.useCallback)(()=>{s&&s.updateAutoHeight()},[s]),h=u&&"fullImage"===a.action.type?()=>c(t):null;return Object(i.useEffect)(()=>{var e;null!=s&&null!==(e=s.lazy)&&void 0!==e&&e.initialImageLoaded&&s.lazy.loadInSlide(t)},[t,a]),r.a.createElement("div",{className:l()(X.imageBlock,{[X.placeholder]:!y,[X.fitOutside]:m,[X[o]]:X[o]}),style:n,onClick:f},r.a.createElement(b,ee({className:X.imageContainer,onClick:h},p),r.a.createElement("div",{className:X.image},r.a.createElement("img",{alt:a.annotation||"Image",className:"swiper-lazy","data-src":y,onLoad:v})),r.a.createElement("div",{className:X.preloader},r.a.createElement(Y.a,null))),a.annotation&&r.a.createElement("div",{className:X.annotation},a.annotation))};function ae(){return(ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const ne={crossFade:!0},le={loadPrevNext:!0,preloaderClass:X.preloader,loadedClass:X.loaded};function ie(e){let{block:t,insets:a,sortable:n,...c}=e;const[s,{width:d}]=Object(o.a)(),[u,b]=Object(i.useState)(null),[y,m]=Object(i.useState)(0),[v,h,O]=Object(T.a)(),{theme:j,style:w}=Object(f.a)(t),{color:_,hasImage:E}=Object(L.b)(),{ratio:P,padding:$,perView:C,autoplay:I,effect:M}=j,{resolvedInsets:V,margin:N}=Object(k.c)(a,$),x=Object(i.useMemo)(()=>d,[!!d]),S=t.images.length,U=S>C,q=1e3*I,B=Math.max(1e3,5e3-q),F=Object(i.useMemo)(()=>{if(!U)return!1;const e=E?"border: 1px solid "+(Object(z.a)(_)?"#333":"#eee"):"";return{renderBullet:(t,a)=>`<span style="background-color:${_};${e};" class="${a} ${X.bullet}"></span>`,clickable:!0,clickableClass:X.clickablePagination,bulletActiveClass:X.activeBullet}},[U,_]),R=Object(i.useMemo)(()=>U&&!!q&&{delay:q},[U,q]),D=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;const[t,a]=Object(i.useState)(null),n=Object(i.useCallback)(e=>a(()=>e),[]);return Object(i.useEffect)(()=>{if(!t)return;const a=setTimeout(t,e);return()=>{clearTimeout(a)}},[t,e]),n}(B),H=Object(i.useCallback)(e=>{e.autoplay&&e.autoplay.running||!R||D(()=>{e.autoplay&&e.autoplay.start()})},[R]),G=Object(i.useCallback)(e=>{m(e),h()},[]),Z=Object(J.a)(),Y=t.images.map(e=>{let{url:t,externalUrl:a}=e;return`${t}-${a}`}).join(":"),K=n?`${Y}-${C}-${I}-${M}-${_}-${P}-${Z.count}-${x}`:"swiper";return r.a.createElement(g.a,ae({lazy:!0,ref:s,insets:V,sortable:n},Object(p.a)([X.root,X["perView-"+C]],c)),S>0?r.a.createElement(A.a,{key:K,interactive:c.interactive,slideStyle:$?{padding:`0 ${N}px`}:void 0,slidesPerView:C,allowTouchMove:U&&!c.embedded,flex:!0,watchOverflow:!0,autoHeight:!0,loop:!0,autoplay:R,pagination:F,fadeEffect:ne,lazy:le,effect:M,onSliderMove:H,onSwiper:b,onUpdate:Z},t.images.map((e,t)=>r.a.createElement(te,{key:e._id||`${e.url}-${t}`,index:t,image:e,swiper:u,style:w,theme:j,onClick:G,isViewMode:c.isViewMode,interactive:c.interactive}))):r.a.createElement("div",{className:X.preview},r.a.createElement("div",{className:l()(X.placeholder,X[P])})),v&&r.a.createElement(W.a,{activeIndex:y,images:t.images,onClose:O}))}ie.defaultProps=g.a.defaultProps,ie.kind=b.l;var re=ie}}]);
//# sourceMappingURL=20.7c8f720d29710ed08044.js.map