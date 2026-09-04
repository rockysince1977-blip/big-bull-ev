import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const FEATURES = [
  "Cruise Control Button",
  "Reverse Button Switch",
  "Repair Button Switch",
  "PU Paint · 18 Month Warranty",
];

export function Scooter() {
  return (
    <section id="scooter" className="">
      <div className=" overflow-hidden rounded-sm bg-foreground text-white mt-10">
        {/* Image container using object-contain to prevent image distortion */}
        <div className="relative w-full bg-zinc-950/80 flex justify-center">
          <Image
            src={'/scooter.jpg'}
            alt="Prakriti electric scooter"
            loading="lazy"
            width={1600}
            height={1008}
            className="w-full h-auto max-h-[22rem] sm:max-h-[26rem] object-contain object-center"
          />
        </div>

        {/* Info section with reduced vertical padding for a classic compact look */}
        <div className="px-6 py-6 sm:px-10 sm:py-7">
          <h2 className="text-[1.85rem] leading-tight font-semibold tracking-tight sm:text-[2.25rem]">
            Prakriti Glider &amp; Super
          </h2>
          <p className="mt-1.5 text-[0.95rem] text-white/70">
            Top class performance with the best mileage in its class, in a full range of colours.
          </p>
          <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li
                key={f}
                className="border-t border-white/15 pt-2 text-sm font-medium text-white/90"
              >
                {f}
              </li>
            ))}
          </ul>

          {/* Buttons with enlarged touch targets and desktop scaling */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="#dealership" className="tsl-btn tsl-btn-primary w-full sm:w-auto">
              <Button className="w-full sm:w-auto lg:h-12 lg:px-8 lg:text-base font-medium">
                Order Now
              </Button>
            </Link>
            <Link href="#network" className="tsl-btn tsl-btn-light w-full sm:w-auto">
              <Button className="w-full sm:w-auto lg:h-12 lg:px-8 lg:text-base font-medium">
                Know More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}