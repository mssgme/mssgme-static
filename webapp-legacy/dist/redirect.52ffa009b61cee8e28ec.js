(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1jyU":function(e,t,n){"use strict";t.a=function(e){const t=(e||"").toLowerCase(),n=t.includes("android"),a=t.includes("blackberry"),r=/iphone|ipad|ipod/i.test(t),o=t.includes("opera mini"),c=t.includes("iemobile");return{Android:n,BlackBerry:a,iOS:r,OperaMini:o,IEMobile:c,Safari:t.includes("safari"),WebView:t.includes("wv"),isMobile:n||a||r||o||c}}},"2yop":function(e,t,n){e.exports=n.p+"ui/img/brands/whatsapp.svg"},3:function(e,t,n){n("dnJR"),n("MMkd"),n("FMw2"),n("N0ZT"),n("5j0x"),n("AoD7"),n("qZdN"),n("nf70"),e.exports=n("u2ML")},"3jh9":function(e,t,n){e.exports=n.p+"ui/img/brands/facebook-messenger.svg"},"4FTp":function(e,t,n){e.exports={root:"_13symRrz",download:"_2QCXZ4Ry"}},"5Ndt":function(e,t,n){e.exports={root:"_2zHE0rYp",logo:"_3NPpqWXV",caption:"n8DUPivW"}},HcxY:function(e,t,n){e.exports={root:"_34NOBq7X"}},IvO8:function(e,t,n){e.exports=n.p+"ui/img/brands/vkontakte.svg"},Jafw:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("r0ML"),r=n("1jyU"),o=n("bCRH"),c=n("cGUp");function s(){let{target:e,url:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=Object(o.b)(),{isMobile:s}=Object(a.useMemo)(()=>{var e;return Object(r.a)(null===(e=window.navigator)||void 0===e?void 0:e.userAgent)},[]),l=Object(a.useMemo)(()=>{const e=(t||c.branding_url).replace("{lang}",n===c.fallback_language?"":"/"+n),a=s?"mobile":"desktop",r=window.location.hostname===c.main_hostname?window.location.pathname.split("/")[1]:window.location.hostname,o=new URL(e),l=a||(s?"mobile":"desktop");return o.search=new URLSearchParams({utm_source:"userpage_branding_logo",utm_medium:"userpage_branding_"+l,utm_campaign:"userpage_branding_"+l,utm_content:r}),o.toString()},[n,e,t]);return l}},KQJB:function(e,t,n){e.exports={root:"Mkz8tDrE",caption:"_2crAx_2M"}},KrMl:function(e,t,n){e.exports=n.p+"ui/img/brands/skype.svg"},TiZb:function(e,t,n){e.exports=n.p+"ui/img/brands/telegram.svg"},TjwE:function(e,t,n){e.exports={root:"_35Arv6PI",content:"_1yirLGg2",write:"uDlq6hz0",pararaph:"OZ4qbxPG",branding:"G-a6-kx2"}},WRka:function(e,t,n){e.exports=n.p+"ui/img/logo_branding.svg"},Y72l:function(e,t,n){e.exports=n.p+"ui/img/brands/viber.svg"},bCRH:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n("r0ML");const r=Object(a.createContext)("en");function o(){return Object(a.useContext)(r)}},cGUp:function(e,t){e.exports=CONFIG},dnJR:function(e,t,n){},hCL2:function(e,t,n){e.exports={root:"-g_YDCQj",link:"_1f9Ix5oU",slideDown:"_3Z_qdlZz",animated:"UfeNoRFZ",text:"_26y5U69N",decorateText:"_2k0y_5Qx"}},jMR3:function(e,t,n){"use strict";var a=n("r0ML"),r=n.n(a);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}t.a=function(e){return r.a.createElement("a",o({target:"_blank",rel:"noopener noreferrer"},e))}},pnxo:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n("8EKQ"),r=n.n(a);const o=new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.locales=e}extend(e){this.locales=Object.assign({},this.locales,e)}t(e,t){return this.locales[e]?r()(this.locales[e],t):e}},c=o.t.bind(o)},u2ML:function(e,t,n){"use strict";n.r(t);var a=n("r0ML"),r=n.n(a),o=n("+Q0i"),c=n("pnxo");var s=n("bCRH"),l=n("Pc05"),i=n.n(l),u=n("Jafw"),d=n("jMR3"),p=n("hCL2"),m=n.n(p);function g(e){let{className:t,animated:a=!1}=e;const o=Object(s.b)(),c=Object(u.a)(),l="ru"===o?"мы используем":"powered by";return r.a.createElement("div",{className:i()(m.a.root,t,m.a.slideDown,a?m.a.animated:null)},r.a.createElement(d.a,{href:c,className:m.a.link},r.a.createElement("img",{src:n("WRka"),alt:"mssg.me logo"}),r.a.createElement("span",{className:m.a.text},l," ",r.a.createElement("span",{className:m.a.decorateText},"mssg.me"))))}var b=n("3jh9"),f=n.n(b),w=n("KrMl"),v=n.n(w),h=n("TiZb"),E=n.n(h),_=n("Y72l"),x=n.n(_),O=n("IvO8"),j=n.n(O),k=n("2yop");const N={whatsapp:{label:"WhatsApp",color:"#24d366",downloadUrl:"https://www.whatsapp.com/download/",logo:n.n(k).a},telegram:{label:"Telegram",color:"#1f98d4",downloadUrl:"https://telegram.org/",logo:E.a},viber:{label:"Viber",color:"#665cac",downloadUrl:"https://www.viber.com/download/",logo:x.a},messenger:{label:"Facebook Messenger",color:"#0284ff",logo:f.a},vk:{label:"Vkontakte",color:"#5b88bd",logo:j.a},skype:{label:"Skype",color:"#00aff0",downloadUrl:"https://www.skype.com/get-skype/",logo:v.a}};var y=n("HcxY"),M=n.n(y);function L(){return(L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var C=e=>{let{href:t,...n}=e;return r.a.createElement("a",L({className:M.a.root,href:t},n),Object(c.a)("send"))},R=n("5Ndt"),U=n.n(R);var T=e=>{let{messenger:t}=e;const{label:n,logo:a}=N[t];return r.a.createElement("figure",{className:U.a.root},r.a.createElement("img",{className:U.a.logo,src:a}),r.a.createElement("figcaption",{className:U.a.caption},n))},A=n("4FTp"),I=n.n(A);var P=e=>{let{messenger:t}=e;return r.a.createElement("header",{className:I.a.root},r.a.createElement("div",{className:I.a.brand},r.a.createElement(T,{messenger:t})))},Z=n("KQJB"),q=n.n(Z);var D=e=>{let{caption:t,src:n}=e;return r.a.createElement("figure",{className:q.a.root},r.a.createElement("figcaption",{className:q.a.caption},t),r.a.createElement("img",{className:q.a.text,src:n}))},J=n("TjwE"),Q=n.n(J);function W(){return(W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const B=e=>r.a.createElement("div",W({className:Q.a.pararaph},e));class F extends r.a.Component{constructor(){super(...arguments),this.openLink=()=>{const{data:{appLink:e}}=this.props;window.location.href=e}}render(){const{data:{messenger:e,name:t,qrCode:n,appLink:a,branding:o,fullname:l},lang:i}=this.props,{label:u,color:d}=N[e];return r.a.createElement(s.a.Provider,{value:i},r.a.createElement("div",{className:Q.a.root},r.a.createElement(P,{messenger:e}),r.a.createElement("div",{className:Q.a.content},r.a.createElement("div",null,r.a.createElement("h1",{className:Q.a.write},Object(c.a)("write_on",[l,u])),r.a.createElement(B,null,Object(c.a)("click_on_button",[u])),r.a.createElement(B,null,r.a.createElement(C,{href:a,style:{backgroundColor:d}})),!(window.outerWidth<768)&&r.a.createElement(B,null,r.a.createElement(D,{caption:Object(c.a)("scan_qr"),src:n})),o&&r.a.createElement(B,null,r.a.createElement(g,{className:Q.a.branding}))))))}}const G=window.INITIAL_DATA,{lang:H}=window.document.documentElement;c.b.extend(window.LOCALES),Object(o.render)(r.a.createElement(F,{data:G,lang:H}),document.getElementById("root"))}},[[3,3,8]]]);
//# sourceMappingURL=redirect.52ffa009b61cee8e28ec.js.map