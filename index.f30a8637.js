function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},s=t.parcelRequire00e6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequire00e6=s);const i=document.querySelector(".close_modal_window"),o=document.querySelector(".modal_window"),l=document.querySelector("main"),c=document.querySelector(".modal_inner");function r(){o.classList.add("is-hidden"),c.innerHTML="",document.body.classList.remove("stop-scrolling")}l.addEventListener("click",(async function(e){if(e.preventDefault(),!e.target.classList.contains("movie__image"))return;o.classList.remove("is-hidden");!async function(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=28f50cf3f177782503c21b43af04c7bc`);!async function(e){try{const{desktop:t,tablet:n,mobile:a}=`https://image.tmdb.org/t/p/original${e.poster_path}`,s=`\n      <div class="modalMarkup trailer__picture">\n         <picture>\n            <source src= ${t} media="(min-width: 1200px)">\n            <source src= ${n} media="(min-width: 768px)">\n            <source src= ${a} media="(min-width: 320px)">\n            <img src= https://image.tmdb.org/t/p/original${e.poster_path} \n            alt=${e.title} \n            id =${e.id} class="modal__img">\n        </picture>\n        <svg xmlns="http://www.w3.org/2000/svg" \n        width="70px" height="70px" \n        class="modal__svg" \n        id=${e.id}\n        viewBox="0 0 16 16">\n         <path \n         id=${e.id} d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\n         <path\n         id=${e.id} d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>\n        </svg>\n      </div>\n      <div class="modal__content-movie ">\n\n\n        <p class="modal__title">${e.title}</p>\n        <div class="modal__box">\n          <div class="film-features">\n            <p class="film-features__text">Vote / Votes</p>\n            <p class="film-features__text">Popularity</p>\n            <p class="film-features__text">Original Title</p>\n            <p class="film-features__text">Genre</p>\n          </div>\n          <div class="film-values">\n            <p class="film-values__text">\n              <span class="film-values__vote film-values__vote--color">${e.vote_average}</span>\n              <span class="film-values__slash">/</span>\n              <span class="film-values__vote film-values__votes--color">${e.vote_count}</span>\n            </p>\n            <p class="film-values__text">\n              <span class="film-value__vote">${e.popularity.toFixed(1)}</span>\n            </p>\n            <p class="film-values__text">\n              <span class="film-values__vote">${e.original_title}</span>\n            </p>\n            <p class="film-values__text">\n              <span class="film-values__vote">${e.genres[0].name}</span>\n            </p>\n          </div>\n        </div>\n        <div class="modal__description">\n          <p class="modal__about">About</p>\n          <p class="modal__text">${e.overview}</p>\n        </div>\n        <div class="modal__btn-box">\n          <button \n          class="modal__btn modal__btn--watched" \n          id="${e.id}" type="button" >Add to watched</button>\n          <button \n          class="modal__btn modal__btn--queue"\n          id="${e.id}" type="button" >Add to queue</button>\n\n        </div>\n      </div>`;c.insertAdjacentHTML("beforeend",s)}catch(e){console.log(e)}}(await t.json())}catch(e){console.log(e)}}(e.target.id),document.body.classList.add("stop-scrolling")})),i.addEventListener("click",r),document.body.addEventListener("keydown",(function(e){"Escape"===e.code&&(r(),o.removeEventListener("click",r),document.body.classList.remove("stop-scrolling"))})),document.body.addEventListener("click",(function(e){e.target===o&&(r(),document.body.classList.remove("stop-scrolling"),o.removeEventListener("click",r))}));var d=s("afPuq");const p={totalItems:1e3,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span>⋅⋅⋅</span></a>'}},m=new(e(d))("pagination",p);m.on("afterMove",(function(e){window.scrollTo({top:0,behavior:"smooth"});const t=e.page,n=(t-1)*p.itemsPerPage;t>1&&x(n,n+p.itemsPerPage)}));var u=m,_=s("c3H7h"),v=s("3bAln");const g=document.querySelector("main"),f=(e,t,n,a,s)=>`<li class="movie__template">\n    <img class="movie__image" id="${t}" src="${e}" alt='${n}' loading="lazy" width="280px" height="398px"/> \n    <h5 class="movie__title">${n}</h5>\n    <div class="movie__informations"><span>${a&&a.length>0?a.slice(0,2).join(", "):""}</span> | <span>${s}</span></div>\n  </li>`,h=async e=>{const t=await Promise.all(e.map((async e=>{const t=e.poster_path?`https://image.tmdb.org/t/p/original${e.poster_path}`:"default-image-url",n=e.id,a=e.title?e.title:e.name,s=e.release_date?e.release_date:e.first_air_date,i=new Date(s).getFullYear(),o=e.genre_ids,l=await b(o);return f(t,n,a,l,i)})));g.innerHTML=t.join("")},y=(e,t)=>e.filter((e=>t.includes(e.id))).map((e=>e.name)),b=async e=>{try{const t=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=28f50cf3f177782503c21b43af04c7bc"),n=await t.json(),a=await n.genres;if(e){return y(a,e)}}catch(e){console.log(e)}},w=new(0,_.Spinner)(v.opts).spin(),$=document.getElementById("loader"),x=async e=>{w.el instanceof Node&&$.appendChild(w.el);const t=`https://api.themoviedb.org/3/trending/all/day?api_key=28f50cf3f177782503c21b43af04c7bc&page=${e}`;try{const n=await fetch(t),a=await n.json(),s=await a.results;h(s),u.getCurrentPage(e)}catch(e){console.log(e)}finally{w.stop()}};u.on("afterMove",(e=>{x(e.page)})),x(1);document.querySelector("main").classList.add("movies-container");_=s("c3H7h"),v=s("3bAln");const L=document.querySelector("#form"),q=document.querySelector("#topSearch"),M=document.querySelector("main"),k=document.querySelector(".error-msg"),E=document.querySelector("#pagination");const S="28f50cf3f177782503c21b43af04c7bc",P=`https://api.themoviedb.org/3/search/movie?&api_key=${S}&page=1&query=`,T=new(0,_.Spinner)(v.opts).spin(),A=document.getElementById("loader");k.classList.add("is-hidden");const j=async e=>{try{const t=await fetch(e),n=await t.json();if(H(n.results),D(n.genres),u.reset(),0===n.results.length)return k.classList.remove("is-hidden"),M.innerHTML="",void E.classList.add("is-hidden")}catch(e){console.log(e)}},H=e=>{M.innerHTML="",e.forEach((async e=>{let{id:t,title:n,genres:a,year:s}=e,i=(e=>{let t=e.poster_path?e.poster_path:e.backdrop_path;return null===t?"https://images.pexels.com/photos/5721902/pexels-photo-5721902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2":`https://image.tmdb.org/t/p/original${t}`})(e);const o=e.release_date?e.release_date:e.first_air_date;s=new Date(o).getFullYear(),a=await D(e.genre_ids),t=e.id;const l=document.createElement("div");l.innerHTML=`<li class="movie__template">\n    <img class="movie__image" id="${t}" src="${i}" alt='${n}' loading="lazy" width="280px" height="398px"/> \n    <h5 class="movie__title">${n}</h5>\n    <div class="movie__informations"><span>${a}</span> | <span>${s}</span></div>\n  </li>`,M.appendChild(l)}))},D=async e=>{A.append(T.el);try{const t=`https://api.themoviedb.org/3/genre/movie/list?api_key=${S}`,n=await fetch(t),a=await n.json(),s=await a.genres;if(A.remove(T.el),e){const t=((e,t)=>e.filter((e=>t.includes(e.id))).map((e=>e.name)))(s,e);return t}}catch(e){console.log(e)}finally{T.stop()}};L.addEventListener("submit",(e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"});const t=q.value;t&&(j(P+t),q.value="")})),u.on("afterMove",(e=>{j(e.page)})),s("7rNp7"),s("2HCDh"),s("feJZC"),s("3bAln");
//# sourceMappingURL=index.f30a8637.js.map