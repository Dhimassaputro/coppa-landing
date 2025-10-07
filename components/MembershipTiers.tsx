import { tiers } from '@/lib/mock';

export default function MembershipTiers() {
  return (
    <section className="section py-14">
      <h2 className="h2 mb-8">Membership Tiers</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {tiers.map(t => (
          <div key={t.name} className={`card p-6 bg-gradient-to-br ${t.gradient}`}>
            <div className="text-xl font-bold">{t.name}</div>
            <ul className="mt-3 space-y-2">
              {t.perks.map(p => <li key={p} className="text-white/80">• {p}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a className="btn-ghost" href="#">Compare Plans</a>
      </div>
    </section>
  );
}
