<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .intf-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .intf-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.73rem; }
  .intf-decl { background:#f5effb; border:1.5px solid #7b1fa2; color:#4a148c; }
  .intf-impl { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; }
  .intf-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .intf-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.65rem; }
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
<Slide2 topic="Interface Fundamentals &amp; Multiple Implementation">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>An interface is a blueprint of a class containing abstract specifications that define WHAT a class must do, but not HOW it does it.</b>
        Interfaces solve Java's multiple inheritance limitation: while a class can extend only one superclass, it can implement <i>multiple interfaces</i> simultaneously.
      </div>
      <div v-click class="intf-stage">
        <div class="card intf-box intf-decl">
          <div class="intf-head">Interface Declarations (Contracts)</div>
          <div class="intf-code"><span style="color:#569cd6;">interface</span> <span style="color:#4ec9b0;">Drivable</span> {
  <span style="color:#569cd6;">void</span> drive();
}
<span style="color:#569cd6;">interface</span> <span style="color:#4ec9b0;">Flyable</span> {
  <span style="color:#569cd6;">void</span> fly();
}</div>
        </div>
        <div class="card intf-box intf-impl">
          <div class="intf-head">Implementing Multiple Interfaces</div>
          <div class="intf-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">FlyingCar</span> <span style="color:#569cd6;">implements</span> <span style="color:#4ec9b0;">Drivable</span>, <span style="color:#4ec9b0;">Flyable</span> {
  <span style="color:#569cd6;">public void</span> drive() { System.out.println(<span style="color:#ce9178;">"Driving"</span>); }
  <span style="color:#569cd6;">public void</span> fly()   { System.out.println(<span style="color:#ce9178;">"Flying"</span>); }
}</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. The implements Keyword</div>
          <div class="x-note">Binds a class to an interface contract. The implementing class must mark all overridden interface methods as <code>public</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Multiple Inheritance of Type</div>
          <div class="x-note">A class can inherit multiple behaviors safely because interfaces have no state/instance fields causing diamond collisions.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Extends + Implements</div>
          <pre class="x-code"><span class="kw">class</span> <span class="ty">Car</span> <span class="kw">extends</span> <span class="ty">Vehicle</span> 
  <span class="kw">implements</span> <span class="ty">Drivable</span>, <span class="ty">GPS</span> {}</pre>
          <div class="x-note">One parent class + multiple interfaces.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Interface Inheritance</div>
          <div class="x-note">An interface can extend another interface (or multiple interfaces!) using the <code>extends</code> keyword: <code>interface C extends A, B</code>.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
