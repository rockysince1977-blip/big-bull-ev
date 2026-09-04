import Image from "next/image";
import Link from "next/link";

export default function SafetySection() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16 lg:gap-28">
        {/* Image Column - Order 1 on mobile (top), Order 2 on desktop (right) */}
        <div className="w-full lg:w-7/12 order-1 lg:order-2">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-100">
            <Image
              src="/images/inventory-overhead.jpg"
              alt="Tesla interior with mother securing child in safety seat"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content Column - Order 2 on mobile (bottom), Order 1 on desktop (left) */}
        <div className="w-full lg:w-5/12 order-2 lg:order-1 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
            Engineered for Your Safety
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            <p>
              Safety at Tesla is paramount. Every Tesla vehicle is designed with
              impact-absorbing zones, a stiff passenger compartment to minimize
              intrusion and multiple airbags to help protect occupants.
            </p>

            <p>
              Active safety features can help reduce impact severity or help prevent
              accidents altogether. Forward Collision Warning, Active Emergency
              Braking and Lane Departure Avoidance come standard.
            </p>

            <p>
              The passive and active safety systems are engineered to make Tesla
              vehicles the safest in the world with a very low probability of
              injury.{" "}
              <Link
                href="#"
                className="underline underline-offset-2 font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Learn More
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}