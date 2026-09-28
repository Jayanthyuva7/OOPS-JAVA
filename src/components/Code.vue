<template>
  <div class="slide-wrapper">
    <!-- Navbar: preserved intact -->
    <div class="navbar">
      <h2 class="navbar-title">{{ topic }}</h2>
      <img src="../assets/logo.png" />
    </div>

    <!-- Vertically stacked slide layout with smooth scrolling -->
    <div class="slide-body">
      <!-- TOP SECTION: Structured Coding Question Block (Increased height) -->
      <section
        class="question-container"
        :class="{
          'question-container--collapsed': viewMode === 'editor',
          'question-container--expanded': viewMode === 'question'
        }"
        aria-label="Problem Question Block"
      >
        <!-- Animated Gradient Accent Bar -->
        <!-- <div class="gradient-accent-bar" /> -->


        <!-- Scrollable Content Container (Hidden if collapsed) -->
        <div v-show="viewMode !== 'editor'" class="question-scroll-area">
          <Transition name="tab-fade" mode="out-in">
            <!-- TAB: ALL DETAILS -->
            <div v-if="activeTab === 'all'" key="all" class="tab-content tab-content--all">
              <!-- Problem Description Card -->
              <article v-if="description || !hasAnyQuestionContent" class="pastel-card pastel-card--lavender">
                <div class="card-header">
                  <div class="card-title-group">
                    <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <h3 class="card-title">Problem Statement</h3>
                  </div>
                </div>
                <div
                  v-if="description"
                  class="card-body markdown-body"
                  v-html="description"
                />
                <div v-else class="card-body card-body--fallback">
                  <p>Read the problem instructions, review the code template below, and test your solution.</p>
                </div>
              </article>

              <!-- I/O Format & Constraints Grid -->
              <div v-if="inputFormat || outputFormat || normalizedConstraints.length > 0" class="io-grid">
                <!-- Input Format -->
                <article v-if="inputFormat" class="pastel-card pastel-card--blue io-grid-item">
                  <div class="card-header">
                    <div class="card-title-group">
                      <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="4 17 10 11 4 5" />
                        <line x1="12" y1="19" x2="20" y2="19" />
                      </svg>
                      <h3 class="card-title">Input Format</h3>
                    </div>
                  </div>
                  <div class="card-body markdown-body" v-html="inputFormat" />
                </article>

                <!-- Output Format -->
                <article v-if="outputFormat" class="pastel-card pastel-card--mint io-grid-item">
                  <div class="card-header">
                    <div class="card-title-group">
                      <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                      <h3 class="card-title">Output Format</h3>
                    </div>
                  </div>
                  <div class="card-body markdown-body" v-html="outputFormat" />
                </article>

                <!-- Constraints -->
                <article v-if="normalizedConstraints.length > 0" class="pastel-card pastel-card--amber io-grid-item">
                  <div class="card-header">
                    <div class="card-title-group">
                      <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      <h3 class="card-title">Constraints</h3>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="constraints-chips">
                      <span v-for="(c, cIdx) in normalizedConstraints" :key="cIdx" class="constraint-chip">
                        <svg class="chip-bullet" viewBox="0 0 6 6" fill="currentColor">
                          <circle cx="3" cy="3" r="2.5" />
                        </svg>
                        <code>{{ c }}</code>
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              <!-- Sample Test Cases -->
              <section v-if="sampleCases.length > 0" class="sample-cases-section">
                <div class="section-label-bar">
                  <svg class="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <h3 class="section-heading">Sample Test Cases</h3>
                </div>

                <div class="sample-cases-list">
                  <article
                    v-for="(testCase, idx) in sampleCases"
                    :key="idx"
                    class="testcase-card"
                  >
                    <div class="testcase-card-top">
                      <span class="testcase-tag">Sample Case {{ idx + 1 }}</span>
                      <button
                        type="button"
                        class="copy-btn"
                        :class="{ 'copy-btn--copied': copiedCaseIndex === idx }"
                        @click="copyText(testCase.input, idx)"
                        title="Copy Sample Input"
                      >
                        <svg v-if="copiedCaseIndex !== idx" class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        <svg v-else class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{{ copiedCaseIndex === idx ? 'Copied!' : 'Copy Input' }}</span>
                      </button>
                    </div>

                    <div class="testcase-io-row">
                      <div class="testcase-box testcase-box--input">
                        <div class="testcase-box-header">
                          <span>Sample Input</span>
                        </div>
                        <pre class="testcase-pre"><code>{{ testCase.input }}</code></pre>
                      </div>

                      <div class="testcase-box testcase-box--output">
                        <div class="testcase-box-header testcase-box-header--out">
                          <span>Expected Output</span>
                        </div>
                        <pre class="testcase-pre testcase-pre--out"><code>{{ testCase.output }}</code></pre>
                      </div>
                    </div>

                    <div v-if="testCase.explanation" class="testcase-explanation">
                      <div class="explanation-title">Explanation:</div>
                      <div class="explanation-body" v-html="testCase.explanation" />
                    </div>
                  </article>
                </div>
              </section>

              <!-- Backward Compatibility: Legacy contents array -->
              <div v-if="contents && contents.length > 0" class="legacy-contents-list">
                <template v-for="(item, index) in contents" :key="index">
                  <div v-if="item.codeEditor" class="legacy-code-card" v-click>
                    <div class="legacy-code-lang">{{ item.lang ?? 'text' }}</div>
                    <pre class="legacy-code-pre"><code>{{ item.text }}</code></pre>
                  </div>
                  <div
                    v-else
                    class="legacy-info-card"
                    :class="{ 'legacy-info-card--highlight': item.highlight }"
                    v-html="item.text"
                    v-click
                  />
                </template>
                <slot name="sidebar" />
              </div>
            </div>


            <!-- TAB: I/O FORMAT ONLY -->
            <div v-else-if="activeTab === 'io'" key="io" class="tab-content">
              <div class="io-grid io-grid--full">
                <article v-if="inputFormat" class="pastel-card pastel-card--blue io-grid-item">
                  <div class="card-header">
                    <div class="card-title-group">
                      <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="4 17 10 11 4 5" />
                        <line x1="12" y1="19" x2="20" y2="19" />
                      </svg>
                      <h3 class="card-title">Input Format</h3>
                    </div>
                  </div>
                  <div class="card-body markdown-body" v-html="inputFormat" />
                </article>

                <article v-if="outputFormat" class="pastel-card pastel-card--mint io-grid-item">
                  <div class="card-header">
                    <div class="card-title-group">
                      <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                      <h3 class="card-title">Output Format</h3>
                    </div>
                  </div>
                  <div class="card-body markdown-body" v-html="outputFormat" />
                </article>
              </div>
            </div>

            <!-- TAB: CONSTRAINTS ONLY -->
            <div v-else-if="activeTab === 'constraints'" key="constraints" class="tab-content">
              <article class="pastel-card pastel-card--amber">
                <div class="card-header">
                  <div class="card-title-group">
                    <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <h3 class="card-title">Problem Constraints</h3>
                  </div>
                </div>
                <div class="card-body">
                  <ul class="constraints-detailed-list">
                    <li v-for="(c, cIdx) in normalizedConstraints" :key="cIdx" class="constraint-list-item">
                      <span class="constraint-badge-pill">Limit {{ cIdx + 1 }}</span>
                      <code class="constraint-code">{{ c }}</code>
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            <!-- TAB: SAMPLE CASES ONLY -->
            <div v-else-if="activeTab === 'cases'" key="cases" class="tab-content">
              <div class="sample-cases-list">
                <article
                  v-for="(testCase, idx) in sampleCases"
                  :key="idx"
                  class="testcase-card"
                >
                  <div class="testcase-card-top">
                    <span class="testcase-tag">Sample Case {{ idx + 1 }}</span>
                    <button
                      type="button"
                      class="copy-btn"
                      :class="{ 'copy-btn--copied': copiedCaseIndex === idx }"
                      @click="copyText(testCase.input, idx)"
                      title="Copy Sample Input"
                    >
                      <svg v-if="copiedCaseIndex !== idx" class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <svg v-else class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{{ copiedCaseIndex === idx ? 'Copied!' : 'Copy Input' }}</span>
                    </button>
                  </div>

                  <div class="testcase-io-row">
                    <div class="testcase-box testcase-box--input">
                      <div class="testcase-box-header">
                        <span>Sample Input</span>
                      </div>
                      <pre class="testcase-pre"><code>{{ testCase.input }}</code></pre>
                    </div>

                    <div class="testcase-box testcase-box--output">
                      <div class="testcase-box-header testcase-box-header--out">
                        <span>Expected Output</span>
                      </div>
                      <pre class="testcase-pre testcase-pre--out"><code>{{ testCase.output }}</code></pre>
                    </div>
                  </div>

                  <div v-if="testCase.explanation" class="testcase-explanation">
                    <div class="explanation-title">Explanation:</div>
                    <div class="explanation-body" v-html="testCase.explanation" />
                  </div>
                </article>
              </div>
            </div>
          </Transition>

          <!-- Editor placed inside scroll area, below problem statement -->
          <div class="inline-editor-wrapper">
            <slot name="editor">
              <slot>
                <JavaRunner :language="language || 'java'" />
              </slot>
            </slot>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import JavaRunner from './JavaRunner.vue';

