<Code
  topic="Practice 24: super Keyword – Employee & Manager"
  description="<p>Access hidden parent variables with <code>super.field</code> and reuse overridden parent logic with <code>super.method()</code>.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Employee (parent):</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>double baseSalary</code></li><li><code>printCompensation()</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Manager (child):</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>double bonus</code></li><li>Overrides printCompensation()</li><li>Calls <code>super.printCompensation()</code></li></ul></div></div>"
  inputFormat="Instantiate Manager and call overridden method in <code>SuperDemo.main()</code>."
  outputFormat="Itemised compensation: base from parent, bonus from child, combined total."
  :constraints="['Manager must override printCompensation()', 'Delegated call to super.printCompensation() is mandatory', 'Total = super.baseSalary + this.bonus']"
  :sampleCases="[
    {
      input: 'Manager mgr = new Manager(&quot;Alice&quot;, 50000.0, 20000.0); mgr.printCompensation()',
      output: '[Base Employee] Base Salary: $50,000\n[Manager Bonus] Bonus: $20,000\n[Total] $70,000',
      explanation: 'super.method() reuses parent logic, avoiding redundant duplication in the child class.'
    }
  ]"
/>
