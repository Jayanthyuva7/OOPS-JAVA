<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .cast-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .cast-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.73rem; }
  .cast-up { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .cast-dn { background:#fef3c7; border:1.5px solid #d97706; color:#92400e; }
  .cast-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .cast-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.65rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 10px; font-size:.66rem; margin:0; font-family:'Consolas',monospace; white-space:pre; line-height:1.4; }
  .x-code .kw { color:#569cd6; } .x-code .ty { color:#4ec9b0; } .x-code .nm { color:#b5cea8; } .x-code .st { color:#ce9178; } .x-code .cm { color:#6a9955; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Upcasting, Downcasting &amp; The instanceof Operator">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Type casting in OOP lets references transition along an inheritance hierarchy &mdash; either upwards towards generalization or downwards towards specialization.</b>
        <i>Upcasting</i> is always automatic and safe. <i>Downcasting</i> requires explicit syntax and should always be guarded with <code>instanceof</code> to avoid runtime crashes.
      </div>
      <div v-click class="cast-stage">
        <div class="card cast-box cast-up">
          <div class="cast-head">&#9650; Upcasting (Implicit &amp; 100% Safe)</div>
          <div class="cast-code"><span style="color:#4ec9b0;">Animal</span> a = <span style="color:#569cd6;">new</span> <span style="color:#4ec9b0;">Dog</span>();
a.eat(); <span style="color:#6a9955;">// accessible from Animal</span>
<span style="color:#6a9955;">// a.bark(); // ERROR! Hidden from Animal reference</span></div>
          <div style="font-size:.64rem; margin-top:4px;">Reference points to broader parent type.</div>
        </div>
        <div class="card cast-box cast-dn">
          <div class="cast-head">&#9660; Downcasting (Explicit &amp; Guarded)</div>
          <div class="cast-code"><span style="color:#569cd6;">if</span> (a <span style="color:#569cd6;">instanceof</span> <span style="color:#4ec9b0;">Dog</span>) {
  <span style="color:#4ec9b0;">Dog</span> d = (<span style="color:#4ec9b0;">Dog</span>) a; <span style="color:#6a9955;">// explicit cast</span>
  d.bark(); <span style="color:#81c784;">// Now accessible!</span>
}</div>
          <div style="font-size:.64rem; margin-top:4px;">Restores access to specific child methods.</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Upcasting</div>
          <div class="x-note">Assigning a subclass instance to a superclass reference variable. Java handles this automatically without explicit casting.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Downcasting</div>
          <div class="x-note">Converting a superclass reference back to its subclass type. Explicit cast syntax <code>(Child) ref</code> is mandatory.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. ClassCastException</div>
          <pre class="x-code"><span class="ty">Animal</span> a = <span class="kw">new</span> <span class="ty">Cat</span>();
<span class="ty">Dog</span> d = (<span class="ty">Dog</span>) a; <span class="cm">// CRASH!</span></pre>
          <div class="x-note">Heap object is Cat, cannot cast to Dog.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. The instanceof Check</div>
          <div class="x-note">Returns <code>true</code> if object is an instance of the class or subclass. Always verify before downcasting!</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
