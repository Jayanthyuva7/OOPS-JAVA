<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  @keyframes pipeGlow { 0%,100%{box-shadow:0 0 0 rgba(179,83,31,0);} 50%{box-shadow:0 0 16px rgba(179,83,31,.25);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .fl-stage { display:flex; flex-direction:column; gap:8px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .fl-pipe { background:#1e1e1e; border:1.5px solid #b3531f; border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; color:#d4d4d4; font-size:.76rem; animation: pipeGlow 2.8s ease-in-out infinite; }
  .fl-nodes { display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; margin-top:2px; }
  .fl-node { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:8px 10px; font-family:'Consolas',monospace; font-size:.7rem; text-align:center; }
  .fl-arrow { color:#b3531f; font-weight:800; }

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

<Slide2 topic="The this Keyword: Passing &amp; Returning this">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Two of the most elegant OOP design patterns emerge from using <code>this</code> as a value: returning <code>this</code> for Method Chaining, and passing <code>this</code> as a callback argument.</b>
        When a method returns <code>this</code>, callers can chain multiple operations together in a single readable pipeline (the foundation of the Builder Pattern and Modern APIs).
      </div>
      <div v-click class="fl-stage">
        <div class="card fl-pipe">
          <span style="color:#4ec9b0;">User</span> u = <span style="color:#569cd6;">new</span> <span style="color:#4ec9b0;">User</span>()
  .<span style="color:#dcdcaa;">setName</span>(<span style="color:#ce9178;">"Alice"</span>)
  .<span style="color:#dcdcaa;">setEmail</span>(<span style="color:#ce9178;">"alice@test.com"</span>)
  .<span style="color:#dcdcaa;">setRole</span>(<span style="color:#ce9178;">"ADMIN"</span>);
        </div>
        <div class="fl-nodes">
          <div class="card fl-node">
            <b>setName("Alice")</b><br />
            <span style="color:#6a9955;">sets field</span><br />
            <span class="fl-arrow">&darr; return this;</span>
          </div>
          <div class="card fl-node">
            <b>setEmail("alice@..")</b><br />
            <span style="color:#6a9955;">sets field</span><br />
            <span class="fl-arrow">&darr; return this;</span>
          </div>
          <div class="card fl-node">
            <b>setRole("ADMIN")</b><br />
            <span style="color:#6a9955;">sets field</span><br />
            <span class="fl-arrow">&darr; return this;</span>
          </div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Returning this</div>
          <pre class="x-code"><span class="kw">public</span> <span class="ty">User</span> setName(<span class="ty">String</span> n) {
  <span class="kw">this</span>.name = n;
  <span class="kw">return this</span>;
}</pre>
          <div class="x-note">Return type is the class type; returns same reference.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Method Chaining</div>
          <div class="x-note">Produces clean, readable, fluent DSL-style configuration without repetitive <code>u.</code> variable mentions.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Passing this to Methods</div>
          <pre class="x-code"><span class="kw">void</span> save() {
  <span class="ty">Database</span>.persist(<span class="kw">this</span>);
}</pre>
          <div class="x-note">Passes current object instance to external helper or service.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Passing in Constructors</div>
          <pre class="x-code"><span class="ty">Button</span>() {
  <span class="kw">new</span> <span class="ty">ClickTracker</span>(<span class="kw">this</span>);
}</pre>
          <div class="x-note">Registers the current object into a manager or listener upon creation.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
