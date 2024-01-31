import{a as j}from"./assets/skroll-btn-25847db5.js";import{a as b,i as n}from"./assets/vendor-3806a34f.js";const G=document.querySelector(".filter-list"),M=document.querySelector(".gallery"),L=document.querySelector(".pagination-btn"),V=document.querySelector(".waist"),_=b.create({baseURL:"https://energyflow.b.goit.study/api"});let P;const Y=document.querySelector('button[name="Muscles"]');let k;document.addEventListener("DOMContentLoaded",async()=>{await E({filter:"Muscles"}),Y.classList.add("filter-active"),k=document.querySelector(".pg-num-btn"),k.classList.add("pg-num-btn-active")});const K=async({filter:e,page:t,limit:r})=>{try{return P=await _.get("/filters",{params:{filter:e,page:t,limit:r}}),P}catch(s){console.error(s),n.error({message:s.message,color:"red",position:"topCenter"})}};G.addEventListener("click",e=>{e.preventDefault(),M.innerHTML="",L.innerHTML="",V.innerHTML="",e.target.tagName==="BUTTON"&&(document.querySelectorAll(".filter-button").forEach(t=>{t.classList.remove("filter-active")}),e.target.classList.add("filter-active"),E({filter:e.target.name}))});L.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&e.target.classList.contains("pg-num-btn")&&(document.querySelectorAll(".pg-num-btn").forEach(t=>{t.classList.remove("pg-num-btn-active")}),e.target.classList.add("pg-num-btn-active"),M.innerHTML="",E({filter:e.target.name,page:e.target.id}))});async function E({filter:e,page:t=1,limit:r=12}){try{const s=await K({filter:e,page:t,limit:r}),o=()=>{const g=s.data.totalPages;let i="";for(let c=1;c<=g;c++)i+=`<button id="${c}" class="pg-num-btn" type="button" name="${e}"
 >${c}</button>`;return i},u=s.data.results.reduce((g,{name:i,filter:c,imgUrl:N})=>g+`<li class="gallery-item" id=${i}>
          <div class="card" >            
             <img class="gallery-image"
             src="${N}"
             alt="${c}"            
            />            
            </div>
            <div class="card-description">
            <p class="name-description" id="${c}:${i}">${i}</p>
            <p class="filter-description">${c}</p>
            </div>
          </li>`,""),f=o();L.insertAdjacentHTML("afterbegin",f),M.insertAdjacentHTML("afterbegin",u)}catch(s){console.error(s),n.error({message:s.message,color:"red",position:"topCenter"})}}const Z="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",Q=document.querySelector(".field-search-wraper");document.querySelector(".search-block");const h=document.querySelector(".gallery"),J=document.querySelector(".search-icon");let q=document.querySelector("#slash");const p=document.querySelector(".waist"),A=document.querySelector("#search"),C=innerWidth;let a,$;const S=b.create({baseURL:"https://energyflow.b.goit.study/api"}),I=async(e,{params:t})=>await S.get(e,{params:t});h.addEventListener("click",e=>{e.preventDefault(),p.innerHTML="",h.innerHTML="",q.innerHTML="",Q.style.display="block",p.classList.add("information-cards"),$=e.target.id,a=$.split(":"),S.defaults.params={page:1,limit:C>1400?"9":"8",muscles:a[0]==="Muscles"?a[1]:null,bodypart:a[0]==="Body parts"?a[1]:null,equipment:a[0]==="Equipment"?a[1]:null},q.insertAdjacentHTML("beforeend",`<p>&#8260;<span class="title-span">${a[1]}</span></p>`),I("/exercises",{params:{}}).then(t=>{O(t.data.results)}).catch(t=>{n.error({message:t.message,position:"topRight"})})});let H;A.addEventListener("input",e=>{H=e.target.value});J.addEventListener("click",e=>{p.innerHTML="",h.innerHTML="",S.defaults.params={page:1,limit:C>1400?"9":"8",keyword:H,muscles:a[0]==="Muscles"?a[1]:null,bodypart:a[0]==="Body parts"?a[1]:null,equipment:a[0]==="Equipment"?a[1]:null},I("/exercises",{params:{}}).then(t=>{console.log(t.data.totalPages),t.data.totalPages===null&&(p.innerHTML=`${Z}`),O(t.data.results)}).catch(t=>{n.error({message:t.message,position:"topRight"})}).finally(()=>{A.value=""})});function O(e){p.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:r,name:s,bodyPart:o,rating:u,time:f,target:g,_id:i})=>t+`<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${u}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../img/sprite.svg#icon-star"></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${i}">Start
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
            <li class="calories"><span class="params-text">Burned calories:</span> ${r}/${f}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${o}</li>
            <li class="target"><span class="params-text">Target:</span> ${g}</li>
      </ul>
    </li>`,"")),j()}const X=document.querySelector(".footer-form"),ee=document.querySelector(".footer-form-input"),te="https://energyflow.b.goit.study/api/subscription";X.addEventListener("submit",se);async function se(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!re(t))return ae();try{const r=await b.post(te,{email:t});if(r.status>=200&&r.status<300){const s=r.data.message;n.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(r){n.error({title:"Error",message:r.response.data.message,position:"center",backgroundColor:"gray"})}finally{ee.value=""}}const re=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),ae=()=>{n.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},l=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],d=document.querySelector(".deal-wheel"),m=d.querySelector(".spinner"),x=d.querySelector(".btn-spin"),v=d.querySelector(".ticker"),ne=document.querySelector(".get-prize-container"),w=360/l.length,oe=Math.floor(180/l.length),D="is-spinning",R="selected",ie=window.getComputedStyle(m);let U,y=0,B=0,T;const ce=()=>{l.forEach(({text:e,color:t,reaction:r},s)=>{const o=w*s*-1-oe;m.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${r} style="--rotate: ${o}deg">
        <span class="text">${e}</span>
      </li>`)})},le=()=>{m.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${l.map(({color:e},t)=>`${e} 0 ${100/l.length*(l.length-t)}%`).reverse()}
    );`)},de=()=>{le(),ce(),T=d.querySelectorAll(".prize")},ue=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),W=()=>{const e=ie.transform.split("(")[1].split(")")[0].split(","),t=e[0],r=e[1];let s=Math.atan2(r,t);s<0&&(s+=2*Math.PI);const o=Math.round(s*(180/Math.PI)),u=Math.floor(o/w);B!==u&&(v.style.animation="none",setTimeout(()=>v.style.animation=null,10),B=u),U=requestAnimationFrame(W)},me=()=>{const e=Math.floor(y/w);T[e].classList.add(R);const t=l[e].text;setTimeout(()=>{d.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,ne.style.display="block"},3e3)};x.addEventListener("click",()=>{x.disabled=!0,y=Math.floor(Math.random()*360+ue(2e3,5e3)),T.forEach(e=>e.classList.remove(R)),d.classList.add(D),m.style.setProperty("--rotate",y),v.style.animation="none",W()});m.addEventListener("transitionend",()=>{cancelAnimationFrame(U),y%=360,me(),d.classList.remove(D),m.style.setProperty("--rotate",y)});de();const ge=document.querySelector("#prizeForm");document.querySelector(".input-get");ge.addEventListener("submit",pe);async function pe(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!ye(t))return fe()}const ye=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),fe=()=>{n.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var z=document.getElementById("myModalPrize"),he=document.getElementById("openModalBtnPrize");he.onclick=function(){z.style.display="flex"};function F(){z.style.display="none"}window.onclick=function(e){e.target==z&&F()};var ve=document.getElementById("closeModalPrize");ve.onclick=function(){F()};document.addEventListener("DOMContentLoaded",function(){function e(){var s=document.getElementById("email-prize").value,o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!o.test(s)){n.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}n.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var s=document.getElementById("myModalPrize");s.style.display="none"}var r=document.querySelector(".button-get");r.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map
