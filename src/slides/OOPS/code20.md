<Code
  topic="Practice 20: Fluent API – PizzaOrder Builder"
  description="<p>Return <code>this</code> from every setter to enable elegant <strong>method chaining</strong> (Fluent API / Builder pattern).</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>PizzaOrder Attributes:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String size, crust</code></li><li><code>List toppings</code></li><li><code>boolean extraCheese</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>Fluent Setters (all return this):</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>setSize(String)</code></li><li><code>setCrust(String)</code></li><li><code>addTopping(String)</code></li><li><code>setExtraCheese(boolean)</code></li><li><code>build()</code> → prints receipt</li></ul></div></div>"
  inputFormat="Build 2 pizza orders via chained calls in <code>PizzaDemo.main()</code>."
  outputFormat="Formatted invoice with size, crust, toppings, and total price."
  :constraints="['Every setter must return this', 'Price: Small=$10 Medium=$14 Large=$18 + $1.50/topping + $2 extraCheese', 'build() is the terminal method that prints the receipt']"
  :sampleCases="[
    {
      input: 'new PizzaOrder().setSize(&quot;Large&quot;).setCrust(&quot;Thin&quot;).addTopping(&quot;Pepperoni&quot;).addTopping(&quot;Mushrooms&quot;).setExtraCheese(true).build()',
      output: 'Size: Large $18 | Crust: Thin\nToppings: Pepperoni, Mushrooms ($3.00) | Extra Cheese: $2.00\nTotal: $23.00',
      explanation: 'Returning this allows consecutive dot-chaining — the heart of the fluent builder pattern.'
    }
  ]"
/>
