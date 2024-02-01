import{i as v,a as Z}from"./assets/skroll-btn-1f03fc07.js";import{T as H,i,a as h}from"./assets/vendor-29bef8ec.js";const X=document.querySelector(".quote-info"),C="quote-of-the-day",S="date",ee=new Date,L=ee.getDate();async function te(){try{const n=(await h.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;O(n),se(n,L)}catch(e){i.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function se(e,t){localStorage.setItem(C,JSON.stringify(e)),localStorage.setItem(S,t)}//! RENDER QUOTE
function O(e){const t=[e];X.innerHTML=t.reduce((n,{quote:s,author:c})=>n+`<p class="quote-text">${s}</p>
        <h3 class="quote-author">${c}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function ne(){const e=localStorage.getItem(S);if(isNaN(e)){i.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===L){const t=localStorage.getItem(C);if(t){const n=JSON.parse(t);O(n)}return}await te(),localStorage.setItem(S,L.toString())}ne();//! ANIMATION 
new H("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new H("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const oe=document.querySelector(".field-search-wraper"),ae=document.querySelector(".filter-list"),E=document.querySelector(".gallery"),f=document.querySelector(".pagination-btn"),re=document.querySelector(".waist"),ie=document.querySelector(".waist-pagination");let ce=document.querySelector("#slash");const le=h.create({baseURL:"https://energyflow.b.goit.study/api"});let x;const ue=document.querySelector('button[name="Muscles"]');document.addEventListener("DOMContentLoaded",async()=>{await T({filter:"Muscles"}),ue.classList.add("filter-active");let e=document.querySelector(".pg-num-btn");console.log(e)});const de=async({filter:e,page:t,limit:n})=>{try{return x=await le.get("/filters",{params:{filter:e,page:t,limit:n}}),x}catch(s){i.error({message:s.message,color:"red",position:"topCenter"})}};ae.addEventListener("click",e=>{e.preventDefault(),oe.style.display="none",E.innerHTML="",f.innerHTML="",re.innerHTML="",ce.innerHTML="",ie.innerHTML="",e.target.tagName==="BUTTON"&&(document.querySelectorAll(".filter-button").forEach(t=>{t.classList.remove("filter-active")}),e.target.classList.add("filter-active"),T({filter:e.target.name}))});f.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(f.innerHTML="",E.innerHTML="",T({filter:e.target.name,page:e.target.id}))});async function T({filter:e,page:t=1,limit:n=12}){try{const s=await de({filter:e,page:t,limit:n}),c=()=>{const p=s.data.totalPages;let r="";for(let o=1;o<=p;o++)Number(t)===o?r+=`<li id="${o}"  class="pg-item" > <button id="${o}" class="pg-num-btn pg-num-btn-active" type="button" name="${e}"
 >${o}</button></li> `:r+=`<li id="${o}"  class="pg-item" > <button id="${o}" class="pg-num-btn" type="button" name="${e}"
 >${o}</button></li> `;return r},d=s.data.results.reduce((p,{name:r,filter:o,imgUrl:K})=>p+`<li class="gallery-item" id=${r}>
          <div class="card" id="${o}:${r}">
             <img class="gallery-image"
             src="${K}"
             alt="${o}"
            />
            </div>
            <div class="card-description" id="${o}:${r}">
            <p class="name-description" id="${o}:${r}">${r}</p>
            <p class="filter-description" id="${o}:${r}">${o}</p>
            </div>
          </li>`,""),b=c();f.innerHTML=b,E.innerHTML=d}catch(s){console.error(s),i.error({message:s.message,color:"red",position:"topCenter"})}}const ge="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",pe=document.querySelector(".field-search-wraper"),me=document.querySelector(".exercises-wraper"),w=document.querySelector(".gallery"),ye=document.querySelector(".search-icon");let fe=document.querySelector("#slash");const m=document.querySelector(".waist"),R=document.querySelector("#search"),he=document.querySelector(".pagination-btn"),N=document.querySelector(".waist-pagination"),U=innerWidth;let a,$,W=1,I;const P=h.create({baseURL:"https://energyflow.b.goit.study/api"}),V=async(e,{params:t})=>await P.get(e,{params:t});w.addEventListener("click",e=>{e.preventDefault(),!(e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")&&(he.innerHTML="",m.innerHTML="",w.innerHTML="",fe.innerHTML="",N.innerHTML="",pe.style.display="block",m.classList.add("information-cards"),$=e.target.id,a=$.split(":"),P.defaults.params={page:W,limit:U>1400?"9":"8",muscles:a[0]==="Muscles"?a[1]:null,bodypart:a[0]==="Body parts"?a[1]:null,equipment:a[0]==="Equipment"?a[1]:null},be())});let M="";function be(){V("/exercises",{params:{}}).then(e=>{I=e.data.totalPages;const n=(()=>{for(let s=1;s<=I;s++)Number(W)===s?M+=`<li id="${s}"  class="pg-item" > <button id="${s}" class="pg-num-btn pg-num-btn-active" type="button"
 >${s}</button></li> `:M+=`<li id="${s}"  class="pg-item" > <button id="${s}" class="pg-num-btn" type="button"
 >${s}</button></li> `;return M})();N.innerHTML=n,_(e.data.results)}).catch(e=>{i.error({message:e.message,position:"topRight"})})}let Q;R.addEventListener("input",e=>{Q=e.target.value});ye.addEventListener("click",e=>{m.innerHTML="",w.innerHTML="",console.log(a),console.log($),P.defaults.params={page:1,limit:U>1400?"9":"8",keyword:Q,muscles:a[0]==="Muscles"?a[1]:null,bodypart:a[0]==="Body parts"?a[1]:null,equipment:a[0]==="Equipment"?a[1]:null},V("/exercises",{params:{}}).then(t=>{console.log(t.data.totalPages),t.data.totalPages===null&&(me.style.height="100vh",m.innerHTML=`<div class='invalid-name'>${ge}</div>`),_(t.data.results)}).catch(t=>{i.error({message:t.message,position:"topRight"})}).finally(()=>{R.value=""})});function _(e){m.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:n,name:s,bodyPart:c,rating:d,time:b,target:p,_id:r})=>t+`<li class="waist-gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${d}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="${v}#icon-star"></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${r}">Start
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
    </li>`,"")),Z()}const ve=document.querySelector(".footer-form"),Me=document.querySelector(".footer-form-input"),Se="https://energyflow.b.goit.study/api/subscription";ve.addEventListener("submit",Le);async function Le(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!we(t))return $e();try{const n=await h.post(Se,{email:t});if(n.status>=200&&n.status<300){const s=n.data.message;i.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(n){i.error({title:"Error",message:n.response.data.message,position:"center",backgroundColor:"gray"})}finally{Me.value=""}}const we=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),$e=()=>{i.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},l=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],u=document.querySelector(".deal-wheel"),g=u.querySelector(".spinner"),A=u.querySelector(".btn-spin"),q=u.querySelector(".ticker"),qe=document.querySelector(".get-prize-container"),z=360/l.length,Ee=Math.floor(180/l.length),F="is-spinning",G="selected",Te=window.getComputedStyle(g);let j,y=0,D=0,k;const Pe=()=>{l.forEach(({text:e,color:t,reaction:n},s)=>{const c=z*s*-1-Ee;g.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${n} style="--rotate: ${c}deg">
        <span class="text">${e}</span>
      </li>`)})},ze=()=>{g.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${l.map(({color:e},t)=>`${e} 0 ${100/l.length*(l.length-t)}%`).reverse()}
    );`)},ke=()=>{ze(),Pe(),k=u.querySelectorAll(".prize")},Be=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),Y=()=>{const e=Te.transform.split("(")[1].split(")")[0].split(","),t=e[0],n=e[1];let s=Math.atan2(n,t);s<0&&(s+=2*Math.PI);const c=Math.round(s*(180/Math.PI)),d=Math.floor(c/z);D!==d&&(q.style.animation="none",setTimeout(()=>q.style.animation=null,10),D=d),j=requestAnimationFrame(Y)},xe=()=>{const e=Math.floor(y/z);k[e].classList.add(G);const t=l[e].text;setTimeout(()=>{u.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,qe.style.display="block"},3e3)};A.addEventListener("click",()=>{A.disabled=!0,y=Math.floor(Math.random()*360+Be(2e3,5e3)),k.forEach(e=>e.classList.remove(G)),u.classList.add(F),g.style.setProperty("--rotate",y),q.style.animation="none",Y()});g.addEventListener("transitionend",()=>{cancelAnimationFrame(j),y%=360,xe(),u.classList.remove(F),g.style.setProperty("--rotate",y)});ke();const Ie=document.querySelector("#prizeForm");document.querySelector(".input-get");Ie.addEventListener("submit",Ae);async function Ae(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!De(t))return He()}const De=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),He=()=>{i.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var B=document.getElementById("myModalPrize"),Ce=document.getElementById("openModalBtnPrize");Ce.onclick=function(){B.style.display="flex"};function J(){B.style.display="none"}window.onclick=function(e){e.target==B&&J()};var Oe=document.getElementById("closeModalPrize");Oe.onclick=function(){J()};document.addEventListener("DOMContentLoaded",function(){function e(){var s=document.getElementById("email-prize").value,c=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!c.test(s)){i.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}i.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var s=document.getElementById("myModalPrize");s.style.display="none"}var n=document.querySelector(".button-get");n.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map
