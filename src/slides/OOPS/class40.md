<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .use-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .use-box { border-radius:10px; padding:10px 14px; }
  .use-yes { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .use-no { background:#ffebee; border:1.5px solid #c62828; color:#b71c1c; }
  .use-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:5px; border-bottom:1px dashed currentColor; }
  .use-li { font-size:.7rem; padding:3px 0; border-bottom:1px dotted rgba(0,0,0,.1); line-height:1.4; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="When to Use Abstract Class">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Choose an abstract class when you have a strong IS-A relationship and want to provide a shared base implementation.</b>
        Abstract classes let you maintain common mutable state across closely related subclasses and enforce template workflows.
      </div>
      <div v-click class="use-grid">
        <div class="card use-box use-yes">
          <div class="use-head">&#10003; Use Abstract Class When…</div>
          <div class="use-li">&#9658; Closely related classes share common mutable state &amp; code</div>
          <div class="use-li">&#9658; You need constructors to enforce base field initialization</div>
          <div class="use-li">&#9658; Non-public access modifiers (<code>protected</code>) are required</div>
          <div class="use-li">&#9658; Implementing the Template Method design pattern</div>
          <div class="use-li">&#9658; Subclasses must share non-static, non-final member fields</div>
          <div class="use-li">&#9658; You want to provide a standard default implementation skeleton</div>
        </div>
        <div class="card use-box use-no">
          <div class="use-head">&#10007; Avoid Abstract Class When…</div>
          <div class="use-li">&#9658; Unrelated classes across different trees need the behavior</div>
          <div class="use-li">&#9658; You want a class to support multiple capabilities</div>
          <div class="use-li">&#9658; Subclasses already extend another class (single inheritance limit)</div>
          <div class="use-li">&#9658; You only need a lightweight contract or API blueprint</div>
          <div class="use-li">&#9658; Designing functional interfaces for lambdas and streams</div>
          <div class="use-li">&#9658; Zero shared implementation or state is needed</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Base State Sharing</div>
          <div class="x-note">Shared instance variables like <code>employeeId</code> or <code>creationTimestamp</code> live directly in the abstract class.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Protected APIs</div>
          <div class="x-note">Mark internal helper methods as <code>protected</code> so only derived classes can access or override them.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Template Pattern</div>
          <div class="x-note">Define a <code>final</code> master process method that calls hook steps implemented by specific child classes.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. JDK Skeletons</div>
          <div class="x-note">Java standard library uses <code>AbstractList</code> and <code>AbstractMap</code> to provide 80% of collection mechanics for free.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
