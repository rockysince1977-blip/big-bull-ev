import { CanvasText } from "@/components/ui/canvas-text";
import Image from "next/image";

const showroom = "/about-hero-img.jpg";
const team = [
  {
    name: "Deepak Gupta",
    role: "Director",
    photo:
      "https://www.bigbullerickshaw.in/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-27-at-11.54.37.jpeg",
    bio: "Dipak Gupta serves Big Bull as the Marketing and Operations Director, leading the organization's staff, board, and supporters to advance the company's mission. He oversees and directs marketing strategies and efforts to strengthen the company's market position and achieve desired business goals.",
  },
  {
    name: "Deepak Shaw",
    role: "Director",
    photo:
      "https://www.bigbullerickshaw.in/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-27-at-11.54.36.jpeg",
    bio: "Deepak Kumar Shaw serves Big Bull as the Sales Director, leading the sales process. He manages and oversees sales operations, develops and cultivates relationships with clients, and evaluates costs to determine product pricing when selling to customers.",
  },
];
const locations = [
  "Assam",
  "Odisha",
  "Rajasthan",
  "Bihar",
  "Jharkhand",
  "Chattisgarh",
];
const products = [
  {
    name: "E-Rickshaw",
    href: "https://www.bigbullerickshaw.in/e-rickshaw-loader/",
  },
  { name: "E-Scooty", href: "https://www.bigbullerickshaw.in/scooty/" },
  { name: "Spare Parts", href: "http://babagold.co.in/" },
];
const reasons = [
  "Best quality product compared to Chinese counterparts",
  "100% genuine and quality spare parts for all E-Rickshaw models",
  "Dedicated vehicle designing team for customized E-Rickshaws, new designs, and new models",
  "In-house state-of-the-art manufacturing facilities in West Bengal",
  "90% indigenous products, with a product development team overseeing each product’s lifecycle",
];

