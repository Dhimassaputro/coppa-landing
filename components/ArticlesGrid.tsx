import Image from 'next/image';
import { articles } from '@/lib/mock';

export default function ArticlesGrid() {
  return (
    <section id="articles" className="py-14 bg-white/5">
      <div className="section">
        <h2 className="h2 mb-8">Latest From CoppaMagz</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map(a => (
            <article key={a.title} className="card overflow-hidden">
              <Image src={a.img} alt={a.title} width={800} height={500} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{a.title}</h3>
                <p className="p mt-2">{a.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a className="btn-primary" href="#">Read More</a>
                  <span className="badge">+10 XP for sharing</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
