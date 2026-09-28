<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .ca-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .ca-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .ca-agg { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .ca-cmp { background:#ffebee; border:1.5px solid #c62828; color:#b71c1c; }
  .ca-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .ca-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Composition vs Aggregation: Lifecycle &amp; Ownership">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>The defining differentiator between Composition and Aggregation is Lifecycle Dependency (Ownership).</b>
        In <i>Composition</i>, the contained object cannot exist without its owner. In <i>Aggregation</i>, both objects live independent lifecycles.
      </div>
      <div v-click class="ca-stage">
        <div class="card ca-box ca-agg">
          <div class="ca-head">&#129309; Aggregation (Weak HAS-A)</div>
          <div class="ca-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Department</span> {&#10;  <span style="color:#569cd6;">private</span> <span style="color:#4ec9b0;">Teacher</span> teacher;&#10;  <span style="color:#6a9955;">// Passed from outside via constructor:</span>&#10;  <span style="color:#569cd6;">public</span> Department(<span style="color:#4ec9b0;">Teacher</span> t) { <span style="color:#569cd6;">this</span>.teacher = t; }&#10;}&#10;<span style="color:#81c784;">// If Department closes, Teacher still exists!</span></div>
        </div>
        <div class="card ca-box ca-cmp">
          <div class="ca-head">&#128274; Composition (Strong HAS-A)</div>
          <div class="ca-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Car</span> {&#10;  <span style="color:#569cd6;">private final</span> <span style="color:#4ec9b0;">Engine</span> engine;&#10;  <span style="color:#6a9955;">// Created internally inside constructor:</span>&#10;  <span style="color:#569cd6;">public</span> Car() { <span style="color:#569cd6;">this</span>.engine = <span style="color:#569cd6;">new</span> Engine(); }&#10;}&#10;<span style="color:#e57373;">// If Car is garbage collected, Engine dies with it!</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Creation Origin</div>
          <div class="x-note">Composition creates child objects internally; Aggregation accepts existing objects created elsewhere.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Garbage Collection</div>
          <div class="x-note">When parent is destroyed, composite children are orphaned and garbage collected; aggregated objects survive.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Multiplicity Sharing</div>
          <div class="x-note">In Aggregation, an object can be associated with multiple parents (e.g. Professor in 2 departments).</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. UML Representation</div>
          <div class="x-note">In UML class diagrams, Composition is a <b>solid filled diamond</b> (&diams;); Aggregation is a <b>hollow diamond</b> (&loz;).</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
