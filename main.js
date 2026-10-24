(()=>{const b=document.querySelector('.bar');const f=()=>b.classList.toggle('sh',scrollY>10);addEventListener('scroll',f,{passive:true});f();
const m=document.querySelector('.menu');m&&m.addEventListener('click',()=>{const o=b.classList.toggle('open');m.setAttribute('aria-expanded',o)});
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.strip>div,.pc,.panel,.sec>.rvt,.band').forEach((e,i)=>{if(e.getBoundingClientRect().top<innerHeight*.9)return;e.classList.add('rv');e.style.setProperty('--d',(i%3)*.12+'s')});
if(rm||!('IntersectionObserver'in window)){document.querySelectorAll('.rv').forEach(e=>e.classList.remove('rv'))}else{
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.addEventListener('animationend',ev=>{if(ev.target===e.target)e.target.classList.remove('rv','in')},{once:false});io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e))}
if(!rm&&!('onpagereveal'in window)){document.querySelectorAll('a[href^="/"]').forEach(a=>a.addEventListener('click',ev=>{if(ev.metaKey||ev.ctrlKey||ev.shiftKey)return;ev.preventDefault();document.body.classList.add('leaving');setTimeout(()=>location.href=a.href,220)}))}
addEventListener('pageshow',()=>document.body.classList.remove('leaving'));})();
