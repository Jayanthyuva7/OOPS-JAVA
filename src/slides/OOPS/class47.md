<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .obj-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .obj-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .obj-root { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .obj-get { background:#f3e5f5; border:1.5px solid #7b1fa2; color:#4a148c; }
  .obj-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .obj-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="The Object Class &amp; getClass() Method">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b><code>java.lang.Object</code> is the ultimate ancestor and cosmic root of the entire Java class hierarchy.</b>
        Every class in Java automatically extends <code>Object</code> directly or indirectly. As a result, all Java objects inherit its 11 foundational methods.
      </div>
      <div v-click class="obj-stage">
        <div class="card obj-box obj-root">
          <div class="obj-head">&#127795; The Cosmic Root Superclass</div>
          <div class="obj-code"><span style="color:#6a9955;">// When you write:</span>&#10;<span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Student</span> { }&#10;&#10;<span style="color:#6a9955;">// Compiler automatically converts to:</span>&#10;<span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Student</span> <span style="color:#569cd6;">extends</span> <span style="color:#4ec9b0;">Object</span> { }</div>
        </div>
        <div class="card obj-box obj-get">
          <div class="obj-head">&#128269; The getClass() Method</div>
          <div class="obj-code"><span style="color:#4ec9b0;">Object</span> obj = <span style="color:#569cd6;">new</span> <span style="color:#4ec9b0;">Student</span>();&#10;<span style="color:#4ec9b0;">Class</span>&lt;?&gt; clazz = obj.getClass();&#10;&#10;System.out.println(clazz.getName());&#10;<span style="color:#81c784;">// Output: "Student" (Actual Heap type)</span></div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Ultimate Polymorphism</div>
          <div class="x-note">An <code>Object</code> reference can point to ANY instance in Java: primitives can even be auto-boxed into it.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. getClass() is final</div>
          <div class="x-note"><code>public final Class&lt;?&gt; getClass()</code> cannot be overridden; it always returns the true runtime class.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Reflection Gateway</div>
          <div class="x-note">The <code>Class</code> object returned by <code>getClass()</code> lets you inspect fields, methods, and annotations at runtime.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Type Equality Check</div>
          <div class="x-note"><code>a.getClass() == b.getClass()</code> checks exact class identity, unlike <code>instanceof</code> which allows subclasses.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
