export default function HowItWorks() {
  const steps = [
    { title: 'Engage', desc: 'Like, share, join events', icon: '🎯' },
    { title: 'Collect', desc: 'Build your XP wallet', icon: '⭐' },
    { title: 'Redeem', desc: 'Merch, tickets, vouchers, NFTs', icon: '🎟' }
  ];
  return (
    <section className="section py-14">
      <h2 className="h2 mb-8">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map(s => (
          <div key={s.title} className="card p-6">
            <div className="text-4xl">{s.icon}</div>
            <div className="mt-4 font-semibold">{s.title}</div>
            <p className="p">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
