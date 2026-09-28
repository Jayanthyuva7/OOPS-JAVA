<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .bl-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .bl-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .bl-blk { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .bl-ref { background:#f3e5f5; border:1.5px solid #7b1fa2; color:#4a148c; }
  .bl-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .bl-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Blank Final Variable &amp; Final Reference Variable">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Two critical Java interview concepts: delayed assignment (Blank Final) and pointer vs state immutability (Final Reference).</b>
        A blank final allows constructor-based immutability, while a final reference locks the pointer address without freezing object fields.
      </div>
      <div v-click class="bl-stage">
        <div class="card bl-box bl-blk">
          <div class="bl-head">&#128221; Blank Final Variable</div>
          <div class="bl-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Employee</span> {&#10;  <span style="color:#569cd6;">final int</span> id; <span style="color:#6a9955;">// Blank final (no initial value)</span>&#10;  <span style="color:#569cd6;">public</span> Employee(<span style="color:#569cd6;">int</span> id) {&#10;    <span style="color:#569cd6;">this</span>.id = id; <span style="color:#6a9955;">// Initialized in constructor!</span>&#10;  }&#10;}</div>
        </div>
        <div class="card bl-box bl-ref">
          <div class="bl-head">&#128279; Final Reference Variable</div>
          <div class="bl-code"><span style="color:#569cd6;">final</span> <span style="color:#4ec9b0;">List</span>&lt;<span style="color:#4ec9b0;">String</span>&gt; list = <span style="color:#569cd6;">new</span> <span style="color:#4ec9b0;">ArrayList</span>&lt;&gt;();&#10;list.add(<span style="color:#ce9178;">"Java"</span>); <span style="color:#81c784;">// &#10004; VALID! Modifies heap state</span>&#10;&#10;<span style="color:#e57373;">// list = new ArrayList&lt;&gt;(); // &#10060; ERROR: cannot reassign pointer</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Instance Blank Final</div>
          <div class="x-note">Must be explicitly initialized in every constructor. Leaving any constructor path unassigned triggers a compile error.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Static Blank Final</div>
          <div class="x-note">A <code>static final</code> variable without initial value must be initialized in a <code>static { ... }</code> initializer block.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Reference vs Object</div>
          <div class="x-note"><code>final</code> freezes the <b>reference variable address</b> on Stack; the object on the Heap remains completely mutable.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. True Immutability</div>
          <div class="x-note">To make an object fully immutable, both the reference AND the internal fields must be marked <code>final</code> with no setters.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
