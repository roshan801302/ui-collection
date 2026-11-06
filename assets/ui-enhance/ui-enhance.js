(function(){
  function q(s,r){return (r||document).querySelector(s)}; function qa(s,r){return Array.from((r||document).querySelectorAll(s))};
  document.documentElement.classList.add('ui-ready');

  var enhanceScript=document.currentScript;
  if(enhanceScript){
    var notifications=document.createElement('script');
    notifications.src=new URL('ui-notifications.js',enhanceScript.src).href;
    notifications.async=false;
    notifications.onerror=function(){console.error('Could not load shared UI notifications:',notifications.src);};
    document.head.appendChild(notifications);
  }

  var sidebar = q('.sidebar');
  if (sidebar) {
    document.body.classList.add('ui-has-sidebar');
    var btn = document.createElement('button');
    btn.type='button'; btn.className='ui-mobile-toggle'; btn.setAttribute('aria-expanded','false'); btn.textContent='Menu';
    btn.onclick=function(){ var open=document.body.classList.toggle('ui-sidebar-open'); btn.setAttribute('aria-expanded', open?'true':'false'); btn.textContent=open?'Close':'Menu'; };
    document.body.appendChild(btn);
    qa('a,button', sidebar).forEach(function(a){ a.addEventListener('click', function(){ if(matchMedia('(max-width:980px)').matches){ document.body.classList.remove('ui-sidebar-open'); btn.textContent='Menu'; btn.setAttribute('aria-expanded','false'); } }); });
  }

  // Wrap tables for responsive scrolling without breaking table display/layout.
  qa('table').forEach(function(t){
    if (t.parentElement && t.parentElement.classList.contains('ui-table-wrap')) return;
    var w=document.createElement('div'); w.className='ui-table-wrap';
    t.parentNode.insertBefore(w,t); w.appendChild(t);
  });

  // Normalize button-like links.
  qa('a.btn, .actions a, nav a, .nav a').forEach(function(a){
    if (a.classList.contains('btn') || a.closest('.actions,.nav,nav,.toolbar')) a.style.textDecoration = a.style.textDecoration || 'none';
  });

  qa('a[href^="#"]').forEach(function(a){ a.addEventListener('click', function(e){ var id=a.getAttribute('href'); if(!id||id==='#') return; var t=q(id); if(t){ e.preventDefault(); t.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth', block:'start'}); } }); });
})();


/* runtime contrast+sequence fix */
(function(){
  function lum(channels){ var c=channels.map(function(v){return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)}); return 0.2126*c[0]+0.7152*c[1]+0.0722*c[2]; }
  function parse(c){
    if(!c||c==='transparent') return null;
    var srgb=/^color\(srgb\s+([^)]*)\)$/i.test(c), match=c.match(/^color\(srgb\s+([^)]*)\)$/i)||c.match(/^rgba?\(([^)]*)\)$/i);
    if(!match) return null;
    var parts=match[1].replace(/\//g,' ').split(/[\s,]+/).filter(Boolean);
    if(parts.length<3) return null;
    var channels=parts.slice(0,3).map(function(part){
      var value=parseFloat(part);
      if(part.endsWith('%')) return value/100;
      return srgb?value:value/255;
    });
    if(channels.some(function(value){return !Number.isFinite(value)})) return null;
    if(parts.length>=4 && parseFloat(parts[3])/(parts[3].endsWith('%')?100:1) < 0.15) return null;
    return lum(channels.map(function(value){return Math.max(0,Math.min(1,value))}));
  }
  function themeDark(){
    var cs=getComputedStyle(document.documentElement), body=getComputedStyle(document.body);
    var t=(cs.getPropertyValue('--text')||'').trim(), b=(cs.getPropertyValue('--bg')||'').trim();
    var dark=/^#([e-f]|f)/i.test(t)||/^#([0-3])/.test(b);
    if(!dark){ var bl=parse(body.backgroundColor); dark=bl!=null&&bl<0.42; }
    document.documentElement.setAttribute('data-ui-theme',dark?'dark':'light');
    return dark;
  }
  var _dark=null;
  function isThemeDark(){ if(_dark==null) _dark=themeDark(); return _dark; }
  function bg(el){ for(var e=el;e&&e!==document.documentElement;e=e.parentElement){ var b=getComputedStyle(e).backgroundColor,l=parse(b); if(l!=null) return l; } return isThemeDark()?0.12:1; }
  function isDark(l){ return l<0.45; }
  function contrastText(l){ return 1.05/(l+0.05) >= (l+0.05)/0.05 ? '#ffffff' : '#0f172a'; }
  function contrastRatio(a,b){ return (Math.max(a,b)+0.05)/(Math.min(a,b)+0.05); }
  function fixText(root){
    var nodes=(root||document).querySelectorAll('body, body *');
    nodes.forEach(function(el){
      var cs=getComputedStyle(el); if(cs.display==='none'||cs.visibility==='hidden') return;
      var b=bg(el), l=parse(cs.color);
      if(l!=null && b!=null){ if(isDark(b)&&l>0.7) el.style.color='#f8fafc'; if(!isDark(b)&&l<0.18 && cs.backgroundColor.indexOf('0)')<0) {/*ok*/} if(!isDark(b) && /^(#fff|white|rgb\(\s*255)/i.test(el.style.color||'')) el.style.color='#0f172a'; }
      if(el.matches('input,select,textarea')){
        var bb=parse(cs.backgroundColor), fieldFg=parse(cs.color);
        if(bb!=null && (fieldFg==null||contrastRatio(bb,fieldFg)<4.5)){
          el.style.setProperty('color',contrastText(bb),'important');
        }
      }
      if(el.matches('.btn:not(.primary):not(.admin),button:not(.primary):not(.admin),a.btn:not(.primary):not(.admin)')){
        var btnBg=parse(cs.backgroundColor), fg=parse(cs.color), container=bg(el);
        if((isDark(container)||isThemeDark()) && (btnBg==null||isDark(btnBg))){
          if(fg!=null && fg<0.45) el.style.color='#f8fafc';
          if(fg==null) el.style.color='#f8fafc';
        }
        if(!isDark(container) && !isThemeDark() && btnBg!=null && !isDark(btnBg) && fg!=null && fg>0.78 && !el.closest('.preview,.hero-image,.overlay,.thumb')){
          el.style.color='#0f172a';
        }
      }
      if(el.matches('button,input[type="button"],input[type="submit"],input[type="reset"],[role="button"],.btn,.btn-primary,.primary-btn,.d-btn,.u-btn')){
        var actionBg=parse(cs.backgroundColor), actionFg=parse(cs.color);
        if(actionBg!=null && (actionFg==null||contrastRatio(actionBg,actionFg)<4.5)){
          el.style.setProperty('color',contrastText(actionBg),'important');
        }
      }
    });
  }
  function fixCards(){
    document.querySelectorAll('.grid,.cards,.kpis,.stats,.g2,.g3,.g4,.grid2,.grid3,.grid4').forEach(function(g){ g.style.alignItems='stretch'; });
    document.querySelectorAll('.card,.panel,article.card,.sample-card,.product-card,.item-card').forEach(function(c){ c.style.display=c.style.display||'flex'; c.style.flexDirection='column'; });
    document.querySelectorAll('.actions,.card-actions,.sample-card .actions').forEach(function(a){ if(a.parentElement && (a.parentElement.classList.contains('card')||a.parentElement.classList.contains('body')||a.parentElement.classList.contains('sample-card'))) a.style.marginTop='auto'; a.style.display='flex'; a.style.flexWrap='wrap'; a.style.gap='.5rem'; });
  }
  function run(){ try{fixText(); fixCards();}catch(e){} }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', run); else run();
  window.addEventListener('load', run);
  setTimeout(run, 250);
})();
