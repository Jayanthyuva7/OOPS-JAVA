<Code
  topic="Practice 36: Interfaces – Smart Appliances"
  description="<p>Define 100% abstract capability contracts using interfaces and implement multiple independently in <code>SmartAC</code>.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>Interfaces:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>Switchable</code>: turnOn(), turnOff()</li><li><code>Connectable</code>: connectWifi(String ssid)</li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>Implementing class:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>class SmartAC implements Switchable, Connectable</code></li><li>Implements all abstract methods</li></ul></div></div>"
  inputFormat="Instantiate SmartAC and invoke interface methods in <code>ApplianceDemo.main()</code>."
  outputFormat="Power and WiFi activation status messages."
  :constraints="['Define Switchable and Connectable as separate interfaces', 'SmartAC implements both', 'All interface methods are implicitly public and abstract']"
  :sampleCases="[
    {
      input: 'SmartAC ac(&quot;Living Room AC&quot;); ac.connectWifi(&quot;Home_5G&quot;); ac.turnOn()',
      output: '[WiFi] Living Room AC → SSID: Home_5G\n[Power] Living Room AC → ON (Cooling activated)',
      explanation: 'Interfaces let unrelated classes fulfil common contracts without inheritance coupling.'
    }
  ]"
/>
