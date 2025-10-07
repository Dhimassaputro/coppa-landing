import Image from 'next/image';
import { rewards } from '@/lib/mock';

export default function RewardsPreview() {
  return (
    <section id="rewards" className="py-14 bg-gradient-to-b from-white/5 to-transparent">
      <div className="section">
        <h2 className="h2 mb-8">Rewards Marketplace Preview</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.map((r) => (
            <div key={r.title} className="card overflow-hidden">
              <Image src={r.img} alt={r.title} width={600} height={400} className="h-40 w-full object-cover" />
              <div className="p-4">
                <div className="font-semibold">{r.title}</div>
                <div className="mt-2 badge">{r.xp}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a className="btn-primary" href="#">Explore Full Marketplace</a>
        </div>
      </div>
    </section>
  );
}
