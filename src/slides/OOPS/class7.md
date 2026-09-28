<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .adv-grid { display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .adv-box { border-radius:10px; padding:12px 14px; text-align:center; display:flex; flex-direction:column; gap:4px; font-family:'Consolas',monospace; }
  .adv-1 { background:#eef7ee; border:1.5px solid #2e7d32; color:#1b5e20; }
  .adv-2 { background:#eef5fc; border:1.5px solid #1976d2; color:#0d47a1; }
  .adv-3 { background:#fbf0ea; border:1.5px solid #b3531f; color:#7a3a14; }
  .adv-4 { background:#f5eefa; border:1.5px solid #7b1fa2; color:#4a148c; }
  .adv-icon { font-size:1.4rem; font-weight:800; }
  .adv-title { font-weight:800; font-size:.86rem; }
  .adv-sub { font-size:.68rem; line-height:1.35; font-family:'Nunito',sans-serif; opacity:.9; }

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

<Slide2 topic="Advantages of OOP in Software Engineering">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>OOP powers enterprise industry systems by delivering modular, secure, reusable, and maintainable software architectures.</b>
        By breaking complex enterprise problems into standalone interacting components, teams can develop in parallel and build scalable software that lasts decades.
      </div>
      <div v-click class="adv-grid">
        <div class="card adv-box adv-1">
          <div class="adv-icon">&#9638;</div>
          <div class="adv-title">Modularity</div>
          <div class="adv-sub">Autonomous self-contained classes. Teams work on different classes without conflicts.</div>
        </div>
        <div class="card adv-box adv-2">
          <div class="adv-icon">&#8635;</div>
          <div class="adv-title">Reusability</div>
          <div class="adv-sub">Write once, extend everywhere through inheritance and composition. Eliminates duplicate code.</div>
        </div>
        <div class="card adv-box adv-3">
          <div class="adv-icon">&#128274;</div>
          <div class="adv-title">Data Security</div>
          <div class="adv-sub">Data hiding keeps critical fields private; prevents unauthorized external corruption.</div>
        </div>
        <div class="card adv-box adv-4">
          <div class="adv-icon">&#10004;</div>
          <div class="adv-title">Maintainability</div>
          <div class="adv-sub">Bugs are localized to individual objects. Modifying one class doesn't break external code.</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Modularity in Action</div>
          <div class="x-note">Each class manages its own dependencies. A payment module can be refactored without altering the shopping cart module.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Code Reusability</div>
          <pre class="x-code"><span class="kw">class</span> <span class="ty">SavingsAccount</span> <span class="kw">extends</span> <span class="ty">Account</span> {
  <span class="ty">double</span> interestRate;
  <span class="cm">// inherits deposit(), balance</span>
}</pre>
          <div class="x-note">Reuse proven code without rewriting from scratch.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Data Protection</div>
          <div class="x-note">Fields can be marked <code>private</code> so they cannot be tampered with directly, guaranteeing system integrity and validation.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. High Productivity</div>
          <div class="x-note">Standardized OOP libraries and patterns (design patterns, frameworks) drastically accelerate software delivery cycles.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
