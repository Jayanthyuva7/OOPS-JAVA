<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .sup-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .sup-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.73rem; }
  .sup-p { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; }
  .sup-c { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .sup-title { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .sup-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.65rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 10px; font-size:.66rem; margin:0; font-family:'Consolas',monospace; white-space:pre; line-height:1.4; }
  .x-code .kw { color:#569cd6; } .x-code .ty { color:#4ec9b0; } .x-code .nm { color:#b5cea8; } .x-code .st { color:#ce9178; } .x-code .cm { color:#6a9955; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="The super Keyword: Accessing Parent Variables &amp; Methods">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>The <code>super</code> keyword in Java is a reference variable used by a subclass to refer directly to its immediate parent class object.</b>
        Whenever a child class shadows a parent variable or overrides a parent method, <code>super</code> provides the bridge to access the parent's original members.
      </div>
      <div v-click class="sup-stage">
        <div class="card sup-box sup-p">
          <div class="sup-title">Superclass: Animal</div>
          <div class="sup-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Animal</span> {
  <span style="color:#4ec9b0;">String</span> color = <span style="color:#ce9178;">"White"</span>;
  <span style="color:#569cd6;">void</span> eat() {
    System.out.println(<span style="color:#ce9178;">"Animal eats food"</span>);
  }
}</div>
        </div>
        <div class="card sup-box sup-c">
          <div class="sup-title">Subclass: Dog (Using super)</div>
          <div class="sup-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Dog</span> <span style="color:#569cd6;">extends</span> <span style="color:#4ec9b0;">Animal</span> {
  <span style="color:#4ec9b0;">String</span> color = <span style="color:#ce9178;">"Black"</span>;
  <span style="color:#569cd6;">void</span> printInfo() {
    System.out.println(color);       <span style="color:#6a9955;">// "Black"</span>
    System.out.println(<span style="color:#569cd6;">super</span>.color); <span style="color:#6a9955;">// "White"</span>
    <span style="color:#569cd6;">super</span>.eat(); <span style="color:#6a9955;">// Calls Animal.eat()</span>
  }
}</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. What is super?</div>
          <div class="x-note">An implicit pointer available in subclasses directing execution to the parent class's memory segment.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Shadowed Variables</div>
          <pre class="x-code"><span class="ty">int</span> speed = <span class="nm">120</span>;
<span class="kw">int</span> pSpeed = <span class="kw">super</span>.speed;</pre>
          <div class="x-note">Disambiguates when child and parent share the exact same field name.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Overridden Methods</div>
          <pre class="x-code"><span class="kw">void</span> render() {
  <span class="kw">super</span>.render(); <span class="cm">// base</span>
  drawShadow();   <span class="cm">// extra</span>
}</pre>
          <div class="x-note">Extends parent functionality rather than discarding it entirely.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Static Restrictions</div>
          <div class="x-note">Like <code>this</code>, <code>super</code> cannot be used inside <code>static</code> methods since static code has no instance context.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
