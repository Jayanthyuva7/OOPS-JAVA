<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .chk-stage { display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .chk-card { border-radius:10px; padding:10px 12px; font-family:'Consolas',monospace; font-size:.73rem; }
  .chk-1 { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; }
  .chk-2 { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .chk-3 { background:#f5effb; border:1.5px solid #7b1fa2; color:#4a148c; }
  .chk-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
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
<Slide2 topic="Overriding Rules: Access Modifiers">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>To maintain the Liskov Substitution Principle, Java enforces strict rules on access modifiers, checked exceptions, and return types when overriding.</b>
        A subclass method can make visibility more open and return types more specific, but it can never restrict access or throw broader checked exceptions.
      </div>
      <div v-click class="chk-stage">
        <div class="card chk-card chk-1">
          <div class="chk-head">1. Access Modifiers</div>
          <div style="font-size:.65rem; line-height:1.5;">
            <b>Cannot reduce visibility!</b><br>
            Parent <code>protected</code> &rarr; Child can be <code>protected</code> or <code>public</code>.<br>
            <span style="color:#c62828;">public &rarr; private is ILLEGAL!</span>
          </div>
        </div>
        <div class="card chk-card chk-2">
          <div class="chk-head">2. Checked Exceptions</div>
          <div style="font-size:.65rem; line-height:1.5;">
            <b>Cannot throw broader!</b><br>
            Child can throw fewer or narrower exceptions, or none at all.<br>
            <span style="color:#c62828;">Cannot add new checked Exception!</span>
          </div>
        </div>
        <div class="card chk-card chk-3">
          <div class="chk-head">3. Covariant Returns</div>
          <div style="font-size:.65rem; line-height:1.5;">
            <b>Can return a subtype!</b><br>
            Parent returns <code>Animal</code>.<br>
            Child can return <code>Dog</code>.<br>
            <span style="color:#2e7d32;">Fully legal since Java 5!</span>
          </div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Visibility Widening</div>
          <div class="x-note">Visibility can only broaden: <code>private</code> &rarr; <code>default</code> &rarr; <code>protected</code> &rarr; <code>public</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Covariant Return Code</div>
          <pre class="x-code"><span class="cm">// Parent:</span> <span class="ty">Animal</span> get() { ... }
<span class="cm">// Child:</span>  <span class="ty">Dog</span> get() { ... } <span class="cm">// OK!</span></pre>
          <div class="x-note">Eliminates casting at client call site.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Exception Contract</div>
          <div class="x-note">If Parent throws <code>IOException</code>, Child can throw <code>FileNotFoundException</code>, but NOT broader <code>Exception</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Final &amp; Private</div>
          <div class="x-note"><code>final</code> methods cannot be overridden under any circumstance. <code>private</code> methods are not visible to be overridden.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
