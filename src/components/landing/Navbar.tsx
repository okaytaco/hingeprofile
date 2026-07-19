import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 w-full z-50 bg-white border-b-4 border-[#121212]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <Link href="/" className="flex items-center gap-3 font-black text-xl uppercase tracking-tighter">
          {/* Bauhaus Geometric Logo */}
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-[#D02020] border-2 border-[#121212]" />
            <div className="w-5 h-5 bg-[#1040C0] border-2 border-[#121212]" />
            <div
              className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-[#F0C020] relative"
              style={{ filter: 'drop-shadow(2px 2px 0px #121212)' }}
            />
          </div>
          <span>ProfileCoach</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/sign-in" className="btn-ghost font-bold text-sm">
            Sign In
          </Link>
          <Link href="/sign-up" className="btn-primary text-sm px-6 py-2">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
