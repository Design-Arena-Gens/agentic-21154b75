'use client';

const companies = ["Orbit Labs", "Northern Tide", "Lumina AI", "Zephyr Health", "Atlas Audio"];

export function LogoMarquee() {
  return (
    <div className="relative mt-12 w-full overflow-hidden border-y border-white/10 bg-white/5 py-4">
      <div className="animate-[marquee_22s_linear_infinite] flex min-w-full items-center justify-center gap-16 text-sm uppercase tracking-[0.5em] text-white/30">
        {companies.concat(companies).map((company, index) => (
          <span key={`${company}-${index}`} className="whitespace-nowrap">
            {company}
          </span>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
