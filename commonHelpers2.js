import{a as C}from"./assets/modal-form-2099e469.js";import{a as u,i as a}from"./assets/vendor-29bef8ec.js";const H=document.querySelector(".filter-list"),b=document.querySelector(".gallery"),l=document.querySelector(".pagination-btn"),U=document.querySelector(".waist"),I=u.create({baseURL:"https://energyflow.b.goit.study/api"});let T;const M=document.querySelector('button[name="Muscles"]');let E;document.addEventListener("DOMContentLoaded",async()=>{await L({filter:"Muscles"}),M.classList.add("active"),E=document.querySelector(".pg-num-btn"),E.classList.add("pg-num-btn-active")});const O=async({filter:e,page:r,limit:t})=>{try{return T=await I.get("/filters",{params:{filter:e,page:r,limit:t}}),T}catch(s){console.error(s),a.error({message:s.message,color:"red",position:"topCenter"})}};H.addEventListener("click",e=>{e.preventDefault(),b.innerHTML="",l.innerHTML="",U.innerHTML="",e.target.tagName==="BUTTON"&&(M.classList.remove("active"),L({filter:e.target.name}))});l.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(l.innerHTML="",b.innerHTML="",L({filter:e.target.name,page:e.target.id}))});async function L({filter:e,page:r=1,limit:t=12}){try{const s=await O({filter:e,page:r,limit:t}),p=()=>{const i=s.data.totalPages;let n="";for(let o=1;o<=i;o++)n+=`<button id="${o}" class="pg-num-btn" type="button" name="${e}"
 >${o}</button>`;return n},g=s.data.results.reduce((i,{name:n,filter:o,imgUrl:P})=>i+`<li class="gallery-item" id=${n}>
          <div class="card" >            
             <img class="gallery-image"
             src="${P}"
             alt="${o}"            
            />            
            </div>
            <div class="card-description">
            <p class="name-description" id="${o}:${n}">${n}</p>
            <p class="filter-description">${o}</p>
            </div>
          </li>`,""),m=p();l.insertAdjacentHTML("afterbegin",m),b.insertAdjacentHTML("afterbegin",g)}catch(s){console.error(s),a.error({message:s.message,color:"red",position:"topCenter"})}}const R="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",h=document.querySelector(".gallery"),S=document.querySelector(".section-title");document.querySelector("#slash");const f=document.querySelector(".waist"),v=document.querySelector("#search"),k=innerWidth,w=u.create({baseURL:"https://energyflow.b.goit.study/api"}),q=async(e,{params:r})=>await w.get(e,{params:r});h.addEventListener("click",e=>{e.preventDefault(),f.innerHTML="",h.innerHTML="",v.style.display="block",f.classList.add("information-cards");const t=e.target.id.split(":");w.defaults.params={limit:k>1400?"9":"8",muscles:t[0]==="Muscles"?t[1]:null,bodypart:t[0]==="Body parts"?t[1]:null,equipment:t[0]==="Equipment"?t[1]:null},S.insertAdjacentHTML("beforeend",`<p id="slash">&#8260;<span class="title-span">${t[1]}</span></p>`),console.log(S),q("/exercises",{params:{}}).then(s=>{A(s.data.results)}).catch(s=>{a.error({message:s.message,position:"topRight"})})});let c,$;v.addEventListener("input",e=>{clearTimeout($),$=setTimeout(function(){c=v.value,console.log(c)},1e3),searchBlock.addEventListener("click",r=>{if(console.log(c.toLowerCase()),c.trim()!=="input-value"){h.innerHTML=`<div class="errorEmageContainer">${R}</div>`;return}w.defaults.params={limit:k>1400?"9":"8"},q("/exercises",{params:{keyword:r.target.value}}).then(t=>{console.log(t.data),A(t.data.results)}).catch(t=>{a.error({message:t.message,position:"topRight"})})})});function A(e){f.insertAdjacentHTML("afterbegin",e.reduce((r,{burnedCalories:t,name:s,bodyPart:p,rating:g,time:m,target:i,_id:n})=>r+`<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${g}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../img/sprite.svg#icon-star"></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${n}">Start
            <svg class="icon-right" width="14" height="16">
                <use href="../img/sprite.svg#icon-right"></use>
            </svg>
            </button>
        </div>
      </div>

      <div class="title-card">
          <div class="icon-card">
              <svg class="run" width="24" height="24">
                  <use href="../img/sprite.svg#run"></use>
              </svg>
          </div>
          <h3>${s}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${t}/${m}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${p}</li>
            <li class="target"><span class="params-text">Target:</span> ${i}</li>
      </ul>
    </li>`,"")),C()}const D=document.querySelector(".footer-form"),N=document.querySelector(".footer-form-input"),W="https://energyflow.b.goit.study/api/subscription";D.addEventListener("submit",j);async function j(e){e.preventDefault();const r=e.currentTarget.elements.footerInput.value.trim();if(!F(r))return _();try{const t=await u.post(W,{email:r});if(t.status>=200&&t.status<300){const s=t.data.message;a.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(t){a.error({title:"Error",message:t.response.data.message,position:"center",backgroundColor:"gray"})}finally{N.value=""}}const F=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),_=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},V=document.querySelector(".search-block"),z=document.querySelector(".custom-pagination-btn"),y=document.querySelectorAll(".render-pagination-btn"),G=u.create({baseURL:"https://energyflow.b.goit.study/api/"}),K={fetchFilters:async e=>{try{return(await G.get("filters",{params:e})).data.results}catch(r){console.error(r),Y(r)}}},Y=e=>{throw a.error({title:"API Error",message:"An error occurred while fetching data from the API."}),e},Q=async e=>{try{return(await K.fetchFilters({...e})).map(Z).join("")}catch(r){return console.error(r),x(),""}},Z=e=>`<li class="render-page-one-item" data-name="${e.name}">
            <img src="${e.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${e.name}</p>
              <p class="render-page-one-item-zones">${e.filter}</p>
            </div>
          </li>`,x=()=>{a.error({title:"Rendering Error",message:"An error occurred while rendering data."})},J=async e=>{try{const r=await e;V.innerHTML=r}catch(r){console.error(r),x()}},X=e=>{const r=parseInt(e.dataset.btn)===3?1:-1;y.forEach(t=>{t.textContent=parseInt(t.textContent)+r}),y[0].style.display=d.page>1?"block":"none",y[2].style.display=d.page>=re-1?"none":"block"},ee=e=>{e.target.nodeName==="BUTTON"&&(d.page=parseInt(e.target.textContent),J(Q(d)),X(e.target))},te=getComputedStyle(document.querySelector("body")).width,B=te<768?8:12,d={limit:B,page:1},re=69/B;z.addEventListener("click",ee);
//# sourceMappingURL=commonHelpers2.js.map
