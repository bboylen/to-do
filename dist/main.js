(()=>{"use strict";var n={434:(n,t,e)=>{e.d(t,{Z:()=>i});var r=e(645),o=e.n(r)()((function(n){return n[1]}));o.push([n.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n",""]);const i=o},772:(n,t,e)=>{e.d(t,{Z:()=>m});var r=e(645),o=e.n(r),i=e(667),a=e.n(i),c=e(30),l=e(743),s=e(594),d=o()((function(n){return n[1]})),u=a()(c),f=a()(l),p=a()(s);d.push([n.id,"html {\n  height: 100%;\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  display: block !important;\n  height: 100%;\n  overflow: hidden;\n}\n\n/* header */\n\n#page-header {\n  height: 3rem;\n  background-color: #e85a4f;\n}\n\n#page-header .container {\n  width: 12rem;\n  height: 100%;\n  margin-left: 4rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#project-tab-toggle {\n  background-image: url("+u+");\n  background-size: contain;\n  width: 30px;\n  height: 30px;\n  display: none;\n}\n\n#notepad-image {\n  background-image: url("+f+');\n  background-size: contain;\n  width: 40px;\n  height: 40px;\n}\n\n#page-header h1 {\n  font-size: 36px;\n  font-family: "Montserrat", sans-serif;\n  font-weight: 700;\n}\n\n/* main */\n\n.main-content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  position: relative;\n  background-color: #fffff2;\n}\n\n@media only screen and (max-width: 768px) {\n  #page-header .container {\n    width: 17.25rem;\n    margin-left: 0.75rem;\n  }\n\n  #project-tab-toggle {\n    display: block;\n    margin-right: 2.75rem;\n  }\n\n  #project-tab-toggle:hover {\n    cursor: pointer;\n  }\n  .side-info {\n    display: none;\n  }\n}\n\n@media only screen and (max-height: 400px) {\n  .project-list {\n    height: 150px;\n  }\n}\n/* side-info */\n\n.side-info.activated {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n  }\n\n.side-info {\n  width: 300px;\n  background-color: #ffc7bd;\n  z-index: 2;\n}\n\n.side-content {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 15%;\n  text-align: left;\n  font-family: "Montserrat", sans-serif;\n}\n\n.side-content h2 {\n  font-size: 30px;\n  font-weight: 700;\n}\n\n.project-list {\n  max-height: 400px;\n  margin-top: 1.5rem;\n  font-size: 20px;\n  overflow-y: auto;\n}\n\n.project-list p {\n  margin-bottom: 1rem;\n}\n\n.project-list p:hover {\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.project-list .selected {\n  color: #e85a4f;\n  font-weight: 700;\n}\n\n/* add project */ \n\n.add-project {\n  font-size: 20px;\n  margin-top: 10px;\n}\n\n.add-project:hover {\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.add-project div {\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  border-radius: 5px;\n  background-color: white;\n  color: white;\n  font-weight: 600;\n}\n\n.add-project a, .add-project input {\n  display: inline-block;\n  font-size: 16px;\n  padding: 5px 3px 5px 3px;\n\n}\n\n.add-project a:nth-child(2) {\n  background-color:#4fa300;\n}\n\n.add-project a:nth-child(2):hover {\n  background-color:#008234;\n}\n\n.add-project a:nth-child(3) {\n  background-color: #e85a4f;\n  border-radius: 0 5px 5px 0;\n}\n\n.add-project a:nth-child(3):hover {\n  background-color: #ff0000;\n}\n\n.add-project input {\n  width: 58%;\n  border: none;\n}\n\n#project-input.failed {\n  border: 1px solid red;\n}\n/* main-content */\n\n.content {\n  flex-grow: 3;\n  flex-shrink: 10;\n  background-color: #fffff2;\n}\n\n.content-container {\n  width: 85%;\n  height: 60%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2.5rem;\n  font-family: "Montserrat", sans-serif;\n}\n\n.list-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#project-selected-header {\n  font-weight: 600;\n  font-size: 32px;\n}\n\n.list-items {\n  width: 85%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 1rem;\n}\n\n.list-items div.item {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  padding: .125rem 0 .25rem 0;\n  margin: .25rem 0 .25rem 0;\n  border-bottom: 2px solid #ffc7bd;\n}\n\n.date-trash-container {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  padding-right: 5px;\n}\n\n.date-trash-container .date {\n  margin-right: 10px;\n}\n\n.date-trash-container .delete-task {\n  width: 14px;\n  height: 14px;\n  margin-top: 0px;\n  background-image: url('+p+');\n  background-size: contain;\n  opacity: .3;\n  z-index: 1;\n}\n\n.date-trash-container .delete-task:hover {\n  opacity: .6;\n  cursor: pointer;\n}\n.list-items .item.task-button {\n  border: none;\n}\n\n.task-button button {\n  width: 100%;\n  padding: 0;\n  text-align: left;\n  border: none;\n  font-family: "Montserrat", sans-serif;\n  background-color: #fffff2;\n  color: #999999;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.task-button button:hover {\n  cursor: pointer;\n  color: #e85a4f;\n}\n\n.create-task-div {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-around;\n  height: 100px;\n  border: 2px solid #999999;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.create-task-div input {\n  display: block;\n  font-size: 16px;\n  background-color: #fffff2;\n}\n\n#task-title {\n  width: 90%;\n  margin-left: 10px;\n  border: none;\n}\n\n#task-date {\n  width: 88px;\n  margin-left: 10px;\n  border: 2px solid #ffc7bd;\n}\n\n#form-submit-div {\n  display: flex;\n  width: 250px;\n  margin-top: 10px;\n  justify-content: space-between;\n}\n\n#form-submit-div * {\n  width: 116px;\n  padding: 8px;\n  border: none;\n  color: white;\n  font-weight: 500;\n  font-size: 16px;\n  border-radius: 5%;\n  text-align: center;\n}\n\n#form-submit-button {\n  background-color: #4fa300;\n}\n\n#form-cancel-button {\n  background-color: #e85a4f;\n}\n',""]);const m=d},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,t,e)=>{var r,o=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),i=[];function a(n){for(var t=-1,e=0;e<i.length;e++)if(i[e].identifier===n){t=e;break}return t}function c(n,t){for(var e={},r=[],o=0;o<n.length;o++){var c=n[o],l=t.base?c[0]+t.base:c[0],s=e[l]||0,d="".concat(l," ").concat(s);e[l]=s+1;var u=a(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:h(f,t),references:1}),r.push(d)}return r}function l(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=e.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,d=(s=[],function(n,t){return s[n]=t,s.filter(Boolean).join("\n")});function u(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function f(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(n,t){var e,r,o;if(t.singleton){var i=m++;e=p||(p=l(t)),r=u.bind(null,e,i,!1),o=u.bind(null,e,i,!0)}else e=l(t),r=f.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var e=c(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=a(e[r]);i[o].references--}for(var l=c(n,t),s=0;s<e.length;s++){var d=a(e[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}e=l}}}},30:(n,t,e)=>{n.exports=e.p+"976b5194516ca86106ce.png"},743:(n,t,e)=>{n.exports=e.p+"3995d5c46656b84b29b4.png"},594:(n,t,e)=>{n.exports=e.p+"4f807bf657e18a2ba123.png"}},t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=e(379),t=e.n(n),r=e(434);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var o=e(772);function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var a=function n(t,e){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.title=t,this.date=e};function c(n,t,e){var r=new a(t,e);n.tasks.push(r);var o=JSON.parse(localStorage.projectList);o=o.map((function(t){return t.title===n.title?n:t})),window.localStorage.setItem("projectList",JSON.stringify(o))}function l(n){var t=JSON.parse(localStorage.projectList).filter((function(t){return t.title===n}))[0];!function(){for(var n=document.getElementsByClassName("list-items")[0];n.firstChild;)n.removeChild(n.lastChild)}(),function(n){var t,e=function(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return c=n.done,n},e:function(n){l=!0,a=n},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw a}}}}(n.tasks);try{for(e.s();!(t=e.n()).done;)s(t.value)}catch(n){e.e(n)}finally{e.f()}u()}(t)}function s(n){var t=document.getElementsByClassName("list-items")[0],e=document.createElement("div");e.classList.add("item");var r=document.createElement("div");r.classList.add("title");var o=document.createElement("div");o.classList.add("date-trash-container"),t.appendChild(e),e.appendChild(r),e.appendChild(o);var i=document.createElement("div");i.classList.add("date");var a=document.createElement("div");a.classList.add("delete-task"),o.appendChild(i),o.appendChild(a),r.textContent=n.title,i.textContent=n.date,a.addEventListener("click",d)}function d(n){var t=n.target.parentElement.parentElement;!function(n){var t=n.firstChild.textContent,e=L(),r=JSON.parse(localStorage.projectList);e.tasks=e.tasks.filter((function(n){return n.title!==t}));var o=r.map((function(n){return n.title===e.title?e:n}));localStorage.setItem("projectList",JSON.stringify(o))}(t),function(n){n.remove()}(t)}function u(){var n=document.getElementsByClassName("list-items")[0],t=document.createElement("div");t.classList.add("item","task-button"),n.appendChild(t);var e=document.createElement("button");t.appendChild(e),e.textContent="Add Task +",e.addEventListener("click",f)}function f(){var n=document.getElementsByClassName("list-items")[0];n.removeChild(n.lastChild),function(){var n=document.createElement("form");n.classList.add("item"),n.id="task-form";var t=document.createElement("div");t.classList.add("create-task-div"),n.appendChild(t),document.getElementsByClassName("list-items")[0].appendChild(n);var e=document.createElement("input");t.appendChild(e),e.id="task-title",e.placeholder="Task title here:";var r=document.createElement("input");t.appendChild(r),r.id="task-date",r.placeholder="Date:",r.setAttribute("data-provide","datepicker");var o=document.createElement("div");o.id="form-submit-div",n.appendChild(o);var i=document.createElement("input");i.id="form-submit-button",i.type="submit",i.value="Create Task",o.appendChild(i);var l=document.createElement("button");l.id="form-cancel-button",l.textContent="Cancel",o.appendChild(l),l.addEventListener("click",p),n.addEventListener("submit",(function(n){var t;n.preventDefault(),t=function(n){var t=n[0].value,e=n[1].value;return new a(t,e)}(n.target),c(L(),t.title,t.date),document.getElementById("task-form").remove(),s(t),u()}))}()}function p(){document.getElementById("task-form").remove(),u()}function m(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var h=function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.title=t,this.tasks=[]};function g(){Array.from(document.getElementsByClassName("project-list")[0].children).forEach((function(n){n.addEventListener("click",v)})),document.getElementsByClassName("add-project")[0].addEventListener("click",y)}function v(n){b(n.target)}function b(n){!function(n){n.classList.add("selected");var t,e=function(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return m(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return a=n.done,n},e:function(n){c=!0,i=n},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw i}}}}(Array.from(document.getElementsByClassName("project-list")[0].children).filter((function(t){return t!=n})));try{for(e.s();!(t=e.n()).done;)t.value.classList.remove("selected")}catch(n){e.e(n)}finally{e.f()}}(n),function(n){document.getElementById("project-selected-header").textContent=n.textContent,l(n.textContent)}(n)}function y(n){var t=n.target;t.textContent="",t.removeEventListener("click",y);var e=document.createElement("div");t.appendChild(e);var r=document.createElement("input");r.id="project-input";var o=document.createElement("a");o.textContent="Add";var i=document.createElement("a");i.textContent="Cancel";for(var a=0,c=[r,o,i];a<c.length;a++){var l=c[a];e.appendChild(l)}o.addEventListener("click",w),document.addEventListener("keypress",x),i.addEventListener("click",j)}function x(n){if("Enter"===n.key){var t=document.getElementsByClassName("add-project")[0];""!==t.firstChild.firstChild.value?(k(t.firstChild.firstChild.value),S(t),g(),document.removeEventListener("keypress",x)):C()}}function w(n){var t=n.target.parentElement.firstChild.value;""!==t?(k(t),S(n.target.parentElement.parentElement),g()):C()}function C(){var n=document.getElementById("project-input");n.classList.add("failed"),n.placeholder="Please add title"}function k(n){var t=new h(n),e=localStorage.getItem("projectList");(e=e?JSON.parse(e):[]).push(t),window.localStorage.setItem("projectList",JSON.stringify(e)),E(t)}function E(n){var t=document.createElement("p");t.textContent=n.title;var e=document.getElementsByClassName("project-list")[0];t.textContent=n.title,e.appendChild(t)}function j(n){S(n.target.parentElement.parentElement),g()}function S(n){for(;n.firstChild;)n.removeChild(n.lastChild);n.textContent="Add Project +"}function L(){var n=document.getElementById("project-selected-header").textContent;return JSON.parse(localStorage.projectList).filter((function(t){return t.title===n}))[0]}function N(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function A(){b(document.getElementsByClassName("project-list")[0].firstElementChild)}function B(){g(),document.getElementById("project-tab-toggle").addEventListener("click",O),window.addEventListener("resize",I)}function O(){var n=document.getElementsByClassName("side-info")[0];n.classList.contains("activated")?n.classList.remove("activated"):n.classList.add("activated")}function I(){var n=document.getElementsByClassName("side-info")[0];window.innerWidth>768&&n.classList.remove("activated")}var T,z,M;localStorage.length>0?(function(){var n,t=function(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return N(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?N(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return a=n.done,n},e:function(n){c=!0,i=n},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw i}}}}(JSON.parse(localStorage.projectList));try{for(t.s();!(n=t.n()).done;)E(n.value)}catch(n){t.e(n)}finally{t.f()}}(),A(),B()):(localStorage.setItem("projectList",[]),k("Work"),k("Home"),k("Health"),c(T=JSON.parse(localStorage.projectList).filter((function(n){return"Work"===n.title}))[0],"Code","12/20/20"),c(T,"Call John","01/04/21"),c(T,"Finish Drawings","01/08/21"),c(z=JSON.parse(localStorage.projectList).filter((function(n){return"Home"===n.title}))[0],"Clean bathroom","01/05/21"),c(z,"Buy decorations","01/06/21"),c(z,"Meal Prep","01/03/21"),c(M=JSON.parse(localStorage.projectList).filter((function(n){return"Health"===n.title}))[0],"Lift Weights","01/05/21"),c(M,"Yoga","01/04/21"),c(M,"Rock Climb","01/07/21"),A(),B())})()})();