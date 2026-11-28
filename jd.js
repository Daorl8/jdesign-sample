/* 제이디자인 공통 스크립트(v0.3 · 4페이지 공통): 나타나기 · 히어로 등장 · 같은 페이지 앵커 rAF 스크롤(R-25) · 예전 주소 넘기기 */
(function(){
  /* 예전 한 페이지 주소(…/#works 등)로 들어오면 새 페이지로(v0.3) */
  var lg={'#works':'/works','#projects':'/works#projects','#about':'/about','#contact':'/contact'};
  if(document.body.getAttribute('data-page')==='home' && lg[location.hash]){ location.replace(lg[location.hash]); return; }

  var pending=[].slice.call(document.querySelectorAll('.reveal'));
  pending.forEach(function(el){
    var sib=[].slice.call(el.parentNode.children).filter(function(c){ return c.classList.contains('reveal'); });
    if(sib.length>1){ el.style.setProperty('--d',(Math.min(sib.indexOf(el),5)*0.07)+'s'); }
  });
  function showAll(){ pending.forEach(function(el){ el.classList.add('in'); }); pending=[]; }
  function start(){
    var t=setInterval(function(){
      if(!pending.length){ clearInterval(t); return; }
      if(window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 4){ showAll(); return; }
      var line=window.innerHeight*0.92;
      pending=pending.filter(function(el){
        if(el.getBoundingClientRect().top < line){ el.classList.add('in'); return false; }
        return true;
      });
    },120);
  }
  var started=false; function go(){ if(started) return; started=true; start(); }
  var intro=document.querySelector('.intro'), introW=document.querySelector('.intro-w');  /* 히어로는 홈에만 */ setTimeout(function(){ if(introW) introW.classList.add('on'); if(intro) intro.classList.add('on'); },60);
  /* 부드러운 스크롤(R-25): OS '동작 줄이기'면 CSS smooth가 즉시 이동으로 바뀌어 rAF로 직접 움직임 · 1초 폴백 · 사용자 휠/터치면 중단 · 끝나면 대상 섹션으로 포커스 */
  document.addEventListener('click',function(e){
    var a=e.target.closest ? e.target.closest('a[href^="#"]') : null; if(!a) return;
    var id=a.getAttribute('href'); if(id.length<2) return;
    var t=document.querySelector(id); if(!t) return;
    e.preventDefault();
    var head=document.querySelector('.top'); var off=(head ? head.getBoundingClientRect().height : 0)+10;
    var y0=window.pageYOffset; var y1=(id==='#top') ? 0 : Math.max(0, t.getBoundingClientRect().top+y0-off);
    var dur=700, s0=null, done=false;
    function ease(p){ return p<.5 ? 4*p*p*p : 1-Math.pow(-2*p+2,3)/2; }
    function stop(){ done=true; window.removeEventListener('wheel',stop); window.removeEventListener('touchstart',stop); }
    function finish(){ stop(); if(!t.hasAttribute('tabindex')){ t.setAttribute('tabindex','-1'); } t.focus({preventScroll:true}); }
    window.addEventListener('wheel',stop,{passive:true}); window.addEventListener('touchstart',stop,{passive:true});
    function step(ts){ if(done) return; if(s0===null) s0=ts; var p=Math.min((ts-s0)/dur,1); window.scrollTo(0, y0+(y1-y0)*ease(p)); if(p<1){ requestAnimationFrame(step); } else { finish(); } }
    requestAnimationFrame(step);
    setTimeout(function(){ if(!done){ window.scrollTo(0,y1); finish(); } }, dur+300);
    if(history.pushState){ history.pushState(null,'',id); }
  });
  if(document.fonts && document.fonts.ready){ document.fonts.ready.then(go); }
  setTimeout(go,1200);
})();
