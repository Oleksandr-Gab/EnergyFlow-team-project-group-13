import{a as Y}from"./assets/modal-form-80233cd8.js";import{a as h,i as s}from"./assets/vendor-29bef8ec.js";const K=document.querySelector(".filter-list"),S=document.querySelector(".gallery"),y=document.querySelector(".pagination-btn"),Z=document.querySelector(".waist"),Q=h.create({baseURL:"https://energyflow.b.goit.study/api"});let x;const H=document.querySelector('button[name="Muscles"]');let B;document.addEventListener("DOMContentLoaded",async()=>{await T({filter:"Muscles"}),H.classList.add("active"),B=document.querySelector(".pg-num-btn"),B.classList.add("pg-num-btn-active")});const J=async({filter:e,page:t,limit:r})=>{try{return x=await Q.get("/filters",{params:{filter:e,page:t,limit:r}}),x}catch(n){console.error(n),s.error({message:n.message,color:"red",position:"topCenter"})}};K.addEventListener("click",e=>{e.preventDefault(),S.innerHTML="",y.innerHTML="",Z.innerHTML="",e.target.tagName==="BUTTON"&&(H.classList.remove("active"),T({filter:e.target.name}))});y.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(y.innerHTML="",S.innerHTML="",T({filter:e.target.name,page:e.target.id}))});async function T({filter:e,page:t=1,limit:r=12}){try{const n=await J({filter:e,page:t,limit:r}),a=()=>{const g=n.data.totalPages;let o="";for(let i=1;i<=g;i++)o+=`<button id="${i}" class="pg-num-btn" type="button" name="${e}"
 >${i}</button>`;return o},d=n.data.results.reduce((g,{name:o,filter:i,imgUrl:_})=>g+`<li class="gallery-item" id=${o}>
          <div class="card" >            
             <img class="gallery-image"
             src="${_}"
             alt="${i}"            
            />            
            </div>
            <div class="card-description">
            <p class="name-description" id="${i}:${o}">${o}</p>
            <p class="filter-description">${i}</p>
            </div>
          </li>`,""),v=a();y.insertAdjacentHTML("afterbegin",v),S.insertAdjacentHTML("afterbegin",d)}catch(n){console.error(n),s.error({message:n.message,color:"red",position:"topCenter"})}}const X="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",M=document.querySelector(".gallery"),q=document.querySelector(".section-title");document.querySelector("#slash");const L=document.querySelector(".waist"),E=document.querySelector("#search"),O=innerWidth,k=h.create({baseURL:"https://energyflow.b.goit.study/api"}),R=async(e,{params:t})=>await k.get(e,{params:t});M.addEventListener("click",e=>{e.preventDefault(),L.innerHTML="",M.innerHTML="",E.style.display="block",L.classList.add("information-cards");const r=e.target.id.split(":");k.defaults.params={limit:O>1400?"9":"8",muscles:r[0]==="Muscles"?r[1]:null,bodypart:r[0]==="Body parts"?r[1]:null,equipment:r[0]==="Equipment"?r[1]:null},q.insertAdjacentHTML("beforeend",`<p id="slash">&#8260;<span class="title-span">${r[1]}</span></p>`),console.log(q),R("/exercises",{params:{}}).then(n=>{U(n.data.results)}).catch(n=>{s.error({message:n.message,position:"topRight"})})});let p,A;E.addEventListener("input",e=>{clearTimeout(A),A=setTimeout(function(){p=E.value,console.log(p)},1e3),searchBlock.addEventListener("click",t=>{if(console.log(p.toLowerCase()),p.trim()!=="input-value"){M.innerHTML=`<div class="errorEmageContainer">${X}</div>`;return}k.defaults.params={limit:O>1400?"9":"8"},R("/exercises",{params:{keyword:t.target.value}}).then(r=>{console.log(r.data),U(r.data.results)}).catch(r=>{s.error({message:r.message,position:"topRight"})})})});function U(e){L.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:r,name:n,bodyPart:a,rating:d,time:v,target:g,_id:o})=>t+`<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${d}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../img/sprite.svg#icon-star"></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${o}">Start
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
          <h3>${n}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${r}/${v}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${a}</li>
            <li class="target"><span class="params-text">Target:</span> ${g}</li>
      </ul>
    </li>`,"")),Y()}const ee=document.querySelector(".search-block"),te=document.querySelector(".custom-pagination-btn"),b=document.querySelectorAll(".render-pagination-btn"),re=h.create({baseURL:"https://energyflow.b.goit.study/api/"}),ne={fetchFilters:async e=>{try{return(await re.get("filters",{params:e})).data.results}catch(t){console.error(t),se(t)}}},se=e=>{throw s.error({title:"API Error",message:"An error occurred while fetching data from the API."}),e},ae=async e=>{try{return(await ne.fetchFilters({...e})).map(oe).join("")}catch(t){return console.error(t),F(),""}},oe=e=>`<li class="render-page-one-item" data-name="${e.name}">
            <img src="${e.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${e.name}</p>
              <p class="render-page-one-item-zones">${e.filter}</p>
            </div>
          </li>`,F=()=>{s.error({title:"Rendering Error",message:"An error occurred while rendering data."})},ie=async e=>{try{const t=await e;ee.innerHTML=t}catch(t){console.error(t),F()}},ce=e=>{const t=parseInt(e.dataset.btn)===3?1:-1;b.forEach(r=>{r.textContent=parseInt(r.textContent)+t}),b[0].style.display=f.page>1?"block":"none",b[2].style.display=f.page>=ue-1?"none":"block"},le=e=>{e.target.nodeName==="BUTTON"&&(f.page=parseInt(e.target.textContent),ie(ae(f)),ce(e.target))},de=getComputedStyle(document.querySelector("body")).width,D=de<768?8:12,f={limit:D,page:1},ue=69/D;te.addEventListener("click",le);const ge=document.querySelector(".footer-form"),me=document.querySelector(".footer-form-input"),pe="https://energyflow.b.goit.study/api/subscription";ge.addEventListener("submit",ye);async function ye(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!fe(t))return he();try{const r=await h.post(pe,{email:t});if(r.status>=200&&r.status<300){const n=r.data.message;s.success({title:"OK",message:n,color:"white",position:"center"})}else throw new Error}catch(r){s.error({title:"Error",message:r.response.data.message,position:"center",backgroundColor:"gray"})}finally{me.value=""}}const fe=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),he=()=>{s.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},c=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],l=document.querySelector(".deal-wheel"),u=l.querySelector(".spinner"),C=l.querySelector(".btn-spin"),w=l.querySelector(".ticker"),ve=document.querySelector(".get-prize-container"),P=360/c.length,be=Math.floor(180/c.length),N="is-spinning",W="selected",Me=window.getComputedStyle(u);let j,m=0,I=0,z;const Le=()=>{c.forEach(({text:e,color:t,reaction:r},n)=>{const a=P*n*-1-be;u.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${r} style="--rotate: ${a}deg">
        <span class="text">${e}</span>
      </li>`)})},Ee=()=>{u.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${c.map(({color:e},t)=>`${e} 0 ${100/c.length*(c.length-t)}%`).reverse()}
    );`)},we=()=>{Ee(),Le(),z=l.querySelectorAll(".prize")},Se=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),V=()=>{const e=Me.transform.split("(")[1].split(")")[0].split(","),t=e[0],r=e[1];let n=Math.atan2(r,t);n<0&&(n+=2*Math.PI);const a=Math.round(n*(180/Math.PI)),d=Math.floor(a/P);I!==d&&(w.style.animation="none",setTimeout(()=>w.style.animation=null,10),I=d),j=requestAnimationFrame(V)},Te=()=>{const e=Math.floor(m/P);z[e].classList.add(W);const t=c[e].text;setTimeout(()=>{l.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,ve.style.display="block"},3e3)};C.addEventListener("click",()=>{C.disabled=!0,m=Math.floor(Math.random()*360+Se(2e3,5e3)),z.forEach(e=>e.classList.remove(W)),l.classList.add(N),u.style.setProperty("--rotate",m),w.style.animation="none",V()});u.addEventListener("transitionend",()=>{cancelAnimationFrame(j),m%=360,Te(),l.classList.remove(N),u.style.setProperty("--rotate",m)});we();const ke=document.querySelector("#prizeForm");document.querySelector(".input-get");ke.addEventListener("submit",Pe);async function Pe(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!ze(t))return $e()}const ze=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),$e=()=>{s.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var $=document.getElementById("myModalPrize"),xe=document.getElementById("openModalBtnPrize");xe.onclick=function(){$.style.display="flex"};function G(){$.style.display="none"}window.onclick=function(e){e.target==$&&G()};var Be=document.getElementById("closeModalPrize");Be.onclick=function(){G()};document.addEventListener("DOMContentLoaded",function(){function e(){var n=document.getElementById("email-prize").value,a=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!a.test(n)){s.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}s.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var n=document.getElementById("myModalPrize");n.style.display="none"}var r=document.querySelector(".button-get");r.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map