const props = defineProps({
  // Slide title displayed in the navbar
  topic: {
    type: String,
    required: true,
  },
  // Main problem statement / description (HTML or text)
  description: {
    type: String,
    default: '',
  },
  // Input format instructions
  inputFormat: {
    type: String,
    default: '',
  },
  // Output format instructions
  outputFormat: {
    type: String,
    default: '',
  },
  // Array of constraint strings or a single multiline string
  constraints: {
    type: [Array, String],
    default: () => [],
  },
  // Sample test cases: [{ input: '', output: '', explanation: '' }]
  sampleCases: {
    type: Array,
    default: () => [],
  },
  // Backward compatibility: raw contents array if still passed
  contents: {
    type: Array,
    default: () => [],
  },
  // Programming language for JavaRunner
  language: {
    type: String,
    default: 'java',
  },
});

// View mode: 'split' (both tall, scrollable) | 'editor' (editor focused) | 'question' (question focused)
const viewMode = ref('split');

// Normalized array of constraints
const normalizedConstraints = computed(() => {
  if (Array.isArray(props.constraints)) {
    return props.constraints
      .filter(Boolean)
      .map(c => String(c).trim());
  }
  if (typeof props.constraints === 'string' && props.constraints.trim()) {
    if (props.constraints.includes('\n')) {
      return props.constraints
        .split('\n')
        .map(s => s.trim().replace(/^[-*•]\s*/, ''))
        .filter(Boolean);
    }
    if (props.constraints.includes(';')) {
      return props.constraints
        .split(';')
        .map(s => s.trim())
        .filter(Boolean);
    }
    return [props.constraints.trim()];
  }
  return [];
});

