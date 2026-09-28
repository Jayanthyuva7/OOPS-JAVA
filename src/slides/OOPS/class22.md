<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .types-stage { display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .types-col { border-radius:10px; padding:10px 12px; font-family:'Consolas',monospace; font-size:.72rem; text-align:center; display:flex; flex-direction:column; gap:6px; align-items:center; }
  .types-s { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; }
  .types-m { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .types-h { background:#f5effb; border:1.5px solid #7b1fa2; color:#4a148c; }
  .types-head { font-weight:800; font-size:.84rem; padding-bottom:3px; border-bottom:1px dashed currentColor; width:100%; }
  .types-node { background:#fff; border-radius:6px; padding:4px 10px; font-weight:700; border:1px solid rgba(0,0,0,.1); width:85%; }
  .types-arr { font-size:1rem; font-weight:800; color:#b3531f; }
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
<Slide2 topic="Types of Inheritance Supported for Classes in Java">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Java officially supports three forms of inheritance among classes: Single, Multilevel, and Hierarchical inheritance.</b>
        Every class in Java (except <code>java.lang.Object</code>) has exactly one direct superclass. Multiple inheritance through classes is intentionally forbidden to eliminate ambiguity.
      </div>
      <div v-click class="types-stage">
        <div class="card types-col types-s">
          <div class="types-head">1. Single Inheritance</div>
          <div class="types-node">Class A (Animal)</div>
          <div class="types-arr">&darr; extends</div>
          <div class="types-node">Class B (Dog)</div>
        </div>
        <div class="card types-col types-m">
          <div class="types-head">2. Multilevel Inheritance</div>
          <div class="types-node">Class A (Device)</div>
          <div class="types-arr">&darr; extends</div>
          <div class="types-node">Class B (Phone)</div>
          <div class="types-arr">&darr; extends</div>
          <div class="types-node">Class C (SmartPhone)</div>
        </div>
        <div class="card types-col types-h">
          <div class="types-head">3. Hierarchical Inheritance</div>
          <div class="types-node">Class A (Shape)</div>
          <div class="types-arr">&darr; branched &darr;</div>
          <div style="display:flex; gap:6px; width:100%; justify-content:center;">
            <div class="types-node" style="width:48%;">Circle</div>
            <div class="types-node" style="width:48%;">Square</div>
          </div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">Single Inheritance</div>
          <pre class="x-code"><span class="kw">class</span> <span class="ty">Dog</span> <span class="kw">extends</span> <span class="ty">Animal</span> {}</pre>
          <div class="x-note">One subclass inherits directly from one superclass. Clean, simple, and direct.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Multilevel Chain</div>
          <pre class="x-code"><span class="kw">class</span> <span class="ty">C</span> <span class="kw">extends</span> <span class="ty">B</span> {}
<span class="kw">class</span> <span class="ty">B</span> <span class="kw">extends</span> <span class="ty">A</span> {}</pre>
          <div class="x-note">Child inherits all members down the chain from parent and grandparent.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Hierarchical Tree</div>
          <pre class="x-code"><span class="kw">class</span> <span class="ty">Cat</span> <span class="kw">extends</span> <span class="ty">Animal</span> {}
<span class="kw">class</span> <span class="ty">Dog</span> <span class="kw">extends</span> <span class="ty">Animal</span> {}</pre>
          <div class="x-note">Multiple sibling classes share common base code from one parent.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Root Object Class</div>
          <div class="x-note">If no superclass is specified, Java implicitly extends <code>java.lang.Object</code>, making it the root ancestor of all Java classes.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
