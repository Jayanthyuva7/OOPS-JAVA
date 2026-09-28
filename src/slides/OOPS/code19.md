<Code
  topic="Practice 19: this Keyword – Method Coordination in Thermostat"
  description="<p>Use <code>this.method()</code> inside setters to trigger automatic internal recalculation and event logging.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>Thermostat Attributes:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String roomName</code></li><li><code>double currentTemp, targetTemp</code></li><li><code>String mode</code> (Heating/Cooling/Idle)</li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>Internal Coordination:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>setTarget()</code> calls <code>this.evaluateMode()</code></li><li><code>evaluateMode()</code> updates mode</li><li><code>logEvent(String)</code> records transitions</li></ul></div></div>"
  inputFormat="Set temperatures and watch internal mode transitions in <code>ThermostatDemo.main()</code>."
  outputFormat="Event log showing automatic mode changes triggered by internal method calls."
  :constraints="['setTarget must call this.evaluateMode() as first action', 'target > current+1 → HEATING; target < current-1 → COOLING; else IDLE', 'All transitions logged via this.logEvent()']"
  :sampleCases="[
    {
      input: 'Thermostat t(&quot;Living Room&quot;, 20.0); t.setTarget(25.0); t.setCurrent(25.0)',
      output: '[Living Room] Target→25.0°C | Mode→HEATING (20→25)\n[Living Room] Current→25.0°C | Mode→IDLE (Target Achieved)',
      explanation: 'this.method() keeps public setters tidy by delegating derived state computation internally.'
    }
  ]"
/>
