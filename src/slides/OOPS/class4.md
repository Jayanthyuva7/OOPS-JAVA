<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  @keyframes segPop { 0%{opacity:0;transform:translateY(8px);} 100%{opacity:1;transform:translateY(0);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .x-def code { background:#fff; border:1px solid #fbc6a1; border-radius:3px; padding:0 4px; color:#b3531f; font-family:'Consolas',monospace; }
  .x-anat { background:#1e1e1e; border:1.5px solid #b3531f; border-radius:10px; padding:12px 16px; font-family:'Consolas',monospace; color:#d4d4d4; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .x-anat-line { display:flex; align-items:center; gap:8px; padding:3px 0; font-size:.78rem; animation: segPop .35s ease-out backwards; }
  .x-anat-line:nth-child(1){animation-delay:.1s;} .x-anat-line:nth-child(2){animation-delay:.2s;} .x-anat-line:nth-child(3){animation-delay:.3s;} .x-anat-line:nth-child(4){animation-delay:.4s;} .x-anat-line:nth-child(5){animation-delay:.5s;} .x-anat-line:nth-child(6){animation-delay:.6s;}
  .x-tag { font-size:.62rem; text-transform:uppercase; letter-spacing:.4px; padding:2px 9px; border-radius:5px; font-weight:800; min-width:90px; text-align:center; }
  .x-tag.cls { background:rgba(86,156,214,.18); color:#569cd6; border:1px solid rgba(86,156,214,.4); }
  .x-tag.var { background:rgba(78,201,176,.18); color:#4ec9b0; border:1px solid rgba(78,201,176,.4); }
  .x-tag.ctor { background:rgba(220,220,170,.18); color:#dcdcaa; border:1px solid rgba(220,220,170,.4); }
  .x-tag.mth { background:rgba(181,206,168,.18); color:#b5cea8; border:1px solid rgba(181,206,168,.4); }
  .x-code-snip { color:#d4d4d4; flex:1; }
  .x-code-snip .kw { color:#569cd6; } .x-code-snip .ty { color:#4ec9b0; } .x-code-snip .nm { color:#dcdcaa; } .x-code-snip .st { color:#ce9178; }
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
<Slide2 topic="Class Structure">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>A class has three main kinds of members: <i>variables</i> (state), <i>constructors</i> (initialisation), and <i>methods</i> (behaviour).</b>
        Together they define what an object knows and what an object does. Optional extras &mdash; static members, nested classes, initialisation blocks &mdash; come later.
      </div>
      <div v-click class="card x-anat">
        <div class="x-anat-line"><div class="x-tag cls">CLASS</div><div class="x-code-snip"><span class="kw">class</span> <span class="ty">Car</span> {</div></div>
        <div class="x-anat-line"><div class="x-tag var">VARIABLE</div><div class="x-code-snip">&nbsp;&nbsp;<span class="ty">String</span> brand;</div></div>
        <div class="x-anat-line"><div class="x-tag var">VARIABLE</div><div class="x-code-snip">&nbsp;&nbsp;<span class="ty">int</span> speed;</div></div>
        <div class="x-anat-line"><div class="x-tag ctor">CONSTRUCTOR</div><div class="x-code-snip">&nbsp;&nbsp;<span class="ty">Car</span>(<span class="ty">String</span> b) { brand = b; }</div></div>
        <div class="x-anat-line"><div class="x-tag mth">METHOD</div><div class="x-code-snip">&nbsp;&nbsp;<span class="kw">void</span> start() { ... }</div></div>
        <div class="x-anat-line"><div class="x-tag cls">CLOSE</div><div class="x-code-snip">}</div></div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">Variables (fields)</div>
          <pre class="x-code"><span class="ty">String</span> brand;
<span class="ty">int</span> speed;</pre>
          <div class="x-note">Hold the object's <i>state</i>. Declared inside the class but outside any method. One copy per object.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Constructors</div>
          <pre class="x-code"><span class="ty">Car</span>(<span class="ty">String</span> b) {
  brand = b;
}</pre>
          <div class="x-note">Same name as the class, no return type. Runs once when <code>new</code> creates an object.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Methods</div>
          <pre class="x-code"><span class="kw">void</span> start() {
  speed = <span class="nm">10</span>;
}</pre>
          <div class="x-note">Define the object's <i>behaviour</i>. Operate on the calling object's fields.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Order is flexible</div>
          <div class="x-note">You can mix members in any order. By convention: fields up top, constructors next, methods below.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>