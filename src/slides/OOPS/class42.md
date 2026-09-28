<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .des-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .des-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .des-iface { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .des-abs { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .des-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .des-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Interface vs Abstract Class: Common Design Examples">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>In enterprise production architectures, interfaces and abstract classes work together in harmony rather than competition.</b>
        A standard software design pattern is to define a public API <i>Interface</i>, pair it with a skeletal <i>Abstract Class</i>, and create concrete subclasses.
      </div>
      <div v-click class="des-stage">
        <div class="card des-box des-iface">
          <div class="des-head">&#128179; Interface: PaymentGateway</div>
          <div class="des-code"><span style="color:#569cd6;">public interface</span> <span style="color:#4ec9b0;">PaymentGateway</span> {&#10;  <span style="color:#569cd6;">boolean</span> processPayment(<span style="color:#4ec9b0;">double</span> amt);&#10;  <span style="color:#569cd6;">void</span> refund(<span style="color:#4ec9b0;">String</span> txId);&#10;}&#10;<span style="color:#6a9955;">// Implemented by UpiPayment, Stripe, PayPal</span></div>
        </div>
        <div class="card des-box des-abs">
          <div class="des-head">&#127970; Abstract Class: BasePaymentService</div>
          <div class="des-code"><span style="color:#569cd6;">public abstract class</span> <span style="color:#4ec9b0;">BasePayment</span> <span style="color:#569cd6;">implements</span> <span style="color:#4ec9b0;">PaymentGateway</span> {&#10;  <span style="color:#569cd6;">protected</span> <span style="color:#4ec9b0;">String</span> merchantId;&#10;  <span style="color:#569cd6;">public</span> BasePayment(<span style="color:#4ec9b0;">String</span> id) { <span style="color:#569cd6;">this</span>.merchantId = id; }&#10;  <span style="color:#569cd6;">protected void</span> logTx(<span style="color:#4ec9b0;">String</span> msg) { ... }&#10;}</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. JDK Collections Pattern</div>
          <div class="x-note"><code>List</code> (interface) &rarr; <code>AbstractList</code> (skeletal implementation) &rarr; <code>ArrayList</code> (concrete class).</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Notification Engine</div>
          <div class="x-note">Interface <code>Notifier</code> with <code>send()</code>, implemented by <code>EmailNotifier</code>, <code>SmsNotifier</code>, and <code>SlackNotifier</code>.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Game Characters</div>
          <div class="x-note">Abstract class <code>Hero</code> holds health &amp; position; interfaces <code>SpellCaster</code> &amp; <code>Stealthable</code> grant capabilities.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Key Rule of Thumb</div>
          <div class="x-note">Program to interfaces for flexibility; use abstract classes to eliminate boilerplate code and share core state.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
