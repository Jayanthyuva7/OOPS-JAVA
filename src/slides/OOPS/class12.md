<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .anon-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .anon-col { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.74rem; }
  .anon-named { background:#f0f9ff; border:1.5px solid #20588f; color:#0f3b66; }
  .anon-anon { background:#fef3c7; border:1.5px solid #d97706; color:#78350f; }
  .anon-title { font-weight:800; font-size:.86rem; text-align:center; padding-bottom:4px; margin-bottom:6px; border-bottom:1px dashed currentColor; }
  .anon-card-body { background:#fff; border-radius:6px; padding:6px 10px; margin-top:4px; border:1px solid rgba(0,0,0,.08); }

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

<Slide2 topic="Multiple Objects &amp; Anonymous Objects">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Programs routinely manage multiple instances of the same class &mdash; and sometimes create transient objects with no reference name at all.</b>
        An <i>anonymous object</i> is instantiated simply by calling <code>new ClassName().method();</code> without assigning it to a reference variable.
      </div>
      <div v-click class="anon-stage">
        <div class="card anon-col anon-named">
          <div class="anon-title">Named Reference Object</div>
          <div class="anon-card-body">
            <code>Car c1 = new Car();</code><br />
            <code>c1.drive();</code><br />
            <code>c1.stop();</code><br />
            <span style="font-size:.64rem; color:#20588f;">&bull; Accessible for multiple operations<br />&bull; Remains alive as long as 'c1' is in scope</span>
          </div>
        </div>
        <div class="card anon-col anon-anon">
          <div class="anon-title">Anonymous Object (Nameless)</div>
          <div class="anon-card-body">
            <code>new Car().drive();</code><br /><br />
            <span style="color:#d97706; font-weight:700;">No variable stores the address!</span><br />
            <span style="font-size:.64rem; color:#78350f;">&bull; Created solely for a single method call<br />&bull; Eligible for GC immediately after execution</span>
          </div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Multiple Objects</div>
          <div class="x-note">Each <code>new</code> allocates a fresh Heap block. Changing <code>carA.speed</code> has zero effect on <code>carB.speed</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Reference Copying</div>
          <pre class="x-code"><span class="ty">Car</span> c1 = <span class="kw">new</span> <span class="ty">Car</span>();
<span class="ty">Car</span> c2 = c1; <span class="cm">// aliases!</span>
c2.speed = <span class="nm">100</span>;
<span class="cm">// c1.speed is also 100</span></pre>
          <div class="x-note">Two references point to the same object.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Anonymous Syntax</div>
          <pre class="x-code"><span class="cm">// Calculation service</span>
<span class="kw">new</span> <span class="ty">MathHelper</span>().fact(<span class="nm">5</span>);</pre>
          <div class="x-note">Clean one-liner syntax when reuse is not required.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. As Method Argument</div>
          <pre class="x-code">orderService.process(
  <span class="kw">new</span> <span class="ty">Payment</span>(<span class="nm">250.0</span>)
);</pre>
          <div class="x-note">Passes freshly allocated object directly into API.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