// Check if any question content was passed
const hasAnyQuestionContent = computed(() => {
  return !!(
    props.description ||
    props.inputFormat ||
    props.outputFormat ||
    normalizedConstraints.value.length > 0 ||
    (props.sampleCases && props.sampleCases.length > 0) ||
    (props.contents && props.contents.length > 0)
  );
});

// Active tab state
const activeTab = ref('all');

// Dynamically available tabs
const availableTabs = computed(() => {
  const tabs = [
    { id: 'all', label: 'All Details' },
  ];
  if (props.inputFormat || props.outputFormat) {
    tabs.push({ id: 'io', label: 'I/O Format' });
  }
  if (normalizedConstraints.value.length > 0) {
    tabs.push({ id: 'constraints', label: 'Constraints', count: normalizedConstraints.value.length });
  }
  if (props.sampleCases && props.sampleCases.length > 0) {
    tabs.push({ id: 'cases', label: 'Sample Cases', count: props.sampleCases.length });
  }
  return tabs;
});

// Clipboard copy handling
const copiedCaseIndex = ref(null);
const copyText = async (text, idx) => {
  if (!text) return;
  try {
    await navigator.clipboard.writeText(String(text));
    copiedCaseIndex.value = idx;
    setTimeout(() => {
      if (copiedCaseIndex.value === idx) {
        copiedCaseIndex.value = null;
      }
    }, 1800);
  } catch (err) {
    console.error('Failed to copy to clipboard', err);
  }
};
</script>

