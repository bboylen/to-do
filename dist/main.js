(()=>{"use strict";var e={434:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n",""]);const i=o},772:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(645),o=t.n(r),i=t(667),a=t.n(i),l=t(743),c=o()((function(e){return e[1]})),s=a()(l);c.push([e.id,"html {\n  height: 100%;\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100%;\n  overflow: hidden;\n}\n\n/* header */\n\n#page-header {\n  height: 3rem;\n  background-color: #e85a4f;\n}\n\n#page-header .container {\n  width: 12rem;\n  height: 100%;\n  margin-left: 4rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#notepad-image {\n  background-image: url("+s+');\n  background-size: contain;\n  width: 40px;\n  height: 40px;\n}\n\n#page-header h1 {\n  font-size: 36px;\n  font-family: "Montserrat", sans-serif;\n  font-weight: 700;\n}\n\n/* main */\n\n.main-content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  background-color: #fffff2;\n}\n\n@media only screen and (max-width: 768px) {\n  .side-info {\n    display: none;\n  }\n}\n\n/* side-info */\n\n.side-info {\n  width: 300px;\n  background-color: #ffc7bd;\n}\n\n.side-content {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5rem;\n  text-align: left;\n  font-family: "Montserrat", sans-serif;\n}\n\n.side-content h2 {\n  font-size: 30px;\n  font-weight: 700;\n}\n\n.project-list {\n  margin-top: 2rem;\n  font-size: 20px;\n\n}\n\n.project-list p {\n  margin-bottom: 1rem;\n}\n\n.project-list p:hover {\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.project-list .selected {\n  color: #e85a4f;\n  font-weight: 700;\n}\n\n/* add project */ \n\n.add-project {\n  font-size: 20px;\n}\n\n.add-project:hover {\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.add-project div {\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  border-radius: 5px;\n  background-color: white;\n  color: white;\n  font-weight: 600;\n}\n\n.add-project a, .add-project input {\n  display: inline-block;\n  font-size: 16px;\n  padding: 5px 3px 5px 3px;\n\n}\n\n.add-project a:nth-child(2) {\n  background-color:#309c5b;\n}\n\n.add-project a:nth-child(2):hover {\n  background-color:#3bbf70;\n}\n\n.add-project a:nth-child(3) {\n  background-color: #d40000;\n  border-radius: 0 5px 5px 0;\n}\n\n.add-project a:nth-child(3):hover {\n  background-color: #ff0000;\n}\n\n.add-project input {\n  width: 58%;\n  border: none;\n}\n\n#project-input.failed {\n  border: 1px solid red;\n}\n/* main-content */\n\n.content {\n  flex-grow: 3;\n  flex-shrink: 10;\n  background-color: #f0eee9;\n}\n\n.content-container {\n  width: 85%;\n  height: 60%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3rem;\n  font-family: "Montserrat", sans-serif;\n}\n\n.content-container h1 {\n  font-weight: 600;\n  font-size: 32px;\n}\n\n.list-items {\n  width: 85%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 1rem;\n}\n\n.list-items .item {\n  display: flex;\n  justify-content: space-between;\n  padding: .125rem 0 .25rem 0;\n  margin: .25rem 0 .25rem 0;\n  border-bottom: 2px solid #ffc7bd;\n}\n\n.list-items .item:last-of-type {\n  border: none;\n}\n',""]);const d=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},r=[],o=0;o<e.length;o++){var l=e[o],c=n.base?l[0]+n.base:l[0],s=t[c]||0,d="".concat(c," ").concat(s);t[c]=s+1;var f=a(d),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:d,updater:m(p,n),references:1}),r.push(d)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,d=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u=null,h=0;function m(e,n){var t,r,o;if(n.singleton){var i=h++;t=u||(u=c(n)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=c(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var c=l(e,n),s=0;s<t.length;s++){var d=a(t[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=c}}}},743:(e,n,t)=>{e.exports=t.p+"3995d5c46656b84b29b4.png"}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(434);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var o=t(772);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;class i{constructor(e,n,t){this.title=e,this.description=n,this.date=t}}function a(e){for(let n of e.tasks){console.log("d");let e=document.getElementsByClassName("list-items")[0],t=document.createElement("div");t.classList.add("item");let r=document.createElement("div");r.classList.add("title");let o=document.createElement("div");o.classList.add("date"),e.appendChild(t),t.appendChild(r),t.appendChild(o),r.textContent=n.title,o.textContent=n.date}}class l{constructor(e){this.title=e,this.tasks=[]}}function c(){Array.from(document.getElementsByClassName("project-list")[0].children).forEach((e=>{e.addEventListener("click",s)})),document.getElementsByClassName("add-project")[0].addEventListener("click",d)}function s(e){let n=e.target;!function(e){e.classList.add("selected");let n=Array.from(document.getElementsByClassName("project-list")[0].children).filter((n=>n!=e));for(let e of n)e.classList.remove("selected")}(n),function(e){document.getElementById("project-selected-header").textContent=e.textContent,function(e){let n=JSON.parse(localStorage.projectList).filter((n=>n.title===e))[0];!function(){let e=document.getElementsByClassName("list-items")[0];for(;e.firstChild;)e.removeChild(e.lastChild)}(),a(n)}(e.textContent)}(n)}function d(e){let n=e.target;n.textContent="",n.removeEventListener("click",d);let t=document.createElement("div");n.appendChild(t);let r=document.createElement("input");r.id="project-input";let o=document.createElement("a");o.textContent="Add";let i=document.createElement("a");i.textContent="Cancel";let a=[r,o,i];for(let e of a)t.appendChild(e);o.addEventListener("click",p),document.addEventListener("keypress",f),i.addEventListener("click",g)}function f(e){if("Enter"===e.key){let e=document.getElementsByClassName("add-project")[0];""!==e.firstChild.firstChild.value?(h(e.firstChild.firstChild.value),b(e),document.removeEventListener("keypress",f)):u()}}function p(e){let n=e.target.parentElement.firstChild.value;""!==n?(h(n),b(e.target.parentElement.parentElement)):u()}function u(){let e=document.getElementById("project-input");e.classList.add("failed"),e.placeholder="Please add title"}function h(e){let n=new l(e),t=localStorage.getItem("projectList");t=JSON.parse(t),t.push(n),window.localStorage.setItem("projectList",JSON.stringify(t)),m(n)}function m(e){let n=document.createElement("p");n.textContent=e.title;let t=document.getElementsByClassName("project-list")[0];n.textContent=e.title,t.appendChild(n)}function g(e){b(e.target.parentElement.parentElement)}function b(e){for(;e.firstChild;)e.removeChild(e.lastChild);e.textContent="Add Project +",c()}!function(){if(localStorage.length>0)!function(){let e=JSON.parse(localStorage.projectList);for(let n of e)m(n)}();else{let e=[];localStorage.setItem("projectList",e),h("Work"),h("Home"),h("Health")}}(),c(),function(e,n,t,r){let o=new i("Run","Blarg","2005");e.tasks.push(o);let l=JSON.parse(localStorage.projectList);l=l.map((n=>n.title===e.title?e:n)),window.localStorage.setItem("projectList",JSON.stringify(l)),a(e)}(JSON.parse(localStorage.projectList)[0])})()})();