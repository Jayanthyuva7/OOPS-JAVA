<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .cmp-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .cmp-box { border-radius:10px; padding:10px 14px; font-size:.72rem; }
  .cmp-iface { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .cmp-abs { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .cmp-head { font-weight:800; font-size:.86rem; text-align:center; padding-bottom:4px; margin-bottom:6px; border-bottom:1px dashed currentColor; }
  .cmp-row { display:flex; justify-content:space-between; padding:3px 0; border-bottom:1px dotted rgba(0,0,0,.08); font-size:.68rem; }
  .cmp-row span:first-child { font-weight:700; opacity:.75; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Interface vs Abstract Class: Core Differences">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Both interface and abstract class serve as blueprints — but they differ in purpose, capabilities, and design philosophy.</b>
        An <i>interface</i> defines a pure contract (what to do), while an <i>abstract class</i> provides a partial implementation (how to partly do it).
      </div>
      <div v-click class="cmp-stage">
        <div class="card cmp-box cmp-iface">
          <div class="cmp-head">&#128196; Interface</div>
          <div class="cmp-row"><span>Instantiation:</span> <span>Cannot instantiate</span></div>
          <div class="cmp-row"><span>Methods:</span> <span>abstract, default, static, private</span></div>
          <div class="cmp-row"><span>Variables:</span> <span>public static final only</span></div>
          <div class="cmp-row"><span>Inheritance:</span> <span>Multiple (implements many)</span></div>
          <div class="cmp-row"><span>Constructor:</span> <span>Not allowed</span></div>
          <div class="cmp-row"><span>Access:</span> <span>All members public by default</span></div>
        </div>
        <div class="card cmp-box cmp-abs">
          <div class="cmp-head">&#127968; Abstract Class</div>
          <div class="cmp-row"><span>Instantiation:</span> <span>Cannot instantiate</span></div>
          <div class="cmp-row"><span>Methods:</span> <span>abstract + concrete allowed</span></div>
          <div class="cmp-row"><span>Variables:</span> <span>Any type (instance, static)</span></div>
          <div class="cmp-row"><span>Inheritance:</span> <span>Single (extends one only)</span></div>
          <div class="cmp-row"><span>Constructor:</span> <span>Allowed (called via super)</span></div>
          <div class="cmp-row"><span>Access:</span> <span>Any access modifier</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Multiple vs Single</div>
          <div class="x-note">A class can <code>implement</code> many interfaces but can only <code>extend</code> one abstract class — this is Java's key design constraint.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. State Management</div>
          <div class="x-note">Abstract classes hold instance state (fields). Interfaces only hold constants — they cannot maintain object-level mutable state.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Method Modifiers</div>
          <div class="x-note">Abstract class methods can be <code>private</code>, <code>protected</code>, or <code>public</code>. Interface methods are <code>public</code> unless they are <code>private</code> helpers (Java 9+).</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. IS-A Relationship</div>
          <div class="x-note">Abstract class models an IS-A strong relationship (Dog IS-A Animal). Interface models a CAN-DO capability (Dog CAN Swim, CAN Run).</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