<style scoped>
.slide-wrapper {
  margin-top: -10px;
  margin-left: -30px;
  width: 107%;
  height: 100%;
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: #464646;
  box-sizing: border-box;
}

/* ── Navbar: Preserved Intact ────────────────────────────────────────── */
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  padding: 0 10px;
  color: #ffffff;
  position: fixed;
  width: 94.7%;
  background-color: #ffffff;
  margin-top: -36px;
  z-index: 40;
}

.navbar > img {
  height: 30px;
}

.navbar-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  background-color: #ef5050;
  color: #ffffff;
  width: 80%;
  padding-left: 10px;
  margin-left: -10px;
  border-radius: 5px;
}

/* ── Main Slide Body (Vertically Stacked with Peach Scrollbar from slide44.md) ── */
.slide-body {
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  height: calc(100% - 36px);
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto !important;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: #f6b29a #f4ece6;
  scroll-behavior: smooth;
  padding-right: 4px;
}

.slide-body::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.slide-body::-webkit-scrollbar-track {
  background: #f4ece6;
  border-radius: 4px;
}

.slide-body::-webkit-scrollbar-thumb {
  background: #f6b29a;
  border-radius: 4px;
}

/* ── Top Section: Structured Coding Question Block ───────────────────── */
.question-container {
  flex: 1 1 auto;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #fbc6a1;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(179, 83, 31, 0.05);
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;
  margin-top: 6px;
}

.question-container--collapsed {
  flex: 0 0 36px !important;
  overflow: hidden !important;
}

.question-container--expanded {
  flex: 1 1 auto !important;
}

/* Subtle Animated Accent Bar (Brand Coral / Terracotta Flow) */
.gradient-accent-bar {
  height: 2.5px;
  width: 100%;
  background: linear-gradient(90deg, #ef5050, #f6b29a, #b3531f, #fbc6a1, #ef5050);
  background-size: 250% 100%;
  animation: gradientFlow 8s linear infinite;
  flex-shrink: 0;
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  100% { background-position: 250% 50%; }
}

/* ── Question Navigation Header & Tabs (Warm Peach from slide44.md) ──── */
.question-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  background: #fff5f0;
  border-bottom: 1px solid #fbc6a1;
  flex-shrink: 0;
  gap: 6px;
}

.question-tabs {
  display: flex;
  align-items: center;
  gap: 2px;
  overflow-x: auto;
  scrollbar-width: none;
}

