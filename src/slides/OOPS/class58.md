<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .nest-stage { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .nest-box { border-radius:10px; padding:8px 10px; font-size:.68rem; display:flex; flex-direction:column; gap:3px; text-align:center; }
  .nest-st { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .nest-mb { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .nest-lc { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .nest-an { background:#f3e5f5; border:1.5px solid #7b1fa2; color:#4a148c; }
  .nest-head { font-weight:800; font-size:.78rem; padding-bottom:3px; border-bottom:1px dashed currentColor; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Nested Classes Overview: Taxonomy &amp; Architecture">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Java allows defining a class within another class — known as a Nested Class.</b>
        Nested classes enable logical grouping of helper classes, increase encapsulation, and produce cleaner, more readable code.
      </div>
      <div v-click class="nest-stage">
        <div class="card nest-box nest-st">
          <div class="nest-head">1. Static Nested</div>
          <div>Declared with <code>static</code></div>
          <div>No outer instance required</div>
          <div>Behaves like top-level class</div>
        </div>
        <div class="card nest-box nest-mb">
          <div class="nest-head">2. Member Inner</div>
          <div>Non-static class at member level</div>
          <div>Bound to outer instance</div>
          <div>Direct access to outer fields</div>
        </div>
        <div class="card nest-box nest-lc">
          <div class="nest-head">3. Local Inner</div>
          <div>Defined inside a method body</div>
          <div>Scope limited to method block</div>
          <div>Captures final local vars</div>
        </div>
        <div class="card nest-box nest-an">
          <div class="nest-head">4. Anonymous Inner</div>
          <div>Defined &amp; created on-the-fly</div>
          <div>No class name</div>
          <div>Used for quick callbacks</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Bytecode Output</div>
          <div class="x-note">Java compiler generates separate <code>.class</code> files: <code>Outer$Inner.class</code> for each nested class.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Encapsulation Boost</div>
          <div class="x-note">Inner classes can access <code>private</code> members of the outer class, which outside classes cannot touch.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Logical Grouping</div>
          <div class="x-note">If class B is only useful to class A, embedding B inside A keeps the package namespace tidy.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Memory Consideration</div>
          <div class="x-note">Non-static inner classes hold a hidden reference to outer instance; can cause memory leaks if improperly retained.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
