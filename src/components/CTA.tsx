export function CallToAction() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 pb-28 text-white"
      aria-labelledby="contact-title"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/20 via-brand-500/10 to-sky-500/10 p-12">
        <div className="absolute -right-32 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 left-12 h-36 w-36 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">
              Collaborate
            </span>
            <h2 id="contact-title" className="font-display text-4xl">
              Let’s explore the next frontier of your digital presence.
            </h2>
            <p className="text-sm text-white/75">
              Share your vision, problem, or wildest idea. We’ll assemble a dedicated strike team and
              respond within 48 hours.
            </p>
          </div>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-[0.3em] text-white/60">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nova Jacobs"
                className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/40"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-[0.3em] text-white/60">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="nova@orbital.io"
                className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/40"
              />
            </div>
            <div>
              <label
                htmlFor="project"
                className="block text-xs uppercase tracking-[0.3em] text-white/60"
              >
                Project Vision
              </label>
              <textarea
                id="project"
                name="project"
                placeholder="Describe your ambitions, challenges, and timeline..."
                rows={4}
                className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/40"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/25"
            >
              Share Your Brief
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
