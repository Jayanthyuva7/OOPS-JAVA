<Code
  topic="Practice 43: final Keyword – Secure BankConfig"
  description="<p>Enforce immutability and prevent accidental mutation using <code>final</code> on constants, blank final fields, and instance IDs.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Final Elements:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>public static final String BANK_CODE</code></li><li><code>public final String accountNumber</code> (blank final)</li><li><code>public final long creationTimestamp</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>⚙️ Blank Final Rule:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li>Declared but not initialised at field level</li><li>Must be set exactly once inside constructor</li><li>Any later reassignment = compile error</li></ul></div></div>"
  inputFormat="Instantiate BankAccount with blank final fields in <code>FinalDemo.main()</code>."
  outputFormat="Immutability audit confirming account number cannot be changed."
  :constraints="['Declare global constant with public static final', 'Declare blank final field initialised only in constructor', 'Demonstrate that reassignment causes compile error (comment out the line)']"
  :sampleCases="[
    {
      input: 'BankAccount acc = new BankAccount(&quot;ACC-889922&quot;)',
      output: 'Bank Code (Constant): HDFC_GLOBAL\nAccount Number (Blank Final): ACC-889922\nReassignment attempt → Compile Error (cannot assign value to final variable)',
      explanation: 'Blank final fields lock crucial identifiers for the entire lifetime of an object.'
    }
  ]"
/>
