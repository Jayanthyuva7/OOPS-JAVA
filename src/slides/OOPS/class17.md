<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .inh-stage { display:flex; flex-direction:column; align-items:center; gap:8px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .inh-step { border-radius:8px; padding:8px 18px; width:80%; max-width:560px; font-family:'Consolas',monospace; font-size:.74rem; display:flex; justify-content:space-between; align-items:center; }
  .inh-p { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; }
  .inh-c { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .inh-badge { background:#b3531f; color:#fff; font-size:.62rem; font-weight:800; padding:2px 8px; border-radius:999px; }

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

<Slide2 topic="Constructor Inheritance Rules &amp; super()">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Crucial Java Rule: Constructors are NOT inherited by subclasses.</b>
        A child class inherits members and methods from its parent, but never constructors. Instead, the child constructor must invoke a parent constructor via <code>super(...)</code> to initialize inherited fields.
      </div>
      <div v-click class="inh-stage">
        <div class="card inh-step inh-p">
          <div><b style="color:#20588f;">1. Superclass:</b> class Vehicle { Vehicle() { ... } }</div>
          <div class="inh-badge" style="background:#20588f;">RUNS 1ST</div>
        </div>
        <div style="font-size:1.1rem; color:#b3531f; font-weight:800;">&darr; auto super() injected &darr;</div>
        <div class="card inh-step inh-c">
          <div><b style="color:#b3531f;">2. Subclass:</b> class Car extends Vehicle { Car() { super(); ... } }</div>
          <div class="inh-badge">RUNS 2ND</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Not Inherited</div>
          <div class="x-note">Constructors are meant exclusively for their own class name. You cannot do <code>new Car()</code> and expect <code>Vehicle(String)</code> directly.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Auto super() Injection</div>
          <div class="x-note">If neither <code>super(...)</code> nor <code>this(...)</code> is written on line 1, the compiler silently inserts <code>super();</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Parent No-Arg Trap</div>
          <pre class="x-code"><span class="kw">class</span> <span class="ty">Parent</span> {
  <span class="ty">Parent</span>(<span class="ty">int</span> x) {} <span class="cm">// no default!</span>
}
<span class="kw">class</span> <span class="ty">Child</span> <span class="kw">extends</span> <span class="ty">Parent</span> {
  <span class="ty">Child</span>() {
    <span class="kw">super</span>(<span class="nm">10</span>); <span class="cm">// MANDATORY!</span>
  }
}</pre>
          <div class="x-note">Must explicitly call parameterized super.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Top-Down Sequence</div>
          <div class="x-note">Execution order is strictly Top-to-Bottom: <code>java.lang.Object</code> runs first, followed by Superclass, and finally the Subclass.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
