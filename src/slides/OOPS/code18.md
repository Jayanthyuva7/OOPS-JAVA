<Code
  topic="Practice 18: this Keyword – Variable Shadowing in Point2D"
  description="<p>Resolve variable shadowing when constructor parameter names collide with instance field names using <code>this.field = param</code>.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Point2D Fields:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>double x</code> (instance)</li><li><code>double y</code> (instance)</li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>⚙️ Methods:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>Point2D(double x, double y)</code></li><li><code>setCoordinates(double x, double y)</code></li><li><code>distanceTo(Point2D other)</code></li><li><code>display()</code></li></ul></div></div>"
  inputFormat="Create Point2D instances with identical parameter names in <code>CoordinateDemo.main()</code>."
  outputFormat="Coordinate prints and Euclidean distance between two points."
  :constraints="['Use identical param names x and y in constructor and setter', 'Disambiguate using this.x and this.y', 'Distance = Math.sqrt(dx*dx + dy*dy)']"
  :sampleCases="[
    {
      input: 'p1=Point2D(3.0,4.0); p2=Point2D(0.0,0.0); p1.distanceTo(p2)',
      output: 'Point 1: (3.0, 4.0)\nPoint 2: (0.0, 0.0)\nDistance: 5.00',
      explanation: 'this.x explicitly targets the instance field, preventing parameter self-assignment.'
    }
  ]"
/>
