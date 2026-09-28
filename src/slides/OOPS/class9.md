<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .mem-stage { display:grid; grid-template-columns:1.1fr 1.9fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .mem-zone { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.74rem; }
  .mem-meta { background:#f5effb; border:1.5px solid #7b1fa2; color:#4a148c; }
  .mem-heap { background:#f0f9ff; border:1.5px solid #20588f; color:#0f3b66; }
  .mem-header { font-weight:800; font-size:.86rem; text-align:center; padding-bottom:4px; margin-bottom:6px; border-bottom:1px dashed currentColor; }
  .mem-shared { background:#fff; border:1px solid #ba68c8; border-radius:6px; padding:6px 10px; margin-top:4px; }
  .mem-objs { display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:4px; }
  .mem-subobj { background:#fff; border:1px solid #90caf9; border-radius:6px; padding:6px 10px; color:#1f2937; }

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

<Slide2 topic="Class Members: Static vs Instance Members">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Class members fall into two distinct domains: <i>instance members</i> (belonging to an individual object) and <i>static members</i> (belonging to the class as a whole).</b>
        Instance variables have a separate copy inside every object. Static variables exist as a single shared copy in Metaspace, common to all instances.
      </div>
      <div v-click class="mem-stage">
        <div class="card mem-zone mem-meta">
          <div class="mem-header">Metaspace / Class Area</div>
          <div style="font-size:.66rem; opacity:.85;">Loaded once when class is loaded:</div>
          <div class="mem-shared">
            <b>static String bankName = "SBI";</b><br />
            <span style="font-size:.68rem; color:#6a1b9a;">static int totalAccounts;</span>
          </div>
        </div>
        <div class="card mem-zone mem-heap">
          <div class="mem-header">Heap Memory (Per-Object Instances)</div>
          <div class="mem-objs">
            <div class="mem-subobj">
              <b style="color:#b3531f;">acc1 Object</b><br />
              accNo: 101<br />
              balance: 5000<br />
              <i style="font-size:.62rem; color:#718096;">links to SBI</i>
            </div>
            <div class="mem-subobj">
              <b style="color:#b3531f;">acc2 Object</b><br />
              accNo: 102<br />
              balance: 9200<br />
              <i style="font-size:.62rem; color:#718096;">links to SBI</i>
            </div>
          </div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">Instance Members</div>
          <div class="x-note">Created whenever an object is instantiated with <code>new</code>. Each object owns its own independent values.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Static Variables</div>
          <pre class="x-code"><span class="kw">static</span> <span class="ty">String</span> college = <span class="st">"MIT"</span>;</pre>
          <div class="x-note">Shared among all students. Modifying it updates the value visible to all instances.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Static Methods</div>
          <pre class="x-code"><span class="kw">static</span> <span class="kw">int</span> add(<span class="kw">int</span> a, <span class="kw">int</span> b) {
  <span class="kw">return</span> a + b;
}</pre>
          <div class="x-note">Invoked without creating an object. Cannot use <code>this</code> or access instance fields directly.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">Memory Efficiency</div>
          <div class="x-note">Use <code>static</code> for common constants and utility methods (like <code>Math.sqrt()</code>) to eliminate duplicate memory overhead.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
