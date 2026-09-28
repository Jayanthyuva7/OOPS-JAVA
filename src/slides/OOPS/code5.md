<Code
  topic="Practice 5: Real-World Modeling – BankAccount"
  description="<p>Model a real-world <code>BankAccount</code> with strict transaction rules, overdraft protection, and account statements.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Attributes:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String accountNumber, holderName</code></li><li><code>double balance</code></li><li><code>String accountType</code> (Savings/Current)</li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>⚙️ Methods:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>deposit(double)</code></li><li><code>withdraw(double)</code></li><li><code>transferTo(BankAccount, double)</code></li><li><code>displayStatement()</code></li></ul></div></div>"
  inputFormat="Instantiate 2 BankAccount objects and run transaction sequences in <code>BankDemo.main()</code>."
  outputFormat="Transaction logs showing success/failure alerts and final balances."
  :constraints="['Deposit must be > 0', 'Balance must never drop below 0.0', 'Transfer deducts only if sufficient balance exists']"
  :sampleCases="[
    {
      input: 'ACC-101 Alice $1000 → transfer $300 to ACC-102 Bob $500; Alice withdraws $900',
      output: 'Transfer $300: Success. Alice balance: $700\nWithdraw $900: Insufficient funds! Available: $700\nACC-101 Final: $700.00 | ACC-102 Final: $800.00',
      explanation: 'Business rules protect state integrity during individual and cross-object transactions.'
    }
  ]"
/>
