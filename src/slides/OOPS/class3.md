<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  @keyframes popIn { 0%{opacity:0;transform:scale(.6) translateY(10px);} 70%{opacity:1;transform:scale(1.04) translateY(-2px);} 100%{opacity:1;transform:scale(1) translateY(0);} }
  @keyframes parentGlow { 0%,100%{box-shadow:0 0 0 rgba(32,88,143,0);} 50%{box-shadow:0 0 16px rgba(32,88,143,.28);} }
  @keyframes objGlow { 0%,100%{box-shadow:0 0 0 rgba(179,83,31,0);} 50%{box-shadow:0 0 12px rgba(179,83,31,.3);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .x-def code { background:#fff; border:1px solid #fbc6a1; border-radius:3px; padding:0 4px; color:#b3531f; font-family:'Consolas',monospace; }
  .x-scene { display:flex; flex-direction:column; align-items:center; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .x-class { background:#e2f0fe; border:2px dashed #20588f; color:#0f3b66; border-radius:10px; padding:7px 18px; font-family:'Consolas',monospace; text-align:center; min-width:200px; animation: parentGlow 2.6s ease-in-out 1s infinite; }
  .x-class-title { font-weight:800; font-size:.86rem; }
  .x-class-title .kw { color:#569cd6; }
  .x-class-sub { font-size:.6rem; opacity:.7; }
  /* CSS connectors with arrowheads — equal columns, per-cell arms (end + drop share one anchor) */
  .x-objs { display:grid; grid-template-columns:repeat(3,1fr); width:100%; max-width:620px; margin:22px auto 0; position:relative; }
  .x-objs::before { content:''; position:absolute; top:-22px; left:50%; transform:translateX(-50%); width:2px; height:23px; background:#b3531f; }
  .x-cell { position:relative; display:flex; justify-content:center; padding:25px 8px 0 8px; }
  .x-cell::before { content:''; position:absolute; top:0; height:2px; background:#b3531f; }
  .x-cell:first-child::before { left:50%; right:0; }
  .x-cell:last-child::before { left:0; right:50%; }
  .x-cell:not(:first-child):not(:last-child)::before { left:0; right:0; }
  .x-down { position:absolute; top:0; left:50%; transform:translateX(-50%); width:2px; height:17px; background:#b3531f; }
  .x-down::after { content:''; position:absolute; bottom:-7px; left:50%; transform:translateX(-50%); width:0; height:0; border-left:5px solid transparent; border-right:5px solid transparent; border-top:7px solid #b3531f; }
  .x-obj { background:#fff5f0; border:2px solid #b3531f; color:#5a2a0a; border-radius:10px; padding:7px 14px; min-width:130px; text-align:left; font-family:'Consolas',monospace; font-size:.72rem; line-height:1.5; animation: popIn .55s cubic-bezier(.2,.7,.2,1.45) .4s backwards, objGlow 2.6s ease-in-out 1.5s infinite; }
  .x-objs .x-cell:nth-child(2) .x-obj { animation-delay:.5s, 1.8s; } .x-objs .x-cell:nth-child(3) .x-obj { animation-delay:.6s, 2.1s; }
  .x-obj .name { font-weight:800; font-size:.78rem; padding-bottom:3px; margin-bottom:3px; border-bottom:1px dashed #d4977a; text-align:center; }
  .x-obj .v { color:#1f2937; font-weight:700; }
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
<Slide2 topic="What is an Object?">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>An object is a real, live <i>instance</i> of a class &mdash; an entity created at runtime with its own values, its own memory, and its own identity.</b>
        Where the class said "every Car has a brand and a speed", an object is "<i>this</i> Car: brand Toyota, speed 60". Each object you create is independent.
      </div>
      <div v-click class="x-scene">
        <div class="x-class">
          <div class="x-class-title"><span class="kw">class</span> Car</div>
          <div class="x-class-sub">blueprint &mdash; no memory yet</div>
        </div>
        <div class="x-objs">
          <div class="x-cell">
            <span class="x-down"></span>
            <div class="x-obj">
              <div class="name">car1</div>
              <div>brand: <span class="v">"Toyota"</span></div>
              <div>speed: <span class="v">60</span></div>
            </div>
          </div>
          <div class="x-cell">
            <span class="x-down"></span>
            <div class="x-obj">
              <div class="name">car2</div>
              <div>brand: <span class="v">"BMW"</span></div>
              <div>speed: <span class="v">0</span></div>
            </div>
          </div>
          <div class="x-cell">
            <span class="x-down"></span>
            <div class="x-obj">
              <div class="name">car3</div>
              <div>brand: <span class="v">"Tesla"</span></div>
              <div>speed: <span class="v">120</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">Instance of a class</div>
          <div class="x-note">An object is to a class what a baked cake is to a recipe &mdash; the recipe describes; the cake is real, edible, and yours.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Has identity, state, behaviour</div>
          <div class="x-note"><b>Identity:</b> a unique reference. <b>State:</b> field values. <b>Behaviour:</b> the methods you can call on it.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Born with new</div>
          <pre class="x-code"><span class="ty">Car</span> c = <span class="kw">new</span> <span class="ty">Car</span>();
<span class="cm">// memory allocated</span>
<span class="cm">// fields set to defaults</span></pre>
          <div class="x-note">The <code>new</code> keyword carves a slot in memory and returns a reference to it.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Independent</div>
          <div class="x-note">Changing <code>car1.speed</code> never touches <code>car2.speed</code>. Each object's data lives in its own little world.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>