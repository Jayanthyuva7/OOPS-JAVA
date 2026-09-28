<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .comp-stage { display:grid; grid-template-columns:1fr 1fr; gap:16px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .comp-col { border-radius:12px; padding:10px 16px; font-family:'Consolas',monospace; font-size:.74rem; line-height:1.45; }
  .comp-pop { background:#fff8f0; border:1.5px solid #d97706; color:#78350f; }
  .comp-oop { background:#f0f9ff; border:1.5px solid #20588f; color:#0f3b66; }
  .comp-title { font-weight:800; font-size:.9rem; text-align:center; padding-bottom:5px; margin-bottom:6px; border-bottom:1px dashed currentColor; }
  .comp-row { display:flex; justify-content:space-between; padding:3px 0; border-bottom:1px dotted rgba(0,0,0,.08); }
  .comp-lbl { font-weight:700; opacity:.85; }

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

<Slide2 topic="Procedural vs Object-Oriented Programming">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Procedural programming views software as a sequence of steps; OOP views software as a collaborative network of autonomous objects.</b>
        In procedural languages (like C), functions freely operate on passive global data. In OOP (like Java), data is protected inside objects and manipulated exclusively via methods.
      </div>
      <div v-click class="comp-stage">
        <div class="card comp-col comp-pop">
          <div class="comp-title">Procedural Programming (POP)</div>
          <div class="comp-row"><span class="comp-lbl">Primary Focus:</span> <span>Functions &amp; Algorithms</span></div>
          <div class="comp-row"><span class="comp-lbl">Design Approach:</span> <span>Top-Down Decomposition</span></div>
          <div class="comp-row"><span class="comp-lbl">Data Protection:</span> <span>Low (Global data freely accessible)</span></div>
          <div class="comp-row"><span class="comp-lbl">Reusability:</span> <span>Limited (Functions hard to repurpose)</span></div>
          <div class="comp-row"><span class="comp-lbl">Example Languages:</span> <span>C, Pascal, Fortran</span></div>
        </div>
        <div class="card comp-col comp-oop">
          <div class="comp-title">Object-Oriented Programming (OOP)</div>
          <div class="comp-row"><span class="comp-lbl">Primary Focus:</span> <span>Data &amp; Objects that own it</span></div>
          <div class="comp-row"><span class="comp-lbl">Design Approach:</span> <span>Bottom-Up Modular Design</span></div>
          <div class="comp-row"><span class="comp-lbl">Data Protection:</span> <span>High (Encapsulated &amp; Hidden)</span></div>
          <div class="comp-row"><span class="comp-lbl">Reusability:</span> <span>High (Inheritance &amp; Polymorphism)</span></div>
          <div class="comp-row"><span class="comp-lbl">Example Languages:</span> <span>Java, C++, C#, Python</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Function vs Data</div>
          <div class="x-note">POP revolves around "what action to perform next". OOP asks "which entity owns this information and how does it act?".</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Security &amp; Access</div>
          <div class="x-note">In POP, any function can accidentally overwrite global variables. In OOP, private fields can only be altered by validated methods.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Code Scalability</div>
          <div class="x-note">Adding new features to a 50,000-line procedural codebase often breaks existing functions. In OOP, new classes integrate without touching old code.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Code Comparison</div>
          <pre class="x-code"><span class="cm">// POP: Global func</span>
<span class="kw">void</span> driveCar(<span class="ty">Car</span>* c) { ... }
<span class="cm">// OOP: Object method</span>
myCar.drive();</pre>
          <div class="x-note">Data &amp; function merged into the object.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
