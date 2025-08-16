import { Button } from "@/components/ui/button"

export function SimpleCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join industry leaders using Odyssey AI to revolutionize their operations with intelligent automation
          </p>

          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Schedule Demo
          </Button>

          <p className="text-slate-400 mt-4">Join industry leaders using Odyssey AI</p>
        </div>
      </div>
    </section>
  )
}
