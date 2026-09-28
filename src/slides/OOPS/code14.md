<Code
  topic="Practice 14: No-Arg Constructor – Vehicle"
  description="<p>Write an explicit <strong>no-arg constructor</strong> that sets safe meaningful defaults, guaranteeing objects never start in an invalid state.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>Attributes of Vehicle:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String make, model</code></li><li><code>int year</code></li><li><code>double fuelCapacity</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>Constructor Rule:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li>Same name as class, no return type</li><li>Sets make=&quot;Generic&quot;, model=&quot;Standard&quot;</li><li>Sets year=2024, fuelCapacity=50.0</li><li>Auto-runs on <code>new Vehicle()</code></li></ul></div></div>"
  inputFormat="Instantiate Vehicle with no-arg constructor in <code>VehicleDemo.main()</code>."
  outputFormat="Vehicle specs confirming baseline defaults applied by constructor."
  :constraints="['Constructor name must exactly match class name', 'No return type on constructor', 'All four fields must be set to meaningful defaults']"
  :sampleCases="[
    {
      input: 'Vehicle v = new Vehicle();',
      output: '[Vehicle Born]: Baseline applied.\nMake: Generic | Model: Standard | Year: 2024 | Tank: 50.0 L',
      explanation: 'Constructors execute automatically on new, guaranteeing objects start in a valid state.'
    }
  ]"
/>
