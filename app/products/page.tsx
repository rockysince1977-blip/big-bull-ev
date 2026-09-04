"use client";

import { useState } from "react";
// import Image from "next/image";
// import b5 from "@/assets/product-b5.jpg";
// import eco from "@/assets/product-eco.jpg";
// import loader from "@/assets/product-loader.jpg";
// import scooter from "@/assets/scooter.jpg";
import Image from "next/image";
import Link from "next/link";
import SafetySection from "@/components/saftey-secion";
import { Button } from "@/components/ui/button";
const FILTERS = [
  { key: "all", label: "All" },
  { key: "passenger", label: "Passenger" },
  { key: "loader", label: "Loader" },
  { key: "scooter", label: "Scooter" },
];

const PRODUCTS = [
  {
    id: "b5",
    category: "passenger",
    name: "Big Bull B5",
    tagline: "1200W Motor · Laser Guard Front Glass",
    detail: "Top class high quality model delivering up to 20% more mileage.",
    src: "/images/inventory-overhead.jpg",
    image: "/images/inventory-overhead.jpg",
    specs: {
      Motor: "1200W BLDC",
      Range: "80–100 km",
      Seating: "Driver + 4 Passengers",
      Warranty: "18 Months",
    },
  },
  {
    id: "b1",
    category: "passenger",
    name: "Big Bull B1",
    tagline: "Compact Passenger · High Mileage",
    detail: "A reliable everyday passenger e-rickshaw with low running costs.",
    src: "/images/inventory-overhead.jpg",
    image: "/images/inventory-overhead.jpg",
    specs: {
      Motor: "1000W BLDC",
      Range: "70–90 km",
      Seating: "Driver + 4 Passengers",
      Warranty: "18 Months",
    },
  },
  {
    id: "b2",
    category: "passenger",
    name: "Big Bull B2",
    tagline: "Comfort Seating · Durable Frame",
    detail: "Built for longer city duty cycles with reinforced bodywork.",
    src: "/images/inventory-overhead.jpg",
    image: "/images/inventory-overhead.jpg",
    specs: {
      Motor: "1100W BLDC",
      Range: "75–95 km",
      Seating: "Driver + 4 Passengers",
      Warranty: "18 Months",
    },
  },
  {
    id: "b3",
    category: "passenger",
    name: "Big Bull B3",
    tagline: "Premium Finish · Extra Legroom",
    detail: "Premium passenger variant with upgraded seating and finish.",
    src: "/images/inventory-overhead.jpg",
    image: "/images/inventory-overhead.jpg",
    specs: {
      Motor: "1200W BLDC",
      Range: "80–100 km",
      Seating: "Driver + 4 Passengers",
      Warranty: "18 Months",
    },
  },
  {
    id: "eco",
    category: "passenger",
    name: "Big Bull ECO Plus",
    tagline: "Foot Accelerator · Best Mileage",
    detail: "Best quality model built for long city duty cycles.",
    src: "/images/inventory-overhead.jpg",
    image: "/images/inventory-overhead.jpg",
    specs: {
      Motor: "1200W BLDC",
      Range: "90–110 km",
      Seating: "Driver + 4 Passengers",
      Warranty: "18 Months",
    },
  },
  {
    id: "loader",
    category: "loader",
    name: "Big Bull Loader",
    tagline: "1500W Motor · 1.7 & 1.8 Ton",
    detail: "Advanced features with two load capacities for every trade.",
    src: "/images/inventory-overhead.jpg",
    image: "/images/inventory-overhead.jpg",
    specs: {
      Motor: "1500W BLDC",
      Load: "1.7 / 1.8 Ton",
      Range: "60–80 km",
      Warranty: "18 Months",
    },
  },
  {
    id: "glider",
    category: "scooter",
    name: "Prakriti Glider",
    tagline: "Cruise Control · Reverse Button",
    detail: "Top class performance with the best mileage in its class.",
    src: "/images/inventory-overhead.jpg",
    image: "/images/inventory-overhead.jpg",
    specs: {
      Motor: "1000W Hub",
      Range: "70–90 km",
      Warranty: "18 Months",
      Paint: "PU Paint",
    },
  },
  {
    id: "super",
    category: "scooter",
    name: "Prakriti Super",
    tagline: "Repair Button · 18 Month Warranty",
    detail: "Full range of colours with practical city commuting features.",
    src: "/images/inventory-overhead.jpg",
    image: "/images/inventory-overhead.jpg",
    specs: {
      Motor: "1200W Hub",
      Range: "80–100 km",
      Warranty: "18 Months",
      Paint: "PU Paint",
    },
  },
];

