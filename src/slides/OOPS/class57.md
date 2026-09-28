<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .dir-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .dir-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .dir-uni { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .dir-bi { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .dir-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .dir-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Unidirectional vs Bidirectional Association">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Directionality specifies object navigability: whether knowledge flows in one direction or both directions.</b>
        In <i>Unidirectional</i>, only one class has a reference. In <i>Bidirectional</i>, both classes maintain explicit references to each other.
      </div>
      <div v-click class="dir-stage">
        <div class="card dir-box dir-uni">
          <div class="dir-head">&#10145; Unidirectional (Order &rarr; Customer)</div>
          <div class="dir-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Order</span> {&#10;  <span style="color:#569cd6;">private</span> <span style="color:#4ec9b0;">Customer</span> customer; <span style="color:#6a9955;">// Knows customer</span>&#10;}&#10;<span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Customer</span> {&#10;  <span style="color:#6a9955;">// Has NO reference to Order; completely decoupled</span>&#10;}</div>
        </div>
        <div class="card dir-box dir-bi">
          <div class="dir-head">&#11020; Bidirectional (Student &harr; Teacher)</div>
          <div class="dir-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Student</span> {&#10;  <span style="color:#569cd6;">private</span> <span style="color:#4ec9b0;">Teacher</span> teacher;&#10;}&#10;<span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Teacher</span> {&#10;  <span style="color:#569cd6;">private</span> <span style="color:#4ec9b0;">List</span>&lt;<span style="color:#4ec9b0;">Student</span>&gt; students;&#10;}</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Navigability Cost</div>
          <div class="x-note">Unidirectional is simpler to maintain and test; bidirectional adds cognitive and synchronization overhead.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. StackOverflowError</div>
          <div class="x-note">Calling <code>toString()</code> on bidirectional links can cause infinite recursive calls leading to crash!</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Helper Sync Methods</div>
          <div class="x-note">Provide dedicated methods like <code>addStudent(s)</code> that update both sides of the relationship simultaneously.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Default Preference</div>
          <div class="x-note">Always start with unidirectional association; upgrade to bidirectional only when bidirectional navigation is mandatory.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
