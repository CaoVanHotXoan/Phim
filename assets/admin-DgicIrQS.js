import"./modulepreload-polyfill-B5Qt9EMX.js";import"./api-DqQcCig4.js";function lt(e,t){return function(){return e.apply(t,arguments)}}const{toString:Kt}=Object.prototype,{getPrototypeOf:be}=Object,{iterator:ye,toStringTag:ct}=Symbol,xe=(e=>t=>{const n=Kt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),_=e=>(e=e.toLowerCase(),t=>xe(t)===e),we=e=>t=>typeof t===e,{isArray:te}=Array,ee=we("undefined");function re(e){return e!==null&&!ee(e)&&e.constructor!==null&&!ee(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const dt=_("ArrayBuffer");function Vt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&dt(e.buffer),t}const zt=we("string"),A=we("function"),ut=we("number"),ie=e=>e!==null&&typeof e=="object",Xt=e=>e===!0||e===!1,he=e=>{if(xe(e)!=="object")return!1;const t=be(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(ct in e)&&!(ye in e)},Jt=e=>{if(!ie(e)||re(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Wt=_("Date"),Qt=_("File"),Yt=e=>!!(e&&typeof e.uri<"u"),Zt=e=>e&&typeof e.getParts<"u",en=_("Blob"),tn=_("FileList"),nn=e=>ie(e)&&A(e.pipe);function sn(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Ue=sn(),qe=typeof Ue.FormData<"u"?Ue.FormData:void 0,on=e=>{if(!e)return!1;if(qe&&e instanceof qe)return!0;const t=be(e);if(!t||t===Object.prototype||!A(e.append))return!1;const n=xe(e);return n==="formdata"||n==="object"&&A(e.toString)&&e.toString()==="[object FormData]"},an=_("URLSearchParams"),[rn,ln,cn,dn]=["ReadableStream","Request","Response","Headers"].map(_),un=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function le(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let s,o;if(typeof e!="object"&&(e=[e]),te(e))for(s=0,o=e.length;s<o;s++)t.call(null,e[s],s,e);else{if(re(e))return;const a=n?Object.getOwnPropertyNames(e):Object.keys(e),r=a.length;let l;for(s=0;s<r;s++)l=a[s],t.call(null,e[l],l,e)}}function pt(e,t){if(re(e))return null;t=t.toLowerCase();const n=Object.keys(e);let s=n.length,o;for(;s-- >0;)if(o=n[s],t===o.toLowerCase())return o;return null}const K=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ht=e=>!ee(e)&&e!==K;function Re(){const{caseless:e,skipUndefined:t}=ht(this)&&this||{},n={},s=(o,a)=>{if(a==="__proto__"||a==="constructor"||a==="prototype")return;const r=e&&pt(n,a)||a;he(n[r])&&he(o)?n[r]=Re(n[r],o):he(o)?n[r]=Re({},o):te(o)?n[r]=o.slice():(!t||!ee(o))&&(n[r]=o)};for(let o=0,a=arguments.length;o<a;o++)arguments[o]&&le(arguments[o],s);return n}const pn=(e,t,n,{allOwnKeys:s}={})=>(le(t,(o,a)=>{n&&A(o)?Object.defineProperty(e,a,{value:lt(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,a,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:s}),e),hn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),fn=(e,t,n,s)=>{e.prototype=Object.create(t.prototype,s),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},mn=(e,t,n,s)=>{let o,a,r;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),a=o.length;a-- >0;)r=o[a],(!s||s(r,e,t))&&!l[r]&&(t[r]=e[r],l[r]=!0);e=n!==!1&&be(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},gn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const s=e.indexOf(t,n);return s!==-1&&s===n},bn=e=>{if(!e)return null;if(te(e))return e;let t=e.length;if(!ut(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},yn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&be(Uint8Array)),xn=(e,t)=>{const s=(e&&e[ye]).call(e);let o;for(;(o=s.next())&&!o.done;){const a=o.value;t.call(e,a[0],a[1])}},wn=(e,t)=>{let n;const s=[];for(;(n=e.exec(t))!==null;)s.push(n);return s},vn=_("HTMLFormElement"),Tn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,o){return s.toUpperCase()+o}),Ke=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),En=_("RegExp"),ft=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),s={};le(n,(o,a)=>{let r;(r=t(o,a,e))!==!1&&(s[a]=r||o)}),Object.defineProperties(e,s)},Sn=e=>{ft(e,(t,n)=>{if(A(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=e[n];if(A(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Mn=(e,t)=>{const n={},s=o=>{o.forEach(a=>{n[a]=!0})};return te(e)?s(e):s(String(e).split(t)),n},Ln=()=>{},$n=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Rn(e){return!!(e&&A(e.append)&&e[ct]==="FormData"&&e[ye])}const Pn=e=>{const t=new Array(10),n=(s,o)=>{if(ie(s)){if(t.indexOf(s)>=0)return;if(re(s))return s;if(!("toJSON"in s)){t[o]=s;const a=te(s)?[]:{};return le(s,(r,l)=>{const h=n(r,o+1);!ee(h)&&(a[l]=h)}),t[o]=void 0,a}}return s};return n(e,0)},kn=_("AsyncFunction"),An=e=>e&&(ie(e)||A(e))&&A(e.then)&&A(e.catch),mt=((e,t)=>e?setImmediate:t?((n,s)=>(K.addEventListener("message",({source:o,data:a})=>{o===K&&a===n&&s.length&&s.shift()()},!1),o=>{s.push(o),K.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",A(K.postMessage)),On=typeof queueMicrotask<"u"?queueMicrotask.bind(K):typeof process<"u"&&process.nextTick||mt,Dn=e=>e!=null&&A(e[ye]),i={isArray:te,isArrayBuffer:dt,isBuffer:re,isFormData:on,isArrayBufferView:Vt,isString:zt,isNumber:ut,isBoolean:Xt,isObject:ie,isPlainObject:he,isEmptyObject:Jt,isReadableStream:rn,isRequest:ln,isResponse:cn,isHeaders:dn,isUndefined:ee,isDate:Wt,isFile:Qt,isReactNativeBlob:Yt,isReactNative:Zt,isBlob:en,isRegExp:En,isFunction:A,isStream:nn,isURLSearchParams:an,isTypedArray:yn,isFileList:tn,forEach:le,merge:Re,extend:pn,trim:un,stripBOM:hn,inherits:fn,toFlatObject:mn,kindOf:xe,kindOfTest:_,endsWith:gn,toArray:bn,forEachEntry:xn,matchAll:wn,isHTMLForm:vn,hasOwnProperty:Ke,hasOwnProp:Ke,reduceDescriptors:ft,freezeMethods:Sn,toObjectSet:Mn,toCamelCase:Tn,noop:Ln,toFiniteNumber:$n,findKey:pt,global:K,isContextDefined:ht,isSpecCompliantForm:Rn,toJSONObject:Pn,isAsyncFn:kn,isThenable:An,setImmediate:mt,asap:On,isIterable:Dn};let y=class gt extends Error{static from(t,n,s,o,a,r){const l=new gt(t.message,n||t.code,s,o,a);return l.cause=t,l.name=t.name,t.status!=null&&l.status==null&&(l.status=t.status),r&&Object.assign(l,r),l}constructor(t,n,s,o,a){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),s&&(this.config=s),o&&(this.request=o),a&&(this.response=a,this.status=a.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i.toJSONObject(this.config),code:this.code,status:this.status}}};y.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";y.ERR_BAD_OPTION="ERR_BAD_OPTION";y.ECONNABORTED="ECONNABORTED";y.ETIMEDOUT="ETIMEDOUT";y.ERR_NETWORK="ERR_NETWORK";y.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";y.ERR_DEPRECATED="ERR_DEPRECATED";y.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";y.ERR_BAD_REQUEST="ERR_BAD_REQUEST";y.ERR_CANCELED="ERR_CANCELED";y.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";y.ERR_INVALID_URL="ERR_INVALID_URL";y.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Cn=null;function Pe(e){return i.isPlainObject(e)||i.isArray(e)}function bt(e){return i.endsWith(e,"[]")?e.slice(0,-2):e}function Se(e,t,n){return e?e.concat(t).map(function(o,a){return o=bt(o),!n&&a?"["+o+"]":o}).join(n?".":""):t}function Nn(e){return i.isArray(e)&&!e.some(Pe)}const Fn=i.toFlatObject(i,{},null,function(t){return/^is[A-Z]/.test(t)});function ve(e,t,n){if(!i.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=i.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,T){return!i.isUndefined(T[p])});const s=n.metaTokens,o=n.visitor||b,a=n.dots,r=n.indexes,l=n.Blob||typeof Blob<"u"&&Blob,h=n.maxDepth===void 0?100:n.maxDepth,u=l&&i.isSpecCompliantForm(t);if(!i.isFunction(o))throw new TypeError("visitor must be a function");function d(f){if(f===null)return"";if(i.isDate(f))return f.toISOString();if(i.isBoolean(f))return f.toString();if(!u&&i.isBlob(f))throw new y("Blob is not supported. Use a Buffer instead.");return i.isArrayBuffer(f)||i.isTypedArray(f)?u&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function b(f,p,T){let M=f;if(i.isReactNative(t)&&i.isReactNativeBlob(f))return t.append(Se(T,p,a),d(f)),!1;if(f&&!T&&typeof f=="object"){if(i.endsWith(p,"{}"))p=s?p:p.slice(0,-2),f=JSON.stringify(f);else if(i.isArray(f)&&Nn(f)||(i.isFileList(f)||i.endsWith(p,"[]"))&&(M=i.toArray(f)))return p=bt(p),M.forEach(function(E,S){!(i.isUndefined(E)||E===null)&&t.append(r===!0?Se([p],S,a):r===null?p:p+"[]",d(E))}),!1}return Pe(f)?!0:(t.append(Se(T,p,a),d(f)),!1)}const v=[],x=Object.assign(Fn,{defaultVisitor:b,convertValue:d,isVisitable:Pe});function m(f,p,T=0){if(!i.isUndefined(f)){if(T>h)throw new y("Object is too deeply nested ("+T+" levels). Max depth: "+h,y.ERR_FORM_DATA_DEPTH_EXCEEDED);if(v.indexOf(f)!==-1)throw Error("Circular reference detected in "+p.join("."));v.push(f),i.forEach(f,function(w,E){(!(i.isUndefined(w)||w===null)&&o.call(t,w,i.isString(E)?E.trim():E,p,x))===!0&&m(w,p?p.concat(E):[E],T+1)}),v.pop()}}if(!i.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Ve(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(s){return t[s]})}function De(e,t){this._pairs=[],e&&ve(e,this,t)}const yt=De.prototype;yt.append=function(t,n){this._pairs.push([t,n])};yt.toString=function(t){const n=t?function(s){return t.call(this,s,Ve)}:Ve;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function In(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function xt(e,t,n){if(!t)return e;const s=n&&n.encode||In,o=i.isFunction(n)?{serialize:n}:n,a=o&&o.serialize;let r;if(a?r=a(t,o):r=i.isURLSearchParams(t)?t.toString():new De(t,o).toString(s),r){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+r}return e}class ze{constructor(){this.handlers=[]}use(t,n,s){return this.handlers.push({fulfilled:t,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){i.forEach(this.handlers,function(s){s!==null&&t(s)})}}const Ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Bn=typeof URLSearchParams<"u"?URLSearchParams:De,_n=typeof FormData<"u"?FormData:null,jn=typeof Blob<"u"?Blob:null,Hn={isBrowser:!0,classes:{URLSearchParams:Bn,FormData:_n,Blob:jn},protocols:["http","https","file","blob","url","data"]},Ne=typeof window<"u"&&typeof document<"u",ke=typeof navigator=="object"&&navigator||void 0,Gn=Ne&&(!ke||["ReactNative","NativeScript","NS"].indexOf(ke.product)<0),Un=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",qn=Ne&&window.location.href||"http://localhost",Kn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ne,hasStandardBrowserEnv:Gn,hasStandardBrowserWebWorkerEnv:Un,navigator:ke,origin:qn},Symbol.toStringTag,{value:"Module"})),R={...Kn,...Hn};function Vn(e,t){return ve(e,new R.classes.URLSearchParams,{visitor:function(n,s,o,a){return R.isNode&&i.isBuffer(n)?(this.append(s,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...t})}function zn(e){return i.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Xn(e){const t={},n=Object.keys(e);let s;const o=n.length;let a;for(s=0;s<o;s++)a=n[s],t[a]=e[a];return t}function wt(e){function t(n,s,o,a){let r=n[a++];if(r==="__proto__")return!0;const l=Number.isFinite(+r),h=a>=n.length;return r=!r&&i.isArray(o)?o.length:r,h?(i.hasOwnProp(o,r)?o[r]=i.isArray(o[r])?o[r].concat(s):[o[r],s]:o[r]=s,!l):((!o[r]||!i.isObject(o[r]))&&(o[r]=[]),t(n,s,o[r],a)&&i.isArray(o[r])&&(o[r]=Xn(o[r])),!l)}if(i.isFormData(e)&&i.isFunction(e.entries)){const n={};return i.forEachEntry(e,(s,o)=>{t(zn(s),o,n,0)}),n}return null}const Y=(e,t)=>e!=null&&i.hasOwnProp(e,t)?e[t]:void 0;function Jn(e,t,n){if(i.isString(e))try{return(t||JSON.parse)(e),i.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(e)}const ce={transitional:Ce,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const s=n.getContentType()||"",o=s.indexOf("application/json")>-1,a=i.isObject(t);if(a&&i.isHTMLForm(t)&&(t=new FormData(t)),i.isFormData(t))return o?JSON.stringify(wt(t)):t;if(i.isArrayBuffer(t)||i.isBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)||i.isReadableStream(t))return t;if(i.isArrayBufferView(t))return t.buffer;if(i.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){const h=Y(this,"formSerializer");if(s.indexOf("application/x-www-form-urlencoded")>-1)return Vn(t,h).toString();if((l=i.isFileList(t))||s.indexOf("multipart/form-data")>-1){const u=Y(this,"env"),d=u&&u.FormData;return ve(l?{"files[]":t}:t,d&&new d,h)}}return a||o?(n.setContentType("application/json",!1),Jn(t)):t}],transformResponse:[function(t){const n=Y(this,"transitional")||ce.transitional,s=n&&n.forcedJSONParsing,o=Y(this,"responseType"),a=o==="json";if(i.isResponse(t)||i.isReadableStream(t))return t;if(t&&i.isString(t)&&(s&&!o||a)){const l=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(t,Y(this,"parseReviver"))}catch(h){if(l)throw h.name==="SyntaxError"?y.from(h,y.ERR_BAD_RESPONSE,this,null,Y(this,"response")):h}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};i.forEach(["delete","get","head","post","put","patch"],e=>{ce.headers[e]={}});const Wn=i.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qn=e=>{const t={};let n,s,o;return e&&e.split(`
`).forEach(function(r){o=r.indexOf(":"),n=r.substring(0,o).trim().toLowerCase(),s=r.substring(o+1).trim(),!(!n||t[n]&&Wn[n])&&(n==="set-cookie"?t[n]?t[n].push(s):t[n]=[s]:t[n]=t[n]?t[n]+", "+s:s)}),t},Xe=Symbol("internals"),Yn=/[^\x09\x20-\x7E\x80-\xFF]/g;function Zn(e){let t=0,n=e.length;for(;t<n;){const s=e.charCodeAt(t);if(s!==9&&s!==32)break;t+=1}for(;n>t;){const s=e.charCodeAt(n-1);if(s!==9&&s!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}function oe(e){return e&&String(e).trim().toLowerCase()}function es(e){return Zn(e.replace(Yn,""))}function fe(e){return e===!1||e==null?e:i.isArray(e)?e.map(fe):es(String(e))}function ts(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(e);)t[s[1]]=s[2];return t}const ns=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Me(e,t,n,s,o){if(i.isFunction(s))return s.call(this,t,n);if(o&&(t=n),!!i.isString(t)){if(i.isString(s))return t.indexOf(s)!==-1;if(i.isRegExp(s))return s.test(t)}}function ss(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,s)=>n.toUpperCase()+s)}function os(e,t){const n=i.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(e,s+n,{value:function(o,a,r){return this[s].call(this,t,o,a,r)},configurable:!0})})}let O=class{constructor(t){t&&this.set(t)}set(t,n,s){const o=this;function a(l,h,u){const d=oe(h);if(!d)throw new Error("header name must be a non-empty string");const b=i.findKey(o,d);(!b||o[b]===void 0||u===!0||u===void 0&&o[b]!==!1)&&(o[b||h]=fe(l))}const r=(l,h)=>i.forEach(l,(u,d)=>a(u,d,h));if(i.isPlainObject(t)||t instanceof this.constructor)r(t,n);else if(i.isString(t)&&(t=t.trim())&&!ns(t))r(Qn(t),n);else if(i.isObject(t)&&i.isIterable(t)){let l={},h,u;for(const d of t){if(!i.isArray(d))throw TypeError("Object iterator must return a key-value pair");l[u=d[0]]=(h=l[u])?i.isArray(h)?[...h,d[1]]:[h,d[1]]:d[1]}r(l,n)}else t!=null&&a(n,t,s);return this}get(t,n){if(t=oe(t),t){const s=i.findKey(this,t);if(s){const o=this[s];if(!n)return o;if(n===!0)return ts(o);if(i.isFunction(n))return n.call(this,o,s);if(i.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=oe(t),t){const s=i.findKey(this,t);return!!(s&&this[s]!==void 0&&(!n||Me(this,this[s],s,n)))}return!1}delete(t,n){const s=this;let o=!1;function a(r){if(r=oe(r),r){const l=i.findKey(s,r);l&&(!n||Me(s,s[l],l,n))&&(delete s[l],o=!0)}}return i.isArray(t)?t.forEach(a):a(t),o}clear(t){const n=Object.keys(this);let s=n.length,o=!1;for(;s--;){const a=n[s];(!t||Me(this,this[a],a,t,!0))&&(delete this[a],o=!0)}return o}normalize(t){const n=this,s={};return i.forEach(this,(o,a)=>{const r=i.findKey(s,a);if(r){n[r]=fe(o),delete n[a];return}const l=t?ss(a):String(a).trim();l!==a&&delete n[a],n[l]=fe(o),s[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return i.forEach(this,(s,o)=>{s!=null&&s!==!1&&(n[o]=t&&i.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const s=new this(t);return n.forEach(o=>s.set(o)),s}static accessor(t){const s=(this[Xe]=this[Xe]={accessors:{}}).accessors,o=this.prototype;function a(r){const l=oe(r);s[l]||(os(o,r),s[l]=!0)}return i.isArray(t)?t.forEach(a):a(t),this}};O.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);i.reduceDescriptors(O.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(s){this[n]=s}}});i.freezeMethods(O);function Le(e,t){const n=this||ce,s=t||n,o=O.from(s.headers);let a=s.data;return i.forEach(e,function(l){a=l.call(n,a,o.normalize(),t?t.status:void 0)}),o.normalize(),a}function vt(e){return!!(e&&e.__CANCEL__)}let de=class extends y{constructor(t,n,s){super(t??"canceled",y.ERR_CANCELED,n,s),this.name="CanceledError",this.__CANCEL__=!0}};function Tt(e,t,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function as(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function rs(e,t){e=e||10;const n=new Array(e),s=new Array(e);let o=0,a=0,r;return t=t!==void 0?t:1e3,function(h){const u=Date.now(),d=s[a];r||(r=u),n[o]=h,s[o]=u;let b=a,v=0;for(;b!==o;)v+=n[b++],b=b%e;if(o=(o+1)%e,o===a&&(a=(a+1)%e),u-r<t)return;const x=d&&u-d;return x?Math.round(v*1e3/x):void 0}}function is(e,t){let n=0,s=1e3/t,o,a;const r=(u,d=Date.now())=>{n=d,o=null,a&&(clearTimeout(a),a=null),e(...u)};return[(...u)=>{const d=Date.now(),b=d-n;b>=s?r(u,d):(o=u,a||(a=setTimeout(()=>{a=null,r(o)},s-b)))},()=>o&&r(o)]}const ge=(e,t,n=3)=>{let s=0;const o=rs(50,250);return is(a=>{const r=a.loaded,l=a.lengthComputable?a.total:void 0,h=l!=null?Math.min(r,l):r,u=Math.max(0,h-s),d=o(u);s=Math.max(s,h);const b={loaded:h,total:l,progress:l?h/l:void 0,bytes:u,rate:d||void 0,estimated:d&&l?(l-h)/d:void 0,event:a,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(b)},n)},Je=(e,t)=>{const n=e!=null;return[s=>t[0]({lengthComputable:n,total:e,loaded:s}),t[1]]},We=e=>(...t)=>i.asap(()=>e(...t)),ls=R.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,R.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(R.origin),R.navigator&&/(msie|trident)/i.test(R.navigator.userAgent)):()=>!0,cs=R.hasStandardBrowserEnv?{write(e,t,n,s,o,a,r){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];i.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),i.isString(s)&&l.push(`path=${s}`),i.isString(o)&&l.push(`domain=${o}`),a===!0&&l.push("secure"),i.isString(r)&&l.push(`SameSite=${r}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function ds(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function us(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Et(e,t,n){let s=!ds(t);return e&&(s||n===!1)?us(e,t):t}const Qe=e=>e instanceof O?{...e}:e;function X(e,t){t=t||{};const n={};function s(u,d,b,v){return i.isPlainObject(u)&&i.isPlainObject(d)?i.merge.call({caseless:v},u,d):i.isPlainObject(d)?i.merge({},d):i.isArray(d)?d.slice():d}function o(u,d,b,v){if(i.isUndefined(d)){if(!i.isUndefined(u))return s(void 0,u,b,v)}else return s(u,d,b,v)}function a(u,d){if(!i.isUndefined(d))return s(void 0,d)}function r(u,d){if(i.isUndefined(d)){if(!i.isUndefined(u))return s(void 0,u)}else return s(void 0,d)}function l(u,d,b){if(i.hasOwnProp(t,b))return s(u,d);if(i.hasOwnProp(e,b))return s(void 0,u)}const h={url:a,method:a,data:a,baseURL:r,transformRequest:r,transformResponse:r,paramsSerializer:r,timeout:r,timeoutMessage:r,withCredentials:r,withXSRFToken:r,adapter:r,responseType:r,xsrfCookieName:r,xsrfHeaderName:r,onUploadProgress:r,onDownloadProgress:r,decompress:r,maxContentLength:r,maxBodyLength:r,beforeRedirect:r,transport:r,httpAgent:r,httpsAgent:r,cancelToken:r,socketPath:r,responseEncoding:r,validateStatus:l,headers:(u,d,b)=>o(Qe(u),Qe(d),b,!0)};return i.forEach(Object.keys({...e,...t}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const b=i.hasOwnProp(h,d)?h[d]:o,v=i.hasOwnProp(e,d)?e[d]:void 0,x=i.hasOwnProp(t,d)?t[d]:void 0,m=b(v,x,d);i.isUndefined(m)&&b!==l||(n[d]=m)}),n}const St=e=>{const t=X({},e);let{data:n,withXSRFToken:s,xsrfHeaderName:o,xsrfCookieName:a,headers:r,auth:l}=t;if(t.headers=r=O.from(r),t.url=xt(Et(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&r.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),i.isFormData(n)){if(R.hasStandardBrowserEnv||R.hasStandardBrowserWebWorkerEnv)r.setContentType(void 0);else if(i.isFunction(n.getHeaders)){const h=n.getHeaders(),u=["content-type","content-length"];Object.entries(h).forEach(([d,b])=>{u.includes(d.toLowerCase())&&r.set(d,b)})}}if(R.hasStandardBrowserEnv&&(i.isFunction(s)&&(s=s(t)),s===!0||s==null&&ls(t.url))){const u=o&&a&&cs.read(a);u&&r.set(o,u)}return t},ps=typeof XMLHttpRequest<"u",hs=ps&&function(e){return new Promise(function(n,s){const o=St(e);let a=o.data;const r=O.from(o.headers).normalize();let{responseType:l,onUploadProgress:h,onDownloadProgress:u}=o,d,b,v,x,m;function f(){x&&x(),m&&m(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let p=new XMLHttpRequest;p.open(o.method.toUpperCase(),o.url,!0),p.timeout=o.timeout;function T(){if(!p)return;const w=O.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),S={data:!l||l==="text"||l==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:w,config:e,request:p};Tt(function(L){n(L),f()},function(L){s(L),f()},S),p=null}"onloadend"in p?p.onloadend=T:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(T)},p.onabort=function(){p&&(s(new y("Request aborted",y.ECONNABORTED,e,p)),p=null)},p.onerror=function(E){const S=E&&E.message?E.message:"Network Error",N=new y(S,y.ERR_NETWORK,e,p);N.event=E||null,s(N),p=null},p.ontimeout=function(){let E=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const S=o.transitional||Ce;o.timeoutErrorMessage&&(E=o.timeoutErrorMessage),s(new y(E,S.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,p)),p=null},a===void 0&&r.setContentType(null),"setRequestHeader"in p&&i.forEach(r.toJSON(),function(E,S){p.setRequestHeader(S,E)}),i.isUndefined(o.withCredentials)||(p.withCredentials=!!o.withCredentials),l&&l!=="json"&&(p.responseType=o.responseType),u&&([v,m]=ge(u,!0),p.addEventListener("progress",v)),h&&p.upload&&([b,x]=ge(h),p.upload.addEventListener("progress",b),p.upload.addEventListener("loadend",x)),(o.cancelToken||o.signal)&&(d=w=>{p&&(s(!w||w.type?new de(null,e,p):w),p.abort(),p=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const M=as(o.url);if(M&&R.protocols.indexOf(M)===-1){s(new y("Unsupported protocol "+M+":",y.ERR_BAD_REQUEST,e));return}p.send(a||null)})},fs=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let s=new AbortController,o;const a=function(u){if(!o){o=!0,l();const d=u instanceof Error?u:this.reason;s.abort(d instanceof y?d:new de(d instanceof Error?d.message:d))}};let r=t&&setTimeout(()=>{r=null,a(new y(`timeout of ${t}ms exceeded`,y.ETIMEDOUT))},t);const l=()=>{e&&(r&&clearTimeout(r),r=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(a):u.removeEventListener("abort",a)}),e=null)};e.forEach(u=>u.addEventListener("abort",a));const{signal:h}=s;return h.unsubscribe=()=>i.asap(l),h}},ms=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let s=0,o;for(;s<n;)o=s+t,yield e.slice(s,o),s=o},gs=async function*(e,t){for await(const n of bs(e))yield*ms(n,t)},bs=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:s}=await t.read();if(n)break;yield s}}finally{await t.cancel()}},Ye=(e,t,n,s)=>{const o=gs(e,t);let a=0,r,l=h=>{r||(r=!0,s&&s(h))};return new ReadableStream({async pull(h){try{const{done:u,value:d}=await o.next();if(u){l(),h.close();return}let b=d.byteLength;if(n){let v=a+=b;n(v)}h.enqueue(new Uint8Array(d))}catch(u){throw l(u),u}},cancel(h){return l(h),o.return()}},{highWaterMark:2})},Ze=64*1024,{isFunction:pe}=i,ys=(({Request:e,Response:t})=>({Request:e,Response:t}))(i.global),{ReadableStream:et,TextEncoder:tt}=i.global,nt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},xs=e=>{e=i.merge.call({skipUndefined:!0},ys,e);const{fetch:t,Request:n,Response:s}=e,o=t?pe(t):typeof fetch=="function",a=pe(n),r=pe(s);if(!o)return!1;const l=o&&pe(et),h=o&&(typeof tt=="function"?(m=>f=>m.encode(f))(new tt):async m=>new Uint8Array(await new n(m).arrayBuffer())),u=a&&l&&nt(()=>{let m=!1;const f=new n(R.origin,{body:new et,method:"POST",get duplex(){return m=!0,"half"}}),p=f.headers.has("Content-Type");return f.body!=null&&f.body.cancel(),m&&!p}),d=r&&l&&nt(()=>i.isReadableStream(new s("").body)),b={stream:d&&(m=>m.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!b[m]&&(b[m]=(f,p)=>{let T=f&&f[m];if(T)return T.call(f);throw new y(`Response type '${m}' is not supported`,y.ERR_NOT_SUPPORT,p)})});const v=async m=>{if(m==null)return 0;if(i.isBlob(m))return m.size;if(i.isSpecCompliantForm(m))return(await new n(R.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(i.isArrayBufferView(m)||i.isArrayBuffer(m))return m.byteLength;if(i.isURLSearchParams(m)&&(m=m+""),i.isString(m))return(await h(m)).byteLength},x=async(m,f)=>{const p=i.toFiniteNumber(m.getContentLength());return p??v(f)};return async m=>{let{url:f,method:p,data:T,signal:M,cancelToken:w,timeout:E,onDownloadProgress:S,onUploadProgress:N,responseType:L,headers:P,withCredentials:U="same-origin",fetchOptions:ne}=St(m),J=t||fetch;L=L?(L+"").toLowerCase():"text";let W=fs([M,w&&w.toAbortSignal()],E),se=null;const q=W&&W.unsubscribe&&(()=>{W.unsubscribe()});let _e;try{if(N&&u&&p!=="get"&&p!=="head"&&(_e=await x(P,T))!==0){let F=new n(f,{method:"POST",body:T,duplex:"half"}),Q;if(i.isFormData(T)&&(Q=F.headers.get("content-type"))&&P.setContentType(Q),F.body){const[Ee,ue]=Je(_e,ge(We(N)));T=Ye(F.body,Ze,Ee,ue)}}i.isString(U)||(U=U?"include":"omit");const k=a&&"credentials"in n.prototype;if(i.isFormData(T)){const F=P.getContentType();F&&/^multipart\/form-data/i.test(F)&&!/boundary=/i.test(F)&&P.delete("content-type")}const je={...ne,signal:W,method:p.toUpperCase(),headers:P.normalize().toJSON(),body:T,duplex:"half",credentials:k?U:void 0};se=a&&new n(f,je);let G=await(a?J(se,ne):J(f,je));const He=d&&(L==="stream"||L==="response");if(d&&(S||He&&q)){const F={};["status","statusText","headers"].forEach(Ge=>{F[Ge]=G[Ge]});const Q=i.toFiniteNumber(G.headers.get("content-length")),[Ee,ue]=S&&Je(Q,ge(We(S),!0))||[];G=new s(Ye(G.body,Ze,Ee,()=>{ue&&ue(),q&&q()}),F)}L=L||"text";let qt=await b[i.findKey(b,L)||"text"](G,m);return!He&&q&&q(),await new Promise((F,Q)=>{Tt(F,Q,{data:qt,headers:O.from(G.headers),status:G.status,statusText:G.statusText,config:m,request:se})})}catch(k){throw q&&q(),k&&k.name==="TypeError"&&/Load failed|fetch/i.test(k.message)?Object.assign(new y("Network Error",y.ERR_NETWORK,m,se,k&&k.response),{cause:k.cause||k}):y.from(k,k&&k.code,m,se,k&&k.response)}}},ws=new Map,Mt=e=>{let t=e&&e.env||{};const{fetch:n,Request:s,Response:o}=t,a=[s,o,n];let r=a.length,l=r,h,u,d=ws;for(;l--;)h=a[l],u=d.get(h),u===void 0&&d.set(h,u=l?new Map:xs(t)),d=u;return u};Mt();const Fe={http:Cn,xhr:hs,fetch:{get:Mt}};i.forEach(Fe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const st=e=>`- ${e}`,vs=e=>i.isFunction(e)||e===null||e===!1;function Ts(e,t){e=i.isArray(e)?e:[e];const{length:n}=e;let s,o;const a={};for(let r=0;r<n;r++){s=e[r];let l;if(o=s,!vs(s)&&(o=Fe[(l=String(s)).toLowerCase()],o===void 0))throw new y(`Unknown adapter '${l}'`);if(o&&(i.isFunction(o)||(o=o.get(t))))break;a[l||"#"+r]=o}if(!o){const r=Object.entries(a).map(([h,u])=>`adapter ${h} `+(u===!1?"is not supported by the environment":"is not available in the build"));let l=n?r.length>1?`since :
`+r.map(st).join(`
`):" "+st(r[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return o}const Lt={getAdapter:Ts,adapters:Fe};function $e(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new de(null,e)}function ot(e){return $e(e),e.headers=O.from(e.headers),e.data=Le.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Lt.getAdapter(e.adapter||ce.adapter,e)(e).then(function(s){return $e(e),s.data=Le.call(e,e.transformResponse,s),s.headers=O.from(s.headers),s},function(s){return vt(s)||($e(e),s&&s.response&&(s.response.data=Le.call(e,e.transformResponse,s.response),s.response.headers=O.from(s.response.headers))),Promise.reject(s)})}const $t="1.15.1",Te={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Te[e]=function(s){return typeof s===e||"a"+(t<1?"n ":" ")+e}});const at={};Te.transitional=function(t,n,s){function o(a,r){return"[Axios v"+$t+"] Transitional option '"+a+"'"+r+(s?". "+s:"")}return(a,r,l)=>{if(t===!1)throw new y(o(r," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!at[r]&&(at[r]=!0,console.warn(o(r," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,r,l):!0}};Te.spelling=function(t){return(n,s)=>(console.warn(`${s} is likely a misspelling of ${t}`),!0)};function Es(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const s=Object.keys(e);let o=s.length;for(;o-- >0;){const a=s[o],r=t[a];if(r){const l=e[a],h=l===void 0||r(l,a,e);if(h!==!0)throw new y("option "+a+" must be "+h,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+a,y.ERR_BAD_OPTION)}}const me={assertOptions:Es,validators:Te},I=me.validators;let z=class{constructor(t){this.defaults=t||{},this.interceptors={request:new ze,response:new ze}}async request(t,n){try{return await this._request(t,n)}catch(s){if(s instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const a=(()=>{if(!o.stack)return"";const r=o.stack.indexOf(`
`);return r===-1?"":o.stack.slice(r+1)})();try{if(!s.stack)s.stack=a;else if(a){const r=a.indexOf(`
`),l=r===-1?-1:a.indexOf(`
`,r+1),h=l===-1?"":a.slice(l+1);String(s.stack).endsWith(h)||(s.stack+=`
`+a)}}catch{}}throw s}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=X(this.defaults,n);const{transitional:s,paramsSerializer:o,headers:a}=n;s!==void 0&&me.assertOptions(s,{silentJSONParsing:I.transitional(I.boolean),forcedJSONParsing:I.transitional(I.boolean),clarifyTimeoutError:I.transitional(I.boolean),legacyInterceptorReqResOrdering:I.transitional(I.boolean)},!1),o!=null&&(i.isFunction(o)?n.paramsSerializer={serialize:o}:me.assertOptions(o,{encode:I.function,serialize:I.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),me.assertOptions(n,{baseUrl:I.spelling("baseURL"),withXsrfToken:I.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let r=a&&i.merge(a.common,a[n.method]);a&&i.forEach(["delete","get","head","post","put","patch","common"],m=>{delete a[m]}),n.headers=O.concat(r,a);const l=[];let h=!0;this.interceptors.request.forEach(function(f){if(typeof f.runWhen=="function"&&f.runWhen(n)===!1)return;h=h&&f.synchronous;const p=n.transitional||Ce;p&&p.legacyInterceptorReqResOrdering?l.unshift(f.fulfilled,f.rejected):l.push(f.fulfilled,f.rejected)});const u=[];this.interceptors.response.forEach(function(f){u.push(f.fulfilled,f.rejected)});let d,b=0,v;if(!h){const m=[ot.bind(this),void 0];for(m.unshift(...l),m.push(...u),v=m.length,d=Promise.resolve(n);b<v;)d=d.then(m[b++],m[b++]);return d}v=l.length;let x=n;for(;b<v;){const m=l[b++],f=l[b++];try{x=m(x)}catch(p){f.call(this,p);break}}try{d=ot.call(this,x)}catch(m){return Promise.reject(m)}for(b=0,v=u.length;b<v;)d=d.then(u[b++],u[b++]);return d}getUri(t){t=X(this.defaults,t);const n=Et(t.baseURL,t.url,t.allowAbsoluteUrls);return xt(n,t.params,t.paramsSerializer)}};i.forEach(["delete","get","head","options"],function(t){z.prototype[t]=function(n,s){return this.request(X(s||{},{method:t,url:n,data:(s||{}).data}))}});i.forEach(["post","put","patch"],function(t){function n(s){return function(a,r,l){return this.request(X(l||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:a,data:r}))}}z.prototype[t]=n(),z.prototype[t+"Form"]=n(!0)});let Ss=class Rt{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const s=this;this.promise.then(o=>{if(!s._listeners)return;let a=s._listeners.length;for(;a-- >0;)s._listeners[a](o);s._listeners=null}),this.promise.then=o=>{let a;const r=new Promise(l=>{s.subscribe(l),a=l}).then(o);return r.cancel=function(){s.unsubscribe(a)},r},t(function(a,r,l){s.reason||(s.reason=new de(a,r,l),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=s=>{t.abort(s)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Rt(function(o){t=o}),cancel:t}}};function Ms(e){return function(n){return e.apply(null,n)}}function Ls(e){return i.isObject(e)&&e.isAxiosError===!0}const Ae={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ae).forEach(([e,t])=>{Ae[t]=e});function Pt(e){const t=new z(e),n=lt(z.prototype.request,t);return i.extend(n,z.prototype,t,{allOwnKeys:!0}),i.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Pt(X(e,o))},n}const g=Pt(ce);g.Axios=z;g.CanceledError=de;g.CancelToken=Ss;g.isCancel=vt;g.VERSION=$t;g.toFormData=ve;g.AxiosError=y;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=Ms;g.isAxiosError=Ls;g.mergeConfig=X;g.AxiosHeaders=O;g.formToJSON=e=>wt(i.isHTMLForm(e)?new FormData(e):e);g.getAdapter=Lt.getAdapter;g.HttpStatusCode=Ae;g.default=g;const{Axios:so,AxiosError:oo,CanceledError:ao,isCancel:ro,CancelToken:io,VERSION:lo,all:co,Cancel:uo,isAxiosError:po,spread:ho,toFormData:fo,AxiosHeaders:mo,HttpStatusCode:go,formToJSON:bo,getAdapter:yo,mergeConfig:xo}=g;/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=([e,t,n])=>{const s=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(o=>{s.setAttribute(o,String(t[o]))}),n!=null&&n.length&&n.forEach(o=>{const a=At(o);s.appendChild(a)}),s},$s=(e,t={})=>{const s={...kt,...t};return At(["svg",s,e])};/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=e=>Array.from(e.attributes).reduce((t,n)=>(t[n.name]=n.value,t),{}),Ps=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",ks=e=>e.flatMap(Ps).map(n=>n.trim()).filter(Boolean).filter((n,s,o)=>o.indexOf(n)===s).join(" "),As=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,n,s)=>n.toUpperCase()+s.toLowerCase()),rt=(e,{nameAttr:t,icons:n,attrs:s})=>{var b;const o=e.getAttribute(t);if(o==null)return;const a=As(o),r=n[a];if(!r)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const l=Rs(e),h={...kt,"data-lucide":o,...s,...l},u=ks(["lucide",`lucide-${o}`,l,s]);u&&Object.assign(h,{class:u});const d=$s(r,h);return(b=e.parentNode)==null?void 0:b.replaceChild(d,e)};/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"}],["path",{d:"m6.2 5.3 3.1 3.9"}],["path",{d:"m12.4 3.4 3.1 4"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 3v18"}],["path",{d:"M3 7.5h4"}],["path",{d:"M3 12h18"}],["path",{d:"M3 16.5h4"}],["path",{d:"M17 3v18"}],["path",{d:"M17 7.5h4"}],["path",{d:"M17 16.5h4"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=[["polygon",{points:"6 3 20 12 6 21 6 3"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M4 18v2"}],["path",{d:"M20 18v2"}],["path",{d:"M12 4v9"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];/**
 * @license lucide v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=({icons:e={},nameAttr:t="data-lucide",attrs:n={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const s=document.querySelectorAll(`[${t}]`);if(Array.from(s).forEach(o=>rt(o,{nameAttr:t,icons:e,attrs:n})),t==="data-lucide"){const o=document.querySelectorAll("[icon-name]");o.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(o).forEach(a=>rt(a,{nameAttr:"icon-name",icons:e,attrs:n})))}},C={icons:{Clapperboard:Cs,Tag:qs,Film:Fs,Monitor:Bs,Armchair:Os,Calendar:Ds,Users:Vs,Receipt:Hs,CreditCard:Ns,LogOut:Is,Plus:js,Edit:Us,Trash2:Ks,Play:_s,X:zs,Sofa:Gs}},c={currentPage:"movies",movieTypes:[],movies:[],rooms:[],seatTypes:[],seats:[],showtimes:[],customers:[],invoices:[],payments:[],seatFilterRoomId:"all",movieFilterTypeId:"all",movieFilterStatus:"all",showtimeFilterMovieId:"all",showtimeFilterRoomId:"all",showtimeFilterDate:"all",showtimeFilterTimeStatus:"all"},B=document.getElementById("app"),Ot=document.getElementById("modal-container"),Ie=document.getElementById("modal-backdrop"),V=document.getElementById("modal-content");function j(e,t="max-w-2xl"){V.innerHTML=e,V.className=`bg-white rounded-xl shadow-2xl w-full transform scale-90 opacity-0 transition-all duration-300 pointer-events-auto ${t}`,Ot.classList.remove("pointer-events-none"),Ie.classList.remove("opacity-0","pointer-events-none"),setTimeout(()=>{V.classList.remove("scale-90","opacity-0"),V.classList.add("scale-100","opacity-100")},10),D(C)}function H(){V.classList.add("scale-90","opacity-0"),V.classList.remove("scale-100","opacity-100"),Ie.classList.add("opacity-0","pointer-events-none"),setTimeout(()=>{Ot.classList.add("pointer-events-none"),V.innerHTML=""},300)}Ie.addEventListener("click",H);document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",t=>{const n=t.currentTarget.getAttribute("data-page");document.querySelectorAll(".nav-link").forEach(s=>s.classList.remove("active","bg-gray-800","border-amber-500")),t.currentTarget.classList.add("active","bg-gray-800","border-amber-500"),c.currentPage=n,$()})});const ae=e=>{if(!e)return"";try{const t=new Date(e);return isNaN(t.getTime())?"":t.toISOString().split("T")[0]}catch{return""}},it=e=>!e||isNaN(e.getTime())?"":["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"][e.getDay()];async function $(){B.innerHTML=`
        <div class="flex justify-center items-center h-64">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
        </div>
    `;try{switch(c.currentPage){case"movies":await Oe();break;case"movie-types":await Xs();break;case"rooms":await Js();break;case"seat-types":await Ws();break;case"seats":await It();break;case"showtimes":await Z();break;case"customers":await Qs();break;case"invoices":await Ht();break;case"payments":await Be();break;default:B.innerHTML=`<div class="p-8 text-center text-gray-500">Chức năng ${c.currentPage} đang được cập nhật...</div>`}}catch(e){B.innerHTML=`<div class="p-8 text-center text-red-500">Lỗi: ${e.message}</div>`}}async function Oe(){const[e,t]=await Promise.all([g.get("/api/movies"),g.get("/api/movie-types")]);c.movies=e.data,c.movieTypes=t.data;let n=c.movieFilterTypeId==="all"?c.movies:c.movies.filter(s=>s.MaLoai==c.movieFilterTypeId);c.movieFilterStatus!=="all"&&(n=n.filter(s=>s.TrangThai===c.movieFilterStatus)),B.innerHTML=`
        <div class="space-y-6">
            <!-- Thanh công cụ: Tiêu đề, Bộ lọc và Nút thêm mới -->
            <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div class="flex items-center gap-4">
                    <h2 class="text-2xl font-bold text-gray-800">Quản Lý Phim</h2>
                    <!-- Bộ lọc thể loại phim -->
                    <select id="movie-type-filter" class="px-3 py-1.5 border rounded-lg outline-none focus:ring-2 focus:ring-amber-500 text-sm font-medium">
                        <option value="all">Tất cả thể loại</option>
                        ${c.movieTypes.map(s=>`<option value="${s.MaLoai}" ${c.movieFilterTypeId==s.MaLoai?"selected":""}>${s.TenLoai}</option>`).join("")}
                    </select>
                    <!-- Bộ lọc trạng thái phim -->
                    <select id="movie-status-filter" class="px-3 py-1.5 border rounded-lg outline-none focus:ring-2 focus:ring-amber-500 text-sm font-medium">
                        <option value="all" ${c.movieFilterStatus==="all"?"selected":""}>Tất cả trạng thái</option>
                        <option value="Đang chiếu" ${c.movieFilterStatus==="Đang chiếu"?"selected":""}>Đang chiếu</option>
                        <option value="Sắp chiếu" ${c.movieFilterStatus==="Sắp chiếu"?"selected":""}>Sắp chiếu</option>
                    </select>
                </div>
                <button id="btn-add-movie" class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-md">
                    <i data-lucide="plus" class="w-5 h-5"></i> Thêm Phim Mới
                </button>
            </div>

            <!-- Thông tin số lượng hiển thị -->
            <div class="flex gap-2 items-center text-sm text-gray-500 px-2">
                <i data-lucide="info" class="w-4 h-4"></i>
                <span>Hiển thị ${n.length} / ${c.movies.length} bộ phim</span>
            </div>

            <!-- Bảng hiển thị danh sách phim với thanh cuộn dọc -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden max-h-[600px] overflow-y-auto scrollbar-thin">
                <table class="w-full text-left">
                    <thead class="bg-gray-50 text-gray-600 text-xs uppercase sticky top-0 z-10 shadow-sm">
                        <tr>
                            <th class="px-6 py-4">Phim</th>
                            <th class="px-6 py-3">Thể Loại</th>
                            <th class="px-6 py-3 text-center">Trạng Thái</th>
                            <th class="px-6 py-3 text-center">Khởi Chiếu</th>
                            <th class="px-6 py-3 text-center">Thời Lượng</th>
                            <th class="px-6 py-3">Mô Tả</th>
                            <th class="px-6 py-3 text-right">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 italic">
                        ${n.map(s=>`
                            <tr class="hover:bg-gray-50 transition-colors">
                                <td class="px-6 py-4 flex items-center gap-4 min-w-[200px]">
                                    <img src="${s.HinhAnh||"https://picsum.photos/seed/movie/40/60"}" class="w-10 h-14 object-cover rounded shadow-sm" referrerPolicy="no-referrer">
                                    <div>
                                        <div class="font-bold text-gray-900 uppercase">${s.TenPhim}</div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <span class="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-black uppercase">${s.TenLoai||"UNKNOWN"}</span>
                                </td>
                                <td class="px-6 py-4 text-center">
                                    <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase ${s.TrangThai==="Đang chiếu"?"bg-green-100 text-green-700":"bg-blue-100 text-blue-700"}">
                                        ${s.TrangThai||"Sắp chiếu"}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-center text-xs font-bold text-blue-600">
                                    ${s.NgayKhoiChieu?new Date(s.NgayKhoiChieu).toLocaleDateString("vi-VN"):"---"}
                                </td>
                                <td class="px-6 py-4 text-center text-gray-600 font-bold text-xs">
                                    ${s.ThoiLuong} phút
                                </td>
                                <td class="px-6 py-4 max-w-[250px]">
                                    <div class="text-[10px] text-gray-500 line-clamp-2 leading-relaxed" title="${s.MoTa||""}">
                                        ${s.MoTa||'<span class="text-gray-300 italic italic">Chưa có mô tả</span>'}
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                                    <!-- Nút xem Trailer -->
                                    <button onclick="window.watchTrailer('${s.Trailer}')" class="text-amber-600 hover:bg-amber-50 p-2 rounded-full transition-colors" title="Xem Trailer">
                                        <i data-lucide="play" class="w-4 h-4"></i>
                                    </button>
                                    <!-- Nút Sửa -->
                                    <button onclick="window.editMovie(${s.MaPhim})" class="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors">
                                        <i data-lucide="edit" class="w-4 h-4"></i>
                                    </button>
                                    <!-- Nút Xóa -->
                                    <button onclick="window.deleteMovie(${s.MaPhim})" class="text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors">
                                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                                    </button>
                                </td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </div>
    `,document.getElementById("movie-type-filter").addEventListener("change",s=>{c.movieFilterTypeId=s.target.value,Oe()}),document.getElementById("movie-status-filter").addEventListener("change",s=>{c.movieFilterStatus=s.target.value,Oe()}),document.getElementById("btn-add-movie").addEventListener("click",()=>Dt()),D(C)}window.watchTrailer=e=>{if(!e)return alert("Không có trailer cho phim này");const n=(o=>{const a=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,r=o.match(a);return r&&r[2].length===11?r[2]:null})(e);if(!n)return alert("Link YouTube không hợp lệ. Bạn hãy dán link xem trực tiếp trên YouTube (vd: https://www.youtube.com/watch?v=...)");const s=`https://www.youtube.com/embed/${n}`;j(`
        <div class="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
            <button onclick="window.hideModal()" class="absolute top-2 right-2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
            <iframe class="absolute inset-0 w-full h-full" src="${s}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    `),D(C)};window.hideModal=H;function Dt(e=null){const t=!!e;j(`
        <div class="p-5">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-gray-800 uppercase tracking-tight">${t?"Chỉnh Sửa Phim":"Thêm Phim Mới"}</h3>
                <button onclick="window.hideModal()" class="text-gray-400 hover:text-gray-600 transition-colors">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>
            <form id="movie-form" class="grid grid-cols-2 gap-x-6 gap-y-3">
                <div class="col-span-2">
                    <label class="block text-xs font-bold text-gray-500 mb-1 uppercase">Tên Phim</label>
                    <input type="text" name="TenPhim" value="${t?e.TenPhim:""}" required class="w-full px-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm">
                </div>
                <div class="col-span-1">
                    <label class="block text-xs font-bold text-gray-500 mb-1 uppercase">Thể Loại</label>
                    <select name="MaLoai" required class="w-full px-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm">
                        ${c.movieTypes.map(n=>`<option value="${n.MaLoai}" ${t&&e.MaLoai===n.MaLoai?"selected":""}>${n.TenLoai}</option>`).join("")}
                    </select>
                </div>
                <div class="col-span-1">
                    <label class="block text-xs font-bold text-gray-500 mb-1 uppercase">Thời Lượng (phút)</label>
                    <input type="number" name="ThoiLuong" value="${t?e.ThoiLuong:""}" required class="w-full px-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm">
                </div>
                <div class="col-span-1">
                    <label class="block text-xs font-bold text-gray-500 mb-1 uppercase">Trạng Thái</label>
                    <select name="TrangThai" class="w-full px-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm">
                        <option value="Đang chiếu" ${t&&e.TrangThai==="Đang chiếu"?"selected":""}>Đang chiếu</option>
                        <option value="Sắp chiếu" ${t&&e.TrangThai==="Sắp chiếu"?"selected":""}>Sắp chiếu</option>
                    </select>
                </div>
                <div class="col-span-1">
                    <label class="block text-xs font-bold text-gray-500 mb-1 uppercase">Ngày Khởi Chiếu</label>
                    <input type="date" name="NgayKhoiChieu" value="${ae(t?e.NgayKhoiChieu:null)}" required class="w-full px-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm">
                </div>
                <div class="col-span-1">
                    <label class="block text-xs font-bold text-gray-500 mb-1 uppercase">Link Hình Ảnh</label>
                    <input type="url" name="HinhAnh" value="${t?e.HinhAnh:""}" class="w-full px-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm" placeholder="https://...">
                </div>
                <div class="col-span-1">
                    <label class="block text-xs font-bold text-gray-500 mb-1 uppercase">Link Trailer YouTube</label>
                    <input type="url" name="Trailer" value="${t?e.Trailer:""}" class="w-full px-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm" placeholder="https://youtube.com/...">
                </div>
                <div class="col-span-2">
                    <label class="block text-xs font-bold text-gray-500 mb-1 uppercase">Mô Tả</label>
                    <textarea name="MoTa" rows="2" class="w-full px-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm">${t?e.MoTa:""}</textarea>
                </div>
                <div class="col-span-2 flex justify-end gap-3 mt-4">
                    <button type="button" onclick="window.hideModal()" class="px-5 py-2 text-sm font-bold text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">Hủy</button>
                    <button type="submit" class="px-8 py-2 text-sm font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-lg">${t?"Cập Nhật":"Thêm Mới"}</button>
                </div>
            </form>
        </div>
    `,"max-w-3xl"),document.getElementById("movie-form").addEventListener("submit",async n=>{var a,r;n.preventDefault();const s=new FormData(n.target),o=Object.fromEntries(s.entries());o.MaLoai=parseInt(o.MaLoai),o.ThoiLuong=parseInt(o.ThoiLuong);try{t?await g.put(`/api/movies/${e.MaPhim}`,o):await g.post("/api/movies",o),H(),$()}catch(l){const h=((r=(a=l.response)==null?void 0:a.data)==null?void 0:r.error)||l.message;alert("Lỗi: "+h)}})}window.editMovie=e=>{const t=c.movies.find(n=>n.MaPhim==e);t&&Dt(t)};window.deleteMovie=async e=>{var t,n;if(confirm("Bạn có chắc chắn muốn xóa phim này?"))try{await g.delete(`/api/movies/${e}`),$()}catch(s){const o=((n=(t=s.response)==null?void 0:t.data)==null?void 0:n.error)||s.message;alert("Lỗi khi xóa phim: "+o)}};async function Xs(){const e=await g.get("/api/movie-types");c.movieTypes=e.data,B.innerHTML=`
        <div class="space-y-6">
            <div class="flex justify-between items-center">
                <h2 class="text-2xl font-bold text-gray-800">Quản Lý Loại Phim</h2>
                <button id="btn-add-type" class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md italic">
                    <i data-lucide="plus" class="w-5 h-5"></i> Thêm Loại Mới
                </button>
            </div>
            <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table class="w-full text-left">
                    <thead class="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
                        <tr>
                            <th class="px-6 py-4">Mã Loại</th>
                            <th class="px-6 py-4">Tên Loại</th>
                            <th class="px-6 py-4 text-right">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 italic">
                        ${c.movieTypes.map(t=>`
                            <tr class="hover:bg-gray-50 transition-colors">
                                <td class="px-6 py-4 text-gray-400 font-mono">#${t.MaLoai}</td>
                                <td class="px-6 py-4 text-gray-800 font-bold uppercase">${t.TenLoai}</td>
                                <td class="px-6 py-4 text-right space-x-2">
                                    <button onclick="window.editMovieType(${t.MaLoai})" class="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors">
                                        <i data-lucide="edit" class="w-4 h-4"></i>
                                    </button>
                                    <button onclick="window.deleteMovieType(${t.MaLoai})" class="text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors">
                                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                                    </button>
                                </td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </div>
    `,document.getElementById("btn-add-type").addEventListener("click",()=>Ct()),D(C)}function Ct(e=null){const t=!!e;j(`
        <div class="p-6">
            <h3 class="text-xl font-bold mb-4 uppercase">${t?"Sửa Loại Phim":"Thêm Loại Phim Mới"}</h3>
            <form id="movie-type-form" class="space-y-4">
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Tên Loại Phim</label>
                    <input type="text" name="TenLoai" value="${t?e.TenLoai:""}" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none">
                </div>
                <div class="flex justify-end gap-3 mt-6">
                    <button type="button" onclick="window.hideModal()" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Hủy</button>
                    <button type="submit" class="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-md">${t?"Lưu":"Thêm"}</button>
                </div>
            </form>
        </div>
    `),document.getElementById("movie-type-form").addEventListener("submit",async n=>{n.preventDefault();const s=Object.fromEntries(new FormData(n.target).entries());try{t?await g.put(`/api/movie-types/${e.MaLoai}`,s):await g.post("/api/movie-types",s),H(),$()}catch(o){alert("Lỗi: "+o.message)}})}window.editMovieType=e=>{const t=c.movieTypes.find(n=>n.MaLoai==e);t&&Ct(t)};window.deleteMovieType=async e=>{var t,n;if(confirm("Xóa loại phim này?"))try{await g.delete(`/api/movie-types/${e}`),$()}catch(s){const o=((n=(t=s.response)==null?void 0:t.data)==null?void 0:n.error)||s.message;alert("Lỗi: "+o)}};async function Js(){const e=await g.get("/api/rooms");c.rooms=e.data,B.innerHTML=`
        <div class="space-y-6">
            <div class="flex justify-between items-center">
                <h2 class="text-2xl font-bold text-gray-800">Quản Lý Phòng Chiếu</h2>
                <button id="btn-add-room" class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-md">
                    <i data-lucide="plus" class="w-5 h-5"></i> Thêm Phòng Mới
                </button>
            </div>
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table class="w-full text-left">
                    <thead class="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
                        <tr>
                            <th class="px-6 py-4">Mã Phòng</th>
                            <th class="px-6 py-4">Tên Phòng</th>
                            <th class="px-6 py-4 text-right">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 italic">
                        ${c.rooms.map(t=>`
                            <tr class="hover:bg-gray-50 transition-colors">
                                <td class="px-6 py-4 text-gray-400 font-mono">#${t.MaPhong}</td>
                                <td class="px-6 py-4 text-gray-800 font-bold underline decoration-amber-300 decoration-2">${t.TenPhong}</td>
                                <td class="px-6 py-4 text-right space-x-2">
                                    <button onclick="window.editRoom(${t.MaPhong})" class="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors">
                                        <i data-lucide="edit" class="w-4 h-4"></i>
                                    </button>
                                    <button onclick="window.deleteRoom(${t.MaPhong})" class="text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors">
                                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                                    </button>
                                </td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </div>
    `,document.getElementById("btn-add-room").addEventListener("click",()=>Nt()),D(C)}function Nt(e=null){const t=!!e;j(`
        <div class="p-6">
            <h3 class="text-xl font-bold mb-4 uppercase">${t?"Cập Nhật Phòng":"Thêm Phòng Chiếu Mới"}</h3>
            <form id="room-form" class="space-y-4">
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Tên Phòng</label>
                    <input type="text" name="TenPhong" value="${t?e.TenPhong:""}" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" placeholder="vd: Phòng 1, Phòng VIP...">
                </div>
                <div class="flex justify-end gap-3 mt-6">
                    <button type="button" onclick="window.hideModal()" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Hủy</button>
                    <button type="submit" class="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-md">${t?"Cập Nhật":"Tạo Phòng"}</button>
                </div>
            </form>
        </div>
    `),document.getElementById("room-form").addEventListener("submit",async n=>{n.preventDefault();const s=Object.fromEntries(new FormData(n.target).entries());try{t?await g.put(`/api/rooms/${e.MaPhong}`,s):await g.post("/api/rooms",s),H(),$()}catch(o){alert("Lỗi: "+o.message)}})}window.editRoom=e=>{const t=c.rooms.find(n=>n.MaPhong==e);t&&Nt(t)};window.deleteRoom=async e=>{var t,n;if(confirm("Xóa phòng này?"))try{await g.delete(`/api/rooms/${e}`),$()}catch(s){const o=((n=(t=s.response)==null?void 0:t.data)==null?void 0:n.error)||s.message;alert("Lỗi: "+o)}};async function Ws(){const e=await g.get("/api/seat-types");c.seatTypes=e.data,B.innerHTML=`
        <div class="space-y-6">
            <div class="flex justify-between items-center">
                <h2 class="text-2xl font-bold text-gray-800">Cấu Hình Loại Ghế</h2>
                <button id="btn-add-seat-type" class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md">
                    <i data-lucide="plus" class="w-5 h-5"></i> Thêm Loại Ghế
                </button>
            </div>
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table class="w-full text-left">
                    <thead class="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
                        <tr>
                            <th class="px-6 py-4">Tên Loại Ghế</th>
                            <th class="px-6 py-4">Giá Ghế</th>
                            <th class="px-6 py-4 text-right">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 italic">
                        ${c.seatTypes.map(t=>`
                            <tr class="hover:bg-gray-50 transition-colors">
                                <td class="px-6 py-4 text-gray-900 font-black uppercase tracking-tight italic">${t.TenLoai}</td>
                                <td class="px-6 py-4 font-mono text-amber-600 font-bold text-lg">${(t.GiaGhe||0).toLocaleString()}đ</td>
                                <td class="px-6 py-4 text-right space-x-2">
                                    <button onclick="window.editSeatType(${t.MaLoaiGhe})" class="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors">
                                        <i data-lucide="edit" class="w-4 h-4"></i>
                                    </button>
                                    <button onclick="window.deleteSeatType(${t.MaLoaiGhe})" class="text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors">
                                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                                    </button>
                                </td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </div>
    `,document.getElementById("btn-add-seat-type").addEventListener("click",()=>Ft()),D(C)}function Ft(e=null){const t=!!e;j(`
        <div class="p-6">
            <h3 class="text-xl font-bold mb-4 uppercase tracking-widest">${t?"Sửa Loại Ghế":"Tạo Loại Ghế Mới"}</h3>
            <form id="seat-type-form" class="space-y-4">
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Tên Loại Ghế</label>
                    <input type="text" name="TenLoai" value="${t?e.TenLoai:""}" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" placeholder="vd: VIP, Ghế Đôi...">
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Giá Ghế (đ)</label>
                    <input type="number" name="GiaGhe" value="${t?e.GiaGhe:"80000"}" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none">
                    <p class="text-[10px] text-gray-400 mt-1 italic font-bold">* Giá áp dụng trực tiếp khi khách hàng chọn loại ghế này</p>
                </div>
                <div class="flex justify-end gap-3 mt-6">
                    <button type="button" onclick="window.hideModal()" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Hủy</button>
                    <button type="submit" class="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-md">${t?"Lưu Thay Đổi":"Tạo Mới"}</button>
                </div>
            </form>
        </div>
    `),document.getElementById("seat-type-form").addEventListener("submit",async n=>{n.preventDefault();const s=Object.fromEntries(new FormData(n.target).entries());s.GiaGhe=parseFloat(s.GiaGhe);try{t?await g.put(`/api/seat-types/${e.MaLoaiGhe}`,s):await g.post("/api/seat-types",s),H(),$()}catch(o){alert("Lỗi: "+o.message)}})}window.editSeatType=e=>{const t=c.seatTypes.find(n=>n.MaLoaiGhe==e);t&&Ft(t)};window.deleteSeatType=async e=>{var t,n;if(confirm("Xóa loại ghế này?"))try{await g.delete(`/api/seat-types/${e}`),$()}catch(s){const o=((n=(t=s.response)==null?void 0:t.data)==null?void 0:n.error)||s.message;alert("Lỗi: "+o)}};async function It(){const[e,t,n]=await Promise.all([g.get("/api/seats"),g.get("/api/rooms"),g.get("/api/seat-types")]);c.seats=e.data,c.rooms=t.data,c.seatTypes=n.data;const s=c.seatFilterRoomId==="all"?c.seats:c.seats.filter(o=>o.MaPhong==c.seatFilterRoomId);B.innerHTML=`
        <div class="space-y-6">
            <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div class="flex items-center gap-4">
                    <h2 class="text-2xl font-bold text-gray-800">Quản Lý Ghế</h2>
                    <select id="room-filter" class="px-3 py-1.5 border rounded-lg outline-none focus:ring-2 focus:ring-amber-500 text-sm font-medium">
                        <option value="all">Tất cả phòng</option>
                        ${c.rooms.map(o=>`<option value="${o.MaPhong}" ${c.seatFilterRoomId==o.MaPhong?"selected":""}>${o.TenPhong}</option>`).join("")}
                    </select>
                </div>
                <button id="btn-add-seat" class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-transform active:scale-95 shadow-md">
                    <i data-lucide="plus" class="w-5 h-5"></i> Thêm Ghế Mới
                </button>
            </div>
            
            <div class="flex gap-2 items-center text-sm text-gray-500 px-2">
                <i data-lucide="info" class="w-4 h-4"></i>
                <span>Hiển thị ${s.length} / ${c.seats.length} ghế</span>
            </div>

            <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 max-h-[600px] overflow-y-auto scrollbar-thin">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-gray-50 text-gray-600 text-xs uppercase sticky top-0 z-10 shadow-sm">
                        <tr>
                            <th class="px-6 py-4">Phòng</th>
                            <th class="px-6 py-3">Số Ghế</th>
                            <th class="px-6 py-3">Loại Ghế</th>
                            <th class="px-6 py-3">Giá Vé</th>
                            <th class="px-6 py-3 text-right">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        ${s.map(o=>`
                            <tr class="hover:bg-amber-50/30 transition-colors">
                                <td class="px-6 py-4 font-medium text-gray-600">${o.TenPhong}</td>
                                <td class="px-6 py-4">
                                    <span class="px-3 py-1 bg-amber-100 text-amber-800 rounded-full font-bold text-sm">
                                        ${o.SoGhe}
                                    </span>
                                </td>
                                <td class="px-6 py-4">
                                    <span class="text-gray-700">${o.TenLoaiGhe}</span>
                                </td>
                                <td class="px-6 py-4">
                                    <span class="text-red-600 font-bold">${(o.GiaGhe||0).toLocaleString()}đ</span>
                                </td>
                                <td class="px-6 py-4 text-right space-x-1">
                                    <button onclick="window.editSeat(${o.MaGhe})" class="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors" title="Sửa">
                                        <i data-lucide="edit" class="w-4 h-4"></i>
                                    </button>
                                    <button onclick="window.deleteSeat(${o.MaGhe})" class="text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors" title="Xóa">
                                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                                    </button>
                                </td>
                            </tr>
                        `).join("")}
                        ${s.length===0?`
                            <tr>
                                <td colspan="4" class="px-6 py-12 text-center text-gray-400 italic">
                                    Không tìm thấy ghế nào trong phòng này
                                </td>
                            </tr>
                        `:""}
                    </tbody>
                </table>
            </div>
        </div>
    `,document.getElementById("room-filter").addEventListener("change",o=>{c.seatFilterRoomId=o.target.value,It()}),document.getElementById("btn-add-seat").addEventListener("click",()=>Bt()),D(C)}function Bt(e=null){const t=!!e;j(`
        <div class="p-6">
            <h3 class="text-xl font-bold mb-4">${t?"Sửa Thông Tin Ghế":"Thêm Ghế Mới"}</h3>
            <form id="seat-form" class="space-y-4">
                <div>
                    <label class="block text-sm mb-1">Phòng</label>
                    <select name="MaPhong" class="w-full border rounded p-2 text-gray-900 bg-white">
                        ${c.rooms.map(n=>`<option value="${n.MaPhong}" ${t&&e.MaPhong===n.MaPhong?"selected":""}>${n.TenPhong}</option>`).join("")}
                    </select>
                </div>
                <div>
                    <label class="block text-sm mb-1">Số Ghế (vd: A1, B5...)</label>
                    <input name="SoGhe" type="text" value="${t?e.SoGhe:""}" required class="w-full border rounded p-2 text-gray-900 bg-white">
                </div>
                <div>
                    <label class="block text-sm mb-1">Loại Ghế</label>
                    <select name="MaLoaiGhe" class="w-full border rounded p-2 text-gray-900 bg-white">
                        ${c.seatTypes.map(n=>`<option value="${n.MaLoaiGhe}" ${t&&e.MaLoaiGhe===n.MaLoaiGhe?"selected":""}>${n.TenLoai}</option>`).join("")}
                    </select>
                </div>
                <div class="flex justify-end gap-2 mt-6">
                    <button type="button" onclick="window.hideModal()" class="px-4 py-2 text-gray-600">Hủy</button>
                    <button type="submit" class="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700">${t?"Lưu Thay Đổi":"Thêm Mới"}</button>
                </div>
            </form>
        </div>
    `),document.getElementById("seat-form").addEventListener("submit",async n=>{n.preventDefault();const s=Object.fromEntries(new FormData(n.target).entries());s.MaPhong=parseInt(s.MaPhong),s.MaLoaiGhe=parseInt(s.MaLoaiGhe);try{t?await g.put(`/api/seats/${e.MaGhe}`,s):await g.post("/api/seats",s),H(),$()}catch(o){alert("Lỗi: "+o.message)}})}window.editSeat=e=>{const t=c.seats.find(n=>n.MaGhe==e);t&&Bt(t)};window.deleteSeat=async e=>{var t,n;if(confirm("Xóa ghế này?"))try{await g.delete(`/api/seats/${e}`),$()}catch(s){const o=((n=(t=s.response)==null?void 0:t.data)==null?void 0:n.error)||s.message;alert("Lỗi: "+o)}};async function Z(){const[e,t,n]=await Promise.all([g.get("/api/showtimes"),g.get("/api/movies"),g.get("/api/rooms")]);c.showtimes=e.data,c.movies=t.data,c.rooms=n.data;const s=c.showtimes.filter(a=>{const r=c.showtimeFilterMovieId==="all"||a.MaPhim==c.showtimeFilterMovieId,l=c.showtimeFilterRoomId==="all"||a.MaPhong==c.showtimeFilterRoomId;let h=!0;c.showtimeFilterDate!=="all"&&(h=ae(a.NgayChieu)===c.showtimeFilterDate);let u=!0;if(c.showtimeFilterTimeStatus!=="all"){let d=!1;if(a.NgayChieu&&a.GioBatDau){const b=ae(a.NgayChieu),v=a.GioBatDau.split(":").slice(0,2).join(":");new Date(`${b}T${v}:00`)<new Date&&(d=!0)}c.showtimeFilterTimeStatus==="past"?u=d:c.showtimeFilterTimeStatus==="future"&&(u=!d)}return r&&l&&h&&u});B.innerHTML=`
        <div class="space-y-6">
            <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 gap-4">
                <div class="flex flex-col md:flex-row items-start md:items-center gap-4 w-full flex-1 overflow-hidden">
                    <h2 class="text-2xl font-bold text-gray-800 whitespace-nowrap">Lịch Chiếu Phim</h2>
                    <div class="flex flex-wrap gap-2 items-center">
                        <!-- Bộ lọc phim -->
                        <select id="st-movie-filter" class="px-3 py-1.5 border rounded-lg outline-none focus:ring-2 focus:ring-amber-500 text-sm font-medium bg-white max-w-[200px] truncate">
                            <option value="all">Tất cả phim</option>
                            ${c.movies.map(a=>`<option value="${a.MaPhim}" ${c.showtimeFilterMovieId==a.MaPhim?"selected":""}>${a.TenPhim}</option>`).join("")}
                        </select>
                        <!-- Bộ lọc phòng -->
                        <select id="st-room-filter" class="px-3 py-1.5 border rounded-lg outline-none focus:ring-2 focus:ring-amber-500 text-sm font-medium bg-white">
                            <option value="all">Tất cả phòng</option>
                            ${c.rooms.map(a=>`<option value="${a.MaPhong}" ${c.showtimeFilterRoomId==a.MaPhong?"selected":""}>${a.TenPhong}</option>`).join("")}
                        </select>
                        <!-- Bộ lọc trạng thái thời gian -->
                        <select id="st-time-status-filter" class="px-3 py-1.5 border rounded-lg outline-none focus:ring-2 focus:ring-amber-500 text-sm font-medium bg-white">
                            <option value="all" ${c.showtimeFilterTimeStatus==="all"||!c.showtimeFilterTimeStatus?"selected":""}>Tất cả thời gian</option>
                            <option value="future" ${c.showtimeFilterTimeStatus==="future"?"selected":""}>Còn thời gian</option>
                            <option value="past" ${c.showtimeFilterTimeStatus==="past"?"selected":""}>Đã hết thời gian</option>
                        </select>
                        <!-- Bộ lọc ngày -->
                        <div class="flex items-center gap-1 border rounded-lg px-2 bg-white">
                            <i data-lucide="calendar" class="w-4 h-4 text-gray-400 flex-shrink-0"></i>
                            <input type="date" id="st-date-filter" value="${c.showtimeFilterDate==="all"?"":c.showtimeFilterDate}" class="px-2 py-1.5 outline-none text-sm font-medium bg-transparent">
                            ${c.showtimeFilterDate!=="all"?`
                                <span class="text-[10px] text-amber-600 font-bold uppercase whitespace-nowrap px-1 border-l ml-1">
                                    ${it(new Date(c.showtimeFilterDate))}
                                </span>
                                <button id="btn-clear-date" class="p-1 hover:bg-gray-100 rounded-full text-red-500 flex-shrink-0" title="Xóa lọc ngày">
                                    <i data-lucide="x" class="w-4 h-4"></i>
                                </button>
                            `:""}
                        </div>
                    </div>
                </div>
                <button id="btn-add-showtime" class="flex-shrink-0 whitespace-nowrap bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md text-sm font-bold w-full lg:w-auto">
                    <i data-lucide="plus" class="w-5 h-5"></i> Tạo Suất Chiếu
                </button>
            </div>

            <!-- Báo cáo số lượng -->
            <div class="flex gap-2 items-center text-sm text-gray-500 px-2">
                <i data-lucide="info" class="w-4 h-4"></i>
                <span>Hiển thị ${s.length} / ${c.showtimes.length} suất chiếu</span>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden max-h-[600px] overflow-y-auto scrollbar-thin">
                <table class="w-full text-left">
                    <thead class="bg-gray-50 text-gray-600 text-xs uppercase sticky top-0 z-10 shadow-sm">
                        <tr>
                            <th class="px-6 py-4">Phim</th>
                            <th class="px-6 py-3">Phòng</th>
                            <th class="px-6 py-3">Thời Gian</th>
                            <th class="px-6 py-3 text-right">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        ${s.map(a=>{let r=!1;if(a.NgayChieu&&a.GioBatDau){const h=ae(a.NgayChieu),u=a.GioBatDau.split(":").slice(0,2).join(":");new Date(`${h}T${u}:00`)<new Date&&(r=!0)}const l=r?"text-red-600":"text-green-600";return`
                            <tr class="hover:bg-gray-50 transition-colors italic">
                                <td class="px-6 py-4">
                                    <div class="font-bold text-gray-900 uppercase">${a.TenPhim}</div>
                                </td>
                                <td class="px-6 py-4 text-amber-600 font-bold">${a.TenPhong}</td>
                                <td class="px-6 py-4">
                                    <div class="text-sm font-medium uppercase ${l}">
                                        ${it(new Date(a.NgayChieu))}, ${new Date(a.NgayChieu).toLocaleDateString("vi-VN")}
                                    </div>
                                    <!-- Trích xuất chính xác Giờ và Phút từ CSDL -->
                                    <div class="text-xs font-bold ${l}">
                                        ${a.GioBatDau?a.GioBatDau.split(":").slice(0,2).join(":"):"??:??"} 
                                        &rarr; 
                                        ${a.GioKetThuc?a.GioKetThuc.split(":").slice(0,2).join(":"):"??:??"}
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-right space-x-2">
                                    <button onclick="window.editShowtime(${a.MaSuat})" class="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors">
                                        <i data-lucide="edit" class="w-4 h-4"></i>
                                    </button>
                                    <button onclick="window.deleteShowtime(${a.MaSuat})" class="text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors">
                                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                                    </button>
                                </td>
                            </tr>
                            `}).join("")}
                        ${s.length===0?'<tr><td colspan="4" class="p-12 text-center text-gray-400 italic">Không có suất chiếu nào phù hợp bộ lọc</td></tr>':""}
                    </tbody>
                </table>
            </div>
        </div>
    `,document.getElementById("st-movie-filter").addEventListener("change",a=>{c.showtimeFilterMovieId=a.target.value,Z()}),document.getElementById("st-room-filter").addEventListener("change",a=>{c.showtimeFilterRoomId=a.target.value,Z()}),document.getElementById("st-date-filter").addEventListener("change",a=>{c.showtimeFilterDate=a.target.value||"all",Z()});const o=document.getElementById("btn-clear-date");o&&o.addEventListener("click",()=>{c.showtimeFilterDate="all",Z()}),document.getElementById("st-time-status-filter").addEventListener("change",a=>{c.showtimeFilterTimeStatus=a.target.value,Z()}),document.getElementById("btn-add-showtime").addEventListener("click",()=>_t()),D(C)}function _t(e=null){const t=!!e;j(`
        <div class="p-6">
            <h3 class="text-xl font-bold mb-4 uppercase tracking-wider">${t?"Sửa Suất Chiếu":"Tạo Suất Chiếu Mới"}</h3>
            <form id="showtime-form" class="space-y-4">
                <div>
                    <label class="block text-sm mb-1 text-gray-700 font-bold">Phim</label>
                    <select name="MaPhim" class="w-full border rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-amber-500 outline-none">
                        ${c.movies.filter(r=>r.TrangThai==="Đang chiếu"||t&&r.MaPhim===e.MaPhim).map(r=>`<option value="${r.MaPhim}" ${t&&e.MaPhim===r.MaPhim?"selected":""}>${r.TenPhim}</option>`).join("")}
                    </select>
                </div>
                <div>
                    <label class="block text-sm mb-1 text-gray-700 font-bold">Phòng</label>
                    <select name="MaPhong" class="w-full border rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-amber-500 outline-none">
                        ${c.rooms.map(r=>`<option value="${r.MaPhong}" ${t&&e.MaPhong===r.MaPhong?"selected":""}>${r.TenPhong}</option>`).join("")}
                    </select>
                </div>
                <div>
                    <label class="block text-sm mb-1 text-gray-700 font-bold">Ngày Chiếu</label>
                    <input name="NgayChieu" type="date" value="${ae(t?e.NgayChieu:null)}" required class="w-full border rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-amber-500 outline-none">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1 text-gray-700 font-bold">Giờ Bắt Đầu</label>
                        <input name="GioBatDau" type="time" value="${t?e.GioBatDau:""}" required class="w-full border rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-amber-500 outline-none">
                    </div>
                    <div>
                        <label class="block text-sm mb-1 text-gray-700 font-bold">Giờ Kết Thúc</label>
                        <input name="GioKetThuc" type="time" value="${t?e.GioKetThuc:""}" required class="w-full border rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-amber-500 outline-none">
                    </div>
                </div>
                <div class="flex justify-end gap-2 mt-6">
                    <button type="button" onclick="window.hideModal()" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">Hủy</button>
                    <button type="submit" class="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors shadow-md">${t?"Lưu Thay Đổi":"Tạo Suất"}</button>
                </div>
            </form>
        </div>
    `);const n=document.querySelector('#showtime-form select[name="MaPhim"]'),s=document.querySelector('#showtime-form input[name="GioBatDau"]'),o=document.querySelector('#showtime-form input[name="GioKetThuc"]'),a=()=>{if(s&&o&&n&&s.value){const r=parseInt(n.value),l=c.movies.find(h=>h.MaPhim===r);l&&typeof window.calculateEndTime=="function"&&(o.value=window.calculateEndTime(s.value,l.ThoiLuong))}};s&&s.addEventListener("input",a),n&&n.addEventListener("change",a),document.getElementById("showtime-form").addEventListener("submit",async r=>{r.preventDefault();const l=Object.fromEntries(new FormData(r.target).entries());l.MaPhim=parseInt(l.MaPhim),l.MaPhong=parseInt(l.MaPhong);try{t?await g.put(`/api/showtimes/${e.MaSuat}`,l):await g.post("/api/showtimes",l),H(),$()}catch(h){alert("Lỗi: "+h.message)}})}window.editShowtime=e=>{const t=c.showtimes.find(n=>n.MaSuat==e);t&&_t(t)};window.deleteShowtime=async e=>{var t,n;if(confirm("Xóa suất chiếu này?"))try{await g.delete(`/api/showtimes/${e}`),$()}catch(s){const o=((n=(t=s.response)==null?void 0:t.data)==null?void 0:n.error)||s.message;alert("Lỗi: "+o)}};async function Qs(){const[e,t]=await Promise.all([g.get("/api/customers"),g.get("/api/customer-types")]);c.customers=e.data,c.customerTypes=t.data||[],B.innerHTML=`
        <div class="space-y-6">
            <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h2 class="text-2xl font-bold text-gray-800">Quản Lý Người Dùng</h2>
                <button id="btn-add-customer" class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-md">
                    <i data-lucide="plus" class="w-5 h-5"></i> Thêm Người Dùng
                </button>
            </div>
            
            <!-- Bảng hiển thị danh sách người dùng với thanh cuộn -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden max-h-[600px] overflow-y-auto scrollbar-thin">
                <table class="w-full text-left">
                    <thead class="bg-gray-50 text-gray-600 text-xs uppercase sticky top-0 z-10 shadow-sm">
                        <tr>
                            <th class="px-6 py-4 font-bold">Họ Tên / Email</th>
                            <th class="px-6 py-3 font-bold">Số Điện Thoại</th>
                            <th class="px-6 py-3 font-bold">Tài Khoản</th>
                            <th class="px-6 py-3 text-right font-bold">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 italic">
                        ${c.customers.map(n=>`
                            <tr class="hover:bg-amber-50/30 transition-colors">
                                <td class="px-6 py-4">
                                    <div class="font-bold text-gray-900 uppercase">${n.Ten}</div>
                                    <div class="text-xs text-blue-600 font-bold">${n.Email}</div>
                                </td>
                                <td class="px-6 py-4 text-gray-600 font-bold">${n.SDT}</td>
                                <td class="px-6 py-4">
                                    <div class="text-xs font-mono text-gray-500 uppercase font-bold">${n.TenDangNhap}</div>
                                    <span class="px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${n.TenLoaiUser==="Admin"?"bg-red-100 text-red-700":"bg-green-100 text-green-700"}">
                                        ${n.TenLoaiUser}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-right space-x-2">
                                    <button onclick="window.editCustomer(${n.MaKH})" class="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors" title="Sửa">
                                        <i data-lucide="edit" class="w-4 h-4"></i>
                                    </button>
                                    <button onclick="window.deleteCustomer(${n.MaKH})" class="text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors" title="Xóa">
                                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                                    </button>
                                </td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </div>
    `,document.getElementById("btn-add-customer").addEventListener("click",()=>jt()),D(C)}function jt(e=null){const t=!!e;j(`
        <div class="p-6">
            <h3 class="text-xl font-bold mb-4 uppercase">${t?"Sửa Người Dùng":"Thêm Người Dùng Mới"}</h3>
            <form id="customer-form" class="grid grid-cols-2 gap-4">
                <div class="col-span-2">
                    <label class="block text-sm font-bold text-gray-700 mb-1">Họ Tên</label>
                    <input type="text" name="Ten" value="${t?e.Ten:""}" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none">
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Tên Đăng Nhập</label>
                    <input type="text" name="TenDangNhap" value="${t?e.TenDangNhap:""}" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none">
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Mật Khẩu</label>
                    <input type="password" name="MatKhau" value="${t?e.MatKhau:""}" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none">
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Email</label>
                    <input type="email" name="Email" value="${t?e.Email:""}" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none">
                </div>
                <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Số Điện Thoại</label>
                    <input type="text" name="SDT" value="${t?e.SDT:""}" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none">
                </div>
                <div class="col-span-2">
                    <label class="block text-sm font-bold text-gray-700 mb-1">Loại Người Dùng</label>
                    <select name="MaLoaiUser" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none">
                        ${(c.customerTypes||[]).map(n=>`<option value="${n.MaLoaiUser}" ${t&&e.MaLoaiUser===n.MaLoaiUser?"selected":""}>${n.TenLoai}</option>`).join("")}
                    </select>
                </div>
                <div class="col-span-2 flex justify-end gap-3 mt-6">
                    <button type="button" onclick="window.hideModal()" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Hủy</button>
                    <button type="submit" class="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-md">${t?"Lưu":"Thêm"}</button>
                </div>
            </form>
        </div>
    `),document.getElementById("customer-form").addEventListener("submit",async n=>{n.preventDefault();const s=Object.fromEntries(new FormData(n.target).entries());s.MaLoaiUser=parseInt(s.MaLoaiUser);try{t?await g.put(`/api/customers/${e.MaKH}`,s):await g.post("/api/customers",s),H(),$()}catch(o){alert("Lỗi: "+o.message)}})}window.editCustomer=e=>{const t=c.customers.find(n=>n.MaKH==e);t&&jt(t)};window.deleteCustomer=async e=>{var t,n;if(confirm("Bạn có chắc chắn muốn xóa khách hàng này?"))try{await g.delete(`/api/customers/${e}`),$()}catch(s){const o=((n=(t=s.response)==null?void 0:t.data)==null?void 0:n.error)||s.message;alert("Lỗi: "+o)}};async function Ht(){try{const[e,t,n,s,o,a]=await Promise.all([g.get("/api/invoices"),g.get("/api/customers"),g.get("/api/showtimes"),g.get("/api/seats"),g.get("/api/seat-types"),g.get("/api/payments")]);c.invoices=Array.isArray(e.data)?e.data:[],c.customers=Array.isArray(t.data)?t.data:[],c.showtimes=Array.isArray(n.data)?n.data:[],c.seats=Array.isArray(s.data)?s.data:[],c.seatTypes=Array.isArray(o.data)?o.data:[],c.payments=Array.isArray(a.data)?a.data:[]}catch(e){console.error("Lỗi khi tải dữ liệu hóa đơn:",e),c.invoices=[],c.customers=[],c.showtimes=[],c.seats=[],c.seatTypes=[],c.payments=[]}B.innerHTML=`
        <div class="space-y-6">
            <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                <h2 class="text-2xl font-bold text-gray-800">Lịch Sử Hóa Đơn</h2>
                <button id="btn-add-invoice" class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-md">
                    <i data-lucide="plus" class="w-5 h-5"></i> Tạo Hóa Đơn
                </button>
            </div>
            
            <div class="bg-white rounded-xl shadow overflow-hidden border border-gray-100 max-h-[600px] overflow-y-auto scrollbar-thin">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-gray-50 text-gray-600 text-xs uppercase sticky top-0 z-10 shadow-sm">
                        <tr>
                            <th class="px-6 py-4">Mã HD</th>
                            <th class="px-6 py-3">Khách Hàng</th>
                            <th class="px-6 py-3">Ngày Đặt</th>
                            <th class="px-6 py-3">Tổng Tiền</th>
                            <th class="px-6 py-3 text-right">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        ${c.invoices.map(e=>`
                            <tr class="hover:bg-amber-50/30 transition-colors">
                                <td class="px-6 py-4 font-bold text-amber-700">#${e.MaHoaDon}</td>
                                <td class="px-6 py-4 font-medium text-gray-700">${e.TenKhachHang}</td>
                                <td class="px-6 py-4 text-gray-500 font-medium">${new Date(e.NgayDat).toLocaleString("vi-VN")}</td>
                                <td class="px-6 py-4 font-bold text-red-600">${e.TongTien.toLocaleString()}đ</td>
                                <td class="px-6 py-4 text-right space-x-1">
                                    <button onclick="window.viewInvoiceDetail(${e.MaHoaDon})" class="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors" title="Xem Chi Tiết">
                                        <i data-lucide="receipt" class="w-4 h-4"></i>
                                    </button>
                                    <button onclick="window.editInvoice(${e.MaHoaDon})" class="text-amber-600 hover:bg-amber-50 p-2 rounded-full transition-colors" title="Sửa">
                                        <i data-lucide="edit" class="w-4 h-4"></i>
                                    </button>
                                    <button onclick="window.deleteInvoice(${e.MaHoaDon})" class="text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors" title="Xóa">
                                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                                    </button>
                                </td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </div>
    `,document.getElementById("btn-add-invoice").addEventListener("click",()=>Gt()),D(C)}async function Gt(e=null){const t=!!e;let n=[];if(t)try{n=(await g.get(`/api/invoice-details/${e.MaHoaDon}`)).data}catch(x){console.error("Lỗi tải chi tiết hóa đơn để sửa:",x)}const s=t&&n.length>0?n[0].MaSuat:"",o=t&&n.length>0&&n[0].MaGiaoDich||"";j(`
        <div class="p-6">
            <h3 class="text-xl font-bold mb-4 uppercase text-amber-600 flex items-center gap-2">
                <i data-lucide="receipt" class="w-6 h-6"></i> ${t?"Sửa Hóa Đơn #"+e.MaHoaDon:"Mua Vé & Thanh Toán"}
            </h3>
            <form id="invoice-form" class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-1 uppercase text-xs">Khách Hàng</label>
                        <select name="MaKH" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm">
                            ${c.customers.map(x=>`<option value="${x.MaKH}" ${t&&e.MaKH===x.MaKH?"selected":""}>${x.Ten}</option>`).join("")}
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-1 uppercase text-xs">Suất Chiếu</label>
                        <select id="select-suat-chieu" name="MaSuat" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm">
                            <option value="">-- Chọn Suất Chiếu --</option>
                            ${(c.showtimes||[]).map(x=>{const m=x.TenPhim||"Phim ?",f=x.TenPhong||"Phòng ?",p=x.NgayChieu||"",T=t&&s===x.MaSuat?"selected":"";return`<option value="${x.MaSuat}" ${T}>${m} - ${f} (${p} ${x.GioBatDau||""})</option>`}).join("")}
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-1 uppercase text-xs">Số Lượng Ghế / Vé</label>
                        <input type="number" id="input-so-luong" name="SoLuong" value="${t?n.length:"1"}" min="1" max="10" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm">
                    </div>
                </div>

                <div id="seat-selection-container" class="space-y-3 pt-2">
                    <!-- Danh sách chọn ghế sẽ hiện ở đây -->
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-1 uppercase text-xs">Phương Thức TT</label>
                        <select name="PhuongThuc" class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm">
                            ${c.payments.map(x=>`<option value="${x.TenPhuongThuc}" ${t&&e.PhuongThuc===x.TenPhuongThuc?"selected":""}>${x.TenPhuongThuc}</option>`).join("")}
                            ${c.payments.length===0?`<option value="Tiền mặt" ${t&&e.PhuongThuc==="Tiền mặt"?"selected":""}>Tiền mặt (Mặc định)</option>`:""}
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-1 uppercase text-xs">Mã Giao Dịch</label>
                        <input type="text" name="MaGiaoDich" value="${o}" placeholder="GD123456" class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm">
                    </div>
                </div>

                <div class="bg-gray-900 p-4 rounded-lg border border-gray-800 flex justify-between items-center mt-4 shadow-inner">
                    <div class="flex flex-col">
                        <span class="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-white/50">Thời gian đặt</span>
                        <input type="datetime-local" name="NgayDat" value="${t?new Date(e.NgayDat).toLocaleString("sv-SE").replace(" ","T").slice(0,16):new Date().toLocaleString("sv-SE").replace(" ","T").slice(0,16)}" required class="bg-transparent font-bold text-white outline-none text-sm">
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] font-bold text-white/50 uppercase tracking-widest block">Thành tiền tạm tính</span>
                        <span id="display-tong-tien" class="text-2xl font-black text-amber-400">${t?e.TongTien.toLocaleString():"0"}đ</span>
                    </div>
                </div>

                <div class="flex justify-end gap-3 mt-6">
                    <button type="button" onclick="window.hideModal()" class="px-5 py-2 text-sm font-bold text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">Hủy</button>
                    <button type="submit" class="px-8 py-2 text-sm font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all shadow-lg active:scale-95 text-xs uppercase tracking-widest">${t?"Cập Nhật":"Xác Nhận & Xuất Hóa Đơn"}</button>
                </div>
            </form>
        </div>
    `);const a=document.getElementById("select-suat-chieu"),r=document.getElementById("input-so-luong"),l=document.getElementById("seat-selection-container"),h=document.getElementById("display-tong-tien");let u=[],d=t?n.map(x=>x.MaGhe):[];const b=()=>{const x=parseInt(r.value)||0;let m=0;for(let f=0;f<x;f++){const p=document.querySelector(`select[name="MaGhe_${f}"]`);if(p&&p.value){const T=parseInt(p.value),M=c.seats.find(w=>w.MaGhe===T);m+=(M==null?void 0:M.GiaGhe)||0}}h.innerText=m.toLocaleString()+"đ"},v=async(x=!1)=>{const m=parseInt(a.value),f=parseInt(r.value)||0;if(!m||f<=0){l.innerHTML='<p class="text-center text-xs text-gray-400 py-4 border-2 border-dashed border-gray-100 rounded-lg">Vui lòng chọn suất chiếu và số lượng để chọn ghế</p>';return}try{u=(await g.get(`/api/booked-seats/${m}`)).data,t&&m===s&&(u=u.filter(E=>!d.includes(E)))}catch{u=[]}const p=c.showtimes.find(w=>w.MaSuat===m),T=c.seats.filter(w=>w.MaPhong===(p==null?void 0:p.MaPhong));let M='<h4 class="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2"><i data-lucide="armchair" class="w-3 h-3"></i> Phân bổ ghế ngồi</h4><div class="grid grid-cols-2 gap-2">';for(let w=0;w<f;w++){const E=x&&t&&n[w]?n[w].MaGhe:"";M+=`
                <div>
                    <select name="MaGhe_${w}" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-xs bg-white h-10">
                        <option value="">-- Ghế ${w+1} --</option>
                        ${T.map(S=>{const N=u.includes(S.MaGhe),L=E===S.MaGhe;return`<option value="${S.MaGhe}" ${L?"selected":""} ${N?'disabled class="text-red-300 bg-red-50"':""}>${S.SoGhe} (${S.TenLoaiGhe} - ${S.GiaGhe.toLocaleString()}đ)${N?" [Đã đặt]":""}</option>`}).join("")}
                    </select>
                </div>
            `}M+="</div>",l.innerHTML=M,D(C);for(let w=0;w<f;w++){const E=document.querySelector(`select[name="MaGhe_${w}"]`);E&&E.addEventListener("change",b)}b()};a.addEventListener("change",()=>v(!1)),r.addEventListener("input",()=>v(!1)),await v(!0),document.getElementById("invoice-form").addEventListener("submit",async x=>{var N,L;x.preventDefault();const m=new FormData(x.target),f=Object.fromEntries(m.entries()),p=parseInt(f.MaSuat),T=c.showtimes.find(P=>P.MaSuat===p),M=parseInt(f.SoLuong),w=[];let E=0;for(let P=0;P<M;P++){const U=f[`MaGhe_${P}`];if(U){const ne=parseInt(U);w.push(ne);const J=c.seats.find(W=>W.MaGhe===ne);E+=(J==null?void 0:J.GiaGhe)||0}}if(w.length<M)return alert("Hệ thống yêu cầu bạn chọn đủ số lượng ghế đã đặt!");if(new Set(w).size!==w.length)return alert("Bạn không thể chọn một ghế cho nhiều vé trong cùng một hóa đơn!");const S={MaKH:parseInt(f.MaKH),NgayDat:f.NgayDat,MaPhim:T?T.MaPhim:0,MaSuat:p,MaGheList:w,GiaVe:0,TongTien:E,PhuongThuc:f.PhuongThuc,MaGiaoDich:f.MaGiaoDich};try{t?await g.put(`/api/invoices/${e.MaHoaDon}`,S):await g.post("/api/invoices",S),H(),Ht()}catch(P){alert("Thao tác thất bại: "+(((L=(N=P.response)==null?void 0:N.data)==null?void 0:L.error)||P.message))}})}window.editInvoice=e=>{const t=c.invoices.find(n=>n.MaHoaDon==e);t&&Gt(t)};window.deleteInvoice=async e=>{var t,n;if(confirm("Xóa hóa đơn này? Thao tác này sẽ xóa cả chi tiết hóa đơn."))try{await g.delete(`/api/invoices/${e}`),$()}catch(s){const o=((n=(t=s.response)==null?void 0:t.data)==null?void 0:n.error)||s.message;alert("Lỗi: "+o)}};window.viewInvoiceDetail=async e=>{try{const n=(await g.get(`/api/invoice-details/${e}`)).data;j(`
            <div class="p-8">
                <div class="border-b-2 border-dashed border-gray-200 pb-4 mb-4 text-center">
                    <h3 class="text-2xl font-black text-gray-900 uppercase">Chi Tiết Hóa Đơn #${e}</h3>
                    <p class="text-gray-500 text-sm mt-1">CINEMA MANAGER RECEIPT</p>
                </div>
                <div class="space-y-4">
                    ${n.map(s=>`
                        <div class="bg-gray-50 p-4 rounded-lg flex justify-between items-center border border-gray-100">
                            <div>
                                <h4 class="font-bold text-gray-900 uppercase">${s.TenPhim}</h4>
                                <p class="text-sm text-gray-600">Ghế: <span class="font-bold text-amber-600">${s.SoGhe}</span></p>
                                <p class="text-[10px] text-gray-400">Mã GD: ${s.MaGiaoDich||"N/A"}</p>
                            </div>
                            <div class="text-right">
                                <p class="font-bold text-gray-900">${s.GiaVe.toLocaleString()}đ</p>
                            </div>
                        </div>
                    `).join("")}
                </div>
                <div class="mt-8 border-t-2 border-dashed border-gray-200 pt-4 flex justify-between items-center">
                    <span class="text-lg font-bold text-gray-600">Tổng cộng</span>
                    <span class="text-2xl font-black text-red-600">${n.reduce((s,o)=>s+o.GiaVe,0).toLocaleString()}đ</span>
                </div>
                <div class="mt-8 flex justify-center">
                    <button onclick="window.hideModal()" class="bg-gray-900 text-white px-8 py-2 rounded-full hover:bg-gray-800 transition-colors uppercase font-bold tracking-widest text-sm">Đóng</button>
                </div>
            </div>
        `)}catch(t){alert("Lỗi tải chi tiết: "+t.message)}};async function Be(){const e=await g.get("/api/payments");c.payments=e.data,B.innerHTML=`
        <div class="space-y-6">
            <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h2 class="text-2xl font-bold text-gray-800 uppercase tracking-tighter">Phương Thức Thanh Toán</h2>
                <button id="btn-add-payment" class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-md">
                    <i data-lucide="plus" class="w-5 h-5"></i> Thêm Phương Thức
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-h-[700px] overflow-y-auto scrollbar-thin p-1">
                ${c.payments.map(t=>`
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-lg transition-all border-b-4 border-b-transparent hover:border-b-amber-500 relative">
                        <div class="w-24 h-24 mb-4 rounded-2xl overflow-hidden shadow-inner bg-gray-50 flex items-center justify-center p-3 group-hover:scale-105 transition-transform">
                            <img src="${t.HinhAnh||"https://cdn-icons-png.flaticon.com/512/2331/2331717.png"}" alt="${t.TenPhuongThuc}" class="max-w-full max-h-full object-contain" onerror="this.src='https://cdn-icons-png.flaticon.com/512/2331/2331717.png'">
                        </div>
                        <h4 class="font-black text-gray-900 text-lg uppercase tracking-tight">${t.TenPhuongThuc}</h4>
                        
                        <div class="mt-6 flex gap-2 invisible group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all opacity-0 group-hover:opacity-100">
                            <button onclick="window.editPayment(${t.MaThanhToan})" class="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 hover:bg-blue-100 transition-colors">
                                <i data-lucide="edit" class="w-3 h-3"></i> Sửa
                            </button>
                            <button onclick="window.deletePayment(${t.MaThanhToan})" class="bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 hover:bg-red-100 transition-colors">
                                <i data-lucide="trash-2" class="w-3 h-3"></i> Xóa
                            </button>
                        </div>
                    </div>
                `).join("")}
                ${c.payments.length===0?`
                    <div class="col-span-full py-20 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100">
                        <p class="text-gray-400 font-medium italic">Chưa có phương thức thanh toán nào được cấu hình.</p>
                    </div>
                `:""}
            </div>
        </div>
    `,document.getElementById("btn-add-payment").addEventListener("click",()=>Ut()),D(C)}function Ut(e=null){const t=!!e;j(`
        <div class="p-6">
            <h3 class="text-xl font-bold mb-4 uppercase tracking-widest text-amber-600 flex items-center gap-2">
                <i data-lucide="wallet" class="w-6 h-6"></i> ${t?"Sửa Phương Thức":"Thêm Phương Thức Mới"}
            </h3>
            <form id="payment-form" class="space-y-4">
                <div>
                    <label class="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Tên Phương Thức</label>
                    <input type="text" name="TenPhuongThuc" value="${t?e.TenPhuongThuc:""}" required class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none text-sm font-bold bg-gray-50 shadow-inner" placeholder="vd: Momo, Zalopay, ATM...">
                </div>
                <div>
                    <label class="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Link Ảnh (Logo)</label>
                    <input type="text" name="HinhAnh" value="${t?e.HinhAnh:""}" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none text-sm font-bold bg-gray-50 shadow-inner" placeholder="https://example.com/logo.png">
                    <p class="text-[9px] text-gray-400 mt-1 italic italic leading-relaxed">Sử dụng link hình ảnh trực tuyến (PNG/JPG) để hiển thị logo đại diện cho phương thức này.</p>
                </div>
                <div class="flex justify-end gap-3 mt-8">
                    <button type="button" onclick="window.hideModal()" class="px-5 py-2 text-sm font-bold text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">Hủy</button>
                    <button type="submit" class="px-8 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all shadow-lg active:scale-95 font-bold uppercase tracking-widest text-xs">${t?"Lưu Thay Đổi":"Xác Nhận Thêm"}</button>
                </div>
            </form>
        </div>
    `),document.getElementById("payment-form").addEventListener("submit",async n=>{var o,a;n.preventDefault();const s=Object.fromEntries(new FormData(n.target).entries());try{t?await g.put(`/api/payments/${e.MaThanhToan}`,s):await g.post("/api/payments",s),H(),Be()}catch(r){alert("Lỗi: "+(((a=(o=r.response)==null?void 0:o.data)==null?void 0:a.error)||r.message))}}),D(C)}window.editPayment=e=>{const t=c.payments.find(n=>n.MaThanhToan==e);t&&Ut(t)};window.deletePayment=async e=>{var t,n;if(confirm("Bạn có chắc chắn muốn xóa phương thức thanh toán này?"))try{await g.delete(`/api/payments/${e}`),Be()}catch(s){alert("Lỗi khi xóa: "+(((n=(t=s.response)==null?void 0:t.data)==null?void 0:n.error)||s.message))}};$();D(C);
