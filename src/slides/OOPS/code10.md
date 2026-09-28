<Code
  topic="Practice 10: Static Utility – MathUtils"
  description="<p>Build a pure-static utility class <code>MathUtils</code> and call all methods directly via class name, without creating any instance.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Static Members:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>public static final double PI = 3.14159</code></li><li><code>private static int operationsCount</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>⚙️ Static Methods:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>factorial(int n)</code></li><li><code>isPrime(int n)</code></li><li><code>gcd(int a, int b)</code></li><li><code>getOperationsCount()</code></li></ul></div></div>"
  inputFormat="Call MathUtils methods without new in <code>MathDemo.main()</code>."
  outputFormat="Mathematical results and operation count."
  :constraints="['Never instantiate MathUtils (no new MathUtils())', 'Each method call increments static operationsCount', 'Handle edge cases: factorial(0)=1, isPrime(1)=false']"
  :sampleCases="[
    {
      input: 'factorial(5), isPrime(17), isPrime(18), gcd(48,18)',
      output: 'factorial(5)=120 | isPrime(17)=true | isPrime(18)=false | gcd(48,18)=6\nOperations performed: 4',
      explanation: 'Utility functions run directly from class context without any heap allocation.'
    }
  ]"
/>
