<Code
  topic="Practice 6: Procedural vs OOP – InventoryItem"
  description="<p>Transform scattered procedural variables into an encapsulated <code>InventoryItem</code> class and experience the OOP advantage firsthand.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>Attributes:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String itemId, itemName</code></li><li><code>double unitPrice</code></li><li><code>int quantityInStock</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>Methods:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>restock(int qty)</code></li><li><code>sell(int qty)</code> – prevent oversell</li><li><code>calculateTotalValue()</code></li><li><code>displayItemDetails()</code></li></ul></div></div>"
  inputFormat="Instantiate InventoryItem objects in <code>InventoryDemo.main()</code> and simulate stock ops."
  outputFormat="Stock balance reports and total inventory valuation."
  :constraints="['Cannot sell more than available stock', 'Restock qty must be > 0', 'Total value = unitPrice × quantityInStock']"
  :sampleCases="[
    {
      input: 'SKU-99 Wireless Mouse $25 stock:50 → sell 15 → sell 40 (exceeds) → restock 20',
      output: 'Sold 15. Remaining: 35\nSale Failed: Insufficient stock (Requested: 40, Available: 35)\nRestocked +20. Current: 55 | Total Value: $1375.00',
      explanation: 'Encapsulation prevents negative inventory; OOP enforces invariants automatically.'
    }
  ]"
/>
