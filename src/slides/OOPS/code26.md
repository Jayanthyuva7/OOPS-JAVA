<Code
  topic="Practice 26: Method Overloading – Payment Gateway"
  description="<p>Demonstrate <strong>Compile-Time Polymorphism</strong>: one method name, multiple signatures, resolved by the compiler at build time.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>Overloaded processPayment():</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>processPayment(double cash)</code></li><li><code>processPayment(String card, double amt)</code></li><li><code>processPayment(String upi, String pin, double amt)</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>Validations:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li>Cash must be &gt; 0</li><li>Card must be 16 digits</li><li>UPI pin must be 4–6 digits</li></ul></div></div>"
  inputFormat="Call processPayment() with 1, 2, and 3 arguments in <code>PaymentDemo.main()</code>."
  outputFormat="Transaction receipts tailored to each payment channel."
  :constraints="['Provide 3 overloaded versions of processPayment()', 'All versions share the same method name', 'Methods must differ in parameter count or type']"
  :sampleCases="[
    {
      input: 'pay.processPayment(50.0); pay.processPayment(&quot;4111...4444&quot;,120.0); pay.processPayment(&quot;user@ok&quot;,&quot;1234&quot;,85.50)',
      output: '[Cash] Received $50.00\n[Card] Charged $120.00 to ****4444\n[UPI] $85.50 to user@ok via PIN verified',
      explanation: 'The compiler binds each call to the matching signature at compile time — static dispatch.'
    }
  ]"
/>
