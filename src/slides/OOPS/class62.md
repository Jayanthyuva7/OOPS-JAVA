<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .ev-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .ev-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .ev-anon { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .ev-lmb { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .ev-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .ev-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Anonymous Classes: Event Callbacks &amp; Modern Lambdas">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Historically, Anonymous Classes were Java's primary way of implementing Event Listeners and Callbacks.</b>
        While Java 8 Lambdas replaced anonymous classes for single-method interfaces, anonymous classes remain vital for multi-method contracts.
      </div>
      <div v-click class="ev-stage">
        <div class="card ev-box ev-anon">
          <div class="ev-head">&#128392; Anonymous Class (Listener)</div>
          <div class="ev-code">button.addActionListener(<span style="color:#569cd6;">new</span> <span style="color:#4ec9b0;">ActionListener</span>() {&#10;  <span style="color:#569cd6;">@Override</span>&#10;  <span style="color:#569cd6;">public void</span> actionPerformed(<span style="color:#4ec9b0;">ActionEvent</span> e) {&#10;    System.out.println(<span style="color:#ce9178;">"Clicked!"</span>);&#10;  }&#10;});</div>
        </div>
        <div class="card ev-box ev-lmb">
          <div class="ev-head">&#9889; Java 8 Lambda (Modern Equivalent)</div>
          <div class="ev-code"><span style="color:#6a9955;">// Replaces verbose boilerplate when</span>&#10;<span style="color:#6a9955;">// targeting Functional Interface (SAM):</span>&#10;button.addActionListener(e -&gt; {&#10;  System.out.println(<span style="color:#ce9178;">"Clicked!"</span>);&#10;});</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Multi-Method Interfaces</div>
          <div class="x-note">Lambdas cannot implement interfaces with 2+ abstract methods (e.g. <code>MouseListener</code>); anonymous classes must be used.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Abstract Class Extension</div>
          <div class="x-note">Lambdas work strictly with interfaces. To instantiate an abstract class on-the-fly, an anonymous class is mandatory.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Internal Mutable State</div>
          <div class="x-note">Anonymous classes can define internal instance variables and helper methods, which lambdas cannot declare.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Meaning of 'this'</div>
          <div class="x-note">Inside an anonymous class, <code>this</code> refers to the anonymous instance; inside a lambda, <code>this</code> refers to enclosing class.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
