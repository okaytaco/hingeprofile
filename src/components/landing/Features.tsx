export function Features() {
  return (
    <section className="py-20 px-6 bg-[#F0C020] border-b-4 border-[#121212]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#1040C0]">
            THE SPECIFICATIONS
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[#121212] mt-2">
            WHAT YOU GET
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Dynamic Coaching', desc: 'The AI adaptively updates questions to cover empty spots in your profile.', accent: 'circle' },
            { title: 'Trait Metrics', desc: 'See confidence scores on your hobbies, fitness, relationship goals, and career.', accent: 'square' },
            { title: 'Elite Copywriting', desc: 'Custom prompts chosen specifically to tell your story and invite banter.', accent: 'triangle' },
            { title: 'Zero Clichés', desc: 'No generic tech-bro jokes, standard pick-up lines, or fake quotes.', accent: 'circle' },
            { title: 'Photo Playbook', desc: 'Ordered composition suggestions detailing background, clothing, and vibe.', accent: 'square' },
            { title: 'Hinge Emulator', desc: 'Review your complete bio and prompt preview styled exactly like Hinge.', accent: 'triangle' },
          ].map(({ title, desc, accent }) => (
            <div key={title} className="bg-white border-4 border-[#121212] p-6 shadow-[6px_6px_0px_0px_#121212] relative flex flex-col justify-between min-h-[160px]">
              {/* Small geometric accent shape in top right corner */}
              <div className="absolute top-4 right-4">
                {accent === 'circle' && <div className="w-4 h-4 rounded-full bg-[#D02020] border-2 border-[#121212]" />}
                {accent === 'square' && <div className="w-4 h-4 bg-[#1040C0] border-2 border-[#121212] rotate-12" />}
                {accent === 'triangle' && <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#F0C020] filter drop-shadow-[1px_1px_0px_#121212]" />}
              </div>

              <h3 className="font-black text-xl tracking-tighter uppercase mb-2">{title}</h3>
              <p className="text-[#121212] text-xs font-medium leading-relaxed opacity-95">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
