import{i as v,a as te}from"./assets/skroll-btn-f86a557c.js";import{T as D,i,a as h}from"./assets/vendor-29bef8ec.js";const se=document.querySelector(".quote-info"),C="quote-of-the-day",L="date",ne=new Date,S=ne.getDate();async function oe(){try{const n=(await h.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;O(n),re(n,S)}catch(e){i.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function re(e,t){localStorage.setItem(C,JSON.stringify(e)),localStorage.setItem(L,t)}//! RENDER QUOTE
function O(e){const t=[e];se.innerHTML=t.reduce((n,{quote:s,author:c})=>n+`<p class="quote-text">${s}</p>
        <h3 class="quote-author">${c}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function ae(){const e=localStorage.getItem(L);if(isNaN(e)){i.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===S){const t=localStorage.getItem(C);if(t){const n=JSON.parse(t);O(n)}return}await oe(),localStorage.setItem(L,S.toString())}ae();//! ANIMATION 
new D("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new D("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const ie=document.querySelector(".waist-pagination"),ce=document.querySelector(".filter-list"),$=document.querySelector(".gallery"),f=document.querySelector(".pagination-btn"),R=document.querySelector(".waist"),N=document.querySelector(".field-search-wraper"),U=document.querySelector("#slash"),le=h.create({baseURL:"https://energyflow.b.goit.study/api"});let I;const ue=document.querySelector('button[name="Muscles"]');document.addEventListener("DOMContentLoaded",async()=>{await q({filter:"Muscles"}),ue.classList.add("filter-active")});const de=async({filter:e,page:t,limit:n})=>{try{return I=await le.get("/filters",{params:{filter:e,page:t,limit:n}}),I}catch(s){i.error({message:s.message,color:"red",position:"topCenter"})}};ce.addEventListener("click",e=>{e.preventDefault(),$.innerHTML="",f.innerHTML="",R.innerHTML="",U.innerHTML="",N.style="display:none",ie.innerHTML="",e.target.tagName==="BUTTON"&&(document.querySelectorAll(".filter-button").forEach(t=>{t.classList.remove("filter-active")}),e.target.classList.add("filter-active"),q({filter:e.target.name}))});f.addEventListener("click",e=>{e.preventDefault(),R.innerHTML="",f.innerHTML="",$.innerHTML="",U.innerHTML="",N.style="display:none",e.target.tagName==="BUTTON"&&q({filter:e.target.name,page:e.target.id})});async function q({filter:e,page:t=1,limit:n=12}){try{const s=await de({filter:e,page:t,limit:n}),c=()=>{const p=s.data.totalPages;let a="";for(let o=1;o<=p;o++)Number(t)===o?a+=`<li id="${o}"  class="pg-item" > <button id="${o}" class="pg-num-btn pg-num-btn-active" type="button" name="${e}"
 >${o}</button></li> `:a+=`<li id="${o}"  class="pg-item" > <button id="${o}" class="pg-num-btn" type="button" name="${e}"
 >${o}</button></li> `;return a},d=s.data.results.reduce((p,{name:a,filter:o,imgUrl:ee})=>p+`<li class="gallery-item" id=${a}>
          <div class="card" id="${o}:${a}">
             <img class="gallery-image"
             src="${ee}"
             alt="${o}"
            />
            </div>
            <div class="card-description" id="${o}:${a}">
            <p class="name-description" id="${o}:${a}">${a}</p>
            <p class="filter-description" id="${o}:${a}">${o}</p>
            </div>
          </li>`,""),b=c();f.innerHTML=b,$.innerHTML=d}catch(s){console.error(s),i.error({message:s.message,color:"red",position:"topCenter"})}}const ge="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",pe=document.querySelector(".field-search-wraper"),me=document.querySelector(".exercises-wraper"),T=document.querySelector(".gallery"),ye=document.querySelector(".search-icon");let fe=document.querySelector("#slash");const m=document.querySelector(".waist"),_=document.querySelector("#search"),he=document.querySelector(".pagination-btn"),W=document.querySelector(".waist-pagination"),V=innerWidth;let r,w,F=1,x;const P=h.create({baseURL:"https://energyflow.b.goit.study/api"}),G=async(e,{params:t})=>await P.get(e,{params:t});T.addEventListener("click",e=>{e.preventDefault(),!(e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")&&(he.innerHTML="",m.innerHTML="",T.innerHTML="",fe.innerHTML="",W.innerHTML="",pe.style.display="block",m.classList.add("information-cards"),w=e.target.id,r=w.split(":"),P.defaults.params={page:F,limit:V>1400?"9":"8",muscles:r[0]==="Muscles"?r[1]:null,bodypart:r[0]==="Body parts"?r[1]:null,equipment:r[0]==="Equipment"?r[1]:null},be())});let M="";function be(){G("/exercises",{params:{}}).then(e=>{x=e.data.totalPages;const n=(()=>{for(let s=1;s<=x;s++)Number(F)===s?M+=`<li id="${s}"  class="pg-item" > <button id="${s}" class="pg-num-btn pg-num-btn-active" type="button"
 >${s}</button></li> `:M+=`<li id="${s}"  class="pg-item" > <button id="${s}" class="pg-num-btn" type="button"
 >${s}</button></li> `;return M})();W.innerHTML=n,j(e.data.results)}).catch(e=>{i.error({message:e.message,position:"topRight"})})}let Q;_.addEventListener("input",e=>{Q=e.target.value});ye.addEventListener("click",e=>{m.innerHTML="",T.innerHTML="",console.log(r),console.log(w),P.defaults.params={page:1,limit:V>1400?"9":"8",keyword:Q,muscles:r[0]==="Muscles"?r[1]:null,bodypart:r[0]==="Body parts"?r[1]:null,equipment:r[0]==="Equipment"?r[1]:null},G("/exercises",{params:{}}).then(t=>{console.log(t.data.totalPages),t.data.totalPages===null&&(me.style.height="100vh",m.innerHTML=`<div class='invalid-name'>${ge}</div>`),j(t.data.results)}).catch(t=>{i.error({message:t.message,position:"topRight"})}).finally(()=>{_.value=""})});function j(e){m.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:n,name:s,bodyPart:c,rating:d,time:b,target:p,_id:a})=>t+`<li class="waist-gallery-card">
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
            <li class="calories"><span class="params-text">Burned calories:</span> ${n}/${b}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${c}</li>
            <li class="target"><span class="params-text">Target:</span> ${p}</li>
      </ul>
    </li>`,"")),te()}const ve=document.querySelector(".footer-form"),Me=document.querySelector(".footer-form-input"),Le="https://energyflow.b.goit.study/api/subscription";ve.addEventListener("submit",Se);async function Se(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!Te(t))return we();try{const n=await h.post(Le,{email:t});if(n.status>=200&&n.status<300){const s=n.data.message;i.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(n){i.error({title:"Error",message:n.response.data.message,position:"center",backgroundColor:"gray"})}finally{Me.value=""}}const Te=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),we=()=>{i.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},l=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],u=document.querySelector(".deal-wheel"),g=u.querySelector(".spinner"),B=u.querySelector(".btn-spin"),E=u.querySelector(".ticker"),Ee=document.querySelector(".get-prize-container"),z=360/l.length,$e=Math.floor(180/l.length),Y="is-spinning",J="selected",qe=window.getComputedStyle(g);let K,y=0,H=0,k;const Pe=()=>{l.forEach(({text:e,color:t,reaction:n},s)=>{const c=z*s*-1-$e;g.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${n} style="--rotate: ${c}deg">
        <span class="text">${e}</span>
      </li>`)})},ze=()=>{g.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${l.map(({color:e},t)=>`${e} 0 ${100/l.length*(l.length-t)}%`).reverse()}
    );`)},ke=()=>{ze(),Pe(),k=u.querySelectorAll(".prize")},Ae=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),Z=()=>{const e=qe.transform.split("(")[1].split(")")[0].split(","),t=e[0],n=e[1];let s=Math.atan2(n,t);s<0&&(s+=2*Math.PI);const c=Math.round(s*(180/Math.PI)),d=Math.floor(c/z);H!==d&&(E.style.animation="none",setTimeout(()=>E.style.animation=null,10),H=d),K=requestAnimationFrame(Z)},Ie=()=>{const e=Math.floor(y/z);k[e].classList.add(J);const t=l[e].text;setTimeout(()=>{u.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,Ee.style.display="block"},3e3)};B.addEventListener("click",()=>{B.disabled=!0,y=Math.floor(Math.random()*360+Ae(2e3,5e3)),k.forEach(e=>e.classList.remove(J)),u.classList.add(Y),g.style.setProperty("--rotate",y),E.style.animation="none",Z()});g.addEventListener("transitionend",()=>{cancelAnimationFrame(K),y%=360,Ie(),u.classList.remove(Y),g.style.setProperty("--rotate",y)});ke();const xe=document.querySelector("#prizeForm");document.querySelector(".input-get");xe.addEventListener("submit",Be);async function Be(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!He(t))return De()}const He=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),De=()=>{i.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var A=document.getElementById("myModalPrize"),Ce=document.getElementById("openModalBtnPrize");Ce.onclick=function(){A.style.display="flex"};function X(){A.style.display="none"}window.onclick=function(e){e.target==A&&X()};var Oe=document.getElementById("closeModalPrize");Oe.onclick=function(){X()};document.addEventListener("DOMContentLoaded",function(){function e(){var s=document.getElementById("email-prize").value,c=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!c.test(s)){i.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}i.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var s=document.getElementById("myModalPrize");s.style.display="none"}var n=document.querySelector(".button-get");n.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map
