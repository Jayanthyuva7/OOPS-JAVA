<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  @keyframes pulseGlow { 0%,100%{box-shadow:0 0 0 rgba(179,83,31,0);} 50%{box-shadow:0 0 20px rgba(179,83,31,.3);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .oop-stage { display:grid; grid-template-columns:1fr auto 1fr; gap:14px; align-items:center; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .oop-box { border-radius:12px; padding:10px 16px; font-family:'Consolas',monospace; }
  .oop-real { background:#f0f7ff; border:1.5px solid #20588f; color:#0f3b66; }
  .oop-soft { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; animation: pulseGlow 2.6s ease-in-out infinite; }
  .oop-title { font-weight:800; font-size:.88rem; text-align:center; padding-bottom:4px; margin-bottom:6px; border-bottom:1px dashed currentColor; }
  .oop-tag { font-size:.62rem; text-transform:uppercase; letter-spacing:.5px; font-weight:700; margin-top:4px; opacity:.85; }
  .oop-list { font-size:.74rem; line-height:1.45; }
  .oop-arrow-col { display:flex; flex-direction:column; align-items:center; gap:2px; color:#b3531f; font-weight:800; }
  .oop-arrow { font-size:1.6rem; }
  .oop-arrow-lbl { font-size:.62rem; text-transform:uppercase; letter-spacing:.5px; }

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

<Slide2 topic="Introduction to OOP &amp; Real-World Modeling">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Object-Oriented Programming (OOP) is a programming paradigm designed to model the digital world after real-world entities.</b>
        Instead of organizing software around isolated procedures and scattered global data, OOP bundles <i>state (attributes)</i> and <i>behavior (actions)</i> into cohesive units called <b>Objects</b>.
      </div>
      <div v-click class="oop-stage">
        <div class="card oop-box oop-real">
          <div class="oop-title">Real-World Entity: Smartphone</div>
          <div class="oop-tag">Physical Properties (State)</div>
          <div class="oop-list">&bull; Brand: "Apple" &middot; Model: "iPhone 15"<br />&bull; Battery: 85% &middot; Storage: 256GB</div>
          <div class="oop-tag">Actions (Behavior)</div>
          <div class="oop-list">&bull; makeCall() &middot; sendMessage() &middot; takePhoto()</div>
        </div>
        <div class="oop-arrow-col">
          <div class="oop-arrow">&rarr;</div>
          <div class="oop-arrow-lbl">Mapped into Code</div>
        </div>
        <div class="card oop-box oop-soft">
          <div class="oop-title">Java Software Object</div>
          <div class="oop-tag">Fields (Instance Variables)</div>
          <div class="oop-list">phone.brand = "Apple";<br />phone.battery = 85;</div>
          <div class="oop-tag">Methods (Functions)</div>
          <div class="oop-list">phone.makeCall("Alice");<br />phone.takePhoto();</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">What is OOP?</div>
          <div class="x-note">A paradigm centering software design around <b>data structures (objects)</b> rather than logic-only functions.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Why the Need for OOP?</div>
          <div class="x-note">Older procedural programs struggled with unrestricted global variables, high bug rates, and poor maintainability as systems grew.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Real-World Modeling</div>
          <div class="x-note">Humans naturally think in tangible nouns: Customers, Orders, Accounts. OOP translates these directly into software components.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Core Philosophy</div>
          <pre class="x-code"><span class="cm">// Data &amp; actions united</span>
<span class="kw">class</span> <span class="ty">Account</span> {
  <span class="ty">double</span> balance;
  <span class="kw">void</span> deposit(<span class="ty">double</span> amt) {
    balance += amt;
  }
}</pre>
          <div class="x-note">State and logic live inside the same boundary.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
