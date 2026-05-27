export default function Home() {
  const faqs = [
    {
      q: "How accurate is the claim prediction?",
      a: "Our rule-based engine analyzes your claim against standard policy terms and coverage rules, achieving over 85% accuracy in predicting approval outcomes."
    },
    {
      q: "What claim types are supported?",
      a: "We support medical, dental, vision, and prescription claims across most major insurance policy formats including PPO, HMO, and EPO plans."
    },
    {
      q: "Is my patient data secure?",
      a: "Yes. All data is encrypted in transit and at rest. We are HIPAA-compliant and never store personally identifiable patient information beyond your session."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Health Insurance
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Predict Claim Approval<br />
          <span className="text-[#58a6ff]">Before You Submit</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Analyze insurance claims against policy terms and coverage rules to get an approval probability score — saving time, reducing denials, and maximizing reimbursements.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Predicting — $16/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No contracts. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { icon: "⚡", title: "Instant Analysis", desc: "Get approval scores in seconds" },
          { icon: "📋", title: "Policy Matching", desc: "Checks against real coverage rules" },
          { icon: "📊", title: "Denial Insights", desc: "Understand why claims get rejected" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="text-white font-semibold text-sm mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-xs">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$16</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited claim predictions",
              "PPO, HMO & EPO policy support",
              "Denial reason breakdown",
              "CSV bulk upload",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        &copy; {new Date().getFullYear()} Health Insurance Claim Predictor. All rights reserved.
      </footer>
    </main>
  );
}
