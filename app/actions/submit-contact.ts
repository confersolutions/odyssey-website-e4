"use server"

export type ContactPayload = {
  company: string
  website?: string
  industry?: string
  goals?: string
  name: string
  email: string
  timeline?: string
}

export async function submitContact(payload: ContactPayload) {
  // Simulate processing; replace with CRM, email, or DB write.
  console.log("Contact submission:", payload)
  await new Promise((r) => setTimeout(r, 800))
  return { ok: true }
}
