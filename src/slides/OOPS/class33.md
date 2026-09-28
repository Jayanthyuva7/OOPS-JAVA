<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  @keyframes vtablePulse { 0%,100%{box-shadow:0 0 0 rgba(32,88,143,0);} 50%{box-shadow:0 0 18px rgba(32,88,143,.25);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .dmd-stage { display:grid; grid-template-columns:1fr auto 1.3fr; gap:14px; align-items:center; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .dmd-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.73rem; }
  .dmd-ref { background:#edf2f7; border:1.5px solid #4a5568; color:#1a202c; }
  .dmd-heap { background:#f0f9ff; border:1.5px solid #20588f; color:#0f3b66; animation: vtablePulse 2.8s ease-in-out infinite; }
  .dmd-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .dmd-arr { display:flex; flex-direction:column; align-items:center; gap:2px; color:#b3531f; font-weight:800; }
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
<Slide2 topic="Dynamic Method Dispatch (Virtual Method Invocation)">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Dynamic Method Dispatch is the runtime mechanism by which an overridden method call is resolved dynamically based on the Heap object.</b>
        In Java, all non-static, non-final methods are <i>virtual by default</i>. The reference type decides which methods are legally visible, but the Heap object dictates which implementation runs.
      </div>
      <div v-click class="dmd-stage">
        <div class="card dmd-box dmd-ref">
          <div class="dmd-head">Stack Reference (Compile-Time)</div>
          <div><b>Shape s;</b></div>
          <div style="font-size:.64rem; color:#718096; margin-top:4px;">Compiler verifies that Shape has draw() method</div>
        </div>
        <div class="dmd-arr">
          <div style="font-size:.62rem; text-transform:uppercase;">points to</div>
          <div style="font-size:1.6rem;">&rarr;</div>
          <div style="font-size:.62rem; color:#b3531f;">s.draw()</div>
        </div>
        <div class="card dmd-box dmd-heap">
          <div class="dmd-head">Heap Object (Runtime vtable)</div>
          <div><b>new Circle();</b></div>
          <div style="background:#fff; border-radius:4px; padding:4px 8px; margin-top:4px; border:1px solid #90caf9;">
            <span style="color:#20588f; font-weight:700;">JVM vtable:</span> draw() &rarr; Circle.draw()
          </div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. The Principle</div>
          <div class="x-note"><b>Reference decides visibility; Object decides implementation.</b> <code>Shape s</code> can only call methods defined in <code>Shape</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Virtual by Default</div>
          <div class="x-note">Unlike C++, where you must write <code>virtual</code>, all Java instance methods are automatically virtual and dynamically dispatched.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Polymorphic Loops</div>
          <pre class="x-code"><span class="ty">Shape</span>[] shapes = {
  <span class="kw">new</span> <span class="ty">Circle</span>(), <span class="kw">new</span> <span class="ty">Square</span>()
};
<span class="kw">for</span> (<span class="ty">Shape</span> s : shapes) {
  s.draw(); <span class="cm">// Dispatches!</span>
}</pre>
          <div class="x-note">Clean unified loops over different subtypes.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. High Extensibility</div>
          <div class="x-note">You can add a <code>Triangle</code> subclass tomorrow and existing rendering loops run seamlessly without modifying a single line of code!</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
