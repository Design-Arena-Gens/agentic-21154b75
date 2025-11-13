const links = [
  { label: "Behance", href: "https://www.behance.net/" },
  { label: "Dribbble", href: "https://dribbble.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "GitHub", href: "https://github.com/" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">Luma Horizon</p>
          <p className="mt-3 text-sm text-white/55">
            Independent studio crafting luminous digital narratives for fearless brands.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-white/60">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Luma Horizon. Crafted with intention on Planet Earth.
        </p>
      </div>
    </footer>
  );
}
