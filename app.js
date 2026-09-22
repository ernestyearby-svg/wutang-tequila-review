import './brand.js';
import {submitReservation, subscribeEmail, states} from './forms.js';
const $ = s => document.querySelector(s);
const gate=$('#age-gate'), site=$('#site'), menu=$('#mobile-menu'), reserve=$('#reservation'), form=$('#reserve-form');
let accepted=false, returnFocus;
try { accepted=sessionStorage.getItem('excuse-age-confirmed')==='yes'; } catch {}
if(!accepted){site.inert=true;gate.showModal();}
gate.addEventListener('cancel', e=>e.preventDefault());
$('#enter').addEventListener('click',()=>{try{sessionStorage.setItem('excuse-age-confirmed','yes');}catch{}gate.close();site.inert=false;$('#header .wordmark').focus();});
$('#exit').addEventListener('click',()=>location.replace('about:blank'));
const updateHeader=()=>$('#header').classList.toggle('scrolled',scrollY>25);
addEventListener('scroll',updateHeader,{passive:true});updateHeader();
$('#menu-toggle').addEventListener('click',()=>{menu.showModal();$('#menu-toggle').setAttribute('aria-expanded','true');});
const closeMenu=()=>{menu.close();$('#menu-toggle').setAttribute('aria-expanded','false');};
$('#menu-close').addEventListener('click',closeMenu);
menu.addEventListener('close',()=>$('#menu-toggle').setAttribute('aria-expanded','false'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
for(const state of states) form.elements.state.add(new Option(state,state));
document.querySelectorAll('[data-reserve]').forEach(button=>button.addEventListener('click',()=>{
returnFocus=menu.open?$('#menu-toggle'):button;
if(menu.open)closeMenu();
form.reset();form.hidden=false;$('#reserve-success').hidden=true;
form.elements.edition.value=button.dataset.reserve||'wu';reserve.showModal();
}));
const closeReserve=()=>reserve.close();
$('#reserve-close').addEventListener('click',closeReserve);
$('#reserve-done').addEventListener('click',closeReserve);
reserve.addEventListener('close',()=>{form.reset();returnFocus?.focus();});
form.addEventListener('submit',async e=>{e.preventDefault();if(!form.reportValidity())return;const submit=form.querySelector('[type=submit]');submit.disabled=true;try{await submitReservation(Object.fromEntries(new FormData(form)));form.reset();form.hidden=true;$('#reserve-success').hidden=false;$('#reserve-success').focus();}finally{submit.disabled=false;}});
$('#signup-form').addEventListener('submit',async e=>{e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;await subscribeEmail(f.elements.email.value);f.reset();f.hidden=true;$('#signup-success').hidden=false;});
