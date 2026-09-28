<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .in-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .in-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .in-def { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .in-use { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .in-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .in-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Member Inner Classes (Non-Static Inner Classes)">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>A Member Inner Class is a non-static class declared directly inside an outer class body at the member level.</b>
        Every inner class instance is inextricably bound to a specific enclosing instance of the outer class and has full access to all its fields.
      </div>
      <div v-click class="in-stage">
        <div class="card in-box in-def">
          <div class="in-head">&#128196; Declaration &amp; Outer Access</div>
          <div class="in-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Outer</span> {&#10;  <span style="color:#569cd6;">private int</span> x = <span style="color:#b5cea8;">10</span>;&#10;  <span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Inner</span> {&#10;    <span style="color:#569cd6;">void</span> show() {&#10;      <span style="color:#6a9955;">// Direct access to private outer field:</span>&#10;      System.out.println(Outer.<span style="color:#569cd6;">this</span>.x);&#10;    }&#10;  }&#10;}</div>
        </div>
        <div class="card in-box in-use">
          <div class="in-head">&#128273; Instantiation Syntax</div>
          <div class="in-code"><span style="color:#6a9955;">// Step 1: Create outer instance</span>&#10;<span style="color:#4ec9b0;">Outer</span> outer = <span style="color:#569cd6;">new</span> <span style="color:#4ec9b0;">Outer</span>();&#10;&#10;<span style="color:#6a9955;">// Step 2: Use outer.new Inner() syntax</span>&#10;<span style="color:#4ec9b0;">Outer</span>.<span style="color:#4ec9b0;">Inner</span> inner = outer.<span style="color:#569cd6;">new</span> <span style="color:#4ec9b0;">Inner</span>();&#10;inner.show(); <span style="color:#81c784;">// Prints 10</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Outer Instance Link</div>
          <div class="x-note">An inner instance cannot exist without an outer instance. It holds a hidden pointer: <code>this$0</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Shadowing Resolution</div>
          <div class="x-note">If inner and outer define a variable with the same name, use <code>Outer.this.varName</code> to reach the outer one.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Access Modifiers</div>
          <div class="x-note">Unlike top-level classes, member inner classes can be marked <code>private</code>, <code>protected</code>, or <code>public</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Static Members (Java 16+)</div>
          <div class="x-note">Prior to Java 16, non-static inner classes could not declare static members. Modern Java allows static members in inner classes.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
