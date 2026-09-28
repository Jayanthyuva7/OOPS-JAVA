<Code
  topic="Practice 48: toString() Override – Employee Record"
  description="<p>Override <code>toString()</code> inherited from <code>java.lang.Object</code> to replace cryptic memory addresses with readable field summaries.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Attributes:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>int empId</code></li><li><code>String empName, department</code></li><li><code>double salary</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>⚙️ Auto Invocation:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>System.out.println(emp)</code> calls toString()</li><li>String concat &quot;Emp: &quot; + emp also calls it</li></ul></div></div>"
  inputFormat="Pass EmployeeRecord object directly to System.out.println() in <code>ToStringDemo.main()</code>."
  outputFormat="Formatted string record showing all fields in readable brackets."
  :constraints="['Override public String toString() with @Override', 'Include all 4 fields in the returned string', 'Demo printing without calling .toString() explicitly']"
  :sampleCases="[
    {
      input: 'EmployeeRecord e = new EmployeeRecord(101,&quot;Sarah Jenkins&quot;,&quot;Engineering&quot;,95000.0); System.out.println(e)',
      output: 'EmployeeRecord[id=101, name=Sarah Jenkins, dept=Engineering, salary=$95000.00]',
      explanation: 'Overriding toString() transforms cryptic hashcodes into meaningful diagnostic text.'
    }
  ]"
/>
