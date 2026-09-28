<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .life-stage { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .life-step { border-radius:10px; padding:10px 12px; font-family:'Consolas',monospace; font-size:.72rem; text-align:center; position:relative; }
  .life-1 { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .life-2 { background:#e3f2fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .life-3 { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .life-4 { background:#ffebee; border:1.5px solid #c62828; color:#b71c1c; }
  .life-num { font-size:1.1rem; font-weight:800; margin-bottom:2px; }
  .life-title { font-weight:800; font-size:.8rem; margin-bottom:4px; }
  .life-desc { font-size:.65rem; line-height:1.35; font-family:'Nunito',sans-serif; opacity:.9; }

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

<Slide2 topic="Object Initialization &amp; Lifecycle">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Every Java object follows an automated lifecycle: from allocation on the Heap, through active use, to deallocation by the Garbage Collector (GC).</b>
        Developers never manually free memory in Java; the JVM automatically detects unreachable objects and recycles heap space safely.
      </div>
      <div v-click class="life-stage">
        <div class="card life-step life-1">
          <div class="life-num">01</div>
          <div class="life-title">Born (Creation)</div>
          <div class="life-desc"><code>new</code> allocates heap space; constructor initializes fields with values.</div>
        </div>
        <div class="card life-step life-2">
          <div class="life-num">02</div>
          <div class="life-title">In Use (Active)</div>
          <div class="life-desc">Methods are invoked, state changes, referenced by live stack variables.</div>
        </div>
        <div class="card life-step life-3">
          <div class="life-num">03</div>
          <div class="life-title">Unreachable</div>
          <div class="life-desc">Reference set to <code>null</code> or goes out of method scope. No pointer remains.</div>
        </div>
        <div class="card life-step life-4">
          <div class="life-num">04</div>
          <div class="life-title">Reclaimed (GC)</div>
          <div class="life-desc">Garbage Collector sweeps unreachable object and returns heap memory to JVM pool.</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Init via Constructor</div>
          <pre class="x-code"><span class="ty">Car</span> c = <span class="kw">new</span> <span class="ty">Car</span>(<span class="st">"BMW"</span>, <span class="nm">200</span>);</pre>
          <div class="x-note">The preferred industry approach: object is fully valid at the moment of birth.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Init via Reference</div>
          <pre class="x-code"><span class="ty">Car</span> c = <span class="kw">new</span> <span class="ty">Car</span>();
c.brand = <span class="st">"Audi"</span>;</pre>
          <div class="x-note">Direct assignment into accessible public fields after instantiation.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Making Unreachable</div>
          <pre class="x-code"><span class="ty">Car</span> c = <span class="kw">new</span> <span class="ty">Car</span>();
c = <span class="kw">null</span>; <span class="cm">// orphaned!</span></pre>
          <div class="x-note">Severing the pointer marks the heap object for garbage collection.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. System.gc() Request</div>
          <div class="x-note">You can request garbage collection via <code>System.gc()</code>, but JVM retains final control over when to sweep.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
