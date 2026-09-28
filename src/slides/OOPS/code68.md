<Code
  topic="Practice 68: Static Blocks – DatabaseConnection Init"
  description="<p>Execute class-level one-time setup using a <code>static { ... }</code> block and prove it runs exactly once before any constructor call.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Execution Order:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li>1. Static vars + static blocks (ONCE per classload)</li><li>2. Instance blocks</li><li>3. Constructor (on each new)</li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>⚙️ Use Case:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li>Load DB driver / pool config once</li><li>Runs before first object is created</li></ul></div></div>"
  inputFormat="Instantiate 3 DatabaseConnection objects in <code>StaticInitDemo.main()</code>."
  outputFormat="Console timeline proving static block executes once only, prior to all constructor calls."
  :constraints="['Include a static {} block that prints a message', 'Constructor must also print a message', 'Confirm static block appears exactly once above 3 constructor messages']"
  :sampleCases="[
    {
      input: 'new DatabaseConnection(); new DatabaseConnection(); new DatabaseConnection()',
      output: '[Static Block] Loading driver & pool config (ONCE)\n[Constructor] Connection 1 established.\n[Constructor] Connection 2 established.\n[Constructor] Connection 3 established.',
      explanation: 'Static blocks run when the JVM classloader loads the bytecode — guaranteed once per classloader lifecycle.'
    }
  ]"
/>
