<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .ovrd-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .ovrd-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.73rem; }
  .ovrd-p { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; }
  .ovrd-c { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .ovrd-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .ovrd-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.65rem; }
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
<Slide2 topic="Method Overriding &amp; The @Override Annotation">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Method Overriding occurs when a subclass defines a method that has the exact same name, return type, and parameters as a method in its superclass.</b>
        This represents <i>Runtime (Dynamic) Polymorphism</i>: the version of the method executed is decided at runtime based on the actual object created in the Heap.
      </div>
      <div v-click class="ovrd-stage">
        <div class="card ovrd-box ovrd-p">
          <div class="ovrd-head">Superclass: Animal</div>
          <div class="ovrd-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Animal</span> {
  <span style="color:#569cd6;">void</span> makeSound() {
    System.out.println(<span style="color:#ce9178;">"Generic animal noise"</span>);
  }
}</div>
        </div>
        <div class="card ovrd-box ovrd-c">
          <div class="ovrd-head">Subclass: Dog (@Override)</div>
          <div class="ovrd-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Dog</span> <span style="color:#569cd6;">extends</span> <span style="color:#4ec9b0;">Animal</span> {
  <span style="color:#dcdcaa;">@Override</span>
  <span style="color:#569cd6;">void</span> makeSound() {
    System.out.println(<span style="color:#ce9178;">"Bark bark!"</span>);
  }
}</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Purpose of Overriding</div>
          <div class="x-note">Enables subclasses to provide specific tailored implementations for behaviors already established in base classes.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Signature Match</div>
          <div class="x-note">Method name and parameter types must match the parent signature 100%. If parameters differ, it becomes an <i>overload</i> instead!</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. @Override Safety</div>
          <div class="x-note">Forces compiler to verify that the method actually exists in the superclass. Protects against subtle spelling typos.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Dynamic Dispatch</div>
          <pre class="x-code"><span class="ty">Animal</span> a = <span class="kw">new</span> <span class="ty">Dog</span>();
a.makeSound(); <span class="cm">// "Bark bark!"</span></pre>
          <div class="x-note">Resolved at runtime based on Heap object.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
