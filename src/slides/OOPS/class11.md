<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  @keyframes ptrFlow { 0%,100%{transform:translateX(0);opacity:.8;} 50%{transform:translateX(6px);opacity:1;} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .sh-stage { display:grid; grid-template-columns:1fr auto 1.4fr; gap:14px; align-items:center; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .sh-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.74rem; }
  .sh-stack { background:#edf2f7; border:1.5px solid #4a5568; color:#1a202c; }
  .sh-heap { background:#f0f9ff; border:1.5px solid #20588f; color:#0f3b66; }
  .sh-title { font-weight:800; font-size:.86rem; text-align:center; padding-bottom:4px; margin-bottom:6px; border-bottom:1px dashed currentColor; }
  .sh-ptr { display:flex; flex-direction:column; align-items:center; gap:2px; color:#b3531f; font-family:'Consolas',monospace; }
  .sh-arrow { font-size:1.6rem; font-weight:800; animation: ptrFlow 1.5s ease-in-out infinite; }

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

<Slide2 topic="Object Creation: new Keyword &amp; Memory Allocation">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Creating an object in Java links two distinct memory spaces: a <i>reference variable</i> on the Stack and the <i>actual object payload</i> on the Heap.</b>
        Writing <code>Car c = new Car();</code> declares the reference, allocates heap memory, initializes fields with default values, runs the constructor, and binds the address to <code>c</code>.
      </div>
      <div v-click class="sh-stage">
        <div class="card sh-box sh-stack">
          <div class="sh-title">Stack Memory</div>
          <div>Variable: <b>c</b></div>
          <div style="color:#b3531f; font-weight:700;">Value: 0x4F2A (Address)</div>
          <div style="font-size:.62rem; color:#718096; margin-top:4px;">Allocated per stack frame</div>
        </div>
        <div class="sh-ptr">
          <div style="font-size:.62rem; font-weight:800;">POINTS TO</div>
          <div class="sh-arrow">&rarr;</div>
          <div style="font-size:.6rem; color:#718096;">Address 0x4F2A</div>
        </div>
        <div class="card sh-box sh-heap">
          <div class="sh-title">Heap Memory (Object Payload)</div>
          <div>brand: "Honda"</div>
          <div>speed: 50</div>
          <div>start(), accelerate()</div>
          <div style="font-size:.62rem; color:#20588f; margin-top:4px;">Dynamic memory managed by GC</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Declaration</div>
          <pre class="x-code"><span class="ty">Car</span> c;</pre>
          <div class="x-note">Reserves a 4-to-8-byte slot on the Stack named <code>c</code>. Holds <code>null</code> until assigned.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Instantiation (new)</div>
          <pre class="x-code"><span class="kw">new</span> <span class="ty">Car</span>();</pre>
          <div class="x-note">Calculates required byte size, carves a slot on the Heap, and returns the reference address.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Initialization</div>
          <pre class="x-code"><span class="ty">Car</span>(); <span class="cm">// Constructor</span></pre>
          <div class="x-note">Executes constructor logic to set up starting field values.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. NullPointerException</div>
          <pre class="x-code"><span class="ty">Car</span> c = <span class="kw">null</span>;
c.start(); <span class="cm">// CRASH!</span></pre>
          <div class="x-note">Accessing members on a null pointer causes runtime crash.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
