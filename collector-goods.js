const modal=document.querySelector('#goods-interest');
const form=document.querySelector('#goods-form');
const content=document.querySelector('#goods-form-content');
const success=document.querySelector('#goods-success');
const error=document.querySelector('#goods-error');
let opener;
document.querySelectorAll('[data-interest]').forEach(button=>button.addEventListener('click',()=>{
 opener=button;form.reset();content.hidden=false;success.hidden=true;error.hidden=true;
 const selected=form.querySelector('input[value="'+button.dataset.interest+'"]');if(selected)selected.checked=true;
 modal.showModal();
}));
for(const id of ['goods-close','goods-done'])document.getElementById(id).addEventListener('click',()=>modal.close());
modal.addEventListener('close',()=>{form.reset();opener?.focus();});
form.addEventListener('change',()=>{error.hidden=true;});
form.addEventListener('submit',event=>{
 event.preventDefault();if(!form.reportValidity())return;
 if(!form.querySelector('[name=interests]:checked')){error.hidden=false;form.querySelector('[name=interests]').focus();return;}
 // Frontend preview only: no personal details are transmitted or persisted.
 form.reset();content.hidden=true;success.hidden=false;success.focus();
});
