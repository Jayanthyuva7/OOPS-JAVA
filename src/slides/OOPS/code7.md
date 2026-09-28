<Code
  topic="Practice 7: OOP Advantages – Employee Payroll"
  description="<p>Demonstrate <strong>modularity</strong>, <strong>reusability</strong>, and <strong>maintainability</strong> by building an <code>Employee</code> payroll class with separated responsibilities.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Attributes:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>int empId</code>, <code>String empName</code></li><li><code>double basicSalary</code></li><li><code>int performanceRating</code> (1–5)</li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>⚙️ Methods:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>calculateHRA()</code> → 20% of basic</li><li><code>calculateBonus()</code> → rating × 5% of basic</li><li><code>calculateTax()</code> → 10% of gross</li><li><code>generatePaySlip()</code></li></ul></div></div>"
  inputFormat="Instantiate employees with various ratings in <code>PayrollDemo.main()</code>."
  outputFormat="Itemised payslip: Basic, HRA, Bonus, Gross, Tax, Net Payable."
  :constraints="['Rating must be integer 1–5', 'HRA fixed at 20% of basic', 'Tax is 10% of gross (Basic+HRA+Bonus)']"
  :sampleCases="[
    {
      input: 'Emp 101 David, Basic $5000, Rating 4',
      output: 'Basic: $5000 | HRA: $1000 | Bonus: $1000\nGross: $7000 | Tax: $700 | Net: $6300',
      explanation: 'Modular methods cleanly separate each payroll concern for easy future maintenance.'
    }
  ]"
/>
