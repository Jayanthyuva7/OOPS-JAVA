<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .sn-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .sn-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .sn-dec { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .sn-bld { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .sn-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .sn-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Static Nested Classes: Architecture &amp; Use Cases">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>A Static Nested Class is a nested class marked with the <code>static</code> keyword modifier.</b>
        Unlike member inner classes, it does NOT hold a hidden reference to an outer class instance and behaves essentially as a packaged top-level class.
      </div>
      <div v-click class="sn-stage">
        <div class="card sn-box sn-dec">
          <div class="sn-head">&#128196; Declaration &amp; Direct Instantiation</div>
          <div class="sn-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Outer</span> {&#10;  <span style="color:#569cd6;">static class</span> <span style="color:#4ec9b0;">StaticNested</span> {&#10;    <span style="color:#569cd6;">void</span> show() { System.out.println(<span style="color:#ce9178;">"Static nested"</span>); }&#10;  }&#10;}&#10;<span style="color:#6a9955;">// No outer instance required! Direct creation:</span>&#10;<span style="color:#4ec9b0;">Outer</span>.<span style="color:#4ec9b0;">StaticNested</span> n = <span style="color:#569cd6;">new</span> <span style="color:#4ec9b0;">Outer</span>.<span style="color:#4ec9b0;">StaticNested</span>();</div>
        </div>
        <div class="card sn-box sn-bld">
          <div class="sn-head">&#127959; Production Pattern: Builder Pattern</div>
          <div class="sn-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">User</span> {&#10;  <span style="color:#569cd6;">public static class</span> <span style="color:#4ec9b0;">Builder</span> {&#10;    <span style="color:#569cd6;">private</span> <span style="color:#4ec9b0;">String</span> name;&#10;    <span style="color:#569cd6;">public</span> Builder setName(<span style="color:#4ec9b0;">String</span> n) { <span style="color:#569cd6;">this</span>.name = n; <span style="color:#569cd6;">return this</span>; }&#10;    <span style="color:#569cd6;">public</span> User build() { <span style="color:#569cd6;">return new</span> User(<span style="color:#569cd6;">this</span>); }&#10;  }&#10;}</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. No Outer Pointer</div>
          <div class="x-note">Does not store <code>this$0</code> pointer. Saves memory and prevents accidental outer instance memory leaks.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Member Access</div>
          <div class="x-note">Can directly access static members of outer class (even private ones); cannot access outer instance fields directly.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Clean Namespacing</div>
          <div class="x-note">Communicates clearly that this helper class belongs logically to <code>Outer</code> without needing its state.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. JDK Examples</div>
          <div class="x-note"><code>Map.Entry&lt;K, V&gt;</code> is a famous static nested interface within the <code>java.util.Map</code> contract!</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
