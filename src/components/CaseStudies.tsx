import Image from "next/image";

const caseStudies = [
  {
    name: "Nova Orbital",
    industry: "Aerospace SaaS",
    headline: "Launch readiness platform reimagined for mission-critical teams.",
    impact: ["360% increase in qualified leads", "Integrations with NASA and ESA data streams"],
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Velvet Bloom",
    industry: "Luxury Retail",
    headline: "Immersive omnichannel storefront embracing tactile storytelling.",
    impact: ["42% conversion lift across markets", "Custom 3D product explorer and AR try-on"],
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "CodaWave",
    industry: "Creator Economy",
    headline: "Social content platform built for next-gen digital tastemakers.",
    impact: ["Over 1M monthly active users within six months", "Real-time collaboration suites"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  }
];

export function CaseStudiesSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-24">
      <div className="flex flex-col gap-6 pb-12">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
          Selected Work
        </span>
        <h2 className="font-display text-4xl text-white md:text-5xl">
          Scaling impact through tailored end-to-end partnerships.
        </h2>
      </div>
      <div className="grid gap-8">
        {caseStudies.map((project) => (
          <article
            key={project.name}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition duration-500 hover:border-brand-400/60"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500/0 via-brand-500/10 to-brand-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative h-full min-h-[280px]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/20 to-transparent mix-blend-multiply" />
              </div>
              <div className="flex flex-col gap-6 p-10">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{project.industry}</p>
                  <h3 className="text-3xl font-semibold text-white">{project.name}</h3>
                </div>
                <p className="text-base text-white/70">{project.headline}</p>
                <ul className="space-y-3 text-sm text-white/60">
                  {project.impact.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-400 to-sky-400" />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
                <button className="mt-auto w-max rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white">
                  View Case Study
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
