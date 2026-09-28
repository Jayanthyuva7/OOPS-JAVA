<Code
  topic="Practice 22: Multilevel Inheritance – Device → Computer → Laptop"
  description="<p>Build a 3-tier chain where each level adds attributes, and the deepest child inherits everything from all ancestors.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Tier 1 & 2:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>Device</code>: brand, powerOn()/powerOff()</li><li><code>Computer extends Device</code>: ramGB, processor</li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Tier 3 (Laptop):</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>batteryHours, weightKg</code></li><li><code>sleep()</code>, <code>displaySpecs()</code></li></ul></div></div>"
  inputFormat="Instantiate Laptop and invoke methods from all three levels in <code>MultilevelDemo.main()</code>."
  outputFormat="Layered spec sheet accumulating Device, Computer, and Laptop properties."
  :constraints="['Create 3 classes in strict Device → Computer → Laptop chain', 'displaySpecs() must show fields from all three levels', 'Print a constructor message at each tier to show execution order']"
  :sampleCases="[
    {
      input: 'Laptop mac = new Laptop(&quot;Apple&quot;, 16, &quot;M3 Pro&quot;, 18, 1.6)',
      output: '[Device] Powering on Apple...\n[Computer] Boot M3 Pro 16GB\n[Laptop] Retina ready | Battery: 18h | Weight: 1.6 kg',
      explanation: 'Capabilities accumulate at each level of the multilevel inheritance chain.'
    }
  ]"
/>
