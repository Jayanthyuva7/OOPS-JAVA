<Code
  topic="Practice 21: Inheritance – Vehicle & ElectricCar"
  description="<p>Apply the <code>extends</code> keyword so <code>ElectricCar</code> inherits common vehicle fields and adds specialised EV behaviour.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Vehicle (parent):</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String brand, double topSpeed</code></li><li><code>accelerate(double)</code>, <code>displayInfo()</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 ElectricCar (child):</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>int batteryKWh, rangeKm</code></li><li><code>chargeBattery(int percent)</code></li><li><code>displayEVDetails()</code></li></ul></div></div>"
  inputFormat="Instantiate ElectricCar and call both parent and child methods in <code>InheritanceDemo.main()</code>."
  outputFormat="Vehicle acceleration log + EV charge status."
  :constraints="['ElectricCar must extend Vehicle', 'Child can access all non-private parent members', 'A plain Vehicle reference cannot call chargeBattery()']"
  :sampleCases="[
    {
      input: 'ElectricCar c = new ElectricCar(&quot;Tesla Model 3&quot;, 225.0, 75, 450); c.accelerate(50); c.chargeBattery(25)',
      output: '[Vehicle] Tesla Model 3 accelerating to 50.0 km/h\n[ElectricCar] Battery +25%. Range: 450 km\nBrand: Tesla | TopSpeed: 225 | Battery: 75 kWh',
      explanation: 'Child objects blend superclass capabilities with subclass extensions seamlessly.'
    }
  ]"
/>
