import{v4 as zg}from"https://jspm.dev/uuid";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Hg=()=>{};var Oc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Gg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],u=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},$d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,u=a?n[i+1]:0,l=i+2<n.length,g=l?n[i+2]:0,w=s>>2,A=(s&3)<<4|u>>4;let R=(u&15)<<2|g>>6,D=g&63;l||(D=64,a||(R=64)),r.push(t[w],t[A],t[R],t[D])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(jd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Gg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const g=i<n.length?t[n.charAt(i)]:64;++i;const A=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||u==null||g==null||A==null)throw new Kg;const R=s<<2|u>>4;if(r.push(R),g!==64){const D=u<<4&240|g>>2;if(r.push(D),A!==64){const P=g<<6&192|A;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Kg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wg=function(n){const e=jd(n);return $d.encodeByteArray(e,!0)},gi=function(n){return Wg(n).replace(/\./g,"")},zd=function(n){try{return $d.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=()=>Qg().__FIREBASE_DEFAULTS__,Yg=()=>{if(typeof process>"u"||typeof Oc>"u")return;const n=Oc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&zd(n[1]);return e&&JSON.parse(e)},Li=()=>{try{return Hg()||Jg()||Yg()||Xg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Hd=n=>{var e,t;return(t=(e=Li())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Zg=n=>{const e=Hd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Gd=()=>{var n;return(n=Li())===null||n===void 0?void 0:n.config},Kd=n=>{var e;return(e=Li())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n){return n.endsWith(".cloudworkstations.dev")}async function Wd(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[gi(JSON.stringify(t)),gi(JSON.stringify(a)),""].join(".")}const ur={};function nm(){const n={prod:[],emulator:[]};for(const e of Object.keys(ur))ur[e]?n.emulator.push(e):n.prod.push(e);return n}function rm(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Lc=!1;function Qd(n,e){if(typeof window>"u"||typeof document>"u"||!br(window.location.host)||ur[n]===e||ur[n]||Lc)return;ur[n]=e;function t(R){return`__firebase__banner__${R}`}const r="__firebase__banner",s=nm().prod.length>0;function a(){const R=document.getElementById(r);R&&R.remove()}function u(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function l(R,D){R.setAttribute("width","24"),R.setAttribute("id",D),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function g(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{Lc=!0,a()},R}function w(R,D){R.setAttribute("id",D),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function A(){const R=rm(r),D=t("text"),P=document.getElementById(D)||document.createElement("span"),O=t("learnmore"),b=document.getElementById(O)||document.createElement("a"),N=t("preprendIcon"),V=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const M=R.element;u(M),w(b,O);const L=g();l(V,N),M.append(V,P,b,L),document.body.appendChild(M)}s?(P.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function im(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function sm(){var n;const e=(n=Li())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function om(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function am(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function um(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cm(){const n=je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function lm(){return!sm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hm(){try{return typeof indexedDB=="object"}catch{return!1}}function dm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="FirebaseError";class Tt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=fm,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?pm(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new Tt(i,u,r)}}function pm(n,e){return n.replace(gm,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const gm=/\{\$([^}]+)}/g;function mm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function tn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(xc(s)&&xc(a)){if(!tn(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function xc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _m(n,e){const t=new ym(n,e);return t.subscribe.bind(t)}class ym{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");vm(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ts),i.error===void 0&&(i.error=Ts),i.complete===void 0&&(i.complete=Ts);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ts(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(n){return n&&n._delegate?n._delegate:n}class nn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new em;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Im(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wm(n){return n===Yt?void 0:n}function Im(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Em(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ie||(ie={}));const Am={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},bm=ie.INFO,Rm={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Sm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Rm[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qa{constructor(e){this.name=e,this._logLevel=bm,this._logHandler=Sm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Am[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Cm=(n,e)=>e.some(t=>n instanceof t);let Mc,Uc;function Pm(){return Mc||(Mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function km(){return Uc||(Uc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jd=new WeakMap,ga=new WeakMap,Yd=new WeakMap,As=new WeakMap,ja=new WeakMap;function Dm(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Ot(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Jd.set(t,n)}).catch(()=>{}),ja.set(e,n),e}function Vm(n){if(ga.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});ga.set(n,e)}let ma={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ga.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ot(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Nm(n){ma=n(ma)}function Om(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(bs(this),e,...t);return Yd.set(r,e.sort?e.sort():[e]),Ot(r)}:km().includes(n)?function(...e){return n.apply(bs(this),e),Ot(Jd.get(this))}:function(...e){return Ot(n.apply(bs(this),e))}}function Lm(n){return typeof n=="function"?Om(n):(n instanceof IDBTransaction&&Vm(n),Cm(n,Pm())?new Proxy(n,ma):n)}function Ot(n){if(n instanceof IDBRequest)return Dm(n);if(As.has(n))return As.get(n);const e=Lm(n);return e!==n&&(As.set(n,e),ja.set(e,n)),e}const bs=n=>ja.get(n);function xm(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),u=Ot(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Ot(a.result),l.oldVersion,l.newVersion,Ot(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",g=>i(g.oldVersion,g.newVersion,g))}).catch(()=>{}),u}const Mm=["get","getKey","getAll","getAllKeys","count"],Um=["put","add","delete","clear"],Rs=new Map;function Fc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Rs.get(e))return Rs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Um.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Mm.includes(t)))return;const s=async function(a,...u){const l=this.transaction(a,i?"readwrite":"readonly");let g=l.store;return r&&(g=g.index(u.shift())),(await Promise.all([g[t](...u),i&&l.done]))[0]};return Rs.set(e,s),s}Nm(n=>({...n,get:(e,t,r)=>Fc(e,t)||n.get(e,t,r),has:(e,t)=>!!Fc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Bm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Bm(n){const e=n.getComponent();return e?.type==="VERSION"}const _a="@firebase/app",Bc="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new qa("@firebase/app"),qm="@firebase/app-compat",jm="@firebase/analytics-compat",$m="@firebase/analytics",zm="@firebase/app-check-compat",Hm="@firebase/app-check",Gm="@firebase/auth",Km="@firebase/auth-compat",Wm="@firebase/database",Qm="@firebase/data-connect",Jm="@firebase/database-compat",Ym="@firebase/functions",Xm="@firebase/functions-compat",Zm="@firebase/installations",e_="@firebase/installations-compat",t_="@firebase/messaging",n_="@firebase/messaging-compat",r_="@firebase/performance",i_="@firebase/performance-compat",s_="@firebase/remote-config",o_="@firebase/remote-config-compat",a_="@firebase/storage",u_="@firebase/storage-compat",c_="@firebase/firestore",l_="@firebase/ai",h_="@firebase/firestore-compat",d_="firebase",f_="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="[DEFAULT]",p_={[_a]:"fire-core",[qm]:"fire-core-compat",[$m]:"fire-analytics",[jm]:"fire-analytics-compat",[Hm]:"fire-app-check",[zm]:"fire-app-check-compat",[Gm]:"fire-auth",[Km]:"fire-auth-compat",[Wm]:"fire-rtdb",[Qm]:"fire-data-connect",[Jm]:"fire-rtdb-compat",[Ym]:"fire-fn",[Xm]:"fire-fn-compat",[Zm]:"fire-iid",[e_]:"fire-iid-compat",[t_]:"fire-fcm",[n_]:"fire-fcm-compat",[r_]:"fire-perf",[i_]:"fire-perf-compat",[s_]:"fire-rc",[o_]:"fire-rc-compat",[a_]:"fire-gcs",[u_]:"fire-gcs-compat",[c_]:"fire-fst",[h_]:"fire-fst-compat",[l_]:"fire-vertex","fire-js":"fire-js",[d_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new Map,g_=new Map,va=new Map;function qc(n,e){try{n.container.addComponent(e)}catch(t){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Sn(n){const e=n.name;if(va.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;va.set(e,n);for(const t of mi.values())qc(t,n);for(const t of g_.values())qc(t,n);return!0}function $a(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function it(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new Rr("app","Firebase",m_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=f_;function Xd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ya,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(t||(t=Gd()),!t)throw Lt.create("no-options");const s=mi.get(i);if(s){if(tn(t,s.options)&&tn(r,s.config))return s;throw Lt.create("duplicate-app",{appName:i})}const a=new Tm(i);for(const l of va.values())a.addComponent(l);const u=new __(t,r,a);return mi.set(i,u),u}function Zd(n=ya){const e=mi.get(n);if(!e&&n===ya&&Gd())return Xd();if(!e)throw Lt.create("no-app",{appName:n});return e}function xt(n,e,t){var r;let i=(r=p_[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(u.join(" "));return}Sn(new nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="firebase-heartbeat-database",v_=1,gr="firebase-heartbeat-store";let Ss=null;function ef(){return Ss||(Ss=xm(y_,v_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(gr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Lt.create("idb-open",{originalErrorMessage:n.message})})),Ss}async function E_(n){try{const t=(await ef()).transaction(gr),r=await t.objectStore(gr).get(tf(n));return await t.done,r}catch(e){if(e instanceof Tt)yt.warn(e.message);else{const t=Lt.create("idb-get",{originalErrorMessage:e?.message});yt.warn(t.message)}}}async function jc(n,e){try{const r=(await ef()).transaction(gr,"readwrite");await r.objectStore(gr).put(e,tf(n)),await r.done}catch(t){if(t instanceof Tt)yt.warn(t.message);else{const r=Lt.create("idb-set",{originalErrorMessage:t?.message});yt.warn(r.message)}}}function tf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=1024,I_=30;class T_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new b_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$c();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>I_){const a=R_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){yt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$c(),{heartbeatsToSend:r,unsentEntries:i}=A_(this._heartbeatsCache.heartbeats),s=gi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return yt.warn(t),""}}}function $c(){return new Date().toISOString().substring(0,10)}function A_(n,e=w_){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),zc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),zc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class b_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hm()?dm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await E_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return jc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return jc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zc(n){return gi(JSON.stringify({version:2,heartbeats:n})).length}function R_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(n){Sn(new nn("platform-logger",e=>new Fm(e),"PRIVATE")),Sn(new nn("heartbeat",e=>new T_(e),"PRIVATE")),xt(_a,Bc,n),xt(_a,Bc,"esm2017"),xt("fire-js","")}S_("");var Hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mt,nf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,h){function p(){}p.prototype=h.prototype,_.D=h.prototype,_.prototype=new p,_.prototype.constructor=_,_.C=function(f,m,E){for(var I=Array(arguments.length-2),W=2;W<arguments.length;W++)I[W-2]=arguments[W];return h.prototype[m].apply(f,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,h,p){p||(p=0);var f=Array(16);if(typeof h=="string")for(var m=0;16>m;++m)f[m]=h.charCodeAt(p++)|h.charCodeAt(p++)<<8|h.charCodeAt(p++)<<16|h.charCodeAt(p++)<<24;else for(m=0;16>m;++m)f[m]=h[p++]|h[p++]<<8|h[p++]<<16|h[p++]<<24;h=_.g[0],p=_.g[1],m=_.g[2];var E=_.g[3],I=h+(E^p&(m^E))+f[0]+3614090360&4294967295;h=p+(I<<7&4294967295|I>>>25),I=E+(m^h&(p^m))+f[1]+3905402710&4294967295,E=h+(I<<12&4294967295|I>>>20),I=m+(p^E&(h^p))+f[2]+606105819&4294967295,m=E+(I<<17&4294967295|I>>>15),I=p+(h^m&(E^h))+f[3]+3250441966&4294967295,p=m+(I<<22&4294967295|I>>>10),I=h+(E^p&(m^E))+f[4]+4118548399&4294967295,h=p+(I<<7&4294967295|I>>>25),I=E+(m^h&(p^m))+f[5]+1200080426&4294967295,E=h+(I<<12&4294967295|I>>>20),I=m+(p^E&(h^p))+f[6]+2821735955&4294967295,m=E+(I<<17&4294967295|I>>>15),I=p+(h^m&(E^h))+f[7]+4249261313&4294967295,p=m+(I<<22&4294967295|I>>>10),I=h+(E^p&(m^E))+f[8]+1770035416&4294967295,h=p+(I<<7&4294967295|I>>>25),I=E+(m^h&(p^m))+f[9]+2336552879&4294967295,E=h+(I<<12&4294967295|I>>>20),I=m+(p^E&(h^p))+f[10]+4294925233&4294967295,m=E+(I<<17&4294967295|I>>>15),I=p+(h^m&(E^h))+f[11]+2304563134&4294967295,p=m+(I<<22&4294967295|I>>>10),I=h+(E^p&(m^E))+f[12]+1804603682&4294967295,h=p+(I<<7&4294967295|I>>>25),I=E+(m^h&(p^m))+f[13]+4254626195&4294967295,E=h+(I<<12&4294967295|I>>>20),I=m+(p^E&(h^p))+f[14]+2792965006&4294967295,m=E+(I<<17&4294967295|I>>>15),I=p+(h^m&(E^h))+f[15]+1236535329&4294967295,p=m+(I<<22&4294967295|I>>>10),I=h+(m^E&(p^m))+f[1]+4129170786&4294967295,h=p+(I<<5&4294967295|I>>>27),I=E+(p^m&(h^p))+f[6]+3225465664&4294967295,E=h+(I<<9&4294967295|I>>>23),I=m+(h^p&(E^h))+f[11]+643717713&4294967295,m=E+(I<<14&4294967295|I>>>18),I=p+(E^h&(m^E))+f[0]+3921069994&4294967295,p=m+(I<<20&4294967295|I>>>12),I=h+(m^E&(p^m))+f[5]+3593408605&4294967295,h=p+(I<<5&4294967295|I>>>27),I=E+(p^m&(h^p))+f[10]+38016083&4294967295,E=h+(I<<9&4294967295|I>>>23),I=m+(h^p&(E^h))+f[15]+3634488961&4294967295,m=E+(I<<14&4294967295|I>>>18),I=p+(E^h&(m^E))+f[4]+3889429448&4294967295,p=m+(I<<20&4294967295|I>>>12),I=h+(m^E&(p^m))+f[9]+568446438&4294967295,h=p+(I<<5&4294967295|I>>>27),I=E+(p^m&(h^p))+f[14]+3275163606&4294967295,E=h+(I<<9&4294967295|I>>>23),I=m+(h^p&(E^h))+f[3]+4107603335&4294967295,m=E+(I<<14&4294967295|I>>>18),I=p+(E^h&(m^E))+f[8]+1163531501&4294967295,p=m+(I<<20&4294967295|I>>>12),I=h+(m^E&(p^m))+f[13]+2850285829&4294967295,h=p+(I<<5&4294967295|I>>>27),I=E+(p^m&(h^p))+f[2]+4243563512&4294967295,E=h+(I<<9&4294967295|I>>>23),I=m+(h^p&(E^h))+f[7]+1735328473&4294967295,m=E+(I<<14&4294967295|I>>>18),I=p+(E^h&(m^E))+f[12]+2368359562&4294967295,p=m+(I<<20&4294967295|I>>>12),I=h+(p^m^E)+f[5]+4294588738&4294967295,h=p+(I<<4&4294967295|I>>>28),I=E+(h^p^m)+f[8]+2272392833&4294967295,E=h+(I<<11&4294967295|I>>>21),I=m+(E^h^p)+f[11]+1839030562&4294967295,m=E+(I<<16&4294967295|I>>>16),I=p+(m^E^h)+f[14]+4259657740&4294967295,p=m+(I<<23&4294967295|I>>>9),I=h+(p^m^E)+f[1]+2763975236&4294967295,h=p+(I<<4&4294967295|I>>>28),I=E+(h^p^m)+f[4]+1272893353&4294967295,E=h+(I<<11&4294967295|I>>>21),I=m+(E^h^p)+f[7]+4139469664&4294967295,m=E+(I<<16&4294967295|I>>>16),I=p+(m^E^h)+f[10]+3200236656&4294967295,p=m+(I<<23&4294967295|I>>>9),I=h+(p^m^E)+f[13]+681279174&4294967295,h=p+(I<<4&4294967295|I>>>28),I=E+(h^p^m)+f[0]+3936430074&4294967295,E=h+(I<<11&4294967295|I>>>21),I=m+(E^h^p)+f[3]+3572445317&4294967295,m=E+(I<<16&4294967295|I>>>16),I=p+(m^E^h)+f[6]+76029189&4294967295,p=m+(I<<23&4294967295|I>>>9),I=h+(p^m^E)+f[9]+3654602809&4294967295,h=p+(I<<4&4294967295|I>>>28),I=E+(h^p^m)+f[12]+3873151461&4294967295,E=h+(I<<11&4294967295|I>>>21),I=m+(E^h^p)+f[15]+530742520&4294967295,m=E+(I<<16&4294967295|I>>>16),I=p+(m^E^h)+f[2]+3299628645&4294967295,p=m+(I<<23&4294967295|I>>>9),I=h+(m^(p|~E))+f[0]+4096336452&4294967295,h=p+(I<<6&4294967295|I>>>26),I=E+(p^(h|~m))+f[7]+1126891415&4294967295,E=h+(I<<10&4294967295|I>>>22),I=m+(h^(E|~p))+f[14]+2878612391&4294967295,m=E+(I<<15&4294967295|I>>>17),I=p+(E^(m|~h))+f[5]+4237533241&4294967295,p=m+(I<<21&4294967295|I>>>11),I=h+(m^(p|~E))+f[12]+1700485571&4294967295,h=p+(I<<6&4294967295|I>>>26),I=E+(p^(h|~m))+f[3]+2399980690&4294967295,E=h+(I<<10&4294967295|I>>>22),I=m+(h^(E|~p))+f[10]+4293915773&4294967295,m=E+(I<<15&4294967295|I>>>17),I=p+(E^(m|~h))+f[1]+2240044497&4294967295,p=m+(I<<21&4294967295|I>>>11),I=h+(m^(p|~E))+f[8]+1873313359&4294967295,h=p+(I<<6&4294967295|I>>>26),I=E+(p^(h|~m))+f[15]+4264355552&4294967295,E=h+(I<<10&4294967295|I>>>22),I=m+(h^(E|~p))+f[6]+2734768916&4294967295,m=E+(I<<15&4294967295|I>>>17),I=p+(E^(m|~h))+f[13]+1309151649&4294967295,p=m+(I<<21&4294967295|I>>>11),I=h+(m^(p|~E))+f[4]+4149444226&4294967295,h=p+(I<<6&4294967295|I>>>26),I=E+(p^(h|~m))+f[11]+3174756917&4294967295,E=h+(I<<10&4294967295|I>>>22),I=m+(h^(E|~p))+f[2]+718787259&4294967295,m=E+(I<<15&4294967295|I>>>17),I=p+(E^(m|~h))+f[9]+3951481745&4294967295,_.g[0]=_.g[0]+h&4294967295,_.g[1]=_.g[1]+(m+(I<<21&4294967295|I>>>11))&4294967295,_.g[2]=_.g[2]+m&4294967295,_.g[3]=_.g[3]+E&4294967295}r.prototype.u=function(_,h){h===void 0&&(h=_.length);for(var p=h-this.blockSize,f=this.B,m=this.h,E=0;E<h;){if(m==0)for(;E<=p;)i(this,_,E),E+=this.blockSize;if(typeof _=="string"){for(;E<h;)if(f[m++]=_.charCodeAt(E++),m==this.blockSize){i(this,f),m=0;break}}else for(;E<h;)if(f[m++]=_[E++],m==this.blockSize){i(this,f),m=0;break}}this.h=m,this.o+=h},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var h=1;h<_.length-8;++h)_[h]=0;var p=8*this.o;for(h=_.length-8;h<_.length;++h)_[h]=p&255,p/=256;for(this.u(_),_=Array(16),h=p=0;4>h;++h)for(var f=0;32>f;f+=8)_[p++]=this.g[h]>>>f&255;return _};function s(_,h){var p=u;return Object.prototype.hasOwnProperty.call(p,_)?p[_]:p[_]=h(_)}function a(_,h){this.h=h;for(var p=[],f=!0,m=_.length-1;0<=m;m--){var E=_[m]|0;f&&E==h||(p[m]=E,f=!1)}this.g=p}var u={};function l(_){return-128<=_&&128>_?s(_,function(h){return new a([h|0],0>h?-1:0)}):new a([_|0],0>_?-1:0)}function g(_){if(isNaN(_)||!isFinite(_))return A;if(0>_)return b(g(-_));for(var h=[],p=1,f=0;_>=p;f++)h[f]=_/p|0,p*=4294967296;return new a(h,0)}function w(_,h){if(_.length==0)throw Error("number format error: empty string");if(h=h||10,2>h||36<h)throw Error("radix out of range: "+h);if(_.charAt(0)=="-")return b(w(_.substring(1),h));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=g(Math.pow(h,8)),f=A,m=0;m<_.length;m+=8){var E=Math.min(8,_.length-m),I=parseInt(_.substring(m,m+E),h);8>E?(E=g(Math.pow(h,E)),f=f.j(E).add(g(I))):(f=f.j(p),f=f.add(g(I)))}return f}var A=l(0),R=l(1),D=l(16777216);n=a.prototype,n.m=function(){if(O(this))return-b(this).m();for(var _=0,h=1,p=0;p<this.g.length;p++){var f=this.i(p);_+=(0<=f?f:4294967296+f)*h,h*=4294967296}return _},n.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(O(this))return"-"+b(this).toString(_);for(var h=g(Math.pow(_,6)),p=this,f="";;){var m=L(p,h).g;p=N(p,m.j(h));var E=((0<p.g.length?p.g[0]:p.h)>>>0).toString(_);if(p=m,P(p))return E+f;for(;6>E.length;)E="0"+E;f=E+f}},n.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(var h=0;h<_.g.length;h++)if(_.g[h]!=0)return!1;return!0}function O(_){return _.h==-1}n.l=function(_){return _=N(this,_),O(_)?-1:P(_)?0:1};function b(_){for(var h=_.g.length,p=[],f=0;f<h;f++)p[f]=~_.g[f];return new a(p,~_.h).add(R)}n.abs=function(){return O(this)?b(this):this},n.add=function(_){for(var h=Math.max(this.g.length,_.g.length),p=[],f=0,m=0;m<=h;m++){var E=f+(this.i(m)&65535)+(_.i(m)&65535),I=(E>>>16)+(this.i(m)>>>16)+(_.i(m)>>>16);f=I>>>16,E&=65535,I&=65535,p[m]=I<<16|E}return new a(p,p[p.length-1]&-2147483648?-1:0)};function N(_,h){return _.add(b(h))}n.j=function(_){if(P(this)||P(_))return A;if(O(this))return O(_)?b(this).j(b(_)):b(b(this).j(_));if(O(_))return b(this.j(b(_)));if(0>this.l(D)&&0>_.l(D))return g(this.m()*_.m());for(var h=this.g.length+_.g.length,p=[],f=0;f<2*h;f++)p[f]=0;for(f=0;f<this.g.length;f++)for(var m=0;m<_.g.length;m++){var E=this.i(f)>>>16,I=this.i(f)&65535,W=_.i(m)>>>16,Q=_.i(m)&65535;p[2*f+2*m]+=I*Q,V(p,2*f+2*m),p[2*f+2*m+1]+=E*Q,V(p,2*f+2*m+1),p[2*f+2*m+1]+=I*W,V(p,2*f+2*m+1),p[2*f+2*m+2]+=E*W,V(p,2*f+2*m+2)}for(f=0;f<h;f++)p[f]=p[2*f+1]<<16|p[2*f];for(f=h;f<2*h;f++)p[f]=0;return new a(p,0)};function V(_,h){for(;(_[h]&65535)!=_[h];)_[h+1]+=_[h]>>>16,_[h]&=65535,h++}function M(_,h){this.g=_,this.h=h}function L(_,h){if(P(h))throw Error("division by zero");if(P(_))return new M(A,A);if(O(_))return h=L(b(_),h),new M(b(h.g),b(h.h));if(O(h))return h=L(_,b(h)),new M(b(h.g),h.h);if(30<_.g.length){if(O(_)||O(h))throw Error("slowDivide_ only works with positive integers.");for(var p=R,f=h;0>=f.l(_);)p=$(p),f=$(f);var m=S(p,1),E=S(f,1);for(f=S(f,2),p=S(p,2);!P(f);){var I=E.add(f);0>=I.l(_)&&(m=m.add(p),E=I),f=S(f,1),p=S(p,1)}return h=N(_,m.j(h)),new M(m,h)}for(m=A;0<=_.l(h);){for(p=Math.max(1,Math.floor(_.m()/h.m())),f=Math.ceil(Math.log(p)/Math.LN2),f=48>=f?1:Math.pow(2,f-48),E=g(p),I=E.j(h);O(I)||0<I.l(_);)p-=f,E=g(p),I=E.j(h);P(E)&&(E=R),m=m.add(E),_=N(_,I)}return new M(m,_)}n.A=function(_){return L(this,_).h},n.and=function(_){for(var h=Math.max(this.g.length,_.g.length),p=[],f=0;f<h;f++)p[f]=this.i(f)&_.i(f);return new a(p,this.h&_.h)},n.or=function(_){for(var h=Math.max(this.g.length,_.g.length),p=[],f=0;f<h;f++)p[f]=this.i(f)|_.i(f);return new a(p,this.h|_.h)},n.xor=function(_){for(var h=Math.max(this.g.length,_.g.length),p=[],f=0;f<h;f++)p[f]=this.i(f)^_.i(f);return new a(p,this.h^_.h)};function $(_){for(var h=_.g.length+1,p=[],f=0;f<h;f++)p[f]=_.i(f)<<1|_.i(f-1)>>>31;return new a(p,_.h)}function S(_,h){var p=h>>5;h%=32;for(var f=_.g.length-p,m=[],E=0;E<f;E++)m[E]=0<h?_.i(E+p)>>>h|_.i(E+p+1)<<32-h:_.i(E+p);return new a(m,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,nf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=g,a.fromString=w,Mt=a}).apply(typeof Hc<"u"?Hc:typeof self<"u"?self:typeof window<"u"?window:{});var Yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rf,rr,sf,si,Ea,of,af,uf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yr=="object"&&Yr];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var y=0;y<o.length-1;y++){var k=o[y];if(!(k in d))break e;d=d[k]}o=o[o.length-1],y=d[o],c=c(y),c!=y&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,y=!1,k={next:function(){if(!y&&d<o.length){var x=d++;return{value:c(x,o[x]),done:!1}}return y=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function g(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function w(o,c,d){return o.call.apply(o.bind,arguments)}function A(o,c,d){if(!o)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,y),o.apply(c,k)}}return function(){return o.apply(c,arguments)}}function R(o,c,d){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:A,R.apply(null,arguments)}function D(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),o.apply(this,y)}}function P(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(y,k,x){for(var j=Array(arguments.length-2),he=2;he<arguments.length;he++)j[he-2]=arguments[he];return c.prototype[k].apply(y,j)}}function O(o){const c=o.length;if(0<c){const d=Array(c);for(let y=0;y<c;y++)d[y]=o[y];return d}return[]}function b(o,c){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(l(y)){const k=o.length||0,x=y.length||0;o.length=k+x;for(let j=0;j<x;j++)o[k+j]=y[j]}else o.push(y)}}class N{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function V(o){return/^[\s\xa0]*$/.test(o)}function M(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function L(o){return L[" "](o),o}L[" "]=function(){};var $=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function S(o,c,d){for(const y in o)c.call(d,o[y],y,o)}function _(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function h(o){const c={};for(const d in o)c[d]=o[d];return c}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function f(o,c){let d,y;for(let k=1;k<arguments.length;k++){y=arguments[k];for(d in y)o[d]=y[d];for(let x=0;x<p.length;x++)d=p[x],Object.prototype.hasOwnProperty.call(y,d)&&(o[d]=y[d])}}function m(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function E(o){u.setTimeout(()=>{throw o},0)}function I(){var o=de;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class W{constructor(){this.h=this.g=null}add(c,d){const y=Q.get();y.set(c,d),this.h?this.h.next=y:this.g=y,this.h=y}}var Q=new N(()=>new K,o=>o.reset());class K{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,_e=!1,de=new W,le=()=>{const o=u.Promise.resolve(void 0);ue=()=>{o.then(Ye)}};var Ye=()=>{for(var o;o=I();){try{o.h.call(o.g)}catch(d){E(d)}var c=Q;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}_e=!1};function Xe(){this.s=this.s,this.C=this.C}Xe.prototype.s=!1,Xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Or=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,c),u.removeEventListener("test",d,c)}catch{}return o}();function dt(o,c){if(we.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,y=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if($){e:{try{L(c.nodeName);var k=!0;break e}catch{}k=!1}k||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:$n[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&dt.aa.h.call(this)}}P(dt,we);var $n={2:"touch",3:"pen",4:"mouse"};dt.prototype.h=function(){dt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Gt="closure_listenable_"+(1e6*Math.random()|0),H=0;function v(o,c,d,y,k){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!y,this.ha=k,this.key=++H,this.da=this.fa=!1}function T(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function C(o){this.src=o,this.g={},this.h=0}C.prototype.add=function(o,c,d,y,k){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var j=F(o,c,y,k);return-1<j?(c=o[j],d||(c.fa=!1)):(c=new v(c,this.src,x,!!y,k),c.fa=d,o.push(c)),c};function B(o,c){var d=c.type;if(d in o.g){var y=o.g[d],k=Array.prototype.indexOf.call(y,c,void 0),x;(x=0<=k)&&Array.prototype.splice.call(y,k,1),x&&(T(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function F(o,c,d,y){for(var k=0;k<o.length;++k){var x=o[k];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==y)return k}return-1}var z="closure_lm_"+(1e6*Math.random()|0),ne={};function fe(o,c,d,y,k){if(Array.isArray(c)){for(var x=0;x<c.length;x++)fe(o,c[x],d,y,k);return null}return d=Uu(d),o&&o[Gt]?o.K(c,d,g(y)?!!y.capture:!1,k):Ae(o,c,d,!1,y,k)}function Ae(o,c,d,y,k,x){if(!c)throw Error("Invalid event type");var j=g(k)?!!k.capture:!!k,he=nt(o);if(he||(o[z]=he=new C(o)),d=he.add(c,d,y,j,x),d.proxy)return d;if(y=Ke(),d.proxy=y,y.src=o,y.listener=d,o.addEventListener)Or||(k=j),k===void 0&&(k=!1),o.addEventListener(c.toString(),y,k);else if(o.attachEvent)o.attachEvent(Ie(c.toString()),y);else if(o.addListener&&o.removeListener)o.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ke(){function o(d){return c.call(o.src,o.listener,d)}const c=ye;return o}function De(o,c,d,y,k){if(Array.isArray(c))for(var x=0;x<c.length;x++)De(o,c[x],d,y,k);else y=g(y)?!!y.capture:!!y,d=Uu(d),o&&o[Gt]?(o=o.i,c=String(c).toString(),c in o.g&&(x=o.g[c],d=F(x,d,y,k),-1<d&&(T(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete o.g[c],o.h--)))):o&&(o=nt(o))&&(c=o.g[c.toString()],o=-1,c&&(o=F(c,d,y,k)),(d=-1<o?c[o]:null)&&Pe(d))}function Pe(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Gt])B(c.i,o);else{var d=o.type,y=o.proxy;c.removeEventListener?c.removeEventListener(d,y,o.capture):c.detachEvent?c.detachEvent(Ie(d),y):c.addListener&&c.removeListener&&c.removeListener(y),(d=nt(c))?(B(d,o),d.h==0&&(d.src=null,c[z]=null)):T(o)}}}function Ie(o){return o in ne?ne[o]:ne[o]="on"+o}function ye(o,c){if(o.da)o=!0;else{c=new dt(c,this);var d=o.listener,y=o.ha||o.src;o.fa&&Pe(o),o=d.call(y,c)}return o}function nt(o){return o=o[z],o instanceof C?o:null}var dn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uu(o){return typeof o=="function"?o:(o[dn]||(o[dn]=function(c){return o.handleEvent(c)}),o[dn])}function xe(){Xe.call(this),this.i=new C(this),this.M=this,this.F=null}P(xe,Xe),xe.prototype[Gt]=!0,xe.prototype.removeEventListener=function(o,c,d,y){De(this,o,c,d,y)};function $e(o,c){var d,y=o.F;if(y)for(d=[];y;y=y.F)d.push(y);if(o=o.M,y=c.type||c,typeof c=="string")c=new we(c,o);else if(c instanceof we)c.target=c.target||o;else{var k=c;c=new we(y,o),f(c,k)}if(k=!0,d)for(var x=d.length-1;0<=x;x--){var j=c.g=d[x];k=Lr(j,y,!0,c)&&k}if(j=c.g=o,k=Lr(j,y,!0,c)&&k,k=Lr(j,y,!1,c)&&k,d)for(x=0;x<d.length;x++)j=c.g=d[x],k=Lr(j,y,!1,c)&&k}xe.prototype.N=function(){if(xe.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],y=0;y<d.length;y++)T(d[y]);delete o.g[c],o.h--}}this.F=null},xe.prototype.K=function(o,c,d,y){return this.i.add(String(o),c,!1,d,y)},xe.prototype.L=function(o,c,d,y){return this.i.add(String(o),c,!0,d,y)};function Lr(o,c,d,y){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var k=!0,x=0;x<c.length;++x){var j=c[x];if(j&&!j.da&&j.capture==d){var he=j.listener,Ve=j.ha||j.src;j.fa&&B(o.i,j),k=he.call(Ve,y)!==!1&&k}}return k&&!y.defaultPrevented}function Fu(o,c,d){if(typeof o=="function")d&&(o=R(o,d));else if(o&&typeof o.handleEvent=="function")o=R(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Bu(o){o.g=Fu(()=>{o.g=null,o.i&&(o.i=!1,Bu(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class yg extends Xe{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Bu(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zn(o){Xe.call(this),this.h=o,this.g={}}P(zn,Xe);var qu=[];function ju(o){S(o.g,function(c,d){this.g.hasOwnProperty(d)&&Pe(c)},o),o.g={}}zn.prototype.N=function(){zn.aa.N.call(this),ju(this)},zn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var as=u.JSON.stringify,vg=u.JSON.parse,Eg=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function us(){}us.prototype.h=null;function $u(o){return o.h||(o.h=o.i())}function zu(){}var Hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cs(){we.call(this,"d")}P(cs,we);function ls(){we.call(this,"c")}P(ls,we);var Kt={},Hu=null;function xr(){return Hu=Hu||new xe}Kt.La="serverreachability";function Gu(o){we.call(this,Kt.La,o)}P(Gu,we);function Gn(o){const c=xr();$e(c,new Gu(c))}Kt.STAT_EVENT="statevent";function Ku(o,c){we.call(this,Kt.STAT_EVENT,o),this.stat=c}P(Ku,we);function ze(o){const c=xr();$e(c,new Ku(c,o))}Kt.Ma="timingevent";function Wu(o,c){we.call(this,Kt.Ma,o),this.size=c}P(Wu,we);function Kn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Wn(){this.g=!0}Wn.prototype.xa=function(){this.g=!1};function wg(o,c,d,y,k,x){o.info(function(){if(o.g)if(x)for(var j="",he=x.split("&"),Ve=0;Ve<he.length;Ve++){var ae=he[Ve].split("=");if(1<ae.length){var Me=ae[0];ae=ae[1];var Ue=Me.split("_");j=2<=Ue.length&&Ue[1]=="type"?j+(Me+"="+ae+"&"):j+(Me+"=redacted&")}}else j=null;else j=x;return"XMLHTTP REQ ("+y+") [attempt "+k+"]: "+c+`
`+d+`
`+j})}function Ig(o,c,d,y,k,x,j){o.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+k+"]: "+c+`
`+d+`
`+x+" "+j})}function fn(o,c,d,y){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ag(o,d)+(y?" "+y:"")})}function Tg(o,c){o.info(function(){return"TIMEOUT: "+c})}Wn.prototype.info=function(){};function Ag(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var y=d[o];if(!(2>y.length)){var k=y[1];if(Array.isArray(k)&&!(1>k.length)){var x=k[0];if(x!="noop"&&x!="stop"&&x!="close")for(var j=1;j<k.length;j++)k[j]=""}}}}return as(d)}catch{return c}}var Mr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Qu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hs;function Ur(){}P(Ur,us),Ur.prototype.g=function(){return new XMLHttpRequest},Ur.prototype.i=function(){return{}},hs=new Ur;function bt(o,c,d,y){this.j=o,this.i=c,this.l=d,this.R=y||1,this.U=new zn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ju}function Ju(){this.i=null,this.g="",this.h=!1}var Yu={},ds={};function fs(o,c,d){o.L=1,o.v=jr(ft(c)),o.m=d,o.P=!0,Xu(o,null)}function Xu(o,c){o.F=Date.now(),Fr(o),o.A=ft(o.v);var d=o.A,y=o.R;Array.isArray(y)||(y=[String(y)]),dc(d.i,"t",y),o.C=0,d=o.j.J,o.h=new Ju,o.g=kc(o.j,d?c:null,!o.m),0<o.O&&(o.M=new yg(R(o.Y,o,o.g),o.O)),c=o.U,d=o.g,y=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(qu[0]=k.toString()),k=qu);for(var x=0;x<k.length;x++){var j=fe(d,k[x],y||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=o.H?h(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Gn(),wg(o.i,o.u,o.A,o.l,o.R,o.m)}bt.prototype.ca=function(o){o=o.target;const c=this.M;c&&pt(o)==3?c.j():this.Y(o)},bt.prototype.Y=function(o){try{if(o==this.g)e:{const Ue=pt(this.g);var c=this.g.Ba();const mn=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||vc(this.g)))){this.J||Ue!=4||c==7||(c==8||0>=mn?Gn(3):Gn(2)),ps(this);var d=this.g.Z();this.X=d;t:if(Zu(this)){var y=vc(this.g);o="";var k=y.length,x=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wt(this),Qn(this);var j="";break t}this.h.i=new u.TextDecoder}for(c=0;c<k;c++)this.h.h=!0,o+=this.h.i.decode(y[c],{stream:!(x&&c==k-1)});y.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,Ig(this.i,this.u,this.A,this.l,this.R,Ue,d),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Ve=this.g;if((he=Ve.g?Ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(he)){var ae=he;break t}}ae=null}if(d=ae)fn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gs(this,d);else{this.o=!1,this.s=3,ze(12),Wt(this),Qn(this);break e}}if(this.P){d=!0;let Ze;for(;!this.J&&this.C<j.length;)if(Ze=bg(this,j),Ze==ds){Ue==4&&(this.s=4,ze(14),d=!1),fn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ze==Yu){this.s=4,ze(15),fn(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else fn(this.i,this.l,Ze,null),gs(this,Ze);if(Zu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||j.length!=0||this.h.h||(this.s=1,ze(16),d=!1),this.o=this.o&&d,!d)fn(this.i,this.l,j,"[Invalid Chunked Response]"),Wt(this),Qn(this);else if(0<j.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),ws(Me),Me.M=!0,ze(11))}}else fn(this.i,this.l,j,null),gs(this,j);Ue==4&&Wt(this),this.o&&!this.J&&(Ue==4?Rc(this.j,this):(this.o=!1,Fr(this)))}else jg(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),Wt(this),Qn(this)}}}catch{}finally{}};function Zu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function bg(o,c){var d=o.C,y=c.indexOf(`
`,d);return y==-1?ds:(d=Number(c.substring(d,y)),isNaN(d)?Yu:(y+=1,y+d>c.length?ds:(c=c.slice(y,y+d),o.C=y+d,c)))}bt.prototype.cancel=function(){this.J=!0,Wt(this)};function Fr(o){o.S=Date.now()+o.I,ec(o,o.I)}function ec(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Kn(R(o.ba,o),c)}function ps(o){o.B&&(u.clearTimeout(o.B),o.B=null)}bt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Tg(this.i,this.A),this.L!=2&&(Gn(),ze(17)),Wt(this),this.s=2,Qn(this)):ec(this,this.S-o)};function Qn(o){o.j.G==0||o.J||Rc(o.j,o)}function Wt(o){ps(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,ju(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function gs(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||ms(d.h,o))){if(!o.K&&ms(d.h,o)&&d.G==3){try{var y=d.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var k=y;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Wr(d),Gr(d);else break e;Es(d),ze(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=Kn(R(d.Za,d),6e3));if(1>=rc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Jt(d,11)}else if((o.K||d.g==o)&&Wr(d),!V(c))for(k=d.Da.g.parse(c),c=0;c<k.length;c++){let ae=k[c];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const Me=ae[3];Me!=null&&(d.la=Me,d.j.info("VER="+d.la));const Ue=ae[4];Ue!=null&&(d.Aa=Ue,d.j.info("SVER="+d.Aa));const mn=ae[5];mn!=null&&typeof mn=="number"&&0<mn&&(y=1.5*mn,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const Ze=o.g;if(Ze){const Jr=Ze.g?Ze.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jr){var x=y.h;x.g||Jr.indexOf("spdy")==-1&&Jr.indexOf("quic")==-1&&Jr.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(_s(x,x.h),x.h=null))}if(y.D){const Is=Ze.g?Ze.g.getResponseHeader("X-HTTP-Session-Id"):null;Is&&(y.ya=Is,pe(y.I,y.D,Is))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var j=o;if(y.qa=Pc(y,y.J?y.ia:null,y.W),j.K){ic(y.h,j);var he=j,Ve=y.L;Ve&&(he.I=Ve),he.B&&(ps(he),Fr(he)),y.g=j}else Ac(y);0<d.i.length&&Kr(d)}else ae[0]!="stop"&&ae[0]!="close"||Jt(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Jt(d,7):vs(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}Gn(4)}catch{}}var Rg=class{constructor(o,c){this.g=o,this.map=c}};function tc(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function rc(o){return o.h?1:o.g?o.g.size:0}function ms(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function _s(o,c){o.g?o.g.add(c):o.h=c}function ic(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}tc.prototype.cancel=function(){if(this.i=sc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function sc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return O(o.i)}function Sg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],d=o.length,y=0;y<d;y++)c.push(o[y]);return c}c=[],d=0;for(y in o)c[d++]=o[y];return c}function Cg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const y in o)c[d++]=y;return c}}}function oc(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=Cg(o),y=Sg(o),k=y.length,x=0;x<k;x++)c.call(void 0,y[x],d&&d[x],o)}var ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pg(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var y=o[d].indexOf("="),k=null;if(0<=y){var x=o[d].substring(0,y);k=o[d].substring(y+1)}else x=o[d];c(x,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Qt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Qt){this.h=o.h,Br(this,o.j),this.o=o.o,this.g=o.g,qr(this,o.s),this.l=o.l;var c=o.i,d=new Xn;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),uc(this,d),this.m=o.m}else o&&(c=String(o).match(ac))?(this.h=!1,Br(this,c[1]||"",!0),this.o=Jn(c[2]||""),this.g=Jn(c[3]||"",!0),qr(this,c[4]),this.l=Jn(c[5]||"",!0),uc(this,c[6]||"",!0),this.m=Jn(c[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}Qt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Yn(c,cc,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Yn(c,cc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Yn(d,d.charAt(0)=="/"?Vg:Dg,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Yn(d,Og)),o.join("")};function ft(o){return new Qt(o)}function Br(o,c,d){o.j=d?Jn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function qr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function uc(o,c,d){c instanceof Xn?(o.i=c,Lg(o.i,o.h)):(d||(c=Yn(c,Ng)),o.i=new Xn(c,o.h))}function pe(o,c,d){o.i.set(c,d)}function jr(o){return pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Jn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Yn(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,kg),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function kg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var cc=/[#\/\?@]/g,Dg=/[#\?:]/g,Vg=/[#\?]/g,Ng=/[#\?@]/g,Og=/#/g;function Xn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Rt(o){o.g||(o.g=new Map,o.h=0,o.i&&Pg(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=Xn.prototype,n.add=function(o,c){Rt(this),this.i=null,o=pn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function lc(o,c){Rt(o),c=pn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function hc(o,c){return Rt(o),c=pn(o,c),o.g.has(c)}n.forEach=function(o,c){Rt(this),this.g.forEach(function(d,y){d.forEach(function(k){o.call(c,k,y,this)},this)},this)},n.na=function(){Rt(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let y=0;y<c.length;y++){const k=o[y];for(let x=0;x<k.length;x++)d.push(c[y])}return d},n.V=function(o){Rt(this);let c=[];if(typeof o=="string")hc(this,o)&&(c=c.concat(this.g.get(pn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return Rt(this),this.i=null,o=pn(this,o),hc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function dc(o,c,d){lc(o,c),0<d.length&&(o.i=null,o.g.set(pn(o,c),O(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var y=c[d];const x=encodeURIComponent(String(y)),j=this.V(y);for(y=0;y<j.length;y++){var k=x;j[y]!==""&&(k+="="+encodeURIComponent(String(j[y]))),o.push(k)}}return this.i=o.join("&")};function pn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Lg(o,c){c&&!o.j&&(Rt(o),o.i=null,o.g.forEach(function(d,y){var k=y.toLowerCase();y!=k&&(lc(this,y),dc(this,k,d))},o)),o.j=c}function xg(o,c){const d=new Wn;if(u.Image){const y=new Image;y.onload=D(St,d,"TestLoadImage: loaded",!0,c,y),y.onerror=D(St,d,"TestLoadImage: error",!1,c,y),y.onabort=D(St,d,"TestLoadImage: abort",!1,c,y),y.ontimeout=D(St,d,"TestLoadImage: timeout",!1,c,y),u.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=o}else c(!1)}function Mg(o,c){const d=new Wn,y=new AbortController,k=setTimeout(()=>{y.abort(),St(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:y.signal}).then(x=>{clearTimeout(k),x.ok?St(d,"TestPingServer: ok",!0,c):St(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(k),St(d,"TestPingServer: error",!1,c)})}function St(o,c,d,y,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),y(d)}catch{}}function Ug(){this.g=new Eg}function Fg(o,c,d){const y=d||"";try{oc(o,function(k,x){let j=k;g(k)&&(j=as(k)),c.push(y+x+"="+encodeURIComponent(j))})}catch(k){throw c.push(y+"type="+encodeURIComponent("_badmap")),k}}function $r(o){this.l=o.Ub||null,this.j=o.eb||!1}P($r,us),$r.prototype.g=function(){return new zr(this.l,this.j)},$r.prototype.i=function(o){return function(){return o}}({});function zr(o,c){xe.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(zr,xe),n=zr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,er(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,er(this)),this.g&&(this.readyState=3,er(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function fc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Zn(this):er(this),this.readyState==3&&fc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Zn(this))},n.Qa=function(o){this.g&&(this.response=o,Zn(this))},n.ga=function(){this.g&&Zn(this)};function Zn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,er(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function er(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function pc(o){let c="";return S(o,function(d,y){c+=y,c+=":",c+=d,c+=`\r
`}),c}function ys(o,c,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=pc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):pe(o,c,d))}function ve(o){xe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ve,xe);var Bg=/^https?$/i,qg=["POST","PUT"];n=ve.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hs.g(),this.v=this.o?$u(this.o):$u(hs),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(x){gc(this,x);return}if(o=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var k in y)d.set(k,y[k]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const x of y.keys())d.set(x,y.get(x));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),k=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(qg,c,void 0))||y||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,j]of d)this.g.setRequestHeader(x,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yc(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){gc(this,x)}};function gc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,mc(o),Hr(o)}function mc(o){o.A||(o.A=!0,$e(o,"complete"),$e(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,$e(this,"complete"),$e(this,"abort"),Hr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hr(this,!0)),ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?_c(this):this.bb())},n.bb=function(){_c(this)};function _c(o){if(o.h&&typeof a<"u"&&(!o.v[1]||pt(o)!=4||o.Z()!=2)){if(o.u&&pt(o)==4)Fu(o.Ea,0,o);else if($e(o,"readystatechange"),pt(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var y;if(y=j===0){var k=String(o.D).match(ac)[1]||null;!k&&u.self&&u.self.location&&(k=u.self.location.protocol.slice(0,-1)),y=!Bg.test(k?k.toLowerCase():"")}d=y}if(d)$e(o,"complete"),$e(o,"success");else{o.m=6;try{var x=2<pt(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",mc(o)}}finally{Hr(o)}}}}function Hr(o,c){if(o.g){yc(o);const d=o.g,y=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||$e(o,"ready");try{d.onreadystatechange=y}catch{}}}function yc(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function pt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),vg(c)}};function vc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function jg(o){const c={};o=(o.g&&2<=pt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<o.length;y++){if(V(o[y]))continue;var d=m(o[y]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[k]||[];c[k]=x,x.push(d)}_(c,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function tr(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Ec(o){this.Aa=0,this.i=[],this.j=new Wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tr("baseRetryDelayMs",5e3,o),this.cb=tr("retryDelaySeedMs",1e4,o),this.Wa=tr("forwardChannelMaxRetries",2,o),this.wa=tr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new tc(o&&o.concurrentRequestLimit),this.Da=new Ug,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ec.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,y){ze(0),this.W=o,this.H=c||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=Pc(this,null,this.W),Kr(this)};function vs(o){if(wc(o),o.G==3){var c=o.U++,d=ft(o.I);if(pe(d,"SID",o.K),pe(d,"RID",c),pe(d,"TYPE","terminate"),nr(o,d),c=new bt(o,o.j,c),c.L=2,c.v=jr(ft(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=c.v,d=!0),d||(c.g=kc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Fr(c)}Cc(o)}function Gr(o){o.g&&(ws(o),o.g.cancel(),o.g=null)}function wc(o){Gr(o),o.u&&(u.clearTimeout(o.u),o.u=null),Wr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Kr(o){if(!nc(o.h)&&!o.s){o.s=!0;var c=o.Ga;ue||le(),_e||(ue(),_e=!0),de.add(c,o),o.B=0}}function $g(o,c){return rc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Kn(R(o.Ga,o,c),Sc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new bt(this,this.j,o);let x=this.o;if(this.S&&(x?(x=h(x),f(x,this.S)):x=this.S),this.m!==null||this.O||(k.H=x,x=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Tc(this,k,c),d=ft(this.I),pe(d,"RID",o),pe(d,"CVER",22),this.D&&pe(d,"X-HTTP-Session-Id",this.D),nr(this,d),x&&(this.O?c="headers="+encodeURIComponent(String(pc(x)))+"&"+c:this.m&&ys(d,this.m,x)),_s(this.h,k),this.Ua&&pe(d,"TYPE","init"),this.P?(pe(d,"$req",c),pe(d,"SID","null"),k.T=!0,fs(k,d,null)):fs(k,d,c),this.G=2}}else this.G==3&&(o?Ic(this,o):this.i.length==0||nc(this.h)||Ic(this))};function Ic(o,c){var d;c?d=c.l:d=o.U++;const y=ft(o.I);pe(y,"SID",o.K),pe(y,"RID",d),pe(y,"AID",o.T),nr(o,y),o.m&&o.o&&ys(y,o.m,o.o),d=new bt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Tc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),_s(o.h,d),fs(d,y,c)}function nr(o,c){o.H&&S(o.H,function(d,y){pe(c,y,d)}),o.l&&oc({},function(d,y){pe(c,y,d)})}function Tc(o,c,d){d=Math.min(o.i.length,d);var y=o.l?R(o.l.Na,o.l,o):null;e:{var k=o.i;let x=-1;for(;;){const j=["count="+d];x==-1?0<d?(x=k[0].g,j.push("ofs="+x)):x=0:j.push("ofs="+x);let he=!0;for(let Ve=0;Ve<d;Ve++){let ae=k[Ve].g;const Me=k[Ve].map;if(ae-=x,0>ae)x=Math.max(0,k[Ve].g-100),he=!1;else try{Fg(Me,j,"req"+ae+"_")}catch{y&&y(Me)}}if(he){y=j.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,y}function Ac(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;ue||le(),_e||(ue(),_e=!0),de.add(c,o),o.v=0}}function Es(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Kn(R(o.Fa,o),Sc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,bc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Kn(R(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),Gr(this),bc(this))};function ws(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function bc(o){o.g=new bt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=ft(o.qa);pe(c,"RID","rpc"),pe(c,"SID",o.K),pe(c,"AID",o.T),pe(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&pe(c,"TO",o.ja),pe(c,"TYPE","xmlhttp"),nr(o,c),o.m&&o.o&&ys(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=jr(ft(c)),d.m=null,d.P=!0,Xu(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Gr(this),Es(this),ze(19))};function Wr(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Rc(o,c){var d=null;if(o.g==c){Wr(o),ws(o),o.g=null;var y=2}else if(ms(o.h,c))d=c.D,ic(o.h,c),y=1;else return;if(o.G!=0){if(c.o)if(y==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var k=o.B;y=xr(),$e(y,new Wu(y,d)),Kr(o)}else Ac(o);else if(k=c.s,k==3||k==0&&0<c.X||!(y==1&&$g(o,c)||y==2&&Es(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),k){case 1:Jt(o,5);break;case 4:Jt(o,10);break;case 3:Jt(o,6);break;default:Jt(o,2)}}}function Sc(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function Jt(o,c){if(o.j.info("Error code "+c),c==2){var d=R(o.fb,o),y=o.Xa;const k=!y;y=new Qt(y||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Br(y,"https"),jr(y),k?xg(y.toString(),d):Mg(y.toString(),d)}else ze(2);o.G=0,o.l&&o.l.sa(c),Cc(o),wc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function Cc(o){if(o.G=0,o.ka=[],o.l){const c=sc(o.h);(c.length!=0||o.i.length!=0)&&(b(o.ka,c),b(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function Pc(o,c,d){var y=d instanceof Qt?ft(d):new Qt(d);if(y.g!="")c&&(y.g=c+"."+y.g),qr(y,y.s);else{var k=u.location;y=k.protocol,c=c?c+"."+k.hostname:k.hostname,k=+k.port;var x=new Qt(null);y&&Br(x,y),c&&(x.g=c),k&&qr(x,k),d&&(x.l=d),y=x}return d=o.D,c=o.ya,d&&c&&pe(y,d,c),pe(y,"VER",o.la),nr(o,y),y}function kc(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ve(new $r({eb:d})):new ve(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dc(){}n=Dc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Qr(){}Qr.prototype.g=function(o,c){return new We(o,c)};function We(o,c){xe.call(this),this.g=new Ec(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!V(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!V(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new gn(this)}P(We,xe),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){vs(this.g)},We.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=as(o),o=d);c.i.push(new Rg(c.Ya++,o)),c.G==3&&Kr(c)},We.prototype.N=function(){this.g.l=null,delete this.j,vs(this.g),delete this.g,We.aa.N.call(this)};function Vc(o){cs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}P(Vc,cs);function Nc(){ls.call(this),this.status=1}P(Nc,ls);function gn(o){this.g=o}P(gn,Dc),gn.prototype.ua=function(){$e(this.g,"a")},gn.prototype.ta=function(o){$e(this.g,new Vc(o))},gn.prototype.sa=function(o){$e(this.g,new Nc)},gn.prototype.ra=function(){$e(this.g,"b")},Qr.prototype.createWebChannel=Qr.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,uf=function(){return new Qr},af=function(){return xr()},of=Kt,Ea={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mr.NO_ERROR=0,Mr.TIMEOUT=8,Mr.HTTP_ERROR=6,si=Mr,Qu.COMPLETE="complete",sf=Qu,zu.EventType=Hn,Hn.OPEN="a",Hn.CLOSE="b",Hn.ERROR="c",Hn.MESSAGE="d",xe.prototype.listen=xe.prototype.K,rr=zu,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,rf=ve}).apply(typeof Yr<"u"?Yr:typeof self<"u"?self:typeof window<"u"?window:{});const Gc="@firebase/firestore",Kc="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new qa("@firebase/firestore");function yn(){return rn.logLevel}function G(n,...e){if(rn.logLevel<=ie.DEBUG){const t=e.map(za);rn.debug(`Firestore (${Mn}): ${n}`,...t)}}function vt(n,...e){if(rn.logLevel<=ie.ERROR){const t=e.map(za);rn.error(`Firestore (${Mn}): ${n}`,...t)}}function Cn(n,...e){if(rn.logLevel<=ie.WARN){const t=e.map(za);rn.warn(`Firestore (${Mn}): ${n}`,...t)}}function za(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,cf(n,r,t)}function cf(n,e,t){let r=`FIRESTORE (${Mn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw vt(r),new Error(r)}function ce(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||cf(e,i,r)}function te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Tt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class C_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Be.UNAUTHENTICATED))}shutdown(){}}class P_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class k_{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ce(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ut,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},u=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ut)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string",31837,{l:r}),new lf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new Be(e)}}class D_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class V_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new D_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,it(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ce(this.o===void 0,3512);const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ce(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Wc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=O_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function re(n,e){return n<e?-1:n>e?1:0}function wa(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return re(r,i);{const s=hf(),a=L_(s.encode(Qc(n,t)),s.encode(Qc(e,t)));return a!==0?a:re(r,i)}}t+=r>65535?2:1}return re(n.length,e.length)}function Qc(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function L_(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return re(n[t],e[t]);return re(n.length,e.length)}function Pn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=-62135596800,Yc=1e6;class Se{static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Yc);return new Se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Jc)throw new J(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yc}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Jc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Se(0,0))}static max(){return new ee(new Se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="__name__";class rt{constructor(e,t,r){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&X(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return rt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=rt.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return re(e.length,t.length)}static compareSegments(e,t){const r=rt.isNumericId(e),i=rt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?rt.extractNumericId(e).compare(rt.extractNumericId(t)):wa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mt.fromString(e.substring(4,e.length-2))}}class Ee extends rt{construct(e,t,r){return new Ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Ee(t)}static emptyPath(){return new Ee([])}}const x_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends rt{construct(e,t,r){return new Oe(e,t,r)}static isValidIdentifier(e){return x_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xc}static keyField(){return new Oe([Xc])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new J(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new J(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new J(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(t)}static emptyPath(){return new Oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ee.fromString(e))}static fromName(e){return new Y(Ee.fromString(e).popFirst(5))}static empty(){return new Y(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ee(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=-1;function M_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Se(t+1,0):new Se(t,r));return new Ft(i,Y.empty(),e)}function U_(n){return new Ft(n.readTime,n.key,mr)}class Ft{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ft(ee.min(),Y.empty(),mr)}static max(){return new Ft(ee.max(),Y.empty(),mr)}}function F_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:re(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(n){if(n.code!==q.FAILED_PRECONDITION||n.message!==B_)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,r)=>{t(e)})}static reject(e){return new U((t,r)=>{r(e)})}static waitFor(e){return new U((t,r)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=U.resolve(!1);for(const r of e)t=t.next(i=>i?U.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new U((r,i)=>{const s=e.length,a=new Array(s);let u=0;for(let l=0;l<s;l++){const g=l;t(e[g]).next(w=>{a[g]=w,++u,u===s&&r(a)},w=>i(w))}})}static doWhile(e,t){return new U((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function j_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Fn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}xi.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=-1;function Mi(n){return n==null}function _i(n){return n===0&&1/n==-1/0}function $_(n){return typeof n=="number"&&Number.isInteger(n)&&!_i(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="";function z_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Zc(e)),e=H_(n.get(t),e);return Zc(e)}function H_(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case ff:t+="";break;default:t+=s}}return t}function Zc(n){return n+ff+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ht(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function pf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xr(this.root,e,this.comparator,!0)}}class Xr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ne.RED,this.left=i??Ne.EMPTY,this.right=s??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ne(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ne.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tl(this.data.getIterator())}getIteratorFrom(e){return new tl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ce(this.comparator);return t.data=e,t}}class tl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new et([])}unionWith(e){let t=new Ce(Oe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new et(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Pn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new gf("Invalid base64 string: "+s):s}}(e);return new Le(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const G_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(n){if(ce(!!n,39018),typeof n=="string"){let e=0;const t=G_.exec(n);if(ce(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(n.seconds),nanos:Te(n.nanos)}}function Te(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qt(n){return typeof n=="string"?Le.fromBase64String(n):Le.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="server_timestamp",_f="__type__",yf="__previous_value__",vf="__local_write_time__";function Ga(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[_f])===null||t===void 0?void 0:t.stringValue)===mf}function Ui(n){const e=n.mapValue.fields[yf];return Ga(e)?Ui(e):e}function _r(n){const e=Bt(n.mapValue.fields[vf].timestampValue);return new Se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t,r,i,s,a,u,l,g,w){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=g,this.isUsingEmulator=w}}const yi="(default)";class yr{constructor(e,t){this.projectId=e,this.database=t||yi}static empty(){return new yr("","")}get isDefaultDatabase(){return this.database===yi}isEqual(e){return e instanceof yr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="__type__",W_="__max__",Zr={mapValue:{}},wf="__vector__",vi="value";function jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ga(n)?4:J_(n)?9007199254740991:Q_(n)?10:11:X(28295,{value:n})}function lt(n,e){if(n===e)return!0;const t=jt(n);if(t!==jt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return _r(n).isEqual(_r(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Bt(i.timestampValue),u=Bt(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return qt(i.bytesValue).isEqual(qt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Te(i.geoPointValue.latitude)===Te(s.geoPointValue.latitude)&&Te(i.geoPointValue.longitude)===Te(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Te(i.integerValue)===Te(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Te(i.doubleValue),u=Te(s.doubleValue);return a===u?_i(a)===_i(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return Pn(n.arrayValue.values||[],e.arrayValue.values||[],lt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(el(a)!==el(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!lt(a[l],u[l])))return!1;return!0}(n,e);default:return X(52216,{left:n})}}function vr(n,e){return(n.values||[]).find(t=>lt(t,e))!==void 0}function kn(n,e){if(n===e)return 0;const t=jt(n),r=jt(e);if(t!==r)return re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return re(n.booleanValue,e.booleanValue);case 2:return function(s,a){const u=Te(s.integerValue||s.doubleValue),l=Te(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(n,e);case 3:return nl(n.timestampValue,e.timestampValue);case 4:return nl(_r(n),_r(e));case 5:return wa(n.stringValue,e.stringValue);case 6:return function(s,a){const u=qt(s),l=qt(a);return u.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const u=s.split("/"),l=a.split("/");for(let g=0;g<u.length&&g<l.length;g++){const w=re(u[g],l[g]);if(w!==0)return w}return re(u.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const u=re(Te(s.latitude),Te(a.latitude));return u!==0?u:re(Te(s.longitude),Te(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return rl(n.arrayValue,e.arrayValue);case 10:return function(s,a){var u,l,g,w;const A=s.fields||{},R=a.fields||{},D=(u=A[vi])===null||u===void 0?void 0:u.arrayValue,P=(l=R[vi])===null||l===void 0?void 0:l.arrayValue,O=re(((g=D?.values)===null||g===void 0?void 0:g.length)||0,((w=P?.values)===null||w===void 0?void 0:w.length)||0);return O!==0?O:rl(D,P)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Zr.mapValue&&a===Zr.mapValue)return 0;if(s===Zr.mapValue)return 1;if(a===Zr.mapValue)return-1;const u=s.fields||{},l=Object.keys(u),g=a.fields||{},w=Object.keys(g);l.sort(),w.sort();for(let A=0;A<l.length&&A<w.length;++A){const R=wa(l[A],w[A]);if(R!==0)return R;const D=kn(u[l[A]],g[w[A]]);if(D!==0)return D}return re(l.length,w.length)}(n.mapValue,e.mapValue);default:throw X(23264,{Pe:t})}}function nl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return re(n,e);const t=Bt(n),r=Bt(e),i=re(t.seconds,r.seconds);return i!==0?i:re(t.nanos,r.nanos)}function rl(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=kn(t[i],r[i]);if(s)return s}return re(t.length,r.length)}function Dn(n){return Ia(n)}function Ia(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Bt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return qt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Y.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Ia(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Ia(t.fields[a])}`;return i+"}"}(n.mapValue):X(61005,{value:n})}function oi(n){switch(jt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ui(n);return e?16+oi(e):16;case 5:return 2*n.stringValue.length;case 6:return qt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+oi(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Ht(r.fields,(s,a)=>{i+=s.length+oi(a)}),i}(n.mapValue);default:throw X(13486,{value:n})}}function Ta(n){return!!n&&"integerValue"in n}function Ka(n){return!!n&&"arrayValue"in n}function il(n){return!!n&&"nullValue"in n}function sl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ai(n){return!!n&&"mapValue"in n}function Q_(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ef])===null||t===void 0?void 0:t.stringValue)===wf}function cr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ht(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=cr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=cr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function J_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===W_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.value=e}static empty(){return new Qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ai(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=cr(t)}setAll(e){let t=Oe.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=cr(a):i.push(u.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ai(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ai(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Ht(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Qe(cr(this.value))}}function If(n){const e=[];return Ht(n.fields,(t,r)=>{const i=new Oe([t]);if(ai(r)){const s=If(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t,r,i,s,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new qe(e,0,ee.min(),ee.min(),ee.min(),Qe.empty(),0)}static newFoundDocument(e,t,r,i){return new qe(e,1,t,ee.min(),r,i,0)}static newNoDocument(e,t){return new qe(e,2,t,ee.min(),ee.min(),Qe.empty(),0)}static newUnknownDocument(e,t){return new qe(e,3,t,ee.min(),ee.min(),Qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t){this.position=e,this.inclusive=t}}function ol(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),t.key):r=kn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function al(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!lt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Y_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{}class Re extends Tf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Z_(e,t,r):t==="array-contains"?new ny(e,r):t==="in"?new ry(e,r):t==="not-in"?new iy(e,r):t==="array-contains-any"?new sy(e,r):new Re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ey(e,r):new ty(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(kn(t,this.value)):t!==null&&jt(this.value)===jt(t)&&this.matchesComparison(kn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends Tf{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new ht(e,t)}matches(e){return Af(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Af(n){return n.op==="and"}function bf(n){return X_(n)&&Af(n)}function X_(n){for(const e of n.filters)if(e instanceof ht)return!1;return!0}function Aa(n){if(n instanceof Re)return n.field.canonicalString()+n.op.toString()+Dn(n.value);if(bf(n))return n.filters.map(e=>Aa(e)).join(",");{const e=n.filters.map(t=>Aa(t)).join(",");return`${n.op}(${e})`}}function Rf(n,e){return n instanceof Re?function(r,i){return i instanceof Re&&r.op===i.op&&r.field.isEqual(i.field)&&lt(r.value,i.value)}(n,e):n instanceof ht?function(r,i){return i instanceof ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,u)=>s&&Rf(a,i.filters[u]),!0):!1}(n,e):void X(19439)}function Sf(n){return n instanceof Re?function(t){return`${t.field.canonicalString()} ${t.op} ${Dn(t.value)}`}(n):n instanceof ht?function(t){return t.op.toString()+" {"+t.getFilters().map(Sf).join(" ,")+"}"}(n):"Filter"}class Z_ extends Re{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class ey extends Re{constructor(e,t){super(e,"in",t),this.keys=Cf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ty extends Re{constructor(e,t){super(e,"not-in",t),this.keys=Cf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Cf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Y.fromName(r.referenceValue))}class ny extends Re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ka(t)&&vr(t.arrayValue,this.value)}}class ry extends Re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&vr(this.value.arrayValue,t)}}class iy extends Re{constructor(e,t){super(e,"not-in",t)}matches(e){if(vr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!vr(this.value.arrayValue,t)}}class sy extends Re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ka(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>vr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,t=null,r=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.Ie=null}}function ul(n,e=null,t=[],r=[],i=null,s=null,a=null){return new oy(n,e,t,r,i,s,a)}function Wa(n){const e=te(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Aa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Mi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Dn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Dn(r)).join(",")),e.Ie=t}return e.Ie}function Qa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Y_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Rf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!al(n.startAt,e.startAt)&&al(n.endAt,e.endAt)}function ba(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t=null,r=[],i=[],s=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function ay(n,e,t,r,i,s,a,u){return new Fi(n,e,t,r,i,s,a,u)}function Ja(n){return new Fi(n)}function cl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function uy(n){return n.collectionGroup!==null}function lr(n){const e=te(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Ce(Oe.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(g=>{g.isInequality()&&(u=u.add(g.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new wi(s,r))}),t.has(Oe.keyField().canonicalString())||e.Ee.push(new wi(Oe.keyField(),r))}return e.Ee}function ot(n){const e=te(n);return e.de||(e.de=cy(e,lr(n))),e.de}function cy(n,e){if(n.limitType==="F")return ul(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new wi(i.field,s)});const t=n.endAt?new Ei(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ei(n.startAt.position,n.startAt.inclusive):null;return ul(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ra(n,e,t){return new Fi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bi(n,e){return Qa(ot(n),ot(e))&&n.limitType===e.limitType}function Pf(n){return`${Wa(ot(n))}|lt:${n.limitType}`}function vn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Sf(i)).join(", ")}]`),Mi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Dn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Dn(i)).join(",")),`Target(${r})`}(ot(n))}; limitType=${n.limitType})`}function qi(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of lr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,l){const g=ol(a,u,l);return a.inclusive?g<=0:g<0}(r.startAt,lr(r),i)||r.endAt&&!function(a,u,l){const g=ol(a,u,l);return a.inclusive?g>=0:g>0}(r.endAt,lr(r),i))}(n,e)}function ly(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function kf(n){return(e,t)=>{let r=!1;for(const i of lr(n)){const s=hy(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function hy(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):function(s,a,u){const l=a.data.field(s),g=u.data.field(s);return l!==null&&g!==null?kn(l,g):X(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ht(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return pf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new me(Y.comparator);function Et(){return dy}const Df=new me(Y.comparator);function ir(...n){let e=Df;for(const t of n)e=e.insert(t.key,t);return e}function Vf(n){let e=Df;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Xt(){return hr()}function Nf(){return hr()}function hr(){return new cn(n=>n.toString(),(n,e)=>n.isEqual(e))}const fy=new me(Y.comparator),py=new Ce(Y.comparator);function se(...n){let e=py;for(const t of n)e=e.add(t);return e}const gy=new Ce(re);function my(){return gy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_i(e)?"-0":e}}function Of(n){return{integerValue:""+n}}function _y(n,e){return $_(e)?Of(e):Ya(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this._=void 0}}function yy(n,e,t){return n instanceof Ii?function(i,s){const a={fields:{[_f]:{stringValue:mf},[vf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ga(s)&&(s=Ui(s)),s&&(a.fields[yf]=s),{mapValue:a}}(t,e):n instanceof Er?xf(n,e):n instanceof wr?Mf(n,e):function(i,s){const a=Lf(i,s),u=ll(a)+ll(i.Re);return Ta(a)&&Ta(i.Re)?Of(u):Ya(i.serializer,u)}(n,e)}function vy(n,e,t){return n instanceof Er?xf(n,e):n instanceof wr?Mf(n,e):t}function Lf(n,e){return n instanceof Ti?function(r){return Ta(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ii extends ji{}class Er extends ji{constructor(e){super(),this.elements=e}}function xf(n,e){const t=Uf(e);for(const r of n.elements)t.some(i=>lt(i,r))||t.push(r);return{arrayValue:{values:t}}}class wr extends ji{constructor(e){super(),this.elements=e}}function Mf(n,e){let t=Uf(e);for(const r of n.elements)t=t.filter(i=>!lt(i,r));return{arrayValue:{values:t}}}class Ti extends ji{constructor(e,t){super(),this.serializer=e,this.Re=t}}function ll(n){return Te(n.integerValue||n.doubleValue)}function Uf(n){return Ka(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ey(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Er&&i instanceof Er||r instanceof wr&&i instanceof wr?Pn(r.elements,i.elements,lt):r instanceof Ti&&i instanceof Ti?lt(r.Re,i.Re):r instanceof Ii&&i instanceof Ii}(n.transform,e.transform)}class wy{constructor(e,t){this.version=e,this.transformResults=t}}class _t{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _t}static exists(e){return new _t(void 0,e)}static updateTime(e){return new _t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ui(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $i{}function Ff(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new qf(n.key,_t.none()):new zi(n.key,n.data,_t.none());{const t=n.data,r=Qe.empty();let i=new Ce(Oe.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new ln(n.key,r,new et(i.toArray()),_t.none())}}function Iy(n,e,t){n instanceof zi?function(i,s,a){const u=i.value.clone(),l=dl(i.fieldTransforms,s,a.transformResults);u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof ln?function(i,s,a){if(!ui(i.precondition,s))return void s.convertToUnknownDocument(a.version);const u=dl(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(Bf(i)),l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function dr(n,e,t,r){return n instanceof zi?function(s,a,u,l){if(!ui(s.precondition,a))return u;const g=s.value.clone(),w=fl(s.fieldTransforms,l,a);return g.setAll(w),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),null}(n,e,t,r):n instanceof ln?function(s,a,u,l){if(!ui(s.precondition,a))return u;const g=fl(s.fieldTransforms,l,a),w=a.data;return w.setAll(Bf(s)),w.setAll(g),a.convertToFoundDocument(a.version,w).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(A=>A.field))}(n,e,t,r):function(s,a,u){return ui(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function Ty(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Lf(r.transform,i||null);s!=null&&(t===null&&(t=Qe.empty()),t.set(r.field,s))}return t||null}function hl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Pn(r,i,(s,a)=>Ey(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class zi extends $i{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ln extends $i{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Bf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function dl(n,e,t){const r=new Map;ce(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,u=e.data.field(s.field);r.set(s.field,vy(a,u,t[i]))}return r}function fl(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,yy(s,a,e))}return r}class qf extends $i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ay extends $i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Iy(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=dr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=dr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Nf();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;const l=Ff(a,u);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&Pn(this.mutations,e.mutations,(t,r)=>hl(t,r))&&Pn(this.baseMutations,e.baseMutations,(t,r)=>hl(t,r))}}class Xa{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ce(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return fy}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Xa(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,oe;function Cy(n){switch(n){case q.OK:return X(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return X(15467,{code:n})}}function jf(n){if(n===void 0)return vt("GRPC error has no .code"),q.UNKNOWN;switch(n){case be.OK:return q.OK;case be.CANCELLED:return q.CANCELLED;case be.UNKNOWN:return q.UNKNOWN;case be.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case be.INTERNAL:return q.INTERNAL;case be.UNAVAILABLE:return q.UNAVAILABLE;case be.UNAUTHENTICATED:return q.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case be.NOT_FOUND:return q.NOT_FOUND;case be.ALREADY_EXISTS:return q.ALREADY_EXISTS;case be.PERMISSION_DENIED:return q.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case be.ABORTED:return q.ABORTED;case be.OUT_OF_RANGE:return q.OUT_OF_RANGE;case be.UNIMPLEMENTED:return q.UNIMPLEMENTED;case be.DATA_LOSS:return q.DATA_LOSS;default:return X(39323,{code:n})}}(oe=be||(be={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=new Mt([4294967295,4294967295],0);function pl(n){const e=hf().encode(n),t=new nf;return t.update(e),new Uint8Array(t.digest())}function gl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Mt([t,r],0),new Mt([i,s],0)]}class Za{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new sr(`Invalid padding: ${t}`);if(r<0)throw new sr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new sr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new sr(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Mt.fromNumber(this.pe)}we(e,t,r){let i=e.add(t.multiply(Mt.fromNumber(r)));return i.compare(Py)===1&&(i=new Mt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=pl(e),[r,i]=gl(t);for(let s=0;s<this.hashCount;s++){const a=this.we(r,i,s);if(!this.be(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Za(s,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.pe===0)return;const t=pl(e),[r,i]=gl(t);for(let s=0;s<this.hashCount;s++){const a=this.we(r,i,s);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class sr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Cr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Hi(ee.min(),i,new me(re),Et(),se())}}class Cr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Cr(r,t,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t,r,i){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=i}}class $f{constructor(e,t){this.targetId=e,this.Ce=t}}class zf{constructor(e,t,r=Le.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class ml{constructor(){this.Fe=0,this.Me=_l(),this.xe=Le.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=se(),t=se(),r=se();return this.Me.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:X(38017,{changeType:s})}}),new Cr(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=_l()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ce(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class ky{constructor(e){this.ze=e,this.je=new Map,this.He=Et(),this.Je=ei(),this.Ye=ei(),this.Ze=new me(re)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:X(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,i)=>{this.it(i)&&t(i)})}ot(e){const t=e.targetId,r=e.Ce.count,i=this._t(t);if(i){const s=i.target;if(ba(s))if(r===0){const a=new Y(s.path);this.tt(t,a,qe.newNoDocument(a,ee.min()))}else ce(r===1,20013,{expectedCount:r});else{const a=this.ut(t);if(a!==r){const u=this.ct(e),l=u?this.lt(u,e,a):1;if(l!==0){this.st(t);const g=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,u;try{a=qt(r).toUint8Array()}catch(l){if(l instanceof gf)return Cn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new Za(a,i,s)}catch(l){return Cn(l instanceof sr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.pe===0?null:u}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.ze.Pt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.tt(t,s,null),i++)}),i}It(e){const t=new Map;this.je.forEach((s,a)=>{const u=this._t(a);if(u){if(s.current&&ba(u.target)){const l=new Y(u.target.path);this.Et(l).has(a)||this.dt(a,l)||this.tt(a,l,qe.newNoDocument(l,e))}s.Le&&(t.set(a,s.qe()),s.Qe())}});let r=se();this.Ye.forEach((s,a)=>{let u=!0;a.forEachWhile(l=>{const g=this._t(l);return!g||g.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.He.forEach((s,a)=>a.setReadTime(e));const i=new Hi(e,t,this.Ze,this.He,r);return this.He=Et(),this.Je=ei(),this.Ye=ei(),this.Ze=new me(re),i}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,t)?i.$e(t,1):i.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new ml,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Ce(re),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Ce(re),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new ml),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ei(){return new me(Y.comparator)}function _l(){return new me(Y.comparator)}const Dy={asc:"ASCENDING",desc:"DESCENDING"},Vy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ny={and:"AND",or:"OR"};class Oy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Sa(n,e){return n.useProto3Json||Mi(e)?e:{value:e}}function Ai(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ly(n,e){return Ai(n,e.toTimestamp())}function at(n){return ce(!!n,49232),ee.fromTimestamp(function(t){const r=Bt(t);return new Se(r.seconds,r.nanos)}(n))}function eu(n,e){return Ca(n,e).canonicalString()}function Ca(n,e){const t=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Gf(n){const e=Ee.fromString(n);return ce(Yf(e),10190,{key:e.toString()}),e}function Pa(n,e){return eu(n.databaseId,e.path)}function Cs(n,e){const t=Gf(e);if(t.get(1)!==n.databaseId.projectId)throw new J(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new J(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(Wf(t))}function Kf(n,e){return eu(n.databaseId,e)}function xy(n){const e=Gf(n);return e.length===4?Ee.emptyPath():Wf(e)}function ka(n){return new Ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wf(n){return ce(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function yl(n,e,t){return{name:Pa(n,e),fields:t.value.mapValue.fields}}function My(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:X(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(g,w){return g.useProto3Json?(ce(w===void 0||typeof w=="string",58123),Le.fromBase64String(w||"")):(ce(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Le.fromUint8Array(w||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(g){const w=g.code===void 0?q.UNKNOWN:jf(g.code);return new J(w,g.message||"")}(a);t=new zf(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cs(n,r.document.name),s=at(r.document.updateTime),a=r.document.createTime?at(r.document.createTime):ee.min(),u=new Qe({mapValue:{fields:r.document.fields}}),l=qe.newFoundDocument(i,s,a,u),g=r.targetIds||[],w=r.removedTargetIds||[];t=new ci(g,w,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cs(n,r.document),s=r.readTime?at(r.readTime):ee.min(),a=qe.newNoDocument(i,s),u=r.removedTargetIds||[];t=new ci([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cs(n,r.document),s=r.removedTargetIds||[];t=new ci([],s,i,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new Sy(i,s),u=r.targetId;t=new $f(u,a)}}return t}function Uy(n,e){let t;if(e instanceof zi)t={update:yl(n,e.key,e.value)};else if(e instanceof qf)t={delete:Pa(n,e.key)};else if(e instanceof ln)t={update:yl(n,e.key,e.data),updateMask:Ky(e.fieldMask)};else{if(!(e instanceof Ay))return X(16599,{ft:e.type});t={verify:Pa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const u=a.transform;if(u instanceof Ii)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Er)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof wr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Ti)return{fieldPath:a.field.canonicalString(),increment:u.Re};throw X(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ly(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X(27497)}(n,e.precondition)),t}function Fy(n,e){return n&&n.length>0?(ce(e!==void 0,14353),n.map(t=>function(i,s){let a=i.updateTime?at(i.updateTime):at(s);return a.isEqual(ee.min())&&(a=at(s)),new wy(a,i.transformResults||[])}(t,e))):[]}function By(n,e){return{documents:[Kf(n,e.path)]}}function qy(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Kf(n,i);const s=function(g){if(g.length!==0)return Jf(ht.create(g,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(g){if(g.length!==0)return g.map(w=>function(R){return{field:En(R.field),direction:zy(R.dir)}}(w))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Sa(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:i}}function jy(n){let e=xy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ce(r===1,65062);const w=t.from[0];w.allDescendants?i=w.collectionId:e=e.child(w.collectionId)}let s=[];t.where&&(s=function(A){const R=Qf(A);return R instanceof ht&&bf(R)?R.getFilters():[R]}(t.where));let a=[];t.orderBy&&(a=function(A){return A.map(R=>function(P){return new wi(wn(P.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(R))}(t.orderBy));let u=null;t.limit&&(u=function(A){let R;return R=typeof A=="object"?A.value:A,Mi(R)?null:R}(t.limit));let l=null;t.startAt&&(l=function(A){const R=!!A.before,D=A.values||[];return new Ei(D,R)}(t.startAt));let g=null;return t.endAt&&(g=function(A){const R=!A.before,D=A.values||[];return new Ei(D,R)}(t.endAt)),ay(e,i,a,s,u,"F",l,g)}function $y(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Qf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=wn(t.unaryFilter.field);return Re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=wn(t.unaryFilter.field);return Re.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=wn(t.unaryFilter.field);return Re.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=wn(t.unaryFilter.field);return Re.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(n):n.fieldFilter!==void 0?function(t){return Re.create(wn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ht.create(t.compositeFilter.filters.map(r=>Qf(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(t.compositeFilter.op))}(n):X(30097,{filter:n})}function zy(n){return Dy[n]}function Hy(n){return Vy[n]}function Gy(n){return Ny[n]}function En(n){return{fieldPath:n.canonicalString()}}function wn(n){return Oe.fromServerFormat(n.fieldPath)}function Jf(n){return n instanceof Re?function(t){if(t.op==="=="){if(sl(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NAN"}};if(il(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sl(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NAN"}};if(il(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(t.field),op:Hy(t.op),value:t.value}}}(n):n instanceof ht?function(t){const r=t.getFilters().map(i=>Jf(i));return r.length===1?r[0]:{compositeFilter:{op:Gy(t.op),filters:r}}}(n):X(54877,{filter:n})}function Ky(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Yf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t,r,i,s=ee.min(),a=ee.min(),u=Le.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new Nt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e){this.wt=e}}function Qy(n){const e=jy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ra(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.Cn=new Yy}addToCollectionParentIndex(e,t){return this.Cn.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(Ft.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(Ft.min())}updateCollectionGroup(e,t,r){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class Yy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ce(Ee.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ce(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xf=41943040;class He{static withCacheSize(e){return new He(e,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He.DEFAULT_COLLECTION_PERCENTILE=10,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,He.DEFAULT=new He(Xf,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),He.DISABLED=new He(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Vn(0)}static lr(){return new Vn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="LruGarbageCollector",Xy=1048576;function wl([n,e],[t,r]){const i=re(n,t);return i===0?re(e,r):i}class Zy{constructor(e){this.Er=e,this.buffer=new Ce(wl),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();wl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ev{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){G(El,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Fn(t)?G(El,"Ignoring IndexedDB error during garbage collection: ",t):await Un(t)}await this.mr(3e5)})}}class tv{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return U.resolve(xi.le);const r=new Zy(t);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(vl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vl):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,i,s,a,u,l,g;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,a=Date.now(),this.nthSequenceNumber(e,i))).next(A=>(r=A,u=Date.now(),this.removeTargets(e,r,t))).next(A=>(s=A,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(A=>(g=Date.now(),yn()<=ie.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-w}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(l-u)+`ms
	Removed ${A} documents in `+(g-l)+`ms
Total Duration: ${g-w}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:A})))}}function nv(n,e){return new tv(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(){this.changes=new cn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?U.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&dr(r.mutation,i,et.empty(),Se.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=se()){const i=Xt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=ir();return s.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Xt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,se()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let s=Et();const a=hr(),u=function(){return hr()}();return t.forEach((l,g)=>{const w=r.get(g.key);i.has(g.key)&&(w===void 0||w.mutation instanceof ln)?s=s.insert(g.key,g):w!==void 0?(a.set(g.key,w.mutation.getFieldMask()),dr(w.mutation,g,w.mutation.getFieldMask(),Se.now())):a.set(g.key,et.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((g,w)=>a.set(g,w)),t.forEach((g,w)=>{var A;return u.set(g,new iv(w,(A=a.get(g))!==null&&A!==void 0?A:null))}),u))}recalculateAndSaveOverlays(e,t){const r=hr();let i=new me((a,u)=>a-u),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(l=>{const g=t.get(l);if(g===null)return;let w=r.get(l)||et.empty();w=u.applyToLocalView(g,w),r.set(l,w);const A=(i.get(u.batchId)||se()).add(l);i=i.insert(u.batchId,A)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),g=l.key,w=l.value,A=Nf();w.forEach(R=>{if(!s.has(R)){const D=Ff(t.get(R),r.get(R));D!==null&&A.set(R,D),s=s.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(e,g,A))}return U.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return Y.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):uy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):U.resolve(Xt());let u=mr,l=s;return a.next(g=>U.forEach(g,(w,A)=>(u<A.largestBatchId&&(u=A.largestBatchId),s.get(w)?U.resolve():this.remoteDocumentCache.getEntry(e,w).next(R=>{l=l.insert(w,R)}))).next(()=>this.populateOverlays(e,g,s)).next(()=>this.computeViews(e,l,g,se())).next(w=>({batchId:u,changes:Vf(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(r=>{let i=ir();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=ir();return this.indexManager.getCollectionParents(e,s).next(u=>U.forEach(u,l=>{const g=function(A,R){return new Fi(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,g,r,i).next(w=>{w.forEach((A,R)=>{a=a.insert(A,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,g)=>{const w=g.getKey();a.get(w)===null&&(a=a.insert(w,qe.newInvalidDocument(w)))});let u=ir();return a.forEach((l,g)=>{const w=s.get(l);w!==void 0&&dr(w.mutation,g,et.empty(),Se.now()),qi(t,g)&&(u=u.insert(l,g))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return U.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:at(i.createTime)}}(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(i){return{name:i.name,query:Qy(i.bundledQuery),readTime:at(i.readTime)}}(t)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(){this.overlays=new me(Y.comparator),this.Qr=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Xt();return U.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.St(e,t,s)}),U.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Qr.delete(r)),U.resolve()}getOverlaysForCollection(e,t,r){const i=Xt(),s=t.length+1,a=new Y(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,g=l.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return U.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new me((g,w)=>g-w);const a=this.overlays.getIterator();for(;a.hasNext();){const g=a.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let w=s.get(g.largestBatchId);w===null&&(w=Xt(),s=s.insert(g.largestBatchId,w)),w.set(g.getKey(),g)}}const u=Xt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((g,w)=>u.set(g,w)),!(u.size()>=i)););return U.resolve(u)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ry(t,r));let s=this.Qr.get(t);s===void 0&&(s=se(),this.Qr.set(t,s)),this.Qr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this.sessionToken=Le.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this.$r=new Ce(ke.Ur),this.Kr=new Ce(ke.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new ke(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new ke(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new Y(new Ee([])),r=new ke(t,e),i=new ke(t,e+1),s=[];return this.Kr.forEachInRange([r,i],a=>{this.zr(a),s.push(a.key)}),s}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new Y(new Ee([])),r=new ke(t,e),i=new ke(t,e+1);let s=se();return this.Kr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new ke(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ke{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return Y.comparator(e.key,t.key)||re(e.Zr,t.Zr)}static Wr(e,t){return re(e.Zr,t.Zr)||Y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Ce(ke.Ur)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new by(s,t,r,i);this.mutationQueue.push(a);for(const u of i)this.Xr=this.Xr.add(new ke(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return U.resolve(a)}lookupMutationBatch(e,t){return U.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ti(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Ha:this.nr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ke(t,0),i=new ke(t,Number.POSITIVE_INFINITY),s=[];return this.Xr.forEachInRange([r,i],a=>{const u=this.ei(a.Zr);s.push(u)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ce(re);return t.forEach(i=>{const s=new ke(i,0),a=new ke(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([s,a],u=>{r=r.add(u.Zr)})}),U.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const a=new ke(new Y(s),0);let u=new Ce(re);return this.Xr.forEachWhile(l=>{const g=l.key.path;return!!r.isPrefixOf(g)&&(g.length===i&&(u=u.add(l.Zr)),!0)},a),U.resolve(this.ni(u))}ni(e){const t=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ce(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return U.forEach(t.mutations,i=>{const s=new ke(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new ke(t,0),i=this.Xr.firstAfterOrEqual(r);return U.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.ii=e,this.docs=function(){return new me(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return U.resolve(r?r.document.mutableCopy():qe.newInvalidDocument(t))}getEntries(e,t){let r=Et();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():qe.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Et();const a=t.path,u=new Y(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:g,value:{document:w}}=l.getNext();if(!a.isPrefixOf(g.path))break;g.path.length>a.length+1||F_(U_(w),r)<=0||(i.has(w.key)||qi(t,w))&&(s=s.insert(w.key,w.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,t,r,i){X(9500)}si(e,t){return U.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new hv(this)}getSize(e){return U.resolve(this.size)}}class hv extends rv{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),U.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e){this.persistence=e,this.oi=new cn(t=>Wa(t),Qa),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this._i=0,this.ai=new tu,this.targetCount=0,this.ui=Vn.cr()}forEachTarget(e,t){return this.oi.forEach((r,i)=>t(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),U.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new Vn(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Tr(t),U.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.oi.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.oi.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return U.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),U.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),U.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return U.resolve(r)}containsKey(e,t){return U.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t){this.ci={},this.overlays={},this.li=new xi(0),this.hi=!1,this.hi=!0,this.Pi=new uv,this.referenceDelegate=e(this),this.Ti=new dv(this),this.indexManager=new Jy,this.remoteDocumentCache=function(i){return new lv(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new Wy(t),this.Ei=new ov(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new av,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new cv(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const i=new fv(this.li.next());return this.referenceDelegate.di(),r(i).next(s=>this.referenceDelegate.Ai(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ri(e,t){return U.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class fv extends q_{constructor(e){super(),this.currentSequenceNumber=e}}class nu{constructor(e){this.persistence=e,this.Vi=new tu,this.mi=null}static fi(e){return new nu(e)}get gi(){if(this.mi)return this.mi;throw X(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),U.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),U.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.gi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.gi,r=>{const i=Y.fromPath(r);return this.pi(e,i).next(s=>{s||t.removeEntry(i,ee.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return U.or([()=>U.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class bi{constructor(e,t){this.persistence=e,this.yi=new cn(r=>z_(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=nv(this,t)}static fi(e,t){return new bi(e,t)}di(){}Ai(e){return U.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}br(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return U.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(s=>s?U.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.si(e,a=>this.Dr(e,a,t).next(u=>{u||(r++,s.removeEntry(a,ee.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),U.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),U.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=oi(e.data.value)),t}Dr(e,t,r){return U.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.yi.get(t);return U.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ds=r,this.As=i}static Rs(e,t){let r=se(),i=se();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ru(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return lm()?8:j_(je())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ws(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.bs(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new pv;return this.Ss(e,t,a).next(u=>{if(s.result=u,this.fs)return this.Ds(e,t,a,u.size)})}).next(()=>s.result)}Ds(e,t,r,i){return r.documentReadCount<this.gs?(yn()<=ie.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",vn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),U.resolve()):(yn()<=ie.DEBUG&&G("QueryEngine","Query:",vn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(yn()<=ie.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",vn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ot(t))):U.resolve())}ws(e,t){if(cl(t))return U.resolve(null);let r=ot(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ra(t,null,"F"),r=ot(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=se(...s);return this.ys.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{const g=this.vs(t,u);return this.Cs(t,g,a,l.readTime)?this.ws(e,Ra(t,null,"F")):this.Fs(e,g,t,l)}))})))}bs(e,t,r,i){return cl(t)||i.isEqual(ee.min())?U.resolve(null):this.ys.getDocuments(e,r).next(s=>{const a=this.vs(t,s);return this.Cs(t,a,r,i)?U.resolve(null):(yn()<=ie.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vn(t)),this.Fs(e,a,t,M_(i,mr)).next(u=>u))})}vs(e,t){let r=new Ce(kf(e));return t.forEach((i,s)=>{qi(e,s)&&(r=r.add(s))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,t,r){return yn()<=ie.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",vn(t)),this.ys.getDocumentsMatchingQuery(e,t,Ft.min(),r)}Fs(e,t,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="LocalStore",mv=3e8;class _v{constructor(e,t,r,i){this.persistence=e,this.Ms=t,this.serializer=i,this.xs=new me(re),this.Os=new cn(s=>Wa(s),Qa),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sv(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function yv(n,e,t,r){return new _v(n,e,t,r)}async function ep(n,e){const t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],u=[];let l=se();for(const g of i){a.push(g.batchId);for(const w of g.mutations)l=l.add(w.key)}for(const g of s){u.push(g.batchId);for(const w of g.mutations)l=l.add(w.key)}return t.localDocuments.getDocuments(r,l).next(g=>({ks:g,removedBatchIds:a,addedBatchIds:u}))})})}function vv(n,e){const t=te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Bs.newChangeBuffer({trackRemovals:!0});return function(u,l,g,w){const A=g.batch,R=A.keys();let D=U.resolve();return R.forEach(P=>{D=D.next(()=>w.getEntry(l,P)).next(O=>{const b=g.docVersions.get(P);ce(b!==null,48541),O.version.compareTo(b)<0&&(A.applyToRemoteDocument(O,g),O.isValidDocument()&&(O.setReadTime(g.commitVersion),w.addEntry(O)))})}),D.next(()=>u.mutationQueue.removeMutationBatch(l,A))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=se();for(let g=0;g<u.mutationResults.length;++g)u.mutationResults[g].transformResults.length>0&&(l=l.add(u.batch.mutations[g].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function tp(n){const e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function Ev(n,e){const t=te(n),r=e.snapshotVersion;let i=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.Bs.newChangeBuffer({trackRemovals:!0});i=t.xs;const u=[];e.targetChanges.forEach((w,A)=>{const R=i.get(A);if(!R)return;u.push(t.Ti.removeMatchingKeys(s,w.removedDocuments,A).next(()=>t.Ti.addMatchingKeys(s,w.addedDocuments,A)));let D=R.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(A)!==null?D=D.withResumeToken(Le.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):w.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(w.resumeToken,r)),i=i.insert(A,D),function(O,b,N){return O.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=mv?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(R,D,w)&&u.push(t.Ti.updateTargetData(s,D))});let l=Et(),g=se();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,w))}),u.push(wv(s,a,e.documentUpdates).next(w=>{l=w.qs,g=w.Qs})),!r.isEqual(ee.min())){const w=t.Ti.getLastRemoteSnapshotVersion(s).next(A=>t.Ti.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(w)}return U.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,g)).next(()=>l)}).then(s=>(t.xs=i,s))}function wv(n,e,t){let r=se(),i=se();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Et();return t.forEach((u,l)=>{const g=s.get(u);l.isFoundDocument()!==g.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!g.isValidDocument()||l.version.compareTo(g.version)>0||l.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):G(iu,"Ignoring outdated watch update for ",u,". Current version:",g.version," Watch version:",l.version)}),{qs:a,Qs:i}})}function Iv(n,e){const t=te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ha),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Tv(n,e){const t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ti.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):t.Ti.allocateTargetId(r).next(a=>(i=new Nt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function Da(n,e,t){const r=te(n),i=r.xs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Fn(a))throw a;G(iu,`Failed to update sequence numbers for target ${e}: ${a}`)}r.xs=r.xs.remove(e),r.Os.delete(i.target)}function Il(n,e,t){const r=te(n);let i=ee.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,g,w){const A=te(l),R=A.Os.get(w);return R!==void 0?U.resolve(A.xs.get(R)):A.Ti.getTargetData(g,w)}(r,a,ot(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,u.targetId).next(l=>{s=l})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,e,t?i:ee.min(),t?s:se())).next(u=>(Av(r,ly(e),u),{documents:u,$s:s})))}function Av(n,e,t){let r=n.Ns.get(e)||ee.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Ns.set(e,r)}class Tl{constructor(){this.activeTargetIds=my()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bv{constructor(){this.xo=new Tl,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Tl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="ConnectivityMonitor";class bl{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){G(Al,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){G(Al,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti=null;function Va(){return ti===null?ti=function(){return 268435456+Math.round(2147483648*Math.random())}():ti++,"0x"+ti.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="RestConnection",Sv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Cv{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===yi?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,t,r,i,s){const a=Va(),u=this.jo(e,t.toUriEncodedString());G(Ps,`Sending RPC '${e}' ${a}:`,u,r);const l={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(l,i,s);const{host:g}=new URL(u),w=br(g);return this.Jo(e,u,l,r,w).then(A=>(G(Ps,`Received RPC '${e}' ${a}: `,A),A),A=>{throw Cn(Ps,`RPC '${e}' ${a} failed with error: `,A,"url: ",u,"request:",r),A})}Yo(e,t,r,i,s,a){return this.zo(e,t,r,i,s)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}jo(e,t){const r=Sv[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="WebChannelConnection";class kv extends Cv{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,s){const a=Va();return new Promise((u,l)=>{const g=new rf;g.setWithCredentials(!0),g.listenOnce(sf.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case si.NO_ERROR:const A=g.getResponseJson();G(Fe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(A)),u(A);break;case si.TIMEOUT:G(Fe,`RPC '${e}' ${a} timed out`),l(new J(q.DEADLINE_EXCEEDED,"Request time out"));break;case si.HTTP_ERROR:const R=g.getStatus();if(G(Fe,`RPC '${e}' ${a} failed with status:`,R,"response text:",g.getResponseText()),R>0){let D=g.getResponseJson();Array.isArray(D)&&(D=D[0]);const P=D?.error;if(P&&P.status&&P.message){const O=function(N){const V=N.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(V)>=0?V:q.UNKNOWN}(P.status);l(new J(O,P.message))}else l(new J(q.UNKNOWN,"Server responded with status "+g.getStatus()))}else l(new J(q.UNAVAILABLE,"Connection failed."));break;default:X(9055,{h_:e,streamId:a,P_:g.getLastErrorCode(),T_:g.getLastError()})}}finally{G(Fe,`RPC '${e}' ${a} completed.`)}});const w=JSON.stringify(i);G(Fe,`RPC '${e}' ${a} sending request:`,i),g.send(t,"POST",w,r,15)})}I_(e,t,r){const i=Va(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=uf(),u=af(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(l.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Ho(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const w=s.join("");G(Fe,`Creating RPC '${e}' stream ${i}: ${w}`,l);const A=a.createWebChannel(w,l);this.E_(A);let R=!1,D=!1;const P=new Pv({Zo:b=>{D?G(Fe,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(R||(G(Fe,`Opening RPC '${e}' stream ${i} transport.`),A.open(),R=!0),G(Fe,`RPC '${e}' stream ${i} sending:`,b),A.send(b))},Xo:()=>A.close()}),O=(b,N,V)=>{b.listen(N,M=>{try{V(M)}catch(L){setTimeout(()=>{throw L},0)}})};return O(A,rr.EventType.OPEN,()=>{D||(G(Fe,`RPC '${e}' stream ${i} transport opened.`),P.__())}),O(A,rr.EventType.CLOSE,()=>{D||(D=!0,G(Fe,`RPC '${e}' stream ${i} transport closed`),P.u_(),this.d_(A))}),O(A,rr.EventType.ERROR,b=>{D||(D=!0,Cn(Fe,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),P.u_(new J(q.UNAVAILABLE,"The operation could not be completed")))}),O(A,rr.EventType.MESSAGE,b=>{var N;if(!D){const V=b.data[0];ce(!!V,16349);const M=V,L=M?.error||((N=M[0])===null||N===void 0?void 0:N.error);if(L){G(Fe,`RPC '${e}' stream ${i} received error:`,L);const $=L.status;let S=function(p){const f=be[p];if(f!==void 0)return jf(f)}($),_=L.message;S===void 0&&(S=q.INTERNAL,_="Unknown error status: "+$+" with message "+L.message),D=!0,P.u_(new J(S,_)),A.close()}else G(Fe,`RPC '${e}' stream ${i} received:`,V),P.c_(V)}}),O(u,of.STAT_EVENT,b=>{b.stat===Ea.PROXY?G(Fe,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Ea.NOPROXY&&G(Fe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.a_()},0),P}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function ks(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){return new Oy(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t,r=1e3,i=1.5,s=6e4){this.xi=e,this.timerId=t,this.A_=r,this.R_=i,this.V_=s,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),i=Math.max(0,t-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="PersistentStream";class rp{constructor(e,t,r,i,s,a,u,l){this.xi=e,this.S_=r,this.D_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new np(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(vt(t.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.v_===t&&this.z_(r,i)},r=>{e(()=>{const i=new J(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(i)})})}z_(e,t){const r=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.j_(i))}),this.stream.onMessage(i=>{r(()=>++this.M_==1?this.J_(i):this.onNext(i))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return G(Rl,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(G(Rl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Dv extends rp{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=My(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?ee.min():a.readTime?at(a.readTime):ee.min()}(e);return this.listener.Y_(t,r)}Z_(e){const t={};t.database=ka(this.serializer),t.addTarget=function(s,a){let u;const l=a.target;if(u=ba(l)?{documents:By(s,l)}:{query:qy(s,l).gt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Hf(s,a.resumeToken);const g=Sa(s,a.expectedCount);g!==null&&(u.expectedCount=g)}else if(a.snapshotVersion.compareTo(ee.min())>0){u.readTime=Ai(s,a.snapshotVersion.toTimestamp());const g=Sa(s,a.expectedCount);g!==null&&(u.expectedCount=g)}return u}(this.serializer,e);const r=$y(this.serializer,e);r&&(t.labels=r),this.Q_(t)}X_(e){const t={};t.database=ka(this.serializer),t.removeTarget=e,this.Q_(t)}}class Vv extends rp{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=Fy(e.writeResults,e.commitTime),r=at(e.commitTime);return this.listener.ra(r,t)}ia(){const e={};e.database=ka(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Uy(this.serializer,r))};this.Q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{}class Ov extends Nv{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.sa=!1}oa(){if(this.sa)throw new J(q.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.zo(e,Ca(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J(q.UNKNOWN,s.toString())})}Yo(e,t,r,i,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Yo(e,Ca(t,r),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new J(q.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class Lv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(vt(t),this.ua=!1):G("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="RemoteStore";class xv{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=s,this.Ra.No(a=>{r.enqueueAndForget(async()=>{hn(this)&&(G(sn,"Restarting streams for network reachability change."),await async function(l){const g=te(l);g.da.add(4),await Pr(g),g.Va.set("Unknown"),g.da.delete(4),await Ki(g)}(this))})}),this.Va=new Lv(r,i)}}async function Ki(n){if(hn(n))for(const e of n.Aa)await e(!0)}async function Pr(n){for(const e of n.Aa)await e(!1)}function ip(n,e){const t=te(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),uu(t)?au(t):Bn(t).N_()&&ou(t,e))}function su(n,e){const t=te(n),r=Bn(t);t.Ea.delete(e),r.N_()&&sp(t,e),t.Ea.size===0&&(r.N_()?r.k_():hn(t)&&t.Va.set("Unknown"))}function ou(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Bn(n).Z_(e)}function sp(n,e){n.ma.Ke(e),Bn(n).X_(e)}function au(n){n.ma=new ky({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Bn(n).start(),n.Va.ca()}function uu(n){return hn(n)&&!Bn(n).O_()&&n.Ea.size>0}function hn(n){return te(n).da.size===0}function op(n){n.ma=void 0}async function Mv(n){n.Va.set("Online")}async function Uv(n){n.Ea.forEach((e,t)=>{ou(n,e)})}async function Fv(n,e){op(n),uu(n)?(n.Va.Pa(e),au(n)):n.Va.set("Unknown")}async function Bv(n,e,t){if(n.Va.set("Online"),e instanceof zf&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const u of s.targetIds)i.Ea.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Ea.delete(u),i.ma.removeTarget(u))}(n,e)}catch(r){G(sn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ri(n,r)}else if(e instanceof ci?n.ma.Xe(e):e instanceof $f?n.ma.ot(e):n.ma.nt(e),!t.isEqual(ee.min()))try{const r=await tp(n.localStore);t.compareTo(r)>=0&&await function(s,a){const u=s.ma.It(a);return u.targetChanges.forEach((l,g)=>{if(l.resumeToken.approximateByteSize()>0){const w=s.Ea.get(g);w&&s.Ea.set(g,w.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,g)=>{const w=s.Ea.get(l);if(!w)return;s.Ea.set(l,w.withResumeToken(Le.EMPTY_BYTE_STRING,w.snapshotVersion)),sp(s,l);const A=new Nt(w.target,l,g,w.sequenceNumber);ou(s,A)}),s.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){G(sn,"Failed to raise snapshot:",r),await Ri(n,r)}}async function Ri(n,e,t){if(!Fn(e))throw e;n.da.add(1),await Pr(n),n.Va.set("Offline"),t||(t=()=>tp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G(sn,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Ki(n)})}function ap(n,e){return e().catch(t=>Ri(n,t,e))}async function Wi(n){const e=te(n),t=$t(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Ha;for(;qv(e);)try{const i=await Iv(e.localStore,r);if(i===null){e.Ia.length===0&&t.k_();break}r=i.batchId,jv(e,i)}catch(i){await Ri(e,i)}up(e)&&cp(e)}function qv(n){return hn(n)&&n.Ia.length<10}function jv(n,e){n.Ia.push(e);const t=$t(n);t.N_()&&t.ea&&t.ta(e.mutations)}function up(n){return hn(n)&&!$t(n).O_()&&n.Ia.length>0}function cp(n){$t(n).start()}async function $v(n){$t(n).ia()}async function zv(n){const e=$t(n);for(const t of n.Ia)e.ta(t.mutations)}async function Hv(n,e,t){const r=n.Ia.shift(),i=Xa.from(r,e,t);await ap(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Wi(n)}async function Gv(n,e){e&&$t(n).ea&&await async function(r,i){if(function(a){return Cy(a)&&a!==q.ABORTED}(i.code)){const s=r.Ia.shift();$t(r).L_(),await ap(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Wi(r)}}(n,e),up(n)&&cp(n)}async function Sl(n,e){const t=te(n);t.asyncQueue.verifyOperationInProgress(),G(sn,"RemoteStore received new credentials");const r=hn(t);t.da.add(3),await Pr(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Ki(t)}async function Kv(n,e){const t=te(n);e?(t.da.delete(2),await Ki(t)):e||(t.da.add(2),await Pr(t),t.Va.set("Unknown"))}function Bn(n){return n.fa||(n.fa=function(t,r,i){const s=te(t);return s.oa(),new Dv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{e_:Mv.bind(null,n),n_:Uv.bind(null,n),i_:Fv.bind(null,n),Y_:Bv.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),uu(n)?au(n):n.Va.set("Unknown")):(await n.fa.stop(),op(n))})),n.fa}function $t(n){return n.ga||(n.ga=function(t,r,i){const s=te(t);return s.oa(),new Vv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:$v.bind(null,n),i_:Gv.bind(null,n),na:zv.bind(null,n),ra:Hv.bind(null,n)}),n.Aa.push(async e=>{e?(n.ga.L_(),await Wi(n)):(await n.ga.stop(),n.Ia.length>0&&(G(sn,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,u=new cu(e,t,a,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lu(n,e){if(vt("AsyncQueue",`${e}: ${n}`),Fn(n))return new J(q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{static emptySet(e){return new Tn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=ir(),this.sortedSet=new me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Tn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Tn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.pa=new me(Y.comparator)}track(e){const t=e.doc.key,r=this.pa.get(t);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(t,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(t):e.type===1&&r.type===2?this.pa=this.pa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):X(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,r)=>{e.push(r)}),e}}class Nn{constructor(e,t,r,i,s,a,u,l,g){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=g}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new Nn(e,t,Tn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class Qv{constructor(){this.queries=Pl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=te(t),s=i.queries;i.queries=Pl(),s.forEach((a,u)=>{for(const l of u.Sa)l.onError(r)})})(this,new J(q.ABORTED,"Firestore shutting down"))}}function Pl(){return new cn(n=>Pf(n),Bi)}async function Jv(n,e){const t=te(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Da()&&e.va()&&(r=2):(s=new Wv,r=e.va()?0:1);try{switch(r){case 0:s.ba=await t.onListen(i,!0);break;case 1:s.ba=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=lu(a,`Initialization of query '${vn(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.Sa.push(e),e.Fa(t.onlineState),s.ba&&e.Ma(s.ba)&&hu(t)}async function Yv(n,e){const t=te(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.Sa.indexOf(e);a>=0&&(s.Sa.splice(a,1),s.Sa.length===0?i=e.va()?0:1:!s.Da()&&e.va()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Xv(n,e){const t=te(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const u of a.Sa)u.Ma(i)&&(r=!0);a.ba=i}}r&&hu(t)}function Zv(n,e,t){const r=te(n),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);r.queries.delete(e)}function hu(n){n.Ca.forEach(e=>{e.next()})}var Na,kl;(kl=Na||(Na={})).xa="default",kl.Cache="cache";class eE{constructor(e,t,r){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Nn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const r=t!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=Nn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Na.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.key=e}}class hp{constructor(e){this.key=e}}class tE{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.Za=kf(e),this.Xa=new Tn(this.Za)}get eu(){return this.Ha}tu(e,t){const r=t?t.nu:new Cl,i=t?t.Xa:this.Xa;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,g=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((w,A)=>{const R=i.get(w),D=qi(this.query,A)?A:null,P=!!R&&this.mutatedKeys.has(R.key),O=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let b=!1;R&&D?R.data.isEqual(D.data)?P!==O&&(r.track({type:3,doc:D}),b=!0):this.ru(R,D)||(r.track({type:2,doc:D}),b=!0,(l&&this.Za(D,l)>0||g&&this.Za(D,g)<0)&&(u=!0)):!R&&D?(r.track({type:0,doc:D}),b=!0):R&&!D&&(r.track({type:1,doc:R}),b=!0,(l||g)&&(u=!0)),b&&(D?(a=a.add(D),s=O?s.add(w):s.delete(w)):(a=a.delete(w),s=s.delete(w)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const w=this.query.limitType==="F"?a.last():a.first();a=a.delete(w.key),s=s.delete(w.key),r.track({type:1,doc:w})}return{Xa:a,nu:r,Cs:u,mutatedKeys:s}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const a=e.nu.wa();a.sort((w,A)=>function(D,P){const O=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:b})}};return O(D)-O(P)}(w.type,A.type)||this.Za(w.doc,A.doc)),this.iu(r),i=i!=null&&i;const u=t&&!i?this.su():[],l=this.Ya.size===0&&this.current&&!i?1:0,g=l!==this.Ja;return this.Ja=l,a.length!==0||g?{snapshot:new Nn(this.query,e.Xa,s,a,e.mutatedKeys,l===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:u}:{ou:u}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Cl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new hp(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new lp(r))}),t}au(e){this.Ha=e.$s,this.Ya=se();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return Nn.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const du="SyncEngine";class nE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class rE{constructor(e){this.key=e,this.cu=!1}}class iE{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new cn(u=>Pf(u),Bi),this.Pu=new Map,this.Tu=new Set,this.Iu=new me(Y.comparator),this.Eu=new Map,this.du=new tu,this.Au={},this.Ru=new Map,this.Vu=Vn.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function sE(n,e,t=!0){const r=_p(n);let i;const s=r.hu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.uu()):i=await dp(r,e,t,!0),i}async function oE(n,e){const t=_p(n);await dp(t,e,!0,!1)}async function dp(n,e,t,r){const i=await Tv(n.localStore,ot(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let u;return r&&(u=await aE(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&ip(n.remoteStore,i),u}async function aE(n,e,t,r,i){n.fu=(A,R,D)=>async function(O,b,N,V){let M=b.view.tu(N);M.Cs&&(M=await Il(O.localStore,b.query,!1).then(({documents:_})=>b.view.tu(_,M)));const L=V&&V.targetChanges.get(b.targetId),$=V&&V.targetMismatches.get(b.targetId)!=null,S=b.view.applyChanges(M,O.isPrimaryClient,L,$);return Vl(O,b.targetId,S.ou),S.snapshot}(n,A,R,D);const s=await Il(n.localStore,e,!0),a=new tE(e,s.$s),u=a.tu(s.documents),l=Cr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),g=a.applyChanges(u,n.isPrimaryClient,l);Vl(n,t,g.ou);const w=new nE(e,t,a);return n.hu.set(e,w),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),g.snapshot}async function uE(n,e,t){const r=te(n),i=r.hu.get(e),s=r.Pu.get(i.targetId);if(s.length>1)return r.Pu.set(i.targetId,s.filter(a=>!Bi(a,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Da(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&su(r.remoteStore,i.targetId),Oa(r,i.targetId)}).catch(Un)):(Oa(r,i.targetId),await Da(r.localStore,i.targetId,!0))}async function cE(n,e){const t=te(n),r=t.hu.get(e),i=t.Pu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),su(t.remoteStore,r.targetId))}async function lE(n,e,t){const r=_E(n);try{const i=await function(a,u){const l=te(a),g=Se.now(),w=u.reduce((D,P)=>D.add(P.key),se());let A,R;return l.persistence.runTransaction("Locally write mutations","readwrite",D=>{let P=Et(),O=se();return l.Bs.getEntries(D,w).next(b=>{P=b,P.forEach((N,V)=>{V.isValidDocument()||(O=O.add(N))})}).next(()=>l.localDocuments.getOverlayedDocuments(D,P)).next(b=>{A=b;const N=[];for(const V of u){const M=Ty(V,A.get(V.key).overlayedDocument);M!=null&&N.push(new ln(V.key,M,If(M.value.mapValue),_t.exists(!0)))}return l.mutationQueue.addMutationBatch(D,g,N,u)}).next(b=>{R=b;const N=b.applyToLocalDocumentSet(A,O);return l.documentOverlayCache.saveOverlays(D,b.batchId,N)})}).then(()=>({batchId:R.batchId,changes:Vf(A)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,l){let g=a.Au[a.currentUser.toKey()];g||(g=new me(re)),g=g.insert(u,l),a.Au[a.currentUser.toKey()]=g}(r,i.batchId,t),await kr(r,i.changes),await Wi(r.remoteStore)}catch(i){const s=lu(i,"Failed to persist write");t.reject(s)}}async function fp(n,e){const t=te(n);try{const r=await Ev(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Eu.get(s);a&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.cu=!0:i.modifiedDocuments.size>0?ce(a.cu,14607):i.removedDocuments.size>0&&(ce(a.cu,42227),a.cu=!1))}),await kr(t,r,e)}catch(r){await Un(r)}}function Dl(n,e,t){const r=te(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.hu.forEach((s,a)=>{const u=a.view.Fa(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const l=te(a);l.onlineState=u;let g=!1;l.queries.forEach((w,A)=>{for(const R of A.Sa)R.Fa(u)&&(g=!0)}),g&&hu(l)}(r.eventManager,e),i.length&&r.lu.Y_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hE(n,e,t){const r=te(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let a=new me(Y.comparator);a=a.insert(s,qe.newNoDocument(s,ee.min()));const u=se().add(s),l=new Hi(ee.min(),new Map,new me(re),a,u);await fp(r,l),r.Iu=r.Iu.remove(s),r.Eu.delete(e),fu(r)}else await Da(r.localStore,e,!1).then(()=>Oa(r,e,t)).catch(Un)}async function dE(n,e){const t=te(n),r=e.batch.batchId;try{const i=await vv(t.localStore,e);gp(t,r,null),pp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await kr(t,i)}catch(i){await Un(i)}}async function fE(n,e,t){const r=te(n);try{const i=await function(a,u){const l=te(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let w;return l.mutationQueue.lookupMutationBatch(g,u).next(A=>(ce(A!==null,37113),w=A.keys(),l.mutationQueue.removeMutationBatch(g,A))).next(()=>l.mutationQueue.performConsistencyCheck(g)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(g,w,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,w)).next(()=>l.localDocuments.getDocuments(g,w))})}(r.localStore,e);gp(r,e,t),pp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await kr(r,i)}catch(i){await Un(i)}}function pp(n,e){(n.Ru.get(e)||[]).forEach(t=>{t.resolve()}),n.Ru.delete(e)}function gp(n,e,t){const r=te(n);let i=r.Au[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Au[r.currentUser.toKey()]=i}}function Oa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Pu.get(e))n.hu.delete(r),t&&n.lu.gu(r,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(r=>{n.du.containsKey(r)||mp(n,r)})}function mp(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(su(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),fu(n))}function Vl(n,e,t){for(const r of t)r instanceof lp?(n.du.addReference(r.key,e),pE(n,r)):r instanceof hp?(G(du,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,e),n.du.containsKey(r.key)||mp(n,r.key)):X(19791,{pu:r})}function pE(n,e){const t=e.key,r=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(r)||(G(du,"New document in limbo: "+t),n.Tu.add(r),fu(n))}function fu(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new Y(Ee.fromString(e)),r=n.Vu.next();n.Eu.set(r,new rE(t)),n.Iu=n.Iu.insert(t,r),ip(n.remoteStore,new Nt(ot(Ja(t.path)),r,"TargetPurposeLimboResolution",xi.le))}}async function kr(n,e,t){const r=te(n),i=[],s=[],a=[];r.hu.isEmpty()||(r.hu.forEach((u,l)=>{a.push(r.fu(l,e,t).then(g=>{var w;if((g||t)&&r.isPrimaryClient){const A=g?!g.fromCache:(w=t?.targetChanges.get(l.targetId))===null||w===void 0?void 0:w.current;r.sharedClientState.updateQueryState(l.targetId,A?"current":"not-current")}if(g){i.push(g);const A=ru.Rs(l.targetId,g);s.push(A)}}))}),await Promise.all(a),r.lu.Y_(i),await async function(l,g){const w=te(l);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>U.forEach(g,R=>U.forEach(R.ds,D=>w.persistence.referenceDelegate.addReference(A,R.targetId,D)).next(()=>U.forEach(R.As,D=>w.persistence.referenceDelegate.removeReference(A,R.targetId,D)))))}catch(A){if(!Fn(A))throw A;G(iu,"Failed to update sequence numbers: "+A)}for(const A of g){const R=A.targetId;if(!A.fromCache){const D=w.xs.get(R),P=D.snapshotVersion,O=D.withLastLimboFreeSnapshotVersion(P);w.xs=w.xs.insert(R,O)}}}(r.localStore,s))}async function gE(n,e){const t=te(n);if(!t.currentUser.isEqual(e)){G(du,"User change. New user:",e.toKey());const r=await ep(t.localStore,e);t.currentUser=e,function(s,a){s.Ru.forEach(u=>{u.forEach(l=>{l.reject(new J(q.CANCELLED,a))})}),s.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await kr(t,r.ks)}}function mE(n,e){const t=te(n),r=t.Eu.get(e);if(r&&r.cu)return se().add(r.key);{let i=se();const s=t.Pu.get(e);if(!s)return i;for(const a of s){const u=t.hu.get(a);i=i.unionWith(u.view.eu)}return i}}function _p(n){const e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=fp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hE.bind(null,e),e.lu.Y_=Xv.bind(null,e.eventManager),e.lu.gu=Zv.bind(null,e.eventManager),e}function _E(n){const e=te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fE.bind(null,e),e}class Si{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gi(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return yv(this.persistence,new gv,e.initialUser,this.serializer)}Su(e){return new Zf(nu.fi,this.serializer)}bu(e){return new bv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Si.provider={build:()=>new Si};class yE extends Si{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){ce(this.persistence.referenceDelegate instanceof bi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ev(r,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?He.withCacheSize(this.cacheSizeBytes):He.DEFAULT;return new Zf(r=>bi.fi(r,t),this.serializer)}}class La{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gE.bind(null,this.syncEngine),await Kv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Qv}()}createDatastore(e){const t=Gi(e.databaseInfo.databaseId),r=function(s){return new kv(s)}(e.databaseInfo);return function(s,a,u,l){return new Ov(s,a,u,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,u){return new xv(r,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Dl(this.syncEngine,t,0),function(){return bl.C()?new bl:new Rv}())}createSyncEngine(e,t){return function(i,s,a,u,l,g,w){const A=new iE(i,s,a,u,l,g);return w&&(A.mu=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=te(i);G(sn,"RemoteStore shutting down."),s.da.add(5),await Pr(s),s.Ra.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}La.provider={build:()=>new La};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):vt("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="FirestoreClient";class EE{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Be.UNAUTHENTICATED,this.clientId=df.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{G(zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(G(zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=lu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ds(n,e){n.asyncQueue.verifyOperationInProgress(),G(zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ep(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Nl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wE(n);G(zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Sl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Sl(e.remoteStore,i)),n._onlineComponents=e}async function wE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G(zt,"Using user provided OfflineComponentProvider");try{await Ds(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===q.FAILED_PRECONDITION||i.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Cn("Error using user provided cache. Falling back to memory cache: "+t),await Ds(n,new Si)}}else G(zt,"Using default OfflineComponentProvider"),await Ds(n,new yE(void 0));return n._offlineComponents}async function yp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G(zt,"Using user provided OnlineComponentProvider"),await Nl(n,n._uninitializedComponentsProvider._online)):(G(zt,"Using default OnlineComponentProvider"),await Nl(n,new La))),n._onlineComponents}function IE(n){return yp(n).then(e=>e.syncEngine)}async function TE(n){const e=await yp(n),t=e.eventManager;return t.onListen=sE.bind(null,e.syncEngine),t.onUnlisten=uE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=oE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cE.bind(null,e.syncEngine),t}function AE(n,e,t={}){const r=new Ut;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,u,l,g){const w=new vE({next:R=>{w.xu(),a.enqueueAndForget(()=>Yv(s,A));const D=R.docs.has(u);!D&&R.fromCache?g.reject(new J(q.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&R.fromCache&&l&&l.source==="server"?g.reject(new J(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(R)},error:R=>g.reject(R)}),A=new eE(Ja(u.path),w,{includeMetadataChanges:!0,Qa:!0});return Jv(s,A)}(await TE(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(n,e,t){if(!t)throw new J(q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function RE(n,e,t,r){if(e===!0&&r===!0)throw new J(q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ll(n){if(!Y.isDocumentKey(n))throw new J(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X(12329,{type:typeof n})}function Ir(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pu(n);throw new J(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="firestore.googleapis.com",xl=!0;class Ml{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ep,this.ssl=xl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:xl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Xy)throw new J(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new J(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new J(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new J(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gu{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ml({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ml(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new C_;switch(r.type){case"firstParty":return new V_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ol.get(t);r&&(G("ComponentProvider","Removing Datastore"),Ol.delete(t),r.terminate())}(this),Promise.resolve()}}function SE(n,e,t,r={}){var i;n=Ir(n,gu);const s=br(e),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;s&&(Wd(`https://${l}`),Qd("Firestore",!0)),a.host!==Ep&&a.host!==l&&Cn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},a),{host:l,ssl:s,emulatorOptions:r});if(!tn(g,u)&&(n._setSettings(g),r.mockUserToken)){let w,A;if(typeof r.mockUserToken=="string")w=r.mockUserToken,A=Be.MOCK_USER;else{w=tm(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const R=r.mockUserToken.sub||r.mockUserToken.user_id;if(!R)throw new J(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Be(R)}n._authCredentials=new P_(new lf(w,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mu(this.firestore,e,this._query)}}class Je{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}}class Tr extends mu{constructor(e,t,r){super(e,t,Ja(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new Y(e))}withConverter(e){return new Tr(this.firestore,e,this._path)}}function on(n,e,...t){if(n=Ge(n),arguments.length===1&&(e=df.newId()),bE("doc","path",e),n instanceof gu){const r=Ee.fromString(e,...t);return Ll(r),new Je(n,null,new Y(r))}{if(!(n instanceof Je||n instanceof Tr))throw new J(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ee.fromString(e,...t));return Ll(r),new Je(n.firestore,n instanceof Tr?n.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="AsyncQueue";class Fl{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new np(this,"async_queue_retry"),this.rc=()=>{const r=ks();r&&G(Ul,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const t=ks();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=ks();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new Ut;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Fn(e))throw e;G(Ul,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,vt("INTERNAL UNHANDLED ERROR: ",Bl(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=t,t}enqueueAfterDelay(e,t,r){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const i=cu.createAndSchedule(this,e,t,r,s=>this.uc(s));return this.Zu.push(i),i}oc(){this.Xu&&X(47125,{cc:Bl(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function Bl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class _u extends gu{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Fl,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fl(e),this._firestoreClient=void 0,await e}}}function CE(n,e){const t=typeof n=="object"?n:Zd(),r=typeof n=="string"?n:yi,i=$a(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Zg("firestore");s&&SE(i,...s)}return i}function wp(n){if(n._terminated)throw new J(q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||PE(n),n._firestoreClient}function PE(n){var e,t,r;const i=n._freezeSettings(),s=function(u,l,g,w){return new K_(u,l,g,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,vp(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new EE(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(u){const l=u?._online.build();return{_offline:u?._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this._byteString=e}static fromBase64String(e){try{return new On(Le.fromBase64String(e))}catch(t){throw new J(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new On(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=/^__.*__$/;class Ip{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ln(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Tp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{Ic:n})}}class wu{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ec(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new wu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.dc({path:r,Rc:!1});return i.Vc(e),i}mc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.dc({path:r,Rc:!1});return i.Ec(),i}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Ci(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(Tp(this.Ic)&&kE.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class DE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Gi(e)}bc(e,t,r,i=!1){return new wu({Ic:e,methodName:t,wc:r,path:Oe.emptyPath(),Rc:!1,yc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function VE(n){const e=n._freezeSettings(),t=Gi(n._databaseId);return new DE(n._databaseId,!!e.ignoreUndefinedProperties,t)}class Ji extends yu{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ji}}function NE(n,e,t,r){const i=n.bc(1,e,t);bp("Data must be an object, but it was:",i,r);const s=[],a=Qe.empty();Ht(r,(l,g)=>{const w=Iu(e,l,t);g=Ge(g);const A=i.mc(w);if(g instanceof Ji)s.push(w);else{const R=Yi(g,A);R!=null&&(s.push(w),a.set(w,R))}});const u=new et(s);return new Ip(a,u,i.fieldTransforms)}function OE(n,e,t,r,i,s){const a=n.bc(1,e,t),u=[ql(e,r,t)],l=[i];if(s.length%2!=0)throw new J(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<s.length;R+=2)u.push(ql(e,s[R])),l.push(s[R+1]);const g=[],w=Qe.empty();for(let R=u.length-1;R>=0;--R)if(!ME(g,u[R])){const D=u[R];let P=l[R];P=Ge(P);const O=a.mc(D);if(P instanceof Ji)g.push(D);else{const b=Yi(P,O);b!=null&&(g.push(D),w.set(D,b))}}const A=new et(g);return new Ip(w,A,a.fieldTransforms)}function Yi(n,e){if(Ap(n=Ge(n)))return bp("Unsupported field value:",e,n),LE(n,e);if(n instanceof yu)return function(r,i){if(!Tp(i.Ic))throw i.gc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const u of r){let l=Yi(u,i.fc(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _y(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Se.fromDate(r);return{timestampValue:Ai(i.serializer,s)}}if(r instanceof Se){const s=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ai(i.serializer,s)}}if(r instanceof vu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof On)return{bytesValue:Hf(i.serializer,r._byteString)};if(r instanceof Je){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:eu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Eu)return function(a,u){return{mapValue:{fields:{[Ef]:{stringValue:wf},[vi]:{arrayValue:{values:a.toArray().map(g=>{if(typeof g!="number")throw u.gc("VectorValues must only contain numeric values.");return Ya(u.serializer,g)})}}}}}}(r,i);throw i.gc(`Unsupported field value: ${pu(r)}`)}(n,e)}function LE(n,e){const t={};return pf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ht(n,(r,i)=>{const s=Yi(i,e.Ac(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Ap(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Se||n instanceof vu||n instanceof On||n instanceof Je||n instanceof yu||n instanceof Eu)}function bp(n,e,t){if(!Ap(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=pu(t);throw r==="an object"?e.gc(n+" a custom object"):e.gc(n+" "+r)}}function ql(n,e,t){if((e=Ge(e))instanceof Qi)return e._internalPath;if(typeof e=="string")return Iu(n,e);throw Ci("Field path arguments must be of type string or ",n,!1,void 0,t)}const xE=new RegExp("[~\\*/\\[\\]]");function Iu(n,e,t){if(e.search(xE)>=0)throw Ci(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qi(...e.split("."))._internalPath}catch{throw Ci(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ci(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new J(q.INVALID_ARGUMENT,u+n+l)}function ME(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Sp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class UE extends Rp{data(){return super.data()}}function Sp(n,e){return typeof e=="string"?Iu(n,e):e instanceof Qi?e._internalPath:e._delegate._internalPath}class FE{convertValue(e,t="none"){switch(jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ht(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[vi].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>Te(a.doubleValue));return new Eu(s)}convertGeoPoint(e){return new vu(Te(e.latitude),Te(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ui(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(_r(e));default:return null}}convertTimestamp(e){const t=Bt(e);return new Se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ee.fromString(e);ce(Yf(r),9688,{name:e});const i=new yr(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(t)||vt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cp extends Rp{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qE(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Sp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class qE extends Cp{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(n){n=Ir(n,Je);const e=Ir(n.firestore,_u);return AE(wp(e),n._key).then(t=>zE(e,n,t))}class jE extends FE{constructor(e){super(),this.firestore=e}convertBytes(e){return new On(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,t)}}function Tu(n,e,t,...r){n=Ir(n,Je);const i=Ir(n.firestore,_u),s=VE(i);let a;return a=typeof(e=Ge(e))=="string"||e instanceof Qi?OE(s,"updateDoc",n._key,e,t,r):NE(s,"updateDoc",n._key,e),$E(i,[a.toMutation(n._key,_t.exists(!0))])}function $E(n,e){return function(r,i){const s=new Ut;return r.asyncQueue.enqueueAndForget(async()=>lE(await IE(r),i,s)),s.promise}(wp(n),e)}function zE(n,e,t){const r=t.docs.get(e._key),i=new jE(n);return new Cp(n,i,e._key,r,new BE(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Mn=i})(xn),Sn(new nn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),u=new _u(new k_(r.getProvider("auth-internal")),new N_(a,r.getProvider("app-check-internal")),function(g,w){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new J(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yr(g.options.projectId,w)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),xt(Gc,Kc,e),xt(Gc,Kc,"esm2017")})();var HE="firebase",GE="11.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(HE,GE,"app");function Au(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Pp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KE=Pp,kp=new Rr("auth","Firebase",Pp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new qa("@firebase/auth");function WE(n,...e){Pi.logLevel<=ie.WARN&&Pi.warn(`Auth (${xn}): ${n}`,...e)}function li(n,...e){Pi.logLevel<=ie.ERROR&&Pi.error(`Auth (${xn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n,...e){throw bu(n,...e)}function ut(n,...e){return bu(n,...e)}function Dp(n,e,t){const r=Object.assign(Object.assign({},KE()),{[e]:t});return new Rr("auth","Firebase",r).create(e,{appName:n.name})}function Zt(n){return Dp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return kp.create(n,...e)}function Z(n,e,...t){if(!n)throw bu(e,...t)}function gt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw li(e),new Error(e)}function It(n,e){n||gt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function QE(){return jl()==="http:"||jl()==="https:"}function jl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QE()||am()||"connection"in navigator)?navigator.onLine:!0}function YE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.shortDelay=e,this.longDelay=t,It(t>e,"Short delay should be less than long delay!"),this.isMobile=im()||um()}get(){return JE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(n,e){It(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ew=new Dr(3e4,6e4);function Su(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function qn(n,e,t,r,i={}){return Np(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const u=Sr(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:l},s);return om()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&br(n.emulatorConfig.host)&&(g.credentials="include"),Vp.fetch()(await Op(n,n.config.apiHost,t,u),g)})}async function Np(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},XE),e);try{const i=new nw(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ni(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[l,g]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ni(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ni(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ni(n,"user-disabled",a);const w=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Dp(n,w,g);wt(n,w)}}catch(i){if(i instanceof Tt)throw i;wt(n,"network-request-failed",{message:String(i)})}}async function tw(n,e,t,r,i={}){const s=await qn(n,e,t,r,i);return"mfaPendingCredential"in s&&wt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Op(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?Ru(n.config,i):`${n.config.apiScheme}://${i}`;return ZE.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class nw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ut(this.auth,"network-request-failed")),ew.get())})}}function ni(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ut(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(n,e){return qn(n,"POST","/v1/accounts:delete",e)}async function ki(n,e){return qn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iw(n,e=!1){const t=Ge(n),r=await t.getIdToken(e),i=Cu(r);Z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:fr(Vs(i.auth_time)),issuedAtTime:fr(Vs(i.iat)),expirationTime:fr(Vs(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Vs(n){return Number(n)*1e3}function Cu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return li("JWT malformed, contained fewer than 3 sections"),null;try{const i=zd(t);return i?JSON.parse(i):(li("Failed to decode base64 JWT payload"),null)}catch(i){return li("Caught error parsing JWT payload as JSON",i?.toString()),null}}function $l(n){const e=Cu(n);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Tt&&sw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function sw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fr(this.lastLoginAt),this.creationTime=fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Ar(n,ki(t,{idToken:r}));Z(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Lp(s.providerUserInfo):[],u=uw(n.providerData,a),l=n.isAnonymous,g=!(n.email&&s.passwordHash)&&!u?.length,w=l?g:!1,A={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new Ma(s.createdAt,s.lastLoginAt),isAnonymous:w};Object.assign(n,A)}async function aw(n){const e=Ge(n);await Di(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uw(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Lp(n){return n.map(e=>{var{providerId:t}=e,r=Au(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cw(n,e){const t=await Np(n,{},async()=>{const r=Sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await Op(n,i,"/v1/token",`key=${s}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Vp.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function lw(n,e){return qn(n,"POST","/v2/accounts:revokeToken",Su(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$l(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const t=$l(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await cw(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new An;return r&&(Z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new An,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(n,e){Z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class tt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Au(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ow(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ma(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ar(this,this.stsTokenManager.getToken(this.auth,e));return Z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return iw(this,e)}reload(){return aw(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Di(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(it(this.auth.app))return Promise.reject(Zt(this.auth));const e=await this.getIdToken();return await Ar(this,rw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,u,l,g,w;const A=(r=t.displayName)!==null&&r!==void 0?r:void 0,R=(i=t.email)!==null&&i!==void 0?i:void 0,D=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(u=t.tenantId)!==null&&u!==void 0?u:void 0,b=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,N=(g=t.createdAt)!==null&&g!==void 0?g:void 0,V=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:M,emailVerified:L,isAnonymous:$,providerData:S,stsTokenManager:_}=t;Z(M&&_,e,"internal-error");const h=An.fromJSON(this.name,_);Z(typeof M=="string",e,"internal-error"),Ct(A,e.name),Ct(R,e.name),Z(typeof L=="boolean",e,"internal-error"),Z(typeof $=="boolean",e,"internal-error"),Ct(D,e.name),Ct(P,e.name),Ct(O,e.name),Ct(b,e.name),Ct(N,e.name),Ct(V,e.name);const p=new tt({uid:M,auth:e,email:R,emailVerified:L,displayName:A,isAnonymous:$,photoURL:P,phoneNumber:D,tenantId:O,stsTokenManager:h,createdAt:N,lastLoginAt:V});return S&&Array.isArray(S)&&(p.providerData=S.map(f=>Object.assign({},f))),b&&(p._redirectEventId=b),p}static async _fromIdTokenResponse(e,t,r=!1){const i=new An;i.updateFromServerResponse(t);const s=new tt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Di(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];Z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Lp(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,u=new An;u.updateFromIdToken(r);const l=new tt({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ma(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,g),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Map;function mt(n){It(n instanceof Function,"Expected a class definition");let e=zl.get(n);return e?(It(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xp.type="NONE";const Hl=xp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(n,e,t){return`firebase:${n}:${e}:${t}`}class bn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hi(this.userKey,i.apiKey,s),this.fullPersistenceKey=hi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ki(this.auth,{idToken:e}).catch(()=>{});return t?tt._fromGetAccountInfoResponse(this.auth,t,e):null}return tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new bn(mt(Hl),e,r);const i=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let s=i[0]||mt(Hl);const a=hi(r,e.config.apiKey,e.name);let u=null;for(const g of t)try{const w=await g._get(a);if(w){let A;if(typeof w=="string"){const R=await ki(e,{idToken:w}).catch(()=>{});if(!R)break;A=await tt._fromGetAccountInfoResponse(e,R,w)}else A=tt._fromJSON(e,w);g!==s&&(u=A),s=g;break}}catch{}const l=i.filter(g=>g._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new bn(s,e,r):(s=l[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async g=>{if(g!==s)try{await g._remove(a)}catch{}})),new bn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jp(e))return"Blackberry";if($p(e))return"Webos";if(Up(e))return"Safari";if((e.includes("chrome/")||Fp(e))&&!e.includes("edge/"))return"Chrome";if(qp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Mp(n=je()){return/firefox\//i.test(n)}function Up(n=je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fp(n=je()){return/crios\//i.test(n)}function Bp(n=je()){return/iemobile/i.test(n)}function qp(n=je()){return/android/i.test(n)}function jp(n=je()){return/blackberry/i.test(n)}function $p(n=je()){return/webos/i.test(n)}function Pu(n=je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function hw(n=je()){var e;return Pu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dw(){return cm()&&document.documentMode===10}function zp(n=je()){return Pu(n)||qp(n)||$p(n)||jp(n)||/windows phone/i.test(n)||Bp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n,e=[]){let t;switch(n){case"Browser":t=Gl(je());break;case"Worker":t=`${Gl(je())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,u)=>{try{const l=e(s);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(n,e={}){return qn(n,"GET","/v2/passwordPolicy",Su(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=6;class mw{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:gw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kl(this),this.idTokenSubscription=new Kl(this),this.beforeStateQueue=new fw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mt(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await bn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ki(this,{idToken:e}),r=await tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(it(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Di(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(it(this.app))return Promise.reject(Zt(this));const t=e?Ge(e):null;return t&&Z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return it(this.app)?Promise.reject(Zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return it(this.app)?Promise.reject(Zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pw(this),t=new mw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Rr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await lw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mt(e)||this._popupRedirectResolver;Z(t,this,"argument-error"),this.redirectPersistenceManager=await bn.create(this,[mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(it(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&WE(`Error while retrieving App Check token: ${t.error}`),t?.token}}function ku(n){return Ge(n)}class Kl{constructor(e){this.auth=e,this.observer=null,this.addObserver=_m(t=>this.observer=t)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Du={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yw(n){Du=n}function vw(n){return Du.loadJS(n)}function Ew(){return Du.gapiScript}function ww(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(n,e){const t=$a(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(tn(s,e??{}))return i;wt(i,"already-initialized")}return t.initialize({options:e})}function Tw(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(mt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Aw(n,e,t){const r=ku(n);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Gp(e),{host:a,port:u}=bw(e),l=u===null?"":`:${u}`,g={url:`${s}//${a}${l}/`},w=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(tn(g,r.config.emulator)&&tn(w,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=w,r.settings.appVerificationDisabledForTesting=!0,br(a)?(Wd(`${s}//${a}${l}`),Qd("Auth",!0)):Rw()}function Gp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bw(n){const e=Gp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wl(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Wl(a)}}}function Wl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Rw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gt("not implemented")}_getIdTokenResponse(e){return gt("not implemented")}_linkToIdToken(e,t){return gt("not implemented")}_getReauthenticationResolver(e){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(n,e){return tw(n,"POST","/v1/accounts:signInWithIdp",Su(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="http://localhost";class an extends Kp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new an(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Au(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new an(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Rn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Rn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rn(e,t)}buildRequest(){const e={requestUri:Sw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Sr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Wp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Vr{constructor(){super("facebook.com")}static credential(e){return an._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Vr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return an._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return kt.credential(t,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Vr{constructor(){super("github.com")}static credential(e){return an._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Vr{constructor(){super("twitter.com")}static credential(e,t){return an._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Vt.credential(t,r)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await tt._fromIdTokenResponse(e,r,i),a=Ql(r);return new Ln({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ql(r);return new Ln({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ql(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends Tt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Vi(e,t,r,i)}}function Qp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vi._fromErrorAndOperation(n,s,e,r):s})}async function Cw(n,e,t=!1){const r=await Ar(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ln._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pw(n,e,t=!1){const{auth:r}=n;if(it(r.app))return Promise.reject(Zt(r));const i="reauthenticate";try{const s=await Ar(n,Qp(r,i,e,n),t);Z(s.idToken,r,"internal-error");const a=Cu(s.idToken);Z(a,r,"internal-error");const{sub:u}=a;return Z(n.uid===u,r,"user-mismatch"),Ln._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&wt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(n,e,t=!1){if(it(n.app))return Promise.reject(Zt(n));const r="signIn",i=await Qp(n,r,e),s=await Ln._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function Dw(n,e,t,r){return Ge(n).onIdTokenChanged(e,t,r)}function Vw(n,e,t){return Ge(n).beforeAuthStateChanged(e,t)}function Nw(n){return Ge(n).signOut()}const Ni="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ni,"1"),this.storage.removeItem(Ni),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=1e3,Lw=10;class Yp extends Jp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);dw()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Lw):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ow)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yp.type="LOCAL";const xw=Yp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp extends Jp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xp.type="SESSION";const Zp=Xp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Zi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async g=>g(t.origin,s)),l=await Mw(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,l)=>{const g=Vu("",20);i.port1.start();const w=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(A){const R=A;if(R.data.eventId===g)switch(R.data.status){case"ack":clearTimeout(w),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(R.data.response);break;default:clearTimeout(w),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return window}function Fw(n){ct().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function Bw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qw(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function jw(){return eg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="firebaseLocalStorageDb",$w=1,Oi="firebaseLocalStorage",ng="fbase_key";class Nr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function es(n,e){return n.transaction([Oi],e?"readwrite":"readonly").objectStore(Oi)}function zw(){const n=indexedDB.deleteDatabase(tg);return new Nr(n).toPromise()}function Ua(){const n=indexedDB.open(tg,$w);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Oi,{keyPath:ng})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Oi)?e(r):(r.close(),await zw(),e(await Ua()))})})}async function Jl(n,e,t){const r=es(n,!0).put({[ng]:e,value:t});return new Nr(r).toPromise()}async function Hw(n,e){const t=es(n,!1).get(e),r=await new Nr(t).toPromise();return r===void 0?null:r.value}function Yl(n,e){const t=es(n,!0).delete(e);return new Nr(t).toPromise()}const Gw=800,Kw=3;class rg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ua(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Kw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zi._getInstance(jw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Bw(),!this.activeServiceWorker)return;this.sender=new Uw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ua();return await Jl(e,Ni,"1"),await Yl(e,Ni),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Hw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=es(i,!1).getAll();return new Nr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rg.type="LOCAL";const Ww=rg;new Dr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(n,e){return e?mt(e):(Z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu extends Kp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Jw(n){return kw(n.auth,new Nu(n),n.bypassAuthState)}function Yw(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),Pw(t,new Nu(n),n.bypassAuthState)}async function Xw(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),Cw(t,new Nu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jw;case"linkViaPopup":case"linkViaRedirect":return Xw;case"reauthViaPopup":case"reauthViaRedirect":return Yw;default:wt(this.auth,"internal-error")}}resolve(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=new Dr(2e3,1e4);class In extends ig{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const e=Vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zw.get())};e()}}In.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="pendingRedirect",di=new Map;class tI extends ig{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=di.get(this.auth._key());if(!e){try{const r=await nI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}di.set(this.auth._key(),e)}return this.bypassAuthState||di.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nI(n,e){const t=sI(e),r=iI(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function rI(n,e){di.set(n._key(),e)}function iI(n){return mt(n._redirectPersistence)}function sI(n){return hi(eI,n.config.apiKey,n.name)}async function oI(n,e,t=!1){if(it(n.app))return Promise.reject(Zt(n));const r=ku(n),i=Qw(r,e),a=await new tI(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=10*60*1e3;class uI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!sg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ut(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xl(e))}saveEventToCache(e){this.cachedEventUids.add(Xl(e)),this.lastProcessedEventTime=Date.now()}}function Xl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function sg({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function cI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sg(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(n,e={}){return qn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dI=/^https?/;async function fI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await lI(n);for(const t of e)try{if(pI(t))return}catch{}wt(n,"unauthorized-domain")}function pI(n){const e=xa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!dI.test(t))return!1;if(hI.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=new Dr(3e4,6e4);function Zl(){const n=ct().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function mI(n){return new Promise((e,t)=>{var r,i,s;function a(){Zl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zl(),t(ut(n,"network-request-failed"))},timeout:gI.get()})}if(!((i=(r=ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ct().gapi)===null||s===void 0)&&s.load)a();else{const u=ww("iframefcb");return ct()[u]=()=>{gapi.load?a():t(ut(n,"network-request-failed"))},vw(`${Ew()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw fi=null,e})}let fi=null;function _I(n){return fi=fi||mI(n),fi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=new Dr(5e3,15e3),vI="__/auth/iframe",EI="emulator/auth/iframe",wI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},II=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TI(n){const e=n.config;Z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ru(e,EI):`https://${n.config.authDomain}/${vI}`,r={apiKey:e.apiKey,appName:n.name,v:xn},i=II.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Sr(r).slice(1)}`}async function AI(n){const e=await _I(n),t=ct().gapi;return Z(t,n,"internal-error"),e.open({where:document.body,url:TI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=ut(n,"network-request-failed"),u=ct().setTimeout(()=>{s(a)},yI.get());function l(){ct().clearTimeout(u),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RI=500,SI=600,CI="_blank",PI="http://localhost";class eh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kI(n,e,t,r=RI,i=SI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l=Object.assign(Object.assign({},bI),{width:r.toString(),height:i.toString(),top:s,left:a}),g=je().toLowerCase();t&&(u=Fp(g)?CI:t),Mp(g)&&(e=e||PI,l.scrollbars="yes");const w=Object.entries(l).reduce((R,[D,P])=>`${R}${D}=${P},`,"");if(hw(g)&&u!=="_self")return DI(e||"",u),new eh(null);const A=window.open(e||"",u,w);Z(A,n,"popup-blocked");try{A.focus()}catch{}return new eh(A)}function DI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="__/auth/handler",NI="emulator/auth/handler",OI=encodeURIComponent("fac");async function th(n,e,t,r,i,s){Z(n.config.authDomain,n,"auth-domain-config-required"),Z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:xn,eventId:i};if(e instanceof Wp){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",mm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))a[w]=A}if(e instanceof Vr){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(a.scopes=w.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const w of Object.keys(u))u[w]===void 0&&delete u[w];const l=await n._getAppCheckToken(),g=l?`#${OI}=${encodeURIComponent(l)}`:"";return`${LI(n)}?${Sr(u).slice(1)}${g}`}function LI({config:n}){return n.emulator?Ru(n,NI):`https://${n.authDomain}/${VI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="webStorageSupport";class xI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zp,this._completeRedirectFn=oI,this._overrideRedirectResult=rI}async _openPopup(e,t,r,i){var s;It((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await th(e,t,r,xa(),i);return kI(e,a,Vu())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await th(e,t,r,xa(),i);return Fw(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(It(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await AI(e),r=new uI(e);return t.register("authEvent",i=>(Z(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ns,{type:Ns},i=>{var s;const a=(s=i?.[0])===null||s===void 0?void 0:s[Ns];a!==void 0&&t(!!a),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zp()||Up()||Pu()}}const MI=xI;var nh="@firebase/auth",rh="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BI(n){Sn(new nn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;Z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hp(n)},g=new _w(r,i,s,l);return Tw(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Sn(new nn("auth-internal",e=>{const t=ku(e.getProvider("auth").getImmediate());return(r=>new UI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(nh,rh,FI(n)),xt(nh,rh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=5*60,jI=Kd("authIdTokenMaxAge")||qI;let ih=null;const $I=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>jI)return;const i=t?.token;ih!==i&&(ih=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zI(n=Zd()){const e=$a(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Iw(n,{popupRedirectResolver:MI,persistence:[Ww,xw,Zp]}),r=Kd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=$I(s.toString());Vw(t,a,()=>a(t.currentUser)),Dw(t,u=>a(u))}}const i=Hd("auth");return i&&Aw(t,`http://${i}`),t}function HI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}yw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ut("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",HI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BI("Browser");const GI={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},og=Xd(GI),un=CE(og),KI=zI(og),en=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:n=>{n.onmouseenter=Swal.stopTimer,n.onmouseleave=Swal.resumeTimer}});function Fa(n){Swal.fire({title:n,icon:"success",draggable:!0,customClass:{popup:"swal-glass"}})}function pr(n){Swal.fire({title:n,icon:"error",draggable:!0,customClass:{popup:"swal-glass"}})}const WI=async()=>{const n=JSON.parse(localStorage.getItem("userLoggedIn"))??!1;if(!n)return;const e=on(un,"usuarios",n.uid)??!1,t=e?await Xi(e):!1;if(t)return t.data()},ag=()=>{const n=JSON.parse(localStorage.getItem("userLoggedIn"))??!1;if(!n&&!n.uid)return window.location.href="/auth"},QI=async()=>((await WI()??!1)&&await Nw(KI),localStorage.removeItem("userLoggedIn"),ag(),en.fire({icon:"success",text:"Deslogado com sucesso."})),JI=()=>{const{name:n}=JSON.parse(localStorage.getItem("userLoggedIn"))??"Error";return n},YI=async n=>{const e=JSON.parse(localStorage.getItem("userLoggedIn"))??!1;if(e)try{const{vales:t}=(await Xi(on(un,"usuarios",e.uid))).data();await Tu(on(un,"usuarios",e.uid),{vales:[...t,n]}),localStorage.setItem(`vales_${e.uid}_cache`,JSON.stringify([...t,n])),Ou(n,"vales")}catch(t){console.error(t)}},Ou=async(n,e=!1)=>{const t=JSON.parse(localStorage.getItem("userLoggedIn")??!1);if(!t)return!1;try{const{descontos:r}=(await Xi(on(un,"usuarios",t.uid))).data();await Tu(on(un,"usuarios",t.uid),{descontos:[...r,n]}),localStorage.setItem(`descontos_${t.uid}_cache`,JSON.stringify([...r,n]))}catch(r){console.error(r)}e==="faltas"?en.fire({icon:"success",title:"Faltas atualizadas no banco de dados."}):e==="vales"?en.fire({icon:"success",title:"Vales atualizados no banco de dados."}):en.fire({icon:"success",title:"Descontos atualizados no banco de dados."})},XI=async({data:n,fotos:e})=>{Ou({data:n,motivo:"Foto Ausente",fotos:e},"faltas")},ZI=async()=>{const{uid:n}=JSON.parse(localStorage.getItem("userLoggedIn")),e=JSON.parse(localStorage.getItem(`vales_${n}_cache`))??[],t=JSON.parse(localStorage.getItem(`descontos_${n}_cache`))??[],r=t.filter(i=>i.motivo==="Foto Ausente")??[];return console.log("Ln 93, vales - user.js",e),console.log("Ln 94, descontos - user.js",t),console.log("Ln 95, faltas - user.js",r),{vales:e,descontos:t,faltas:r}};document.getElementById("log-out").addEventListener("click",QI);document.addEventListener("DOMContentLoaded",ag);var ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function eT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Os,sh;function tT(){if(sh)return Os;sh=1;function n(){this.__data__=[],this.size=0}return Os=n,Os}var Ls,oh;function ug(){if(oh)return Ls;oh=1;function n(e,t){return e===t||e!==e&&t!==t}return Ls=n,Ls}var xs,ah;function ts(){if(ah)return xs;ah=1;var n=ug();function e(t,r){for(var i=t.length;i--;)if(n(t[i][0],r))return i;return-1}return xs=e,xs}var Ms,uh;function nT(){if(uh)return Ms;uh=1;var n=ts(),e=Array.prototype,t=e.splice;function r(i){var s=this.__data__,a=n(s,i);if(a<0)return!1;var u=s.length-1;return a==u?s.pop():t.call(s,a,1),--this.size,!0}return Ms=r,Ms}var Us,ch;function rT(){if(ch)return Us;ch=1;var n=ts();function e(t){var r=this.__data__,i=n(r,t);return i<0?void 0:r[i][1]}return Us=e,Us}var Fs,lh;function iT(){if(lh)return Fs;lh=1;var n=ts();function e(t){return n(this.__data__,t)>-1}return Fs=e,Fs}var Bs,hh;function sT(){if(hh)return Bs;hh=1;var n=ts();function e(t,r){var i=this.__data__,s=n(i,t);return s<0?(++this.size,i.push([t,r])):i[s][1]=r,this}return Bs=e,Bs}var qs,dh;function ns(){if(dh)return qs;dh=1;var n=tT(),e=nT(),t=rT(),r=iT(),i=sT();function s(a){var u=-1,l=a==null?0:a.length;for(this.clear();++u<l;){var g=a[u];this.set(g[0],g[1])}}return s.prototype.clear=n,s.prototype.delete=e,s.prototype.get=t,s.prototype.has=r,s.prototype.set=i,qs=s,qs}var js,fh;function oT(){if(fh)return js;fh=1;var n=ns();function e(){this.__data__=new n,this.size=0}return js=e,js}var $s,ph;function aT(){if(ph)return $s;ph=1;function n(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}return $s=n,$s}var zs,gh;function uT(){if(gh)return zs;gh=1;function n(e){return this.__data__.get(e)}return zs=n,zs}var Hs,mh;function cT(){if(mh)return Hs;mh=1;function n(e){return this.__data__.has(e)}return Hs=n,Hs}var Gs,_h;function cg(){if(_h)return Gs;_h=1;var n=typeof ri=="object"&&ri&&ri.Object===Object&&ri;return Gs=n,Gs}var Ks,yh;function At(){if(yh)return Ks;yh=1;var n=cg(),e=typeof self=="object"&&self&&self.Object===Object&&self,t=n||e||Function("return this")();return Ks=t,Ks}var Ws,vh;function Lu(){if(vh)return Ws;vh=1;var n=At(),e=n.Symbol;return Ws=e,Ws}var Qs,Eh;function lT(){if(Eh)return Qs;Eh=1;var n=Lu(),e=Object.prototype,t=e.hasOwnProperty,r=e.toString,i=n?n.toStringTag:void 0;function s(a){var u=t.call(a,i),l=a[i];try{a[i]=void 0;var g=!0}catch{}var w=r.call(a);return g&&(u?a[i]=l:delete a[i]),w}return Qs=s,Qs}var Js,wh;function hT(){if(wh)return Js;wh=1;var n=Object.prototype,e=n.toString;function t(r){return e.call(r)}return Js=t,Js}var Ys,Ih;function rs(){if(Ih)return Ys;Ih=1;var n=Lu(),e=lT(),t=hT(),r="[object Null]",i="[object Undefined]",s=n?n.toStringTag:void 0;function a(u){return u==null?u===void 0?i:r:s&&s in Object(u)?e(u):t(u)}return Ys=a,Ys}var Xs,Th;function lg(){if(Th)return Xs;Th=1;function n(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}return Xs=n,Xs}var Zs,Ah;function hg(){if(Ah)return Zs;Ah=1;var n=rs(),e=lg(),t="[object AsyncFunction]",r="[object Function]",i="[object GeneratorFunction]",s="[object Proxy]";function a(u){if(!e(u))return!1;var l=n(u);return l==r||l==i||l==t||l==s}return Zs=a,Zs}var eo,bh;function dT(){if(bh)return eo;bh=1;var n=At(),e=n["__core-js_shared__"];return eo=e,eo}var to,Rh;function fT(){if(Rh)return to;Rh=1;var n=dT(),e=function(){var r=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function t(r){return!!e&&e in r}return to=t,to}var no,Sh;function dg(){if(Sh)return no;Sh=1;var n=Function.prototype,e=n.toString;function t(r){if(r!=null){try{return e.call(r)}catch{}try{return r+""}catch{}}return""}return no=t,no}var ro,Ch;function pT(){if(Ch)return ro;Ch=1;var n=hg(),e=fT(),t=lg(),r=dg(),i=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,a=Function.prototype,u=Object.prototype,l=a.toString,g=u.hasOwnProperty,w=RegExp("^"+l.call(g).replace(i,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function A(R){if(!t(R)||e(R))return!1;var D=n(R)?w:s;return D.test(r(R))}return ro=A,ro}var io,Ph;function gT(){if(Ph)return io;Ph=1;function n(e,t){return e?.[t]}return io=n,io}var so,kh;function jn(){if(kh)return so;kh=1;var n=pT(),e=gT();function t(r,i){var s=e(r,i);return n(s)?s:void 0}return so=t,so}var oo,Dh;function xu(){if(Dh)return oo;Dh=1;var n=jn(),e=At(),t=n(e,"Map");return oo=t,oo}var ao,Vh;function is(){if(Vh)return ao;Vh=1;var n=jn(),e=n(Object,"create");return ao=e,ao}var uo,Nh;function mT(){if(Nh)return uo;Nh=1;var n=is();function e(){this.__data__=n?n(null):{},this.size=0}return uo=e,uo}var co,Oh;function _T(){if(Oh)return co;Oh=1;function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}return co=n,co}var lo,Lh;function yT(){if(Lh)return lo;Lh=1;var n=is(),e="__lodash_hash_undefined__",t=Object.prototype,r=t.hasOwnProperty;function i(s){var a=this.__data__;if(n){var u=a[s];return u===e?void 0:u}return r.call(a,s)?a[s]:void 0}return lo=i,lo}var ho,xh;function vT(){if(xh)return ho;xh=1;var n=is(),e=Object.prototype,t=e.hasOwnProperty;function r(i){var s=this.__data__;return n?s[i]!==void 0:t.call(s,i)}return ho=r,ho}var fo,Mh;function ET(){if(Mh)return fo;Mh=1;var n=is(),e="__lodash_hash_undefined__";function t(r,i){var s=this.__data__;return this.size+=this.has(r)?0:1,s[r]=n&&i===void 0?e:i,this}return fo=t,fo}var po,Uh;function wT(){if(Uh)return po;Uh=1;var n=mT(),e=_T(),t=yT(),r=vT(),i=ET();function s(a){var u=-1,l=a==null?0:a.length;for(this.clear();++u<l;){var g=a[u];this.set(g[0],g[1])}}return s.prototype.clear=n,s.prototype.delete=e,s.prototype.get=t,s.prototype.has=r,s.prototype.set=i,po=s,po}var go,Fh;function IT(){if(Fh)return go;Fh=1;var n=wT(),e=ns(),t=xu();function r(){this.size=0,this.__data__={hash:new n,map:new(t||e),string:new n}}return go=r,go}var mo,Bh;function TT(){if(Bh)return mo;Bh=1;function n(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}return mo=n,mo}var _o,qh;function ss(){if(qh)return _o;qh=1;var n=TT();function e(t,r){var i=t.__data__;return n(r)?i[typeof r=="string"?"string":"hash"]:i.map}return _o=e,_o}var yo,jh;function AT(){if(jh)return yo;jh=1;var n=ss();function e(t){var r=n(this,t).delete(t);return this.size-=r?1:0,r}return yo=e,yo}var vo,$h;function bT(){if($h)return vo;$h=1;var n=ss();function e(t){return n(this,t).get(t)}return vo=e,vo}var Eo,zh;function RT(){if(zh)return Eo;zh=1;var n=ss();function e(t){return n(this,t).has(t)}return Eo=e,Eo}var wo,Hh;function ST(){if(Hh)return wo;Hh=1;var n=ss();function e(t,r){var i=n(this,t),s=i.size;return i.set(t,r),this.size+=i.size==s?0:1,this}return wo=e,wo}var Io,Gh;function fg(){if(Gh)return Io;Gh=1;var n=IT(),e=AT(),t=bT(),r=RT(),i=ST();function s(a){var u=-1,l=a==null?0:a.length;for(this.clear();++u<l;){var g=a[u];this.set(g[0],g[1])}}return s.prototype.clear=n,s.prototype.delete=e,s.prototype.get=t,s.prototype.has=r,s.prototype.set=i,Io=s,Io}var To,Kh;function CT(){if(Kh)return To;Kh=1;var n=ns(),e=xu(),t=fg(),r=200;function i(s,a){var u=this.__data__;if(u instanceof n){var l=u.__data__;if(!e||l.length<r-1)return l.push([s,a]),this.size=++u.size,this;u=this.__data__=new t(l)}return u.set(s,a),this.size=u.size,this}return To=i,To}var Ao,Wh;function PT(){if(Wh)return Ao;Wh=1;var n=ns(),e=oT(),t=aT(),r=uT(),i=cT(),s=CT();function a(u){var l=this.__data__=new n(u);this.size=l.size}return a.prototype.clear=e,a.prototype.delete=t,a.prototype.get=r,a.prototype.has=i,a.prototype.set=s,Ao=a,Ao}var bo,Qh;function kT(){if(Qh)return bo;Qh=1;var n="__lodash_hash_undefined__";function e(t){return this.__data__.set(t,n),this}return bo=e,bo}var Ro,Jh;function DT(){if(Jh)return Ro;Jh=1;function n(e){return this.__data__.has(e)}return Ro=n,Ro}var So,Yh;function VT(){if(Yh)return So;Yh=1;var n=fg(),e=kT(),t=DT();function r(i){var s=-1,a=i==null?0:i.length;for(this.__data__=new n;++s<a;)this.add(i[s])}return r.prototype.add=r.prototype.push=e,r.prototype.has=t,So=r,So}var Co,Xh;function NT(){if(Xh)return Co;Xh=1;function n(e,t){for(var r=-1,i=e==null?0:e.length;++r<i;)if(t(e[r],r,e))return!0;return!1}return Co=n,Co}var Po,Zh;function OT(){if(Zh)return Po;Zh=1;function n(e,t){return e.has(t)}return Po=n,Po}var ko,ed;function pg(){if(ed)return ko;ed=1;var n=VT(),e=NT(),t=OT(),r=1,i=2;function s(a,u,l,g,w,A){var R=l&r,D=a.length,P=u.length;if(D!=P&&!(R&&P>D))return!1;var O=A.get(a),b=A.get(u);if(O&&b)return O==u&&b==a;var N=-1,V=!0,M=l&i?new n:void 0;for(A.set(a,u),A.set(u,a);++N<D;){var L=a[N],$=u[N];if(g)var S=R?g($,L,N,u,a,A):g(L,$,N,a,u,A);if(S!==void 0){if(S)continue;V=!1;break}if(M){if(!e(u,function(_,h){if(!t(M,h)&&(L===_||w(L,_,l,g,A)))return M.push(h)})){V=!1;break}}else if(!(L===$||w(L,$,l,g,A))){V=!1;break}}return A.delete(a),A.delete(u),V}return ko=s,ko}var Do,td;function LT(){if(td)return Do;td=1;var n=At(),e=n.Uint8Array;return Do=e,Do}var Vo,nd;function xT(){if(nd)return Vo;nd=1;function n(e){var t=-1,r=Array(e.size);return e.forEach(function(i,s){r[++t]=[s,i]}),r}return Vo=n,Vo}var No,rd;function MT(){if(rd)return No;rd=1;function n(e){var t=-1,r=Array(e.size);return e.forEach(function(i){r[++t]=i}),r}return No=n,No}var Oo,id;function UT(){if(id)return Oo;id=1;var n=Lu(),e=LT(),t=ug(),r=pg(),i=xT(),s=MT(),a=1,u=2,l="[object Boolean]",g="[object Date]",w="[object Error]",A="[object Map]",R="[object Number]",D="[object RegExp]",P="[object Set]",O="[object String]",b="[object Symbol]",N="[object ArrayBuffer]",V="[object DataView]",M=n?n.prototype:void 0,L=M?M.valueOf:void 0;function $(S,_,h,p,f,m,E){switch(h){case V:if(S.byteLength!=_.byteLength||S.byteOffset!=_.byteOffset)return!1;S=S.buffer,_=_.buffer;case N:return!(S.byteLength!=_.byteLength||!m(new e(S),new e(_)));case l:case g:case R:return t(+S,+_);case w:return S.name==_.name&&S.message==_.message;case D:case O:return S==_+"";case A:var I=i;case P:var W=p&a;if(I||(I=s),S.size!=_.size&&!W)return!1;var Q=E.get(S);if(Q)return Q==_;p|=u,E.set(S,_);var K=r(I(S),I(_),p,f,m,E);return E.delete(S),K;case b:if(L)return L.call(S)==L.call(_)}return!1}return Oo=$,Oo}var Lo,sd;function FT(){if(sd)return Lo;sd=1;function n(e,t){for(var r=-1,i=t.length,s=e.length;++r<i;)e[s+r]=t[r];return e}return Lo=n,Lo}var xo,od;function Mu(){if(od)return xo;od=1;var n=Array.isArray;return xo=n,xo}var Mo,ad;function BT(){if(ad)return Mo;ad=1;var n=FT(),e=Mu();function t(r,i,s){var a=i(r);return e(r)?a:n(a,s(r))}return Mo=t,Mo}var Uo,ud;function qT(){if(ud)return Uo;ud=1;function n(e,t){for(var r=-1,i=e==null?0:e.length,s=0,a=[];++r<i;){var u=e[r];t(u,r,e)&&(a[s++]=u)}return a}return Uo=n,Uo}var Fo,cd;function jT(){if(cd)return Fo;cd=1;function n(){return[]}return Fo=n,Fo}var Bo,ld;function $T(){if(ld)return Bo;ld=1;var n=qT(),e=jT(),t=Object.prototype,r=t.propertyIsEnumerable,i=Object.getOwnPropertySymbols,s=i?function(a){return a==null?[]:(a=Object(a),n(i(a),function(u){return r.call(a,u)}))}:e;return Bo=s,Bo}var qo,hd;function zT(){if(hd)return qo;hd=1;function n(e,t){for(var r=-1,i=Array(e);++r<e;)i[r]=t(r);return i}return qo=n,qo}var jo,dd;function os(){if(dd)return jo;dd=1;function n(e){return e!=null&&typeof e=="object"}return jo=n,jo}var $o,fd;function HT(){if(fd)return $o;fd=1;var n=rs(),e=os(),t="[object Arguments]";function r(i){return e(i)&&n(i)==t}return $o=r,$o}var zo,pd;function GT(){if(pd)return zo;pd=1;var n=HT(),e=os(),t=Object.prototype,r=t.hasOwnProperty,i=t.propertyIsEnumerable,s=n(function(){return arguments}())?n:function(a){return e(a)&&r.call(a,"callee")&&!i.call(a,"callee")};return zo=s,zo}var or={exports:{}},Ho,gd;function KT(){if(gd)return Ho;gd=1;function n(){return!1}return Ho=n,Ho}or.exports;var md;function gg(){return md||(md=1,function(n,e){var t=At(),r=KT(),i=e&&!e.nodeType&&e,s=i&&!0&&n&&!n.nodeType&&n,a=s&&s.exports===i,u=a?t.Buffer:void 0,l=u?u.isBuffer:void 0,g=l||r;n.exports=g}(or,or.exports)),or.exports}var Go,_d;function WT(){if(_d)return Go;_d=1;var n=9007199254740991,e=/^(?:0|[1-9]\d*)$/;function t(r,i){var s=typeof r;return i=i??n,!!i&&(s=="number"||s!="symbol"&&e.test(r))&&r>-1&&r%1==0&&r<i}return Go=t,Go}var Ko,yd;function mg(){if(yd)return Ko;yd=1;var n=9007199254740991;function e(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=n}return Ko=e,Ko}var Wo,vd;function QT(){if(vd)return Wo;vd=1;var n=rs(),e=mg(),t=os(),r="[object Arguments]",i="[object Array]",s="[object Boolean]",a="[object Date]",u="[object Error]",l="[object Function]",g="[object Map]",w="[object Number]",A="[object Object]",R="[object RegExp]",D="[object Set]",P="[object String]",O="[object WeakMap]",b="[object ArrayBuffer]",N="[object DataView]",V="[object Float32Array]",M="[object Float64Array]",L="[object Int8Array]",$="[object Int16Array]",S="[object Int32Array]",_="[object Uint8Array]",h="[object Uint8ClampedArray]",p="[object Uint16Array]",f="[object Uint32Array]",m={};m[V]=m[M]=m[L]=m[$]=m[S]=m[_]=m[h]=m[p]=m[f]=!0,m[r]=m[i]=m[b]=m[s]=m[N]=m[a]=m[u]=m[l]=m[g]=m[w]=m[A]=m[R]=m[D]=m[P]=m[O]=!1;function E(I){return t(I)&&e(I.length)&&!!m[n(I)]}return Wo=E,Wo}var Qo,Ed;function JT(){if(Ed)return Qo;Ed=1;function n(e){return function(t){return e(t)}}return Qo=n,Qo}var ar={exports:{}};ar.exports;var wd;function YT(){return wd||(wd=1,function(n,e){var t=cg(),r=e&&!e.nodeType&&e,i=r&&!0&&n&&!n.nodeType&&n,s=i&&i.exports===r,a=s&&t.process,u=function(){try{var l=i&&i.require&&i.require("util").types;return l||a&&a.binding&&a.binding("util")}catch{}}();n.exports=u}(ar,ar.exports)),ar.exports}var Jo,Id;function _g(){if(Id)return Jo;Id=1;var n=QT(),e=JT(),t=YT(),r=t&&t.isTypedArray,i=r?e(r):n;return Jo=i,Jo}var Yo,Td;function XT(){if(Td)return Yo;Td=1;var n=zT(),e=GT(),t=Mu(),r=gg(),i=WT(),s=_g(),a=Object.prototype,u=a.hasOwnProperty;function l(g,w){var A=t(g),R=!A&&e(g),D=!A&&!R&&r(g),P=!A&&!R&&!D&&s(g),O=A||R||D||P,b=O?n(g.length,String):[],N=b.length;for(var V in g)(w||u.call(g,V))&&!(O&&(V=="length"||D&&(V=="offset"||V=="parent")||P&&(V=="buffer"||V=="byteLength"||V=="byteOffset")||i(V,N)))&&b.push(V);return b}return Yo=l,Yo}var Xo,Ad;function ZT(){if(Ad)return Xo;Ad=1;var n=Object.prototype;function e(t){var r=t&&t.constructor,i=typeof r=="function"&&r.prototype||n;return t===i}return Xo=e,Xo}var Zo,bd;function eA(){if(bd)return Zo;bd=1;function n(e,t){return function(r){return e(t(r))}}return Zo=n,Zo}var ea,Rd;function tA(){if(Rd)return ea;Rd=1;var n=eA(),e=n(Object.keys,Object);return ea=e,ea}var ta,Sd;function nA(){if(Sd)return ta;Sd=1;var n=ZT(),e=tA(),t=Object.prototype,r=t.hasOwnProperty;function i(s){if(!n(s))return e(s);var a=[];for(var u in Object(s))r.call(s,u)&&u!="constructor"&&a.push(u);return a}return ta=i,ta}var na,Cd;function rA(){if(Cd)return na;Cd=1;var n=hg(),e=mg();function t(r){return r!=null&&e(r.length)&&!n(r)}return na=t,na}var ra,Pd;function iA(){if(Pd)return ra;Pd=1;var n=XT(),e=nA(),t=rA();function r(i){return t(i)?n(i):e(i)}return ra=r,ra}var ia,kd;function sA(){if(kd)return ia;kd=1;var n=BT(),e=$T(),t=iA();function r(i){return n(i,t,e)}return ia=r,ia}var sa,Dd;function oA(){if(Dd)return sa;Dd=1;var n=sA(),e=1,t=Object.prototype,r=t.hasOwnProperty;function i(s,a,u,l,g,w){var A=u&e,R=n(s),D=R.length,P=n(a),O=P.length;if(D!=O&&!A)return!1;for(var b=D;b--;){var N=R[b];if(!(A?N in a:r.call(a,N)))return!1}var V=w.get(s),M=w.get(a);if(V&&M)return V==a&&M==s;var L=!0;w.set(s,a),w.set(a,s);for(var $=A;++b<D;){N=R[b];var S=s[N],_=a[N];if(l)var h=A?l(_,S,N,a,s,w):l(S,_,N,s,a,w);if(!(h===void 0?S===_||g(S,_,u,l,w):h)){L=!1;break}$||($=N=="constructor")}if(L&&!$){var p=s.constructor,f=a.constructor;p!=f&&"constructor"in s&&"constructor"in a&&!(typeof p=="function"&&p instanceof p&&typeof f=="function"&&f instanceof f)&&(L=!1)}return w.delete(s),w.delete(a),L}return sa=i,sa}var oa,Vd;function aA(){if(Vd)return oa;Vd=1;var n=jn(),e=At(),t=n(e,"DataView");return oa=t,oa}var aa,Nd;function uA(){if(Nd)return aa;Nd=1;var n=jn(),e=At(),t=n(e,"Promise");return aa=t,aa}var ua,Od;function cA(){if(Od)return ua;Od=1;var n=jn(),e=At(),t=n(e,"Set");return ua=t,ua}var ca,Ld;function lA(){if(Ld)return ca;Ld=1;var n=jn(),e=At(),t=n(e,"WeakMap");return ca=t,ca}var la,xd;function hA(){if(xd)return la;xd=1;var n=aA(),e=xu(),t=uA(),r=cA(),i=lA(),s=rs(),a=dg(),u="[object Map]",l="[object Object]",g="[object Promise]",w="[object Set]",A="[object WeakMap]",R="[object DataView]",D=a(n),P=a(e),O=a(t),b=a(r),N=a(i),V=s;return(n&&V(new n(new ArrayBuffer(1)))!=R||e&&V(new e)!=u||t&&V(t.resolve())!=g||r&&V(new r)!=w||i&&V(new i)!=A)&&(V=function(M){var L=s(M),$=L==l?M.constructor:void 0,S=$?a($):"";if(S)switch(S){case D:return R;case P:return u;case O:return g;case b:return w;case N:return A}return L}),la=V,la}var ha,Md;function dA(){if(Md)return ha;Md=1;var n=PT(),e=pg(),t=UT(),r=oA(),i=hA(),s=Mu(),a=gg(),u=_g(),l=1,g="[object Arguments]",w="[object Array]",A="[object Object]",R=Object.prototype,D=R.hasOwnProperty;function P(O,b,N,V,M,L){var $=s(O),S=s(b),_=$?w:i(O),h=S?w:i(b);_=_==g?A:_,h=h==g?A:h;var p=_==A,f=h==A,m=_==h;if(m&&a(O)){if(!a(b))return!1;$=!0,p=!1}if(m&&!p)return L||(L=new n),$||u(O)?e(O,b,N,V,M,L):t(O,b,_,N,V,M,L);if(!(N&l)){var E=p&&D.call(O,"__wrapped__"),I=f&&D.call(b,"__wrapped__");if(E||I){var W=E?O.value():O,Q=I?b.value():b;return L||(L=new n),M(W,Q,N,V,L)}}return m?(L||(L=new n),r(O,b,N,V,M,L)):!1}return ha=P,ha}var da,Ud;function fA(){if(Ud)return da;Ud=1;var n=dA(),e=os();function t(r,i,s,a,u){return r===i?!0:r==null||i==null||!e(r)&&!e(i)?r!==r&&i!==i:n(r,i,s,a,t,u)}return da=t,da}var fa,Fd;function pA(){if(Fd)return fa;Fd=1;var n=fA();function e(t,r){return n(t,r)}return fa=e,fa}var gA=pA();const mA=eT(gA);function ii(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var pa={exports:{}},Bd;function _A(){return Bd||(Bd=1,function(n,e){(function(t){n.exports=t()})(function(){return function t(r,i,s){function a(g,w){if(!i[g]){if(!r[g]){var A=typeof ii=="function"&&ii;if(!w&&A)return A(g,!0);if(u)return u(g,!0);throw new Error("Cannot find module '"+g+"'")}w=i[g]={exports:{}},r[g][0].call(w.exports,function(R){var D=r[g][1][R];return a(D||R)},w,w.exports,t,r,i,s)}return i[g].exports}for(var u=typeof ii=="function"&&ii,l=0;l<s.length;l++)a(s[l]);return a}({1:[function(t,r,i){(function(s,a,u,l,g,w,A,R,D){var P=t("crypto");function O(S,_){_=V(S,_);var h;return(h=_.algorithm!=="passthrough"?P.createHash(_.algorithm):new $).write===void 0&&(h.write=h.update,h.end=h.update),L(_,h).dispatch(S),h.update||h.end(""),h.digest?h.digest(_.encoding==="buffer"?void 0:_.encoding):(S=h.read(),_.encoding!=="buffer"?S.toString(_.encoding):S)}(i=r.exports=O).sha1=function(S){return O(S)},i.keys=function(S){return O(S,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},i.MD5=function(S){return O(S,{algorithm:"md5",encoding:"hex"})},i.keysMD5=function(S){return O(S,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var b=P.getHashes?P.getHashes().slice():["sha1","md5"],N=(b.push("passthrough"),["buffer","hex","binary","base64"]);function V(S,_){var h={};if(h.algorithm=(_=_||{}).algorithm||"sha1",h.encoding=_.encoding||"hex",h.excludeValues=!!_.excludeValues,h.algorithm=h.algorithm.toLowerCase(),h.encoding=h.encoding.toLowerCase(),h.ignoreUnknown=_.ignoreUnknown===!0,h.respectType=_.respectType!==!1,h.respectFunctionNames=_.respectFunctionNames!==!1,h.respectFunctionProperties=_.respectFunctionProperties!==!1,h.unorderedArrays=_.unorderedArrays===!0,h.unorderedSets=_.unorderedSets!==!1,h.unorderedObjects=_.unorderedObjects!==!1,h.replacer=_.replacer||void 0,h.excludeKeys=_.excludeKeys||void 0,S===void 0)throw new Error("Object argument required.");for(var p=0;p<b.length;++p)b[p].toLowerCase()===h.algorithm.toLowerCase()&&(h.algorithm=b[p]);if(b.indexOf(h.algorithm)===-1)throw new Error('Algorithm "'+h.algorithm+'"  not supported. supported values: '+b.join(", "));if(N.indexOf(h.encoding)===-1&&h.algorithm!=="passthrough")throw new Error('Encoding "'+h.encoding+'"  not supported. supported values: '+N.join(", "));return h}function M(S){if(typeof S=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(S))!=null}function L(S,_,h){h=h||[];function p(f){return _.update?_.update(f,"utf8"):_.write(f,"utf8")}return{dispatch:function(f){return this["_"+((f=S.replacer?S.replacer(f):f)===null?"null":typeof f)](f)},_object:function(f){var m,E=Object.prototype.toString.call(f),I=/\[object (.*)\]/i.exec(E);if(I=(I=I?I[1]:"unknown:["+E+"]").toLowerCase(),0<=(E=h.indexOf(f)))return this.dispatch("[CIRCULAR:"+E+"]");if(h.push(f),u!==void 0&&u.isBuffer&&u.isBuffer(f))return p("buffer:"),p(f);if(I==="object"||I==="function"||I==="asyncfunction")return E=Object.keys(f),S.unorderedObjects&&(E=E.sort()),S.respectType===!1||M(f)||E.splice(0,0,"prototype","__proto__","constructor"),S.excludeKeys&&(E=E.filter(function(W){return!S.excludeKeys(W)})),p("object:"+E.length+":"),m=this,E.forEach(function(W){m.dispatch(W),p(":"),S.excludeValues||m.dispatch(f[W]),p(",")});if(!this["_"+I]){if(S.ignoreUnknown)return p("["+I+"]");throw new Error('Unknown object type "'+I+'"')}this["_"+I](f)},_array:function(f,W){W=W!==void 0?W:S.unorderedArrays!==!1;var E=this;if(p("array:"+f.length+":"),!W||f.length<=1)return f.forEach(function(Q){return E.dispatch(Q)});var I=[],W=f.map(function(Q){var K=new $,ue=h.slice();return L(S,K,ue).dispatch(Q),I=I.concat(ue.slice(h.length)),K.read().toString()});return h=h.concat(I),W.sort(),this._array(W,!1)},_date:function(f){return p("date:"+f.toJSON())},_symbol:function(f){return p("symbol:"+f.toString())},_error:function(f){return p("error:"+f.toString())},_boolean:function(f){return p("bool:"+f.toString())},_string:function(f){p("string:"+f.length+":"),p(f.toString())},_function:function(f){p("fn:"),M(f)?this.dispatch("[native]"):this.dispatch(f.toString()),S.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(f.name)),S.respectFunctionProperties&&this._object(f)},_number:function(f){return p("number:"+f.toString())},_xml:function(f){return p("xml:"+f.toString())},_null:function(){return p("Null")},_undefined:function(){return p("Undefined")},_regexp:function(f){return p("regex:"+f.toString())},_uint8array:function(f){return p("uint8array:"),this.dispatch(Array.prototype.slice.call(f))},_uint8clampedarray:function(f){return p("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(f))},_int8array:function(f){return p("int8array:"),this.dispatch(Array.prototype.slice.call(f))},_uint16array:function(f){return p("uint16array:"),this.dispatch(Array.prototype.slice.call(f))},_int16array:function(f){return p("int16array:"),this.dispatch(Array.prototype.slice.call(f))},_uint32array:function(f){return p("uint32array:"),this.dispatch(Array.prototype.slice.call(f))},_int32array:function(f){return p("int32array:"),this.dispatch(Array.prototype.slice.call(f))},_float32array:function(f){return p("float32array:"),this.dispatch(Array.prototype.slice.call(f))},_float64array:function(f){return p("float64array:"),this.dispatch(Array.prototype.slice.call(f))},_arraybuffer:function(f){return p("arraybuffer:"),this.dispatch(new Uint8Array(f))},_url:function(f){return p("url:"+f.toString())},_map:function(f){return p("map:"),f=Array.from(f),this._array(f,S.unorderedSets!==!1)},_set:function(f){return p("set:"),f=Array.from(f),this._array(f,S.unorderedSets!==!1)},_file:function(f){return p("file:"),this.dispatch([f.name,f.size,f.type,f.lastModfied])},_blob:function(){if(S.ignoreUnknown)return p("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return p("domwindow")},_bigint:function(f){return p("bigint:"+f.toString())},_process:function(){return p("process")},_timer:function(){return p("timer")},_pipe:function(){return p("pipe")},_tcp:function(){return p("tcp")},_udp:function(){return p("udp")},_tty:function(){return p("tty")},_statwatcher:function(){return p("statwatcher")},_securecontext:function(){return p("securecontext")},_connection:function(){return p("connection")},_zlib:function(){return p("zlib")},_context:function(){return p("context")},_nodescript:function(){return p("nodescript")},_httpparser:function(){return p("httpparser")},_dataview:function(){return p("dataview")},_signal:function(){return p("signal")},_fsevent:function(){return p("fsevent")},_tlswrap:function(){return p("tlswrap")}}}function $(){return{buf:"",write:function(S){this.buf+=S},end:function(S){this.buf+=S},read:function(){return this.buf}}}i.writeToStream=function(S,_,h){return h===void 0&&(h=_,_={}),L(_=V(S,_),h).dispatch(S)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,r,i){(function(s,a,u,l,g,w,A,R,D){(function(P){var O=typeof Uint8Array<"u"?Uint8Array:Array,b=43,N=47,V=48,M=97,L=65,$=45,S=95;function _(h){return h=h.charCodeAt(0),h===b||h===$?62:h===N||h===S?63:h<V?-1:h<V+10?h-V+26+26:h<L+26?h-L:h<M+26?h-M+26:void 0}P.toByteArray=function(h){var p,f;if(0<h.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var m=h.length,m=h.charAt(m-2)==="="?2:h.charAt(m-1)==="="?1:0,E=new O(3*h.length/4-m),I=0<m?h.length-4:h.length,W=0;function Q(K){E[W++]=K}for(p=0;p<I;p+=4,0)Q((16711680&(f=_(h.charAt(p))<<18|_(h.charAt(p+1))<<12|_(h.charAt(p+2))<<6|_(h.charAt(p+3))))>>16),Q((65280&f)>>8),Q(255&f);return m==2?Q(255&(f=_(h.charAt(p))<<2|_(h.charAt(p+1))>>4)):m==1&&(Q((f=_(h.charAt(p))<<10|_(h.charAt(p+1))<<4|_(h.charAt(p+2))>>2)>>8&255),Q(255&f)),E},P.fromByteArray=function(h){var p,f,m,E,I=h.length%3,W="";function Q(K){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(K)}for(p=0,m=h.length-I;p<m;p+=3)f=(h[p]<<16)+(h[p+1]<<8)+h[p+2],W+=Q((E=f)>>18&63)+Q(E>>12&63)+Q(E>>6&63)+Q(63&E);switch(I){case 1:W=(W+=Q((f=h[h.length-1])>>2))+Q(f<<4&63)+"==";break;case 2:W=(W=(W+=Q((f=(h[h.length-2]<<8)+h[h.length-1])>>10))+Q(f>>4&63))+Q(f<<2&63)+"="}return W}})(i===void 0?this.base64js={}:i)}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,r,i){(function(s,a,b,l,g,w,A,R,D){var P=t("base64-js"),O=t("ieee754");function b(v,T,C){if(!(this instanceof b))return new b(v,T,C);var B,F,z,ne,fe=typeof v;if(T==="base64"&&fe=="string")for(v=(ne=v).trim?ne.trim():ne.replace(/^\s+|\s+$/g,"");v.length%4!=0;)v+="=";if(fe=="number")B=_e(v);else if(fe=="string")B=b.byteLength(v,T);else{if(fe!="object")throw new Error("First argument needs to be a number, array or string.");B=_e(v.length)}if(b._useTypedArrays?F=b._augment(new Uint8Array(B)):((F=this).length=B,F._isBuffer=!0),b._useTypedArrays&&typeof v.byteLength=="number")F._set(v);else if(de(ne=v)||b.isBuffer(ne)||ne&&typeof ne=="object"&&typeof ne.length=="number")for(z=0;z<B;z++)b.isBuffer(v)?F[z]=v.readUInt8(z):F[z]=v[z];else if(fe=="string")F.write(v,0,T);else if(fe=="number"&&!b._useTypedArrays&&!C)for(z=0;z<B;z++)F[z]=0;return F}function N(v,T,C,B){return b._charsWritten=we(function(F){for(var z=[],ne=0;ne<F.length;ne++)z.push(255&F.charCodeAt(ne));return z}(T),v,C,B)}function V(v,T,C,B){return b._charsWritten=we(function(F){for(var z,ne,fe=[],Ae=0;Ae<F.length;Ae++)ne=F.charCodeAt(Ae),z=ne>>8,ne=ne%256,fe.push(ne),fe.push(z);return fe}(T),v,C,B)}function M(v,T,C){var B="";C=Math.min(v.length,C);for(var F=T;F<C;F++)B+=String.fromCharCode(v[F]);return B}function L(v,T,C,z){z||(H(typeof C=="boolean","missing or invalid endian"),H(T!=null,"missing offset"),H(T+1<v.length,"Trying to read beyond buffer length"));var F,z=v.length;if(!(z<=T))return C?(F=v[T],T+1<z&&(F|=v[T+1]<<8)):(F=v[T]<<8,T+1<z&&(F|=v[T+1])),F}function $(v,T,C,z){z||(H(typeof C=="boolean","missing or invalid endian"),H(T!=null,"missing offset"),H(T+3<v.length,"Trying to read beyond buffer length"));var F,z=v.length;if(!(z<=T))return C?(T+2<z&&(F=v[T+2]<<16),T+1<z&&(F|=v[T+1]<<8),F|=v[T],T+3<z&&(F+=v[T+3]<<24>>>0)):(T+1<z&&(F=v[T+1]<<16),T+2<z&&(F|=v[T+2]<<8),T+3<z&&(F|=v[T+3]),F+=v[T]<<24>>>0),F}function S(v,T,C,B){if(B||(H(typeof C=="boolean","missing or invalid endian"),H(T!=null,"missing offset"),H(T+1<v.length,"Trying to read beyond buffer length")),!(v.length<=T))return B=L(v,T,C,!0),32768&B?-1*(65535-B+1):B}function _(v,T,C,B){if(B||(H(typeof C=="boolean","missing or invalid endian"),H(T!=null,"missing offset"),H(T+3<v.length,"Trying to read beyond buffer length")),!(v.length<=T))return B=$(v,T,C,!0),2147483648&B?-1*(4294967295-B+1):B}function h(v,T,C,B){return B||(H(typeof C=="boolean","missing or invalid endian"),H(T+3<v.length,"Trying to read beyond buffer length")),O.read(v,T,C,23,4)}function p(v,T,C,B){return B||(H(typeof C=="boolean","missing or invalid endian"),H(T+7<v.length,"Trying to read beyond buffer length")),O.read(v,T,C,52,8)}function f(v,T,C,B,F){if(F||(H(T!=null,"missing value"),H(typeof B=="boolean","missing or invalid endian"),H(C!=null,"missing offset"),H(C+1<v.length,"trying to write beyond buffer length"),dt(T,65535)),F=v.length,!(F<=C))for(var z=0,ne=Math.min(F-C,2);z<ne;z++)v[C+z]=(T&255<<8*(B?z:1-z))>>>8*(B?z:1-z)}function m(v,T,C,B,F){if(F||(H(T!=null,"missing value"),H(typeof B=="boolean","missing or invalid endian"),H(C!=null,"missing offset"),H(C+3<v.length,"trying to write beyond buffer length"),dt(T,4294967295)),F=v.length,!(F<=C))for(var z=0,ne=Math.min(F-C,4);z<ne;z++)v[C+z]=T>>>8*(B?z:3-z)&255}function E(v,T,C,B,F){F||(H(T!=null,"missing value"),H(typeof B=="boolean","missing or invalid endian"),H(C!=null,"missing offset"),H(C+1<v.length,"Trying to write beyond buffer length"),$n(T,32767,-32768)),v.length<=C||f(v,0<=T?T:65535+T+1,C,B,F)}function I(v,T,C,B,F){F||(H(T!=null,"missing value"),H(typeof B=="boolean","missing or invalid endian"),H(C!=null,"missing offset"),H(C+3<v.length,"Trying to write beyond buffer length"),$n(T,2147483647,-2147483648)),v.length<=C||m(v,0<=T?T:4294967295+T+1,C,B,F)}function W(v,T,C,B,F){F||(H(T!=null,"missing value"),H(typeof B=="boolean","missing or invalid endian"),H(C!=null,"missing offset"),H(C+3<v.length,"Trying to write beyond buffer length"),Gt(T,34028234663852886e22,-34028234663852886e22)),v.length<=C||O.write(v,T,C,B,23,4)}function Q(v,T,C,B,F){F||(H(T!=null,"missing value"),H(typeof B=="boolean","missing or invalid endian"),H(C!=null,"missing offset"),H(C+7<v.length,"Trying to write beyond buffer length"),Gt(T,17976931348623157e292,-17976931348623157e292)),v.length<=C||O.write(v,T,C,B,52,8)}i.Buffer=b,i.SlowBuffer=b,i.INSPECT_MAX_BYTES=50,b.poolSize=8192,b._useTypedArrays=function(){try{var v=new ArrayBuffer(0),T=new Uint8Array(v);return T.foo=function(){return 42},T.foo()===42&&typeof T.subarray=="function"}catch{return!1}}(),b.isEncoding=function(v){switch(String(v).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},b.isBuffer=function(v){return!(v==null||!v._isBuffer)},b.byteLength=function(v,T){var C;switch(v+="",T||"utf8"){case"hex":C=v.length/2;break;case"utf8":case"utf-8":C=Ye(v).length;break;case"ascii":case"binary":case"raw":C=v.length;break;case"base64":C=Xe(v).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":C=2*v.length;break;default:throw new Error("Unknown encoding")}return C},b.concat=function(v,T){if(H(de(v),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),v.length===0)return new b(0);if(v.length===1)return v[0];if(typeof T!="number")for(F=T=0;F<v.length;F++)T+=v[F].length;for(var C=new b(T),B=0,F=0;F<v.length;F++){var z=v[F];z.copy(C,B),B+=z.length}return C},b.prototype.write=function(v,T,C,B){isFinite(T)?isFinite(C)||(B=C,C=void 0):(Ae=B,B=T,T=C,C=Ae),T=Number(T)||0;var F,z,ne,fe,Ae=this.length-T;switch((!C||Ae<(C=Number(C)))&&(C=Ae),B=String(B||"utf8").toLowerCase()){case"hex":F=function(Ke,De,Pe,Ie){Pe=Number(Pe)||0;var ye=Ke.length-Pe;(!Ie||ye<(Ie=Number(Ie)))&&(Ie=ye),H((ye=De.length)%2==0,"Invalid hex string"),ye/2<Ie&&(Ie=ye/2);for(var nt=0;nt<Ie;nt++){var dn=parseInt(De.substr(2*nt,2),16);H(!isNaN(dn),"Invalid hex string"),Ke[Pe+nt]=dn}return b._charsWritten=2*nt,nt}(this,v,T,C);break;case"utf8":case"utf-8":z=this,ne=T,fe=C,F=b._charsWritten=we(Ye(v),z,ne,fe);break;case"ascii":case"binary":F=N(this,v,T,C);break;case"base64":z=this,ne=T,fe=C,F=b._charsWritten=we(Xe(v),z,ne,fe);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":F=V(this,v,T,C);break;default:throw new Error("Unknown encoding")}return F},b.prototype.toString=function(v,T,C){var B,F,z,ne,fe=this;if(v=String(v||"utf8").toLowerCase(),T=Number(T)||0,(C=C!==void 0?Number(C):fe.length)===T)return"";switch(v){case"hex":B=function(Ae,Ke,De){var Pe=Ae.length;(!Ke||Ke<0)&&(Ke=0),(!De||De<0||Pe<De)&&(De=Pe);for(var Ie="",ye=Ke;ye<De;ye++)Ie+=le(Ae[ye]);return Ie}(fe,T,C);break;case"utf8":case"utf-8":B=function(Ae,Ke,De){var Pe="",Ie="";De=Math.min(Ae.length,De);for(var ye=Ke;ye<De;ye++)Ae[ye]<=127?(Pe+=Or(Ie)+String.fromCharCode(Ae[ye]),Ie=""):Ie+="%"+Ae[ye].toString(16);return Pe+Or(Ie)}(fe,T,C);break;case"ascii":case"binary":B=M(fe,T,C);break;case"base64":F=fe,ne=C,B=(z=T)===0&&ne===F.length?P.fromByteArray(F):P.fromByteArray(F.slice(z,ne));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":B=function(Ae,Ke,De){for(var Pe=Ae.slice(Ke,De),Ie="",ye=0;ye<Pe.length;ye+=2)Ie+=String.fromCharCode(Pe[ye]+256*Pe[ye+1]);return Ie}(fe,T,C);break;default:throw new Error("Unknown encoding")}return B},b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},b.prototype.copy=function(v,T,C,B){if(T=T||0,(B=B||B===0?B:this.length)!==(C=C||0)&&v.length!==0&&this.length!==0){H(C<=B,"sourceEnd < sourceStart"),H(0<=T&&T<v.length,"targetStart out of bounds"),H(0<=C&&C<this.length,"sourceStart out of bounds"),H(0<=B&&B<=this.length,"sourceEnd out of bounds"),B>this.length&&(B=this.length);var F=(B=v.length-T<B-C?v.length-T+C:B)-C;if(F<100||!b._useTypedArrays)for(var z=0;z<F;z++)v[z+T]=this[z+C];else v._set(this.subarray(C,C+F),T)}},b.prototype.slice=function(v,T){var C=this.length;if(v=ue(v,C,0),T=ue(T,C,C),b._useTypedArrays)return b._augment(this.subarray(v,T));for(var B=T-v,F=new b(B,void 0,!0),z=0;z<B;z++)F[z]=this[z+v];return F},b.prototype.get=function(v){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(v)},b.prototype.set=function(v,T){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(v,T)},b.prototype.readUInt8=function(v,T){if(T||(H(v!=null,"missing offset"),H(v<this.length,"Trying to read beyond buffer length")),!(v>=this.length))return this[v]},b.prototype.readUInt16LE=function(v,T){return L(this,v,!0,T)},b.prototype.readUInt16BE=function(v,T){return L(this,v,!1,T)},b.prototype.readUInt32LE=function(v,T){return $(this,v,!0,T)},b.prototype.readUInt32BE=function(v,T){return $(this,v,!1,T)},b.prototype.readInt8=function(v,T){if(T||(H(v!=null,"missing offset"),H(v<this.length,"Trying to read beyond buffer length")),!(v>=this.length))return 128&this[v]?-1*(255-this[v]+1):this[v]},b.prototype.readInt16LE=function(v,T){return S(this,v,!0,T)},b.prototype.readInt16BE=function(v,T){return S(this,v,!1,T)},b.prototype.readInt32LE=function(v,T){return _(this,v,!0,T)},b.prototype.readInt32BE=function(v,T){return _(this,v,!1,T)},b.prototype.readFloatLE=function(v,T){return h(this,v,!0,T)},b.prototype.readFloatBE=function(v,T){return h(this,v,!1,T)},b.prototype.readDoubleLE=function(v,T){return p(this,v,!0,T)},b.prototype.readDoubleBE=function(v,T){return p(this,v,!1,T)},b.prototype.writeUInt8=function(v,T,C){C||(H(v!=null,"missing value"),H(T!=null,"missing offset"),H(T<this.length,"trying to write beyond buffer length"),dt(v,255)),T>=this.length||(this[T]=v)},b.prototype.writeUInt16LE=function(v,T,C){f(this,v,T,!0,C)},b.prototype.writeUInt16BE=function(v,T,C){f(this,v,T,!1,C)},b.prototype.writeUInt32LE=function(v,T,C){m(this,v,T,!0,C)},b.prototype.writeUInt32BE=function(v,T,C){m(this,v,T,!1,C)},b.prototype.writeInt8=function(v,T,C){C||(H(v!=null,"missing value"),H(T!=null,"missing offset"),H(T<this.length,"Trying to write beyond buffer length"),$n(v,127,-128)),T>=this.length||(0<=v?this.writeUInt8(v,T,C):this.writeUInt8(255+v+1,T,C))},b.prototype.writeInt16LE=function(v,T,C){E(this,v,T,!0,C)},b.prototype.writeInt16BE=function(v,T,C){E(this,v,T,!1,C)},b.prototype.writeInt32LE=function(v,T,C){I(this,v,T,!0,C)},b.prototype.writeInt32BE=function(v,T,C){I(this,v,T,!1,C)},b.prototype.writeFloatLE=function(v,T,C){W(this,v,T,!0,C)},b.prototype.writeFloatBE=function(v,T,C){W(this,v,T,!1,C)},b.prototype.writeDoubleLE=function(v,T,C){Q(this,v,T,!0,C)},b.prototype.writeDoubleBE=function(v,T,C){Q(this,v,T,!1,C)},b.prototype.fill=function(v,T,C){if(T=T||0,C=C||this.length,H(typeof(v=typeof(v=v||0)=="string"?v.charCodeAt(0):v)=="number"&&!isNaN(v),"value is not a number"),H(T<=C,"end < start"),C!==T&&this.length!==0){H(0<=T&&T<this.length,"start out of bounds"),H(0<=C&&C<=this.length,"end out of bounds");for(var B=T;B<C;B++)this[B]=v}},b.prototype.inspect=function(){for(var v=[],T=this.length,C=0;C<T;C++)if(v[C]=le(this[C]),C===i.INSPECT_MAX_BYTES){v[C+1]="...";break}return"<Buffer "+v.join(" ")+">"},b.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(b._useTypedArrays)return new b(this).buffer;for(var v=new Uint8Array(this.length),T=0,C=v.length;T<C;T+=1)v[T]=this[T];return v.buffer};var K=b.prototype;function ue(v,T,C){return typeof v!="number"?C:T<=(v=~~v)?T:0<=v||0<=(v+=T)?v:0}function _e(v){return(v=~~Math.ceil(+v))<0?0:v}function de(v){return(Array.isArray||function(T){return Object.prototype.toString.call(T)==="[object Array]"})(v)}function le(v){return v<16?"0"+v.toString(16):v.toString(16)}function Ye(v){for(var T=[],C=0;C<v.length;C++){var B=v.charCodeAt(C);if(B<=127)T.push(v.charCodeAt(C));else for(var F=C,z=(55296<=B&&B<=57343&&C++,encodeURIComponent(v.slice(F,C+1)).substr(1).split("%")),ne=0;ne<z.length;ne++)T.push(parseInt(z[ne],16))}return T}function Xe(v){return P.toByteArray(v)}function we(v,T,C,B){for(var F=0;F<B&&!(F+C>=T.length||F>=v.length);F++)T[F+C]=v[F];return F}function Or(v){try{return decodeURIComponent(v)}catch{return"�"}}function dt(v,T){H(typeof v=="number","cannot write a non-number as a number"),H(0<=v,"specified a negative value for writing an unsigned value"),H(v<=T,"value is larger than maximum value for type"),H(Math.floor(v)===v,"value has a fractional component")}function $n(v,T,C){H(typeof v=="number","cannot write a non-number as a number"),H(v<=T,"value larger than maximum allowed value"),H(C<=v,"value smaller than minimum allowed value"),H(Math.floor(v)===v,"value has a fractional component")}function Gt(v,T,C){H(typeof v=="number","cannot write a non-number as a number"),H(v<=T,"value larger than maximum allowed value"),H(C<=v,"value smaller than minimum allowed value")}function H(v,T){if(!v)throw new Error(T||"Failed assertion")}b._augment=function(v){return v._isBuffer=!0,v._get=v.get,v._set=v.set,v.get=K.get,v.set=K.set,v.write=K.write,v.toString=K.toString,v.toLocaleString=K.toString,v.toJSON=K.toJSON,v.copy=K.copy,v.slice=K.slice,v.readUInt8=K.readUInt8,v.readUInt16LE=K.readUInt16LE,v.readUInt16BE=K.readUInt16BE,v.readUInt32LE=K.readUInt32LE,v.readUInt32BE=K.readUInt32BE,v.readInt8=K.readInt8,v.readInt16LE=K.readInt16LE,v.readInt16BE=K.readInt16BE,v.readInt32LE=K.readInt32LE,v.readInt32BE=K.readInt32BE,v.readFloatLE=K.readFloatLE,v.readFloatBE=K.readFloatBE,v.readDoubleLE=K.readDoubleLE,v.readDoubleBE=K.readDoubleBE,v.writeUInt8=K.writeUInt8,v.writeUInt16LE=K.writeUInt16LE,v.writeUInt16BE=K.writeUInt16BE,v.writeUInt32LE=K.writeUInt32LE,v.writeUInt32BE=K.writeUInt32BE,v.writeInt8=K.writeInt8,v.writeInt16LE=K.writeInt16LE,v.writeInt16BE=K.writeInt16BE,v.writeInt32LE=K.writeInt32LE,v.writeInt32BE=K.writeInt32BE,v.writeFloatLE=K.writeFloatLE,v.writeFloatBE=K.writeFloatBE,v.writeDoubleLE=K.writeDoubleLE,v.writeDoubleBE=K.writeDoubleBE,v.fill=K.fill,v.inspect=K.inspect,v.toArrayBuffer=K.toArrayBuffer,v}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,r,i){(function(s,a,P,l,g,w,A,R,D){var P=t("buffer").Buffer,O=4,b=new P(O);b.fill(0),r.exports={hash:function(N,V,M,L){for(var $=V(function(f,m){f.length%O!=0&&(E=f.length+(O-f.length%O),f=P.concat([f,b],E));for(var E,I=[],W=m?f.readInt32BE:f.readInt32LE,Q=0;Q<f.length;Q+=O)I.push(W.call(f,Q));return I}(N=P.isBuffer(N)?N:new P(N),L),8*N.length),V=L,S=new P(M),_=V?S.writeInt32BE:S.writeInt32LE,h=0;h<$.length;h++)_.call(S,$[h],4*h,!0);return S}}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,r,i){(function(s,a,P,l,g,w,A,R,D){var P=t("buffer").Buffer,O=t("./sha"),b=t("./sha256"),N=t("./rng"),V={sha1:O,sha256:b,md5:t("./md5")},M=64,L=new P(M);function $(f,m){var E=V[f=f||"sha1"],I=[];return E||S("algorithm:",f,"is not yet supported"),{update:function(W){return P.isBuffer(W)||(W=new P(W)),I.push(W),W.length,this},digest:function(W){var Q=P.concat(I),Q=m?function(K,ue,_e){P.isBuffer(ue)||(ue=new P(ue)),P.isBuffer(_e)||(_e=new P(_e)),ue.length>M?ue=K(ue):ue.length<M&&(ue=P.concat([ue,L],M));for(var de=new P(M),le=new P(M),Ye=0;Ye<M;Ye++)de[Ye]=54^ue[Ye],le[Ye]=92^ue[Ye];return _e=K(P.concat([de,_e])),K(P.concat([le,_e]))}(E,m,Q):E(Q);return I=null,W?Q.toString(W):Q}}}function S(){var f=[].slice.call(arguments).join(" ");throw new Error([f,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}L.fill(0),i.createHash=function(f){return $(f)},i.createHmac=$,i.randomBytes=function(f,m){if(!m||!m.call)return new P(N(f));try{m.call(this,void 0,new P(N(f)))}catch(E){m(E)}};var _,h=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],p=function(f){i[f]=function(){S("sorry,",f,"is not implemented yet")}};for(_ in h)p(h[_])}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,r,i){(function(s,a,u,l,g,w,A,R,D){var P=t("./helpers");function O(S,_){S[_>>5]|=128<<_%32,S[14+(_+64>>>9<<4)]=_;for(var h=1732584193,p=-271733879,f=-1732584194,m=271733878,E=0;E<S.length;E+=16){var I=h,W=p,Q=f,K=m,h=N(h,p,f,m,S[E+0],7,-680876936),m=N(m,h,p,f,S[E+1],12,-389564586),f=N(f,m,h,p,S[E+2],17,606105819),p=N(p,f,m,h,S[E+3],22,-1044525330);h=N(h,p,f,m,S[E+4],7,-176418897),m=N(m,h,p,f,S[E+5],12,1200080426),f=N(f,m,h,p,S[E+6],17,-1473231341),p=N(p,f,m,h,S[E+7],22,-45705983),h=N(h,p,f,m,S[E+8],7,1770035416),m=N(m,h,p,f,S[E+9],12,-1958414417),f=N(f,m,h,p,S[E+10],17,-42063),p=N(p,f,m,h,S[E+11],22,-1990404162),h=N(h,p,f,m,S[E+12],7,1804603682),m=N(m,h,p,f,S[E+13],12,-40341101),f=N(f,m,h,p,S[E+14],17,-1502002290),h=V(h,p=N(p,f,m,h,S[E+15],22,1236535329),f,m,S[E+1],5,-165796510),m=V(m,h,p,f,S[E+6],9,-1069501632),f=V(f,m,h,p,S[E+11],14,643717713),p=V(p,f,m,h,S[E+0],20,-373897302),h=V(h,p,f,m,S[E+5],5,-701558691),m=V(m,h,p,f,S[E+10],9,38016083),f=V(f,m,h,p,S[E+15],14,-660478335),p=V(p,f,m,h,S[E+4],20,-405537848),h=V(h,p,f,m,S[E+9],5,568446438),m=V(m,h,p,f,S[E+14],9,-1019803690),f=V(f,m,h,p,S[E+3],14,-187363961),p=V(p,f,m,h,S[E+8],20,1163531501),h=V(h,p,f,m,S[E+13],5,-1444681467),m=V(m,h,p,f,S[E+2],9,-51403784),f=V(f,m,h,p,S[E+7],14,1735328473),h=M(h,p=V(p,f,m,h,S[E+12],20,-1926607734),f,m,S[E+5],4,-378558),m=M(m,h,p,f,S[E+8],11,-2022574463),f=M(f,m,h,p,S[E+11],16,1839030562),p=M(p,f,m,h,S[E+14],23,-35309556),h=M(h,p,f,m,S[E+1],4,-1530992060),m=M(m,h,p,f,S[E+4],11,1272893353),f=M(f,m,h,p,S[E+7],16,-155497632),p=M(p,f,m,h,S[E+10],23,-1094730640),h=M(h,p,f,m,S[E+13],4,681279174),m=M(m,h,p,f,S[E+0],11,-358537222),f=M(f,m,h,p,S[E+3],16,-722521979),p=M(p,f,m,h,S[E+6],23,76029189),h=M(h,p,f,m,S[E+9],4,-640364487),m=M(m,h,p,f,S[E+12],11,-421815835),f=M(f,m,h,p,S[E+15],16,530742520),h=L(h,p=M(p,f,m,h,S[E+2],23,-995338651),f,m,S[E+0],6,-198630844),m=L(m,h,p,f,S[E+7],10,1126891415),f=L(f,m,h,p,S[E+14],15,-1416354905),p=L(p,f,m,h,S[E+5],21,-57434055),h=L(h,p,f,m,S[E+12],6,1700485571),m=L(m,h,p,f,S[E+3],10,-1894986606),f=L(f,m,h,p,S[E+10],15,-1051523),p=L(p,f,m,h,S[E+1],21,-2054922799),h=L(h,p,f,m,S[E+8],6,1873313359),m=L(m,h,p,f,S[E+15],10,-30611744),f=L(f,m,h,p,S[E+6],15,-1560198380),p=L(p,f,m,h,S[E+13],21,1309151649),h=L(h,p,f,m,S[E+4],6,-145523070),m=L(m,h,p,f,S[E+11],10,-1120210379),f=L(f,m,h,p,S[E+2],15,718787259),p=L(p,f,m,h,S[E+9],21,-343485551),h=$(h,I),p=$(p,W),f=$(f,Q),m=$(m,K)}return Array(h,p,f,m)}function b(S,_,h,p,f,m){return $((_=$($(_,S),$(p,m)))<<f|_>>>32-f,h)}function N(S,_,h,p,f,m,E){return b(_&h|~_&p,S,_,f,m,E)}function V(S,_,h,p,f,m,E){return b(_&p|h&~p,S,_,f,m,E)}function M(S,_,h,p,f,m,E){return b(_^h^p,S,_,f,m,E)}function L(S,_,h,p,f,m,E){return b(h^(_|~p),S,_,f,m,E)}function $(S,_){var h=(65535&S)+(65535&_);return(S>>16)+(_>>16)+(h>>16)<<16|65535&h}r.exports=function(S){return P.hash(S,O,16)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,r,i){(function(s,a,u,l,g,w,A,R,D){r.exports=function(P){for(var O,b=new Array(P),N=0;N<P;N++)(3&N)==0&&(O=4294967296*Math.random()),b[N]=O>>>((3&N)<<3)&255;return b}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,r,i){(function(s,a,u,l,g,w,A,R,D){var P=t("./helpers");function O(V,M){V[M>>5]|=128<<24-M%32,V[15+(M+64>>9<<4)]=M;for(var L,$,S,_=Array(80),h=1732584193,p=-271733879,f=-1732584194,m=271733878,E=-1009589776,I=0;I<V.length;I+=16){for(var W=h,Q=p,K=f,ue=m,_e=E,de=0;de<80;de++){_[de]=de<16?V[I+de]:N(_[de-3]^_[de-8]^_[de-14]^_[de-16],1);var le=b(b(N(h,5),(le=p,$=f,S=m,(L=de)<20?le&$|~le&S:!(L<40)&&L<60?le&$|le&S|$&S:le^$^S)),b(b(E,_[de]),(L=de)<20?1518500249:L<40?1859775393:L<60?-1894007588:-899497514)),E=m,m=f,f=N(p,30),p=h,h=le}h=b(h,W),p=b(p,Q),f=b(f,K),m=b(m,ue),E=b(E,_e)}return Array(h,p,f,m,E)}function b(V,M){var L=(65535&V)+(65535&M);return(V>>16)+(M>>16)+(L>>16)<<16|65535&L}function N(V,M){return V<<M|V>>>32-M}r.exports=function(V){return P.hash(V,O,20,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,r,i){(function(s,a,u,l,g,w,A,R,D){function P(M,L){var $=(65535&M)+(65535&L);return(M>>16)+(L>>16)+($>>16)<<16|65535&$}function O(M,L){var $,S=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),_=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),h=new Array(64);M[L>>5]|=128<<24-L%32,M[15+(L+64>>9<<4)]=L;for(var p,f,m=0;m<M.length;m+=16){for(var E=_[0],I=_[1],W=_[2],Q=_[3],K=_[4],ue=_[5],_e=_[6],de=_[7],le=0;le<64;le++)h[le]=le<16?M[le+m]:P(P(P((f=h[le-2],N(f,17)^N(f,19)^V(f,10)),h[le-7]),(f=h[le-15],N(f,7)^N(f,18)^V(f,3))),h[le-16]),$=P(P(P(P(de,N(f=K,6)^N(f,11)^N(f,25)),K&ue^~K&_e),S[le]),h[le]),p=P(N(p=E,2)^N(p,13)^N(p,22),E&I^E&W^I&W),de=_e,_e=ue,ue=K,K=P(Q,$),Q=W,W=I,I=E,E=P($,p);_[0]=P(E,_[0]),_[1]=P(I,_[1]),_[2]=P(W,_[2]),_[3]=P(Q,_[3]),_[4]=P(K,_[4]),_[5]=P(ue,_[5]),_[6]=P(_e,_[6]),_[7]=P(de,_[7])}return _}var b=t("./helpers"),N=function(M,L){return M>>>L|M<<32-L},V=function(M,L){return M>>>L};r.exports=function(M){return b.hash(M,O,32,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,r,i){(function(s,a,u,l,g,w,A,R,D){i.read=function(P,O,b,N,m){var M,L,$=8*m-N-1,S=(1<<$)-1,_=S>>1,h=-7,p=b?m-1:0,f=b?-1:1,m=P[O+p];for(p+=f,M=m&(1<<-h)-1,m>>=-h,h+=$;0<h;M=256*M+P[O+p],p+=f,h-=8);for(L=M&(1<<-h)-1,M>>=-h,h+=N;0<h;L=256*L+P[O+p],p+=f,h-=8);if(M===0)M=1-_;else{if(M===S)return L?NaN:1/0*(m?-1:1);L+=Math.pow(2,N),M-=_}return(m?-1:1)*L*Math.pow(2,M-N)},i.write=function(P,O,b,N,V,E){var L,$,S=8*E-V-1,_=(1<<S)-1,h=_>>1,p=V===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=N?0:E-1,m=N?1:-1,E=O<0||O===0&&1/O<0?1:0;for(O=Math.abs(O),isNaN(O)||O===1/0?($=isNaN(O)?1:0,L=_):(L=Math.floor(Math.log(O)/Math.LN2),O*(N=Math.pow(2,-L))<1&&(L--,N*=2),2<=(O+=1<=L+h?p/N:p*Math.pow(2,1-h))*N&&(L++,N/=2),_<=L+h?($=0,L=_):1<=L+h?($=(O*N-1)*Math.pow(2,V),L+=h):($=O*Math.pow(2,h-1)*Math.pow(2,V),L=0));8<=V;P[b+f]=255&$,f+=m,$/=256,V-=8);for(L=L<<V|$,S+=V;0<S;P[b+f]=255&L,f+=m,L/=256,S-=8);P[b+f-m]|=128*E}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,r,i){(function(s,a,u,l,g,w,A,R,D){var P,O,b;function N(){}(s=r.exports={}).nextTick=(O=typeof window<"u"&&window.setImmediate,b=typeof window<"u"&&window.postMessage&&window.addEventListener,O?function(V){return window.setImmediate(V)}:b?(P=[],window.addEventListener("message",function(V){var M=V.source;M!==window&&M!==null||V.data!=="process-tick"||(V.stopPropagation(),0<P.length&&P.shift()())},!0),function(V){P.push(V),window.postMessage("process-tick","*")}):function(V){setTimeout(V,0)}),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=N,s.addListener=N,s.once=N,s.off=N,s.removeListener=N,s.removeAllListeners=N,s.emit=N,s.binding=function(V){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(V){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})}(pa)),pa.exports}_A();class pi{constructor(e,t,r){this.id=zg(),this.data=e,this.vendas=t,this.sobras=r,this.producao=parseInt(this.vendas)+parseInt(this.sobras),this.aprov=(parseFloat(this.vendas)/this.producao*100).toFixed(2)}toJSON(){return{id:this.id,data:this.data,vendas:this.vendas,sobras:this.sobras,producao:this.producao,aprov:this.aprov}}}const st={relatorios:[],async init(){const{uid:n}=JSON.parse(localStorage.getItem("userLoggedIn")),e=JSON.parse(localStorage.getItem(`banca_${n}_cache`))??[],t=JSON.parse(localStorage.getItem(`vales_${n}_cache`))??[],r=JSON.parse(localStorage.getItem(`descontos_${n}_cache`))??[],{banca:i,vales:s,descontos:a}=(await Xi(on(un,"usuarios",n))).data();console.log("Ln 20, relatorio.js: ",i,e),console.log("Ln 21, relatorio.js: ",s,t),console.log("Ln 22, relatorio.js: ",a,r),_n(i,e)&&_n(s,t)&&_n(a,r)?(en.fire({icon:"success",title:"Dados atualizados e sincronizados."}),this.relatorios=e):(this.relatorios=i,console.log("Ln 27, relatorio.js - init()",this.relatorios),_n(i,e)||localStorage.setItem(`banca_${n}_cache`,JSON.stringify(i)),_n(s,t)||localStorage.setItem(`vales_${n}_cache`,JSON.stringify(s??[])),_n(a,r)||localStorage.setItem(`descontos_${n}_cache`,JSON.stringify(a??[])),en.fire({icon:"success",title:"Carregando dados do servidor..."}));const{campo:u,ordem:l}=JSON.parse(localStorage.getItem("filtering"))??{campo:"data",ordem:"Menor"};this.ordernar(u,l)},async updateDB(){const n=JSON.parse(localStorage.getItem("userLoggedIn"));if(!n)return;console.log(n);const e=on(un,"usuarios",n.uid);try{await Tu(e,{banca:this.relatorios.map(t=>t instanceof pi?t.toJSON():t)}),localStorage.setItem(`banca_${n.uid}_cache`,JSON.stringify(this.relatorios.map(t=>t instanceof pi?t.toJSON():t)))}catch(t){en.fire({icon:"error",title:"⚠️ Erro ao salvar no database."}),console.log(t)}},async adicionarDia(n,e=!1){const t=this.relatorios.find(r=>r.data===n.data);if(console.log(t),t)pr("Este dia já foi anteriormente adicionado, tente editá-lo.");else{this.relatorios.push(n),await this.updateDB();const{campo:r,ordem:i}=JSON.parse(localStorage.getItem("filtering"))??{campo:"data",ordem:"Menor"};this.ordernar(r,i),this.atualizarLista(),e||Fa("Registro adicionado com sucesso!")}},atualizarLista(){const n=document.getElementById("listaRegistros");n.innerHTML="";const e=document.createElement("div");e.id="registro-header",n.appendChild(e),["Data","Vendas","Sobras","Produção","Aprov."].forEach(r=>{const i=document.createElement("span");i.className="span-header",i.innerText=r,e.appendChild(i)});const t=document.getElementById("gerarRelatorio");console.log(this.relatorios),this.relatorios.forEach(r=>{const i=document.createElement("div");i.className="registro div-estilosa";const s=document.createElement("span");function a(P){const O=["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],N=new Date(P).getDay();return O[N]}const[u,l]=r.data.split("/"),g=new Date(2025,l-1,u);s.textContent=`${r.data} - ${a(g)}`;const w=document.createElement("span");w.textContent=r.vendas;const A=document.createElement("span");A.textContent=r.sobras;const R=document.createElement("span");R.textContent=r.producao;const D=document.createElement("span");D.textContent=`${r.aprov}%`,i.append(s,w,A,R,D),n.appendChild(i)}),this.relatorios.length<1?t.style.display="none":t.style.display="block"},converterData(n){const e=n.split("/");let t="";return console.log(e),e[0].length<2?t+=`0${e[0]}/`:t+=`${e[0]}/`,e[1].length<2?t+=`0${e[1]}`:t+=e[1],t},editarDia({id:n,data:e,vendas:t,sobras:r}){if(!e||!t||!r)return pr("Você deve inserir uma data, as vendas e as sobras.");const i=this.relatorios.find(a=>a.data===e),s=i?.id===n;if(i&&s||!i&&!s){this.removerRegistro(n),this.adicionarDia(new pi(this.converterData(e),t,r),!0);const{campo:a,ordem:u}=JSON.parse(localStorage.getItem("filtering"))??{campo:"data",ordem:"Menor"};return this.ordernar(a,u),this.atualizarLista(),Fa("Registro alterado com sucesso.")}else return pr("Já existe um registro com esta data no relatório.")},getId(n){const e=n.split(" "),t=this.relatorios.find(r=>r.data===e[0]);return t?t.id:!1},removerRegistro(n){console.log(n);const e=this.relatorios.findIndex(t=>t.id===n);this.relatorios.splice(e,1),this.updateDB(),this.atualizarLista()},ordernar(n,e){this.relatorios.sort((t,r)=>{let i,s;if(n.toLowerCase()==="data"){const a=t.data.split("/"),u=r.data.split("/");i=new Date(2025,parseInt(a[1])-1,parseInt(a[0])),s=new Date(2025,parseInt(u[1])-1,parseInt(u[0]))}else n.toLowerCase()==="vendas"?(i=t.vendas,s=r.vendas):n.toLowerCase()==="sobras"?(i=t.sobras,s=r.sobras):n.toLowerCase()==="produção"?(i=t.producao,s=r.producao):n.toLowerCase()==="aprov."&&(i=parseFloat(t.aprov),s=parseFloat(r.aprov));return localStorage.setItem("filtering",JSON.stringify({campo:n,ordem:e})),e==="Maior"?s-i:i-s}),console.log(this.relatorios),this.atualizarLista()}},ge=document.getElementById("data"),qd=document.getElementById("vendidas"),Ba=document.getElementById("sobras"),yA=document.getElementById("add-reg");ge.addEventListener("beforeinput",n=>{if(n.data===" "||n.data==="/"&&ge.value.includes("/"))return n.preventDefault();const e=ge.value.split("/");if(n&&n.inputType==="insertText"){if(!ge.value.includes("/")&&ge.value.length<1)n.data>3&&(console.log("error 1"),n.preventDefault(),ge.value=`${n.data}/`);else if(ge.value.length===2&&!ge.value.includes("/")&&n.data!=="/")ge.value=`${ge.value}/`;else if(ge.value==="3"&&n.data>1)return n.preventDefault();console.log(e[0].length),ge.value.length===5?(console.log("error 2"),n.preventDefault()):ge.value.length===3&&e[0].length===1?n.data>2&&ge.value.at(-1)==="1"?(console.log("error 3"),n.preventDefault()):n.data>0&&ge.value.at(-1)<2?(console.log("error 4"),n.preventDefault()):ge.value.at(-1)!==0&&(console.log("error 7"),n.preventDefault()):ge.value.length===4&&ge.value.at(-1)!=="0"&&e[0].length===2?(n.data>2||ge.value.at(-1)>1)&&(console.log("error 5"),n.preventDefault()):ge.value.length===4&&ge.value.at(-1)!=="0"&&e[0].length===1?(console.log("error 6"),n.preventDefault()):ge.value.length===4&&ge.value.at(-1)==="0"&&e[0].length===1&&n.preventDefault()}});qd.addEventListener("input",n=>{n.inputType=="insertText"&&qd.value.length===2&&Ba.focus()});Ba.addEventListener("input",n=>{n.inputType==="insertText"&&Ba.value.length===2&&yA.focus()});function _n(n,e){return mA(n,e)}await st.init();document.getElementById("formRegistro").addEventListener("submit",n=>{n.preventDefault();const e=document.getElementById("data").value,t=parseInt(document.getElementById("vendidas").value),r=parseInt(document.getElementById("sobras").value);st.adicionarDia(new pi(st.converterData(e),t,r)),document.getElementById("formRegistro").reset()});document.getElementById("listaRegistros").addEventListener("click",async n=>{if(n.target.closest(".span-header")){const e=n.target.closest(".span-header"),t=new Promise(i=>{setTimeout(()=>{i({Maior:"Maior para o Menor",Menor:"Menor para o Maior"})},200)}),{value:r}=await Swal.fire({title:`Filtrar ${e.textContent}`,text:"Selecione uma das opções a ser filtrada",input:"radio",theme:"dark",inputOptions:t,inputValidator:i=>{if(!i)return"Você precisa escolher uma opção para filtrar."}});r&&(console.log(e.textContent),console.log(r),st.ordernar(e.textContent,r))}}),document.getElementById("listaRegistros").addEventListener("click",n=>{if(n.target.closest(".registro")){const e=n.target.closest(".registro"),t=e.children[0].textContent,r=e.children[1].textContent,i=e.children[2].textContent;Array.from(e.children).forEach(()=>{Swal.fire({title:"Editar dia: ",icon:"info",inputAttributes:{autoComplete:"off"},confirmButtonText:"Concluir edição",denyButtonText:"Remover dia",showDenyButton:!0,customClass:{popup:"swal-glass"},reverseButtons:!0,html:`
              <div id="edit-div">
                <div>
                    <label for="swal-input1">Data: </label>
                    <input id="swal-input1" class="swal2-input" value=${t}>
                </div>
                <div>
                    <label for="swal-input2">Vendas: </label>
                    <input id="swal-input2" class="swal2-input" value=${r}>
                </div>
                <div>
                    <label for="swal-input3">Sobras: </label>
                    <input id="swal-input3" class="swal2-input" value=${i}>
                </div>
              </div>
            `,focusConfirm:!1,preConfirm:()=>{const s=document.getElementById("swal-input1").value,a=document.getElementById("swal-input2").value,u=document.getElementById("swal-input3").value;return s.trim()===""||a.trim()===""||u.trim()===""?!1:[s,a,u]}}).then(({isConfirmed:s,isDenied:a,dismiss:u,value:l})=>{if(s){console.log(l);const g=Array.from(l);st.editarDia({id:st.getId(t),data:g[0],vendas:g[1],sobras:g[2]})}else a?(st.removerRegistro(st.getId(t)),Fa(`Dia ${t} removido.`)):u===Swal.DismissReason.cancel&&pr("O dia não foi editado.")})})}});document.getElementById("gerarRelatorio").addEventListener("click",async()=>{if(st.relatorios.length===0)return pr("Não há registros para gerar relatório");const{vales:n,descontos:e,faltas:t}=await ZI(),r=n.reduce((u,l)=>u+parseFloat(l.valor),0),i=e.reduce((u,l)=>l.motivo==="Foto Ausente"?u+15*parseInt(l.fotos):u+parseFloat(l.valor),0),s=t.reduce((u,l)=>u+parseInt(l.fotos),0),a=st.relatorios.reduce((u,l)=>(u.sumDatas+=1,u.sumVendas+=parseInt(l.vendas),u.sumSobras+=parseInt(l.sobras),u.sumProd+=parseInt(l.producao),u.sumAprov=(u.sumVendas/u.sumProd*100).toFixed(2),u.ganho=u.sumVendas*3,u),{sumDatas:0,ganho:0,sumVendas:0,sumSobras:0,sumProd:0,sumAprov:0});Swal.fire({title:`📸 Relatório Geral do(a) ${JI()}`,width:"30vw",customClass:{popup:"rela-geral swal-glass"},html:`
        <div class="rela-div">
          <ul class="ul-rela">
            <li><strong>📅 Dias Trabalhados:</strong> ${a.sumDatas}</li>
            <li><strong>💸 Salário Bruto:</strong> R$ ${a.ganho}</li>
            <li><strong>🧾 Salário Líquido:</strong> R$ ${a.ganho-i}</li>
            <li><strong>🛍️ Vendas Totais:</strong> ${a.sumVendas}</li>
            <li><strong>📦 Sobras:</strong> ${a.sumSobras}</li>
            <li><strong>🏭 Produção:</strong> ${a.sumProd}</li>
            <li><strong>🎟️ Vales:</strong> R$ ${r}</li>
            <li><strong>📉 Descontos:</strong> R$ ${i}</li>
            <li><strong>📸 Fotos perdidas:</strong> ${s}</li>
            <li><strong>📊 Aproveitamento:</strong> ${a.sumAprov}%</li>
          </ul>
        </div>
      `,confirmButtonText:"Fechar"})});document.getElementById("vale").addEventListener("click",()=>{Swal.fire({title:"Adicionar vale: ",icon:"info",inputAttributes:{autoComplete:"off"},confirmButtonText:"Adicionar",denyButtonText:"Voltar",showDenyButton:!0,customClass:{popup:"swal-glass"},reverseButtons:!0,html:`
              <div id="edit-div">
                <div>
                    <label for="swal-input1">Data: </label>
                    <input id="swal-input1" class="swal2-input" autocomplete="off">
                </div>
                <div>
                    <label for="swal-input2">Motivo: </label>
                    <input id="swal-input2" class="swal2-input" placeholder="(OPCIONAL)" autocomplete="off">
                </div>
                <div>
                    <label for="swal-input3">Valor: </label>
                    <input id="swal-input3" class="swal2-input" autocomplete="off">
                </div>
              </div>
            `,focusConfirm:!1,preConfirm:()=>{const n=document.getElementById("swal-input1").value,e=document.getElementById("swal-input2").value,t=document.getElementById("swal-input3").value;return!n||n.trim()===""||!t||t.trim()===""?!1:[n,e.trim()===""?"motivo não informado.":e,t]}}).then(({isConfirmed:n,isDenied:e,dismiss:t,value:r})=>{if(n){if(!r)return;const i=Array.from(r);console.log(i),YI({data:r[0],motivo:r[1],valor:r[2]})}else e||Swal.DismissReason.cancel})});document.getElementById("desconto").addEventListener("click",()=>{Swal.fire({title:"Adicionar desconto: ",icon:"info",inputAttributes:{autoComplete:"off"},confirmButtonText:"Adicionar",denyButtonText:"Voltar",showDenyButton:!0,customClass:{popup:"swal-glass"},reverseButtons:!0,html:`
              <div id="edit-div">
                <div>
                    <label for="swal-input1">Data: </label>
                    <input id="swal-input1" class="swal2-input" autocomplete="off">
                </div>
                <div>
                    <label for="swal-input2">Motivo: </label>
                    <input id="swal-input2" class="swal2-input" placeholder="(OPCIONAL)" autocomplete="off">
                </div>
                <div>
                    <label for="swal-input3">Valor: </label>
                    <input id="swal-input3" class="swal2-input" autocomplete="off">
                </div>
              </div>
            `,focusConfirm:!1,preConfirm:()=>{const n=document.getElementById("swal-input1").value,e=document.getElementById("swal-input2").value,t=document.getElementById("swal-input3").value;return!n||n.trim()===""||!t||t.trim()===""?!1:[n,e.trim()===""?"motivo não informado.":e,t]}}).then(({isConfirmed:n,isDenied:e,dismiss:t,value:r})=>{if(n){if(!r)return;const i=Array.from(r);console.log(i),Ou({data:r[0],motivo:r[1],valor:r[2]})}else e||Swal.DismissReason.cancel})});document.getElementById("faltas").addEventListener("click",()=>{Swal.fire({title:"Registrar Foto Perdida: ",icon:"info",inputAttributes:{autoComplete:"off"},confirmButtonText:"Adicionar",denyButtonText:"Voltar",showDenyButton:!0,customClass:{popup:"swal-glass"},reverseButtons:!0,html:`
              <div id="edit-div">
                <div>
                    <label for="swal-input1">Data: </label>
                    <input id="swal-input1" class="swal2-input" autocomplete="off">
                </div>
                <div>
                    <label for="swal-input2">Fotos: </label>
                    <input id="swal-input2" class="swal2-input" autocomplete="off">
                </div>
              </div>
            `,focusConfirm:!1,preConfirm:()=>{const n=document.getElementById("swal-input1").value,e=document.getElementById("swal-input2").value;return!n||n.trim()===""||!e||e.trim()===""?!1:[n,e]}}).then(({isConfirmed:n,isDenied:e,dismiss:t,value:r})=>{if(n){if(!r)return;const i=Array.from(r);console.log(i),XI({data:r[0],fotos:r[1]})}else e||Swal.DismissReason.cancel})});
