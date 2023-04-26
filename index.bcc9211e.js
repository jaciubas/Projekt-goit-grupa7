function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=e.parcelRequire00e6;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},e.parcelRequire00e6=s);const a=document.querySelector(".close_modal_window"),o=document.querySelector(".modal_window"),r=document.querySelector("main"),c=document.querySelector(".modal_inner");function l(){o.classList.add("is-hidden"),c.innerHTML="",document.body.classList.remove("stop-scrolling")}r.addEventListener("click",(async function(t){if(t.preventDefault(),!t.target.classList.contains("movie__image"))return;o.classList.remove("is-hidden");!async function(t){try{const e=await fetch(`https://api.themoviedb.org/3/movie/${t}?api_key=28f50cf3f177782503c21b43af04c7bc`);!async function(t){try{const{desktop:e,tablet:n,mobile:i}=`https://image.tmdb.org/t/p/original${t.poster_path}`,s=`\n      <div class="modalMarkup trailer__picture">\n         <picture>\n            <source src= ${e} media="(min-width: 1200px)">\n            <source src= ${n} media="(min-width: 768px)">\n            <source src= ${i} media="(min-width: 320px)">\n            <img src= https://image.tmdb.org/t/p/original${t.poster_path} \n            alt=${t.title} \n            id =${t.id} class="modal__img">\n        </picture>\n        <svg xmlns="http://www.w3.org/2000/svg" \n        width="70px" height="70px" \n        class="modal__svg" \n        id=${t.id}\n        viewBox="0 0 16 16">\n         <path \n         id=${t.id} d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\n         <path\n         id=${t.id} d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>\n        </svg>\n      </div>\n      <div class="modal__content-movie ">\n\n\n        <p class="modal__title">${t.title}</p>\n        <div class="modal__box">\n          <div class="film-features">\n            <p class="film-features__text">Vote / Votes</p>\n            <p class="film-features__text">Popularity</p>\n            <p class="film-features__text">Original Title</p>\n            <p class="film-features__text">Genre</p>\n          </div>\n          <div class="film-values">\n            <p class="film-values__text">\n              <span class="film-values__vote film-values__vote--color">${t.vote_average}</span>\n              <span class="film-values__slash">/</span>\n              <span class="film-values__vote film-values__votes--color">${t.vote_count}</span>\n            </p>\n            <p class="film-values__text">\n              <span class="film-value__vote">${t.popularity.toFixed(1)}</span>\n            </p>\n            <p class="film-values__text">\n              <span class="film-values__vote">${t.original_title}</span>\n            </p>\n            <p class="film-values__text">\n              <span class="film-values__vote">${t.genres[0].name}</span>\n            </p>\n          </div>\n        </div>\n        <div class="modal__description">\n          <p class="modal__about">About</p>\n          <p class="modal__text">${t.overview}</p>\n        </div>\n        <div class="modal__btn-box">\n          <button \n          class="modal__btn modal__btn--watched" \n          id="${t.id}" type="button" >Add to watched</button>\n          <button \n          class="modal__btn modal__btn--queue"\n          id="${t.id}" type="button" >Add to queue</button>\n\n        </div>\n      </div>`;c.insertAdjacentHTML("beforeend",s)}catch(t){console.log(t)}}(await e.json())}catch(t){console.log(t)}}(t.target.id),document.body.classList.add("stop-scrolling")})),a.addEventListener("click",l),document.body.addEventListener("keydown",(function(t){"Escape"===t.code&&(l(),o.removeEventListener("click",l),document.body.classList.remove("stop-scrolling"))})),document.body.addEventListener("click",(function(t){t.target===o&&(l(),document.body.classList.remove("stop-scrolling"),o.removeEventListener("click",l))}));const u=document.querySelector(".addToQueueBtn");u&&u.addEventListener("click",(t=>{const e=t.currentTarget.dataset.id;data1.setQueue(e)}));const p=document.querySelector(".addToWatchedBtn");p&&p.addEventListener("click",(t=>{const e=t.currentTarget.dataset.id;console.log(e),data1.setWatched(e)}));var f={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,f=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,s,a,o=Object.prototype.hasOwnProperty;for(s=1,a=arguments.length;s<a;s+=1)for(i in n=arguments[s])o.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),s=n(17),a=n(6);t.exports=function(t,e,n){i(t)?s(t,e,n):a(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),s=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(s(n,e.static),delete e.static),s(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var s,a;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(a=e.length,s=n;n>=0&&s<a;s+=1)if(e[s]===t)return s;return-1}},function(t,e,n){var i=n(29),s=n(30),a=n(5),o={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),s=a(t)?t(e):i(t,e);return n.innerHTML=s,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}};t.exports=o},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),s=n(7),a=n(0),o=n(1),r=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=s({init:function(t,e){this._options=a({},l,e),this._currentPage=0,this._view=new r(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),s=this._getPageIndex(n),a=this._getEdge(t);return e.leftPageNumber=a.left,e.rightPageNumber=a.right,e.prevMore=i>1,e.nextMore=i<s,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,s=this._getLastPage(),a=this._options.visiblePages,o=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(a/2),(n=(e=Math.max(t-i,1))+a-1)>s&&(e=Math.max(s-a+1,1),n=s)):(e=(o-1)*a+1,n=o*a,n=Math.min(n,s)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){o(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),t.exports=u},function(t,e,n){var i=n(0),s=n(14),a=n(4),o=n(16),r=n(2),c=n(5),l=n(3),u=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;a(t)?(t=t.split(u),l(t,(function(t){i._bindEvent(t,e,n)}))):o(t)&&(n=e,l(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(o(t))return n=e,void l(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function s(){e.apply(n,arguments),i.off(t,s,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(r(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var s=t===i.handler,a=e===i.context,o=s&&a;return o&&n._forgetContext(i.context),o}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),s=n._matchHandler(e);t=t.split(u),l(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,s):(l(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);l(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?l(t,(function(t,e){i.off(e,t)})):a(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){a(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):o(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,s;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(s=e[i]).handler.apply(s.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){var i=n(1),s=n(15);t.exports=function(t){return!i(t)&&!s(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,s=t.length;for(n=n||null;i<s&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),s=n(7),a=n(21),o=n(22),r=n(24),c=n(25),l=n(0),u=n(4),p=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],_=["prev","next"],g=s({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=l({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(h,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(h,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(_,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,s=t.rightPageNumber;for(n=i;n<=s;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==s||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();o(e,"click",(function(e){var n,i,s=a(e);r(e),(i=this._getButtonType(s))||(n=this._getPageNumber(s)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),s=n(3),a=n(23);function o(t,e,n,i){function o(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,o):"attachEvent"in t&&t.attachEvent("on"+e,o),function(t,e,n,i){var o=a(t,e),r=!1;s(o,(function(t){return t.handler!==n||(r=!0,!1)})),r||o.push({handler:n,wrappedHandler:i})}(t,e,n,o)}t.exports=function(t,e,n,a){i(e)?s(e.split(/\s+/g),(function(e){o(t,e,n,a)})):s(e,(function(e,i){o(t,i,e,n)}))}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,s=t[i];return s||(s=t[i]={}),(n=s[e])||(n=s[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var i=n(3),s=n(8),a=n(26),o=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),r=t.classList,c=[];r?i(n,(function(e){t.classList.add(e)})):((e=a(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){s(t,c)<0&&c.push(t)})),o(t,c))}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),s=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var i=n(8),s=n(3),a=n(2),o=n(4),r=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,h=/"|'/g,_=/^-?\d+\.?\d*$/,g={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],a=0,o=0;return s(e,(function(t,s){0===t.indexOf("if")?a+=1:"/if"===t?a-=1:a||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(o,s)),o=s+1)})),i.push(e.slice(o)),{exps:n,sourcesInsideIf:i}}(t,e),a=!1,o="";return s(i.exps,(function(t,e){return(a=x(t,n))&&(o=b(i.sourcesInsideIf[e],n)),!a})),o},each:function(t,e,n){var i=x(t,n),o=a(i)?"@index":"@key",c={},l="";return s(i,(function(t,i){c[o]=i,c["@this"]=t,r(n,c),l+=b(e.slice(),n)})),l},with:function(t,e,n){var s=i("as",t),a=t[s+1],o=x(t.slice(0,s),n),c={};return c[a]=o,b(e,r(n,c))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,s=[],a=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,s.push(t.slice(a,i)),a=i+n[0].length,n=e.exec(t);return s.push(t.slice(a)),s};function v(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:d.test(t)?i=t.replace(h,""):l.test(t)?i=v((n=t.split(u))[0],e)[v(n[1],e)]:p.test(t)?i=v((n=t.split(f))[0],e)[n[1]]:_.test(t)&&(i=parseFloat(t)),i}function y(t,e,n){for(var i,s,a,r,c=g[t],l=1,u=2,p=e[u];l&&o(p);)0===p.indexOf(t)?l+=1:0===p.indexOf("/"+t)&&(l-=1,i=u),p=e[u+=2];if(l)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(s=0,a=i,(r=e.splice(s+1,a-s)).pop(),r),n),e}function x(t,e){var n=v(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return s(e,(function(t){i.push(v(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function b(t,e){for(var n,i,s,a=1,r=t[a];o(r);)i=(n=r.split(" "))[0],g[i]?(s=y(i,t.splice(a,t.length-a),e),t=t.concat(s)):t[a]=x(n,e),r=t[a+=2];return t.join("")}t.exports=function(t,e){return b(m(t,c),e)}},function(t,e,n){var i=n(1),s=n(31);t.exports=function(t,e){var n=location.hostname,a="TOAST UI "+t+" for "+n+": Statistics",o=window.localStorage.getItem(a);(i(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(t){return(new Date).getTime()-t>6048e5}(o)||(window.localStorage.setItem(a,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||s("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),s="";return i(e,(function(t,e){s+="&"+e+"="+t})),s=s.substring(1),n.src=t+"?"+s,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])}();const d={totalItems:1e3,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span>⋅⋅⋅</span></a>'}},h=new(t(f))("pagination",d);h.on("afterMove",(function(t){window.scrollTo({top:0,behavior:"smooth"});const e=t.page,n=(e-1)*d.itemsPerPage;e>1&&C(n,n+d.itemsPerPage)}));var _=h,g=s("c3H7h"),m=s("abGcp");const v=document.querySelector("main"),y=(t,e,n,i,s)=>`<li class="movie__template">\n    <img class="movie__image" id="${e}" src="${t}" alt='${n}' loading="lazy" width="280px" height="398px"/> \n    <h5 class="movie__title">${n}</h5>\n    <div class="movie__informations"><span>${i&&i.length>0?i.slice(0,2).join(", "):""}</span> | <span>${s}</span></div>\n  </li>`,x=async t=>{const e=await Promise.all(t.map((async t=>{const e=t.poster_path?`https://image.tmdb.org/t/p/original${t.poster_path}`:"default-image-url",n=t.id,i=t.title?t.title:t.name,s=t.release_date?t.release_date:t.first_air_date,a=new Date(s).getFullYear(),o=t.genre_ids,r=await P(o);return y(e,n,i,r,a)})));v.innerHTML=e.join("")},b=(t,e)=>t.filter((t=>e.includes(t.id))).map((t=>t.name)),P=async t=>{try{const e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=28f50cf3f177782503c21b43af04c7bc"),n=await e.json(),i=await n.genres;if(t){return b(i,t)}}catch(t){console.log(t)}},w=new(0,g.Spinner)(m.opts).spin(),E=document.getElementById("loader"),C=async t=>{w.el instanceof Node&&E.appendChild(w.el);const e=`https://api.themoviedb.org/3/trending/all/day?api_key=28f50cf3f177782503c21b43af04c7bc&page=${t}`;try{const n=await fetch(e),i=await n.json(),s=await i.results;x(s),_.getCurrentPage(t)}catch(t){console.log(t)}finally{w.stop()}};_.on("afterMove",(t=>{C(t.page)})),C(1);document.querySelector("main").classList.add("movies-container");g=s("c3H7h"),m=s("abGcp");const M=document.querySelector("#form"),L=document.querySelector("#topSearch"),B=document.querySelector("main"),I=document.querySelector(".error-msg"),T=document.querySelector("#pagination");const $="28f50cf3f177782503c21b43af04c7bc",N=`https://api.themoviedb.org/3/search/movie?&api_key=${$}&page=1&query=`,k=new(0,g.Spinner)(m.opts).spin(),S=document.getElementById("loader");I.classList.add("is-hidden");const O=async t=>{try{const e=await fetch(t),n=await e.json();if(A(n.results),H(n.genres),_.reset(),0===n.results.length)return I.classList.remove("is-hidden"),B.innerHTML="",void T.classList.add("is-hidden")}catch(t){console.log(t)}},A=t=>{B.innerHTML="",t.forEach((async t=>{let{id:e,title:n,genres:i,year:s}=t,a=(t=>{let e=t.poster_path?t.poster_path:t.backdrop_path;return null===e?"https://images.pexels.com/photos/5721902/pexels-photo-5721902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2":`https://image.tmdb.org/t/p/original${e}`})(t);const o=t.release_date?t.release_date:t.first_air_date;s=new Date(o).getFullYear(),i=await H(t.genre_ids),e=t.id;const r=document.createElement("div");r.innerHTML=`<li class="movie__template">\n    <img class="movie__image" id="${e}" src="${a}" alt='${n}' loading="lazy" width="280px" height="398px"/> \n    <h5 class="movie__title">${n}</h5>\n    <div class="movie__informations"><span>${i}</span> | <span>${s}</span></div>\n  </li>`,B.appendChild(r)}))},H=async t=>{S.appendChild(k.el);try{const e=`https://api.themoviedb.org/3/genre/movie/list?api_key=${$}`,n=await fetch(e),i=await n.json(),s=await i.genres;if(t){const e=((t,e)=>t.filter((t=>e.includes(t.id))).map((t=>t.name)))(s,t);return e}}catch(t){console.log(t)}finally{k.stop()}};M.addEventListener("submit",(t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"});const e=L.value;e&&(O(N+e),L.value="")})),_.on("afterMove",(t=>{O(t.page)})),s("8sK5a"),s("zSg4k"),s("cc2Wl"),s("abGcp");
//# sourceMappingURL=index.bcc9211e.js.map
