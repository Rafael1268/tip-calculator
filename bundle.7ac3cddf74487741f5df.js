(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap);"]),i.push([n.id,":root {\n  --main-cyan: hsl(172, 67%, 45%);\n  --darkest-cyan: hsl(183, 100%, 15%);\n  --dark-cyan: hsl(186, 14%, 43%);\n  --normal-cyan: hsl(184, 14%, 56%);\n  --light-cyan: hsl(185, 41%, 84%);\n  --lighest-cyan: hsl(189, 41%, 97%);\n  --white: hsl(0, 0%, 100%);\n}\n\n* {\n  font-family: 'Space Mono', monospace;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--light-cyan);\n}\n\nh4 {\n  position: absolute;\n  color: red;\n  margin-left: 2px;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card {\n  background-color: var(--white);\n  border-radius: 40px;\n  padding: 30px;\n  width: max-content;\n  display: grid;\n  grid-template-columns: 400px 400px;\n  grid-template-rows: 400px;\n  gap: 30px;\n}\n\n/* Hide number input arrows */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n/* Left side of card */\n.leftSide {\n  padding: 15px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.leftSide label,\n.leftSide h6 {\n  color: var(--darkest-cyan);\n  font-size: 16px;\n}\n\n.leftSide i {\n  position: absolute;\n  font-size: 25px;\n  color: var(--dark-cyan);\n  margin-top: 35px;\n  margin-left: 15px;\n}\n\n#tipAmount div {\n  display: grid;\n  grid-template: 1fr 1fr / 1fr 1fr 1fr;\n  gap: 20px;\n}\n\n.tipBtn,\n#tipInput {\n  border-radius: 10px;\n  border: none;\n  font-size: 24px;\n  padding: 8px 0;\n  width: 120px;\n  text-align: center;\n}\n\n.tipBtn {\n  background-color: var(--darkest-cyan);\n  color: var(--light-cyan)\n}\n\n.selectedBtn {\n  background-color: var(--main-cyan);\n  color: var(--darkest-cyan);\n}\n\n#tipInput {\n  background-color: var(--light-cyan);\n  color: var(--darkest-cyan);\n}\n\n#billInput,\n#peopleInput {\n  background-color: var(--light-cyan);\n  border: none;\n  font-size: 24px;\n  text-align: end;\n  padding: 8px 12px;\n  padding-left: 50px;\n  width: 100%;\n}\n\n/* Right side of card */\n.rightSide {\n  background-color: var(--darkest-cyan);\n  border-radius: 25px;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n\n#tipTotal,\n#personTotal {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 35px;\n}\n\n#tipTotal h6,\n#personTotal h6 {\n  color: var(--white);\n  font-size: 20px;\n  margin-bottom: -5px;\n}\n\n#tipTotal p,\n#personTotal p {\n  color: var(--light-cyan);\n}\n\n#tipPerson,\n#totalPerson {\n  color: var(--main-cyan);\n  font-size: 40px;\n  max-width: 180px;\n  overflow: scroll;\n}\n\n#resetBtn {\n  background-color: var(--main-cyan);\n  border-radius: 8px;\n  border: none;\n  color: var(--darkest-cyan);\n  font-size: 24px;\n  margin-top: 80px;\n  padding: 10px 0;\n  width: 100%\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAEA;EACE,+BAA+B;EAC/B,mCAAmC;EACnC,+BAA+B;EAC/B,iCAAiC;EACjC,gCAAgC;EAChC,kCAAkC;EAClC,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;EACpC,sBAAsB;EACtB,8BAA8B;EAC9B,2BAA2B;EAC3B,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,kCAAkC;EAClC,yBAAyB;EACzB,SAAS;AACX;;AAEA,6BAA6B;AAC7B;;EAEE,wBAAwB;EACxB,SAAS;AACX;;AAEA;EACE,0BAA0B;AAC5B;;AAEA,sBAAsB;AACtB;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;;EAEE,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,SAAS;AACX;;AAEA;;EAEE,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,cAAc;EACd,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;EACrC;AACF;;AAEA;EACE,kCAAkC;EAClC,0BAA0B;AAC5B;;AAEA;EACE,mCAAmC;EACnC,0BAA0B;AAC5B;;AAEA;;EAEE,mCAAmC;EACnC,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;AACb;;AAEA,uBAAuB;AACvB;EACE,qCAAqC;EACrC,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;;EAEE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;;EAEE,mBAAmB;EACnB,eAAe;EACf,mBAAmB;AACrB;;AAEA;;EAEE,wBAAwB;AAC1B;;AAEA;;EAEE,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,kBAAkB;EAClB,YAAY;EACZ,0BAA0B;EAC1B,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf;AACF",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');\n\n:root {\n  --main-cyan: hsl(172, 67%, 45%);\n  --darkest-cyan: hsl(183, 100%, 15%);\n  --dark-cyan: hsl(186, 14%, 43%);\n  --normal-cyan: hsl(184, 14%, 56%);\n  --light-cyan: hsl(185, 41%, 84%);\n  --lighest-cyan: hsl(189, 41%, 97%);\n  --white: hsl(0, 0%, 100%);\n}\n\n* {\n  font-family: 'Space Mono', monospace;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--light-cyan);\n}\n\nh4 {\n  position: absolute;\n  color: red;\n  margin-left: 2px;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card {\n  background-color: var(--white);\n  border-radius: 40px;\n  padding: 30px;\n  width: max-content;\n  display: grid;\n  grid-template-columns: 400px 400px;\n  grid-template-rows: 400px;\n  gap: 30px;\n}\n\n/* Hide number input arrows */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n/* Left side of card */\n.leftSide {\n  padding: 15px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.leftSide label,\n.leftSide h6 {\n  color: var(--darkest-cyan);\n  font-size: 16px;\n}\n\n.leftSide i {\n  position: absolute;\n  font-size: 25px;\n  color: var(--dark-cyan);\n  margin-top: 35px;\n  margin-left: 15px;\n}\n\n#tipAmount div {\n  display: grid;\n  grid-template: 1fr 1fr / 1fr 1fr 1fr;\n  gap: 20px;\n}\n\n.tipBtn,\n#tipInput {\n  border-radius: 10px;\n  border: none;\n  font-size: 24px;\n  padding: 8px 0;\n  width: 120px;\n  text-align: center;\n}\n\n.tipBtn {\n  background-color: var(--darkest-cyan);\n  color: var(--light-cyan)\n}\n\n.selectedBtn {\n  background-color: var(--main-cyan);\n  color: var(--darkest-cyan);\n}\n\n#tipInput {\n  background-color: var(--light-cyan);\n  color: var(--darkest-cyan);\n}\n\n#billInput,\n#peopleInput {\n  background-color: var(--light-cyan);\n  border: none;\n  font-size: 24px;\n  text-align: end;\n  padding: 8px 12px;\n  padding-left: 50px;\n  width: 100%;\n}\n\n/* Right side of card */\n.rightSide {\n  background-color: var(--darkest-cyan);\n  border-radius: 25px;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n}\n\n#tipTotal,\n#personTotal {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 35px;\n}\n\n#tipTotal h6,\n#personTotal h6 {\n  color: var(--white);\n  font-size: 20px;\n  margin-bottom: -5px;\n}\n\n#tipTotal p,\n#personTotal p {\n  color: var(--light-cyan);\n}\n\n#tipPerson,\n#totalPerson {\n  color: var(--main-cyan);\n  font-size: 40px;\n  max-width: 180px;\n  overflow: scroll;\n}\n\n#resetBtn {\n  background-color: var(--main-cyan);\n  border-radius: 8px;\n  border: none;\n  color: var(--darkest-cyan);\n  font-size: 24px;\n  margin-top: 80px;\n  padding: 10px 0;\n  width: 100%\n}"],sourceRoot:""}]);const A=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],A=0;A<n.length;A++){var c=n[A],s=r.base?c[0]+r.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var d=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(u);else{var E=o(u,r);r.byIndex=A,e.splice(A,0,{identifier:p,updater:E,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var c=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),A=t(565),c=t.n(A),s=t(216),l=t.n(s),p=t(589),d=t.n(p),u=t(426),E={};E.styleTagTransform=d(),E.setAttributes=c(),E.insert=i().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=l(),e()(u.Z,E),u.Z&&u.Z.locals&&u.Z.locals;const C=document.querySelector("#billInput"),f=document.querySelectorAll("button.tipBtn"),B=document.querySelector("#tipInput"),m=document.querySelector("#peopleInput"),g=document.querySelector("#resetBtn");let x=5;function v(n){"Backspace"!==n.key&&isNaN(n.key)&&n.preventDefault()}function y(){const n=document.querySelector("#tipPerson"),e=document.querySelector("#totalPerson"),t=document.querySelector("#billError"),r=document.querySelector("#peopleError");return""===C.value?(n.innerText="$0.00",e.innerText="$0.00",""===m.value?(n.innerText="$0.00",e.innerText="$0.00",r.innerText="Field cannot be empty",t.innerText="Field cannot be empty"):(r.innerText="",t.innerText="Field cannot be empty")):""===m.value?(n.innerText="$0.00",e.innerText="$0.00",t.innerText="",r.innerText="Field cannot be empty"):(t.innerText="",r.innerText="",void function(){const n=function(){const n=C.value*(x/100)/m.value;return Math.round(100*n)/100}(),e=function(){const n=(Number(C.value)+C.value*(x/100))/m.value;return Math.round(100*n)/100}(),t=document.querySelector("#tipPerson"),r=document.querySelector("#totalPerson");t.innerText=`$${n}`,r.innerText=`$${e}`}())}function b(n){"INPUT"===n.target.nodeName?(f.forEach((n=>n.classList.remove("selectedBtn"))),x=Number(B.value)):(f.forEach((n=>n.classList.remove("selectedBtn"))),n.target.classList.add("selectedBtn"),x=Number(n.target.id)),y()}C.addEventListener("keydown",(()=>v(event))),C.addEventListener("input",(()=>y())),f.forEach((n=>n.addEventListener("click",(()=>b(event))))),B.addEventListener("keydown",(()=>v(event))),B.addEventListener("input",(()=>b(event))),m.addEventListener("keydown",(()=>v(event))),m.addEventListener("input",(()=>y())),g.addEventListener("click",(()=>(C.value="",B.value="",m.value="",void y()))),y()})()})();
//# sourceMappingURL=bundle.7ac3cddf74487741f5df.js.map