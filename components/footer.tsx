const COLUMNS = [
  { title: "Products", links: ["E-Rickshaw", "Loader", "E-Scooty", "Spare Parts"] },
  { title: "Locations", links: ["West Bengal", "Gujarat", "Assam", "Odisha", "Rajasthan"] },
  { title: "Company", links: ["About Us", "Career", "CSR Policy", "Contact"] },
];

export function Footer() {
  return (
    <footer id="dealership" className="px-3 pb-8 sm:px-4 bg-gray-100">
      <div className="rounded-sm bg-surface px-6 py-12 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
          <div>
            <p className="text-[1.05rem] font-semibold tracking-[0.42em] uppercase">Big Bull</p>
            <h2 className="mt-6 text-sm font-semibold tracking-wide uppercase">Corporate Office</h2>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              17th Floor, Room No. 10, Chatterjee International Centre, 33A Jawaharlal Nehru Road,
              Park Street Area, Kolkata, West Bengal 700071 — beside Metro Bhavan.
            </p>
            <a href="tel:+919330900491" className="mt-4 block text-sm font-medium tsl-link">
              +91 93309 00491
            </a>
            <p className="text-sm text-muted-foreground">info@bigbullerickshaw.in</p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-semibold tracking-wide uppercase">{col.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {col.links.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-border pt-6 text-xs text-muted-foreground">
          <span>Big Bull Trader Pvt Ltd © 2026</span>
          <span>Privacy &amp; Legal</span>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>LinkedIn</span>
          <span>YouTube</span>
        </div>
      </div>
    </footer>
  );
}
