<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .rul-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .rul-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.73rem; }
  .rul-err { background:#ffebee; border:1.5px solid #c62828; color:#b71c1c; }
  .rul-prom { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .rul-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .rul-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.65rem; }
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
<Slide2 topic="Overloading Rules: Return Types &amp; Type Promotion">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Crucial Rule: Changing only the return type does NOT overload a method in Java &mdash; it results in a compile-time duplicate method error.</b>
        Furthermore, when no exact type match exists for arguments, the Java compiler applies automatic <i>type promotion</i> up the primitive type ladder.
      </div>
      <div v-click class="rul-stage">
        <div class="card rul-box rul-err">
          <div class="rul-head">&#10060; Invalid Overload (Return Type Only)</div>
          <div class="rul-code"><span style="color:#4ec9b0;">int</span> calc(<span style="color:#4ec9b0;">int</span> a) { <span style="color:#569cd6;">return</span> a * 2; }
<span style="color:#4ec9b0;">double</span> calc(<span style="color:#4ec9b0;">int</span> a) { <span style="color:#569cd6;">return</span> a * 2.5; }
<span style="color:#6a9955;">// calc(10); &rarr; COMPILE ERROR!</span>
<span style="color:#e57373;">// Compiler cannot know which to call!</span></div>
        </div>
        <div class="card rul-box rul-prom">
          <div class="rul-head">&#10004; Type Promotion Ladder</div>
          <div style="font-size:.68rem; line-height:1.6; margin-top:4px;">
            <b>byte &rarr; short &rarr; int &rarr; long &rarr; float &rarr; double</b><br />
            <span style="color:#1b5e20;">char &rarr; int</span><br />
            <i>If <code>add(double, double)</code> exists and you pass <code>add(10, 20)</code>, ints promote to doubles smoothly!</i>
          </div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Return Type Rule</div>
          <div class="x-note">Method signature in Java is <b>Name + Parameters</b> only. Return type is completely excluded from signature matching.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Call-Site Ambiguity</div>
          <div class="x-note">A caller can write <code>calc(10);</code> without assigning the result, leaving the compiler with zero clues on the intended return type.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Promotion Hierarchy</div>
          <div class="x-note">Exact match is checked first. If none exists, smallest valid wider type is matched (e.g. <code>int</code> passes to <code>long</code>).</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Constructor Overloading</div>
          <div class="x-note">Constructors follow these identical overloading rules &mdash; differing only by parameter count, type, and order.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
