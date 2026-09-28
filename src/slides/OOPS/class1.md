<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  @keyframes popIn { 0%{opacity:0;transform:scale(.6) translateY(10px);} 70%{opacity:1;transform:scale(1.04) translateY(-2px);} 100%{opacity:1;transform:scale(1) translateY(0);} }
  @keyframes classGlow { 0%,100%{box-shadow:0 0 0 rgba(32,88,143,0);} 50%{box-shadow:0 0 22px rgba(32,88,143,.28);} }
  @keyframes objGlow { 0%,100%{box-shadow:0 0 0 rgba(179,83,31,0);} 50%{box-shadow:0 0 18px rgba(179,83,31,.28);} }
  @keyframes arrowFlow { 0%,100%{transform:translateX(-2px);opacity:.75;} 50%{transform:translateX(4px);opacity:1;} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .dc-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .dc-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .dc-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .dc-flow { display:grid; grid-template-columns: 1fr auto 1fr; gap:14px; align-items:center; padding:4px 8px; }
  .dc-class { background:#e2f0fe; border:1.5px solid #20588f; border-radius:10px; padding:8px 14px; color:#20588f; font-family:'Consolas',monospace; text-align:left; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4), classGlow 2.6s ease-in-out 1s infinite; }
  .dc-class-title { font-weight:800; font-size:.88rem; border-bottom:1px dashed #7fa9c4; padding-bottom:3px; margin-bottom:4px; text-align:center; }
  .dc-class .fields, .dc-class .methods { font-size:.72rem; line-height:1.5; }
  .dc-class .label { font-size:.62rem; color:#5d8baf; text-transform:uppercase; letter-spacing:.5px; margin-top:4px; }
  .dc-class .methods .mt { color:#b3531f; font-weight:600; }
  .dc-arrow-wrap { display:flex; flex-direction:column; align-items:center; gap:2px; color:#b3531f; }
  .dc-arrow { font-size:1.4rem; font-weight:800; animation: arrowFlow 1.4s ease-in-out infinite; }
  .dc-arrow-label { font-size:.62rem; font-weight:800; text-transform:uppercase; letter-spacing:.4px; }
  .dc-object { background:#fff5f0; border:1.5px solid #b3531f; border-radius:10px; padding:8px 14px; color:#b3531f; font-family:'Consolas',monospace; text-align:left; animation: popIn .55s cubic-bezier(.2,.7,.2,1.45) .35s backwards, objGlow 2.6s ease-in-out 1.5s infinite; }
  .dc-object-title { font-weight:800; font-size:.88rem; border-bottom:1px dashed #d4977a; padding-bottom:3px; margin-bottom:4px; text-align:center; }
  .dc-object .line { font-size:.72rem; line-height:1.55; }
  .dc-object .line .dot { color:#7a3a14; font-weight:800; }
  .dc-object .line .field { color:#20588f; }
  .dc-object .line .method { color:#b3531f; }
  .dc-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .dc-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .dc-card-head { color:#b3531f; font-weight:800; font-size:.82rem; display:flex; align-items:center; gap:6px; }
  .dc-card-head .step { background:#b3531f; color:#fff; border-radius:999px; width:18px; height:18px; display:inline-flex; align-items:center; justify-content:center; font-size:.62rem; font-weight:800; }
  .dc-card-head .sym { background:#fff5f0; border:1px solid #fbc6a1; color:#b3531f; padding:1px 6px; border-radius:4px; font-family:'Consolas',monospace; font-size:.7rem; }
  .dc-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 10px; font-size:.68rem; margin:0; font-family:'Consolas',monospace; white-space:pre; line-height:1.4; }
  .dc-code .kw { color:#569cd6; } .dc-code .ty { color:#4ec9b0; } .dc-code .nm { color:#b5cea8; } .dc-code .st { color:#ce9178; } .dc-code .cm { color:#6a9955; }
  .dc-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>

<script setup>
  import './style.css';
</script>

<Slide2 topic="Classes, Objects &amp; Members">
  <template #content>
    <div class="dc-wrap">
      <div v-click class="card dc-def">
        <b>Working with a class is a three-step rhythm: <i>define</i> the blueprint, <i>instantiate</i> it to create an object, and <i>access</i> its members through the dot operator.</b>
        Members come in two flavours &mdash; <i>data members</i> (fields that hold state) and <i>member functions</i> (methods that operate on that state).
      </div>
      <div v-click class="dc-flow">
        <div class="dc-class">
          <div class="dc-class-title">class Car</div>
          <div class="label">data members</div>
          <div class="fields">brand, color, speed</div>
          <div class="label">member functions</div>
          <div class="methods"><span class="mt">start()</span> &middot; <span class="mt">accelerate()</span></div>
        </div>
        <div class="dc-arrow-wrap">
          <div class="dc-arrow">&rarr;</div>
          <div class="dc-arrow-label">new Car()</div>
        </div>
        <div class="dc-object">
          <div class="dc-object-title">Car myCar</div>
          <div class="line">myCar<span class="dot">.</span><span class="field">brand</span> = "Toyota";</div>
          <div class="line">myCar<span class="dot">.</span><span class="field">speed</span> = 60;</div>
          <div class="line">myCar<span class="dot">.</span><span class="method">start()</span>;</div>
          <div class="line">myCar<span class="dot">.</span><span class="method">accelerate()</span>;</div>
        </div>
      </div>
      <div class="dc-cards">
        <div v-click class="card dc-card">
          <div class="dc-card-head"><span class="step">1</span>Define the class</div>
          <pre class="dc-code"><span class="kw">class</span> <span class="ty">Car</span> {
  <span class="ty">String</span> brand;
  <span class="ty">int</span> speed;
  <span class="kw">void</span> start() {
    <span class="cm">// engine on</span>
  }
}</pre>
          <div class="dc-note">Declare fields (state) and methods (behaviour) inside <code>{ }</code>.</div>
        </div>
        <div v-click class="card dc-card">
          <div class="dc-card-head"><span class="step">2</span>Create an object</div>
          <pre class="dc-code"><span class="ty">Car</span> myCar = <span class="kw">new</span> <span class="ty">Car</span>();</pre>
          <div class="dc-note"><code>new</code> allocates memory; <code>myCar</code> is a reference to that instance.</div>
        </div>
        <div v-click class="card dc-card">
          <div class="dc-card-head"><span class="step">3</span>Access fields <span class="sym">.</span></div>
          <pre class="dc-code">myCar.brand = <span class="st">"Toyota"</span>;
myCar.speed = <span class="nm">60</span>;
<span class="ty">int</span> s = myCar.speed;</pre>
          <div class="dc-note">Use <code>object.field</code> to read or write a data member.</div>
        </div>
        <div v-click class="card dc-card">
          <div class="dc-card-head"><span class="step">4</span>Call methods <span class="sym">()</span></div>
          <pre class="dc-code">myCar.start();
myCar.accelerate();</pre>
          <div class="dc-note">Use <code>object.method()</code> to invoke behaviour on that specific instance.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>