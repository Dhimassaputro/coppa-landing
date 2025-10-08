import Image from "next/image";
import { metrics } from "@/lib/mock";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src="/heroo.jpg" // pastikan file ada di /public/hero.jpg
        alt="Concert"
        fill
        priority
        className="object-cover object-center"
      />

      

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
          Join Indonesia’s #1 <br /> K-Culture Fan Economy
        </h1>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#rewards"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-lg shadow-md hover:opacity-90 transition"
          >
            Hot News
          </a>
          <a
            href="#rewards"
            className="px-8 py-3 rounded-full border border-white/70 text-white font-semibold text-lg hover:bg-white/10 transition"
          >
            Reward Point
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-3 gap-y-2
                text-base sm:text-lg md:text-2xl font-semibold leading-tight">
  {/* 2M+ Fans */}
  <div className="flex items-center gap-2 whitespace-nowrap">
    <span className="text-orange-400">🔥 2M+</span>
    <span className="text-white">Fans</span>
  </div>

  {/* separator (muncul mulai sm ke atas) */}
  <span className="hidden sm:inline text-white/50">•</span>

  {/* 50+ Brand Partners */}
  <div className="flex items-center gap-2 whitespace-nowrap">
    <span className="text-pink-400">50+</span>
    <span className="text-white">Brand Partners</span>
  </div>

  <span className="hidden sm:inline text-white/50">•</span>

  {/* 200K Rewards Redeemed */}
  <div className="flex items-center gap-2 whitespace-nowrap">
    <span className="text-red-400">200K</span>
    <span className="text-white">Rewards Redeemed</span>
  </div>
</div>
      </div>
    </section>
  );
}
