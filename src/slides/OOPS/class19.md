<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .dual-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .dual-card { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.73rem; }
  .dual-mth { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; }
  .dual-ctr { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .dual-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .dual-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.66rem; }

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

<Slide2 topic="The this Keyword: Invoking Methods &amp; Constructors">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Beyond field access, <code>this</code> can invoke other methods on the current object and delegate to peer constructors using <code>this()</code>.</b>
        Whenever a method calls another method in the same class without an explicit target, the Java compiler automatically prepends <code>this.</code> behind the scenes.
      </div>
      <div v-click class="dual-stage">
        <div class="card dual-card dual-mth">
          <div class="dual-head">1. Invoking Instance Methods</div>
          <div class="dual-code"><span style="color:#569cd6;">void</span> printSummary() {
  <span style="color:#569cd6;">this</span>.printHeader(); <span style="color:#6a9955;">// explicit call</span>
  System.out.println(<span style="color:#ce9178;">"Total: "</span> + balance);
}</div>
          <div style="font-size:.64rem; margin-top:4px;">Calls peer method on the exact same instance.</div>
        </div>
        <div class="card dual-card dual-ctr">
          <div class="dual-head">2. Invoking Peer Constructor</div>
          <div class="dual-code"><span style="color:#569cd6;">Account</span>() {
  <span style="color:#569cd6;">this</span>(<span style="color:#ce9178;">"Standard"</span>, <span style="color:#b5cea8;">0.0</span>); <span style="color:#6a9955;">// constructor call</span>
}</div>
          <div style="font-size:.64rem; margin-top:4px;">Reuses overloaded constructor logic cleanly.</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Implicit Method this</div>
          <div class="x-note">Writing <code>show();</code> is strictly identical to writing <code>this.show();</code>. The compiler auto-adds <code>this.</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Readability &amp; Style</div>
          <div class="x-note">Explicitly writing <code>this.method()</code> clarifies that the call targets an internal member rather than an imported static utility.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Constructor Call Syntax</div>
          <pre class="x-code"><span class="ty">Box</span>(<span class="ty">double</span> len) {
  <span class="kw">this</span>(len, len, len);
}</pre>
          <div class="x-note">Creates a cube by delegating to 3-param constructor.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Syntax Constraint</div>
          <div class="x-note"><code>this(...)</code> cannot appear inside a regular method &mdash; it is solely permitted as the first statement of a constructor.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
