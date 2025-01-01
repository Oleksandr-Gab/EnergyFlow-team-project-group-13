import{e as d,i as q,a as le,v as A,s as _}from"./assets/skroll-btn-0349562f.js";import{T as F,a as T}from"./assets/vendor-8857fa14.js";const ce=document.querySelector(".quote-info"),G="quote-of-the-day",E="date",de=new Date,$=de.getDate();async function ue(){try{const a=(await T.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;Q(a),pe(a,$)}catch(e){d(e.message)}}//! SAVE QUOTE AND DATA
function pe(e,t){localStorage.setItem(G,JSON.stringify(e)),localStorage.setItem(E,t)}//! RENDER QUOTE
function Q(e){const t=[e];ce.innerHTML=t.reduce((a,{quote:s,author:o})=>a+`<p class="quote-text">${s}</p>
        <h3 class="quote-author">${o}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function me(){const e=localStorage.getItem(E);if(isNaN(e)){d(error.message);return}if(parseInt(e)===$){const t=localStorage.getItem(G);if(t){const a=JSON.parse(t);Q(a)}return}await ue(),localStorage.setItem(E,$.toString())}me();//! ANIMATION
new F("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new F("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const V=`
    <div class="loading">
         <span class="loader"></span>
    </div>
`,ge=document.querySelector(".waist-pagination"),ye=document.querySelector(".filter-list"),v=document.querySelector(".gallery"),L=document.querySelector(".pagination-btn"),j=document.querySelector(".waist"),X=document.querySelector(".field-search-wraper"),Y=document.querySelector("#slash"),fe=T.create({baseURL:"https://energyflow.b.goit.study/api"});let O;const he=document.querySelector('button[name="Muscles"]');document.addEventListener("DOMContentLoaded",async()=>{await P({filter:"Muscles"}),he.classList.add("filter-active")});const Le=async({filter:e,page:t,limit:a})=>{try{return v.innerHTML=V,O=await fe.get("/filters",{params:{filter:e,page:t,limit:a}}),O}catch(s){d(s.message)}};ye.addEventListener("click",e=>{e.preventDefault(),v.innerHTML="",L.innerHTML="",j.innerHTML="",Y.innerHTML="",X.style="display:none",ge.innerHTML="",e.target.tagName==="BUTTON"&&(document.querySelectorAll(".filter-button").forEach(t=>{t.classList.remove("filter-active")}),e.target.classList.add("filter-active"),P({filter:e.target.name}))});L.addEventListener("click",e=>{e.preventDefault(),j.innerHTML="",L.innerHTML="",v.innerHTML="",Y.innerHTML="",X.style="display:none",e.target.tagName==="BUTTON"&&P({filter:e.target.name,page:e.target.id})});async function P({filter:e,page:t=1,limit:a=12}){try{const s=await Le({filter:e,page:t,limit:a}),o=()=>{const f=s.data.totalPages;let i="";for(let r=1;r<=f;r++)Number(t)===r?i+=`<li id="${r}"  class="pg-item" > <button id="${r}" class="pg-num-btn pg-num-btn-active" type="button" name="${e}"
 >${r}</button></li> `:i+=`<li id="${r}"  class="pg-item" > <button id="${r}" class="pg-num-btn" type="button" name="${e}"
 >${r}</button></li> `;return i},m=s.data.results.reduce((f,{name:i,filter:r,imgUrl:ie})=>f+`<li class="gallery-item" id=${i}>
          <div class="card" id="${r}:${i}">
             <img class="gallery-image"
             src="${ie}"
             alt="${r}"
            />
            </div>
            <div class="card-description" id="${r}:${i}">
            <p class="name-description" id="${r}:${i}">${i}</p>
            <p class="filter-description" id="${r}:${i}">${r}</p>
            </div>
          </li>`,""),w=o();L.innerHTML=w,v.innerHTML=m}catch(s){d(s.message)}}const Me="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",J=document.querySelector(".field-search-wraper"),be=document.querySelector(".exercises-wraper"),M=document.querySelector(".gallery"),Te=document.querySelector(".search-icon");let b=document.querySelector("#slash");const c=document.querySelector(".waist"),K=document.querySelector("#search"),Z=document.querySelector(".pagination-btn"),l=document.querySelector(".waist-pagination");document.querySelectorAll(".btn-waist-active");const ve=document.querySelector(".main-waist-btn-container"),B=innerWidth;let n,C,Se=1,R,H=16,g=1;const S=T.create({baseURL:"https://energyflow.b.goit.study/api"}),x=async(e,{params:t})=>(c.innerHTML=V,await S.get(e,{params:t}));M.addEventListener("click",e=>{e.preventDefault(),!(e.target.nodeName!=="DIV"&&e.target.nodeName!=="H2"&&e.target.nodeName!=="P")&&(l.innerHTML="",Z.innerHTML="",c.innerHTML="",M.innerHTML="",b.innerHTML="",H=16,g=1,ve.style.display="block",J.style.display="block",c.classList.add("information-cards"),C=e.target.id,n=C.split(":"),S.defaults.params={page:Se,limit:B>1400?"9":"8",muscles:n[0]==="Muscles"?n[1]:null,bodypart:n[0]==="Body parts"?n[1]:null,equipment:n[0]==="Equipment"?n[1]:null},b.insertAdjacentHTML("beforeend",`<p>&#8260;<span class="title-span">${n[1]}</span></p>`),x("/exercises",{params:{}}).then(t=>{k(t.data.results),te(t.data.totalPages)}).catch(t=>{d(t.message)}))});l.addEventListener("click",e=>{e.preventDefault();const t=[...l.children];let a=e.target.id*1,s=42;a>g&&e.target.tagName==="LI"?(l.style.transform=`translateX(-${H+=s}px)`,g=e.target.id*1):a<g&&e.target.tagName==="LI"&&(l.style.transform=`translateX(-${H-=s}px)`,g=a),t.forEach(o=>{o.classList[1]&&e.target.tagName==="LI"&&o.classList.remove("btn-waist-active")}),e.target.tagName==="LI"&&e.target.classList.add("btn-waist-active"),Z.innerHTML="",c.innerHTML="",M.innerHTML="",b.innerHTML="",J.style.display="block",c.classList.add("information-cards"),S.defaults.params={page:a,limit:B>1400?"9":"8",muscles:n[0]==="Muscles"?n[1]:null,bodypart:n[0]==="Body parts"?n[1]:null,equipment:n[0]==="Equipment"?n[1]:null},b.insertAdjacentHTML("beforeend",`<p>&#8260;<span class="title-span">${n[1]}</span></p>`),x("/exercises",{params:{}}).then(o=>{k(o.data.results)}).catch(o=>{d(o.message)})});let ee;K.addEventListener("input",e=>{ee=e.target.value});Te.addEventListener("click",e=>{c.innerHTML="",M.innerHTML="",l.innerHTML="",g=1,S.defaults.params={page:1,limit:B>1400?"9":"8",keyword:ee,muscles:n[0]==="Muscles"?n[1]:null,bodypart:n[0]==="Body parts"?n[1]:null,equipment:n[0]==="Equipment"?n[1]:null},x("/exercises",{params:{}}).then(t=>{R=t.data.totalPages,t.data.totalPages===null&&(be.style.height="100vh",c.innerHTML=`<div class="invalid-name">${Me}</div>`),k(t.data.results),te(R)}).catch(t=>{d(t.message)}).finally(()=>{K.value=""})});function k(e){const t=e.reduce((a,{burnedCalories:s,name:o,bodyPart:m,rating:w,time:f,target:i,_id:r})=>a+`<li class="waist-gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${w}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="${q}#icon-star"></use>
            </svg>
        </div>

        <div class="workout-btn-container" id="${r}" data-action="right">
            <button class="workout-btn">Start
            <svg class="icon-right" width="14" height="16">
                <use href="${q}#icon-right"></use>
            </svg>
            </button>
        </div>
      </div>

      <div class="title-card">
          <div class="icon-card">
              <svg class="run" width="24" height="24">
                  <use href="${q}#run"></use>
              </svg>
          </div>
          <h3>${o}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${s}/${f}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${m}</li>
            <li class="target"><span class="params-text">Target:</span> ${i}</li>
      </ul>
    </li>`,"");c.innerHTML=t,le()}function te(e){for(let t=1;t<=e;t++)l.insertAdjacentHTML("beforeend",`<li class="btn-item-waist" id="${t}">${t}</li>`);l.firstChild.classList.add("btn-waist-active"),l.style.transform="translateX(-1px)"}const we=document.querySelector(".footer-form"),qe=document.querySelector(".footer-form-input"),Ee="https://energyflow.b.goit.study/api/subscription";we.addEventListener("submit",$e);async function $e(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(A(t))try{const a=await T.post(Ee,{email:t});if(a.status>=200&&a.status<300){const s=a.data.message;_(s)}else throw new Error}catch(a){d(a.response.data.message)}finally{qe.value=""}}const u=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],p=document.querySelector(".deal-wheel"),y=p.querySelector(".spinner"),U=p.querySelector(".btn-spin"),I=p.querySelector(".ticker"),He=document.querySelector(".get-prize-container"),z=360/u.length,Ie=Math.floor(180/u.length),ae="is-spinning",se="selected",Ae=window.getComputedStyle(y);let ne,h=0,W=0,D;const Pe=()=>{u.forEach(({text:e,color:t,reaction:a},s)=>{const o=z*s*-1-Ie;y.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${a} style="--rotate: ${o}deg">
        <span class="text">${e}</span>
      </li>`)})},Be=()=>{y.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${u.map(({color:e},t)=>`${e} 0 ${100/u.length*(u.length-t)}%`).reverse()}
    );`)},xe=()=>{Be(),Pe(),D=p.querySelectorAll(".prize")},ke=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),re=()=>{const e=Ae.transform.split("(")[1].split(")")[0].split(","),t=e[0],a=e[1];let s=Math.atan2(a,t);s<0&&(s+=2*Math.PI);const o=Math.round(s*(180/Math.PI)),m=Math.floor(o/z);W!==m&&(I.style.animation="none",setTimeout(()=>I.style.animation=null,10),W=m),ne=requestAnimationFrame(re)},ze=()=>{const e=Math.floor(h/z);D[e].classList.add(se);const t=u[e].text;setTimeout(()=>{p.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,He.style.display="block"},3e3)};U.addEventListener("click",()=>{U.disabled=!0,h=Math.floor(Math.random()*360+ke(2e3,5e3)),D.forEach(e=>e.classList.remove(se)),p.classList.add(ae),y.style.setProperty("--rotate",h),I.style.animation="none",re()});y.addEventListener("transitionend",()=>{cancelAnimationFrame(ne),h%=360,ze(),p.classList.remove(ae),y.style.setProperty("--rotate",h)});xe();const De=document.querySelector("#prizeForm");document.querySelector(".input-get");De.addEventListener("submit",Ne);async function Ne(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();A(t)}var N=document.getElementById("myModalPrize"),Oe=document.getElementById("openModalBtnPrize");Oe.onclick=function(){N.style.display="flex"};function oe(){N.style.display="none"}window.onclick=function(e){e.target==N&&oe()};var Ce=document.getElementById("closeModalPrize");Ce.onclick=function(){oe()};document.addEventListener("DOMContentLoaded",function(){function e(){var s=document.getElementById("email-prize").value;A(s)&&(_("Form submitted!"),setTimeout(function(){t()},1e3))}function t(){var s=document.getElementById("myModalPrize");s.style.display="none"}var a=document.querySelector(".button-get");a.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map
