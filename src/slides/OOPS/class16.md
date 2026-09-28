<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  @keyframes chainPulse { 0%,100%{border-color:#b3531f;} 50%{border-color:#20588f;} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .chain-stage { display:grid; grid-template-columns:1fr auto 1.3fr; gap:14px; align-items:center; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .chain-card { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .chain-caller { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .chain-target { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; animation: chainPulse 3s ease-in-out infinite; }
  .chain-title { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .chain-arrow-box { display:flex; flex-direction:column; align-items:center; gap:2px; color:#b3531f; font-weight:800; }
  .chain-arrow { font-size:1.6rem; }

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

<Slide2 topic="Constructor Chaining &amp; this()">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Constructor chaining is the practice of having one constructor delegate its work to another constructor within the same class using <code>this(...)</code>.</b>
        This prevents code duplication by concentrating all actual field assignments into one master constructor, while allowing convenient auxiliary constructors.
      </div>
      <div v-click class="chain-stage">
        <div class="card chain-card chain-caller">
          <div class="chain-title">Convenience Constructor</div>
          <pre class="x-code" style="margin-top:4px;"><span class="ty">Employee</span>(<span class="ty">String</span> name) {
  <span class="kw">this</span>(name, <span class="nm">50000.0</span>); <span class="cm">// delegates!</span>
}</pre>
          <div style="font-size:.64rem; margin-top:4px;">Supplies default salary parameter</div>
        </div>
        <div class="chain-arrow-box">
          <div class="chain-arrow">&rarr;</div>
          <div style="font-size:.62rem; text-transform:uppercase;">Delegates via this()</div>
        </div>
        <div class="card chain-card chain-target">
          <div class="chain-title">Master Constructor (Single Truth)</div>
          <pre class="x-code" style="margin-top:4px;"><span class="ty">Employee</span>(<span class="ty">String</span> name, <span class="ty">double</span> salary) {
  <span class="kw">this</span>.name = name;
  <span class="kw">this</span>.salary = salary;
}</pre>
          <div style="font-size:.64rem; margin-top:4px;">Centralizes all validation and assignments</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. The DRY Principle</div>
          <div class="x-note"><b>Don't Repeat Yourself:</b> Never duplicate complex initialization logic across 4 or 5 overloaded constructors.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Strict First Line Rule</div>
          <div class="x-note"><code>this(...)</code> must strictly be the <b>very first statement</b> inside the constructor body, or compiler throws error.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. No Circular Chaining</div>
          <pre class="x-code"><span class="ty">A</span>() { <span class="kw">this</span>(<span class="nm">1</span>); }
<span class="ty">A</span>(<span class="kw">int</span> x) { <span class="kw">this</span>(); }
<span class="cm">// COMPILE ERROR: Recursive call!</span></pre>
          <div class="x-note">Cycles produce compile-time loop error.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Mutual Exclusion</div>
          <div class="x-note">You cannot have both <code>this()</code> and <code>super()</code> in the same constructor because both demand the 1st line position.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
