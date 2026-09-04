export function ValuesSection() {
  return (
    <section
      className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28"
      aria-labelledby="values-heading"
    >
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-600">
            What drives us
          </p>
          <h2
            id="values-heading"
            className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl"
          >
            Purpose in motion.
          </h2>
        </div>
        <p className="max-w-sm text-zinc-500">
          Responsible business practices, sustainable technology, and better
          everyday mobility.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-[1.75rem] border border-zinc-200 bg-white p-7 md:p-10">
          <span className="font-mono text-sm text-sky-600">01 / Vision</span>
          <h3 className="mt-16 text-3xl font-semibold tracking-tight">
            Our Vision
          </h3>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            By using the best of resources at hand, the company aims to change
            the lives of the people who are directly or indirectly connected to
            it, its products, and its business. Its responsible business
            practices involve people from all spheres of life. Its commitment to
            green and sustainable business is bringing eco-friendly technologies
            and awareness into the mainstream through its manufacturing process.
          </p>
        </article>
        <article className="rounded-[1.75rem] bg-sky-500 p-7 text-white md:p-10">
          <span className="font-mono text-sm text-sky-100">02 / Mission</span>
          <h3 className="mt-16 text-3xl font-semibold tracking-tight">
            Our Mission
          </h3>
          <p className="mt-5 text-lg leading-8 text-sky-50">
            Big Bull&apos;s objective is to promote the widespread use of
            electro-mobility in general and electric vehicles across India. The
            company aims to take small initiatives every day toward a greener
            future through its eco-friendly rickshaws. It also looks forward to
            generating employment opportunities and serving comfortable rides at
            a lower cost.
          </p>
        </article>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const items = [
    "Best quality product compared to Chinese counterparts",
    "100% genuine and quality spare parts for all E-Rickshaw models",
    "Dedicated vehicle designing team for customized E-Rickshaws, new designs, and new models",
    "In-house state-of-the-art manufacturing facilities in West Bengal",
    "90% indigenous products, with a product development team overseeing each product’s lifecycle",
  ];
  return (
    <section className="bg-zinc-950 text-white" aria-labelledby="why-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-[0.7fr_1.3fr] md:px-8 md:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime-400">
            Why Big Bull
          </p>
          <h2
            id="why-heading"
            className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl"
          >
            Built around trust.
          </h2>
        </div>
        <ul className="divide-y divide-zinc-800">
          {items.map((item, index) => (
            <li
              key={item}
              className="flex gap-5 py-6 text-lg leading-7 text-zinc-300"
            >
              <span className="font-mono text-sm text-lime-400">
                0{index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
