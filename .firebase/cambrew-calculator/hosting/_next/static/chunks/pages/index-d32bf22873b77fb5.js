(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7077:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(7001)}])},201:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{noSSR:function(){return o},default:function(){return s}});let r=l(1351);l(1527),l(959);let n=r._(l(5460));function a(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}function s(e,t){let l=n.default,r={loading:e=>{let{error:t,isLoading:l,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e});let s=(r={...r,...t}).loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?l({...r,loader:()=>null!=s?s().then(a):Promise.resolve(a(()=>null))}):(delete r.webpack,delete r.modules,o(l,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1496:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return r}});let r=l(1351)._(l(959)).default.createContext(null)},5460:function(e,t,l){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let r=l(1351)._(l(959)),n=l(1496),a=[],o=[],s=!1;function i(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function i(){if(!a){let t=new u(e,l);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!s){let e=l.webpack?l.webpack():l.modules;e&&o.push(t=>{for(let l of e)if(t.includes(l))return i()})}function d(e,t){!function(){i();let e=r.default.useContext(n.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let o=r.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),r.default.useMemo(()=>{var t;return o.loading||o.error?r.default.createElement(l.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:a.retry}):o.loaded?r.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return d.preload=()=>i(),d.displayName="LoadableComponent",r.default.forwardRef(d)}(i,e)}function c(e,t){let l=[];for(;e.length;){let r=e.pop();l.push(r(t))}return Promise.all(l).then(()=>{if(e.length)return c(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{c(a).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let l=()=>(s=!0,t());c(o,e).then(l,l)})),window.__NEXT_PRELOADREADY=d.preloadReady;let f=d},7001:function(e,t,l){"use strict";l.r(t);var r=l(1527),n=l(5285),a=l.n(n),o=l(6702),s=l(4711),i=l.n(s);function u(){let{user:e,webApp:t}=(0,o.fW)();return(0,r.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24 ".concat(a().className),children:(0,r.jsxs)("div",{className:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-screen",children:[(0,r.jsxs)("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[(0,r.jsx)("img",{className:"mx-auto h-10 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:"Your Company"}),(0,r.jsx)("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",children:"Sign in to your account1lll"}),(0,r.jsxs)("p",{className:"text-wrap",children:["User ",JSON.stringify(e)," xx WebApp ",JSON.stringify(t)," xxx"]})]}),(0,r.jsx)("div",{className:"text-5xl font-extrabold ...",children:(0,r.jsx)("span",{className:"bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 to-violet-500",children:"Hello world"})}),(0,r.jsx)("button",{className:"transition w-36 h-10 hover:w-40 hover:h-12 duration-500 text-xs hover:text-lg bg-indigo-500 hover:bg-indigo-300 rounded-full ",children:"Button A"})]})})}t.default=i()(()=>Promise.resolve(u),{ssr:!1})},5285:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},4711:function(e,t,l){e.exports=l(201)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=7077)}),_N_E=e.O()}]);