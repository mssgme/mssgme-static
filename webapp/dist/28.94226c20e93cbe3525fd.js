(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"8lF2":function(e,t,a){e.exports={root:"_1Z4KtA9V",header:"_3yNDvia2",controls:"_14FyFLZK",control:"_2w3ISXv9",closeButton:"_23-b4rxX",content:"_36gyr4Ls",swiper:"lCawukuJ",slide:"_33gRtRGf",noSwiping:"_1OY5PMto"}},rewk:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a("aWzz"),s=a.n(n),o=a("ERkP"),i=a.n(o),c=a("7nmT"),r=a.n(c),l=a("zCf4"),u=a("2F2M"),d=a("Py4j"),p=a("YafY"),b=a("TLwS"),m=a("xynv"),v=a("5yXI"),f=a("uUJX"),y=a("5ojD"),w=a("8lF2"),g=a.n(w);const h=(e,t,a)=>(Object(u.c)("",e,t,a),{stop:()=>e.stop()});function C(e){let{services:t,contacts:a,activeIndex:n,interactive:s,onClose:c,onClosing:d,themeStyles:p,handleHash:w}=e;const C=Object(v.b)(),{style:{backgroundColor:j}}=Object(f.b)(C,!0,!0),k=Object(l.g)(),_=Object(u.d)(0),S=t.length>1,O=Object(o.useMemo)(()=>a.filter(e=>{let{enabled:t}=e;return t}).map(e=>{let{blockId:t}=e;return C.blocks.find(e=>{let{_id:a}=e;return a===t})}),[C,a]),R=Object(o.useCallback)(e=>{w&&k.replace("#"+t[e.realIndex]._id)},[w,t]),x=Object(o.useCallback)(()=>{w&&k.replace(k.location.pathname),d&&d(),h(_,0,{type:"spring",stiffness:100,onComplete:c})},[c,d,w]);return Object(o.useEffect)(()=>h(_,1,{type:"spring",stiffness:100}).stop,[]),r.a.createPortal(i.a.createElement(u.b.div,{className:g.a.root,style:{opacity:_,backgroundColor:j}},i.a.createElement("div",{className:g.a.content},i.a.createElement(b.a,{className:g.a.swiper,allowTouchMove:S,initialSlide:n,noSwipingClass:g.a.noSwiping,spaceBetween:0,slidesPerView:1,speed:600,onInit:R,onSlideChange:R},t.map((e,t)=>i.a.createElement(m.a,{key:e._id||t,className:g.a.slide},t=>{let{isActive:a,isPrev:n,isNext:o}=t;return i.a.createElement(y.a,{themeStyles:p,service:e,contacts:O,isActive:a,isPrev:n,isNext:o,interactive:s,onClose:x})}))))),document.querySelector("#page_root, #mainRoot"))}d.a.use([p.a]),C.propTypes={services:s.a.array.isRequired,contacts:s.a.array.isRequired,activeIndex:s.a.number.isRequired,onClose:s.a.func.isRequired,onClosing:s.a.func,themeStyles:s.a.object.isRequired,handleHash:s.a.bool,interactive:s.a.bool},C.defaultProps={handleHash:!0,interactive:!0}}}]);
//# sourceMappingURL=28.94226c20e93cbe3525fd.js.map