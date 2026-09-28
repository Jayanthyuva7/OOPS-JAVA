<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .st-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .st-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .st-ins { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .st-sta { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .st-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .st-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Static Variables &amp; Metaspace Memory Allocation">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>The <code>static</code> keyword creates class-level members rather than object-level members.</b>
        A static variable has only ONE single copy allocated in memory, shared collectively by every instance of that class.
      </div>
      <div v-click class="st-stage">
        <div class="card st-box st-ins">
          <div class="st-head">&#128100; Instance Variable (Heap)</div>
          <div class="st-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Student</span> {&#10;  <span style="color:#4ec9b0;">String</span> name; <span style="color:#6a9955;">// Unique copy per student instance</span>&#10;}&#10;<span style="color:#6a9955;">// 1,000 students = 1,000 name variables on Heap</span></div>
        </div>
        <div class="card st-box st-sta">
          <div class="st-head">&#127760; Static Variable (Shared Class-Level)</div>
          <div class="st-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Student</span> {&#10;  <span style="color:#569cd6;">static</span> <span style="color:#4ec9b0;">String</span> college = <span style="color:#ce9178;">"IIT"</span>; <span style="color:#6a9955;">// Shared!</span>&#10;}&#10;<span style="color:#81c784;">// 1,000 students share ONE single college variable!</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Memory Location</div>
          <div class="x-note">Static variables reside in Metaspace/Class data area; they do not consume Heap space per instantiated object.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Invocation Syntax</div>
          <div class="x-note">Always access via class name: <code>Student.college</code>. Calling via object (<code>s1.college</code>) is bad practice.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Shared Mutation</div>
          <div class="x-note">If one instance changes a static variable, that modified value is immediately reflected across all other instances!</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Common Use Cases</div>
          <div class="x-note">Ideal for global counters (<code>studentCount++</code>), system configuration flags, and shared caches.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
