<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .tbl-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .tbl-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.73rem; }
  .tbl-this { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; }
  .tbl-sup { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .tbl-head { font-weight:800; font-size:.86rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .tbl-row { display:flex; justify-content:space-between; padding:3px 0; border-bottom:1px dotted rgba(0,0,0,.08); }
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
<Slide2 topic="The super() Constructor Call &amp; super vs this">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Constructor chaining extends across classes via <code>super(...)</code>, ensuring parent fields are initialized before subclass initialization begins.</b>
        While <code>this</code> targets the current class scope, <code>super</code> explicitly targets the immediate parent class.
      </div>
      <div v-click class="tbl-stage">
        <div class="card tbl-box tbl-this">
          <div class="tbl-head">this Keyword</div>
          <div class="tbl-row"><span>Target Object:</span> <span>Current instance</span></div>
          <div class="tbl-row"><span>Field Access:</span> <span>this.variable</span></div>
          <div class="tbl-row"><span>Method Call:</span> <span>this.method()</span></div>
          <div class="tbl-row"><span>Constructor:</span> <span>this() [Same class peer]</span></div>
          <div class="tbl-row"><span>Context:</span> <span>Available in any class</span></div>
        </div>
        <div class="card tbl-box tbl-sup">
          <div class="tbl-head">super Keyword</div>
          <div class="tbl-row"><span>Target Object:</span> <span>Direct parent instance</span></div>
          <div class="tbl-row"><span>Field Access:</span> <span>super.variable</span></div>
          <div class="tbl-row"><span>Method Call:</span> <span>super.method()</span></div>
          <div class="tbl-row"><span>Constructor:</span> <span>super() [Parent class]</span></div>
          <div class="tbl-row"><span>Context:</span> <span>Only in subclasses (extends)</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Calling Parent Ctor</div>
          <pre class="x-code"><span class="ty">Car</span>(<span class="ty">String</span> b, <span class="ty">int</span> d) {
  <span class="kw">super</span>(b); <span class="cm">// calls Vehicle(b)</span>
  <span class="kw">this</span>.doors = d;
}</pre>
          <div class="x-note">Passes arguments to superclass constructor.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Hierarchy Chaining</div>
          <div class="x-note">Object creation cascades up to <code>Object</code>, then runs constructors downwards from top to bottom.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Mutual Exclusion</div>
          <div class="x-note">Both <code>super()</code> and <code>this()</code> demand the <b>first line</b> in a constructor body. Therefore, you cannot place both in one constructor!</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Default Fallback</div>
          <div class="x-note">If you write neither, Java inserts <code>super();</code> automatically. Ensure parent has a no-arg constructor!</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
