export function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-12 px-6 border-t-4 border-[#121212]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-[#D02020] border border-white" />
            <div className="w-4 h-4 bg-[#1040C0] border border-white" />
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#F0C020]" />
          </div>
          <span className="font-black tracking-tighter uppercase text-lg text-white">ProfileCoach</span>
        </div>
        <p className="text-xs text-neutral-400 font-medium tracking-wide">
          BUILT WITH FUNCTIONAL HONESTY • POWERED BY YOUR REAL PERSONALITY.
        </p>
      </div>
    </footer>
  );
}
