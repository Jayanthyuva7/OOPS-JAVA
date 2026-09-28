<Code
  topic="Practice 12: Object Arrays & Anonymous Objects – Cinema Tickets"
  description="<p>Manage multiple <code>Ticket</code> instances in an array and fire a one-shot <strong>anonymous object</strong> call without storing any reference.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Ticket Attributes:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String movieName, seatNumber</code></li><li><code>double price</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>⚙️ Tasks:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li>Create <code>Ticket[] bookings</code> with 3 items</li><li>Loop to print seats and total revenue</li><li>Fire anonymous ticket: <code>new Ticket(...).printQuickPass()</code></li></ul></div></div>"
  inputFormat="Populate array and fire anonymous call in <code>CinemaDemo.main()</code>."
  outputFormat="Seat list, total revenue, and instant anonymous pass printout."
  :constraints="['Create and populate Ticket[] of size 3', 'Calculate total revenue with a loop', 'Include one anonymous object method call']"
  :sampleCases="[
    {
      input: '[Oppenheimer A1 $12], [Dune2 B4 $15], [Avatar C7 $14] + Anonymous: Interstellar IMAX-9 $18',
      output: 'Oppenheimer A1 $12 | Dune2 B4 $15 | Avatar C7 $14\nTotal Revenue: $41.00\nAnonymous Pass: Interstellar IMAX-9 $18 [Printed & Discarded]',
      explanation: 'Anonymous objects are instantiated for a single-use call, then immediately eligible for GC.'
    }
  ]"
/>
