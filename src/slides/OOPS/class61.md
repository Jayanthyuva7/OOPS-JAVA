<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .an-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .an-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .an-iface { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .an-cls { background:#f3e5f5; border:1.5px solid #7b1fa2; color:#4a148c; }
  .an-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .an-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Anonymous Inner Classes: Concepts &amp; Syntax">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>An Anonymous Inner Class is a local inner class without a name, declared and instantiated simultaneously.</b>
        Used when you need a one-off implementation of an interface or class without cluttering your codebase with dedicated subclass files.
      </div>
      <div v-click class="an-stage">
        <div class="card an-box an-iface">
          <div class="an-head">&#128196; Implementing an Interface</div>
          <div class="an-code"><span style="color:#4ec9b0;">Runnable</span> r = <span style="color:#569cd6;">new</span> <span style="color:#4ec9b0;">Runnable</span>() {&#10;  <span style="color:#569cd6;">@Override</span>&#10;  <span style="color:#569cd6;">public void</span> run() {&#10;    System.out.println(<span style="color:#ce9178;">"Running on thread!"</span>);&#10;  }&#10;}; <span style="color:#6a9955;">// Note the required semicolon ';'</span></div>
        </div>
        <div class="card an-box an-cls">
          <div class="an-head">&#128392; Extending a Class</div>
          <div class="an-code"><span style="color:#4ec9b0;">Thread</span> t = <span style="color:#569cd6;">new</span> <span style="color:#4ec9b0;">Thread</span>() {&#10;  <span style="color:#569cd6;">@Override</span>&#10;  <span style="color:#569cd6;">public void</span> run() {&#10;    System.out.println(<span style="color:#ce9178;">"Custom thread task"</span>);&#10;  }&#10;};&#10;t.start();</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. No Name / Constructor</div>
          <div class="x-note">Cannot define explicit constructors because the class has no name. Uses instance initializers <code>{ ... }</code> instead.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Single Target Only</div>
          <div class="x-note">Can either extend ONE class or implement ONE interface; cannot do both or implement multiple interfaces.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Compiler Naming</div>
          <div class="x-note">Compiled into numeric class files: <code>Outer$1.class</code>, <code>Outer$2.class</code> in the target output folder.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Syntax Semicolon</div>
          <div class="x-note">Because it is an expression, the closing curly brace must always end with a semicolon <code>};</code>.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
