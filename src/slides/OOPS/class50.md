<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .cln-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .cln-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .cln-sha { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .cln-dep { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .cln-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .cln-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Object Class: clone() Concept &amp; Cloneable">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>The <code>clone()</code> method creates an exact field-by-field duplicate of an existing object instance in memory.</b>
        A class must implement the <code>Cloneable</code> marker interface and override <code>clone()</code> as <code>public</code>, otherwise JVM throws <code>CloneNotSupportedException</code>.
      </div>
      <div v-click class="cln-stage">
        <div class="card cln-box cln-sha">
          <div class="cln-head">&#9888; Shallow Copy (Default)</div>
          <div class="cln-code"><span style="color:#6a9955;">// Copies primitives &amp; object references:</span>&#10;<span style="color:#4ec9b0;">User</span> copy = (<span style="color:#4ec9b0;">User</span>) <span style="color:#569cd6;">super</span>.clone();&#10;<span style="color:#e57373;">// 'copy.address' points to the EXACT SAME</span>&#10;<span style="color:#e57373;">// Address instance as original! Shared mutation!</span></div>
        </div>
        <div class="card cln-box cln-dep">
          <div class="cln-head">&#10004; Deep Copy (Isolated)</div>
          <div class="cln-code"><span style="color:#4ec9b0;">User</span> copy = (<span style="color:#4ec9b0;">User</span>) <span style="color:#569cd6;">super</span>.clone();&#10;<span style="color:#6a9955;">// Explicitly clone nested reference types:</span>&#10;copy.address = (<span style="color:#4ec9b0;">Address</span>) <span style="color:#569cd6;">this</span>.address.clone();&#10;<span style="color:#81c784;">// Completely independent heap graphs!</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Marker Interface</div>
          <div class="x-note"><code>Cloneable</code> has no methods. It signals to JVM's native <code>Object.clone()</code> that field-copying is permitted.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Protected Visibility</div>
          <div class="x-note"><code>Object.clone()</code> is protected. You must override it as <code>public</code> so callers outside the package can invoke it.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. No Constructor Call</div>
          <div class="x-note"><code>clone()</code> creates objects without invoking any class constructors; memory is copied directly.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Modern Best Practice</div>
          <div class="x-note">Most Java architects recommend <b>Copy Constructors</b> (<code>new User(other)</code>) over <code>clone()</code> because they are cleaner and type-safe.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
