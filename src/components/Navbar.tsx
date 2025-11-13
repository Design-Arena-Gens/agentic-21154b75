import Link from "next/link";

const navigation = [
  { label: "Studio", href: "#studio" },
  { label: "Expertise", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 nav-gradient">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-lg font-semibold">
            LH
          </span>
          <div>
            <p className="text-lg font-semibold tracking-tight">Luma Horizon</p>
            <p className="text-xs text-white/60">Immersive Digital Studio</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-white/80 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
              scroll={false}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          scroll={false}
          className="hidden rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-white/20 md:block"
        >
          Start a Project
        </Link>
      </div>
    </header>
  );
}
