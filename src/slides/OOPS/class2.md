<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  @keyframes classGlow { 0%,100%{box-shadow:0 0 0 rgba(32,88,143,0);} 50%{box-shadow:0 0 20px rgba(32,88,143,.32);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .x-def code { background:#fff; border:1px solid #fbc6a1; border-radius:3px; padding:0 4px; color:#b3531f; font-family:'Consolas',monospace; }
  .x-stage { display:flex; justify-content:center; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .x-bp { background:#e2f0fe; border:2.5px dashed #20588f; border-radius:14px; padding:14px 24px; color:#0f3b66; font-family:'Consolas',monospace; min-width:380px; animation: classGlow 2.6s ease-in-out 1s infinite; position:relative; }
  .x-bp .stamp { position:absolute; top:-12px; left:-12px; background:#20588f; color:#fff; border-radius:999px; font-size:.62rem; font-weight:800; padding:3px 11px; letter-spacing:.4px; box-shadow:0 2px 6px rgba(32,88,143,.4); }
  .x-bp-title { font-weight:800; font-size:1.05rem; text-align:center; padding-bottom:6px; margin-bottom:6px; border-bottom:1px dashed #7fa9c4; }
  .x-bp-title .kw { color:#569cd6; }
  .x-bp-section { font-size:.62rem; text-transform:uppercase; letter-spacing:.4px; color:#5d8baf; font-weight:700; margin-top:5px; }
  .x-bp-line { font-size:.78rem; line-height:1.5; }
  .x-bp-line .ty { color:#4ec9b0; }
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
<Slide2 topic="What is a Class?">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>A class is a user-defined <i>blueprint</i> &mdash; a template that describes what properties (data) and behaviour (methods) every object of that type will have.</b>
        It's the architect's drawing, not the building itself. You can build many buildings (objects) from one drawing (class), and each is independent of the others.
      </div>
      <div v-click class="x-stage">
        <div class="x-bp">
          <div class="stamp">BLUEPRINT</div>
          <div class="x-bp-title"><span class="kw">class</span> Car</div>
          <div class="x-bp-section">attributes / state</div>
          <div class="x-bp-line"><span class="ty">String</span> brand, color;</div>
          <div class="x-bp-line"><span class="ty">int</span> speed, seats;</div>
          <div class="x-bp-section">methods / behaviour</div>
          <div class="x-bp-line">start() &middot; stop() &middot; accelerate()</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">Blueprint, not the thing</div>
          <div class="x-note">A class doesn't drive anywhere. It just describes <i>what a Car has</i> and <i>what a Car does</i>. Real cars are built from it.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Syntax</div>
          <pre class="x-code"><span class="kw">class</span> <span class="ty">Car</span> {
  <span class="ty">String</span> brand;
  <span class="kw">void</span> start() { ... }
}</pre>
          <div class="x-note">Keyword <code>class</code>, name, braces. Inside: fields, methods, constructors.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">No memory yet</div>
          <div class="x-note">Declaring a class allocates <i>no memory</i> for fields. Memory comes when you make an object with <code>new</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Many objects, one class</div>
          <div class="x-note">From one <code>Car</code> class you can build any number of Car objects &mdash; each independent, each with its own field values.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>