<Code
  topic="Practice 15: Overloaded Constructors – Product Catalog"
  description="<p>Provide 3 overloaded constructors for <code>Product</code> to accommodate initialisation with varying amounts of data.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>Attributes:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String productId, name</code></li><li><code>double price</code></li><li><code>String category</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>3 Constructors:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>Product()</code> → all defaults</li><li><code>Product(id, name)</code></li><li><code>Product(id, name, price, category)</code></li></ul></div></div>"
  inputFormat="Use each of the 3 constructors to create products in <code>CatalogDemo.main()</code>."
  outputFormat="Catalog listing each product's initialisation path."
  :constraints="['Provide exactly 3 distinct constructor signatures', 'Missing fields default to 0.0 / &quot;General&quot;', 'Call displayProduct() on all 3 instances']"
  :sampleCases="[
    {
      input: 'new Product(); new Product(&quot;P101&quot;,&quot;USB Cable&quot;); new Product(&quot;P102&quot;,&quot;Keyboard&quot;,89.99,&quot;Electronics&quot;)',
      output: '[DEFAULT] ID:N/A Name:Unknown Price:$0.00 Cat:General\n[PARTIAL] ID:P101 Name:USB Cable Price:$0.00 Cat:General\n[FULL]    ID:P102 Name:Keyboard Price:$89.99 Cat:Electronics',
      explanation: 'Overloaded constructors let callers initialise objects with whatever data they have available.'
    }
  ]"
/>
