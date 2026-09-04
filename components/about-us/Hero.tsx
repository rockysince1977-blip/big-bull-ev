import Image from "next/image";

const showroom =
  "https://www.bigbullerickshaw.in/wp-content/uploads/2023/05/SHOWROOM-BIGBULL-1024x768.png";

  export function Hero() {
    return (
      <section
        className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-8 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:pb-24 md:pt-14"
        aria-labelledby="company-heading"
      >
        <div className="flex flex-col justify-between rounded-[2rem] bg-zinc-950 p-7 text-white md:p-12">
          <div>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-sky-400">
              Our Company Walkthrough
            </p>
            <h1
              id="company-heading"
              className="max-w-xl text-balance text-5xl font-semibold tracking-[-0.06em] md:text-7xl"
            >
              Moving India toward a greener tomorrow.
            </h1>
          </div>
          <p className="mt-16 max-w-xl text-pretty text-lg leading-8 text-zinc-300">
            Big Bull is a pre-eminent organization known pan-India, engaged with
            the manufacturing and export of e-rickshaws and e-scooters. The
            e-rickshaw product line operates under the brand &quot;Big Bull&quot;
            and the electric scooter product line operates under the brand
            &quot;Prakriti&quot;.
          </p>
        </div>
        <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] bg-sky-100 md:min-h-[38rem]">
          <Image
            src={showroom}
            alt="Big Bull showroom"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/90 p-5 backdrop-blur-sm md:inset-x-8 md:bottom-8">
            <p className="text-sm font-medium text-zinc-600">
              Electric mobility, made easy to operate and built with long-lasting
              batteries.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export function IntroBar() {
    return (
      <div className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Built for the road ahead
          </p>
          <p className="text-pretty text-xl leading-8 text-zinc-700 md:col-span-2">
            Electric vehicles have low running costs due to fewer moving parts
            requiring maintenance, and they are also very environmentally
            friendly.
          </p>
        </div>
      </div>
    );
  }