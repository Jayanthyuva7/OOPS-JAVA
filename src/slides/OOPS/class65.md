<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .acc-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .acc-box { border-radius:10px; padding:10px 14px; font-size:.72rem; }
  .acc-imp { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .acc-mat { background:#f5effb; border:1.5px solid #7b1fa2; color:#4a148c; }
  .acc-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .acc-row { display:flex; justify-content:space-between; padding:2.5px 0; border-bottom:1px dotted rgba(0,0,0,.08); font-size:.66rem; }
  .acc-row span:first-child { font-weight:700; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Importing Classes &amp; Access Control Across Packages">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>To use classes from another package, you import them or refer to them by their Fully Qualified Name.</b>
        Access modifiers determine precisely which classes, methods, and variables can be seen across package boundaries.
      </div>
      <div v-click class="acc-stage">
        <div class="card acc-box acc-imp">
          <div class="acc-head">&#128230; Import Syntax Forms</div>
          <div style="font-family:'Consolas',monospace; font-size:.64rem; line-height:1.5; margin-top:4px;">
            <b>Single Class:</b> <code>import java.util.ArrayList;</code><br />
            <b>Whole Package:</b> <code>import java.util.*;</code><br />
            <b>Static Members:</b> <code>import static java.lang.Math.PI;</code><br />
            <span style="color:#0d47a1; font-size:.6rem;"><i>Note: Static import lets you write <code>PI * r</code> directly without <code>Math.PI</code>.</i></span>
          </div>
        </div>
        <div class="card acc-box acc-mat">
          <div class="acc-head">&#128272; Cross-Package Access Matrix</div>
          <div class="acc-row"><span>public:</span> <span>&#10004; Accessible anywhere across all packages</span></div>
          <div class="acc-row"><span>protected:</span> <span>&#10004; Same package + Subclasses in other pkgs</span></div>
          <div class="acc-row"><span>default:</span> <span>&#10004; Same package ONLY (Package-Private)</span></div>
          <div class="acc-row"><span>private:</span> <span>&#10007; Same class only (Zero cross-package)</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Wildcard Myth</div>
          <div class="x-note"><code>import java.util.*</code> does NOT degrade runtime performance or load extra bytecode; it only assists the compiler.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Protected Nuance</div>
          <div class="x-note">Outside the package, <code>protected</code> members can only be accessed through inheritance (<code>extends</code>), not direct object reference.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Top-Level Classes</div>
          <div class="x-note">A top-level class can only be <code>public</code> or <code>default</code> (package-private); it cannot be <code>private</code> or <code>protected</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Name Collision Fix</div>
          <div class="x-note">If two packages contain the same class name (e.g. <code>Date</code>), you must reference at least one with its full FQN.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
