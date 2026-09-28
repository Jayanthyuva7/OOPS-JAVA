<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .absc-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .absc-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.73rem; }
  .absc-ctor { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; }
  .absc-ref { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .absc-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .absc-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.65rem; }
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
<Slide2 topic="Abstract Class Constructors &amp; References">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>A famous interview question: If an abstract class cannot be instantiated, why can it have constructors?</b>
        The answer is that abstract classes own member variables that must be initialized when a <i>concrete subclass</i> is instantiated via constructor chaining with <code>super(...)</code>.
      </div>
      <div v-click class="absc-stage">
        <div class="card absc-box absc-ctor">
          <div class="absc-head">1. Abstract Class Constructor</div>
          <div class="absc-code"><span style="color:#569cd6;">abstract class</span> <span style="color:#4ec9b0;">Shape</span> {
  <span style="color:#4ec9b0;">String</span> color;
  <span style="color:#4ec9b0;">Shape</span>(<span style="color:#4ec9b0;">String</span> c) { <span style="color:#569cd6;">this</span>.color = c; }
}
<span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Circle</span> <span style="color:#569cd6;">extends</span> <span style="color:#4ec9b0;">Shape</span> {
  <span style="color:#4ec9b0;">Circle</span>(<span style="color:#4ec9b0;">String</span> c) { <span style="color:#569cd6;">super</span>(c); } <span style="color:#6a9955;">// calls abstract ctor</span>
}</div>
        </div>
        <div class="card absc-box absc-ref">
          <div class="absc-head">2. Abstract Class Reference</div>
          <div class="absc-code"><span style="color:#6a9955;">// Reference of abstract type:</span>
<span style="color:#4ec9b0;">Shape</span> s = <span style="color:#569cd6;">new</span> <span style="color:#4ec9b0;">Circle</span>(<span style="color:#ce9178;">"Red"</span>);
s.draw(); <span style="color:#6a9955;">// calls Circle's draw()</span>
<span style="color:#6a9955;">// Provides generic programming layer</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Constructor Role</div>
          <div class="x-note">Initializes state belonging to the abstract superclass (like <code>color</code>) before subclass constructor body executes.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Polymorphic Binding</div>
          <div class="x-note">You can create an array or collection of abstract references: <code>Shape[] shapes = new Shape[5];</code> (array of pointers, not instances).</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Template Pattern</div>
          <pre class="x-code"><span class="kw">abstract void</span> step1();
<span class="kw">public final void</span> run() {
  step1(); logDone();
}</pre>
          <div class="x-note">Abstract class enforces fixed workflow.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Architecture Standard</div>
          <div class="x-note">Used throughout the Java Standard Library, such as <code>AbstractList</code>, <code>InputStream</code>, and <code>Reader</code>.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
