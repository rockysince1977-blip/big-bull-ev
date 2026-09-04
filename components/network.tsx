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
      <section id="network" className="bg-gray-50 px-3 py-3 sm:px-4 mt-10">
        <div className="rounded-sm bg-surface px-6 py-10 sm:px-10 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <h2 className="text-[2rem] leading-tight font-semibold tracking-tight sm:text-[2.5rem]">
                Find Your Dealer
              </h2>
              <p className="mt-2 max-w-xl text-[0.95rem] text-muted-foreground">
                Dealers and distributors across India, with genuine spare parts and low maintenance
                service centres.
              </p>
              <div className="mt-8 flex gap-3 flex-row">
                <Link href="/contact-us" className="tsl-btn tsl-btn-dark sm:w-auto">
                  <Button className={'bg-blue-600 text-white hover:bg-blue-700'}>Dealership Enquiry</Button>
                </Link>
                <Link href="tel:+919330900491" className="tsl-btn sm:w-auto">
                  <Button variant={`outline`} className="bg-white text-black hover:bg-gray-300 border border-gray-200">Call Sales</Button>
                </Link>
              </div>
            </div>
  
            <div className="grid grid-cols-2 gap-x-10 gap-y-1 sm:flex sm:gap-12">
              <div>
                <p className="text-4xl font-semibold tracking-tight sm:text-5xl">500+</p>
                <p className="mt-1 text-sm text-muted-foreground">Total Dealers</p>
              </div>
              <div>
                <p className="text-4xl font-semibold tracking-tight sm:text-5xl">12</p>
                <p className="mt-1 text-sm text-muted-foreground">States Covered</p>
              </div>
            </div>
          </div>
  
          <ul className="mt-10 flex flex-wrap gap-2">
            {STATES.map((s) => (
              <li
                key={s}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground/80"
              >
                {s}
                
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  