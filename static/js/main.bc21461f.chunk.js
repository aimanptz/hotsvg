(this.webpackJsonphotsvg=this.webpackJsonphotsvg||[]).push([[0],[,,,,,,,,,function(e,t){},,,,,,,,,,,,,function(e,t){},,,function(e,t,n){e.exports={search:"search-input_search__lj75E"}},,,,,function(e,t,n){e.exports={modalWrapper:"modal_modalWrapper__r3RLO"}},,,,function(e,t,n){e.exports=n(53)},,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),l=n(10),c=n.n(l),s=n(2),o=n(14),u=(n(43),n(12)),d=n(19),f=n(24);!function(e){e[e.updateSpriteFilesStart=0]="updateSpriteFilesStart",e[e.updateSpriteFilesSuccess=1]="updateSpriteFilesSuccess",e[e.updateSpriteFilesFail=2]="updateSpriteFilesFail",e[e.updateRejectedFiles=3]="updateRejectedFiles",e[e.deleteUploadedData=4]="deleteUploadedData",e[e.deleteUploadedFile=5]="deleteUploadedFile"}(a||(a={}));var p=a;function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h,b=function(e,t){switch(t.type){case p.updateSpriteFilesStart:return v({},e,{loading:!0,error:""});case p.updateSpriteFilesSuccess:return{svgArray:[].concat(Object(d.a)(e.svgArray),Object(d.a)(t.payload)),loading:!1,error:""};case p.updateSpriteFilesFail:return v({},e,{loading:!1,error:t.payload});case p.deleteUploadedData:return y;default:return e}},g=function(e,t){switch(t.type){case p.updateRejectedFiles:return t.payload;default:return e}},y={svgArray:[],loading:!1,error:""},E={generatedFiles:y,rejectedFiles:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return{generatedFiles:b(e.generatedFiles,t),rejectedFiles:g(e.rejectedFiles,t)}},w=Object(u.b)(j),F=(n(44),n(9),n(22),n(5)),O=function e(t,n,a){Object(F.a)(this,e),this.id=void 0,this.title=void 0,this.viewBox=void 0,this.id=t,this.title=n,this.viewBox=a},S=function e(t,n,a,r,i){Object(F.a)(this,e),this.src=void 0,this.id=void 0,this.title=void 0,this.data=void 0,this.src=t,this.title=n,this.id=a,this.data={name:r,lastModified:i}},x=function e(t,n,a,r){Object(F.a)(this,e),this.type=void 0,this.icon=void 0,this.id=void 0,this.title=void 0,this.data=void 0,this.type=D.icon,this.icon=t,this.id=n,this.title=a,this.data={name:r.name,lastModified:r.lastModified}};!function(e){e[e.icon=0]="icon",e[e.sprite=1]="sprite"}(h||(h={}));var N,D=h;!function(e){e[e.load=0]="load",e[e.parse=1]="parse"}(N||(N={}));var k=function e(t,n){Object(F.a)(this,e),this.file=t,this.errorType=n};function _(e,t,n){var a=(new DOMParser).parseFromString(t,"text/xml").documentElement;n&&a.setAttribute("class",n),e.appendChild(a)}var L={symbolId:/id=["'](.*?)["']/i,symbolTitle:/<title>(.*?)<\/title>/i,symbolViewBox:/viewBox=["'](.*?)["']/i,symbol:/<symbol[\s\S]*?<\/symbol>/gim,svg:/<svg[\s\S]*?<\/svg>/gim,fileTitle:/\.svg$/i};function P(e){var t=e.src,n=e.id,a=e.title,r=e.data;return function(e,t,n,a){var r=(i=e,i.match(L.symbol));var i;return r?(_(document.body,e),{type:D.sprite,id:t,title:n,data:{name:a.name,lastModified:a.lastModified},symbols:r.map((function(e){return new O(l(e,L.symbolId),l(e,L.symbolTitle),l(e,L.symbolViewBox))}))}):null;function l(e,t){var n=e.match(t);return n?n[1]:""}}(t,n,a,r)||function(e,t,n,a){var r=e.match(L.svg);return r&&new x(r[0],t,n,a)}(t,n,a,r)}var T=n(8),A=n.n(T),M=n(16),B=function(){var e=Object(M.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return t=e.sent,e.abrupt("return",R(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(M.a)(A.a.mark((function e(){var t,n,a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(e){return fetch(e).then((function(e){return e.text()})).then((function(e){return n.push(e)})).catch((function(t){return a.push(new k(e,N.load))}))},"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/sprites/regular.svg",t="https://s.cdpn.io/3/kiwi1.svg",n=[],a=[],e.next=7,r("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/sprites/regular.svg");case 7:return e.next=9,r(t);case 9:return e.abrupt("return",{loadedFiles:n,rejectedFiles:a});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function R(e){var t=e.loadedFiles,n=e.rejectedFiles;return{loadedFiles:t.map((function(e,t){var n="test-file #".concat(1+t);return new S(e,n,t,n,(new Date).getDate())})),rejectedFiles:n}}var U=function(e){return e.generatedFiles.svgArray},I=function(e){return e.generatedFiles.svgArray.map((function(e){return{title:e.title,id:e.id}}))};var V=function(e){var t=U(w.getState());return e.filter((function(e){return!t.some((function(t){return t.data.name===e.data.name&&t.data.lastModified===e.data.lastModified}))}))},H=function(){return{type:p.updateSpriteFilesStart}},J=function(e){return{type:p.updateSpriteFilesSuccess,payload:e}},W=function(e){return function(){e(H()),B().then((function(t){var n,a=[];t.loadedFiles.forEach((function(e){var n=P(e);n?a.push(n):t.rejectedFiles.push(new k(e.title,N.parse))})),e(J(a)),t.rejectedFiles.length&&e((n=t.rejectedFiles,{type:p.updateRejectedFiles,payload:n}))})).catch((function(e){return alert(e)}))}},z=function(e){return function(t){var n;e(H()),(n=t,Promise.all(n.map((function(e){return new Promise((function(t){var n=new FileReader;n.readAsText(e,"UTF-8"),n.onload=function(){return t(new S(n.result,(i=e.name,l=L.fileTitle,i.replace(l,"")),(a=e.lastModified,r=e.size,(a+r)%1e5),e.name,e.lastModified));var a,r,i,l}}))})))).then((function(t){var n=V(t);if(!n.length)throw Error("All files were uploaded earlier(No duplicated files, please ;))");n.length<t.length&&console.log("Some files were uploaded earlier(No duplicated files, please) ;)");var a=[];n.forEach((function(e){var t=P(e);if(!t)throw Error("Unable to parse the file");a.push(t)})),e(J(a))})).catch((function(t){return e(function(e){return{type:p.updateSpriteFilesFail,payload:e}}(t))}))}},$=Object(s.b)(null,(function(e){return{loadData:z(e)}}))((function(e){Object(r.useEffect)((function(){return window.addEventListener("drop",n,!1),window.addEventListener("dragover",t,!1),function(){window.removeEventListener("drop",n,!1),window.removeEventListener("dragover",t,!1)}}),[]);var t=function(e){e.preventDefault()},n=function(t){t.preventDefault(),t.dataTransfer&&t.dataTransfer.files&&e.loadData(Array.from(t.dataTransfer.files).filter((function(e){return"image/svg+xml"===e.type})))};return i.a.createElement("label",{className:"btn-solid header__input"},i.a.createElement("span",null,"Pick or drop"),i.a.createElement("input",{type:"file",accept:".svg",multiple:!0,hidden:!0,onChange:function(t){var n=t.target.files;n&&e.loadData(Array.from(n))},onClick:function(e){return e.target.value=""}}))})),q=(n(46),{onDeleteData:function(){return{type:p.deleteUploadedData}}}),G=Object(s.b)((function(e){return{spriteList:U(e)}}),q)((function(e){var t=e.spriteList,n=e.onDeleteData;return t.length?i.a.createElement("button",{type:"button",className:"btn-text btn-cancel",onClick:n},"Clear"):null})),K=(n(47),function(){return i.a.createElement("header",{className:"header"},i.a.createElement($,null),i.a.createElement(G,null))}),Q=n(31),X=(n(48),function(e){var t=e.symbol,n=t.id,a=t.viewBox,r=t.title;return i.a.createElement("li",{className:"sprite-list__item"},i.a.createElement("svg",{viewBox:a,className:"icon"},i.a.createElement("use",{xlinkHref:"#".concat(n)})),i.a.createElement("div",{className:"icon-info"},i.a.createElement("p",{className:"icon-name"},n),i.a.createElement("p",{className:"icon-title"},r)))}),Y=(n(49),function(e){var t=e.symbolList,n=e.id,a=e.title,r=e.regExp,l=t.filter((function(e){return-1!==e.id.search(r)})).map((function(e,t){return i.a.createElement(X,{key:t+1,symbol:e})}));return l.length?i.a.createElement("ul",{className:"sprite-list",id:"".concat(n)},i.a.createElement("li",{key:0,className:"sprite-list__title"},i.a.createElement("h3",null,a)),l):null}),Z=(n(50),function(e){var t=e.icon,n=e.id,a=e.title,l=Object(r.useRef)(null);return Object(r.useEffect)((function(){l&&l.current&&_(l.current,t,"icon")}),[]),i.a.createElement("ul",{className:"svg-list",id:"".concat(n),ref:l},i.a.createElement("li",{key:0,className:"svg-list__title"},i.a.createElement("h3",null,a)))}),ee=n(25),te=n.n(ee),ne=Object(s.b)((function(e){return{spriteList:U(e)}}),(function(e){return{loadData:z(e)}}))((function(e){var t=e.value,n=e.onChangeFilter;return i.a.createElement("input",{placeholder:"Search",className:te.a.search,type:"text",onChange:function(e){n(e.target.value)},value:t})})),ae=Object(s.b)((function(e){return{uploadedList:U(e)}}),(function(e){return{loadTestData:W(e)}}))((function(e){var t=Object(r.useState)(""),n=Object(Q.a)(t,2),a=n[0],l=n[1];Object(r.useEffect)((function(){e.uploadedList.length||e.loadTestData()}),[]);var c=new RegExp(a,"gi"),s=e.uploadedList.map((function(e){var t=e.id,n=e.title;switch(e.type){case D.sprite:return i.a.createElement(Y,{symbolList:e.symbols,id:t,title:n,key:t,regExp:c});case D.icon:return-1===n.search(c)?null:i.a.createElement(Z,{icon:e.icon,id:t,title:n,key:t});default:return null}}));return i.a.createElement(i.a.Fragment,null,!e.uploadedList.length||i.a.createElement(ne,{value:a,onChangeFilter:function(e){l(e)}}),i.a.createElement("section",{className:"content"},s))})),re=n(26);n(52);var ie=Object(s.b)((function(e){return{spriteNames:I(e)}}))((function(e){var t=e.spriteNames;return i.a.createElement("nav",{className:"nav"},i.a.createElement("ul",{className:"nav-list"},t.map((function(e){var t=e.title,n=e.id;return i.a.createElement("li",{key:n,className:"nav-list__item"},i.a.createElement(re.HashLink,{to:"#".concat(n),scroll:function(e){return e.scrollIntoView({behavior:"smooth"})},className:"nav-list__link"},t))}))))})),le=n(28),ce=n(32),se=n(29),oe=n(33),ue=(n(30),function(e){function t(){return Object(F.a)(this,t),Object(ce.a)(this,Object(se.a)(t).apply(this,arguments))}return Object(oe.a)(t,e),Object(le.a)(t,[{key:"render",value:function(){return null}}]),t}(r.Component)),de=Object(s.b)((function(e){return{rejectedFiles:(t=e,t.rejectedFiles)};var t}))(ue),fe=function(){return i.a.createElement("div",{className:"app"},i.a.createElement(K,null),i.a.createElement("main",{className:"main"},i.a.createElement("aside",{className:"sidebar"},i.a.createElement(ie,null)),i.a.createElement("section",{className:"content-wrapper"},i.a.createElement(ae,null))),i.a.createElement(de,null))};c.a.render(i.a.createElement(s.a,{store:w},i.a.createElement(o.BrowserRouter,null,i.a.createElement(fe,null))),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.bc21461f.chunk.js.map