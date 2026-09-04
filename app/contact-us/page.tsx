export default function ContactSection() {
    return (
      <section
        aria-labelledby="contact-heading"
        className="border-t border-zinc-200 bg-zinc-50 px-4 py-16 sm:py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600">
              Contact us
            </p>
            <h2
              id="contact-heading"
              className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl"
            >
              Get in touch with us.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
              Have a question about our vehicles, dealership opportunities, or
              service network? We would love to hear from you.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[1.5rem] bg-zinc-950 p-6 text-white sm:p-8 md:rounded-[1.75rem] md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
                Contact info
              </p>
              <div className="mt-10 space-y-8">
                <div>
                  <p className="text-sm text-zinc-400">Email address</p>
                  <a
                    className="mt-2 block break-all text-lg hover:text-blue-400"
                    href="mailto:info@bigbullerickshaw.in"
                  >
                    info@bigbullerickshaw.in
                  </a>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Call us</p>
                  <a
                    className="mt-2 block text-lg hover:text-blue-400"
                    href="tel:+919433939169"
                  >
                    +91 94339 39169
                  </a>
                  <a
                    className="mt-1 block text-lg hover:text-blue-400"
                    href="tel:+919330900491"
                  >
                    +91 93309 00491
                  </a>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">WhatsApp us</p>
                  <a
                    className="mt-2 block text-lg hover:text-blue-400"
                    href="https://wa.me/919330900491"
                  >
                    +91 9330900491
                  </a>
                </div>
              </div>
              <div className="mt-12 border-t border-zinc-800 pt-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
                  Corporate office
                </p>
                <address className="mt-4 not-italic leading-7 text-zinc-300">
                  17th Floor, Room No. 10, Chatterjee International Centre, 33A,
                  Jawaharlal Nehru Road, Park Street Area, Kolkata West
                  Bengal-700071
                </address>
              </div>
            </div>
            <form className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 sm:p-8 md:rounded-[1.75rem] md:p-10">
              <div className="mb-8">
                <p className="text-sm font-medium text-blue-600">
                  Please fill up the form below
                </p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                  Your information
                </h3>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium">
                  Name
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="rounded-xl border border-zinc-300 px-4 py-3 font-normal outline-none transition placeholder:text-zinc-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium">
                  Email
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-xl border border-zinc-300 px-4 py-3 font-normal outline-none transition placeholder:text-zinc-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium">
                  Phone
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="rounded-xl border border-zinc-300 px-4 py-3 font-normal outline-none transition placeholder:text-zinc-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                  />
                </label>
                <div aria-hidden="true" className="hidden sm:block" />
                <label className="grid gap-2 text-sm font-medium sm:col-span-2">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="How can we help?"
                    className="resize-y rounded-xl border border-zinc-300 px-4 py-3 font-normal outline-none transition placeholder:text-zinc-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Submit inquiry
              </button>
            </form>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-zinc-200 bg-white p-5">
              <h3 className="font-semibold">Registered Office</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                20, Round Tank Lane, Howrah-711101
              </p>
              <a
                className="mt-3 block text-sm text-blue-600"
                href="tel:+918100202881"
              >
                +91 81002 02881
              </a>
            </article>
            <article className="rounded-2xl border border-zinc-200 bg-white p-5">
              <h3 className="font-semibold">Warehouse</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Plot no. 17, Daga Complex, Near Green View Nursing Home, Howrah,
                West Bengal-711302
              </p>
            </article>
            <article className="rounded-2xl border border-zinc-200 bg-white p-5">
              <h3 className="font-semibold">Ahmedabad Warehouse</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                B/H FR Chem, Khurpur Road, Ahmedabad, Mehsana Highway Nandasan,
                Kadi, Pin - 382705
              </p>
            </article>
          </div>
        </div>
      </section>
    );
  }