<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .dia-stage { display:flex; flex-direction:column; align-items:center; gap:6px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .dia-box { border-radius:8px; padding:6px 14px; font-family:'Consolas',monospace; font-size:.74rem; text-align:center; min-width:140px; }
  .dia-a { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; font-weight:800; }
  .dia-mid { display:flex; gap:36px; }
  .dia-bc { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; min-width:130px; }
  .dia-d { background:#ffebee; border:2px dashed #c62828; color:#b71c1c; font-weight:800; }
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
<Slide2 topic="Multiple Inheritance Limitation &amp; The Diamond Problem">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Why doesn't Java support multiple inheritance with classes? The answer is the infamous "Diamond Problem" of method ambiguity.</b>
        If class <code>D</code> were permitted to extend both <code>B</code> and <code>C</code>, and both had overridden the same method from <code>A</code>, the compiler would not know which version to execute.
      </div>
      <div v-click class="dia-stage">
        <div class="card dia-box dia-a">Class A &mdash; void display()</div>
        <div style="font-size:.85rem; color:#20588f; font-weight:800;">&swarr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&searr;</div>
        <div class="dia-mid">
          <div class="card dia-box dia-bc">Class B<br><span style="font-size:.64rem; color:#b3531f;">display() [Version B]</span></div>
          <div class="card dia-box dia-bc">Class C<br><span style="font-size:.64rem; color:#b3531f;">display() [Version C]</span></div>
        </div>
        <div style="font-size:.85rem; color:#c62828; font-weight:800;">&searr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&swarr;</div>
        <div class="card dia-box dia-d">&#10060; Class D extends B, C &mdash; Ambiguity Collision!</div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. The Ambiguity Dilemma</div>
          <div class="x-note">If <code>D d = new D(); d.display();</code> is invoked, which implementation runs &mdash; B or C? Java avoids this confusion entirely.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Compile Error in Java</div>
          <pre class="x-code"><span class="cm">// COMPILE ERROR IN JAVA:</span>
<span class="kw">class</span> <span class="ty">D</span> <span class="kw">extends</span> <span class="ty">B</span>, <span class="ty">C</span> {
  <span class="cm">// Syntax not allowed!</span>
}</pre>
          <div class="x-note">A class can only specify one superclass after <code>extends</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Hybrid Inheritance</div>
          <div class="x-note">Hybrid inheritance is a combination of two or more inheritance types (e.g. hierarchical + multiple). Classes alone cannot form hybrid patterns.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. The Interface Solution</div>
          <div class="x-note">Java solves multiple and hybrid inheritance cleanly through <b>Interfaces</b>, where abstract contracts contain no state collisions.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
