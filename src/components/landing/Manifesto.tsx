'use client';

export function Manifesto() {
  return (
    <section className="relative overflow-hidden border-y-4 border-ink bg-ink px-4 py-20 text-paper sm:px-10 sm:py-32 lg:py-40">
      <div className="grain absolute inset-0" />

      {/* Faint watermark background */}
      <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[14vw] font-black uppercase leading-none text-[#C6FF4D]/[0.05] sm:text-[11vw]">
        What do we do?
      </span>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Subtitle tag */}
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[#C6FF4D] px-3 py-1 sm:px-4 sm:py-1.5 font-display text-[10px] sm:text-xs font-bold uppercase tracking-widest text-ink shadow-[4px_4px_0px_#f3eee2]">
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-ink" />
          What do we do?
        </div>

        {/* Heading */}
        <h2 className="mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4 font-display text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl xl:text-8xl">
          <span className="text-paper">No Forms.</span>
          <span className="text-paper">No Templates.</span>
          <span className="mt-1 sm:mt-2 inline-block -rotate-1 rounded-xl sm:rounded-2xl border-3 sm:border-4 border-ink bg-[#C6FF4D] px-4 py-2 sm:px-6 sm:py-3 text-ink shadow-[6px_6px_0px_#f3eee2] sm:shadow-[8px_8px_0px_#f3eee2] transition-transform duration-300 hover:rotate-0 hover:scale-105">
            Just Conversations.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="mx-auto mt-8 sm:mt-12 max-w-2xl font-sans text-base font-medium leading-relaxed text-paper/80 sm:text-xl">
          A good profile doesn&apos;t come from a checklist. It comes from a real conversation that notices what
          makes you, then gets out of the way and lets that come through.
        </p>
      </div>
    </section>
  );
}
