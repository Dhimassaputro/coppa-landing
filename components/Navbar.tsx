'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-coppaDark/80 to-transparent backdrop-blur-md">
      <nav className="section flex items-center justify-between py-4">
        <Link href="/" className="font-extrabold text-xl">COPPAMAGZ</Link>
        <ul className="hidden md:flex gap-6 text-white/85">
          <li><a href="#rewards">Home</a></li>
          <li><a href="#rewards">Vocher</a></li>
          <li><a href="#articles">Community</a></li>
          <li><a href="#community">Event</a></li>
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <span className="badge">⭐ 1,250 XP</span>
          <button className="btn-ghost">Sign In</button>
        </div>
      </nav>
    </header>
  );
}
