<style>
  @keyframes slideDownIn { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideUpIn { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes scaleBounceIn { 0%{opacity:0;transform:scale(.7);} 60%{opacity:1;transform:scale(1.06);} 100%{opacity:1;transform:scale(1);} }
  .card:hover { transform: translateY(-6px) scale(1.025) rotate(-.4deg); cursor:pointer; box-shadow: 0 12px 24px rgba(179,83,31,.18), var(--shadow-md); transition: all .3s cubic-bezier(.2,.7,.2,1.3); }
  .x-wrap { display:flex; flex-direction:column; gap:12px; padding:4px 6px 8px 6px; }
  .x-def { background:#fff5f0; border:1px solid #fbc6a1; border-radius:10px; padding:10px 14px; font-size:.85rem; color:#1f2937; line-height:1.5; animation: slideDownIn .55s cubic-bezier(.2,.7,.2,1.1); }
  .x-def b { color:#b3531f; display:block; margin-bottom:4px; font-size:.92rem; font-weight:800; }
  .mul-stage { display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; padding:4px 0; animation: scaleBounceIn .55s cubic-bezier(.2,.7,.2,1.4); }
  .mul-box { border-radius:10px; padding:10px 12px; font-family:'Consolas',monospace; font-size:.68rem; display:flex; flex-direction:column; gap:4px; }
  .mul-11 { background:#e8f4fd; border:1.5px solid #1565c0; color:#0d47a1; }
  .mul-1n { background:#fff8e1; border:1.5px solid #f57f17; color:#e65100; }
  .mul-mn { background:#e8f5e9; border:1.5px solid #2e7d32; color:#1b5e20; }
  .mul-head { font-weight:800; font-size:.82rem; text-align:center; padding-bottom:3px; border-bottom:1px dashed currentColor; }
  .mul-code { background:#1e1e1e; color:#d4d4d4; border-radius:4px; padding:5px 6px; margin-top:2px; white-space:pre; line-height:1.35; font-size:.62rem; }
  .x-cards { display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; }
  .x-card { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; gap:6px; animation: slideUpIn .55s cubic-bezier(.2,.7,.2,1.3); }
  .x-card-head { color:#b3531f; font-weight:800; font-size:.82rem; }
  .x-note { font-size:.7rem; color:#6b7280; line-height:1.4; }
</style>
<script setup>
  import './style.css';
</script>
<Slide2 topic="Association Multiplicity: 1-to-1, 1-to-Many &amp; Many-to-Many">
  <template #content>
    <div class="x-wrap">
      <div v-click class="card x-def">
        <b>Multiplicity (Cardinality) describes how many instances of class A relate to instances of class B.</b>
        In Java, multiplicity is modeled using direct instance references for single entities and Collections for multiple entities.
      </div>
      <div v-click class="mul-stage">
        <div class="card mul-box mul-11">
          <div class="mul-head">1-to-1 (One to One)</div>
          <div>Each Person has 1 Passport</div>
          <div class="mul-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Person</span> {&#10;  <span style="color:#569cd6;">private</span> <span style="color:#4ec9b0;">Passport</span> passport;&#10;}</div>
        </div>
        <div class="card mul-box mul-1n">
          <div class="mul-head">1-to-Many (One to Many)</div>
          <div>1 Dept has Many Employees</div>
          <div class="mul-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Department</span> {&#10;  <span style="color:#569cd6;">private</span> <span style="color:#4ec9b0;">List</span>&lt;<span style="color:#4ec9b0;">Employee</span>&gt; staff;&#10;}</div>
        </div>
        <div class="card mul-box mul-mn">
          <div class="mul-head">Many-to-Many (M to N)</div>
          <div>Many Students in Many Courses</div>
          <div class="mul-code"><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">Student</span> {&#10;  <span style="color:#569cd6;">private</span> <span style="color:#4ec9b0;">Set</span>&lt;<span style="color:#4ec9b0;">Course</span>&gt; courses;&#10;}</div>
        </div>
      </div>
      <div class="x-cards">
        <div v-click class="card x-card">
          <div class="x-card-head">1. Collection Types</div>
          <div class="x-note">Use <code>List</code> when order matters or duplicates are allowed; use <code>Set</code> to enforce unique associations.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">2. Encapsulation Access</div>
          <div class="x-note">Expose collections as unmodifiable: <code>Collections.unmodifiableList(staff)</code> to prevent external tampering.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">3. Join Tables in DBs</div>
          <div class="x-note">In relational databases and JPA/Hibernate, Many-to-Many associations require an intermediate junction table.</div>
        </div>
        <div v-click class="card x-card">
          <div class="x-card-head">4. Memory Consideration</div>
          <div class="x-note">Avoid holding large unbounded collections in parent objects to prevent memory leaks and bloated heap consumption.</div>
        </div>
      </div>
    </div>
  </template>
</Slide2>
