import{a as W}from"./assets/modal-form-1056f73c.js";import{a as M,i as n}from"./assets/vendor-8598a644.js";const F=document.querySelector(".filter-list"),L=document.querySelector(".gallery"),f=document.querySelector(".pagination-btn"),V=document.querySelector(".waist"),j=M.create({baseURL:"https://energyflow.b.goit.study/api"});let z;const G=document.querySelector('button[name="Muscles"]');document.addEventListener("DOMContentLoaded",async()=>{await E({filter:"Muscles"}),G.classList.add("filter-active");let e=document.querySelector(".pg-num-btn");console.log(e)});const _=async({filter:e,page:t,limit:s})=>{try{return z=await j.get("/filters",{params:{filter:e,page:t,limit:s}}),z}catch(r){n.error({message:r.message,color:"red",position:"topCenter"})}};F.addEventListener("click",e=>{e.preventDefault(),L.innerHTML="",f.innerHTML="",V.innerHTML="",e.target.tagName==="BUTTON"&&(document.querySelectorAll(".filter-button").forEach(t=>{t.classList.remove("filter-active")}),e.target.classList.add("filter-active"),E({filter:e.target.name}))});f.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(f.innerHTML="",L.innerHTML="",E({filter:e.target.name,page:e.target.id}))});async function E({filter:e,page:t=1,limit:s=12}){try{const r=await _({filter:e,page:t,limit:s}),o=()=>{const p=r.data.totalPages;let i="";for(let a=1;a<=p;a++)Number(t)===a?i+=`<li id="${a}"  class="pg-item" > <button id="${a}" class="pg-num-btn pg-num-btn-active" type="button" name="${e}"
 >${a}</button></li> `:i+=`<li id="${a}"  class="pg-item" > <button id="${a}" class="pg-num-btn" type="button" name="${e}"
 >${a}</button></li> `;return i},d=r.data.results.reduce((p,{name:i,filter:a,imgUrl:N})=>p+`<li class="gallery-item" id=${i}>
          <div class="card" >
             <img class="gallery-image"
             src="${N}"
             alt="${a}"
            />
            </div>
            <div class="card-description">
            <p class="name-description" id="${a}:${i}">${i}"</p>
            <p class="filter-description">${a}</p>
            </div>
          </li>`,""),h=o();f.innerHTML=h,L.innerHTML=d}catch(r){console.error(r),n.error({message:r.message,color:"red",position:"topCenter"})}}const Y="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",K=document.querySelector(".field-search-wraper"),Z=document.querySelector(".exercises-wraper"),v=document.querySelector(".gallery"),Q=document.querySelector(".search-icon");let P=document.querySelector("#slash");const g=document.querySelector(".waist"),x=document.querySelector("#search"),B=innerWidth;let u;const w=M.create({baseURL:"https://energyflow.b.goit.study/api"}),A=async(e,{params:t})=>await w.get(e,{params:t});v.addEventListener("click",e=>{e.preventDefault(),g.innerHTML="",v.innerHTML="",P.innerHTML="",K.style.display="block",g.classList.add("information-cards");const s=e.target.id.split(":");w.defaults.params={page:1,limit:B>1400?"9":"8",muscles:s[0]==="Muscles"?s[1]:null,bodypart:s[0]==="Body parts"?s[1]:null,equipment:s[0]==="Equipment"?s[1]:null},P.insertAdjacentHTML("beforeend",`<p>&#8260;<span class="title-span">${s[1]}</span></p>`),A("/exercises",{params:{}}).then(r=>{I(r.data.results)}).catch(r=>{n.error({message:r.message,position:"topRight"})})});let C;x.addEventListener("input",e=>{C=e.target.value});Q.addEventListener("click",e=>{g.innerHTML="",v.innerHTML="",w.defaults.params={page:1,limit:B>1400?"9":"8",keyword:C,muscles:u[0]==="Muscles"?u[1]:null,bodypart:u[0]==="Body parts"?u[1]:null,equipment:u[0]==="Equipment"?u[1]:null},A("/exercises",{params:{}}).then(t=>{console.log(t.data.totalPages),t.data.totalPages===null&&(Z.style.height="100vh",g.innerHTML=`<div class='invalid-name'>${Y}</div>`),I(t.data.results)}).catch(t=>{n.error({message:t.message,position:"topRight"})}).finally(()=>{x.value=""})});function I(e){g.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:s,name:r,bodyPart:o,rating:d,time:h,target:p,_id:i})=>t+`<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${d}</p>
            <svg class="icon-star" width="12" height="12">
                <use href=./img/sprite.svg#icon-star></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${i}">Start
            <svg class="icon-right" width="14" height="16">
                <use href="./img/sprite.svg#icon-right"></use>
            </svg>
            </button>
        </div>
      </div>

      <div class="title-card">
          <div class="icon-card">
              <svg class="run" width="24" height="24">
                  <use href="./img/sprite.svg#run"></use>
              </svg>
          </div>
          <h3>${r}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${s}/${h}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${o}</li>
            <li class="target"><span class="params-text">Target:</span> ${p}</li>
      </ul>
    </li>`,"")),W()}const J=document.querySelector(".footer-form"),X=document.querySelector(".footer-form-input"),ee="https://energyflow.b.goit.study/api/subscription";J.addEventListener("submit",te);async function te(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!se(t))return re();try{const s=await M.post(ee,{email:t});if(s.status>=200&&s.status<300){const r=s.data.message;n.success({title:"OK",message:r,color:"white",position:"center"})}else throw new Error}catch(s){n.error({title:"Error",message:s.response.data.message,position:"center",backgroundColor:"gray"})}finally{X.value=""}}const se=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),re=()=>{n.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},l=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],c=document.querySelector(".deal-wheel"),m=c.querySelector(".spinner"),k=c.querySelector(".btn-spin"),b=c.querySelector(".ticker"),ae=document.querySelector(".get-prize-container"),S=360/l.length,ne=Math.floor(180/l.length),H="is-spinning",O="selected",oe=window.getComputedStyle(m);let D,y=0,q=0,T;const ie=()=>{l.forEach(({text:e,color:t,reaction:s},r)=>{const o=S*r*-1-ne;m.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${s} style="--rotate: ${o}deg">
        <span class="text">${e}</span>
      </li>`)})},le=()=>{m.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${l.map(({color:e},t)=>`${e} 0 ${100/l.length*(l.length-t)}%`).reverse()}
    );`)},ce=()=>{le(),ie(),T=c.querySelectorAll(".prize")},de=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),R=()=>{const e=oe.transform.split("(")[1].split(")")[0].split(","),t=e[0],s=e[1];let r=Math.atan2(s,t);r<0&&(r+=2*Math.PI);const o=Math.round(r*(180/Math.PI)),d=Math.floor(o/S);q!==d&&(b.style.animation="none",setTimeout(()=>b.style.animation=null,10),q=d),D=requestAnimationFrame(R)},ue=()=>{const e=Math.floor(y/S);T[e].classList.add(O);const t=l[e].text;setTimeout(()=>{c.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,ae.style.display="block"},3e3)};k.addEventListener("click",()=>{k.disabled=!0,y=Math.floor(Math.random()*360+de(2e3,5e3)),T.forEach(e=>e.classList.remove(O)),c.classList.add(H),m.style.setProperty("--rotate",y),b.style.animation="none",R()});m.addEventListener("transitionend",()=>{cancelAnimationFrame(D),y%=360,ue(),c.classList.remove(H),m.style.setProperty("--rotate",y)});ce();const me=document.querySelector("#prizeForm");document.querySelector(".input-get");me.addEventListener("submit",pe);async function pe(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!ge(t))return ye()}const ge=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),ye=()=>{n.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var $=document.getElementById("myModalPrize"),fe=document.getElementById("openModalBtnPrize");fe.onclick=function(){$.style.display="flex"};function U(){$.style.display="none"}window.onclick=function(e){e.target==$&&U()};var he=document.getElementById("closeModalPrize");he.onclick=function(){U()};document.addEventListener("DOMContentLoaded",function(){function e(){var r=document.getElementById("email-prize").value,o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!o.test(r)){n.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}n.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var r=document.getElementById("myModalPrize");r.style.display="none"}var s=document.querySelector(".button-get");s.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map
