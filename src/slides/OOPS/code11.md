<Code
  topic="Practice 11: Memory – Box Aliasing & Heap"
  description="<p>Investigate heap allocation: prove that two references pointing to the same object share state, while <code>new</code> creates a distinct heap block.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>Class Box:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>double length, width, height</code></li><li><code>setDimensions(double,double,double)</code></li><li><code>calculateVolume()</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>Test Scenarios:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li>b1 = new Box(2,3,4) → b2 = b1 (alias)</li><li>Mutate via b2, observe b1 changes</li><li>b3 = new Box(5,5,5) → compare b1==b3</li></ul></div></div>"
  inputFormat="Demonstrate aliasing vs new allocation in <code>MemoryDemo.main()</code>."
  outputFormat="Volume values and reference equality checks."
  :constraints="['Show b1 == b2 is true after aliasing', 'Mutate b2 and confirm b1 reflects the change', 'Show b1 == b3 is false even when volumes match']"
  :sampleCases="[
    {
      input: 'b1=new Box(2,3,4); b2=b1; b2.setDimensions(5,5,5); b3=new Box(5,5,5)',
      output: 'b1 volume after b2 mutation: 125.0\nb1==b2: true (same heap ref)\nb1==b3: false (different heap objects)',
      explanation: 'Assignment copies the reference address; new creates a fresh independent heap block.'
    }
  ]"
/>
