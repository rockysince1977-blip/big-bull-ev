const locations = [
  {
    name: "Assam",
    href: "https://www.bigbullerickshaw.in/big-bull-e-rickshaw-in-assam/",
  },
  {
    name: "Odisha",
    href: "https://www.bigbullerickshaw.in/e-rickshaw-in-odisha/",
  },
  {
    name: "Rajasthan",
    href: "https://www.bigbullerickshaw.in/e-rickshaw-rajasthan/",
  },
  { name: "Bihar" },
  { name: "Jharkhand" },
  { name: "Chattisgarh" },
];
const products = [
  {
    name: "E-Rickshaw",
    href: "https://www.bigbullerickshaw.in/e-rickshaw-loader/",
  },
  { name: "E-Scooty", href: "https://www.bigbullerickshaw.in/scooty/" },
  { name: "Spare Parts", href: "http://babagold.co.in/" },
];
export function NetworkSection() {
  return (
    <section className="bg-zinc-100" aria-labelledby="network-heading">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div className="rounded-[1.75rem] bg-white p-7 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-600">
            Operating states
          </p>
          <h2
            id="network-heading"
            className="mt-4 text-4xl font-semibold tracking-tight"
          >
            Where we move.
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-x-5">
            {locations.map((location) =>
              location.href ? (
                <a
                  className="border-t border-zinc-200 py-4 text-lg transition-colors hover:text-sky-600"
                  key={location.name}
                  href={location.href}
                >
                  {location.name}
                  <span className="ml-2 text-sm">↗</span>
                </a>
              ) : (
                <span
                  className="border-t border-zinc-200 py-4 text-lg"
                  key={location.name}
                >
                  {location.name}
                </span>
              )
            )}
          </div>
        </div>
        <div className="rounded-[1.75rem] bg-sky-500 p-7 text-white md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-100">
            Our range
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Products for every journey.
          </h2>
          <div className="mt-12">
            {products.map((product) => (
              <a
                className="flex items-center justify-between border-t border-sky-400 py-5 text-xl hover:text-sky-100"
                key={product.name}
                href={product.href}
              >
                {product.name}
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
