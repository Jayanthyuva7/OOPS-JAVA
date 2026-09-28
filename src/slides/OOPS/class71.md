<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .syn-stage { display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .syn-box { border-radius:10px; padding:10px 12px; font-size:.7rem; display:flex; flex-direction:column; gap:4px; }
  .syn-1 { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .syn-2 { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .syn-3 { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .syn-head { font-weight:800; font-size:.82rem; text-align:center; padding-bottom:3px; border-bottom:1px dashed currentColor; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Advanced OOP Architecture: Master Synthesis">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Mastering Object Relationships, Scoping, Modular Packaging &amp; Static Context completes Core Java OOP.</b>
        Writing resilient enterprise software requires harmonizing HAS-A containment, logical class nesting, modular packages, and clean memory models.
      </div>
      <div v-click class="syn-stage">
        <div class="card syn-box syn-1">
          <div class="syn-head">&#129513; Relationships &amp; Association</div>
          <div>&#8226; <b>HAS-A:</b> Containment over inheritance</div>
          <div>&#8226; <b>Composition:</b> Strong lifecycle ownership</div>
          <div>&#8226; <b>Aggregation:</b> Independent lifecycles</div>
          <div>&#8226; <b>Multiplicity:</b> 1-1, 1-N, and M-N mappings</div>
        </div>
        <div class="card syn-box syn-2">
          <div class="syn-head">&#128196; Scoping &amp; Nested Classes</div>
          <div>&#8226; <b>Member Inner:</b> Bound to outer instance</div>
          <div>&#8226; <b>Static Nested:</b> Standalone helper blueprint</div>
          <div>&#8226; <b>Local Inner:</b> Confined to method execution</div>
          <div>&#8226; <b>Anonymous:</b> Inline callback / listener</div>
        </div>
        <div class="card syn-box syn-3">
          <div class="syn-head">&#9881; Modularity &amp; Static Memory</div>
          <div>&#8226; <b>Packages:</b> Reverse domain namespaces</div>
          <div>&#8226; <b>Access Matrix:</b> public, protected, default, private</div>
          <div>&#8226; <b>Static Context:</b> Metaspace single-copy memory</div>
          <div>&#8226; <b>Static Blocks:</b> ClassLoader initialization</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Loose Coupling</div>
          <div class="x-note">Favor composition with interfaces over deep inheritance trees to avoid fragile base class breakage.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Encapsulation First</div>
          <div class="x-note">Keep packages cohesive and expose only <code>public</code> interfaces while keeping implementation classes package-private.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Concurrency Safety</div>
          <div class="x-note">Never maintain mutable state in static fields across multi-threaded applications without proper synchronization.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Enterprise Ready</div>
          <div class="x-note">These architectural patterns form the foundation of Spring Framework, Hibernate ORM, and modern microservices.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
