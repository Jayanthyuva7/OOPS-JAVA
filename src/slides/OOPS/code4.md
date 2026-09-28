<Code
  topic="Practice 4: Class Structure – Rectangle"
  description="<p>Apply proper class structure: define <code>private</code> fields, public getters/setters with validation, and utility methods inside a <code>Rectangle</code> class.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Private Fields:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>double length</code></li><li><code>double width</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>⚙️ Public Methods:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>setLength(double)</code> / <code>setWidth(double)</code> – validate &gt; 0</li><li><code>calculateArea()</code> → length × width</li><li><code>calculatePerimeter()</code> → 2×(l+w)</li><li><code>isSquare()</code> → boolean</li></ul></div></div>"
  inputFormat="Instantiate Rectangle with setters in <code>RectangleDemo.main()</code>."
  outputFormat="Area, perimeter and square-check printed for each object."
  :constraints="['Fields length and width must be private', 'Setters must reject values ≤ 0', 'Create at least 2 Rectangle objects']"
  :sampleCases="[
    {
      input: 'r1: length=12.0, width=8.0 | r2: length=5.0, width=5.0',
      output: '--- Rectangle 1 ---\nArea: 96.00 | Perimeter: 40.00 | Square: false\n--- Rectangle 2 ---\nArea: 25.00 | Perimeter: 20.00 | Square: true',
      explanation: 'Private fields with public accessor methods enforce class structure properly.'
    }
  ]"
/>
