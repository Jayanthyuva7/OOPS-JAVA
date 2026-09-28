<Code
  topic="Practice 8: Messages & Methods – Customer & Order"
  description="<p>Experience <strong>object communication</strong> by passing <code>Order</code> as a method argument to <code>Customer.processPayment()</code>.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Two Classes:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>Order</code>: orderId, item, price, isPaid</li><li><code>Customer</code>: custId, name, walletBalance</li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>⚙️ Message Method:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>customer.processPayment(Order order)</code></li><li>Deducts wallet, calls <code>order.markPaid()</code></li></ul></div></div>"
  inputFormat="Create Customer and Order objects, call processPayment() in <code>ShopDemo.main()</code>."
  outputFormat="Order status and wallet balance after each message exchange."
  :constraints="['Pass Order as method argument to Customer', 'Mark order paid only when wallet is sufficient', 'Attempt a second order that exceeds balance']"
  :sampleCases="[
    {
      input: 'Bob wallet $100 → Order1 Headphones $60 → Order2 Keyboard $50',
      output: 'Order1 $60: Paid. Wallet: $40\nOrder2 $50: Failed - insufficient balance.\nOrder1 status: PAID | Order2 status: UNPAID',
      explanation: 'Objects communicate cleanly via method calls without exposing internal state.'
    }
  ]"
/>
