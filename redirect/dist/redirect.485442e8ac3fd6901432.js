!function(e){function t(t){for(var r,s,l=t[0],c=t[1],i=t[2],u=0,d=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(p&&p(t);d.length;)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={0:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://cdn.jsdelivr.net/gh/mssgme/mssgme-static@v5.13.2/redirect/dist/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var p=c;o.push([0,1]),n()}({"/iHP":function(e,t,n){e.exports=n.p+"ui/img/brands/skype.svg"},0:function(e,t,n){n("w0yH"),n("dnJR"),e.exports=n("yqs0")},"11K0":function(e,t,n){e.exports=n.p+"ui/img/brands/whatsapp.svg"},"2A/Y":function(e,t,n){e.exports={root:"_18QsFYMl"}},IuiR:function(e,t,n){e.exports={root:"_3ES4y40P",logo:"_3rFY6B7g",caption:"_1dA4iUVO"}},NrAP:function(e,t,n){e.exports=n.p+"ui/img/brands/facebook-messenger.svg"},OXwh:function(e,t,n){e.exports={root:"ppzV7Hq1",download:"_2Gr4zYiC"}},T9YG:function(e,t,n){e.exports={root:"_2ynmcCry",caption:"_1t9Fbzxs"}},cK14:function(e,t,n){e.exports={root:"_1p7xtFdx",content:"_3peZNvtn",write:"_3ht8A0di",paragraph:"_1He9e1nt",branding:"ffZdfMGp"}},dnJR:function(e,t,n){},eC1b:function(e,t,n){e.exports=n.p+"ui/img/brands/viber.svg"},gmcW:function(e,t,n){e.exports=n.p+"ui/img/brands/telegram.svg"},sN1U:function(e,t,n){e.exports=n.p+"ui/img/brands/vkontakte.svg"},yqs0:function(e,t,n){"use strict";n.r(t);var r=n("ERkP"),a=n.n(r),o=n("7nmT"),s=n("gc+k"),l=n.n(s);const c=new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.locales=e}extend(e){this.locales=Object.assign({},this.locales,e)}t(e,t){return this.locales[e]?l()(this.locales[e],t):e}},i=c.t.bind(c);const p=Object(r.createContext)("en");var u=n("NrAP"),d=n.n(u),m=n("/iHP"),g=n.n(m),f=n("gmcW"),b=n.n(f),h=n("eC1b"),v=n.n(h),w=n("sN1U"),y=n.n(w),E=n("11K0");const O={whatsapp:{label:"WhatsApp",color:"#24d366",downloadUrl:"https://www.whatsapp.com/download/",logo:n.n(E).a},telegram:{label:"Telegram",color:"#1f98d4",downloadUrl:"https://telegram.org/",logo:b.a},viber:{label:"Viber",color:"#665cac",downloadUrl:"https://www.viber.com/download/",logo:v.a},messenger:{label:"Facebook Messenger",color:"#0284ff",logo:d.a},vk:{label:"Vkontakte",color:"#5b88bd",logo:y.a},skype:{label:"Skype",color:"#00aff0",downloadUrl:"https://www.skype.com/get-skype/",logo:g.a}};var x=n("2A/Y"),_=n.n(x);function k(){return(k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var j=e=>{let{href:t,...n}=e;return a.a.createElement("a",k({className:_.a.root,href:t},n),i("send"))},N=n("IuiR"),P=n.n(N);var A=e=>{let{messenger:t}=e;const{label:n,logo:r}=O[t];return a.a.createElement("figure",{className:P.a.root},a.a.createElement("img",{className:P.a.logo,src:r}),a.a.createElement("figcaption",{className:P.a.caption},n))},C=n("OXwh"),S=n.n(C);var T=e=>{let{messenger:t}=e;return a.a.createElement("header",{className:S.a.root},a.a.createElement("div",{className:S.a.brand},a.a.createElement(A,{messenger:t})))},M=n("T9YG"),U=n.n(M);var Y=e=>{let{caption:t,src:n}=e;return a.a.createElement("figure",{className:U.a.root},a.a.createElement("figcaption",{className:U.a.caption},t),a.a.createElement("img",{className:U.a.text,src:n}))},I=n("cK14"),L=n.n(I);function q(){return(q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const F=e=>a.a.createElement("div",q({className:L.a.paragraph},e));class H extends a.a.Component{constructor(){super(...arguments),this.openLink=()=>{const{data:{appLink:e}}=this.props;window.location.href=e}}render(){const{data:{messenger:e,name:t,qrCode:n,appLink:r,branding:o,fullname:s},lang:l}=this.props,{label:c,color:u}=O[e];return a.a.createElement(p.Provider,{value:l},a.a.createElement("div",{className:L.a.root},a.a.createElement(T,{messenger:e}),a.a.createElement("div",{className:L.a.content},a.a.createElement("div",null,a.a.createElement("h1",{className:L.a.write},i("write_on",[s,c])),a.a.createElement(F,null,i("click_on_button",[c])),a.a.createElement(F,null,a.a.createElement(j,{href:r,style:{backgroundColor:u}})),!(window.outerWidth<768)&&a.a.createElement(F,null,a.a.createElement(Y,{caption:i("scan_qr"),src:n}))))))}}const R=window.INITIAL_DATA,{lang:G}=window.document.documentElement;c.extend(window.LOCALES),Object(o.render)(a.a.createElement(H,{data:R,lang:G}),document.getElementById("root"))}});
//# sourceMappingURL=redirect.485442e8ac3fd6901432.js.map