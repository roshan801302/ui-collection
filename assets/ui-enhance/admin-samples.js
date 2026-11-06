(function(){
  var main=document.querySelector('.main');
  var mode=document.body.dataset.adminSample;
  if(!main||!mode) return;

  var panels={
    canteen:`
      <section class="ops-panel ops-canteen" aria-labelledby="ops-title">
        <div class="ops-heading"><div><p class="ops-eyebrow">SHIFT CONTROL · DEMO DATA</p><h2 id="ops-title">Counter pulse</h2></div><label class="ops-range">Sales window<select data-ops-chart-range aria-label="Sales time range"><option value="today">Today</option><option value="week">7 days</option><option value="month">30 days</option><option value="year">YTD</option></select></label></div>
        <div class="ops-canteen-grid">
          <article class="ops-card ops-chart-card"><div class="ops-card-head"><div><h3>Sales trend</h3><p>Illustrative counter totals</p></div><strong data-ops-chart-total>₹8,420</strong></div><div class="ops-chart" role="img" aria-label="Illustrative bar chart of sales"><div class="ops-bar" style="--bar:38%"><span>8a</span></div><div class="ops-bar" style="--bar:62%"><span>10a</span></div><div class="ops-bar" style="--bar:45%"><span>12p</span></div><div class="ops-bar" style="--bar:83%"><span>2p</span></div><div class="ops-bar" style="--bar:68%"><span>4p</span></div><div class="ops-bar" style="--bar:96%"><span>6p</span></div></div></article>
          <article class="ops-card"><div class="ops-card-head"><div><h3>Activity stream</h3><p>Sample events · not live</p></div><span class="ops-live">DEMO</span></div><ol class="ops-activity"><li><time>12:42</time><span>Token 88 moved to preparing</span></li><li><time>12:37</time><span>UPI payment recorded · ₹240</span></li><li><time>12:31</time><span>Rice stock marked low</span></li></ol></article>
          <article class="ops-card ops-queue"><div class="ops-card-head"><div><h3>Order queue</h3><p>Compact service view</p></div></div><div class="ops-tabs" role="group" aria-label="Filter orders"><button type="button" data-ui-toast-ignore data-ops-filter="all" aria-pressed="true">All <span>3</span></button><button type="button" data-ui-toast-ignore data-ops-filter="pending" aria-pressed="false">Pending</button><button type="button" data-ui-toast-ignore data-ops-filter="preparing" aria-pressed="false">Preparing</button><button type="button" data-ui-toast-ignore data-ops-filter="ready" aria-pressed="false">Ready</button></div><div class="ops-table-wrap"><table class="ops-table"><thead><tr><th>Token</th><th>Items</th><th>Time</th><th>Status</th></tr></thead><tbody><tr data-ops-status="pending"><td>#90</td><td>Poha + tea</td><td>12:45</td><td>Pending</td></tr><tr data-ops-status="preparing"><td>#89</td><td>Snack combo</td><td>12:39</td><td>Preparing</td></tr><tr data-ops-status="ready"><td>#88</td><td>Veg thali</td><td>12:32</td><td>Ready</td></tr></tbody></table></div></article>
          <article class="ops-card"><div class="ops-card-head"><div><h3>Stock watch</h3><p>Availability switches are local previews</p></div></div><div class="ops-stock"><label><span>Masala dosa <small>12 portions</small></span><input type="checkbox" checked data-ops-stock aria-label="Masala dosa available"></label><label><span>Veg thali <small>4 portions</small></span><input type="checkbox" checked data-ops-stock aria-label="Veg thali available"></label><label><span>Fresh lime <small>Out of stock</small></span><input type="checkbox" data-ops-stock aria-label="Fresh lime available"></label></div></article>
        </div>
        <div class="ops-quickbar" aria-label="Canteen quick actions"><strong>Quick actions</strong><button type="button" data-ui-toast-ignore data-ops-notice="Manual cash entry is a local preview; no payment was recorded.">Manual cash</button><button type="button" data-ui-toast-ignore data-ops-notice="The sample broadcast is not connected to customers.">Broadcast notice</button><button type="button" data-ui-toast-ignore data-ops-notice="The sample report is ready to preview; no file was generated.">Export report</button></div>
      </section>`,
    kirana:`
      <section class="ops-panel ops-kirana" aria-labelledby="ops-title">
        <div class="ops-heading"><div><p class="ops-eyebrow">CUSTOMER CARE · LOCAL SAMPLE</p><h2 id="ops-title">Credit desk</h2><p>Select a customer to review their sample ledger and record a partial-payment preview.</p></div><span class="ops-private">Sample records only</span></div>
        <div class="ops-crm">
          <aside class="ops-customer-list"><h3>Customers <span>3</span></h3><button type="button" data-ui-toast-ignore data-ops-customer data-name="Asha Patel" data-phone="••••• 0142" data-due="₹1,200" data-limit="₹2,000" data-history="Last purchase · ₹460 · Today" data-note="Prefers evening reminders">Asha Patel <b>₹1,200 due</b></button><button type="button" data-ui-toast-ignore data-ops-customer data-name="Ravi Shah" data-phone="••••• 8821" data-due="₹0" data-limit="₹1,500" data-history="Payment · ₹1,450 · Yesterday" data-note="Account clear">Ravi Shah <b>Clear</b></button><button type="button" data-ui-toast-ignore data-ops-customer data-name="Meera Joshi" data-phone="••••• 6038" data-due="₹2,150" data-limit="₹2,000" data-history="Purchase · ₹650 · Today" data-note="Review credit limit before next purchase">Meera Joshi <b>Over limit</b></button></aside>
          <article class="ops-customer-detail" aria-live="polite"><div class="ops-customer-title"><div><p class="ops-eyebrow">CUSTOMER PROFILE</p><h3 data-ops-profile-name>Asha Patel</h3></div><span class="ops-credit-badge">Credit customer</span></div><dl class="ops-profile-grid"><div><dt>Masked contact</dt><dd data-ops-profile-phone>••••• 0142</dd></div><div><dt>Outstanding due</dt><dd data-ops-profile-due>₹1,200</dd></div><div><dt>Credit limit</dt><dd data-ops-profile-limit>₹2,000</dd></div><div><dt>Recent activity</dt><dd data-ops-profile-history>Last purchase · ₹460 · Today</dd></div></dl><p class="ops-customer-note"><strong>Note:</strong> <span data-ops-profile-note>Prefers evening reminders</span></p>
            <form class="ops-payment-form" data-ops-payment-form><h4>Record partial payment</h4><label>Amount<input name="amount" inputmode="decimal" placeholder="₹ amount" required pattern="[0-9]+([.][0-9]{1,2})?"></label><label>Method<select name="method"><option>UPI · demo</option><option>Cash · demo</option></select></label><button type="submit">Preview receipt</button></form>
            <div class="ops-crm-actions"><button type="button" data-ui-toast-ignore data-ops-notice="Reminder preview prepared locally; no message was sent.">Prepare reminder</button><button type="button" data-ui-toast-ignore data-ops-notice="Customer note editing is a static preview.">Edit note</button></div>
          </article>
        </div>
      </section>`,
    clubhouse:`
      <section class="ops-panel ops-clubhouse" aria-labelledby="ops-title">
        <div class="ops-heading"><div><p class="ops-eyebrow">FACILITY DESK · SAMPLE BOOKINGS</p><h2 id="ops-title">Request board</h2><p>Move a request through a local preview of the approval workflow.</p></div><button type="button" data-ui-toast-ignore data-ops-notice="New booking form is a static preview; no request was created.">＋ New request</button></div>
        <div class="ops-kanban" aria-label="Booking request stages">
          <section class="ops-lane" data-ops-lane="pending"><header><h3>Pending review</h3><span>2</span></header><article class="ops-booking" data-ops-card><p class="ops-eyebrow">CB-12 · SAT 6–10 PM</p><h4>Birthday gathering</h4><p>Flat A-101 · Main clubhouse</p><div class="ops-booking-foot"><span>Deposit ₹2,000 · due</span><button type="button" data-ui-toast-ignore data-ops-advance>Approve →</button></div></article><article class="ops-booking" data-ops-card><p class="ops-eyebrow">CB-14 · SUN 2–5 PM</p><h4>Residents meeting</h4><p>Flat C-203 · Lounge</p><div class="ops-booking-foot"><span>Deposit ₹1,000 · due</span><button type="button" data-ui-toast-ignore data-ops-advance>Approve →</button></div></article></section>
          <section class="ops-lane" data-ops-lane="approved"><header><h3>Approved</h3><span>1</span></header><article class="ops-booking" data-ops-card><p class="ops-eyebrow">CB-11 · SUN 9 AM–12 PM</p><h4>Community meeting</h4><p>Flat B-204 · Main clubhouse</p><div class="ops-booking-foot"><span>Deposit ₹1,000 · received</span><button type="button" data-ui-toast-ignore data-ops-advance>Complete →</button></div></article></section>
          <section class="ops-lane" data-ops-lane="completed"><header><h3>Completed</h3><span>1</span></header><article class="ops-booking" data-ops-card><p class="ops-eyebrow">CB-10 · FRI 6–10 PM</p><h4>Family event</h4><p>Flat C-303 · Main clubhouse</p><div class="ops-booking-foot"><span>Inspection complete</span><span class="ops-done">Closed</span></div></article></section>
        </div>
        <div class="ops-slot-strip"><strong>Facility availability</strong><span>Sat evening · Booked</span><span>Sun morning · Reserved</span><span>Mon · Maintenance block</span><button type="button" data-ui-toast-ignore data-ops-notice="Availability settings are a local preview only.">Manage slots</button></div>
      </section>`,
    dispatch:`
      <section class="ops-panel ops-dispatch" aria-labelledby="ops-title">
        <div class="ops-heading"><div><p class="ops-eyebrow">ROADSIDE RESPONSE · SAMPLE DATA</p><h2 id="ops-title">Dispatch monitor</h2><p>Assignment and ETA controls are local previews; no location is tracked.</p></div><span class="ops-route-label">3 requests · illustrative</span></div>
        <div class="ops-dispatch-layout"><div class="ops-dispatch-list"><div class="ops-dispatch-row" data-ops-request="RA-21"><div class="ops-request-mark">21</div><div class="ops-request-info"><strong>RA-21 · Puncture</strong><span>Demo landmark · Tech 1</span></div><span class="ops-eta">25 min</span><button type="button" data-ui-toast-ignore data-ops-open-dispatch>Assign</button></div><div class="ops-dispatch-row" data-ops-request="RA-22"><div class="ops-request-mark">22</div><div class="ops-request-info"><strong>RA-22 · Battery</strong><span>Demo junction · Unassigned</span></div><span class="ops-eta">Awaiting</span><button type="button" data-ui-toast-ignore data-ops-open-dispatch>Assign</button></div><div class="ops-dispatch-row" data-ops-request="RA-20"><div class="ops-request-mark">20</div><div class="ops-request-info"><strong>RA-20 · Towing</strong><span>Demo road · Tech 2</span></div><span class="ops-eta">40 min</span><button type="button" data-ui-toast-ignore data-ops-open-dispatch>Update</button></div></div>
          <aside class="ops-route-card"><div class="ops-route-grid" aria-hidden="true"></div><div class="ops-route-pin ops-pin-a">A</div><div class="ops-route-pin ops-pin-b">B</div><div class="ops-route-caption"><strong>Route overview</strong><span>Illustrative only · no map or GPS feed</span></div></aside></div>
        <dialog class="ops-dispatch-dialog" data-ops-dispatch-dialog aria-labelledby="ops-dialog-title"><form data-ops-dispatch-form><div class="ops-dialog-head"><div><p class="ops-eyebrow">DISPATCH PREVIEW</p><h3 id="ops-dialog-title">Assign technician</h3></div><button type="button" data-ui-toast-ignore data-ops-close-dialog aria-label="Close dialog">×</button></div><label>Request<input name="request" readonly></label><label>Technician<select name="technician"><option>Tech 1 · bike assist</option><option>Tech 2 · battery support</option><option>Tow partner</option></select></label><label>ETA estimate<select name="eta"><option>15 min</option><option selected>25 min</option><option>40 min</option><option>60 min</option></select></label><label>Dispatch status<select name="status"><option>Assigned</option><option>On route</option><option>Arrived</option></select></label><button class="ops-submit" type="submit">Save preview</button></form></dialog>
      </section>`,
    apartment:`
      <section class="ops-panel ops-apartment" aria-labelledby="ops-title">
        <div class="ops-heading"><div><p class="ops-eyebrow">BUILDING OPERATIONS · DEMO MODE</p><h2 id="ops-title">Access &amp; governance</h2><p>Permission changes and audit events below exist only in this page preview.</p></div><label class="ops-open-switch"><span><strong>Building availability</strong><small data-ops-open-label>Open for residents</small></span><input type="checkbox" checked data-ops-availability aria-label="Building availability"></label></div>
        <div class="ops-governance-grid"><article class="ops-role-card"><div class="ops-card-head"><div><h3>Role permissions</h3><p>Example access matrix · not security enforcement</p></div><select data-ops-role aria-label="Select staff role"><option>Property manager</option><option>Maintenance staff</option><option>Reception</option></select></div><div class="ops-permission-list"><label><span>Approve refunds</span><input type="checkbox" checked data-ops-permission="Approve refunds"></label><label><span>Edit maintenance bills</span><input type="checkbox" checked data-ops-permission="Edit maintenance bills"></label><label><span>Manage resident access</span><input type="checkbox" data-ops-permission="Manage resident access"></label><label><span>View audit history</span><input type="checkbox" checked data-ops-permission="View audit history"></label></div><p class="ops-role-note">Preview only: this matrix does not authorize or block actions.</p></article>
          <article class="ops-audit-card"><div class="ops-audit-head"><div><p class="ops-eyebrow">READ-ONLY SAMPLE</p><h3>Audit trail</h3></div><span>LOCAL</span></div><ol class="ops-audit-list" data-ops-audit><li><time>09:42</time><span><b>Manager A</b> reviewed complaint A-101</span></li><li><time>09:18</time><span><b>Staff B</b> updated bill status · Flat B-204</span></li><li><time>08:55</time><span><b>Manager A</b> changed amenity schedule</span></li></ol><p>Events are illustrative and are not immutable records.</p></article>
        </div>
        <div class="ops-hours"><div><strong>Operational hours</strong><span>Mon–Sat · 7:00 AM–10:00 PM</span></div><button type="button" data-ui-toast-ignore data-ops-notice="Operating hours editor is a static preview.">Edit hours</button><button type="button" data-ui-toast-ignore data-ops-notice="Emergency closure is a visual-only preview; no building system was changed.">Preview emergency closure</button></div>
      </section>`
  };

  var panel=panels[mode];
  if(!panel) return;
  var template=document.createElement('template');
  template.innerHTML=panel.trim();
  var section=template.content.firstElementChild;
  var kpis=main.querySelector('.kpis');
  if(kpis) kpis.insertAdjacentElement('afterend',section);
  else main.prepend(section);

  function notify(message){
    if(typeof window.showUINotification==='function') window.showUINotification(message);
  }
  function setText(selector,value,root){
    var el=(root||section).querySelector(selector);
    if(el) el.textContent=value;
  }

  section.addEventListener('click',function(event){
    var button=event.target.closest('button');
    if(!button||!section.contains(button)) return;
    if(button.hasAttribute('data-ops-notice')){
      notify(button.getAttribute('data-ops-notice'));
    }
    if(button.hasAttribute('data-ops-filter')){
      var filter=button.getAttribute('data-ops-filter');
      section.querySelectorAll('[data-ops-filter]').forEach(function(tab){
        tab.setAttribute('aria-pressed',String(tab===button));
      });
      section.querySelectorAll('[data-ops-status]').forEach(function(row){
        row.hidden=filter!=='all'&&row.getAttribute('data-ops-status')!==filter;
      });
    }
    if(button.hasAttribute('data-ops-customer')){
      ['name','phone','due','limit','history','note'].forEach(function(key){
        setText('[data-ops-profile-'+key+']',button.dataset[key]);
      });
      section.querySelectorAll('[data-ops-customer]').forEach(function(item){
        item.setAttribute('aria-current',String(item===button));
      });
    }
    if(button.hasAttribute('data-ops-advance')){
      var card=button.closest('[data-ops-card]');
      var lane=card&&card.closest('[data-ops-lane]');
      var next=lane&&lane.nextElementSibling;
      if(next&&next.matches('[data-ops-lane]')){
        next.appendChild(card);
        var stage=next.querySelector('header h3');
        [lane,next].forEach(function(column){
          var count=column.querySelectorAll('[data-ops-card]').length;
          var counter=column.querySelector('header span');
          if(counter) counter.textContent=String(count);
        });
        button.textContent=next.nextElementSibling&&next.nextElementSibling.matches('[data-ops-lane]')?'Complete →':'Done';
        if(!next.nextElementSibling||!next.nextElementSibling.matches('[data-ops-lane]')) button.disabled=true;
        notify('Booking moved to '+(stage?stage.textContent:'the next stage')+' in this preview.');
      }
    }
    if(button.hasAttribute('data-ops-open-dispatch')){
      var dialog=section.querySelector('[data-ops-dispatch-dialog]');
      var row=button.closest('[data-ops-request]');
      if(dialog&&row){
        var form=dialog.querySelector('[data-ops-dispatch-form]');
        form.elements.request.value=row.dataset.opsRequest;
        dialog.dataset.activeRequest=row.dataset.opsRequest;
        dialog.showModal();
      }
    }
    if(button.hasAttribute('data-ops-close-dialog')){
      var openDialog=button.closest('dialog');
      if(openDialog) openDialog.close();
    }
  });

  section.addEventListener('change',function(event){
    var target=event.target;
    if(target.matches('[data-ops-stock]')){
      var label=target.closest('label');
      var note=label&&label.querySelector('small');
      if(note) note.textContent=target.checked?'Available in sample':'Marked unavailable';
      notify('Stock availability changed in this local preview.');
    }
    if(target.matches('[data-ops-availability]')){
      setText('[data-ops-open-label]',target.checked?'Open for residents':'Closed in preview');
      notify(target.checked?'Building marked open in this preview.':'Building marked closed in this preview.');
      addAudit('Availability set to '+(target.checked?'open':'closed'));
    }
    if(target.matches('[data-ops-permission]')){
      var role=section.querySelector('[data-ops-role]').value;
      addAudit(role+' '+(target.checked?'enabled':'disabled')+' “'+target.dataset.opsPermission+'”');
      notify('Permission preview updated for '+role+'.');
    }
    if(target.matches('[data-ops-role]')){
      notify('Showing the sample permission matrix for '+target.value+'.');
    }
    if(target.matches('[data-ops-chart-range]')){
      var values={
        today:{total:'₹8,420',bars:[38,62,45,83,68,96],labels:['8a','10a','12p','2p','4p','6p']},
        week:{total:'₹54,280',bars:[55,72,48,88,64,96],labels:['Mon','Tue','Wed','Thu','Fri','Sat']},
        month:{total:'₹2,18,640',bars:[42,78,61,92,70,85],labels:['1–5','6–10','11–15','16–20','21–25','26–30']},
        year:{total:'₹18.4L',bars:[35,53,49,66,79,96],labels:['Jan','Mar','May','Jul','Sep','Nov']}
      }[target.value];
      setText('[data-ops-chart-total]',values.total);
      section.querySelectorAll('.ops-bar').forEach(function(bar,index){
        bar.style.setProperty('--bar',values.bars[index]+'%');
        bar.querySelector('span').textContent=values.labels[index];
      });
    }
  });

  var paymentForm=section.querySelector('[data-ops-payment-form]');
  if(paymentForm){
    paymentForm.addEventListener('submit',function(event){
      event.preventDefault();
      event.stopPropagation();
      var amount=Number(paymentForm.elements.amount.value);
      if(!Number.isFinite(amount)||amount<=0){
        notify('Enter a payment amount greater than zero.');
        return;
      }
      notify('Receipt preview for ₹'+amount.toFixed(2)+' created locally; no payment was recorded.');
      paymentForm.reset();
    });
  }

  var dispatchForm=section.querySelector('[data-ops-dispatch-form]');
  if(dispatchForm){
    dispatchForm.addEventListener('submit',function(event){
      event.preventDefault();
      event.stopPropagation();
      var dialog=dispatchForm.closest('dialog');
      var row=section.querySelector('[data-ops-request="'+dialog.dataset.activeRequest+'"]');
      if(row){
        row.querySelector('.ops-request-info span').textContent='Demo location · '+dispatchForm.elements.technician.value.split(' · ')[0]+' · '+dispatchForm.elements.status.value;
        row.querySelector('.ops-eta').textContent=dispatchForm.elements.eta.value;
      }
      dialog.close();
      notify('Dispatch preview updated locally; no technician was contacted.');
    });
  }

  function addAudit(message){
    var list=section.querySelector('[data-ops-audit]');
    if(!list) return;
    var item=document.createElement('li');
    var time=document.createElement('time');
    var text=document.createElement('span');
    time.textContent=new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
    text.textContent=message;
    item.append(time,text);
    list.prepend(item);
  }
})();
