<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .dia-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .dia-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .dia-cls { background:#ffebee; border:1.5px solid #c62828; color:#b71c1c; }
  .dia-iface { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .dia-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .dia-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.65rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 10px; font-size:.65rem; margin:0; font-family:'Consolas',monospace; white-space:pre; line-height:1.4; }
  .x-code .kw { color:#569cd6; } .x-code .ty { color:#4ec9b0; } .x-code .nm { color:#b5cea8; } .x-code .st { color:#ce9178; } .x-code .cm { color:#6a9955; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Multiple Inheritance Using Interfaces">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Java prohibits multiple inheritance of classes to prevent state collision, but fully embraces multiple inheritance of type via interfaces.</b>
        A single class can implement multiple interfaces simultaneously, allowing objects to be viewed and manipulated through distinct polymorphic lenses.
      </div>
      <div v-click class="dia-stage">
        <div class="card dia-box dia-cls">
          <div class="dia-head">&#10060; Disallowed: Class Diamond Problem</div>
          <div class="dia-code"><span style="color:#6a9955;">// C++ allows this; Java forbids it:</span>&#10;<span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">C</span> <span style="color:#569cd6;">extends</span> <span style="color:#4ec9b0;">A</span>, <span style="color:#4ec9b0;">B</span> {&#10;  <span style="color:#e57373;">// If A and B both declare 'int x',</span>&#10;  <span style="color:#e57373;">// which 'x' does C inherit? Conflict!</span>&#10;}</div>
        </div>
        <div class="card dia-box dia-iface">
          <div class="dia-head">&#10004; Allowed: Multiple Interfaces</div>
          <div class="dia-code"><span style="color:#6a9955;">// Java safely allows multiple interfaces:</span>&#10;<span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Duck</span> <span style="color:#569cd6;">implements</span> <span style="color:#4ec9b0;">Swimmable</span>, <span style="color:#4ec9b0;">Flyable</span> {&#10;  <span style="color:#569cd6;">public void</span> swim() { ... }&#10;  <span style="color:#569cd6;">public void</span> fly() { ... }&#10;}</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. No State Conflict</div>
          <div class="x-note">Interfaces contain no instance variables, completely eliminating instance state collision and memory layout ambiguity.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Default Conflict</div>
          <div class="x-code"><span class="cm">// Conflict resolution syntax:</span>&#10;<span class="kw">public void</span> log() {&#10;  <span class="ty">LoggerA</span>.<span class="kw">super</span>.log();&#10;}</div>
          <div class="x-note">If two interfaces share a default method, child MUST override.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Multi-Casting</div>
          <div class="x-note">The same <code>Duck</code> instance can be passed to methods expecting a <code>Swimmable</code> or a <code>Flyable</code> reference.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Interface Extends</div>
          <div class="x-note">An interface can extend multiple parent interfaces using <code>interface C extends A, B</code>, combining contracts.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
