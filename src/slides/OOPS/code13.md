<Code
  topic="Practice 13: Object Lifecycle – UserProfile"
  description="<p>Inspect JVM default zero-values immediately after allocation, then initialise explicitly and compare both states.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>Uninitialized Fields:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>int userId</code> → default 0</li><li><code>String username</code> → default null</li><li><code>double rating</code> → default 0.0</li><li><code>boolean isVerified</code> → default false</li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>Methods:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>displayDefaults()</code></li><li><code>initialize(int,String,double,boolean)</code></li><li><code>displayProfile()</code></li></ul></div></div>"
  inputFormat="Instantiate UserProfile, print raw defaults, call initialize() in <code>LifecycleDemo.main()</code>."
  outputFormat="Before/after comparison of all field values."
  :constraints="['Print fields immediately after new before any setters', 'Confirm int→0, String→null, double→0.0, boolean→false', 'Call initialize() to populate all fields cleanly']"
  :sampleCases="[
    {
      input: 'UserProfile p = new UserProfile(); → p.initialize(201,&quot;alex_dev&quot;,4.85,true)',
      output: 'DEFAULTS: userId=0 username=null rating=0.0 isVerified=false\nINITIALIZED: userId=201 username=alex_dev rating=4.85 isVerified=true',
      explanation: 'Java guarantees deterministic zero-value initialisation for all instance variables at allocation.'
    }
  ]"
/>
