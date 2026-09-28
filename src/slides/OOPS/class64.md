<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .cp-stage { display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .cp-box { border-radius:10px; padding:10px 14px; font-family:'Consolas',monospace; font-size:.72rem; }
  .cp-src { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .cp-cmd { background:#212121; border:1.5px solid #616161; color:#eeeeee; }
  .cp-head { font-weight:800; font-size:.84rem; text-align:center; padding-bottom:3px; margin-bottom:4px; border-bottom:1px dashed currentColor; }
  .cp-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:6px 8px; margin-top:4px; white-space:pre; line-height:1.4; font-size:.64rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Creating Packages, Naming Rules &amp; Compilation">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>To create a user-defined package, use the <code>package</code> keyword as the very first statement in your Java file.</b>
        Industry standard dictates using your organization's reversed domain name to guarantee global namespace uniqueness.
      </div>
      <div v-click class="cp-stage">
        <div class="card cp-box cp-src">
          <div class="cp-head">&#128196; User-Defined Package Source</div>
          <div class="cp-code"><span style="color:#6a9955;">// Must be the first statement:</span>&#10;<span style="color:#569cd6;">package</span> com.acme.banking.service;&#10;&#10;<span style="color:#569cd6;">public class</span> <span style="color:#4ec9b0;">AccountService</span> {&#10;  <span style="color:#569cd6;">public void</span> openAccount() { ... }&#10;}</div>
        </div>
        <div class="card cp-box cp-cmd">
          <div class="cp-head" style="color:#81c784;">&#128187; Terminal Compilation &amp; Run</div>
          <div class="cp-code" style="background:#111;"><span style="color:#6a9955;"># Compile and auto-generate folder tree:</span>&#10;javac -d ./bin AccountService.java&#10;&#10;<span style="color:#6a9955;"># Run using Fully Qualified Class Name:</span>&#10;java -cp ./bin com.acme.banking.service.AccountService</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Reversed Domain</div>
          <div class="x-note">Convention: <code>com.google.cloud</code> or <code>org.apache.commons</code> ensures worldwide naming uniqueness.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. All Lowercase</div>
          <div class="x-note">Package names must always be written in lowercase to prevent conflicts with file systems that are case-insensitive.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. -d Flag in javac</div>
          <div class="x-note">The <code>-d</code> compiler flag instructs <code>javac</code> to create the required directory path hierarchy automatically.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Default Package</div>
          <div class="x-note">Files without a <code>package</code> statement reside in the "unnamed/default package" (not recommended for production).</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
