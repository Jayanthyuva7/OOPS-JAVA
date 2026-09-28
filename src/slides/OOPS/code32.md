<Code
  topic="Practice 32: Type Casting – Media Player"
  description="<p>Upcast for uniform storage, then safely <strong>downcast</strong> with <code>instanceof</code> to activate channel-specific features.</p><div style='margin-top:8px; display:grid; grid-template-columns:1fr 1fr; gap:8px;'><div style='background:#fff; border:1px solid #fed7aa; border-radius:6px; padding:8px 10px;'><strong style='color:#b3531f; font-size:0.75rem; display:block; margin-bottom:4px;'>📋 Hierarchy:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li><code>MediaFile</code>: title, play()</li><li><code>AudioFile</code>: bitrate, boostBass()</li><li><code>VideoFile</code>: resolution, enableSubtitles()</li></ul></div><div style='background:#fff; border:1px solid #bfdbfe; border-radius:6px; padding:8px 10px;'><strong style='color:#1d4ed8; font-size:0.75rem; display:block; margin-bottom:4px;'>⚙️ Workflow:</strong><ul style='margin:0; padding-left:16px; font-size:0.72rem; line-height:1.5;'><li>Upcast: <code>MediaFile m = new VideoFile()</code></li><li>Check: <code>if (m instanceof VideoFile vf)</code></li><li>Downcast: <code>vf.enableSubtitles()</code></li></ul></div></div>"
  inputFormat="Process a MediaFile[] playlist in <code>MediaPlayerDemo.main()</code>."
  outputFormat="Playback logs with safe type-specific feature activation."
  :constraints="['Always guard downcast with instanceof check', 'Store both AudioFile and VideoFile in MediaFile[]', 'Call boostBass() only on AudioFile; enableSubtitles() only on VideoFile']"
  :sampleCases="[
    {
      input: 'Playlist: [Podcast.mp3 320kbps], [Movie.mp4 1080p]',
      output: 'Playing: Podcast.mp3 → Bass boosted (320kbps)\nPlaying: Movie.mp4 → Subtitles enabled (1080p)',
      explanation: 'instanceof verifies the actual runtime type before downcasting, preventing ClassCastException.'
    }
  ]"
/>
