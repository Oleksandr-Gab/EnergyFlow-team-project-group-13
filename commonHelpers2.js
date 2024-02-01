import{i as v,a as te}from"./assets/skroll-btn-1f03fc07.js";import{T as D,i,a as h}from"./assets/vendor-29bef8ec.js";const se=document.querySelector(".quote-info"),C="quote-of-the-day",L="date",re=new Date,S=re.getDate();async function ne(){try{const r=(await h.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;R(r),oe(r,S)}catch(e){i.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function oe(e,t){localStorage.setItem(C,JSON.stringify(e)),localStorage.setItem(L,t)}//! RENDER QUOTE
function R(e){const t=[e];se.innerHTML=t.reduce((r,{quote:s,author:c})=>r+`<p class="quote-text">${s}</p>
        <h3 class="quote-author">${c}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function ae(){const e=localStorage.getItem(L);if(isNaN(e)){i.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===S){const t=localStorage.getItem(C);if(t){const r=JSON.parse(t);R(r)}return}await ne(),localStorage.setItem(L,S.toString())}ae();//! ANIMATION 
new D("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new D("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();document.querySelector(".field-search-wraper");const ie=document.querySelector(".filter-list"),$=document.querySelector(".gallery"),f=document.querySelector(".pagination-btn"),O=document.querySelector(".waist"),N=document.querySelector(".field-search-wraper"),U=document.querySelector("#slash"),ce=h.create({baseURL:"https://energyflow.b.goit.study/api"});let A;const le=document.querySelector('button[name="Muscles"]');document.addEventListener("DOMContentLoaded",async()=>{await q({filter:"Muscles"}),le.classList.add("filter-active")});const ue=async({filter:e,page:t,limit:r})=>{try{return A=await ce.get("/filters",{params:{filter:e,page:t,limit:r}}),A}catch(s){i.error({message:s.message,color:"red",position:"topCenter"})}};ie.addEventListener("click",e=>{e.preventDefault(),$.innerHTML="",f.innerHTML="",O.innerHTML="",U.innerHTML="",N.style="display:none",e.target.tagName==="BUTTON"&&(document.querySelectorAll(".filter-button").forEach(t=>{t.classList.remove("filter-active")}),e.target.classList.add("filter-active"),q({filter:e.target.name}))});f.addEventListener("click",e=>{e.preventDefault(),O.innerHTML="",f.innerHTML="",$.innerHTML="",U.innerHTML="",N.style="display:none",e.target.tagName==="BUTTON"&&q({filter:e.target.name,page:e.target.id})});async function q({filter:e,page:t=1,limit:r=12}){try{const s=await ue({filter:e,page:t,limit:r}),c=()=>{const p=s.data.totalPages;let a="";for(let n=1;n<=p;n++)Number(t)===n?a+=`<li id="${n}"  class="pg-item" > <button id="${n}" class="pg-num-btn pg-num-btn-active" type="button" name="${e}"
 >${n}</button></li> `:a+=`<li id="${n}"  class="pg-item" > <button id="${n}" class="pg-num-btn" type="button" name="${e}"
 >${n}</button></li> `;return a},d=s.data.results.reduce((p,{name:a,filter:n,imgUrl:ee})=>p+`<li class="gallery-item" id=${a}>
          <div class="card" id="${n}:${a}">
             <img class="gallery-image"
             src="${ee}"
             alt="${n}"
            />
            </div>
            <div class="card-description" id="${n}:${a}">
            <p class="name-description" id="${n}:${a}">${a}</p>
            <p class="filter-description" id="${n}:${a}">${n}</p>
            </div>
          </li>`,""),b=c();f.innerHTML=b,$.innerHTML=d}catch(s){console.error(s),i.error({message:s.message,color:"red",position:"topCenter"})}}const de="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",ge=document.querySelector(".field-search-wraper"),pe=document.querySelector(".exercises-wraper"),w=document.querySelector(".gallery"),me=document.querySelector(".search-icon");let ye=document.querySelector("#slash");const m=document.querySelector(".waist"),_=document.querySelector("#search"),fe=document.querySelector(".pagination-btn"),W=document.querySelector(".waist-pagination"),V=innerWidth;let o,E,F=1,B;const P=h.create({baseURL:"https://energyflow.b.goit.study/api"}),Q=async(e,{params:t})=>await P.get(e,{params:t});w.addEventListener("click",e=>{e.preventDefault(),!(e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")&&(fe.innerHTML="",m.innerHTML="",w.innerHTML="",ye.innerHTML="",W.innerHTML="",ge.style.display="block",m.classList.add("information-cards"),E=e.target.id,o=E.split(":"),P.defaults.params={page:F,limit:V>1400?"9":"8",muscles:o[0]==="Muscles"?o[1]:null,bodypart:o[0]==="Body parts"?o[1]:null,equipment:o[0]==="Equipment"?o[1]:null},he())});let M="";function he(){Q("/exercises",{params:{}}).then(e=>{B=e.data.totalPages;const r=(()=>{for(let s=1;s<=B;s++)Number(F)===s?M+=`<li id="${s}"  class="pg-item" > <button id="${s}" class="pg-num-btn pg-num-btn-active" type="button"
 >${s}</button></li> `:M+=`<li id="${s}"  class="pg-item" > <button id="${s}" class="pg-num-btn" type="button"
 >${s}</button></li> `;return M})();W.innerHTML=r,j(e.data.results)}).catch(e=>{i.error({message:e.message,position:"topRight"})})}let G;_.addEventListener("input",e=>{G=e.target.value});me.addEventListener("click",e=>{m.innerHTML="",w.innerHTML="",console.log(o),console.log(E),P.defaults.params={page:1,limit:V>1400?"9":"8",keyword:G,muscles:o[0]==="Muscles"?o[1]:null,bodypart:o[0]==="Body parts"?o[1]:null,equipment:o[0]==="Equipment"?o[1]:null},Q("/exercises",{params:{}}).then(t=>{console.log(t.data.totalPages),t.data.totalPages===null&&(pe.style.height="100vh",m.innerHTML=`<div class='invalid-name'>${de}</div>`),j(t.data.results)}).catch(t=>{i.error({message:t.message,position:"topRight"})}).finally(()=>{_.value=""})});function j(e){m.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:r,name:s,bodyPart:c,rating:d,time:b,target:p,_id:a})=>t+`<li class="waist-gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${d}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="${v}#icon-star"></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${a}">Start
            <svg class="icon-right" width="14" height="16">
                <use href="${v}#icon-right"></use>
            </svg>
            </button>
        </div>
      </div>

      <div class="title-card">
          <div class="icon-card">
              <svg class="run" width="24" height="24">
                  <use href="${v}#run"></use>
              </svg>
          </div>
          <h3>${s}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${r}/${b}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${c}</li>
            <li class="target"><span class="params-text">Target:</span> ${p}</li>
      </ul>
    </li>`,"")),te()}const be=document.querySelector(".footer-form"),ve=document.querySelector(".footer-form-input"),Me="https://energyflow.b.goit.study/api/subscription";be.addEventListener("submit",Le);async function Le(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!Se(t))return we();try{const r=await h.post(Me,{email:t});if(r.status>=200&&r.status<300){const s=r.data.message;i.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(r){i.error({title:"Error",message:r.response.data.message,position:"center",backgroundColor:"gray"})}finally{ve.value=""}}const Se=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),we=()=>{i.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},l=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],u=document.querySelector(".deal-wheel"),g=u.querySelector(".spinner"),I=u.querySelector(".btn-spin"),T=u.querySelector(".ticker"),Ee=document.querySelector(".get-prize-container"),z=360/l.length,Te=Math.floor(180/l.length),Y="is-spinning",J="selected",$e=window.getComputedStyle(g);let K,y=0,H=0,k;const qe=()=>{l.forEach(({text:e,color:t,reaction:r},s)=>{const c=z*s*-1-Te;g.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${r} style="--rotate: ${c}deg">
        <span class="text">${e}</span>
      </li>`)})},Pe=()=>{g.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${l.map(({color:e},t)=>`${e} 0 ${100/l.length*(l.length-t)}%`).reverse()}
    );`)},ze=()=>{Pe(),qe(),k=u.querySelectorAll(".prize")},ke=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),Z=()=>{const e=$e.transform.split("(")[1].split(")")[0].split(","),t=e[0],r=e[1];let s=Math.atan2(r,t);s<0&&(s+=2*Math.PI);const c=Math.round(s*(180/Math.PI)),d=Math.floor(c/z);H!==d&&(T.style.animation="none",setTimeout(()=>T.style.animation=null,10),H=d),K=requestAnimationFrame(Z)},xe=()=>{const e=Math.floor(y/z);k[e].classList.add(J);const t=l[e].text;setTimeout(()=>{u.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,Ee.style.display="block"},3e3)};I.addEventListener("click",()=>{I.disabled=!0,y=Math.floor(Math.random()*360+ke(2e3,5e3)),k.forEach(e=>e.classList.remove(J)),u.classList.add(Y),g.style.setProperty("--rotate",y),T.style.animation="none",Z()});g.addEventListener("transitionend",()=>{cancelAnimationFrame(K),y%=360,xe(),u.classList.remove(Y),g.style.setProperty("--rotate",y)});ze();const Ae=document.querySelector("#prizeForm");document.querySelector(".input-get");Ae.addEventListener("submit",Be);async function Be(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!Ie(t))return He()}const Ie=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),He=()=>{i.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var x=document.getElementById("myModalPrize"),De=document.getElementById("openModalBtnPrize");De.onclick=function(){x.style.display="flex"};function X(){x.style.display="none"}window.onclick=function(e){e.target==x&&X()};var Ce=document.getElementById("closeModalPrize");Ce.onclick=function(){X()};document.addEventListener("DOMContentLoaded",function(){function e(){var s=document.getElementById("email-prize").value,c=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!c.test(s)){i.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}i.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var s=document.getElementById("myModalPrize");s.style.display="none"}var r=document.querySelector(".button-get");r.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map
