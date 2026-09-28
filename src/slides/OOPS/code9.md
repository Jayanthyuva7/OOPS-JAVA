<Code
  topic="Practice 9: Static vs Instance – Student Counter"
  description="<p>Master <code>static</code> shared class memory vs per-object instance memory using a university enrolment counter.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>Static vs Instance:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>static String university</code> – shared</li><li><code>static int totalEnrolled</code> – shared counter</li><li><code>int rollNumber</code> – unique per object</li><li><code>String studentName</code> – unique per object</li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>Methods:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>static setUniversity(String)</code></li><li><code>static getTotalCount()</code></li><li><code>displayIDCard()</code></li></ul></div></div>"
  inputFormat="Instantiate 3 students, change university via static call in <code>UniversityDemo.main()</code>."
  outputFormat="ID cards with auto-incremented rolls, then re-printed after university rename."
  :constraints="['totalEnrolled must be static, incremented in constructor', 'rollNumber auto-assigned from totalEnrolled', 'Changing university via static method affects all instances']"
  :sampleCases="[
    {
      input: 'Create Emma, Liam → Change university to MIT → Print ID cards',
      output: 'Roll:1 Emma | Stanford  →  Roll:1 Emma | MIT\nRoll:2 Liam | Stanford  →  Roll:2 Liam | MIT\nTotal enrolled: 2',
      explanation: 'Static fields live in class memory; changing one field updates the view across all instances.'
    }
  ]"
/>
