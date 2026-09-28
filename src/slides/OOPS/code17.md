<Code
  topic="Practice 17: Inheritance & super() – Person → Teacher"
  description="<p>Initialise a parent class from a child constructor using <code>super(...)</code> and observe the strict top-down construction order.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Person (parent):</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String name, int age</code></li><li><code>Person(String name, int age)</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Teacher (child):</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String subject, double salary</code></li><li>First line: <code>super(name, age)</code></li></ul></div></div>"
  inputFormat="Instantiate Teacher objects in <code>InheritanceDemo.main()</code>."
  outputFormat="Teacher profile combining inherited Person fields with Teacher extras."
  :constraints="['Teacher must extend Person', 'super(name,age) must be the first statement in Teacher constructor', 'Print a message inside each constructor to prove execution order']"
  :sampleCases="[
    {
      input: 'new Teacher(&quot;Dr. Sharma&quot;, 45, &quot;Computer Science&quot;, 75000.0)',
      output: '[Person Constructor]: name=Dr. Sharma age=45\n[Teacher Constructor]: subject=CS salary=$75000\nName: Dr. Sharma | Age: 45 | Subject: CS | Salary: $75,000',
      explanation: 'Java forces superclass construction to complete before any subclass code runs.'
    }
  ]"
/>
