<Code
  topic="Practice 49: equals() & hashCode() – ProductKey"
  description="<p>Distinguish reference equality (<code>==</code>) from logical equality (<code>equals()</code>) and maintain the golden <code>equals/hashCode</code> contract.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 ProductKey Fields:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String productCode</code></li><li><code>int licenseTier</code></li><li><code>String clientEmail</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>⚙️ Contract:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li>If a.equals(b) then a.hashCode() == b.hashCode()</li><li>Use Objects.hash() for hashCode</li></ul></div></div>"
  inputFormat="Compare twin ProductKey objects in <code>EqualityDemo.main()</code>."
  outputFormat="Results for ==, equals(), and hashCode parity checks."
  :constraints="['Override boolean equals(Object) with null + getClass() checks', 'Override int hashCode() using Objects.hash()', 'Verify equal objects produce identical hash codes']"
  :sampleCases="[
    {
      input: 'ProductKey k1(&quot;WIN-PRO&quot;,1,&quot;admin@corp.com&quot;); ProductKey k2(&quot;WIN-PRO&quot;,1,&quot;admin@corp.com&quot;)',
      output: 'k1 == k2 : false (different heap addresses)\nk1.equals(k2) : true  (identical field data)\nhashCode parity: true (contract preserved)',
      explanation: 'Overriding both ensures correct behaviour inside HashMap, HashSet, and other hash-based collections.'
    }
  ]"
/>
