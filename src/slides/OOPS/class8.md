<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  @keyframes msgFlow { 0%,100%{transform:translateX(0);opacity:.85;} 50%{transform:translateX(8px);opacity:1;} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  
  .msg-stage { display:grid; grid-template-columns:1fr auto 1fr; gap:14px; align-items:center; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .msg-box { border-radius:10px; padding:10px 16px; font-family:'Consolas',monospace; font-size:.75rem; }
  .msg-sender { background:#e8f4fd; border:1.5px solid #20588f; color:#0f3b66; text-align:center; }
  .msg-receiver { background:#fff5f0; border:1.5px solid #b3531f; color:#7a3a14; text-align:center; }
  .msg-title { font-weight:800; font-size:.86rem; margin-bottom:4px; border-bottom:1px dashed currentColor; padding-bottom:3px; }
  .msg-pipe { display:flex; flex-direction:column; align-items:center; gap:2px; color:#b3531f; font-family:'Consolas',monospace; }
  .msg-arrow { font-size:1.6rem; font-weight:800; animation: msgFlow 1.5s ease-in-out infinite; }
  .msg-pill { background:#b3531f; color:#fff; font-size:.64rem; font-weight:700; padding:2px 10px; border-radius:999px; letter-spacing:.3px; }

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

<Slide2 topic="Messages &amp; Methods: How Objects Communicate">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>In OOP, computation happens when objects communicate by sending and receiving messages &mdash; realized in Java as method calls.</b>
        An object does not touch another object's internal fields directly. Instead, it sends a request (message) specifying the desired operation, and the receiver executes its corresponding method.
      </div>
      <div v-click class="msg-stage">
        <div class="card msg-box msg-sender">
          <div class="msg-title">Sender Object</div>
          <div><b>alice:</b> Customer</div>
          <div style="font-size:.68rem; margin-top:4px; opacity:.85;">Initiates request</div>
        </div>
        <div class="msg-pipe">
          <div class="msg-pill">order.checkout(paymentDetails)</div>
          <div class="msg-arrow">&rarr;</div>
          <div style="font-size:.62rem; font-weight:800;">[ MESSAGE PASSED ]</div>
        </div>
        <div class="card msg-box msg-receiver">
          <div class="msg-title">Receiver Object</div>
          <div><b>order:</b> OrderService</div>
          <div style="font-size:.68rem; margin-top:4px; opacity:.85;">Executes checkout() &amp; returns Receipt</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. What is a Message?</div>
          <div class="x-note">A transmission from a sender requesting a receiver to execute an action. In Java, writing <code>obj.doWork()</code> is sending a message.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Anatomy of a Message</div>
          <div class="x-note">Consists of three parts: (1) <b>Destination reference</b> (<code>order</code>), (2) <b>Method name</b> (<code>pay</code>), and (3) <b>Arguments</b> (<code>500.0</code>).</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Encapsulated Execution</div>
          <div class="x-note">The sender does not need to know <i>how</i> the receiver works internally &mdash; only what method name and parameters to supply.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Code Example</div>
          <pre class="x-code"><span class="ty">Printer</span> p = <span class="kw">new</span> <span class="ty">Printer</span>();
<span class="cm">// Sending message:</span>
<span class="ty">boolean</span> done = p.print(<span class="st">"Doc.pdf"</span>);</pre>
          <div class="x-note"><code>p</code> receives message, prints, and replies.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
