import{a as f,i as p}from"./vendor-8cce9181.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const g=document.querySelector(".FilterList");let l;const y=document.querySelector(".Gallery"),L=document.querySelector('button[name="Muscles"]');L.disabled=!1;g.addEventListener("click",e=>{e.target.tagName==="BUTTON"&&(l=e.target.name,console.log(l),v(l))});function v(e){f.create({baseURL:"https://energyflow.b.goit.study/api",params:{filter:e,page:"1",limit:"12"}}).get("/filters").then(r=>{console.log(r.results);const c=r.results.reduce((t,{name:s,filter:i,imgUrl:d})=>t+`<li class="GalleryItem">
        <div class="Card">
          <a class="GalleryLink" href="${d}">
            <img class="GalleryImage"
            src="${d}"
            alt="${i}"
          />
          </a>
          </div>          
          <div class="CardDescription">
          <p class="NameDescription">${s}</p>
          <p class="FilterDescription">${i}</p>          
          </div> 
        </li>`,"");y.insertAdjacentHTML("beforeend",c)}).catch(r=>{console.error(r),p.error({message:r.message,color:"red",position:"topCenter"})})}const a={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let u=0;window.addEventListener("click",n);document.addEventListener("keydown",E);a.closeBtn.addEventListener("click",S);a.form.addEventListener("submit",m);a.rateStars.addEventListener("click",h);function n(e){e.target.classList.contains("backdrop")&&(a.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",n))}function S(e){e.currentTarget&&(a.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",n))}function E(e){e.code==="Escape"&&(a.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",n))}function h(e){let o=e.target,r=a.rateStars.querySelector(".star-active");o.classList.add("star-active"),r&&r.classList.remove("star-active"),setTimeout(()=>{a.rateValue.textContent=`${o.dataset.rate}.0`},0),u=o.dataset.rate}function m(e){e.preventDefault(),console.log({rating:u,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),a.modalBackdrop.classList.remove("is-hidden"),a.form.removeEventListener("submit",m)}const b=document.querySelector(".footer-form");b.addEventListener("submit",w);async function w(e){e.preventDefault();const o=e.currentTarget.elements.footerInput.value.trim();try{const r=await axios.post("https://energyflow.b.goit.study/api/subscription",{email:o});iziToast.success({title:"OK",message:"Successfully inserted record!",color:"white"}),console.log(r.data)}catch{iziToast.error({title:"Error",message:"Error sending subscription request"})}}
//# sourceMappingURL=main-a16b0489.js.map