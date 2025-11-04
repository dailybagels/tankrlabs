(function(){
  const key='tankr-theme';
  const root=document.documentElement;
  const btn=document.getElementById('modeToggle');
  const loader=document.querySelector('.loader');
  // Hide loader when page is loaded
  if(loader){
    window.addEventListener('load',()=>{
      setTimeout(()=>{loader.classList.add('hidden');},300);
    });
  }
  // Disable light mode entirely
  root.classList.remove('light');
  try{ localStorage.removeItem(key); }catch(e){}
  if(btn){ btn.setAttribute('hidden','hidden'); }
  const form=document.getElementById('contactForm');
  const status=document.getElementById('formStatus');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data=new FormData(form);
      const body=[
        'Name: '+(data.get('name')||''),
        'Email: '+(data.get('email')||''),
        '',
        (data.get('message')||'')
      ].join('%0D%0A');
      const subject=encodeURIComponent('Message — Tankr Labs');
      const mailto='mailto:hello@tankrlabs.com?subject='+subject+'&body='+body;
      window.location.href=mailto;
      if(status){ status.textContent='Opening email client…'; }
    });
  }
})();