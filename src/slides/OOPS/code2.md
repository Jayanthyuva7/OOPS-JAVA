<Code
  topic="Practice 2: Blueprint Design - Book Class"
  description="<p>Design a blueprint class named <code>Book</code> to model library books with attributes, business logic, and state transitions.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>Attributes (Fields):</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>title</code> (String)</li><li><code>author</code> (String)</li><li><code>isbn</code> (String)</li><li><code>price</code> (double)</li><li><code>isIssued</code> (boolean)</li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>Required Methods:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>issueBook()</code> – mark as issued if available</li><li><code>returnBook()</code> – mark as returned</li><li><code>applyDiscount(double percent)</code> – reduce price</li><li><code>displayBookInfo()</code> – print all details</li></ul></div></div><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #bbf7d0; border-radius:6px; padding:8px 10px;'><strong style='color:#15803d; font-size:0.75rem; display:block; margin-bottom:4px;'>State Validation:</strong><span style='font-size:0.7rem; color:#374151; line-height:1.4; display:block;'>If book is already issued, <code>issueBook()</code> should print a warning. Prevent negative discount percentages.</span></div><div style='background:#fff; border:1px solid #e9d5ff; border-radius:6px; padding:8px 10px;'><strong style='color:#7e22ce; font-size:0.75rem; display:block; margin-bottom:4px;'>Main Class (LibraryDemo):</strong><span style='font-size:0.7rem; color:#374151; line-height:1.4; display:block;'>Instantiate 2 book objects, apply a 10% discount on one, issue one book, attempt re-issuing, and print status.</span></div></div>"
  inputFormat="Define books with title, author, isbn, price inside <code>LibraryDemo.main()</code>."
  outputFormat="Display book details before and after applying discount, issuing, and returning."
  :constraints="[
    'Define class Book with 5 instance fields',
    'Validate that an already-issued book cannot be issued again',
    'Discount percentage must be between 0 and 100',
    'Demonstrate method calls on at least 2 distinct Book objects'
  ]"
  :sampleCases="[
    {
      input: 'Book 1: Clean Code | Robert Martin | ISBN: 978-0132350884 | Price: 45.0\nBook 2: Effective Java | Joshua Bloch | ISBN: 978-0134685991 | Price: 50.0',
      output: '--- Book 1 ---\nTitle: Clean Code | Author: Robert Martin\nPrice: $40.50 (10% Discount Applied) | Status: Available\nAction: Issued successfully!\n\n--- Book 2 ---\nTitle: Effective Java | Author: Joshua Bloch\nPrice: $50.00 | Status: Available',
      explanation: 'Book objects independently manage their own status and price calculations.'
    }
  ]"
/>
