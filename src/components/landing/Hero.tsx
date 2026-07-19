import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative border-b-4 border-[#121212]">
      <div className="grid lg:grid-cols-12 min-h-[500px]">
        {/* Left Copy Panel */}
        <div className="lg:col-span-7 flex flex-col justify-center p-8 sm:p-12 lg:p-16 bg-[#F0F0F0]">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-[#F0C020] text-[#121212] border-2 border-[#121212] font-black text-xs uppercase tracking-widest mb-6 shadow-[2px_2px_0px_0px_#121212]">
              🤖 REAL DATING COACHES IN YOUR POCKET
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-[#121212] mb-6">
              YOUR PROFILE, <br />
              <span className="text-[#D02020] block mt-2">ACTUALLY YOU.</span>
            </h1>

            <p className="text-lg text-[#121212] font-medium max-w-xl mb-8 leading-relaxed">
              No generic templates. No cringe pickup lines. We interview you through natural voice/text conversation, analyze your real humor, and write a Hinge profile that sounds 100% human and full of natural rizz.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/sign-up" className="btn-primary text-base px-8 py-3.5 shadow-[4px_4px_0px_0px_#121212] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-bauhaus">
                Start Your Interview →
              </Link>
              <a href="#how-it-works" className="btn-secondary text-base px-8 py-3.5 shadow-[4px_4px_0px_0px_#121212] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-bauhaus bg-[#1040C0]">
                See How It Works
              </a>
            </div>
          </div>
        </div>

        {/* Right Artistic Geometric Panel */}
        <div className="lg:col-span-5 bg-[#1040C0] border-t-4 lg:border-t-0 lg:border-l-4 border-[#121212] relative overflow-hidden flex items-center justify-center p-12 min-h-[400px]">
          <div className="bg-dot-pattern-light absolute inset-0 opacity-40" />

          {/* Constructivist Poster Composition */}
          <div className="relative w-72 h-72 border-4 border-[#121212] bg-[#F0F0F0] shadow-[12px_12px_0px_0px_#121212] p-8 overflow-hidden flex flex-col justify-between">
            {/* Red Circle */}
            <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-[#D02020] border-4 border-[#121212]" />

            {/* Yellow Rotated Square */}
            <div className="absolute bottom-6 left-6 w-24 h-24 bg-[#F0C020] border-4 border-[#121212] rotate-12" />

            {/* Black Diagonal Divider Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#121212] -rotate-45" />

            <div className="relative z-10">
              <p className="font-black text-2xl tracking-tighter text-[#121212]">FORM</p>
              <p className="font-black text-2xl tracking-tighter text-[#121212] leading-[0.8]">FOLLOWS</p>
            </div>
            <div className="relative z-10 text-right">
              <p className="font-black text-3xl tracking-widest text-[#1040C0] bg-white border-2 border-[#121212] px-2 py-0.5 inline-block uppercase leading-none">RIZZ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
