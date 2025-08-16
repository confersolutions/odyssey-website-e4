import { Shield, CheckCircle, TrendingUp } from "lucide-react"

export function KeyBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Enterprise-Ready Security",
      points: [
        "SOC 2 Type II certified infrastructure",
        "End-to-end encryption for all data",
        "Zero-trust architecture implementation",
      ],
    },
    {
      icon: CheckCircle,
      title: "Regulatory Compliance",
      points: [
        "GDPR, CCPA, and HIPAA compliant",
        "Automated audit trails and reporting",
        "Industry-specific compliance frameworks",
      ],
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      points: [
        "Average 45% reduction in operational costs",
        "3x faster decision-making processes",
        "98% customer satisfaction rate",
      ],
    },
  ]

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Odyssey AI</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Built for enterprise scale with the security, compliance, and performance you need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>

                <ul className="space-y-3">
                  {benefit.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
