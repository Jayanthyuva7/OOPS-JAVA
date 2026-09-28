<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .str-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .str-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .str-def { background:#ffebee; border:1.5px solid #c62828; color:#b71c1c; }
  .str-ovr { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .str-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .str-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Object Class: toString() Method">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>The <code>toString()</code> method returns a textual representation of an object, vital for logging and debugging.</b>
        By default, <code>Object.toString()</code> produces an unreadable memory-hash representation, which is why overriding it is an industry best practice.
      </div>
      <div v-click class="str-stage">
        <div class="card str-box str-def">
          <div class="str-head">&#10060; Default Object.toString()</div>
          <div class="str-code"><span style="color:#6a9955;">// Default implementation:</span>&#10;getClass().getName() + <span style="color:#ce9178;">"@"</span> + Integer.toHexString(hashCode())&#10;&#10;<span style="color:#e57373;">// Output: Student@4f023edb (cryptic &amp; unhelpful!)</span></div>
        </div>
        <div class="card str-box str-ovr">
          <div class="str-head">&#10004; Overridden Custom toString()</div>
          <div class="str-code"><span style="color:#569cd6;">@Override</span>&#10;<span style="color:#569cd6;">public</span> <span style="color:#4ec9b0;">String</span> toString() {&#10;  <span style="color:#569cd6;">return</span> <span style="color:#ce9178;">"Student[id="</span> + id + <span style="color:#ce9178;">", name="</span> + name + <span style="color:#ce9178;">"]"</span>;&#10;}&#10;<span style="color:#81c784;">// Output: Student[id=101, name=Alex] (clear &amp; informative!)</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Auto-Invocation</div>
          <div class="x-note"><code>System.out.println(obj)</code> and string concatenation <code>"User: " + obj</code> implicitly call <code>obj.toString()</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Null Safety</div>
          <div class="x-note"><code>String.valueOf(obj)</code> checks for null and returns <code>"null"</code> safely without throwing a NullPointerException.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Debugging Power</div>
          <div class="x-note">IDEs and APM loggers (Logback, SLF4J) use <code>toString()</code> to display object states in stack traces and logs.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Modern Java Records</div>
          <div class="x-note">Java 14+ <code>record</code> classes automatically generate a clean, field-by-field <code>toString()</code> out of the box!</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
