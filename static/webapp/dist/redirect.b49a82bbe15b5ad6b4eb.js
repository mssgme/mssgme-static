(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"/iHP":function(e,t,n){e.exports=n.p+"ui/img/brands/skype.svg"},"11K0":function(e,t,n){e.exports=n.p+"ui/img/brands/whatsapp.svg"},"2A/Y":function(e,t,n){e.exports={root:"_18QsFYMl"}},4:function(e,t,n){n("dnJR"),e.exports=n("yqs0")},HTWo:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=["whatsapp","telegram","instagram","viber","messenger","vk","skype"]},IuiR:function(e,t,n){e.exports={root:"_3ES4y40P",logo:"_3rFY6B7g",caption:"_1dA4iUVO"}},MhLP:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=n("gc+k"),o=n.n(r);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,e),this.locales=t}var t,n,r;return t=e,(n=[{key:"extend",value:function(e){this.locales=Object.assign({},this.locales,e)}},{key:"t",value:function(e,t){return this.locales[e]?o()(this.locales[e],t):e}}])&&i(t.prototype,n),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()),s=c.t.bind(c)},NrAP:function(e,t,n){e.exports=n.p+"ui/img/brands/facebook-messenger.svg"},OXwh:function(e,t,n){e.exports={root:"ppzV7Hq1",download:"_2Gr4zYiC"}},T9YG:function(e,t,n){e.exports={root:"_2ynmcCry",caption:"_1t9Fbzxs"}},cK14:function(e,t,n){e.exports={root:"_1p7xtFdx",content:"_3peZNvtn",write:"_3ht8A0di",paragraph:"_1He9e1nt",branding:"ffZdfMGp"}},dnJR:function(e,t,n){},eC1b:function(e,t,n){e.exports=n.p+"ui/img/brands/viber.svg"},enaZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n("ERkP"),o=Object(r.createContext)("en");function a(){return Object(r.useContext)(o)}},"gc+k":function(e,t){var n=/\{([0-9a-zA-Z_]+)\}/g;e.exports=function(e){var t;if(2===arguments.length&&"object"==typeof arguments[1])t=arguments[1];else{t=new Array(arguments.length-1);for(var r=1;r<arguments.length;++r)t[r-1]=arguments[r]}t&&t.hasOwnProperty||(t={});return e.replace(n,(function(n,r,o){var a;return"{"===e[o-1]&&"}"===e[o+n.length]?r:null==(a=t.hasOwnProperty(r)?t[r]:null)?"":a}))}},gmcW:function(e,t,n){e.exports=n.p+"ui/img/brands/telegram.svg"},ivbd:function(e,t,n){"use strict";function r(){return window.outerWidth<768}n.d(t,"a",(function(){return r}))},sN1U:function(e,t,n){e.exports=n.p+"ui/img/brands/vkontakte.svg"},yqs0:function(e,t,n){"use strict";n.r(t);var r=n("ERkP"),o=n.n(r),a=n("7nmT"),i=n.n(a),c=n("MhLP"),s=n("aWzz"),l=n.n(s),u=n("ivbd"),p=n("enaZ"),f=n("NrAP"),d=n.n(f),b=n("/iHP"),g=n.n(b),m=n("gmcW"),y=n.n(m),v=n("eC1b"),h=n.n(v),w=n("sN1U"),O=n.n(w),E=n("11K0"),j={whatsapp:{label:"WhatsApp",color:"#24d366",downloadUrl:"https://www.whatsapp.com/download/",logo:n.n(E).a},telegram:{label:"Telegram",color:"#1f98d4",downloadUrl:"https://telegram.org/",logo:y.a},viber:{label:"Viber",color:"#665cac",downloadUrl:"https://www.viber.com/download/",logo:h.a},messenger:{label:"Facebook Messenger",color:"#0284ff",logo:d.a},vk:{label:"Vkontakte",color:"#5b88bd",logo:O.a},skype:{label:"Skype",color:"#00aff0",downloadUrl:"https://www.skype.com/get-skype/",logo:g.a}},k=n("HTWo"),P=n("2A/Y"),x=n.n(P);function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var N=function(e){var t=e.href,n=R(e,["href"]);return o.a.createElement("a",_({className:x.a.root,href:t},n),Object(c.a)("send"))};N.propTypes={href:l.a.string.isRequired};var q=N,T=n("IuiR"),A=n.n(T),C=function(e){var t=e.messenger,n=j[t],r=n.label,a=n.logo;return o.a.createElement("figure",{className:A.a.root},o.a.createElement("img",{className:A.a.logo,src:a}),o.a.createElement("figcaption",{className:A.a.caption},r))};C.propTypes={messenger:l.a.oneOf(k.a).isRequired};var S=C,L=n("OXwh"),I=n.n(L),U=function(e){var t=e.messenger;return o.a.createElement("header",{className:I.a.root},o.a.createElement("div",{className:I.a.brand},o.a.createElement(S,{messenger:t})))};U.propTypes={messenger:l.a.oneOf(k.a).isRequired};var W=U,Y=n("T9YG"),z=n.n(Y),H=function(e){var t=e.caption,n=e.src;return o.a.createElement("figure",{className:z.a.root},o.a.createElement("figcaption",{className:z.a.caption},t),o.a.createElement("img",{className:z.a.text,src:n}))};H.propTypes={caption:l.a.string.isRequired,src:l.a.string.isRequired};var F=H,M=n("cK14"),Z=n.n(M);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return(K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=X(e);if(t){var o=X(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return D(this,n)}}function D(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(){return(Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var $=function(e){return o.a.createElement("div",Q({className:Z.a.paragraph},e))},ee=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K(e,t)}(i,e);var t,n,r,a=V(i);function i(){var e;G(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).openLink=function(){var t=e.props.data.appLink;window.location.href=t},e}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.data,n=t.messenger,r=(t.name,t.qrCode),a=t.appLink,i=(t.branding,t.fullname),s=e.lang,l=j[n],f=l.label,d=l.color;return o.a.createElement(p.a.Provider,{value:s},o.a.createElement("div",{className:Z.a.root},o.a.createElement(W,{messenger:n}),o.a.createElement("div",{className:Z.a.content},o.a.createElement("div",null,o.a.createElement("h1",{className:Z.a.write},Object(c.a)("write_on",[i,f])),o.a.createElement($,null,Object(c.a)("click_on_button",[f])),o.a.createElement($,null,o.a.createElement(q,{href:a,style:{backgroundColor:d}})),!Object(u.a)()&&o.a.createElement($,null,o.a.createElement(F,{caption:Object(c.a)("scan_qr"),src:r}))))))}}])&&J(t.prototype,n),r&&J(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o.a.Component);ee.propTypes={data:l.a.shape({messenger:l.a.oneOf(k.a).isRequired,name:l.a.string.isRequired,appLink:l.a.string.isRequired,fullname:l.a.string.isRequired,branding:l.a.bool.isRequired,qrCode:l.a.string}).isRequired,lang:l.a.string};var te=window.INITIAL_DATA,ne=window.document.documentElement.lang;c.b.extend(window.LOCALES),i.a.render(o.a.createElement(ee,{data:te,lang:ne}),document.getElementById("root"))}},[[4,0,1]]]);
//# sourceMappingURL=redirect.b49a82bbe15b5ad6b4eb.js.map