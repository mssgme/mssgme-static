(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2yop":function(e,a,t){e.exports=t.p+"ui/img/brands/whatsapp.svg"},3:function(e,a,t){t("C/am"),t("dnJR"),t("D3IT"),t("+ZTk"),t("Gt+C"),t("DeSF"),t("AoD7"),t("qZdN"),t("nf70"),e.exports=t("u2ML")},"3jh9":function(e,a,t){e.exports=t.p+"ui/img/brands/facebook-messenger.svg"},"4FTp":function(e,a,t){e.exports={root:"_13symRrz",download:"_2QCXZ4Ry"}},"5Ndt":function(e,a,t){e.exports={root:"_2zHE0rYp",logo:"_3NPpqWXV",caption:"n8DUPivW"}},HcxY:function(e,a,t){e.exports={root:"_34NOBq7X"}},IvO8:function(e,a,t){e.exports=t.p+"ui/img/brands/vkontakte.svg"},KQJB:function(e,a,t){e.exports={root:"Mkz8tDrE",caption:"_2crAx_2M"}},KrMl:function(e,a,t){e.exports=t.p+"ui/img/brands/skype.svg"},TiZb:function(e,a,t){e.exports=t.p+"ui/img/brands/telegram.svg"},TjwE:function(e,a,t){e.exports={root:"_35Arv6PI",content:"_1yirLGg2",write:"uDlq6hz0",pararaph:"OZ4qbxPG",branding:"G-a6-kx2"}},WRka:function(e,a,t){e.exports=t.p+"ui/img/logo_branding.svg"},Y72l:function(e,a,t){e.exports=t.p+"ui/img/brands/viber.svg"},cGUp:function(e,a){e.exports=CONFIG},dnJR:function(e,a,t){},hCL2:function(e,a,t){e.exports={root:"-g_YDCQj",link:"_1f9Ix5oU",slideDown:"_3Z_qdlZz",animated:"UfeNoRFZ",text:"_26y5U69N",decorateText:"_2k0y_5Qx"}},u2ML:function(e,a,t){"use strict";t.r(a);var n=t("r0ML"),r=t.n(n),o=t("+Q0i"),s=t.n(o),l=t("pnxo"),c=t("cNRa"),i=t.n(c);var p=t("bCRH"),m=t("Pc05"),d=t.n(m),g=t("Jafw"),u=t("jMR3"),b=t("hCL2"),f=t.n(b);function w(e){let{className:a,animated:n=!1}=e;const o=Object(p.b)(),s=Object(g.a)(),l="ru"===o?"мы используем":"powered by";return r.a.createElement("div",{className:d()(f.a.root,a,f.a.slideDown,n?f.a.animated:null)},r.a.createElement(u.a,{href:s,className:f.a.link},r.a.createElement("img",{src:t("WRka"),alt:"mssg.me logo"}),r.a.createElement("span",{className:f.a.text},l," ",r.a.createElement("span",{className:f.a.decorateText},"mssg.me"))))}w.propTypes={className:i.a.string,animated:i.a.bool};var v=t("3jh9"),E=t.n(v),h=t("KrMl"),x=t.n(h),N=t("TiZb"),k=t.n(N),y=t("Y72l"),O=t.n(y),_=t("IvO8"),R=t.n(_),q=t("2yop");const T={whatsapp:{label:"WhatsApp",color:"#24d366",downloadUrl:"https://www.whatsapp.com/download/",logo:t.n(q).a},telegram:{label:"Telegram",color:"#1f98d4",downloadUrl:"https://telegram.org/",logo:k.a},viber:{label:"Viber",color:"#665cac",downloadUrl:"https://www.viber.com/download/",logo:O.a},messenger:{label:"Facebook Messenger",color:"#0284ff",logo:E.a},vk:{label:"Vkontakte",color:"#5b88bd",logo:R.a},skype:{label:"Skype",color:"#00aff0",downloadUrl:"https://www.skype.com/get-skype/",logo:x.a}};var j=t("y3x5"),C=t("HcxY"),L=t.n(C);function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const I=e=>{let{href:a,...t}=e;return r.a.createElement("a",D({className:L.a.root,href:a},t),Object(l.a)("send"))};I.propTypes={href:i.a.string.isRequired};var M=I,U=t("5Ndt"),Z=t.n(U);const A=e=>{let{messenger:a}=e;const{label:t,logo:n}=T[a];return r.a.createElement("figure",{className:Z.a.root},r.a.createElement("img",{className:Z.a.logo,src:n}),r.a.createElement("figcaption",{className:Z.a.caption},t))};A.propTypes={messenger:i.a.oneOf(j.a).isRequired};var P=A,J=t("4FTp"),F=t.n(J);const G=e=>{let{messenger:a}=e;return r.a.createElement("header",{className:F.a.root},r.a.createElement("div",{className:F.a.brand},r.a.createElement(P,{messenger:a})))};G.propTypes={messenger:i.a.oneOf(j.a).isRequired};var Q=G,W=t("KQJB"),Y=t.n(W);const z=e=>{let{caption:a,src:t}=e;return r.a.createElement("figure",{className:Y.a.root},r.a.createElement("figcaption",{className:Y.a.caption},a),r.a.createElement("img",{className:Y.a.text,src:t}))};z.propTypes={caption:i.a.string.isRequired,src:i.a.string.isRequired};var B=z,H=t("TjwE"),K=t.n(H);function S(){return(S=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const V=e=>r.a.createElement("div",S({className:K.a.pararaph},e));class X extends r.a.Component{constructor(){super(...arguments),this.openLink=()=>{const{data:{appLink:e}}=this.props;window.location.href=e}}render(){const{data:{messenger:e,name:a,qrCode:t,appLink:n,branding:o,fullname:s},lang:c}=this.props,{label:i,color:m}=T[e];return r.a.createElement(p.a.Provider,{value:c},r.a.createElement("div",{className:K.a.root},r.a.createElement(Q,{messenger:e}),r.a.createElement("div",{className:K.a.content},r.a.createElement("div",null,r.a.createElement("h1",{className:K.a.write},Object(l.a)("write_on",[s,i])),r.a.createElement(V,null,Object(l.a)("click_on_button",[i])),r.a.createElement(V,null,r.a.createElement(M,{href:n,style:{backgroundColor:m}})),!(window.outerWidth<768)&&r.a.createElement(V,null,r.a.createElement(B,{caption:Object(l.a)("scan_qr"),src:t})),o&&r.a.createElement(V,null,r.a.createElement(w,{className:K.a.branding}))))))}}X.propTypes={data:i.a.shape({messenger:i.a.oneOf(j.a).isRequired,name:i.a.string.isRequired,appLink:i.a.string.isRequired,fullname:i.a.string.isRequired,branding:i.a.bool.isRequired,qrCode:i.a.string}).isRequired,lang:i.a.string};const $=window.INITIAL_DATA,{lang:ee}=window.document.documentElement;l.b.extend(window.LOCALES),s.a.render(r.a.createElement(X,{data:$,lang:ee}),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=redirect.cdb92e6064e3521f4f7a.js.map