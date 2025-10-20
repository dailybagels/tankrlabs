(function(){
  const key='tankr-theme';
  const root=document.documentElement;
  const btn=document.getElementById('modeToggle');
  const saved=localStorage.getItem(key);
  if(saved==='light') root.classList.add('light');
  if(btn){
    btn.addEventListener('click',()=>{
      root.classList.toggle('light');
      localStorage.setItem(key, root.classList.contains('light')?'light':'dark');
    });
  }
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