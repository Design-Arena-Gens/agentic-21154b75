const stats = [
  { label: "Experiences Delivered", value: "120+" },
  { label: "Client NPS", value: "92" },
  { label: "Average ROI", value: "6.4x" },
  { label: "Countries Served", value: "14" }
];

const pillars = [
  {
    title: "Narrative-driven strategy",
    description:
      "We uncover the emotional drivers behind your brand to architect journeys that resonate across every touchpoint."
  },
  {
    title: "Impeccable visual design",
    description:
      "Crafting cinematic interfaces with dynamic depth, sophisticated typography, and purposeful motion."
  },
  {
    title: "Intelligent engineering",
    description:
      "Combining modern frameworks, headless architectures, and resilient infrastructures for global scale."
  }
];

export function StudioSection() {
  return (
    <section id="studio" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-10">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
            About the studio
          </span>
          <h2 className="font-display text-4xl leading-snug text-white md:text-5xl">
            We are an independent collective of designers, developers, and strategists building the
            future of brand presence.
          </h2>
          <p className="text-lg text-white/65">
            From fast-moving startups to global enterprises, Luma Horizon helps teams craft digital
            ecosystems that feel cinematic, perform lightning fast, and convert with intention. We
            put experimentation, inclusivity, and sustainability at the core of everything we ship.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="frosted p-6 shadow-glow shadow-brand-500/10">
                <p className="text-lg font-semibold text-white">{pillar.title}</p>
                <p className="mt-3 text-sm text-white/60">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">Impact</p>
          <div className="grid gap-6 md:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
