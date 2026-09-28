<Code
  topic="Practice 41: Multiple Interface Inheritance – HybridCar"
  description="<p>Java forbids multi-class inheritance but freely allows a class to implement multiple interfaces — build a dual-powertrain <code>HybridCar</code>.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>Dual Interfaces:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>ElectricVehicle</code>: charge(int kw), getBatteryLevel()</li><li><code>PetrolVehicle</code>: refuel(double L), getFuelLevel()</li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>HybridCar:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li>Implements both interfaces</li><li>Combined range = electric + petrol</li></ul></div></div>"
  inputFormat="Create Toyota Prius, charge battery, add petrol, display combined range in <code>HybridDemo.main()</code>."
  outputFormat="Battery %, fuel level, and computed total driving range."
  :constraints="['HybridCar implements ElectricVehicle and PetrolVehicle', 'Electric range = battery% × 5 km', 'Petrol range = liters × 18 km']"
  :sampleCases="[
    {
      input: 'HybridCar prius(&quot;Toyota Prius&quot;); prius.charge(80); prius.refuel(30.0)',
      output: 'Battery: 80% → Electric Range: 400 km\nFuel: 30 L → Petrol Range: 540 km\nCombined Range: 940 km',
      explanation: 'Interface-based multi-inheritance sidesteps the diamond problem with no ambiguity.'
    }
  ]"
/>
