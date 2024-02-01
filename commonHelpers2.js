import{a as Y}from"./assets/skroll-btn-a1f902f4.js";import{T as C,i as n,a as h}from"./assets/vendor-29bef8ec.js";const J=document.querySelector(".quote-info"),D="quote-of-the-day",M="date",K=new Date,w=K.getDate();async function Z(){try{const s=(await h.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;O(s),X(s,w)}catch(e){n.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function X(e,t){localStorage.setItem(D,JSON.stringify(e)),localStorage.setItem(M,t)}//! RENDER QUOTE
function O(e){const t=[e];J.innerHTML=t.reduce((s,{quote:r,author:i})=>s+`<p class="quote-text">${r}</p>
        <h3 class="quote-author">${i}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function ee(){const e=localStorage.getItem(M);if(isNaN(e)){n.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===w){const t=localStorage.getItem(D);if(t){const s=JSON.parse(t);O(s)}return}await Z(),localStorage.setItem(M,w.toString())}ee();//! ANIMATION 
new C("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new C("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const te=document.querySelector(".filter-list"),T=document.querySelector(".gallery"),f=document.querySelector(".pagination-btn"),se=document.querySelector(".waist"),re=h.create({baseURL:"https://energyflow.b.goit.study/api"});let x;const oe=document.querySelector('button[name="Muscles"]');document.addEventListener("DOMContentLoaded",async()=>{await q({filter:"Muscles"}),oe.classList.add("filter-active");let e=document.querySelector(".pg-num-btn");console.log(e)});const ae=async({filter:e,page:t,limit:s})=>{try{return x=await re.get("/filters",{params:{filter:e,page:t,limit:s}}),x}catch(r){n.error({message:r.message,color:"red",position:"topCenter"})}};te.addEventListener("click",e=>{e.preventDefault(),T.innerHTML="",f.innerHTML="",se.innerHTML="",e.target.tagName==="BUTTON"&&(document.querySelectorAll(".filter-button").forEach(t=>{t.classList.remove("filter-active")}),e.target.classList.add("filter-active"),q({filter:e.target.name}))});f.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(f.innerHTML="",T.innerHTML="",q({filter:e.target.name,page:e.target.id}))});async function q({filter:e,page:t=1,limit:s=12}){try{const r=await ae({filter:e,page:t,limit:s}),i=()=>{const p=r.data.totalPages;let c="";for(let a=1;a<=p;a++)Number(t)===a?c+=`<li id="${a}"  class="pg-item" > <button id="${a}" class="pg-num-btn pg-num-btn-active" type="button" name="${e}"
 >${a}</button></li> `:c+=`<li id="${a}"  class="pg-item" > <button id="${a}" class="pg-num-btn" type="button" name="${e}"
 >${a}</button></li> `;return c},d=r.data.results.reduce((p,{name:c,filter:a,imgUrl:j})=>p+`<li class="gallery-item" id=${c}>
          <div class="card" >
             <img class="gallery-image"
             src="${j}"
             alt="${a}"
            />
            </div>
            <div class="card-description">
            <p class="name-description" id="${a}:${c}">${c}</p>
            <p class="filter-description">${a}</p>
            </div>
          </li>`,""),v=i();f.innerHTML=v,T.innerHTML=d}catch(r){console.error(r),n.error({message:r.message,color:"red",position:"topCenter"})}}const ne="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",ie=document.querySelector(".field-search-wraper"),ce=document.querySelector(".exercises-wraper"),S=document.querySelector(".gallery"),le=document.querySelector(".search-icon");let A=document.querySelector("#slash");const g=document.querySelector(".waist"),H=document.querySelector("#search"),b="../../img/sprite.svg",R=innerWidth;let o,L;const $=h.create({baseURL:"https://energyflow.b.goit.study/api"}),U=async(e,{params:t})=>await $.get(e,{params:t});S.addEventListener("click",e=>{e.preventDefault(),g.innerHTML="",S.innerHTML="",A.innerHTML="",ie.style.display="block",g.classList.add("information-cards"),L=e.target.id,o=L.split(":"),$.defaults.params={page:1,limit:R>1400?"9":"8",muscles:o[0]==="Muscles"?o[1]:null,bodypart:o[0]==="Body parts"?o[1]:null,equipment:o[0]==="Equipment"?o[1]:null},A.insertAdjacentHTML("beforeend",`<p>&#8260;<span class="title-span">${o[1]}</span></p>`),U("/exercises",{params:{}}).then(t=>{Q(t.data.results)}).catch(t=>{n.error({message:t.message,position:"topRight"})})});let N;H.addEventListener("input",e=>{N=e.target.value});le.addEventListener("click",e=>{g.innerHTML="",S.innerHTML="",console.log(o),console.log(L),$.defaults.params={page:1,limit:R>1400?"9":"8",keyword:N,muscles:o[0]==="Muscles"?o[1]:null,bodypart:o[0]==="Body parts"?o[1]:null,equipment:o[0]==="Equipment"?o[1]:null},U("/exercises",{params:{}}).then(t=>{console.log(t.data.totalPages),t.data.totalPages===null&&(ce.style.height="100vh",g.innerHTML=`<div class='invalid-name'>${ne}</div>`),Q(t.data.results)}).catch(t=>{n.error({message:t.message,position:"topRight"})}).finally(()=>{H.value=""})});function Q(e){g.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:s,name:r,bodyPart:i,rating:d,time:v,target:p,_id:c})=>t+`<li class="waist-gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${d}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="${b}#icon-star"></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${c}">Start
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
            <li class="body-part"><span class="params-text">Body part:</span> ${i}</li>
            <li class="target"><span class="params-text">Target:</span> ${p}</li>
      </ul>
    </li>`,"")),Y()}const ue=document.querySelector(".footer-form"),de=document.querySelector(".footer-form-input"),me="https://energyflow.b.goit.study/api/subscription";ue.addEventListener("submit",pe);async function pe(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!ge(t))return ye();try{const s=await h.post(me,{email:t});if(s.status>=200&&s.status<300){const r=s.data.message;n.success({title:"OK",message:r,color:"white",position:"center"})}else throw new Error}catch(s){n.error({title:"Error",message:s.response.data.message,position:"center",backgroundColor:"gray"})}finally{de.value=""}}const ge=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),ye=()=>{n.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},l=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],u=document.querySelector(".deal-wheel"),m=u.querySelector(".spinner"),B=u.querySelector(".btn-spin"),E=u.querySelector(".ticker"),fe=document.querySelector(".get-prize-container"),z=360/l.length,he=Math.floor(180/l.length),V="is-spinning",W="selected",ve=window.getComputedStyle(m);let _,y=0,I=0,P;const be=()=>{l.forEach(({text:e,color:t,reaction:s},r)=>{const i=z*r*-1-he;m.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${s} style="--rotate: ${i}deg">
        <span class="text">${e}</span>
      </li>`)})},Me=()=>{m.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${l.map(({color:e},t)=>`${e} 0 ${100/l.length*(l.length-t)}%`).reverse()}
    );`)},we=()=>{Me(),be(),P=u.querySelectorAll(".prize")},Se=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),F=()=>{const e=ve.transform.split("(")[1].split(")")[0].split(","),t=e[0],s=e[1];let r=Math.atan2(s,t);r<0&&(r+=2*Math.PI);const i=Math.round(r*(180/Math.PI)),d=Math.floor(i/z);I!==d&&(E.style.animation="none",setTimeout(()=>E.style.animation=null,10),I=d),_=requestAnimationFrame(F)},Le=()=>{const e=Math.floor(y/z);P[e].classList.add(W);const t=l[e].text;setTimeout(()=>{u.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,fe.style.display="block"},3e3)};B.addEventListener("click",()=>{B.disabled=!0,y=Math.floor(Math.random()*360+Se(2e3,5e3)),P.forEach(e=>e.classList.remove(W)),u.classList.add(V),m.style.setProperty("--rotate",y),E.style.animation="none",F()});m.addEventListener("transitionend",()=>{cancelAnimationFrame(_),y%=360,Le(),u.classList.remove(V),m.style.setProperty("--rotate",y)});we();const Ee=document.querySelector("#prizeForm");document.querySelector(".input-get");Ee.addEventListener("submit",Te);async function Te(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!qe(t))return $e()}const qe=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),$e=()=>{n.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var k=document.getElementById("myModalPrize"),ze=document.getElementById("openModalBtnPrize");ze.onclick=function(){k.style.display="flex"};function G(){k.style.display="none"}window.onclick=function(e){e.target==k&&G()};var Pe=document.getElementById("closeModalPrize");Pe.onclick=function(){G()};document.addEventListener("DOMContentLoaded",function(){function e(){var r=document.getElementById("email-prize").value,i=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!i.test(r)){n.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}n.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var r=document.getElementById("myModalPrize");r.style.display="none"}var s=document.querySelector(".button-get");s.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map
