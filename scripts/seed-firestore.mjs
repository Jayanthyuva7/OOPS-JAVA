/**
 * seed-firestore.mjs
 * Run once to seed the new Firestore database (slidev-pro-vercel-app-db)
 * with the current whitelist from allowed-emails.json.
 *
 * Usage:  node scripts/seed-firestore.mjs
 */

import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const firebaseConfig = {
  apiKey: "AIzaSyBeVBOZU6PSIowJzDClSldgl1YVm5xRm_k",
  authDomain: "oops-java.firebaseapp.com",
  projectId: "oops-java",
  storageBucket: "oops-java.firebasestorage.app",
  messagingSenderId: "74440299789",
  appId: "1:74440299789:web:9e48fb6ebaf1d9f7754c44"
};

const app = getApps().find(a => a.name === 'slidev-pro') ?? initializeApp(firebaseConfig, 'slidev-pro')
const db = getFirestore(app)

async function seed() {
  // 1. Read local whitelist
  const filePath = resolve(__dirname, '../allowed-emails.json')
  const emails = JSON.parse(readFileSync(filePath, 'utf8'))
  console.log(`📋 Found ${emails.length} email(s) in allowed-emails.json:`)
  emails.forEach(e => console.log(`   • ${e}`))

  // 2. Check if Firestore already has data
  const docRef = doc(db, 'whitelist', 'emails')
  const existing = await getDoc(docRef)
  if (existing.exists()) {
    const existingData = existing.data()
    console.log(`\n⚠️  Firestore already has ${existingData.list?.length ?? 0} email(s):`)
    existingData.list?.forEach(e => console.log(`   • ${e}`))
    console.log('\n🔄 Overwriting with local allowed-emails.json...')
  }

  // 3. Write to Firestore
  await setDoc(docRef, { list: emails })
  console.log(`\n✅ Successfully seeded Firestore with ${emails.length} email(s)!`)
  console.log('   Collection: whitelist / Document: emails')
  process.exit(0)
}

seed().catch(err => {
  console.error('❌ Seed failed:', err.message || err)
  process.exit(1)
})
