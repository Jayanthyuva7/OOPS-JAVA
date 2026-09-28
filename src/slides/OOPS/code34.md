<Code
  topic="Practice 34: Abstract Class – Shape Geometry"
  description="<p>Declare an <code>abstract class Shape</code> with abstract geometric contracts and enforce implementation across all subclasses.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>Abstract Shape:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String color</code></li><li><code>abstract double calculateArea()</code></li><li><code>abstract double calculatePerimeter()</code></li><li>Concrete <code>displayColor()</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>Concrete Subclasses:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>Circle</code>: radius</li><li><code>Triangle</code>: base, height, sides</li></ul></div></div>"
  inputFormat="Instantiate Circle and Triangle in <code>ShapeDemo.main()</code>."
  outputFormat="Geometric results with area, perimeter, and inherited color."
  :constraints="['Shape must be declared abstract', 'Circle and Triangle must override both abstract methods', 'Demonstrate you cannot do new Shape()']"
  :sampleCases="[
    {
      input: 'Circle(Red,7.0); Triangle(Blue,6.0,8.0,10.0)',
      output: '--- Circle [Red] ---\nArea: 153.94 | Perimeter: 43.98\n--- Triangle [Blue] ---\nArea: 24.00 | Perimeter: 24.0',
      explanation: 'Abstract classes combine concrete shared code with abstract contracts enforced on subclasses.'
    }
  ]"
/>
