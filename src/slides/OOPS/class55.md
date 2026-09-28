<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .ci-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .ci-box { border-radius:10px; padding:10px 14px; font-size:.72rem; }
  .ci-inh { background:#ffebee; border:1.5px solid #c62828; color:#b71c1c; }
  .ci-cmp { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .ci-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:5px; border-bottom:1px dashed currentColor; }
  .ci-row { display:flex; justify-content:space-between; padding:3px 0; border-bottom:1px dotted rgba(0,0,0,.08); font-size:.68rem; }
  .ci-row span:first-child { font-weight:700; opacity:.8; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Composition vs Inheritance: Design Principles">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>"Favor Object Composition over Class Inheritance" — Gang of Four Design Principle.</b>
        While inheritance creates a rigid compile-time IS-A bond that often breaks encapsulation, composition builds flexible runtime HAS-A assemblies.
      </div>
      <div v-click class="ci-stage">
        <div class="card ci-box ci-inh">
          <div class="ci-head">&#128392; Inheritance (IS-A)</div>
          <div class="ci-row"><span>Relationship:</span> <span>Rigid compile-time binding</span></div>
          <div class="ci-row"><span>Reuse Type:</span> <span>White-box reuse (exposes internals)</span></div>
          <div class="ci-row"><span>Coupling:</span> <span>Tight coupling (Fragile Base Class)</span></div>
          <div class="ci-row"><span>Flexibility:</span> <span>Fixed at compile time</span></div>
          <div class="ci-row"><span>Polymorphism:</span> <span>Subtype polymorphism</span></div>
        </div>
        <div class="card ci-box ci-cmp">
          <div class="ci-head">&#129513; Composition (HAS-A)</div>
          <div class="ci-row"><span>Relationship:</span> <span>Dynamic runtime containment</span></div>
          <div class="ci-row"><span>Reuse Type:</span> <span>Black-box reuse (via public APIs)</span></div>
          <div class="ci-row"><span>Coupling:</span> <span>Loose coupling</span></div>
          <div class="ci-row"><span>Flexibility:</span> <span>Easily swapped at runtime</span></div>
          <div class="ci-row"><span>Polymorphism:</span> <span>Interface delegation</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Fragile Base Class</div>
          <div class="x-note">Modifying a superclass can silently break subclasses across a huge codebase; composition isolates changes.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Encapsulation Break</div>
          <div class="x-note">Subclasses depend heavily on parent implementation details. Composition interacts purely through well-defined APIs.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Runtime Swapping</div>
          <div class="x-note">A <code>Car</code> can change its <code>engine</code> from <code>GasEngine</code> to <code>ElectricEngine</code> at runtime via setter.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. When to Use Which</div>
          <div class="x-note">Use Inheritance ONLY when a genuine, permanent IS-A relationship exists; use Composition for everything else.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
