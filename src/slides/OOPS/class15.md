<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .ovr-stage { display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .ovr-card { border-radius:10px; padding:10px 12px; font-family:'Consolas',monospace; font-size:.72rem; }
  .ovr-1 { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; }
  .ovr-2 { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .ovr-3 { background:#f5effb; border:1.5px solid #7b1fa2; color:#4a148c; }
  .ovr-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .ovr-snip { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px; font-size:.65rem; margin-top:4px; white-space:pre; }

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

<Slide2 topic="Parameterized Constructors &amp; Overloading">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Constructor overloading allows a class to have multiple constructors with the same name but different parameter signatures.</b>
        This gives callers maximum flexibility to initialize an object in different ways &mdash; whether supplying full data, partial data, or falling back to default settings.
      </div>
      <div v-click class="ovr-stage">
        <div class="card ovr-card ovr-1">
          <div class="ovr-head">0 Arguments</div>
          <div style="font-size:.66rem;">Fallback Defaults</div>
          <div class="ovr-snip"><span style="color:#569cd6;">Student</span>() {
  id = 0;
  name = "Unknown";
}</div>
        </div>
        <div class="card ovr-card ovr-2">
          <div class="ovr-head">1 Argument</div>
          <div style="font-size:.66rem;">Partial Data</div>
          <div class="ovr-snip"><span style="color:#569cd6;">Student</span>(String n) {
  id = 0;
  name = n;
}</div>
        </div>
        <div class="card ovr-card ovr-3">
          <div class="ovr-head">2 Arguments</div>
          <div style="font-size:.66rem;">Complete Information</div>
          <div class="ovr-snip"><span style="color:#569cd6;">Student</span>(int i, String n) {
  id = i;
  name = n;
}</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Parameterized Power</div>
          <div class="x-note">Eliminates boilerplate setter calls right after <code>new</code>. Guarantees immediate validity on instantiation.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Signature Rules</div>
          <div class="x-note">Overloaded constructors must vary in: (1) <b>Number of parameters</b>, (2) <b>Data types</b>, or (3) <b>Sequence of types</b>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Resolution by Compiler</div>
          <pre class="x-code"><span class="ty">Student</span> s = <span class="kw">new</span> <span class="ty">Student</span>(<span class="st">"John"</span>);</pre>
          <div class="x-note">Compiler resolves which constructor matches at compile time (Static Polymorphism).</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Avoid Duplication</div>
          <div class="x-note">Don't duplicate assignment logic across overloaded constructors &mdash; use constructor chaining with <code>this()</code> instead!</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
