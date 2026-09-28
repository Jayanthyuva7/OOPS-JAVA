<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .mth-stage { display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .mth-col { border-radius:10px; padding:10px 12px; font-family:'Consolas',monospace; font-size:.73rem; }
  .mth-1 { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; }
  .mth-2 { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .mth-3 { background:#f5effb; border:1.5px solid #7b1fa2; color:#4a148c; }
  .mth-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .mth-snip { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px; font-size:.65rem; margin-top:4px; white-space:pre; }
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
<Slide2 topic="Method Overloading &amp; Compile-Time Polymorphism">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Method Overloading allows a class to define multiple methods with the exact same name, provided their parameter lists are distinctly different.</b>
        This represents <i>Compile-Time (Static) Polymorphism</i>: the Java compiler decides precisely which method will execute before the program ever runs.
      </div>
      <div v-click class="mth-stage">
        <div class="card mth-col mth-1">
          <div class="mth-head">1. Number of Arguments</div>
          <div style="font-size:.64rem;">Different parameter counts:</div>
          <div class="mth-snip"><span style="color:#4ec9b0;">int</span> add(<span style="color:#4ec9b0;">int</span> a, <span style="color:#4ec9b0;">int</span> b)
<span style="color:#4ec9b0;">int</span> add(<span style="color:#4ec9b0;">int</span> a, <span style="color:#4ec9b0;">int</span> b, <span style="color:#4ec9b0;">int</span> c)</div>
        </div>
        <div class="card mth-col mth-2">
          <div class="mth-head">2. Data Types</div>
          <div style="font-size:.64rem;">Different argument types:</div>
          <div class="mth-snip"><span style="color:#4ec9b0;">int</span> add(<span style="color:#4ec9b0;">int</span> a, <span style="color:#4ec9b0;">int</span> b)
<span style="color:#4ec9b0;">double</span> add(<span style="color:#4ec9b0;">double</span> a, <span style="color:#4ec9b0;">double</span> b)</div>
        </div>
        <div class="card mth-col mth-3">
          <div class="mth-head">3. Parameter Sequence</div>
          <div style="font-size:.64rem;">Different order of types:</div>
          <div class="mth-snip"><span style="color:#569cd6;">void</span> show(<span style="color:#4ec9b0;">int</span> a, <span style="color:#4ec9b0;">String</span> b)
<span style="color:#569cd6;">void</span> show(<span style="color:#4ec9b0;">String</span> b, <span style="color:#4ec9b0;">int</span> a)</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Clean Developer APIs</div>
          <div class="x-note">Instead of awkward names like <code>addTwoInts()</code> or <code>addThreeInts()</code>, developers use a unified <code>add()</code> name.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Compile-Time Resolution</div>
          <div class="x-note">The compiler checks the arguments at call-site and binds directly to the matching method (also called Early Binding).</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Code Example</div>
          <pre class="x-code">calc.add(<span class="nm">5</span>, <span class="nm">10</span>);       <span class="cm">// binds (int,int)</span>
calc.add(<span class="nm">2.5</span>, <span class="nm">4.1</span>);   <span class="cm">// binds (double,double)</span></pre>
          <div class="x-note">Exact type match selected automatically.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. In Same Class or Hierarchy</div>
          <div class="x-note">Methods can be overloaded within the same class, or a subclass can overload a method inherited from its parent.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
