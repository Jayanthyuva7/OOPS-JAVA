<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .rel-stage { display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .rel-box { border-radius:10px; padding:10px 12px; font-size:.7rem; display:flex; flex-direction:column; gap:4px; }
  .rel-ass { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .rel-agg { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .rel-cmp { background:#ffebee; border:1.5px solid #c62828; color:#b71c1c; }
  .rel-head { font-weight:800; font-size:.82rem; text-align:center; padding-bottom:3px; border-bottom:1px dashed currentColor; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Has-A Relationship: Association, Aggregation &amp; Composition">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>While Inheritance represents an "IS-A" relationship, Object Containment models a "HAS-A" relationship.</b>
        In Java, HAS-A means an instance of one class contains or references an instance of another class as a member variable.
      </div>
      <div v-click class="rel-stage">
        <div class="card rel-box rel-ass">
          <div class="rel-head">&#128279; Association (Broadest)</div>
          <div>&#8226; Generic relationship between independent objects</div>
          <div>&#8226; Objects have distinct lifecycles</div>
          <div>&#8226; No ownership involved</div>
          <div style="font-size:.65rem; opacity:.85; margin-top:2px;"><i>Example: Doctor &amp; Patient</i></div>
        </div>
        <div class="card rel-box rel-agg">
          <div class="rel-head">&#129309; Aggregation (Weak HAS-A)</div>
          <div>&#8226; "Has-A" with independent existence</div>
          <div>&#8226; Child can exist without parent</div>
          <div>&#8226; Loose coupling &amp; shared ownership</div>
          <div style="font-size:.65rem; opacity:.85; margin-top:2px;"><i>Example: Department &amp; Professor</i></div>
        </div>
        <div class="card rel-box rel-cmp">
          <div class="rel-head">&#128274; Composition (Strong HAS-A)</div>
          <div>&#8226; "Part-of" with strict ownership</div>
          <div>&#8226; Child dies if parent is destroyed</div>
          <div>&#8226; Tightly coupled lifecycle</div>
          <div style="font-size:.65rem; opacity:.85; margin-top:2px;"><i>Example: Car &amp; Engine</i></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Object Containment</div>
          <div class="x-note">Implemented simply by declaring an instance field: <code>class Car { private Engine engine; }</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Code Reusability</div>
          <div class="x-note">Enables reuse without inheriting unnecessary methods or exposing internal parent state to callers.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Dynamic Swapping</div>
          <div class="x-note">Contained components can be altered or injected dynamically at runtime via setters or constructor injection.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Encapsulation Safe</div>
          <div class="x-note">Internal details of contained classes remain hidden behind their public methods, maintaining strict encapsulation.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
