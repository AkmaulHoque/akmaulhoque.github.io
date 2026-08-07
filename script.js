const header=document.querySelector('.site-header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));
const toggle=document.querySelector('.nav-toggle');
const links=document.querySelector('.nav-links');
toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  button.classList.add('active');
  const f=button.dataset.filter;
  document.querySelectorAll('.skill-card').forEach(card=>card.classList.toggle('hidden',f!=='all'&&card.dataset.category!==f));
}));

document.addEventListener('mousemove',e=>{const glow=document.querySelector('.cursor-glow');glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
document.getElementById('year').textContent=new Date().getFullYear();
