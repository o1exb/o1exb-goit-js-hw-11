import{a as u,S as d,i as a}from"./assets/vendor-Db2TdIkw.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="49857311-6635cfa9567008bd9332ca8ce",m="https://pixabay.com/api/";async function g(o){const s={key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};return(await u.get(m,{params:s})).data}const l=document.querySelector(".gallery"),f=document.querySelector(".loader");let y=new d(".gallery a");function h(o){const s=o.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><span class="info-title"><strong>Likes</strong></span> ${e.likes}</p>
        <p><span class="info-title"><strong>Views</strong></span> ${e.views}</p>
        <p><span class="info-title"><strong>Comments</strong></span> ${e.comments}</p>
        <p><span class="info-title"><strong>Downloads</strong></span> ${e.downloads}</p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",s),y.refresh()}function L(){l.innerHTML=""}function w(){f.classList.remove("hidden")}function c(){f.classList.add("hidden")}const b=document.querySelector(".form");b.addEventListener("submit",async o=>{o.preventDefault();const s=o.target.elements["search-text"].value.trim();if(!s){a.warning({message:"Please enter a search term."});return}L(),w(),setTimeout(async()=>{try{const e=await g(s);if(e.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}h(e.hits)}catch(e){console.error("Error fetching images:",e),a.error({message:"Something went wrong."})}finally{c(),o.target.reset()}},1e3)});
//# sourceMappingURL=index.js.map
