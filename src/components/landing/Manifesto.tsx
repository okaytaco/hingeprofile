export function Manifesto() {
  return (
    <section id="how-it-works" className="py-20 px-6 border-b-4 border-[#121212] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#D02020]">
            THE BLUEPRINT
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[#121212] mt-2">
            HOW WE COACH YOU
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              bg: 'bg-[#D02020]',
              text: 'text-white',
              title: 'THE INTERVIEW',
              desc: 'Have a casual, zero-pressure text conversation with our coach. We ask about your background, career, music tastes, and ideal dates.',
            },
            {
              step: '02',
              bg: 'bg-[#F0C020]',
              text: 'text-[#121212]',
              title: 'ANALYSIS',
              desc: 'We map your traits using real psychology and calculate confidence levels. No fake algorithms—just capturing your actual voice.',
            },
            {
              step: '03',
              bg: 'bg-[#1040C0]',
              text: 'text-white',
              title: 'THE REVEAL',
              desc: 'Get an customized Hinge bio, premium prompt answers, and a curated photo guide with high-rizz captions that attract matches.',
            },
          ].map(({ step, bg, text, title, desc }) => (
            <div key={step} className={`border-4 border-[#121212] p-8 shadow-[6px_6px_0px_0px_#121212] relative overflow-hidden flex flex-col justify-between min-h-[250px] ${bg} ${text}`}>
              <div className="flex justify-between items-start">
                <h3 className="font-black text-2xl tracking-tighter uppercase leading-none">{title}</h3>
                {/* Rotated Step Number */}
                <div className="font-black text-3xl px-2 py-0.5 border-2 border-[#121212] bg-[#F0F0F0] text-[#121212] rotate-12 shadow-[2px_2px_0px_0px_#121212]">
                  {step}
                </div>
              </div>
              <p className="text-sm font-medium leading-relaxed mt-8 opacity-90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
