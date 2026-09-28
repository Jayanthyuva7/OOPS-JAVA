<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .sb-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .sb-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .sb-blk { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .sb-seq { background:#f5effb; border:1.5px solid #7b1fa2; color:#4a148c; }
  .sb-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .sb-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Static Blocks &amp; Class Initialization Sequence">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>A static block is a block of code marked with <code>static</code> that executes once when the class is loaded by JVM.</b>
        It runs before the <code>main()</code> method executes and before any constructor is called, making it ideal for complex static variable initialization.
      </div>
      <div v-click class="sb-stage">
        <div class="card sb-box sb-blk">
          <div class="sb-head">&#9881; Static Block Syntax</div>
          <div class="sb-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">DatabaseConfig</span> {&#10;  <span style="color:#569cd6;">static</span> <span style="color:#4ec9b0;">Map</span>&lt;<span style="color:#4ec9b0;">String</span>, <span style="color:#4ec9b0;">String</span>&gt; configs;&#10;  <span style="color:#569cd6;">static</span> {&#10;    configs = <span style="color:#569cd6;">new</span> <span style="color:#4ec9b0;">HashMap</span>&lt;&gt;();&#10;    configs.put(<span style="color:#ce9178;">"url"</span>, <span style="color:#ce9178;">"jdbc:mysql://localhost"</span>);&#10;    System.out.println(<span style="color:#81c784;">"Static block loaded!"</span>);&#10;  }&#10;}</div>
        </div>
        <div class="card sb-box sb-seq">
          <div class="sb-head">&#128392; Execution Lifecycle Order</div>
          <div style="font-size:.66rem; line-height:1.6; margin-top:4px;">
            <b>1. Static Initializers:</b> (Class load time)<br />
            &nbsp;&nbsp;&rArr; Superclass static blocks &rarr; Subclass static blocks<br />
            <b>2. Instance Initializers:</b> (Object creation)<br />
            &nbsp;&nbsp;&rArr; Instance variables &amp; instance init blocks <code>{ }</code><br />
            <b>3. Constructors:</b> (Object completion)<br />
            &nbsp;&nbsp;&rArr; Superclass constructor &rarr; Subclass constructor
          </div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Executes Exactly Once</div>
          <div class="x-note">Whether you instantiate 0, 1, or 10,000 objects, the static block runs strictly once per ClassLoader lifecycle.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Top-to-Bottom Order</div>
          <div class="x-note">If a class declares multiple static blocks, they execute sequentially in the exact order they appear in code.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Exception In Initializer</div>
          <div class="x-note">An unhandled runtime exception inside a static block throws <code>ExceptionInInitializerError</code>, crashing class loading.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Driver Loading</div>
          <div class="x-note">Classic JDBC: <code>Class.forName("com.mysql.cj.jdbc.Driver")</code> forces driver static block to register with DriverManager.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
