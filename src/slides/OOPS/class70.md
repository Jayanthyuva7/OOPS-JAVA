<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .is-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .is-box { border-radius:10px; padding:10px 14px; font-size:.72rem; }
  .is-ins { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .is-sta { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .is-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:5px; border-bottom:1px dashed currentColor; }
  .is-row { display:flex; justify-content:space-between; padding:3px 0; border-bottom:1px dotted rgba(0,0,0,.08); font-size:.68rem; }
  .is-row span:first-child { font-weight:700; opacity:.8; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Instance vs Static Members: Comprehensive Comparison">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Understanding the separation between Instance (Heap) and Static (Metaspace) is foundational to Java architecture.</b>
        Instance members belong to individual object states; static members belong to the loaded class blueprint itself.
      </div>
      <div v-click class="is-stage">
        <div class="card is-box is-ins">
          <div class="is-head">&#128100; Instance Members</div>
          <div class="is-row"><span>Memory Area:</span> <span>Heap Memory (per object)</span></div>
          <div class="is-row"><span>Copies:</span> <span>Multiple (1 per instance)</span></div>
          <div class="is-row"><span>Allocation:</span> <span>Created on <code>new</code> operator</span></div>
          <div class="is-row"><span>Invocation:</span> <span>Via object reference: <code>obj.m()</code></span></div>
          <div class="is-row"><span>Access Scope:</span> <span>Can access both static &amp; instance</span></div>
          <div class="is-row"><span>Polymorphism:</span> <span>Dynamic overriding supported</span></div>
        </div>
        <div class="card is-box is-sta">
          <div class="is-head">&#127760; Static Members</div>
          <div class="is-row"><span>Memory Area:</span> <span>Metaspace / Method Area</span></div>
          <div class="is-row"><span>Copies:</span> <span>Single shared copy</span></div>
          <div class="is-row"><span>Allocation:</span> <span>Loaded once when class loads</span></div>
          <div class="is-row"><span>Invocation:</span> <span>Via class name: <code>Class.m()</code></span></div>
          <div class="is-row"><span>Access Scope:</span> <span>Static members ONLY (no this)</span></div>
          <div class="is-row"><span>Polymorphism:</span> <span>Static method hiding only</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Heap vs Metaspace</div>
          <div class="x-note">Heap grows and shrinks with GC; Metaspace stores permanent metadata and survives across object lifecycles.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Thread Safety</div>
          <div class="x-note">Static mutable variables are globally shared and vulnerable to race conditions unless explicitly synchronized.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Testing &amp; Mocking</div>
          <div class="x-note">Static methods are difficult to mock in unit tests (Mockito); instance methods with interfaces enable clean dependency injection.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Golden Rule</div>
          <div class="x-note">Use static for stateless helper utilities and global constants; use instance for stateful, polymorphic domain entities.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