.question-tabs::-webkit-scrollbar {
  display: none;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 2.5px 6px;
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.64rem;
  font-weight: 600;
  color: #4b5563;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}

/* .tab-btn:hover {
  background: #ef50500f;
  border-color: #fbc6a1;
  color: #ef5050;
} */

.tab-btn--active {
  background: #ffffff;
  color: #b3531f;
  border-color: #fbc6a1;
  box-shadow: 0 1px 2px rgba(179, 83, 31, 0.08);
}

.tab-icon {
  width: 11px;
  height: 11px;
  flex-shrink: 0;
}

.tab-badge {
  font-size: 0.58rem;
  padding: 0 4px;
  border-radius: 10px;
  background: #fff5f0;
  color: #b3531f;
  border: 1px solid #fbc6a1;
  font-weight: 700;
}

.question-nav-right {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.meta-pill {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-family: inherit;
  font-size: 0.58rem;
  font-weight: 600;
  padding: 1.5px 5px;
  border-radius: 10px;
}

.meta-pill--amber {
  background: #fffdf5;
  color: #b45309;
  border: 1px solid #fde68a;
}

.meta-pill--blue {
  background: #ffffff;
  color: #b3531f;
  border: 1px solid #fbc6a1;
}

.meta-icon {
  width: 9px;
  height: 9px;
}

/* ── View Switcher (Split / Focus Editor / Focus Question) ────────────── */
.view-switcher {
  display: inline-flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #fbc6a1;
  border-radius: 5px;
  padding: 1px;
  gap: 1px;
}

.view-btn {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 1.5px 5px;
  border-radius: 3px;
  font-family: inherit;
  font-size: 0.6rem;
  font-weight: 600;
  color: #4b5563;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
}

/* .view-btn:hover {
  color: #ef5050;
  background: #ef50500f;
} */

.view-btn--active {
  background: #fff5f0;
  color: #b3531f;
  font-weight: 700;
  box-shadow: 0 1px 2px rgba(179, 83, 31, 0.08);
}

.view-btn-icon {
  width: 9px;
  height: 9px;
}

/* ── Scrollable Content Area with slide44.md Peach Scrollbar ─────────── */
.question-scroll-area {
  flex: 1 1 auto;
  height: calc(100% - 35px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 9px 12px 20px;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: #f6b29a #f4ece6;
  min-height: 0;
}

/* Editor wrapper inside the scroll panel: expands to page size */
.inline-editor-wrapper {
  margin-top: 10px;
  border-radius: 8px;
  width: 100%;
  height: 650px;
  min-height: 600px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: #f6b29a #f4ece6;
}

.inline-editor-wrapper::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.inline-editor-wrapper::-webkit-scrollbar-track {
  background: #f4ece6;
  border-radius: 4px;
}

.inline-editor-wrapper::-webkit-scrollbar-thumb {
  background: #f6b29a;
  border-radius: 4px;
}

.question-scroll-area::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.question-scroll-area::-webkit-scrollbar-track {
  background: #f4ece6;
  border-radius: 4px;
}

.question-scroll-area::-webkit-scrollbar-thumb {
  background: #f6b29a;
  border-radius: 4px;
}

/* .question-scroll-area::-webkit-scrollbar-thumb:hover {
  background: #ef5050;
} */

/* ── Cards & Sections (Cohesive with slide44.md styling) ─────────────── */
.pastel-card {
  background: #ffffff;
  border-radius: 7px;
  padding: 8px 11px;
  box-sizing: border-box;
  margin-bottom: 7px;
  border: 1px solid #f3ece6;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.03);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

/* .pastel-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(179, 83, 31, 0.06);
} */

/* Problem Statement Card (Coral Red + Warm Peach from slide44.md) */
.pastel-card--lavender {
  background: #ffffff;
  border: 1px solid #fbc6a1;
  border-left: 3px solid #ef5050;
}

/* Input Format Card (Terracotta / Orange Accent) */
.pastel-card--blue {
  background: #ffffff;
  border: 1px solid #fbc6a1;
  border-left: 3px solid #b3531f;
}

/* Output Format Card (Green accent matching slide44.md .options li.correct) */
.pastel-card--mint {
  background: #ffffff;
  border: 1px solid #bbf7d0;
  border-left: 3px solid #38a169;
}

/* Constraints Card (Warm Amber) */
.pastel-card--amber {
  background: #ffffff;
  border: 1px solid #fde68a;
  border-left: 3px solid #d97706;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}

.card-title-group {
  display: flex;
  align-items: center;
  gap: 5px;
}

.card-icon {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

.card-title {
  margin: 0;
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.pastel-card--lavender .card-title { color: #b3531f; }
.pastel-card--lavender .card-icon { color: #ef5050; }
.pastel-card--blue .card-title { color: #b3531f; }
.pastel-card--blue .card-icon { color: #b3531f; }
.pastel-card--mint .card-title { color: #1b6b3a; }
.pastel-card--mint .card-icon { color: #38a169; }
.pastel-card--amber .card-title { color: #92400e; }
.pastel-card--amber .card-icon { color: #d97706; }

.card-body {
  font-size: 0.72rem;
  line-height: 1.45;
  color: #1f2937;
}

.card-body--fallback {
  color: #64748b;
  font-style: italic;
}

.markdown-body :deep(p) {
  margin: 0 0 5px 0;
}

.markdown-body :deep(p:last-child) {
  margin-bottom: 0;
}

.markdown-body :deep(code) {
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  background: #fff5f0;
  color: #b3531f;
  border: 1px solid #fbc6a1;
  padding: 1px 4px;
  border-radius: 3px;
  font-size: 0.68rem;
}

/* ── I/O Grid Layout ─────────────────────────────────────────────────── */
.io-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 7px;
  margin-bottom: 7px;
}

.io-grid--full {
  grid-template-columns: 1fr 1fr;
}

.io-grid-item {
  margin-bottom: 0;
}

.constraints-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.constraint-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #fff5f0;
  border: 1px solid #fbc6a1;
  color: #b3531f;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.66rem;
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(179, 83, 31, 0.04);
}

.constraint-chip code {
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  font-weight: 600;
  color: #b3531f;
  background: transparent;
}

.chip-bullet {
  width: 5px;
  height: 5px;
  color: #ef5050;
}

.quick-constraints-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 6px;
}

.quick-label {
  font-size: 0.66rem;
  font-weight: 700;
  color: #4b5563;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.constraints-detailed-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.constraint-list-item {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #ffffff;
  border: 1px solid #fbc6a1;
  border-radius: 5px;
  padding: 3px 8px;
}

.constraint-badge-pill {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #b3531f;
  background: #fff5f0;
  border: 1px solid #fbc6a1;
  padding: 1px 5px;
  border-radius: 3px;
}

.constraint-code {
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.68rem;
  font-weight: 600;
  color: #1f2937;
}

/* ── Sample Cases (Styled with slide44.md colors and button behavior) ── */
.sample-cases-section {
  margin-top: 5px;
  margin-bottom: 7px;
}

.section-label-bar {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
  padding-left: 2px;
}

.section-icon {
  width: 12px;
  height: 12px;
  color: #ef5050;
}

.section-heading {
  margin: 0;
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #1f2937;
}

.sample-cases-list {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.testcase-card {
  /* background: #ffffff; */
  /* border: 1px solid #fbc6a1; */
  border-radius: 7px;
  padding: 7px 10px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgba(179, 83, 31, 0.04);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

/* .testcase-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(179, 83, 31, 0.08);
} */

.testcase-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}

.testcase-tag {
  display: inline-flex;
  align-items: center;
  background: #fff5f0;
  color: #b3531f;
  border: 1px solid #fbc6a1;
  font-size: 0.62rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  letter-spacing: 0.02em;
}

/* Copy Button: Matching slide44.md reset-btn specifications */
.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: inherit;
  background-color: #ffffff;
  border: 1px solid #cbd5e1;
  color: #4b5563;
  border-radius: 5px;
  padding: 2px 7px;
  font-size: 0.62rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s, border-color 0.15s, color 0.15s;
}

/* .copy-btn:hover {
  background-color: #ef50500f;
  border-color: #ef5050;
  color: #ef5050;
} */

.copy-btn--copied {
  background-color: #e6f7e6;
  border-color: #38a169;
  color: #1b6b3a;
}

.btn-icon {
  width: 10px;
  height: 10px;
}

.testcase-io-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
}

.testcase-box {
  border-radius: 5px;
  background: #0f172a;
  border: 1px solid #334155;
  overflow: hidden;
}

.testcase-box-header {
  background: #1e293b;
  padding: 2px 7px;
  font-size: 0.6rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  border-bottom: 1px solid #334155;
}

.testcase-box-header--out {
  color: #6ee7b7;
}

.testcase-pre {
  margin: 0;
  padding: 5px 7px;
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.68rem;
  line-height: 1.35;
  color: #f1f5f9;
  white-space: pre-wrap;
  word-break: break-all;
  max-height: 95px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #f6b29a #f4ece6;
}

.testcase-pre::-webkit-scrollbar {
  width: 4px;
}

.testcase-pre::-webkit-scrollbar-thumb {
  background: #f6b29a;
  border-radius: 2px;
}

.testcase-pre--out {
  color: #a7f3d0;
}

.testcase-explanation {
  margin-top: 5px;
  padding: 4px 7px;
  background: #fff5f0;
  border: 1px solid #fbc6a1;
  border-radius: 5px;
  font-size: 0.68rem;
  color: #464646;
  line-height: 1.4;
}

.explanation-title {
  font-weight: 800;
  font-size: 0.64rem;
  color: #b3531f;
  margin-bottom: 1px;
}

/* ── Backward Compatibility: Legacy items ────────────────────────────── */
.legacy-contents-list {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.legacy-info-card {
  border-radius: 5px;
  font-size: 0.72rem;
  color: #1f2937;
  background-color: #fff5f0;
  border: 1px solid #fbc6a1;
  padding: 6px 9px;
  box-sizing: border-box;
  line-height: 1.45;
}

.legacy-info-card--highlight {
  background-color: #fdeaea;
  border-color: #ef5050;
  color: #9b1c1c;
  font-weight: 600;
  text-align: center;
}

.legacy-code-card {
  border-radius: 5px;
  border: 1px solid #334155;
  background-color: #0f172a;
  overflow: hidden;
  box-sizing: border-box;
}

.legacy-code-lang {
  background-color: #1e293b;
  color: #94a3b8;
  font-size: 0.62rem;
  padding: 2px 7px;
  border-bottom: 1px solid #334155;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.legacy-code-pre {
  margin: 0;
  padding: 5px 8px;
  overflow-x: auto;
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.7rem;
  line-height: 1.4;
  color: #e2e8f0;
  white-space: pre;
}

/* ── Tab Transition ──────────────────────────────────────────────────── */
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(2px);
}

.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-2px);
}

/* ── Bottom Section: Code Editor Slot ────────────────────────────────── */
.editor-container {
  height: 520px;
  min-height: 480px;
  flex: 0 0 auto;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #fbc6a1;
  box-shadow: 0 1px 3px rgba(179, 83, 31, 0.04);
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;
}

.editor-container--maximized {
  height: calc(100% - 46px) !important;
  min-height: 460px !important;
  flex: 1 1 auto !important;
}

/* ── Monaco Editor Scroll Panel ───────────────────────────────────────── */
:deep(.monaco-editor),
:deep(.monaco-editor.no-user-select.showUnused.showDeprecated.vs),
.monaco-editor,
.monaco-editor.no-user-select.showUnused.showDeprecated.vs {
  overflow-y: auto !important;
  overflow-x: auto !important;
  scrollbar-width: thin !important;
  scrollbar-color: #f6b29a #f4ece6 !important;
}

:deep(.monaco-editor .monaco-scrollable-element),
.monaco-editor .monaco-scrollable-element {
  scrollbar-width: thin !important;
  scrollbar-color: #f6b29a #f4ece6 !important;
  overflow: auto !important;
}

:deep(.monaco-editor::-webkit-scrollbar),
:deep(.monaco-editor.no-user-select.showUnused.showDeprecated.vs::-webkit-scrollbar),
:deep(.monaco-editor .monaco-scrollable-element::-webkit-scrollbar),
.monaco-editor::-webkit-scrollbar,
.monaco-editor.no-user-select.showUnused.showDeprecated.vs::-webkit-scrollbar,
.monaco-editor .monaco-scrollable-element::-webkit-scrollbar {
  width: 6px !important;
  height: 6px !important;
}

:deep(.monaco-editor::-webkit-scrollbar-track),
:deep(.monaco-editor.no-user-select.showUnused.showDeprecated.vs::-webkit-scrollbar-track),
:deep(.monaco-editor .monaco-scrollable-element::-webkit-scrollbar-track),
.monaco-editor::-webkit-scrollbar-track,
.monaco-editor.no-user-select.showUnused.showDeprecated.vs::-webkit-scrollbar-track,
.monaco-editor .monaco-scrollable-element::-webkit-scrollbar-track {
  background: #f4ece6 !important;
  border-radius: 4px !important;
}

:deep(.monaco-editor::-webkit-scrollbar-thumb),
:deep(.monaco-editor.no-user-select.showUnused.showDeprecated.vs::-webkit-scrollbar-thumb),
:deep(.monaco-editor .monaco-scrollable-element::-webkit-scrollbar-thumb),
.monaco-editor::-webkit-scrollbar-thumb,
.monaco-editor.no-user-select.showUnused.showDeprecated.vs::-webkit-scrollbar-thumb,
.monaco-editor .monaco-scrollable-element::-webkit-scrollbar-thumb {
  background: #f6b29a !important;
  border-radius: 4px !important;
}
</style>