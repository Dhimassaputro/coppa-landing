import Image from 'next/image';
import { metrics } from '@/lib/mock';

export default function Hero() {
  return (
    <section className="relative">
      <Image
        src="https://images.unsplash.com/photo-1518972559570-7cc1309f3229"
        alt="Concert"
        width={2400} height={1400} priority
        className="w-full h-[70svh] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-coppaDark/60" />
      <div className="section absolute inset-0 flex flex-col justify-center gap-6">
        <h1 className="h1 max-w-3xl">Join Indonesia’s #1 K-Culture Fan Economy</h1>
        <p className="p max-w-2xl">Earn rewards, redeem exclusive merch, and connect with millions of fans.</p>
        <div className="flex gap-3">
          <a className="btn-primary" href="#rewards">Join Now (Free)</a>
          <a className="btn-ghost" href="#rewards">See Rewards</a>
        </div>
        <div className="mt-3 flex gap-6 text-white/80 text-sm">
          <span>🔥 {metrics.fans} Fans</span>
          <span>• {metrics.brands} Brand Partners</span>
          <span>• {metrics.redeemed} Rewards Redeemed</span>
        </div>
      </div>
    </section>
  );
}
