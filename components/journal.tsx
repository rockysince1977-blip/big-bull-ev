const POSTS = [
    {
      date: "20 Sep",
      category: "E-Rickshaw",
      title: "Maintenance of electric rickshaw for future use",
    },
    {
      date: "20 Aug",
      category: "E-Rickshaw",
      title: "Empowering local communities with e-rickshaw economic impact",
    },
    {
      date: "19 Jul",
      category: "Electric Mobility",
      title: "Rise of electric rickshaw in public transportation emergencies",
    },
  ];
  
  export function Journal() {
    return (
      <section className="px-3 py-3 sm:px-4 bg-gray-50 mt-10">
        <div className="rounded-sm bg-surface px-6 py-10 sm:px-10">
          <h2 className="text-[2rem] leading-tight font-semibold tracking-tight sm:text-[2.5rem]">
            Latest From Big Bull
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {POSTS.map((p) => (
              <article key={p.title} className="rounded-sm bg-white p-6">
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {p.date} · {p.category}
                </p>
                <h3 className="mt-3 text-lg leading-snug font-medium">{p.title}</h3>
                <p className="mt-5 text-sm font-medium text-tesla-blue tsl-link text-blue-700 underline">Read Article</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  