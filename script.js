const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
menuButton?.addEventListener("click",()=>{const open=menuButton.getAttribute("aria-expanded")==="true";menuButton.setAttribute("aria-expanded",String(!open));nav?.classList.toggle("open",!open);});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuButton?.setAttribute("aria-expanded","false");}));
const year=document.querySelector("#year");if(year)year.textContent=new Date().getFullYear();

const revealItems=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");io.unobserve(entry.target);}}),{threshold:.12,rootMargin:"0px 0px -35px 0px"});revealItems.forEach(el=>io.observe(el));}else revealItems.forEach(el=>el.classList.add("is-visible"));
const heroTitle=document.querySelector(".hero-title");if(heroTitle)requestAnimationFrame(()=>setTimeout(()=>heroTitle.classList.add("is-visible"),150));

const form=document.querySelector("#contact-form");
const toast=document.querySelector(".toast");
form?.addEventListener("submit",event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const subject=encodeURIComponent("Zpráva z webu Znovu Silnější — "+data.get("name"));const body=encodeURIComponent("Jméno: "+data.get("name")+"\nE-mail: "+data.get("email")+"\n\nS čím potřebuji pomoci:\n"+data.get("message"));window.location.href="mailto:projekt@znovusilnejsi.cz?subject="+subject+"&body="+body;});
document.querySelectorAll(".legal-link").forEach(a=>a.addEventListener("click",e=>{if(a.getAttribute("href")==="#"){e.preventDefault();if(toast){toast.textContent="Do ostré verze doplňte skutečné stránky s právními dokumenty.";toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),3500);}}}));
