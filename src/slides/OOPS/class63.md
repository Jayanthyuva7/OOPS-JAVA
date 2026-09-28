<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .pkg-stage { display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .pkg-box { border-radius:10px; padding:10px 12px; font-size:.7rem; display:flex; flex-direction:column; gap:4px; }
  .pkg-org { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .pkg-col { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .pkg-acc { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .pkg-head { font-weight:800; font-size:.82rem; text-align:center; padding-bottom:3px; border-bottom:1px dashed currentColor; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Java Packages: Concepts, Purpose &amp; Directory Mapping">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>A Package in Java is a namespace that groups related classes, interfaces, and subpackages into organized modules.</b>
        Packages prevent class name collisions, provide controlled access mechanisms, and map directly to the operating system file directory hierarchy.
      </div>
      <div v-click class="pkg-stage">
        <div class="card pkg-box pkg-org">
          <div class="pkg-head">&#128193; 1. Logical Organization</div>
          <div>&#8226; Groups thousands of classes into functional domains</div>
          <div>&#8226; Enables modular development &amp; enterprise structure</div>
          <div>&#8226; Examples: <code>java.util</code>, <code>java.io</code></div>
        </div>
        <div class="card pkg-box pkg-col">
          <div class="pkg-head">&#128165; 2. Collision Prevention</div>
          <div>&#8226; Solves naming conflicts between libraries</div>
          <div>&#8226; <code>java.util.Date</code> vs <code>java.sql.Date</code></div>
          <div>&#8226; Both coexist cleanly in the same JVM</div>
        </div>
        <div class="card pkg-box pkg-acc">
          <div class="pkg-head">&#128274; 3. Access Protection</div>
          <div>&#8226; Default (package-private) visibility</div>
          <div>&#8226; Protected members accessible within package</div>
          <div>&#8226; Keeps internal utilities hidden from users</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Directory Mirroring</div>
          <div class="x-note"><code>package com.app.auth;</code> must physically reside in the folder path <code>com/app/auth/</code> on disk.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. java.lang Auto-Import</div>
          <div class="x-note"><code>java.lang</code> (containing <code>String</code>, <code>System</code>, <code>Object</code>, <code>Math</code>) is automatically imported into every Java file.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Flat Namespace</div>
          <div class="x-note">Subpackages are conceptually flat: importing <code>java.util.*</code> does NOT import classes inside <code>java.util.concurrent.*</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Fully Qualified Names</div>
          <div class="x-note">Any class can be referenced without import using its FQN: <code>java.time.LocalDate.now()</code> directly in code.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
