import{i as b,a as Y}from"./assets/skroll-btn-d04490aa.js";import{T as D,i,a as h}from"./assets/vendor-29bef8ec.js";const J=document.querySelector(".quote-info"),C="quote-of-the-day",M="date",K=new Date,S=K.getDate();async function Z(){try{const s=(await h.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;H(s),X(s,S)}catch(e){i.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function X(e,t){localStorage.setItem(C,JSON.stringify(e)),localStorage.setItem(M,t)}//! RENDER QUOTE
function H(e){const t=[e];J.innerHTML=t.reduce((s,{quote:r,author:c})=>s+`<p class="quote-text">${r}</p>
        <h3 class="quote-author">${c}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function ee(){const e=localStorage.getItem(M);if(isNaN(e)){i.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===S){const t=localStorage.getItem(C);if(t){const s=JSON.parse(t);H(s)}return}await Z(),localStorage.setItem(M,S.toString())}ee();//! ANIMATION 
new D("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new D("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const te=document.querySelector(".filter-list"),T=document.querySelector(".gallery"),f=document.querySelector(".pagination-btn"),se=document.querySelector(".waist");let re=document.querySelector("#slash");const oe=h.create({baseURL:"https://energyflow.b.goit.study/api"});let x;const ae=document.querySelector('button[name="Muscles"]');document.addEventListener("DOMContentLoaded",async()=>{await $({filter:"Muscles"}),ae.classList.add("filter-active");let e=document.querySelector(".pg-num-btn");console.log(e)});const ne=async({filter:e,page:t,limit:s})=>{try{return x=await oe.get("/filters",{params:{filter:e,page:t,limit:s}}),x}catch(r){i.error({message:r.message,color:"red",position:"topCenter"})}};te.addEventListener("click",e=>{e.preventDefault(),T.innerHTML="",f.innerHTML="",se.innerHTML="",re.innerHTML="",e.target.tagName==="BUTTON"&&(document.querySelectorAll(".filter-button").forEach(t=>{t.classList.remove("filter-active")}),e.target.classList.add("filter-active"),$({filter:e.target.name}))});f.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(f.innerHTML="",T.innerHTML="",$({filter:e.target.name,page:e.target.id}))});async function $({filter:e,page:t=1,limit:s=12}){try{const r=await ne({filter:e,page:t,limit:s}),c=()=>{const g=r.data.totalPages;let n="";for(let o=1;o<=g;o++)Number(t)===o?n+=`<li id="${o}"  class="pg-item" > <button id="${o}" class="pg-num-btn pg-num-btn-active" type="button" name="${e}"
 >${o}</button></li> `:n+=`<li id="${o}"  class="pg-item" > <button id="${o}" class="pg-num-btn" type="button" name="${e}"
 >${o}</button></li> `;return n},d=r.data.results.reduce((g,{name:n,filter:o,imgUrl:j})=>g+`<li class="gallery-item" id=${n}>
          <div class="card" id="${o}:${n}">
             <img class="gallery-image"
             src="${j}"
             alt="${o}"
            />
            </div>
            <div class="card-description" id="${o}:${n}">
            <p class="name-description" id="${o}:${n}">${n}</p>
            <p class="filter-description" id="${o}:${n}">${o}</p>
            </div>
          </li>`,""),v=c();f.innerHTML=v,T.innerHTML=d}catch(r){console.error(r),i.error({message:r.message,color:"red",position:"topCenter"})}}const ie="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",ce=document.querySelector(".field-search-wraper"),le=document.querySelector(".exercises-wraper"),L=document.querySelector(".gallery"),ue=document.querySelector(".search-icon");let A=document.querySelector("#slash");const p=document.querySelector(".waist"),O=document.querySelector("#search"),R=innerWidth;let a,w;const q=h.create({baseURL:"https://energyflow.b.goit.study/api"}),N=async(e,{params:t})=>await q.get(e,{params:t});L.addEventListener("click",e=>{e.preventDefault(),!(e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")&&(p.innerHTML="",L.innerHTML="",A.innerHTML="",ce.style.display="block",p.classList.add("information-cards"),w=e.target.id,a=w.split(":"),q.defaults.params={page:1,limit:R>1400?"9":"8",muscles:a[0]==="Muscles"?a[1]:null,bodypart:a[0]==="Body parts"?a[1]:null,equipment:a[0]==="Equipment"?a[1]:null},A.insertAdjacentHTML("beforeend",`<p>&#8260;<span class="title-span">${a[1]}</span></p>`),N("/exercises",{params:{}}).then(t=>{V(t.data.results)}).catch(t=>{i.error({message:t.message,position:"topRight"})}))});let U;O.addEventListener("input",e=>{U=e.target.value});ue.addEventListener("click",e=>{p.innerHTML="",L.innerHTML="",console.log(a),console.log(w),q.defaults.params={page:1,limit:R>1400?"9":"8",keyword:U,muscles:a[0]==="Muscles"?a[1]:null,bodypart:a[0]==="Body parts"?a[1]:null,equipment:a[0]==="Equipment"?a[1]:null},N("/exercises",{params:{}}).then(t=>{console.log(t.data.totalPages),t.data.totalPages===null&&(le.style.height="100vh",p.innerHTML=`<div class='invalid-name'>${ie}</div>`),V(t.data.results)}).catch(t=>{i.error({message:t.message,position:"topRight"})}).finally(()=>{O.value=""})});function V(e){p.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:s,name:r,bodyPart:c,rating:d,time:v,target:g,_id:n})=>t+`<li class="waist-gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${d}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="${b}#icon-star"></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${n}">Start
            <svg class="icon-right" width="14" height="16">
                <use href="${b}#icon-right"></use>
            </svg>
            </button>
        </div>
      </div>

      <div class="title-card">
          <div class="icon-card">
              <svg class="run" width="24" height="24">
                  <use href="${b}#run"></use>
              </svg>
          </div>
          <h3>${r}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${s}/${v}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${c}</li>
            <li class="target"><span class="params-text">Target:</span> ${g}</li>
      </ul>
    </li>`,"")),Y()}const de=document.querySelector(".footer-form"),me=document.querySelector(".footer-form-input"),ge="https://energyflow.b.goit.study/api/subscription";de.addEventListener("submit",pe);async function pe(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!ye(t))return fe();try{const s=await h.post(ge,{email:t});if(s.status>=200&&s.status<300){const r=s.data.message;i.success({title:"OK",message:r,color:"white",position:"center"})}else throw new Error}catch(s){i.error({title:"Error",message:s.response.data.message,position:"center",backgroundColor:"gray"})}finally{me.value=""}}const ye=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),fe=()=>{i.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},l=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],u=document.querySelector(".deal-wheel"),m=u.querySelector(".spinner"),I=u.querySelector(".btn-spin"),E=u.querySelector(".ticker"),he=document.querySelector(".get-prize-container"),z=360/l.length,ve=Math.floor(180/l.length),Q="is-spinning",W="selected",be=window.getComputedStyle(m);let _,y=0,B=0,P;const Me=()=>{l.forEach(({text:e,color:t,reaction:s},r)=>{const c=z*r*-1-ve;m.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${s} style="--rotate: ${c}deg">
        <span class="text">${e}</span>
      </li>`)})},Se=()=>{m.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${l.map(({color:e},t)=>`${e} 0 ${100/l.length*(l.length-t)}%`).reverse()}
    );`)},Le=()=>{Se(),Me(),P=u.querySelectorAll(".prize")},we=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),F=()=>{const e=be.transform.split("(")[1].split(")")[0].split(","),t=e[0],s=e[1];let r=Math.atan2(s,t);r<0&&(r+=2*Math.PI);const c=Math.round(r*(180/Math.PI)),d=Math.floor(c/z);B!==d&&(E.style.animation="none",setTimeout(()=>E.style.animation=null,10),B=d),_=requestAnimationFrame(F)},Ee=()=>{const e=Math.floor(y/z);P[e].classList.add(W);const t=l[e].text;setTimeout(()=>{u.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,he.style.display="block"},3e3)};I.addEventListener("click",()=>{I.disabled=!0,y=Math.floor(Math.random()*360+we(2e3,5e3)),P.forEach(e=>e.classList.remove(W)),u.classList.add(Q),m.style.setProperty("--rotate",y),E.style.animation="none",F()});m.addEventListener("transitionend",()=>{cancelAnimationFrame(_),y%=360,Ee(),u.classList.remove(Q),m.style.setProperty("--rotate",y)});Le();const Te=document.querySelector("#prizeForm");document.querySelector(".input-get");Te.addEventListener("submit",$e);async function $e(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!qe(t))return ze()}const qe=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),ze=()=>{i.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var k=document.getElementById("myModalPrize"),Pe=document.getElementById("openModalBtnPrize");Pe.onclick=function(){k.style.display="flex"};function G(){k.style.display="none"}window.onclick=function(e){e.target==k&&G()};var ke=document.getElementById("closeModalPrize");ke.onclick=function(){G()};document.addEventListener("DOMContentLoaded",function(){function e(){var r=document.getElementById("email-prize").value,c=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!c.test(r)){i.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}i.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var r=document.getElementById("myModalPrize");r.style.display="none"}var s=document.querySelector(".button-get");s.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map
