<Code
  topic="Practice 61: Anonymous Inner Class – StringFormatter"
  description="<p>Implement an interface on-the-fly using anonymous inner class syntax — no separate file, no named class, defined and instantiated in one step.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>Target Interface:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>interface StringFormatter</code></li><li><code>String format(String text)</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>Syntax:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>new StringFormatter() { public String format(String t){ ... } }</code></li></ul></div></div>"
  inputFormat="Create 2 anonymous implementations in <code>AnonymousDemo.main()</code>."
  outputFormat="Transformed text showing execution of each anonymous method body."
  :constraints="['Define single-method interface StringFormatter', 'Instantiate using new InterfaceName(){ ... } syntax', 'Demonstrate at least 2 distinct anonymous implementations']"
  :sampleCases="[
    {
      input: 'Input: &quot;Hello Object Oriented Programming in Java&quot;',
      output: 'Strategy 1 (Uppercase): HELLO OBJECT ORIENTED PROGRAMMING IN JAVA\nStrategy 2 (Slug):      hello-object-oriented-programming-in-java',
      explanation: 'Anonymous inner classes provide instant localised implementations without cluttering the project.'
    }
  ]"
/>
