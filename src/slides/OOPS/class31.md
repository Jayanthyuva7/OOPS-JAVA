<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .poly-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .poly-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.73rem; }
  .poly-stat { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; }
  .poly-dyn { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .poly-head { font-weight:800; font-size:.86rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .poly-row { display:flex; justify-content:space-between; padding:3px 0; border-bottom:1px dotted rgba(0,0,0,.08); }
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
<Slide2 topic="Polymorphism: Compile-Time vs Runtime &amp; Binding">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Polymorphism ("many forms") is the ability of an object or message to behave differently depending on the context.</b>
        Java achieves polymorphism through two distinct mechanisms: <i>Static Binding</i> (Compile-Time / Overloading) and <i>Dynamic Binding</i> (Runtime / Overriding).
      </div>
      <div v-click class="poly-stage">
        <div class="card poly-box poly-stat">
          <div class="poly-head">Compile-Time (Static Binding)</div>
          <div class="poly-row"><span>Mechanism:</span> <span>Method Overloading</span></div>
          <div class="poly-row"><span>Resolution:</span> <span>By Compiler at compile time</span></div>
          <div class="poly-row"><span>Basis:</span> <span>Reference type &amp; argument types</span></div>
          <div class="poly-row"><span>Performance:</span> <span>Fast (Direct bytecode call)</span></div>
          <div class="poly-row"><span>Example:</span> <span>Math.max(int, int)</span></div>
        </div>
        <div class="card poly-box poly-dyn">
          <div class="poly-head">Runtime (Dynamic Binding)</div>
          <div class="poly-row"><span>Mechanism:</span> <span>Method Overriding</span></div>
          <div class="poly-row"><span>Resolution:</span> <span>By JVM at runtime execution</span></div>
          <div class="poly-row"><span>Basis:</span> <span>Actual Heap object instance</span></div>
          <div class="poly-row"><span>Performance:</span> <span>Flexible via virtual table lookup</span></div>
          <div class="poly-row"><span>Example:</span> <span>shape.draw() on Circle</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Static Binding</div>
          <div class="x-note">Methods marked <code>private</code>, <code>static</code>, or <code>final</code> always use static binding because they cannot be overridden.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Dynamic Binding</div>
          <div class="x-note">Non-final instance methods use dynamic binding, allowing derived classes to change runtime behavior dynamically.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Code Comparison</div>
          <div class="x-code"><span class="cm">// Static: by params</span>&#10;calc.add(<span class="nm">10</span>, <span class="nm">20</span>);&#10;<span class="cm">// Dynamic: by Heap obj</span>&#10;<span class="ty">Shape</span> s = <span class="kw">new</span> <span class="ty">Circle</span>();&#10;s.draw();</div>
          <div class="x-note">Static uses type; Dynamic uses object.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Extensibility</div>
          <div class="x-note">Dynamic polymorphism allows writing generic code that works with future subclasses without changing the caller!</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
