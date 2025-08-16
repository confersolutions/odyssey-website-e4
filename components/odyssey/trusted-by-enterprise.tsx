export function TrustedByEnterprise() {
  const clients = [
    "QuantumPay",
    "AcmeBank",
    "HelixHealth",
    "TechFlow",
    "DataVault",
    "SecureCore",
    "InnovateLabs",
    "GlobalTech",
    "NextGen",
    "ProSystems",
    "EliteFinance",
    "SmartOps",
  ]

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Leading Enterprises</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Join hundreds of industry leaders who rely on Odyssey AI to transform their operations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-white/80 font-semibold text-sm md:text-base">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
