<Code
  topic="Practice 54: Composition – Car & Engine"
  description="<p>Model strong <strong>Composition</strong>: the <code>Engine</code> is born inside <code>Car</code> and cannot exist independently — a death-relationship.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Engine (part):</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>int horsepower</code>, <code>String fuelType</code></li><li><code>ignite()</code>, <code>stop()</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Car (whole):</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String model</code>, <code>final Engine engine</code></li><li>Creates Engine inside its own constructor</li><li><code>startJourney()</code> delegates to <code>engine.ignite()</code></li></ul></div></div>"
  inputFormat="Instantiate Car in <code>CompositionDemo.main()</code> and trigger journey."
  outputFormat="Delegated execution log: Car → Engine method calls."
  :constraints="['Car must instantiate Engine inside its own constructor', 'Engine reference is private final within Car', 'Car delegates mechanical work through engine methods']"
  :sampleCases="[
    {
      input: 'Car mustang = new Car(&quot;Ford Mustang GT&quot;, 450, &quot;V8 Petrol&quot;); mustang.startJourney()',
      output: '[Car] Ford Mustang GT startup...\n[Engine] V8 Petrol ignited! 450 HP\n[Car] Ready to drive.',
      explanation: 'Composition provides tight lifecycle coupling — part cannot outlive its whole.'
    }
  ]"
/>
