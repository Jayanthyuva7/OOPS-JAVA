<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .fc-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .fc-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .fc-mth { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .fc-cls { background:#ffebee; border:1.5px solid #c62828; color:#b71c1c; }
  .fc-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .fc-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="final Methods &amp; final Classes">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Applying <code>final</code> to methods locks behavior; applying it to classes prevents all inheritance and extension.</b>
        This provides security, prevents malicious subclasses from tampering with core logic, and guarantees architectural immutability.
      </div>
      <div v-click class="fc-stage">
        <div class="card fc-box fc-mth">
          <div class="fc-head">&#128274; Final Method: Cannot Override</div>
          <div class="fc-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">AuthService</span> {&#10;  <span style="color:#569cd6;">public final boolean</span> verifyPassword(<span style="color:#4ec9b0;">String</span> p) {&#10;    <span style="color:#569cd6;">return</span> hash(p).equals(storedHash); <span style="color:#6a9955;">// Locked!</span>&#10;  }&#10;}&#10;<span style="color:#e57373;">// Subclass cannot override verifyPassword()!</span></div>
        </div>
        <div class="card fc-box fc-cls">
          <div class="fc-head">&#128683; Final Class: Cannot Extend</div>
          <div class="fc-code"><span style="color:#569cd6;">public final class</span> <span style="color:#4ec9b0;">String</span> { ... }&#10;&#10;<span style="color:#6a9955;">// Attempting to subclass String:</span>&#10;<span style="color:#e57373;">// COMPILE ERROR:</span>&#10;<span style="color:#e57373;">// cannot inherit from final java.lang.String</span>&#10;<span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">MyString</span> <span style="color:#569cd6;">extends</span> <span style="color:#4ec9b0;">String</span> { }</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Security Guard</div>
          <div class="x-note">Sensitive authentication or cryptographic validation routines should be marked <code>final</code> to block malicious overrides.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. JDK Final Classes</div>
          <div class="x-note"><code>String</code>, <code>Integer</code>, <code>Math</code>, and <code>System</code> are all final classes to maintain system stability and immutability.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Implicit Final Methods</div>
          <div class="x-note">When a class is declared <code>final</code>, all of its methods automatically become implicitly final as well.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Performance Boost</div>
          <div class="x-note">Because final methods cannot be overridden, the JVM JIT compiler can inline them directly without virtual method dispatch tables.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