export default function Page() {
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <div className="bg-background text-foreground">
      <section className="px-3 pt-24 pb-12 sm:px-4 sm:pt-28 lg:pt-32 lg:pb-20">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Our Range
        </p>
        <h1 className="mt-2 text-[2rem] leading-tight font-semibold tracking-tight sm:text-[2.5rem] lg:text-[3rem]">
          All Big Bull Vehicles
        </h1>
        <p className="mt-2 max-w-xl text-[0.95rem] text-muted-foreground">
          ICAT-approved electric rickshaws, cargo loaders and e-scooters built
          for Indian roads.
        </p>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-foreground text-primary-foreground"
                    : "bg-surface text-foreground hover:bg-muted"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-sm"
            >
              <Image
                src={p.src}
                alt={p.name}
                fill={true}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-black/75" />

              <p className="relative px-5 pt-5 text-xs font-medium tracking-wide text-white/85 uppercase drop-shadow">
                {p.category}
              </p>

              <div className="relative px-5 pb-6 text-white">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {p.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-white/90">
                  {p.tagline}
                </p>
                <p className="mt-1 text-sm text-white/75">{p.detail}</p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Link href="#dealership" className="tsl-btn tsl-btn-primary">
                    <Button className={`bg-blue-600 text-white hover:bg-blue-700 p-4`}>Book Now</Button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                    className="tsl-btn tsl-btn-light"
                  >
                    <Button className="bg-white text-black hover:bg-gray-300 border border-gray-200">{expanded === p.id ? "Hide" : "Details"}</Button>
                  </button>
                </div>

                {expanded === p.id && (
                  <dl className="mt-5 space-y-2 border-t border-white/20 pt-4 text-sm">
                    {Object.entries(p.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <dt className="text-white/70">{key}</dt>
                        <dd className="font-medium">{value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <SafetySection />

      <section className="px-3 py-3 pb-12 sm:px-4">
        <div className="overflow-hidden rounded-sm bg-gray-100 px-6 py-12 text-gray-900 sm:px-10">
          <h2 className="text-[1.75rem] leading-tight font-semibold tracking-tight sm:text-[2rem]">
            Genuine Spare Parts & Service
          </h2>
          <p className="mt-2 max-w-xl text-[0.95rem] text-gray-600">
            Authorised dealers and service centres across 12 states keep your
            vehicle running with original parts.
          </p>
          <div className="mt-6 flex gap-3 flex-row">
            <Link
              href="#dealership"
              className="tsl-btn tsl-btn-primary sm:w-auto"
            >
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Dealership Enquiry
              </Button>
            </Link>
            <Link
              href="tel:+919330900491"
              className="tsl-btn tsl-btn-light sm:w-auto"
            >
              <Button className="bg-white text-black hover:bg-gray-300 border border-gray-200">
                Call Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="px-3 py-3 pb-12 sm:px-4 mt-4">
        <div className="overflow-hidden rounded-sm bg-foreground px-6 py-12 text-white sm:px-10">
          <h2 className="text-[1.75rem] leading-tight font-semibold tracking-tight sm:text-[2rem]">
            Find your nearest dealer
          </h2>
          <p className="mt-2 max-w-xl text-[0.95rem] text-white/70">
            Talk to a Big Bull dealer today and book a test ride.
          </p>
          <div className="mt-6 flex gap-3 flex-row">
            <Link
              href="#dealership"
              className="tsl-btn tsl-btn-primary sm:w-auto"
            >
              <Button className={`bg-blue-600 text-white hover:bg-blue-700`}>
                Enquire Now
              </Button>
            </Link>
            <Link
              href="tel:+919330900491"
              className="tsl-btn tsl-btn-light sm:w-auto"
            >
              <Button className={`bg-white text-black hover:bg-gray-300`}>
                +91 93309 00491
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
