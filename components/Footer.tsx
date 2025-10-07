export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="section py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/70">© {new Date().getFullYear()} CoppaMagz</div>
        <nav className="flex gap-6 text-white/80">
          <a href="#">About</a><a href="#">Partners</a><a href="#">Contact</a><a href="#">Privacy</a>
        </nav>
        <div className="text-sm text-white/60">Powered by Vio Loyalty</div>
      </div>
    </footer>
  );
}
