<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .arc-stage { display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .arc-box { border-radius:10px; padding:10px 12px; font-size:.7rem; display:flex; flex-direction:column; gap:4px; }
  .arc-1 { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .arc-2 { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .arc-3 { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .arc-head { font-weight:800; font-size:.82rem; text-align:center; padding-bottom:3px; border-bottom:1px dashed currentColor; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Core OOP Advanced Pillars: Master Architectural Summary">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Mastering OOP in Java requires understanding how Contracts, Immutability, and Cosmic Inheritance unite.</b>
        Interfaces define polymorphic contracts, Abstract Classes eliminate duplication, the <code>final</code> keyword protects integrity, and <code>Object</code> ties it all together.
      </div>
      <div v-click class="arc-stage">
        <div class="card arc-box arc-1">
          <div class="arc-head">&#128196; Interface &amp; Abstract Class</div>
          <div>&#8226; <b>Interface:</b> What to do (100% contract)</div>
          <div>&#8226; <b>Abstract Class:</b> How to partly do it (IS-A base)</div>
          <div>&#8226; <b>Multiple Inheritance:</b> Safely achieved via interfaces</div>
          <div>&#8226; <b>Default Methods:</b> Java 8+ interface evolution</div>
        </div>
        <div class="card arc-box arc-2">
          <div class="arc-head">&#128274; final Keyword</div>
          <div>&#8226; <b>Variable:</b> Value/pointer cannot change</div>
          <div>&#8226; <b>Method:</b> Cannot be overridden by child</div>
          <div>&#8226; <b>Class:</b> Cannot be extended or subclassed</div>
          <div>&#8226; <b>Blank Final:</b> Constructor-based immutability</div>
        </div>
        <div class="card arc-box arc-3">
          <div class="arc-head">&#127795; The Object Class</div>
          <div>&#8226; <b>Cosmic Root:</b> Every class inherits from Object</div>
          <div>&#8226; <b>equals/hashCode:</b> Must override together</div>
          <div>&#8226; <b>toString():</b> Readable debugging representation</div>
          <div>&#8226; <b>wait/notify:</b> Object monitor concurrency</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Contract Over Class</div>
          <div class="x-note">Always declare variables using interface types: <code>List&lt;T&gt; list = new ArrayList&lt;&gt;()</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Prefer Immutability</div>
          <div class="x-note">Make fields <code>final</code> wherever possible to prevent accidental mutations and ensure thread safety.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Always Pair equals/hash</div>
          <div class="x-note">Whenever you override <code>equals()</code>, always override <code>hashCode()</code> to keep Collections working correctly.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Production Quality</div>
          <div class="x-note">Together, these principles build robust, enterprise-grade, clean-architecture Java applications.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
