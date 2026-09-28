<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .sm-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .sm-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .sm-ok { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .sm-err { background:#ffebee; border:1.5px solid #c62828; color:#b71c1c; }
  .sm-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .sm-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Static Methods &amp; Their Execution Rules">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>A static method belongs to the class itself and can be invoked without creating any object instance.</b>
        Because it executes without an enclosing object context, strict compilation rules govern what static methods can access.
      </div>
      <div v-click class="sm-stage">
        <div class="card sm-box sm-ok">
          <div class="sm-head">&#10004; Valid: Pure Static Context</div>
          <div class="sm-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">MathUtil</span> {&#10;  <span style="color:#569cd6;">static int</span> rate = <span style="color:#b5cea8;">5</span>;&#10;  <span style="color:#569cd6;">public static int</span> calc(<span style="color:#569cd6;">int</span> a) {&#10;    <span style="color:#569cd6;">return</span> a * rate; <span style="color:#81c784;">// Accesses static member &#10004;</span>&#10;  }&#10;}</div>
        </div>
        <div class="card sm-box sm-err">
          <div class="sm-head">&#10060; Forbidden: Instance References</div>
          <div class="sm-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">MathUtil</span> {&#10;  <span style="color:#569cd6;">int</span> bonus = <span style="color:#b5cea8;">10</span>; <span style="color:#6a9955;">// Instance variable</span>&#10;  <span style="color:#569cd6;">public static void</span> show() {&#10;    <span style="color:#e57373;">// COMPILE ERROR: non-static variable bonus</span>&#10;    <span style="color:#e57373;">// cannot be referenced from static context</span>&#10;    System.out.println(bonus);&#10;  }&#10;}</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. No 'this' or 'super'</div>
          <div class="x-note"><code>this</code> and <code>super</code> represent the current heap object. Since static methods have no instance, using them causes compile error!</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Utility Functions</div>
          <div class="x-note">Methods like <code>Math.sqrt()</code>, <code>Arrays.sort()</code>, and <code>Integer.parseInt()</code> are stateless and naturally static.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Direct Class Call</div>
          <div class="x-note">Always invoke static methods using the class name: <code>MathUtil.calc(10)</code> rather than an object instance reference.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Method Hiding</div>
          <div class="x-note">Static methods with matching signatures in subclasses conceal (hide) superclass versions; they are never polymorphic.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
