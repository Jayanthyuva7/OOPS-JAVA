<Code
  topic="Practice 28: Method Overriding – Notification Dispatcher"
  description="<p>Use <code>@Override</code> to deliver notifications through a uniform base reference, resolved at <strong>runtime</strong> via dynamic dispatch.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>Base (Notification):</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>String recipient</code></li><li><code>send(String message)</code></li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>Overriding Subclasses:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>EmailNotification</code></li><li><code>SMSNotification</code></li><li><code>PushNotification</code></li></ul></div></div>"
  inputFormat="Store mixed types in Notification[] and loop-broadcast in <code>NotificationDemo.main()</code>."
  outputFormat="Distinct formatted outputs from each subclass's overridden send()."
  :constraints="['Annotate all subclass implementations with @Override', 'Use Notification[] to hold all 3 types', 'Child signatures must exactly match parent signature']"
  :sampleCases="[
    {
      input: 'Notification[] list = {EmailNotification,SMSNotification,PushNotification}; loop.send(&quot;System update&quot;)',
      output: '[EMAIL alice@x.com] <p>System update</p>\n[SMS +1234567890] [ALERT] System update\n[PUSH token_xyz] System update',
      explanation: 'JVM vtable resolves the correct overridden method dynamically at each call site.'
    }
  ]"
/>
