<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  @keyframes inhFlow { 0%,100%{transform:translateX(0);opacity:.8;} 50%{transform:translateX(6px);opacity:1;} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .inh-stage { display:grid; grid-template-columns:1fr auto 1fr; gap:14px; align-items:center; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .inh-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.74rem; }
  .inh-parent { background:#f0f7ff; border:1.5px solid #20588f; color:#0f3b66; }
  .inh-child { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .inh-title { font-weight:800; font-size:.86rem; text-align:center; padding-bottom:4px; margin-bottom:6px; border-bottom:1px dashed currentColor; }
  .inh-sub { font-size:.65rem; opacity:.85; margin-top:3px; }
  .inh-pipe { display:flex; flex-direction:column; align-items:center; gap:2px; color:#b3531f; font-family:'Consolas',monospace; }
  .inh-arrow { font-size:1.6rem; font-weight:800; animation: inhFlow 1.5s ease-in-out infinite; }
  .inh-pill { background:#b3531f; color:#fff; font-size:.62rem; font-weight:800; padding:2px 8px; border-radius:999px; letter-spacing:.3px; }
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
<Slide2 topic="Inheritance Fundamentals &amp; The extends Keyword">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Inheritance is a core pillar of OOP where a new class derives properties and behaviors from an existing class &mdash; establishing an IS-A relationship.</b>
        In Java, the <code>extends</code> keyword lets a <i>Subclass (child)</i> inherit all non-private fields and methods from a <i>Superclass (parent)</i>, maximizing code reusability.
      </div>
      <div v-click class="inh-stage">
        <div class="card inh-box inh-parent">
          <div class="inh-title">Parent (Superclass): Vehicle</div>
          <div>+ String brand = "Ford";</div>
          <div>+ void start() { ... }</div>
          <div class="inh-sub">Common attributes &amp; behaviors</div>
        </div>
        <div class="inh-pipe">
          <div class="inh-pill">extends</div>
          <div class="inh-arrow">&rarr;</div>
          <div style="font-size:.62rem; font-weight:800;">INHERITS</div>
        </div>
        <div class="card inh-box inh-child">
          <div class="inh-title">Child (Subclass): Car</div>
          <div style="color:#20588f;">// Inherits brand &amp; start()</div>
          <div>+ int numDoors = 4;</div>
          <div>+ void openTrunk() { ... }</div>
          <div class="inh-sub">Specialized additions for Car</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. The IS-A Relationship</div>
          <div class="x-note">Inheritance represents specialization: a <code>Car</code> <b>IS-A</b> <code>Vehicle</code>, a <code>Manager</code> <b>IS-A</b> <code>Employee</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. extends Syntax</div>
          <pre class="x-code"><span class="kw">class</span> <span class="ty">Car</span> <span class="kw">extends</span> <span class="ty">Vehicle</span> {
  <span class="ty">int</span> doors;
}</pre>
          <div class="x-note">Derived class adds new members onto the base class.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Code Reusability</div>
          <div class="x-note">Write common logic once in the parent. When bugs are fixed in <code>Vehicle</code>, all derived subclasses benefit immediately.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Memory Layout</div>
          <div class="x-note">Instantiating <code>new Car()</code> allocates a single heap block holding both parent fields (<code>brand</code>) and child fields (<code>doors</code>).</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
