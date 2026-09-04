import Link from "next/link";
import { Button } from "./ui/button";

const STATES = [
  "West Bengal",
  "Gujarat",
  "Maharashtra",
  "Assam",
  "Odisha",
  "Rajasthan",
  "Uttarakhand",
  "Jharkhand",
  "Chhattisgarh",
  "Uttar Pradesh",
  "Bihar",
  "Madhya Pradesh",
];

export function Network() {
  return (
    <section id="network" className="bg-gray-50 px-2 py-3 sm:px-4 mt-10 overflow-hidden">
      <div className="rounded-sm bg-surface px-4 py-8 sm:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.5rem] font-semibold tracking-tight leading-tight">
              Find Your Dealer
            </h2>
            <p className="mt-2 max-w-xl text-sm sm:text-[0.95rem] text-muted-foreground leading-relaxed">
              Dealers and distributors across India, with genuine spare parts and low maintenance
              service centres.
            </p>
            
            {/* Stack buttons vertically on small screens, row on desktop */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/contact-us" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700">
                  Dealership Enquiry
                </Button>
              </Link>
              <Link href="tel:+919330900491" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-white text-black hover:bg-gray-300 border border-gray-200"
                >
                  Call Sales
                </Button>
              </Link>
            </div>
          </div>

          {/* Reduced gap-x on mobile so stat boxes stay within bounds */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:gap-12">
            <div>
              <p className="text-3xl font-semibold tracking-tight sm:text-5xl">500+</p>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">Total Dealers</p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-tight sm:text-5xl">12</p>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">States Covered</p>
            </div>
          </div>
        </div>

        {/* State Tags */}
        <ul className="mt-8 sm:mt-10 flex flex-wrap gap-2">
          {STATES.map((s) => (
            <li
              key={s}
              className="rounded-full bg-white px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-foreground/80 border border-gray-100"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}