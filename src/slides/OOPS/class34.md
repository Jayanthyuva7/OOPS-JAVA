<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .abs-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .abs-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.73rem; }
  .abs-mth { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .abs-cnc { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; }
  .abs-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .abs-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.65rem; }
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
<Slide2 topic="Abstraction: Abstract Classes &amp; Abstract Methods">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Abstraction is the OOP principle of hiding complex implementation details and exposing only the essential feature contract to the user.</b>
        An <code>abstract class</code> serves as a template that cannot be instantiated on its own. It can contain both <i>abstract methods</i> (no body) and <i>concrete methods</i> (with body).
      </div>
      <div v-click class="abs-stage">
        <div class="card abs-box abs-mth">
          <div class="abs-head">Abstract Method (Contract: WHAT to do)</div>
          <div class="abs-code"><span style="color:#569cd6;">abstract class</span> <span style="color:#4ec9b0;">Account</span> {
  <span style="color:#6a9955;">// No body! Terminated with semicolon:</span>
  <span style="color:#569cd6;">abstract double</span> calcInterest();
}</div>
          <div style="font-size:.64rem; margin-top:4px;">Mandates subclasses to provide the logic.</div>
        </div>
        <div class="card abs-box abs-cnc">
          <div class="abs-head">Concrete Method (Shared: HOW to do)</div>
          <div class="abs-code"><span style="color:#569cd6;">abstract class</span> <span style="color:#4ec9b0;">Account</span> {
  <span style="color:#569cd6;">void</span> deposit(<span style="color:#4ec9b0;">double</span> amt) {
    balance += amt; <span style="color:#6a9955;">// Shared logic implemented!</span>
  }
}</div>
          <div style="font-size:.64rem; margin-top:4px;">Directly inherited by all subclasses.</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. The abstract Keyword</div>
          <div class="x-note">Declares incomplete components. If a class has even one abstract method, the entire class MUST be declared <code>abstract</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Partial Abstraction</div>
          <div class="x-note">Unlike 100% abstract interfaces, abstract classes achieve <b>0% to 100% abstraction</b> by mixing concrete and abstract methods.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. No Direct Instantiation</div>
          <pre class="x-code"><span class="cm">// COMPILE ERROR:</span>
<span class="ty">Account</span> a = <span class="kw">new</span> <span class="ty">Account</span>();</pre>
          <div class="x-note">Cannot instantiate abstract class with new.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Subclass Obligation</div>
          <div class="x-note">The first concrete subclass extending an abstract class must override and implement <b>all</b> abstract methods.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
