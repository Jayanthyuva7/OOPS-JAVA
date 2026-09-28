<Code
  topic="Practice 65: Access Modifiers – VaultData"
  description="<p>Map all four Java access levels to concrete fields and verify each boundary: within-class, within-package, subclass, and external access.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>Access Matrix:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>public</code> → everywhere</li><li><code>protected</code> → package + subclasses</li><li><code>default</code> → same package only</li><li><code>private</code> → inside class only</li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>Principle:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li>Default to <code>private</code>, widen only when needed</li><li>Public getter for private fields</li></ul></div></div>"
  inputFormat="Access VaultData members from within the same class and subclass in <code>AccessControlDemo.main()</code>."
  outputFormat="Audit log confirming which access levels succeed and which are blocked."
  :constraints="['Declare 4 fields with all 4 access modifiers', 'Provide public getter for private field', 'Demonstrate protected access inside an inheriting subclass']"
  :sampleCases="[
    {
      input: 'VaultData v = new VaultData(); v.displayAccessAudit()',
      output: '[public]    Accessible everywhere ✓\n[protected] Accessible in subclass ✓\n[default]   Same package only ✓\n[private]   Via getter only ✓ / Direct external access ✗',
      explanation: 'Access modifiers are compile-time guards enforcing architectural encapsulation boundaries.'
    }
  ]"
/>
