<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#e8f4fd; border:1px solid #90caf9; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#0d2a4a; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#1565c0; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .use-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .use-box { border-radius:10px; padding:10px 14px; }
  .use-yes { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .use-no { background:#ffebee; border:1.5px solid #c62828; color:#b71c1c; }
  .use-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:5px; border-bottom:1px dashed currentColor; }
  .use-li { font-size:.7rem; padding:3px 0; border-bottom:1px dotted rgba(0,0,0,.1); line-height:1.4; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#1565c0; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="When to Use Interface">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Choose an interface when you want to define a pure capability contract that multiple unrelated classes can fulfill.</b>
        Interfaces enforce the <i>what</i> without dictating the <i>how</i> — enabling maximum flexibility and decoupled architecture.
      </div>
      <div v-click class="use-grid">
        <div class="card use-box use-yes">
          <div class="use-head">&#10003; Use Interface When…</div>
          <div class="use-li">&#9658; Multiple unrelated classes share the same behavior</div>
          <div class="use-li">&#9658; You need full multiple inheritance of type</div>
          <div class="use-li">&#9658; You want to define an API contract (e.g. Comparable)</div>
          <div class="use-li">&#9658; Classes already extend another class</div>
          <div class="use-li">&#9658; Loose coupling between layers is required</div>
          <div class="use-li">&#9658; You want to enable lambda expressions (Functional Interface)</div>
        </div>
        <div class="card use-box use-no">
          <div class="use-head">&#10007; Avoid Interface When…</div>
          <div class="use-li">&#9658; Common instance state (fields) must be shared</div>
          <div class="use-li">&#9658; You need a constructor to initialize shared data</div>
          <div class="use-li">&#9658; Default implementation is complex and tightly coupled</div>
          <div class="use-li">&#9658; You want non-public access modifiers on methods</div>
          <div class="use-li">&#9658; Strong IS-A relationship exists (prefer abstract class)</div>
          <div class="use-li">&#9658; Heavy code reuse across the hierarchy is needed</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Comparable</div>
          <div class="x-note"><code>String</code>, <code>Integer</code>, <code>Date</code> all implement <code>Comparable&lt;T&gt;</code>. Unrelated types share one sorting contract.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Runnable</div>
          <div class="x-note">Any class can implement <code>Runnable</code> to define a thread task — regardless of what it extends in its own hierarchy.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Serializable</div>
          <div class="x-note">A marker interface with zero methods — just tagging a class as capable of being serialized. Pure CAN-DO capability.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Functional Interface</div>
          <div class="x-note">Single-abstract-method interfaces (e.g. <code>Predicate</code>, <code>Function</code>) power Java's lambda expressions and Stream API.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
