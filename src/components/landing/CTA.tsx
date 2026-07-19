import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="bg-dot-pattern absolute inset-0 opacity-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter text-[#121212] mb-6 leading-none">
          STOP SWIPING WITH <br />
          <span className="text-[#D02020]">A BAD PROFILE.</span>
        </h2>
        <p className="text-lg font-medium text-[#121212] max-w-xl mx-auto mb-10 leading-relaxed">
          Unlock natural conversations and attract matches who like you for who you actually are. Start your 5-minute interview now.
        </p>
        <Link href="/sign-up" className="btn-primary text-lg px-12 py-4 shadow-[6px_6px_0px_0px_#121212] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-bauhaus">
          Build Your Profile Now
        </Link>
      </div>

      {/* Large decorative shapes in background */}
      <div className="absolute top-1/2 -left-16 w-32 h-32 rounded-full bg-[#1040C0] opacity-20 border-4 border-[#121212] pointer-events-none" />
      <div className="absolute bottom-4 right-12 w-24 h-24 bg-[#D02020] opacity-20 border-4 border-[#121212] rotate-45 pointer-events-none" />
    </section>
  );
}
