<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .hide-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .hide-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.73rem; }
  .hide-ovr { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .hide-hid { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .hide-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .hide-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.65rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Method Overriding vs Static Method Hiding">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Static methods cannot be overridden in Java &mdash; when a subclass defines a static method with the same signature, it is called Method Hiding.</b>
        Instance methods bind dynamically based on the <i>actual runtime object</i> on the Heap. Static methods bind statically based on the <i>compile-time reference type</i>.
      </div>
      <div v-click class="hide-stage">
        <div class="card hide-box hide-ovr">
          <div class="hide-head">Instance Method (Overriding)</div>
          <div class="hide-code"><span style="color:#4ec9b0;">Parent</span> p = <span style="color:#569cd6;">new</span> <span style="color:#4ec9b0;">Child</span>();&#10;p.show();&#10;<span style="color:#81c784;">// Executes Child's show()!</span>&#10;<span style="color:#6a9955;">// Runtime Dynamic Polymorphism</span></div>
        </div>
        <div class="card hide-box hide-hid">
          <div class="hide-head">Static Method (Hiding)</div>
          <div class="hide-code"><span style="color:#4ec9b0;">Parent</span> p = <span style="color:#569cd6;">new</span> <span style="color:#4ec9b0;">Child</span>();&#10;p.staticShow();&#10;<span style="color:#ffb74d;">// Executes Parent's staticShow()!</span>&#10;<span style="color:#6a9955;">// Resolved by reference type 'Parent'</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. What is Method Hiding?</div>
          <div class="x-note">Subclass defines a static method with identical name/params as parent static method. It conceals the parent version.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Why Static Cannot Override</div>
          <div class="x-note">Static methods are bound to class bytecode loaded in Metaspace, not individual object dispatch tables.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Clean Syntax Call</div>
          <div class="x-note">Never call static methods using <code>obj.staticMethod()</code>. Always call explicitly via <code>Parent.staticMethod()</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Mixing Static &amp; Instance</div>
          <div class="x-note">You cannot have an instance method in a child with the same signature as a static method in parent (causes compile error).</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
