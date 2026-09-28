<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .shad-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .shad-col { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.73rem; }
  .shad-bad { background:#ffebee; border:1.5px solid #c62828; color:#b71c1c; }
  .shad-good { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .shad-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .shad-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.66rem; }

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

<Slide2 topic="The this Keyword: Reference &amp; Variable Shadowing">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>In Java, <code>this</code> is a built-in reference variable referring directly to the <i>current object instance</i> executing the code.</b>
        Its most frequent real-world use is disambiguating instance variables from method or constructor parameters when both share the identical name (known as variable shadowing).
      </div>
      <div v-click class="shad-stage">
        <div class="card shad-col shad-bad">
          <div class="shad-head">&#10060; The Shadowing Bug (Without this)</div>
          <div class="shad-code"><span style="color:#569cd6;">Car</span>(<span style="color:#4ec9b0;">int</span> speed) {
  speed = speed; <span style="color:#e57373;">// Assigns param to param!</span>
  <span style="color:#6a9955;">// Instance field remains 0</span>
}</div>
          <div style="font-size:.64rem; margin-top:4px;">Local variable shadows instance variable.</div>
        </div>
        <div class="card shad-col shad-good">
          <div class="shad-head">&#10004; Fixed via this Reference</div>
          <div class="shad-code"><span style="color:#569cd6;">Car</span>(<span style="color:#4ec9b0;">int</span> speed) {
  <span style="color:#569cd6;">this</span>.speed = speed; <span style="color:#81c784;">// Target instance!</span>
  <span style="color:#6a9955;">// Instance field successfully set</span>
}</div>
          <div style="font-size:.64rem; margin-top:4px;"><code>this.speed</code> targets heap object field.</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. What is this?</div>
          <div class="x-note">An implicit parameter passed to every non-static method/constructor pointing to the current object in memory.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Shadowing Problem</div>
          <div class="x-note">When parameter name matches field name (e.g. <code>id</code>), the JVM prioritizes the local parameter scope over the class field.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Clean Code Practice</div>
          <pre class="x-code"><span class="kw">public void</span> setAge(<span class="ty">int</span> age) {
  <span class="kw">this</span>.age = age;
}</pre>
          <div class="x-note">Standard Java bean and POJO convention.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Static Incompatibility</div>
          <div class="x-note"><code>this</code> cannot be used inside <code>static</code> methods or blocks because static code belongs to the class, not any instance.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
