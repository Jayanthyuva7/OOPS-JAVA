<Code
  topic="Practice 59: Member Inner Class – Bank & Account"
  description="<p>Create a non-static inner class that directly reads <code>private</code> fields of its enclosing outer class — no getter needed.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Outer (Bank):</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String bankName</code></li><li><code>private String vaultCode = &quot;VAULT_9901&quot;</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Inner (Account):</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String accNumber, double balance</code></li><li>Reads outer <code>vaultCode</code> directly</li><li><code>verifyVaultAccess()</code></li></ul></div></div>"
  inputFormat="Instantiate Bank then inner Account using bank.new Account() in <code>InnerClassDemo.main()</code>."
  outputFormat="Verification log confirming inner class reads enclosing private fields."
  :constraints="['Outer class must have at least one private field', 'Inner class reads that private field without any getter', 'Use outerInstance.new InnerClass() syntax']"
  :sampleCases="[
    {
      input: 'Bank b = new Bank(&quot;Global Swiss Bank&quot;); Bank.Account acc = b.new Account(&quot;ACC-101&quot;,50000); acc.verifyVaultAccess()',
      output: '[Account ACC-101] Bank: Global Swiss Bank\n[Security] Vault Key [VAULT_9901] → Access GRANTED',
      explanation: 'Inner class instances carry an implicit reference to their enclosing outer instance.'
    }
  ]"
/>