function Hero() {
  return (
    <section className="mt-20 lg:mt-40  mx-auto grid max-w-7xl gap-5 px-4 pb-16 pt-6 sm:gap-6 sm:pt-10 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:pb-24">
      <div className="flex flex-col justify-between rounded-[1.75rem] bg-zinc-950 p-6 text-white sm:p-8 md:rounded-[2rem] md:p-12">
        <div>
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
            Our Company Walkthrough
          </p>
          <h1 className="max-w-xl text-balance text-4xl font-semibold tracking-[-0.06em] sm:text-5xl md:text-7xl">
          <CanvasText
              backgroundClassName="bg-blue-600"
              text="Moving India"
              colors={["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4"]}
            />
            <br/>
             toward a 
             <br/>
             <CanvasText
              backgroundClassName="bg-green-500"
              text="greener tomorrow"
              colors={["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4"]}
            />
            

          </h1>
        </div>
        <p className="mt-12 max-w-xl text-pretty text-base leading-7 text-zinc-300 sm:mt-16 sm:text-lg sm:leading-8">
          Big Bull is a pre-eminent organization known pan-India, engaged with
          the manufacturing and export of e-rickshaws and e-scooters. The
          e-rickshaw product line operates under the brand &quot;Big Bull&quot;
          and the electric scooter product line operates under the brand
          &quot;Prakriti&quot;.
        </p>
      </div>
      <div className="relative min-h-[24rem] overflow-hidden rounded-[1.75rem] bg-blue-100 sm:min-h-[30rem] md:min-h-[38rem] md:rounded-[2rem]">
        <Image
          src={showroom}
          alt="Big Bull showroom"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
        <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 p-4 backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-5">
          <p className="text-sm font-medium text-zinc-600">
            Electric mobility, made easy to operate and built with long-lasting
            batteries.
          </p>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8 md:py-28">
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600">
              What drives us
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Purpose in motion.
            </h2>
          </div>
          <p className="max-w-sm text-zinc-500">
            Responsible business practices, sustainable technology, and better
            everyday mobility.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-[1.5rem] border border-zinc-200 p-6 sm:p-8 md:rounded-[1.75rem] md:p-10">
            <span className="font-mono text-sm text-blue-600">01 / Vision</span>
            <h3 className="mt-12 text-3xl font-semibold tracking-tight sm:mt-16">
              Our Vision
            </h3>
            <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              By using the best of resources at hand, the company aims to change
              the lives of the people who are directly or indirectly connected
              to it, its products, and its business. Its responsible business
              practices involve people from all spheres of life. Its commitment
              to green and sustainable business is bringing eco-friendly
              technologies and awareness into the mainstream through its
              manufacturing process.
            </p>
          </article>
          <article className="rounded-[1.5rem] bg-blue-600 p-6 text-white sm:p-8 md:rounded-[1.75rem] md:p-10">
            <span className="font-mono text-sm text-blue-100">
              02 / Mission
            </span>
            <h3 className="mt-12 text-3xl font-semibold tracking-tight sm:mt-16">
              Our Mission
            </h3>
            <p className="mt-5 text-base leading-7 text-blue-50 sm:text-lg sm:leading-8">
              Big Bull&apos;s objective is to promote the widespread use of
              electro-mobility in general and electric vehicles across India.
              The company aims to take small initiatives every day toward a
              greener future through its eco-friendly rickshaws. It also looks
              forward to generating employment opportunities and serving
              comfortable rides at a lower cost.
            </p>
          </article>
        </div>
      </section>
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:py-20 md:grid-cols-[0.7fr_1.3fr] md:px-8 md:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
              Why Big Bull
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Built around trust.
            </h2>
          </div>
          <ul className="divide-y divide-zinc-800">
            {reasons.map((item, index) => (
              <li
                key={item}
                className="flex gap-5 py-5 text-base leading-7 text-zinc-300 sm:py-6 sm:text-lg"
              >
                <span className="font-mono text-sm text-blue-400">
                  0{index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function StatsAndTeam() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-16 md:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {[
            "High-octane solution",
            "R&D Wing",
            "Troubleshooting Solution",
            "Best Outcomes",
          ].map((stat) => (
            <div
              key={stat}
              className="rounded-2xl bg-zinc-100 p-5 sm:p-6 md:p-8"
            >
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                0%
              </p>
              <p className="mt-3 text-sm text-zinc-500">{stat}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8 md:py-28">
        <div className="mb-10 md:mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600">
            The people behind the progress
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl">
            Our Team Members
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white md:rounded-[1.75rem]"
            >
              <div className="relative aspect-[4/3] bg-zinc-100">
                <Image
                  src={member.photo}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                  <span className="font-mono text-xs uppercase text-blue-600">
                    {member.role}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-zinc-600">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function NetworkAndContact() {
  return (
    <>
      <section className="bg-zinc-100">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div className="rounded-[1.5rem] bg-white p-6 sm:p-8 md:rounded-[1.75rem] md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600">
              Operating states
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Where we move.
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-x-5">
              {locations.map((location) => (
                <span
                  className="border-t border-zinc-200 py-4 text-lg"
                  key={location}
                >
                  {location}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-blue-600 p-6 text-white sm:p-8 md:rounded-[1.75rem] md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-100">
              Our range
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Products for every journey.
            </h2>
            <div className="mt-10">
              {products.map((product) => (
                <a
                  className="flex items-center justify-between border-t border-blue-400 py-5 text-xl hover:text-blue-100"
                  key={product.name}
                  href={product.href}
                >
                  {product.name}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8 md:py-28">
        <div className="rounded-[1.75rem] bg-zinc-950 p-6 text-white sm:p-8 md:rounded-[2rem] md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:gap-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
                Come say hello
              </p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Let&apos;s build a cleaner commute.
              </h2>
            </div>
            <div className="text-zinc-300">
              <p className="font-medium text-white">Corporate Office</p>
              <address className="mt-4 not-italic leading-7">
                17th Floor, Room No. 10, Chatterjee International Centre, 33A,
                Jawaharlal Nehru Road, Park Street Area, Kolkata, West Bengal -
                700071.
                <br />
                Landmark: Beside Metro Bhavan.
              </address>
              <div className="mt-8 space-y-2">
                <a
                  className="block hover:text-blue-400"
                  href="tel:+919330900491"
                >
                  +91 93309 00491
                </a>
                <a
                  className="block hover:text-blue-400"
                  href="mailto:info@bigbullerickshaw.in"
                >
                  info@bigbullerickshaw.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <Hero />
      <div className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:py-12 md:grid-cols-3 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Built for the road ahead
          </p>
          <p className="text-pretty text-lg leading-8 text-zinc-700 sm:text-xl md:col-span-2">
            Electric vehicles have low running costs due to fewer moving parts
            requiring maintenance, and they are also very environmentally
            friendly.
          </p>
        </div>
      </div>
      <Values />
      <StatsAndTeam />
      <NetworkAndContact />
    </main>
  );
}
