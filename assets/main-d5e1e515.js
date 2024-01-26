import"./vendor-86291ea8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const f=document.querySelector(".FilterList");let l;const p=document.querySelector(".Gallery"),g=document.querySelector('button[name="Muscles"]');g.disabled=!1;f.addEventListener("click",e=>{e.target.tagName==="BUTTON"&&(l=e.target.name,console.log(l),y(l))});function y(e){axios.create({baseURL:"https://energyflow.b.goit.study/api",params:{filter:e,page:"1",limit:"12"}}).get("/filters").then(r=>{console.log(r.results);const i=r.results.reduce((t,{name:s,filter:c,imgUrl:d})=>t+`<li class="GalleryItem">
        <div class="Card">
          <a class="GalleryLink" href="${d}">
            <img class="GalleryImage"
            src="${d}"
            alt="${c}"
          />
          </a>
          </div>          
          <div class="CardDescription">
          <p class="NameDescription">${s}</p>
          <p class="FilterDescription">${c}</p>          
          </div> 
        </li>`,"");p.insertAdjacentHTML("beforeend",i)}).catch(r=>{console.error(r),iziToast.error({message:r.message,color:"red",position:"topCenter"})})}const a={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let u=0;window.addEventListener("click",n);document.addEventListener("keydown",L);a.closeBtn.addEventListener("click",v);a.form.addEventListener("submit",m);a.rateStars.addEventListener("click",S);function n(e){e.target.classList.contains("backdrop")&&(a.modalBackdrop.classList.remove("is-open"),window.removeEventListener("click",n))}function v(e){e.currentTarget&&(a.modalBackdrop.classList.remove("is-open"),window.removeEventListener("click",n))}function L(e){e.code==="Escape"&&(a.modalBackdrop.classList.remove("is-open"),window.removeEventListener("click",n))}function S(e){let o=e.target,r=a.rateStars.querySelector(".star-active");o.classList.add("star-active"),r&&r.classList.remove("star-active"),setTimeout(()=>{a.rateValue.textContent=`${o.dataset.rate}.0`},0),u=o.dataset.rate}function m(e){e.preventDefault(),console.log({rating:u,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),a.modalBackdrop.classList.remove("is-open"),a.form.removeEventListener("submit",m)}const E=document.querySelector(".footer-form");E.addEventListener("submit",b);async function b(e){e.preventDefault();const o=e.currentTarget.elements.footerInput.value.trim();try{const r=await axios.post("https://energyflow.b.goit.study/api/subscription",{email:o});iziToast.success({title:"OK",message:"Successfully inserted record!",color:"white"}),console.log(r.data)}catch{iziToast.error({title:"Error",message:"Error sending subscription request"})}}
//# sourceMappingURL=main-d5e1e515.js.map
