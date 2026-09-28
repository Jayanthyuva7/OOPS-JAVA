<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .fin-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .fin-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .fin-valid { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .fin-err { background:#ffebee; border:1.5px solid #c62828; color:#b71c1c; }
  .fin-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .fin-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.65rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="final Keyword: Final Variables &amp; Constants">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>In Java, the <code>final</code> keyword acts as an immutability modifier, locking whatever it is attached to.</b>
        When applied to a variable, it transforms that variable into a constant whose value can be assigned exactly once and never reassigned.
      </div>
      <div v-click class="fin-stage">
        <div class="card fin-box fin-valid">
          <div class="fin-head">&#10004; Valid Single Assignment</div>
          <div class="fin-code"><span style="color:#569cd6;">final int</span> MAX_USERS = <span style="color:#b5cea8;">100</span>;&#10;<span style="color:#569cd6;">final double</span> PI = <span style="color:#b5cea8;">3.14159</span>;&#10;&#10;<span style="color:#6a9955;">// Value can be read freely</span>&#10;System.out.println(MAX_USERS * 2);</div>
        </div>
        <div class="card fin-box fin-err">
          <div class="fin-head">&#10060; Compile-Time Reassignment Error</div>
          <div class="fin-code"><span style="color:#569cd6;">final int</span> threshold = <span style="color:#b5cea8;">50</span>;&#10;&#10;<span style="color:#e57373;">// COMPILE ERROR:</span>&#10;<span style="color:#e57373;">// cannot assign a value to final variable threshold</span>&#10;threshold = <span style="color:#b5cea8;">75</span>;</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Local Final Variable</div>
          <div class="x-note">Declared inside a method. Once assigned, its value is fixed for the remainder of that method frame execution.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Instance Final Field</div>
          <div class="x-note">Belongs to an instance. Must be initialized at declaration or inside every constructor before constructor ends.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Static Final Constant</div>
          <div class="x-note"><code>public static final</code> creates a true global constant stored in Metaspace. Named using SCREAMING_SNAKE_CASE.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Inlining Optimization</div>
          <div class="x-note">The Java compiler can inline primitive compile-time constants directly into bytecode, boosting execution speed.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
