<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .con-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .con-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .con-eq { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .con-hash { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .con-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .con-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="equals() and hashCode() Contract">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>The equals-hashCode contract is the most tested Core Java interview topic &amp; essential for Collections integrity.</b>
        If two objects are considered equal via <code>equals()</code>, they MUST produce the exact same integer from <code>hashCode()</code>.
      </div>
      <div v-click class="con-stage">
        <div class="card con-box con-eq">
          <div class="con-head">&#9878; Overriding equals()</div>
          <div class="con-code"><span style="color:#569cd6;">@Override</span>&#10;<span style="color:#569cd6;">public boolean</span> equals(<span style="color:#4ec9b0;">Object</span> o) {&#10;  <span style="color:#569cd6;">if</span> (<span style="color:#569cd6;">this</span> == o) <span style="color:#569cd6;">return true</span>;&#10;  <span style="color:#569cd6;">if</span> (o == <span style="color:#569cd6;">null</span> || getClass() != o.getClass()) <span style="color:#569cd6;">return false</span>;&#10;  <span style="color:#4ec9b0;">User</span> user = (<span style="color:#4ec9b0;">User</span>) o;&#10;  <span style="color:#569cd6;">return</span> id == user.id;&#10;}</div>
        </div>
        <div class="card con-box con-hash">
          <div class="con-head">&#128273; Matching hashCode()</div>
          <div class="con-code"><span style="color:#569cd6;">@Override</span>&#10;<span style="color:#569cd6;">public int</span> hashCode() {&#10;  <span style="color:#569cd6;">return</span> <span style="color:#4ec9b0;">Objects</span>.hash(id);&#10;}&#10;<span style="color:#81c784;">// Both use the same 'id' field!</span>&#10;<span style="color:#6a9955;">// HashMap bucket lookup succeeds!</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. The Golden Rule</div>
          <div class="x-note">If <code>a.equals(b) == true</code> &rArr; <code>a.hashCode() == b.hashCode()</code> MUST hold true without exception!</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Hash Collisions</div>
          <div class="x-note">Equal hashCodes do NOT guarantee objects are equal; different objects can land in the same bucket (collision).</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. HashMap Trap</div>
          <div class="x-note">If you override <code>equals()</code> but forget <code>hashCode()</code>, <code>map.get(key)</code> will return <code>null</code>!</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. equals Properties</div>
          <div class="x-note">A valid <code>equals()</code> must be Reflexive, Symmetric, Transitive, Consistent, and Null-safe (<code>x.equals(null) == false</code>).</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
