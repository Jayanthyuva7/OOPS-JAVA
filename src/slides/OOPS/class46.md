<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .eff-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .eff-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .eff-ovl { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .eff-ovr { background:#ffebee; border:1.5px solid #c62828; color:#b71c1c; }
  .eff-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .eff-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Effect of final on Inheritance &amp; Overriding">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Crucial Java interview distinction: Can a final method be inherited? YES! Can it be overridden? NO! Can it be overloaded? YES!</b>
        Understanding the boundary between inheritance, method overriding, and method overloading with the <code>final</code> keyword is fundamental.
      </div>
      <div v-click class="eff-stage">
        <div class="card eff-box eff-ovl">
          <div class="eff-head">&#10004; Overloading Final Method: ALLOWED</div>
          <div class="eff-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Parent</span> {&#10;  <span style="color:#569cd6;">final void</span> display(<span style="color:#4ec9b0;">int</span> a) { ... }&#10;}&#10;<span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Child</span> <span style="color:#569cd6;">extends</span> <span style="color:#4ec9b0;">Parent</span> {&#10;  <span style="color:#6a9955;">// VALID! Overloaded with String param:</span>&#10;  <span style="color:#569cd6;">void</span> display(<span style="color:#4ec9b0;">String</span> s) { ... }&#10;}</div>
        </div>
        <div class="card eff-box eff-ovr">
          <div class="eff-head">&#10060; Overriding Final Method: FORBIDDEN</div>
          <div class="eff-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Parent</span> {&#10;  <span style="color:#569cd6;">final void</span> display(<span style="color:#4ec9b0;">int</span> a) { ... }&#10;}&#10;<span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Child</span> <span style="color:#569cd6;">extends</span> <span style="color:#4ec9b0;">Parent</span> {&#10;  <span style="color:#6a9955;">// ERROR: display(int) in Child cannot</span>&#10;  <span style="color:#e57373;">// override display(int) in Parent</span>&#10;  <span style="color:#569cd6;">void</span> display(<span style="color:#4ec9b0;">int</span> a) { ... }&#10;}</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Inheritable via super</div>
          <div class="x-note">Subclasses inherit final methods and can invoke them freely like any regular inherited method.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Final Parameters</div>
          <div class="x-note"><code>void calc(final int tax)</code> prevents method code from accidentally modifying incoming argument variables.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Effectively Final (Java 8)</div>
          <div class="x-note">Local variables accessed inside lambdas or anonymous classes must be <code>final</code> or effectively final (never changed).</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Private + Final</div>
          <div class="x-note">A <code>private</code> method cannot be overridden anyway, so marking it <code>final</code> is redundant but legal in Java.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
