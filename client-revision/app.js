const age=document.querySelector('#age-gate');
let verified=false;try{verified=sessionStorage.getItem('oval-review-age')==='yes'}catch{}
if(!verified){age.showModal();document.body.classList.add('modal-open')}
age.addEventListener('cancel',e=>e.preventDefault());
document.querySelector('#age-accept').addEventListener('click',()=>{try{sessionStorage.setItem('oval-review-age','yes')}catch{}age.close();document.body.classList.remove('modal-open')});
document.querySelector('#age-exit').addEventListener('click',()=>{age.querySelector('.age-content').innerHTML='<h2>THANK YOU<br>FOR VISITING.</h2><p>You must be 21 or older to enter.</p><p>Please close this tab to exit.</p>'});
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation')}
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const interest=document.querySelector('#interest'),form=document.querySelector('#interest-form');let trigger;
document.querySelectorAll('[data-interest]').forEach(button=>button.addEventListener('click',()=>{trigger=button;form.reset();document.querySelector('#interest-fields').hidden=false;document.querySelector('#interest-success').hidden=true;const value=button.dataset.interest;form.querySelectorAll('[type=checkbox]').forEach(i=>i.checked=i.value===value);document.querySelector('#selected-interest').textContent='INTEREST: '+value;interest.showModal();document.body.classList.add('modal-open')}));
function closeInterest(){interest.close()}
interest.querySelectorAll('.close,[data-close]').forEach(b=>b.addEventListener('click',closeInterest));interest.addEventListener('close',()=>{document.body.classList.remove('modal-open');form.reset();trigger?.focus()});
form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;form.reset();document.querySelector('#interest-fields').hidden=true;document.querySelector('#interest-success').hidden=false;interest.querySelector('[data-close]').focus()});
document.querySelector('#signup-form')?.addEventListener('submit',e=>{e.preventDefault();if(!e.target.reportValidity())return;e.target.reset();document.querySelector('#signup-status').textContent='Preview confirmed. Your email has not been transmitted or saved.'});
