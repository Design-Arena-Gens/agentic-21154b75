const serviceGroups = [
  {
    title: "Strategy",
    description:
      "Identity, positioning, messaging, experience strategy, digital roadmaps, analytics frameworks.",
    items: ["Brand blueprinting", "Research sprints", "Experience mapping", "North-star metrics"]
  },
  {
    title: "Design",
    description:
      "Product and marketing design systems crafted to international accessibility and performance standards.",
    items: ["Immersive web design", "Design systems", "3D & motion design", "Conversion design"]
  },
  {
    title: "Engineering",
    description:
      "High-performing architectures built on modern frameworks, optimized for speed, scale, and maintainability.",
    items: ["Full-stack development", "Headless CMS", "E-commerce", "Performance engineering"]
  },
  {
    title: "Growth",
    description:
      "Lifecycle experiences that nurture audiences, drive engagement, and convert momentum into measurable ROI.",
    items: ["Product experimentation", "Content automation", "Lifecycle campaigns", "SEO & analytics"]
  }
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-24"
      aria-labelledby="services-title"
    >
      <div className="flex flex-col gap-6 pb-12">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
          Capabilities
        </span>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 id="services-title" className="font-display text-4xl leading-snug text-white md:text-5xl">
            Full-stack studio obsessing over every stage of the digital journey.
          </h2>
          <p className="max-w-lg text-sm text-white/60">
            We architect each engagement as a symphony of design, engineering, and storytelling to drive
            results that compound over time.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {serviceGroups.map((service) => (
          <article
            key={service.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.02] to-black/60 p-8 transition duration-300 hover:border-brand-400/50"
          >
            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="absolute -top-16 left-0 h-32 w-32 rounded-full bg-brand-500/30 blur-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
            <p className="mt-4 text-sm text-white/60">{service.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-6 rounded-full bg-gradient-to-r from-brand-400 to-sky-400" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
