import { Hero } from "@/components/odyssey/hero"
import { Navbar } from "@/components/odyssey/navbar"
import { SolutionsGrid } from "@/components/odyssey/solutions-grid"
import { TrustedByEnterprise } from "@/components/odyssey/trusted-by-enterprise"
import { KeyBenefits } from "@/components/odyssey/key-benefits"
import { SimpleCTA } from "@/components/odyssey/simple-cta"
import { Footer } from "@/components/odyssey/footer"

export default function Page() {
  return (
    <main className="scroll-smooth">
      {/* Navbar with CTA in dialog within Hero */}
      {/* We keep Navbar simple here; Modal handled in Hero */}
      <Navbar />
      <Hero />
      <SolutionsGrid />
      <TrustedByEnterprise />
      <KeyBenefits />
      <SimpleCTA />
      <Footer />
    </main>
  )
}
