(function(){
  var region;
  var timer;

  function getRegion(){
    if(region && region.isConnected) return region;
    region=document.createElement('div');
    region.className='ui-toast-region';
    region.setAttribute('aria-live','polite');
    region.setAttribute('aria-atomic','true');
    region.setAttribute('data-ui-toast-ignore','');
    document.body.appendChild(region);
    return region;
  }

  function showUINotification(message){
    if(typeof message!=='string'||!message.trim()) return;
    var container=getRegion();
    container.replaceChildren();

    var toast=document.createElement('div');
    toast.className='ui-toast';
    toast.setAttribute('role','status');

    var text=document.createElement('span');
    text.className='ui-toast-message';
    text.textContent=message;

    var dismiss=document.createElement('button');
    dismiss.type='button';
    dismiss.className='ui-toast-dismiss';
    dismiss.setAttribute('aria-label','Dismiss notification');
    dismiss.setAttribute('data-ui-toast-ignore','');
    dismiss.textContent='×';
    dismiss.addEventListener('click',function(){
      window.clearTimeout(timer);
      container.replaceChildren();
    });

    toast.append(text,dismiss);
    container.appendChild(toast);
    window.clearTimeout(timer);
    timer=window.setTimeout(function(){container.replaceChildren();},5000);
  }

  window.showUINotification=showUINotification;

  document.addEventListener('click',function(event){
    if(event.defaultPrevented || !(event.target instanceof Element)) return;
    var control=event.target.closest('button,input[type="button"],input[type="reset"],[role="button"]');
    if(!control || control.disabled || (control.type==='submit'&&control.form) || control.closest('[data-ui-toast-ignore],.ui-mobile-toggle')) return;

    var label=(control.innerText||control.value||control.getAttribute('aria-label')||control.title||'').trim();
    if(label.length>70) label=label.slice(0,67)+'...';
    showUINotification(label ? label+' is a local demo interaction; no server request was made.' : 'This is a local demo interaction; no server request was made.');
  });

  document.addEventListener('submit',function(event){
    var form=event.target;
    if(!(form instanceof HTMLFormElement)) return;

    var action=form.getAttribute('action');
    if(action && action!=='#' && action.charAt(0)!=='#') return;

    var handledByDemo=event.defaultPrevented;
    if(!handledByDemo) event.preventDefault();
    showUINotification(handledByDemo
      ? 'This form was handled by the demo UI; no server request was made.'
      : 'This demo form is not connected; your details were not sent.');
  });
})();
