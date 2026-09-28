<Code
  topic="Practice 16: Constructor Chaining – Patient Registration"
  description="<p>Eliminate duplicate initialisation code using <code>this(...)</code> to delegate from simpler constructors to the master constructor.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Patient Attributes:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>int patientId</code>, <code>String name</code></li><li><code>int age</code>, <code>String bloodGroup</code></li><li><code>boolean isAdmitted</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>⚙️ Chain: minimal → master:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>Patient(id,name)</code> → <code>this(id,name,0)</code></li><li><code>Patient(id,name,age)</code> → <code>this(id,name,age,&quot;O+&quot;,false)</code></li><li>Master sets all fields</li></ul></div></div>"
  inputFormat="Create patients using minimal, medium, and full constructors in <code>HospitalDemo.main()</code>."
  outputFormat="Uniform patient registry entries regardless of constructor used."
  :constraints="['this() must be the very first statement in each delegating constructor', 'Centralise all field assignments in the master constructor', 'Default age=0, bloodGroup=O+, isAdmitted=false']"
  :sampleCases="[
    {
      input: 'Patient(1,&quot;John&quot;); Patient(2,&quot;Sarah&quot;,35); Patient(3,&quot;Bruce&quot;,42,&quot;AB+&quot;,true)',
      output: 'ID:1 John     Age:0  Blood:O+  Admitted:false\nID:2 Sarah    Age:35 Blood:O+  Admitted:false\nID:3 Bruce    Age:42 Blood:AB+ Admitted:true',
      explanation: 'Constructor chaining routes all paths through a single master, following the DRY principle.'
    }
  ]"
/>
