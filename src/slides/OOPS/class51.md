<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .th-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .th-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .th-wait { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .th-notif { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .th-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .th-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Object Class: wait(), notify(), and notifyAll()">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Java built its original concurrency engine directly into the <code>Object</code> class via monitor-lock primitives.</b>
        Threads communicate on shared objects: <code>wait()</code> relinquishes lock and sleeps, while <code>notify()</code> / <code>notifyAll()</code> wakes waiting threads.
      </div>
      <div v-click class="th-stage">
        <div class="card th-box th-wait">
          <div class="th-head">&#9208; Consumer: wait()</div>
          <div class="th-code"><span style="color:#569cd6;">synchronized</span> (lock) {&#10;  <span style="color:#569cd6;">while</span> (queue.isEmpty()) {&#10;    lock.wait(); <span style="color:#6a9955;">// Releases monitor &amp; waits!</span>&#10;  }&#10;  <span style="color:#4ec9b0;">Item</span> item = queue.poll();&#10;}</div>
        </div>
        <div class="card th-box th-notif">
          <div class="th-head">&#128276; Producer: notify() / notifyAll()</div>
          <div class="th-code"><span style="color:#569cd6;">synchronized</span> (lock) {&#10;  queue.add(newItem);&#10;  lock.notifyAll(); <span style="color:#81c784;">// Wakes ALL waiting threads!</span>&#10;  <span style="color:#6a9955;">// Releases lock only upon block exit</span>&#10;}</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Why in Object?</div>
          <div class="x-note">Monitor locks are attached to Heap <b>objects</b>, not threads. Threads acquire and release object-level monitors.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Synchronized Required</div>
          <div class="x-note">Calling <code>wait()</code> without holding the object monitor throws <code>IllegalMonitorStateException</code> immediately at runtime!</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Always in a Loop</div>
          <div class="x-note">Always check waiting conditions in a <code>while</code> loop (never <code>if</code>) to protect against spurious wakeups.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. notify vs notifyAll</div>
          <div class="x-note"><code>notify()</code> wakes one arbitrary thread; <code>notifyAll()</code> wakes all waiting threads to contest fairly for the lock.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
