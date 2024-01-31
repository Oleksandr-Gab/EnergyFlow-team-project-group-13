import{a as F}from"./assets/modal-form-494324ea.js";import{a as L,i as o}from"./assets/vendor-8598a644.js";const V=document.querySelector(".filter-list"),w=document.querySelector(".gallery"),f=document.querySelector(".pagination-btn"),G=document.querySelector(".waist"),_=L.create({baseURL:"https://energyflow.b.goit.study/api"});let P;const j=document.querySelector('button[name="Muscles"]');document.addEventListener("DOMContentLoaded",async()=>{await E({filter:"Muscles"}),j.classList.add("filter-active");let e=document.querySelector(".pg-num-btn");console.log(e)});const Y=async({filter:e,page:t,limit:r})=>{try{return P=await _.get("/filters",{params:{filter:e,page:t,limit:r}}),P}catch(s){o.error({message:s.message,color:"red",position:"topCenter"})}};V.addEventListener("click",e=>{e.preventDefault(),w.innerHTML="",f.innerHTML="",G.innerHTML="",e.target.tagName==="BUTTON"&&(document.querySelectorAll(".filter-button").forEach(t=>{t.classList.remove("filter-active")}),e.target.classList.add("filter-active"),E({filter:e.target.name}))});f.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(f.innerHTML="",w.innerHTML="",E({filter:e.target.name,page:e.target.id}))});async function E({filter:e,page:t=1,limit:r=12}){try{const s=await Y({filter:e,page:t,limit:r}),i=()=>{const g=s.data.totalPages;let l="";for(let a=1;a<=g;a++)Number(t)===a?l+=`<li id="${a}"  class="pg-item" > <button id="${a}" class="pg-num-btn pg-num-btn-active" type="button" name="${e}"
 >${a}</button></li> `:l+=`<li id="${a}"  class="pg-item" > <button id="${a}" class="pg-num-btn" type="button" name="${e}"
 >${a}</button></li> `;return l},u=s.data.results.reduce((g,{name:l,filter:a,imgUrl:W})=>g+`<li class="gallery-item" id=${l}>
          <div class="card" >
             <img class="gallery-image"
             src="${W}"
             alt="${a}"
            />
            </div>
            <div class="card-description">
            <p class="name-description" id="${a}:${l}">${l}"</p>
            <p class="filter-description">${a}</p>
            </div>
          </li>`,""),h=i();f.innerHTML=h,w.innerHTML=u}catch(s){console.error(s),o.error({message:s.message,color:"red",position:"topCenter"})}}const K="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",Z=document.querySelector(".field-search-wraper"),Q=document.querySelector(".exercises-wraper"),v=document.querySelector(".gallery"),J=document.querySelector(".search-icon");let k=document.querySelector("#slash");const p=document.querySelector(".waist"),B=document.querySelector("#search"),C=innerWidth;let n,b;const S=L.create({baseURL:"https://energyflow.b.goit.study/api"}),I=async(e,{params:t})=>await S.get(e,{params:t});v.addEventListener("click",e=>{e.preventDefault(),p.innerHTML="",v.innerHTML="",k.innerHTML="",Z.style.display="block",p.classList.add("information-cards"),b=e.target.id,n=b.split(":"),S.defaults.params={page:1,limit:C>1400?"9":"8",muscles:n[0]==="Muscles"?n[1]:null,bodypart:n[0]==="Body parts"?n[1]:null,equipment:n[0]==="Equipment"?n[1]:null},k.insertAdjacentHTML("beforeend",`<p>&#8260;<span class="title-span">${n[1]}</span></p>`),I("/exercises",{params:{}}).then(t=>{H(t.data.results)}).catch(t=>{o.error({message:t.message,position:"topRight"})})});let A;B.addEventListener("input",e=>{A=e.target.value});J.addEventListener("click",e=>{p.innerHTML="",v.innerHTML="",console.log(n),console.log(b),S.defaults.params={page:1,limit:C>1400?"9":"8",keyword:A,muscles:n[0]==="Muscles"?n[1]:null,bodypart:n[0]==="Body parts"?n[1]:null,equipment:n[0]==="Equipment"?n[1]:null},I("/exercises",{params:{}}).then(t=>{console.log(t.data.totalPages),t.data.totalPages===null&&(Q.style.height="100vh",p.innerHTML=`<div class='invalid-name'>${K}</div>`),H(t.data.results)}).catch(t=>{o.error({message:t.message,position:"topRight"})}).finally(()=>{B.value=""})});function H(e){p.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:r,name:s,bodyPart:i,rating:u,time:h,target:g,_id:l})=>t+`<li class="waist-gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${u}</p>
            <svg class="icon-star" width="12" height="12">
                <use href=../../img/sprite.svg#icon-star></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${l}">Start
            <svg class="icon-right" width="14" height="16">
                <use href="../../img/sprite.svg#icon-right"></use>
            </svg>
            </button>
        </div>
      </div>

      <div class="title-card">
          <div class="icon-card">
              <svg class="run" width="24" height="24">
                  <use href="../../img/sprite.svg#run"></use>
              </svg>
          </div>
          <h3>${s}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${r}/${h}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${i}</li>
            <li class="target"><span class="params-text">Target:</span> ${g}</li>
      </ul>
    </li>`,"")),F()}const X=document.querySelector(".footer-form"),ee=document.querySelector(".footer-form-input"),te="https://energyflow.b.goit.study/api/subscription";X.addEventListener("submit",se);async function se(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!re(t))return ne();try{const r=await L.post(te,{email:t});if(r.status>=200&&r.status<300){const s=r.data.message;o.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(r){o.error({title:"Error",message:r.response.data.message,position:"center",backgroundColor:"gray"})}finally{ee.value=""}}const re=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),ne=()=>{o.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},c=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],d=document.querySelector(".deal-wheel"),m=d.querySelector(".spinner"),q=d.querySelector(".btn-spin"),M=d.querySelector(".ticker"),ae=document.querySelector(".get-prize-container"),T=360/c.length,oe=Math.floor(180/c.length),O="is-spinning",D="selected",ie=window.getComputedStyle(m);let R,y=0,x=0,$;const le=()=>{c.forEach(({text:e,color:t,reaction:r},s)=>{const i=T*s*-1-oe;m.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${r} style="--rotate: ${i}deg">
        <span class="text">${e}</span>
      </li>`)})},ce=()=>{m.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${c.map(({color:e},t)=>`${e} 0 ${100/c.length*(c.length-t)}%`).reverse()}
    );`)},de=()=>{ce(),le(),$=d.querySelectorAll(".prize")},ue=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),U=()=>{const e=ie.transform.split("(")[1].split(")")[0].split(","),t=e[0],r=e[1];let s=Math.atan2(r,t);s<0&&(s+=2*Math.PI);const i=Math.round(s*(180/Math.PI)),u=Math.floor(i/T);x!==u&&(M.style.animation="none",setTimeout(()=>M.style.animation=null,10),x=u),R=requestAnimationFrame(U)},me=()=>{const e=Math.floor(y/T);$[e].classList.add(D);const t=c[e].text;setTimeout(()=>{d.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,ae.style.display="block"},3e3)};q.addEventListener("click",()=>{q.disabled=!0,y=Math.floor(Math.random()*360+ue(2e3,5e3)),$.forEach(e=>e.classList.remove(D)),d.classList.add(O),m.style.setProperty("--rotate",y),M.style.animation="none",U()});m.addEventListener("transitionend",()=>{cancelAnimationFrame(R),y%=360,me(),d.classList.remove(O),m.style.setProperty("--rotate",y)});de();const ge=document.querySelector("#prizeForm");document.querySelector(".input-get");ge.addEventListener("submit",pe);async function pe(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!ye(t))return fe()}const ye=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),fe=()=>{o.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var z=document.getElementById("myModalPrize"),he=document.getElementById("openModalBtnPrize");he.onclick=function(){z.style.display="flex"};function N(){z.style.display="none"}window.onclick=function(e){e.target==z&&N()};var ve=document.getElementById("closeModalPrize");ve.onclick=function(){N()};document.addEventListener("DOMContentLoaded",function(){function e(){var s=document.getElementById("email-prize").value,i=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!i.test(s)){o.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}o.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var s=document.getElementById("myModalPrize");s.style.display="none"}var r=document.querySelector(".button-get");r.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map
