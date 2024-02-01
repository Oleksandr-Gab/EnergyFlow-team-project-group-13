import{a as j}from"./assets/skroll-btn-4160a4e6.js";import{T as I,i as n,a as h}from"./assets/vendor-29bef8ec.js";const Y=document.querySelector(".quote-info"),C="quote-of-the-day",b="date",J=new Date,M=J.getDate();async function K(){try{const s=(await h.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;D(s),Z(s,M)}catch(e){n.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function Z(e,t){localStorage.setItem(C,JSON.stringify(e)),localStorage.setItem(b,t)}//! RENDER QUOTE
function D(e){const t=[e];Y.innerHTML=t.reduce((s,{quote:r,author:i})=>s+`<p class="quote-text">${r}</p>
        <h3 class="quote-author">${i}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function X(){const e=localStorage.getItem(b);if(isNaN(e)){n.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===M){const t=localStorage.getItem(C);if(t){const s=JSON.parse(t);D(s)}return}await K(),localStorage.setItem(b,M.toString())}X();//! ANIMATION 
new I("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new I("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const ee=document.querySelector(".filter-list"),E=document.querySelector(".gallery"),f=document.querySelector(".pagination-btn"),te=document.querySelector(".waist"),se=h.create({baseURL:"https://energyflow.b.goit.study/api"});let k;const re=document.querySelector('button[name="Muscles"]');document.addEventListener("DOMContentLoaded",async()=>{await T({filter:"Muscles"}),re.classList.add("filter-active");let e=document.querySelector(".pg-num-btn");console.log(e)});const oe=async({filter:e,page:t,limit:s})=>{try{return k=await se.get("/filters",{params:{filter:e,page:t,limit:s}}),k}catch(r){n.error({message:r.message,color:"red",position:"topCenter"})}};ee.addEventListener("click",e=>{e.preventDefault(),E.innerHTML="",f.innerHTML="",te.innerHTML="",e.target.tagName==="BUTTON"&&(document.querySelectorAll(".filter-button").forEach(t=>{t.classList.remove("filter-active")}),e.target.classList.add("filter-active"),T({filter:e.target.name}))});f.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(f.innerHTML="",E.innerHTML="",T({filter:e.target.name,page:e.target.id}))});async function T({filter:e,page:t=1,limit:s=12}){try{const r=await oe({filter:e,page:t,limit:s}),i=()=>{const g=r.data.totalPages;let c="";for(let a=1;a<=g;a++)Number(t)===a?c+=`<li id="${a}"  class="pg-item" > <button id="${a}" class="pg-num-btn pg-num-btn-active" type="button" name="${e}"
 >${a}</button></li> `:c+=`<li id="${a}"  class="pg-item" > <button id="${a}" class="pg-num-btn" type="button" name="${e}"
 >${a}</button></li> `;return c},d=r.data.results.reduce((g,{name:c,filter:a,imgUrl:G})=>g+`<li class="gallery-item" id=${c}>
          <div class="card" >
             <img class="gallery-image"
             src="${G}"
             alt="${a}"
            />
            </div>
            <div class="card-description">
            <p class="name-description" id="${a}:${c}">${c}</p>
            <p class="filter-description">${a}</p>
            </div>
          </li>`,""),v=i();f.innerHTML=v,E.innerHTML=d}catch(r){console.error(r),n.error({message:r.message,color:"red",position:"topCenter"})}}const ae="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",ne=document.querySelector(".field-search-wraper"),ie=document.querySelector(".exercises-wraper"),w=document.querySelector(".gallery"),ce=document.querySelector(".search-icon");let x=document.querySelector("#slash");const p=document.querySelector(".waist"),O=document.querySelector("#search"),H=innerWidth;let o,S;const q=h.create({baseURL:"https://energyflow.b.goit.study/api"}),R=async(e,{params:t})=>await q.get(e,{params:t});w.addEventListener("click",e=>{e.preventDefault(),p.innerHTML="",w.innerHTML="",x.innerHTML="",ne.style.display="block",p.classList.add("information-cards"),S=e.target.id,o=S.split(":"),q.defaults.params={page:1,limit:H>1400?"9":"8",muscles:o[0]==="Muscles"?o[1]:null,bodypart:o[0]==="Body parts"?o[1]:null,equipment:o[0]==="Equipment"?o[1]:null},x.insertAdjacentHTML("beforeend",`<p>&#8260;<span class="title-span">${o[1]}</span></p>`),R("/exercises",{params:{}}).then(t=>{N(t.data.results)}).catch(t=>{n.error({message:t.message,position:"topRight"})})});let U;O.addEventListener("input",e=>{U=e.target.value});ce.addEventListener("click",e=>{p.innerHTML="",w.innerHTML="",console.log(o),console.log(S),q.defaults.params={page:1,limit:H>1400?"9":"8",keyword:U,muscles:o[0]==="Muscles"?o[1]:null,bodypart:o[0]==="Body parts"?o[1]:null,equipment:o[0]==="Equipment"?o[1]:null},R("/exercises",{params:{}}).then(t=>{console.log(t.data.totalPages),t.data.totalPages===null&&(ie.style.height="100vh",p.innerHTML=`<div class='invalid-name'>${ae}</div>`),N(t.data.results)}).catch(t=>{n.error({message:t.message,position:"topRight"})}).finally(()=>{O.value=""})});function N(e){p.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:s,name:r,bodyPart:i,rating:d,time:v,target:g,_id:c})=>t+`<li class="waist-gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${d}</p>
            <svg class="icon-star" width="12" height="12">
                <use href=../../img/sprite.svg#icon-star></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${c}">Start
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
          <h3>${r}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${s}/${v}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${i}</li>
            <li class="target"><span class="params-text">Target:</span> ${g}</li>
      </ul>
    </li>`,"")),j()}const le=document.querySelector(".footer-form"),ue=document.querySelector(".footer-form-input"),de="https://energyflow.b.goit.study/api/subscription";le.addEventListener("submit",me);async function me(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!ge(t))return pe();try{const s=await h.post(de,{email:t});if(s.status>=200&&s.status<300){const r=s.data.message;n.success({title:"OK",message:r,color:"white",position:"center"})}else throw new Error}catch(s){n.error({title:"Error",message:s.response.data.message,position:"center",backgroundColor:"gray"})}finally{ue.value=""}}const ge=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),pe=()=>{n.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},l=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],u=document.querySelector(".deal-wheel"),m=u.querySelector(".spinner"),A=u.querySelector(".btn-spin"),L=u.querySelector(".ticker"),ye=document.querySelector(".get-prize-container"),$=360/l.length,fe=Math.floor(180/l.length),Q="is-spinning",V="selected",he=window.getComputedStyle(m);let W,y=0,B=0,z;const ve=()=>{l.forEach(({text:e,color:t,reaction:s},r)=>{const i=$*r*-1-fe;m.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${s} style="--rotate: ${i}deg">
        <span class="text">${e}</span>
      </li>`)})},be=()=>{m.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${l.map(({color:e},t)=>`${e} 0 ${100/l.length*(l.length-t)}%`).reverse()}
    );`)},Me=()=>{be(),ve(),z=u.querySelectorAll(".prize")},we=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),_=()=>{const e=he.transform.split("(")[1].split(")")[0].split(","),t=e[0],s=e[1];let r=Math.atan2(s,t);r<0&&(r+=2*Math.PI);const i=Math.round(r*(180/Math.PI)),d=Math.floor(i/$);B!==d&&(L.style.animation="none",setTimeout(()=>L.style.animation=null,10),B=d),W=requestAnimationFrame(_)},Se=()=>{const e=Math.floor(y/$);z[e].classList.add(V);const t=l[e].text;setTimeout(()=>{u.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,ye.style.display="block"},3e3)};A.addEventListener("click",()=>{A.disabled=!0,y=Math.floor(Math.random()*360+we(2e3,5e3)),z.forEach(e=>e.classList.remove(V)),u.classList.add(Q),m.style.setProperty("--rotate",y),L.style.animation="none",_()});m.addEventListener("transitionend",()=>{cancelAnimationFrame(W),y%=360,Se(),u.classList.remove(Q),m.style.setProperty("--rotate",y)});Me();const Le=document.querySelector("#prizeForm");document.querySelector(".input-get");Le.addEventListener("submit",Ee);async function Ee(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!Te(t))return qe()}const Te=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),qe=()=>{n.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var P=document.getElementById("myModalPrize"),$e=document.getElementById("openModalBtnPrize");$e.onclick=function(){P.style.display="flex"};function F(){P.style.display="none"}window.onclick=function(e){e.target==P&&F()};var ze=document.getElementById("closeModalPrize");ze.onclick=function(){F()};document.addEventListener("DOMContentLoaded",function(){function e(){var r=document.getElementById("email-prize").value,i=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!i.test(r)){n.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}n.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var r=document.getElementById("myModalPrize");r.style.display="none"}var s=document.querySelector(".button-get");s.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map
