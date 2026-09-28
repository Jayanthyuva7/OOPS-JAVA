<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .ctor-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .ctor-col { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.74rem; }
  .ctor-def { background:#f5effb; border:1.5px solid #7b1fa2; color:#4a148c; }
  .ctor-noarg { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; }
  .ctor-title { font-weight:800; font-size:.86rem; text-align:center; padding-bottom:4px; margin-bottom:6px; border-bottom:1px dashed currentColor; }
  .ctor-box { background:#fff; border-radius:6px; padding:8px 10px; margin-top:4px; border:1px solid rgba(0,0,0,.08); }

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

<Slide2 topic="Constructors: Concept, Default &amp; No-Arg Constructor">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>A constructor is a special class member invoked automatically when an object is instantiated &mdash; ensuring every object starts in a valid state.</b>
        Constructors carry the exact same name as their class and have <i>no return type</i> (not even <code>void</code>). If no constructor is written, the Java compiler injects a default one.
      </div>
      <div v-click class="ctor-stage">
        <div class="card ctor-col ctor-def">
          <div class="ctor-title">Compiler Default Constructor</div>
          <div class="ctor-box">
            <span style="font-size:.64rem; color:#7b1fa2; font-weight:700;">When you write 0 constructors:</span>
            <pre class="x-code" style="margin-top:4px;"><span class="cm">// Injected automatically into .class</span>
<span class="kw">public</span> <span class="ty">Car</span>() {
  <span class="kw">super</span>();
}</pre>
            <span style="font-size:.64rem; color:#6a1b9a;">Initializes instance variables to 0, false, or null.</span>
          </div>
        </div>
        <div class="card ctor-col ctor-noarg">
          <div class="ctor-title">Explicit No-Arg Constructor</div>
          <div class="ctor-box">
            <span style="font-size:.64rem; color:#20588f; font-weight:700;">Written manually by the programmer:</span>
            <pre class="x-code" style="margin-top:4px;"><span class="ty">Car</span>() {
  brand = <span class="st">"Standard"</span>;
  speed = <span class="nm">0</span>;
}</pre>
            <span style="font-size:.64rem; color:#20588f;">Allows custom starting values when instantiated with no arguments.</span>
          </div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Constructor Purpose</div>
          <div class="x-note">Responsible for initializing state during memory allocation. Cannot be called like normal methods with <code>c.Car()</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Golden Rule</div>
          <div class="x-note"><b>Class name match:</b> Must match class name character-for-character. If you add a return type, it becomes a regular method!</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Disappearance Rule</div>
          <pre class="x-code"><span class="kw">class</span> <span class="ty">Book</span> {
  <span class="ty">Book</span>(<span class="ty">String</span> t) {} <span class="cm">// custom</span>
}
<span class="cm">// Book b = new Book(); // COMPILE ERROR!</span></pre>
          <div class="x-note">Compiler default vanishes when custom ctor is added.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Best Practice</div>
          <div class="x-note">Whenever you define parameterized constructors, always explicitly supply a no-argument constructor if frameworks require it (e.g. Spring, Hibernate).</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
