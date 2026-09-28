<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .loc-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .loc-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .loc-dec { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .loc-cap { background:#ffebee; border:1.5px solid #c62828; color:#b71c1c; }
  .loc-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .loc-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Local Inner Classes (Method-Local Classes)">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>A Local Inner Class is defined inside a block of code — typically inside a method body or constructor.</b>
        Its scope is strictly confined to that method; it cannot be instantiated or referenced outside the block where it is declared.
      </div>
      <div v-click class="loc-stage">
        <div class="card loc-box loc-dec">
          <div class="loc-head">&#128221; Declaration Inside Method</div>
          <div class="loc-code"><span style="color:#569cd6;">void</span> process() {&#10;  <span style="color:#569cd6;">int</span> bonus = <span style="color:#b5cea8;">500</span>; <span style="color:#6a9955;">// Effectively final!</span>&#10;  <span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Calculator</span> {&#10;    <span style="color:#569cd6;">void</span> calc() { System.out.println(bonus); }&#10;  }&#10;  <span style="color:#4ec9b0;">Calculator</span> c = <span style="color:#569cd6;">new</span> <span style="color:#4ec9b0;">Calculator</span>();&#10;  c.calc();&#10;}</div>
        </div>
        <div class="card loc-box loc-cap">
          <div class="loc-head">&#128683; Variable Mutation Trap</div>
          <div class="loc-code"><span style="color:#569cd6;">void</span> process() {&#10;  <span style="color:#569cd6;">int</span> bonus = <span style="color:#b5cea8;">500</span>;&#10;  <span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Calculator</span> {&#10;    <span style="color:#6a9955;">// COMPILE ERROR: local variables</span>&#10;    <span style="color:#e57373;">// referenced from inner class must be</span>&#10;    <span style="color:#e57373;">// final or effectively final!</span>&#10;    <span style="color:#569cd6;">void</span> calc() { System.out.println(bonus); }&#10;  }&#10;  bonus = <span style="color:#b5cea8;">600</span>; <span style="color:#e57373;">// Breaks effectively final!</span>&#10;}</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. No Access Modifiers</div>
          <div class="x-note">Cannot use <code>public</code>, <code>private</code>, or <code>protected</code>. Just like local variables, scope is local.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Non-Static Only</div>
          <div class="x-note">Cannot be declared <code>static</code> because it exists within a runtime method execution frame.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Why Final Vars?</div>
          <div class="x-note">Method stack dies when returned, but inner instance survives on Heap. Java copies the value into the class!</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Use Case</div>
          <div class="x-note">Ideal when a complex algorithm inside a method needs structured helper objects not needed anywhere else.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
