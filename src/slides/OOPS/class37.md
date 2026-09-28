<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .evo-stage { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .evo-card { border-radius:10px; padding:8px 10px; font-family:'Consolas',monospace; font-size:.7rem; text-align:center; display:flex; flex-direction:column; gap:4px; }
  .evo-var { background:#f5effb; border:1.5px solid #7b1fa2; color:#4a148c; }
  .evo-abs { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; }
  .evo-def { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .evo-pri { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; }
  .evo-head { font-weight:800; font-size:.78rem; padding-bottom:3px; border-bottom:1px dashed currentColor; }
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
<Slide2 topic="Interface Variables &amp; Modern Method Evolution">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Modern Java has dramatically transformed interfaces from pure abstract contracts into powerful, flexible API building blocks.</b>
        In addition to public static final constants and abstract methods, interfaces now support <code>default</code> methods (Java 8), <code>static</code> methods (Java 8), and <code>private</code> helper methods (Java 9).
      </div>
      <div v-click class="evo-stage">
        <div class="card evo-card evo-var">
          <div class="evo-head">1. Variables</div>
          <div>Implicitly:</div>
          <div><b>public static final</b></div>
          <div style="font-size:.62rem; opacity:.85;">int MAX_SPEED = 120;</div>
        </div>
        <div class="card evo-card evo-abs">
          <div class="evo-head">2. Abstract</div>
          <div>Traditional:</div>
          <div><b>public abstract</b></div>
          <div style="font-size:.62rem; opacity:.85;">void execute();</div>
        </div>
        <div class="card evo-card evo-def">
          <div class="evo-head">3. Default (Java 8)</div>
          <div>With body:</div>
          <div><b>default void log()</b></div>
          <div style="font-size:.62rem; opacity:.85;">Backward compatible</div>
        </div>
        <div class="card evo-card evo-pri">
          <div class="evo-head">4. Private (Java 9)</div>
          <div>Internal helper:</div>
          <div><b>private void helper()</b></div>
          <div style="font-size:.62rem; opacity:.85;">Encapsulated sharing</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Interface Variables</div>
          <div class="x-note">Always constant. You cannot declare instance variables in an interface; all fields are compile-time static constants.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Default Methods</div>
          <div class="x-code"><span class="kw">default void</span> print() {&#10;  System.out.println(<span class="st">"Default"</span>);&#10;}</div>
          <div class="x-note">Allows updating interfaces without breaking existing classes.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Static Interface Methods</div>
          <div class="x-code"><span class="kw">static int</span> square(<span class="kw">int</span> x) {&#10;  <span class="kw">return</span> x * x;&#10;}</div>
          <div class="x-note">Utility methods accessed via <code>InterfaceName.square()</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Private Methods (Java 9)</div>
          <div class="x-note">Enables code reuse between multiple <code>default</code> methods while keeping implementation details hidden from implementing classes.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
