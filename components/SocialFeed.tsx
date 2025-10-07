import Image from 'next/image';
import { socialPosts, pollOptions, trendingTags } from '@/lib/mock';

export default function SocialFeed() {
  return (
    <section id="community" className="py-14">
      <div className="section">
        <h2 className="h2 mb-8">Fan Community & Social Media</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {socialPosts.map(p => (
              <div key={p.user} className="card p-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-white/15" />
                  <div className="text-sm">{p.user} • {p.ago}</div>
                </div>
                <Image src={p.img} alt={p.caption} width={1200} height={700} className="mt-4 w-full h-56 object-cover rounded-xl" />
                <div className="mt-3">{p.caption}</div>
                <div className="mt-3 flex items-center justify-between text-sm text-white/80">
                  <div className="flex gap-4">
                    <span>❤️ {p.likes}</span>
                    <span>💬 {p.comments}</span>
                    <span>🔄 Share</span>
                  </div>
                  <span className="badge">+5 XP for sharing</span>
                </div>
              </div>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="card p-5">
              <div className="font-semibold mb-3">Vote for Idol of the Month</div>
              <form className="space-y-2">
                {pollOptions.map(o => (
                  <label key={o} className="flex items-center gap-2">
                    <input type="radio" name="idol" className="accent-fuchsia-400" /> <span>{o}</span>
                  </label>
                ))}
              </form>
              <button className="btn-primary mt-4 w-full">Poll</button>
            </div>
            <div className="card p-5">
              <div className="font-semibold mb-3">Trending</div>
              <ul className="space-y-2 text-sm text-white/80">
                {trendingTags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
            <button className="btn-ghost w-full">Post Your Fan Content</button>
          </aside>
        </div>
      </div>
    </section>
  );
}
