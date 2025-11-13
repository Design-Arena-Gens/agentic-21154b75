const testimonials = [
  {
    quote:
      "Luma Horizon has become an extension of our internal product team. Their ability to translate complex systems into lucid experiences is unmatched.",
    name: "Marin Okada",
    title: "Chief Product Officer, Nova Orbital"
  },
  {
    quote:
      "They challenge assumptions with data, passion, and artistry. We saw a 6x return on our replatform investment within four months.",
    name: "Isabella Duarte",
    title: "VP of Growth, Velvet Bloom"
  },
  {
    quote:
      "From sprint zero to launch, the studio navigated every pivot with clarity. The craftsmanship and collaboration are exceptional.",
    name: "Javier Ríos",
    title: "Founder, CodaWave"
  }
];

const recognitions = [
  "Webby Awards — Best Digital Product Experience",
  "Awwwards — Agency of the Year Finalist",
  "Site Inspire — Editor’s Choice",
  "FWA — Site of the Day (4x)"
];

export function TestimonialsSection() {
  return (
    <section id="insights" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.05] p-10 backdrop-blur">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
            Voices
          </span>
          <h2 className="font-display text-4xl text-white">
            Trusted by teams reinventing bold categories.
          </h2>
          <div className="space-y-8">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-2xl border border-white/10 bg-black/40 p-6"
              >
                <p className="text-base leading-relaxed text-white/70">“{testimonial.quote}”</p>
                <footer className="mt-4 text-sm font-semibold text-white">
                  {testimonial.name} · <span className="font-normal text-white/60">{testimonial.title}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
        <div className="frosted space-y-6 p-10">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
            Recognitions
          </span>
          <p className="text-lg text-white/70">
            Our work is celebrated by global juries and communities setting the benchmarks for digital
            craft and innovation.
          </p>
          <ul className="space-y-4 text-sm text-white/70">
            {recognitions.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-400 to-sky-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
