!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="dc31907a-9551-4828-97a3-4f7b65572bb3",e._sentryDebugIdIdentifier="sentry-dbid-dc31907a-9551-4828-97a3-4f7b65572bb3")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"350e2b17673c360ec0dde95ba93126aad4c3f3d5"},(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3Jvm":function(e,t,n){e.exports=n("Gbdu")},E790:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return D}));var r,o,a,i=n("r0ML"),c=n.n(i);!function(e){e.INITIAL="initial",e.PENDING="pending",e.REJECTED="rejected",e.RESOLVED="resolved"}(r||(r={})),function(e){e.LOADING_STATUS="setLoadingStatus",e.RESET_OPTIONS="resetOptions",e.SET_BRAINTREE_INSTANCE="braintreeInstance"}(o||(o={})),function(e){e.NUMBER="number",e.CVV="cvv",e.EXPIRATION_DATE="expirationDate",e.EXPIRATION_MONTH="expirationMonth",e.EXPIRATION_YEAR="expirationYear",e.POSTAL_CODE="postalCode"}(a||(a={}));var u="data-react-paypal-script-id",s="data-sdk-integration-source",l="react-paypal-js",f="data-namespace",d=("https://js.braintreegateway.com/web/".concat("3.84.0","/js/client.min.js"),"https://js.braintreegateway.com/web/".concat("3.84.0","/js/paypal-checkout.min.js"),function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)});function p(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function y(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function m(e){return void 0===e&&(e="paypal"),window[e]}function v(e){var t=e.reactComponentName,n=e.sdkComponentKey,r=e.sdkRequestedComponents,o=void 0===r?"":r,a=e.sdkDataNamespace,i=void 0===a?"paypal":a,c=n.charAt(0).toUpperCase().concat(n.substring(1)),u="Unable to render <".concat(t," /> because window.").concat(i,".").concat(c," is undefined.");if(!o.includes(n)){var s=[o,n].filter(Boolean).join();u+="\nTo fix the issue, add '".concat(n,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(s,"'}}>`.")}return u}function b(e){return"react-paypal-js-".concat(function(e){for(var t="",n=0;n<e.length;n++){var r=e[n].charCodeAt(0)*n;e[n+1]&&(r+=e[n+1].charCodeAt(0)*(n-1)),t+=String.fromCharCode(97+Math.abs(r)%26)}return t}(JSON.stringify(e)))}function h(e,t){var n,a,i;switch(t.type){case o.LOADING_STATUS:return d(d({},e),{loadingStatus:t.value});case o.RESET_OPTIONS:return a=e.options[u],(null==(i=self.document.querySelector("script[".concat(u,'="').concat(a,'"]')))?void 0:i.parentNode)&&i.parentNode.removeChild(i),delete t.value[u],d(d({},e),{loadingStatus:r.PENDING,options:d(d({},t.value),(n={},n[u]="".concat(b(t.value)),n[s]=l,n))});case o.SET_BRAINTREE_INSTANCE:return d(d({},e),{braintreePayPalCheckoutInstance:t.value});default:return e}}var E=Object(i.createContext)(null);function g(e){if("function"==typeof(null==e?void 0:e.dispatch)&&0!==e.dispatch.length)return e;throw new Error("usePayPalScriptReducer must be used within a PayPalScriptProvider")}function w(){var e=g(Object(i.useContext)(E));return[d(d({},e),{isInitial:e.loadingStatus===r.INITIAL,isPending:e.loadingStatus===r.PENDING,isResolved:e.loadingStatus===r.RESOLVED,isRejected:e.loadingStatus===r.REJECTED}),e.dispatch]}Object(i.createContext)({});var S=function(e){var t=e.className,n=void 0===t?"":t,r=e.disabled,o=void 0!==r&&r,a=e.children,u=e.forceReRender,s=void 0===u?[]:u,l=p(e,["className","disabled","children","forceReRender"]),b=o?{opacity:.38}:{},h="".concat(n," ").concat(o?"paypal-buttons-disabled":"").trim(),E=Object(i.useRef)(null),g=Object(i.useRef)(null),O=w()[0],j=O.isResolved,P=O.options,A=Object(i.useState)(null),N=A[0],C=A[1],I=Object(i.useState)(!0),R=I[0],T=I[1],k=Object(i.useState)(null)[1];function D(){null!==g.current&&g.current.close().catch((function(){}))}return Object(i.useEffect)((function(){if(!1===j)return D;var e=m(P[f]);if(void 0===e||void 0===e.Buttons)return k((function(){throw new Error(v({reactComponentName:S.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:P.components,sdkDataNamespace:P[f]}))})),D;try{g.current=e.Buttons(d(d({},l),{onInit:function(e,t){C(t),"function"==typeof l.onInit&&l.onInit(e,t)}}))}catch(e){return k((function(){throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(e))}))}return!1===g.current.isEligible()?(T(!1),D):E.current?(g.current.render(E.current).catch((function(e){null!==E.current&&0!==E.current.children.length&&k((function(){throw new Error("Failed to render <PayPalButtons /> component. ".concat(e))}))})),D):D}),y(y([j],s,!0),[l.fundingSource],!1)),Object(i.useEffect)((function(){null!==N&&(!0===o?N.disable().catch((function(){})):N.enable().catch((function(){})))}),[o,N]),c.a.createElement(c.a.Fragment,null,R?c.a.createElement("div",{ref:E,style:b,className:h}):a)};function O(e){var t="https://www.paypal.com/sdk/js";e.sdkBaseURL&&(t=e.sdkBaseURL,delete e.sdkBaseURL),function(e){var t=e["merchant-id"],n=e["data-merchant-id"],r="",o="";Array.isArray(t)?t.length>1?(r="*",o=t.toString()):r=t.toString():"string"==typeof t&&t.length>0?r=t:"string"==typeof n&&n.length>0&&(r="*",o=n);e["merchant-id"]=r,e["data-merchant-id"]=o}(e);var n=Object.keys(e).filter((function(t){return void 0!==e[t]&&null!==e[t]&&""!==e[t]})).reduce((function(t,n){var r=e[n].toString();return"data-"===n.substring(0,5)?t.dataAttributes[n]=r:t.queryParams[n]=r,t}),{queryParams:{},dataAttributes:{}}),r=n.queryParams,o=n.dataAttributes;return{url:"".concat(t,"?").concat(j(r)),dataAttributes:o}}function j(e){var t="";return Object.keys(e).forEach((function(n){0!==t.length&&(t+="&"),t+=n+"="+e[n]})),t}function P(e,t){void 0===t&&(t={});var n=document.createElement("script");return n.src=e,Object.keys(t).forEach((function(e){n.setAttribute(e,t[e]),"data-csp-nonce"===e&&n.setAttribute("nonce",t["data-csp-nonce"])})),n}function A(e,t){if(void 0===t&&(t=C()),R(e,t),"undefined"==typeof window)return t.resolve(null);var n=O(e),r=n.url,o=n.dataAttributes,a=o["data-namespace"]||"paypal",i=I(a);return function(e,t){var n=document.querySelector('script[src="'.concat(e,'"]'));if(null===n)return null;var r=P(e,t),o=n.cloneNode();if(delete o.dataset.uidAuto,Object.keys(o.dataset).length!==Object.keys(r.dataset).length)return null;var a=!0;return Object.keys(o.dataset).forEach((function(e){o.dataset[e]!==r.dataset[e]&&(a=!1)})),a?n:null}(r,o)&&i?t.resolve(i):N({url:r,attributes:o},t).then((function(){var e=I(a);if(e)return e;throw new Error("The window.".concat(a," global variable is not available."))}))}function N(e,t){void 0===t&&(t=C()),R(e,t);var n=e.url,r=e.attributes;if("string"!=typeof n||0===n.length)throw new Error("Invalid url.");if(void 0!==r&&"object"!=typeof r)throw new Error("Expected attributes to be an object.");return new t((function(e,t){if("undefined"==typeof window)return e();!function(e){var t=e.url,n=e.attributes,r=e.onSuccess,o=e.onError,a=P(t,n);a.onerror=o,a.onload=r,document.head.insertBefore(a,document.head.firstElementChild)}({url:n,attributes:r,onSuccess:function(){return e()},onError:function(){var e=new Error('The script "'.concat(n,'" failed to load.'));return window.fetch?fetch(n).then((function(n){return 200===n.status&&t(e),n.text()})).then((function(e){var n=function(e){var t=e.split("/* Original Error:")[1];return t?t.replace(/\n/g,"").replace("*/","").trim():e}(e);t(new Error(n))})).catch((function(e){t(e)})):t(e)}})}))}function C(){if("undefined"==typeof Promise)throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function I(e){return window[e]}function R(e,t){if("object"!=typeof e||null===e)throw new Error("Expected an options object.");if(void 0!==t&&"function"!=typeof t)throw new Error("Expected PromisePonyfill to be a function.")}S.displayName="PayPalButtons";var T=function(e){var t=e.className,n=void 0===t?"":t,r=e.children,o=p(e,["className","children"]),a=w()[0],u=a.isResolved,s=a.options,l=Object(i.useRef)(null),y=Object(i.useState)(!0),b=y[0],h=y[1],E=Object(i.useState)(null)[1];return Object(i.useEffect)((function(){if(!1!==u){var e=m(s[f]);if(void 0===e||void 0===e.Marks)return E((function(){throw new Error(v({reactComponentName:T.displayName,sdkComponentKey:"marks",sdkRequestedComponents:s.components,sdkDataNamespace:s[f]}))}));!function(e){var t=l.current;if(!t||!e.isEligible())return h(!1);t.firstChild&&t.removeChild(t.firstChild),e.render(t).catch((function(e){null!==t&&0!==t.children.length&&E((function(){throw new Error("Failed to render <PayPalMarks /> component. ".concat(e))}))}))}(e.Marks(d({},o)))}}),[u,o.fundingSource]),c.a.createElement(c.a.Fragment,null,b?c.a.createElement("div",{ref:l,className:n}):r)};T.displayName="PayPalMarks";var k=function(e){var t=e.className,n=void 0===t?"":t,r=e.forceReRender,o=void 0===r?[]:r,a=p(e,["className","forceReRender"]),u=w()[0],s=u.isResolved,l=u.options,b=Object(i.useRef)(null),h=Object(i.useRef)(null),E=Object(i.useState)(null)[1];return Object(i.useEffect)((function(){if(!1!==s){var e=m(l[f]);if(void 0===e||void 0===e.Messages)return E((function(){throw new Error(v({reactComponentName:k.displayName,sdkComponentKey:"messages",sdkRequestedComponents:l.components,sdkDataNamespace:l[f]}))}));h.current=e.Messages(d({},a)),h.current.render(b.current).catch((function(e){null!==b.current&&0!==b.current.children.length&&E((function(){throw new Error("Failed to render <PayPalMessages /> component. ".concat(e))}))}))}}),y([s],o,!0)),c.a.createElement("div",{ref:b,className:n})};k.displayName="PayPalMessages";var D=function(e){var t,n=e.options,a=void 0===n?{"client-id":"test"}:n,f=e.children,p=e.deferLoading,y=void 0!==p&&p,m=Object(i.useReducer)(h,{options:d(d({},a),(t={},t[u]="".concat(b(a)),t[s]=l,t)),loadingStatus:y?r.INITIAL:r.PENDING}),v=m[0],g=m[1];return Object(i.useEffect)((function(){if(!1===y&&v.loadingStatus===r.INITIAL)return g({type:o.LOADING_STATUS,value:r.PENDING});if(v.loadingStatus===r.PENDING){var e=!0;return A(v.options).then((function(){e&&g({type:o.LOADING_STATUS,value:r.RESOLVED})})).catch((function(t){console.error("".concat("Failed to load the PayPal JS SDK script."," ").concat(t)),e&&g({type:o.LOADING_STATUS,value:r.REJECTED})})),function(){e=!1}}}),[v.options,y,v.loadingStatus]),c.a.createElement(E.Provider,{value:d(d({},v),{dispatch:g})},f)}},Gbdu:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var o,a="https://js.stripe.com/v3",i=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,c="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",u=null,s=function(e){return null!==u?u:u=new Promise((function(t,n){if("undefined"!=typeof window)if(window.Stripe&&e&&console.warn(c),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(a,'"]')),t=0;t<e.length;t++){var n=e[t];if(i.test(n.src))return n}return null}();r&&e?console.warn(c):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(a).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(e){return void n(e)}else t(null)}))},l=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.32.0",startTime:t})}(r,n),r},f=!1,d=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];f=!0;var r=Date.now();return s(o).then((function(e){return l(e,t,r)}))};d.setLoadParameters=function(e){if(f)throw new Error("You cannot change load parameters after calling loadStripe");o=function(e){var t="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e),"\n");if(null===e||"object"!==r(e))throw new Error(t);if(1===Object.keys(e).length&&"boolean"==typeof e.advancedFraudSignals)return e;throw new Error(t)}(e)},t.loadStripe=d},"g/7I":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("r0ML"),o=n("gIsG");function a(e,t,n){void 0===t&&(t=0),void 0===n&&(n=[]);var a=Object(o.a)(e,t),i=a[0],c=a[1],u=a[2];return Object(r.useEffect)(u,n),[i,c]}},t1cW:function(e,t,n){!function(e,t){"use strict";function n(){}function r(){}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,r.resetWarningCache=n;var o=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){e.exports=function(){function e(e,t,n,r,o,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:n};return o.PropTypes=o,o}()}));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},d=function(e){return null!==e&&"object"===c(e)},p=function(e,t,n){return d(e)?Object.keys(e).reduce((function(r,o){var a=!d(t)||!function e(t,n){if(!d(t)||!d(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o="[object Object]"===Object.prototype.toString.call(t);if(o!==("[object Object]"===Object.prototype.toString.call(n)))return!1;if(!o&&!r)return t===n;var a=Object.keys(t),i=Object.keys(n);if(a.length!==i.length)return!1;for(var c={},u=0;u<a.length;u+=1)c[a[u]]=!0;for(var s=0;s<i.length;s+=1)c[i[s]]=!0;var l=Object.keys(c);if(l.length!==a.length)return!1;var f=t,p=n;return l.every((function(t){return e(f[t],p[t])}))}(e[o],t[o]);return n.includes(o)?(a&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),r):a?i(i({},r||{}),{},u({},o,e[o])):r}),null):null},y=function(e){if(null===e||d(t=e)&&"function"==typeof t.elements&&"function"==typeof t.createToken&&"function"==typeof t.createPaymentMethod&&"function"==typeof t.confirmCardPayment)return e;var t;throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},m=function(e){if(function(e){return d(e)&&"function"==typeof e.then}(e))return{tag:"async",stripePromise:Promise.resolve(e).then(y)};var t=y(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},v=t.createContext(null);v.displayName="ElementsContext";var b=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useMemo((function(){return m(n)}),[n]),i=s(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(r):null}})),2),c=i[0],u=i[1];t.useEffect((function(){var e=!0,t=function(e){u((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==a.tag||c.stripe?"sync"!==a.tag||c.stripe||t(a.stripe):a.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[a,c,r]);var l=f(n);t.useEffect((function(){null!==l&&l!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[l,n]);var d=f(r);return t.useEffect((function(){if(c.elements){var e=p(r,d,["clientSecret","fonts"]);e&&c.elements.update(e)}}),[r,d,c.elements]),t.useEffect((function(){var e=c.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.9.0"}),e.registerAppInfo({name:"react-stripe-js",version:"1.9.0",url:"https://stripe.com/docs/stripe-js/react"}))}),[c.stripe]),t.createElement(v.Provider,{value:c},o)};b.propTypes={stripe:o.any,options:o.object};var h=function(e){return function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e}(t.useContext(v),e)},E=function(e){return(0,e.children)(h("mounts <ElementsConsumer>"))};E.propTypes={children:o.func.isRequired};var g=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},w=function(){},S=function(e,n){var r,a="".concat((r=e).charAt(0).toUpperCase()+r.slice(1),"Element"),i=n?function(e){h("mounts <".concat(a,">"));var n=e.id,r=e.className;return t.createElement("div",{id:n,className:r})}:function(n){var r=n.id,o=n.className,i=n.options,c=void 0===i?{}:i,u=n.onBlur,s=void 0===u?w:u,l=n.onFocus,d=void 0===l?w:l,y=n.onReady,m=void 0===y?w:y,v=n.onChange,b=void 0===v?w:v,E=n.onEscape,S=void 0===E?w:E,O=n.onClick,j=void 0===O?w:O,P=n.onLoadError,A=void 0===P?w:P,N=h("mounts <".concat(a,">")).elements,C=t.useRef(null),I=t.useRef(null),R=g(m),T=g(s),k=g(d),D=g(j),_=g(b),x=g(S),B=g(A);t.useLayoutEffect((function(){if(null==C.current&&N&&null!=I.current){var t=N.create(e,c);C.current=t,t.mount(I.current),t.on("ready",(function(){return R(t)})),t.on("change",_),t.on("blur",T),t.on("focus",k),t.on("escape",x),t.on("loaderror",B),t.on("click",D)}}));var L=f(c);return t.useEffect((function(){if(C.current){var e=p(c,L,["paymentRequest"]);e&&C.current.update(e)}}),[c,L]),t.useLayoutEffect((function(){return function(){C.current&&(C.current.destroy(),C.current=null)}}),[]),t.createElement("div",{id:r,className:o,ref:I})};return i.propTypes={id:o.string,className:o.string,onChange:o.func,onBlur:o.func,onFocus:o.func,onReady:o.func,onClick:o.func,onLoadError:o.func,options:o.object},i.displayName=a,i.__elementType=e,i},O="undefined"==typeof window,j=S("auBankAccount",O),P=S("card",O),A=S("cardNumber",O),N=S("cardExpiry",O),C=S("cardCvc",O),I=S("fpxBank",O),R=S("iban",O),T=S("idealBank",O),k=S("p24Bank",O),D=S("epsBank",O),_=S("payment",O),x=S("paymentRequestButton",O),B=S("linkAuthentication",O),L=S("shippingAddress",O),F=S("affirmMessage",O),M=S("afterpayClearpayMessage",O);e.AffirmMessageElement=F,e.AfterpayClearpayMessageElement=M,e.AuBankAccountElement=j,e.CardCvcElement=C,e.CardElement=P,e.CardExpiryElement=N,e.CardNumberElement=A,e.Elements=b,e.ElementsConsumer=E,e.EpsBankElement=D,e.FpxBankElement=I,e.IbanElement=R,e.IdealBankElement=T,e.LinkAuthenticationElement=B,e.P24BankElement=k,e.PaymentElement=_,e.PaymentRequestButtonElement=x,e.ShippingAddressElement=L,e.useElements=function(){return h("calls useElements()").elements},e.useStripe=function(){return h("calls useStripe()").stripe},Object.defineProperty(e,"__esModule",{value:!0})}(t,n("r0ML"))},unSe:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));const r="function"==typeof btoa,o="function"==typeof Buffer,a=("function"==typeof TextDecoder&&new TextDecoder,"function"==typeof TextEncoder?new TextEncoder:void 0),i=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),c=((e=>{let t={};e.forEach((e,n)=>t[e]=n)})(i),String.fromCharCode.bind(String)),u=("function"==typeof Uint8Array.from&&Uint8Array.from.bind(Uint8Array),e=>e.replace(/=/g,"").replace(/[+\/]/g,e=>"+"==e?"-":"_")),s=e=>{let t,n,r,o,a="";const c=e.length%3;for(let c=0;c<e.length;){if((n=e.charCodeAt(c++))>255||(r=e.charCodeAt(c++))>255||(o=e.charCodeAt(c++))>255)throw new TypeError("invalid character found");t=n<<16|r<<8|o,a+=i[t>>18&63]+i[t>>12&63]+i[t>>6&63]+i[63&t]}return c?a.slice(0,c-3)+"===".substring(c):a},l=r?e=>btoa(e):o?e=>Buffer.from(e,"binary").toString("base64"):s,f=o?e=>Buffer.from(e).toString("base64"):e=>{let t=[];for(let n=0,r=e.length;n<r;n+=4096)t.push(c.apply(null,e.subarray(n,n+4096)));return l(t.join(""))},d=e=>{if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?c(192|t>>>6)+c(128|63&t):c(224|t>>>12&15)+c(128|t>>>6&63)+c(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return c(240|t>>>18&7)+c(128|t>>>12&63)+c(128|t>>>6&63)+c(128|63&t)},p=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,y=e=>e.replace(p,d),m=o?e=>Buffer.from(e,"utf8").toString("base64"):a?e=>f(a.encode(e)):e=>l(y(e)),v=(e,t=!1)=>t?u(m(e)):m(e)}}]);
//# sourceMappingURL=11.a53e6efd50839f2a22cc.js.map