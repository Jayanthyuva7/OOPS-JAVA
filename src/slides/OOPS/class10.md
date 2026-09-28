<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .acc-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .acc-box { border-radius:10px; padding:10px 16px; font-family:'Consolas',monospace; font-size:.76rem; }
  .acc-inst { background:#f0f9ff; border:1.5px solid #20588f; color:#0f3b66; }
  .acc-stat { background:#fef3c7; border:1.5px solid #d97706; color:#92400e; }
  .acc-title { font-weight:800; font-size:.88rem; text-align:center; padding-bottom:4px; margin-bottom:6px; border-bottom:1px dashed currentColor; }
  .acc-syntax { background:#fff; border-radius:6px; padding:6px 10px; margin:4px 0; border:1px solid rgba(0,0,0,.1); }

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

<Slide2 topic="Accessing Class Members &amp; Static Context">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Accessing class members requires knowing whether the member is tied to an individual instance or shared across the entire class.</b>
        Java uses the dot (<code>.</code>) operator. Instance members require an active object reference; static members are best accessed directly via the Class name.
      </div>
      <div v-click class="acc-stage">
        <div class="card acc-box acc-inst">
          <div class="acc-title">Accessing Instance Members</div>
          <div class="acc-syntax"><b>Syntax:</b> <code>objectReference.member</code></div>
          <div>Car myCar = new Car();<br />myCar.speed = 80; <span style="color:#20588f;">// field</span><br />myCar.accelerate(); <span style="color:#20588f;">// method</span></div>
        </div>
        <div class="card acc-box acc-stat">
          <div class="acc-title">Accessing Static Members</div>
          <div class="acc-syntax"><b>Preferred:</b> <code>ClassName.staticMember</code></div>
          <div>Car.totalCarsProduced++; <span style="color:#d97706;">// static field</span><br />Math.max(10, 20); <span style="color:#d97706;">// static method</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">The Dot Operator (.)</div>
          <div class="x-note">Acts as the dereferencing bridge between the reference variable and the actual member stored in memory.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Direct Class Access</div>
          <div class="x-note">Always access static members with <code>ClassName.member</code> rather than <code>obj.member</code> to make sharing obvious.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Static Context Rule</div>
          <pre class="x-code"><span class="kw">class</span> <span class="ty">Test</span> {
  <span class="ty">int</span> x = <span class="nm">10</span>;
  <span class="kw">static void</span> run() {
    <span class="cm">// ERROR! Cannot access non-static x</span>
    <span class="cm">// System.out.println(x);</span>
  }
}</pre>
          <div class="x-note">Static methods have no <code>this</code> context.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Accessing from Inside</div>
          <div class="x-note">Within the same class, instance methods can freely access both instance fields and static fields without qualification.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
