import Image from "next/image";
import { Navbar } from "@/components/navbar";

import InfiniteCarousel from "@/components/carousel";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CanvasText } from "@/components/ui/canvas-text";
import { Scooter } from "@/components/scoooter";
import { Network } from "@/components/network";
import { Journal } from "@/components/journal";
import { Footer } from "@/components/footer";
export default function BigBullWhiteLandingPage() {
  return (
    <div>
      
      {/* <div className='flex border-4 justify-around gap-1.5 flex-wrap items-center align-middle h-100 flex-row-reverse'>
        <div className='1 h-25 w-25 border-2 bg-amber-400'>1</div>
        <div className='2 h-25 w-25 border-2 bg-amber-400'>2</div>
        <div className='3 h-25 w-25 border-2 bg-amber-400'>3</div>
        <div className='4 h-25 w-25 border-2 bg-amber-400'>4</div>
        <div className='5 h-25 w-25 border-2 bg-amber-400'>5</div>
      </div> */}
      <InfiniteCarousel />
      <MaxWidthWrapper className={`p-8`}>
        <section
          id="about"
          className=" px-3 py-3 sm:px-4 bg-gray-100 rounded-xl"
        >
          <div className="overflow-hidden rounded-sm bg-surface lg:grid lg:grid-cols-2">
            <div className="px-6 py-10 sm:px-10 lg:py-16">
              <h2 className="text-[2rem] leading-tight font-semibold tracking-tight sm:text-[2.5rem]">
                State Approved
                <br/>
                {/* <span className="text-tesla-blue"></span> */}
                <CanvasText
                className="-mt-5"
                  backgroundClassName='bg-blue-600'
                  text="Electric "
                  colors={[
                    "#ff6b6b",
                    "#4ecdc4",
                    "#45b7d1",
                    "#96ceb4",
                  ]}
                />
                Rickshaw
              </h2>
              <p className="mt-3 max-w-xl text-[0.95rem] text-muted-foreground">
                Big Bull Traders Pvt Ltd manufactures ICAT-approved battery
                rickshaws, electric scooters and loaders — engineered for
                reliability, low maintenance and zero emission city duty.
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:max-w-md">
                <div>
                  <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    iCAT
                  </dd>
                  <dt className="mt-1 text-sm text-muted-foreground">
                    Certified Vehicles
                  </dt>
                </div>
                <div>
                  <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    10+
                  </dd>
                  <dt className="mt-1 text-sm text-muted-foreground">
                    States Covered
                  </dt>
                </div>
                <div>
                  <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    2
                  </dd>
                  <dt className="mt-1 text-sm text-muted-foreground">
                    Manufacturing Plants
                  </dt>
                </div>
                <div>
                  <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    24 hrs
                  </dd>
                  <dt className="mt-1 text-sm text-muted-foreground">
                    Feedback Response
                  </dt>
                </div>
              </dl>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#dealership"
                  className="tsl-btn tsl-btn-dark sm:w-auto"
                >
                  <Button>Become A Dealer</Button>
                </Link>
                <Link href="#network" className="tsl-btn sm:w-auto">
                  <Button>Learn More</Button>
                </Link>
              </div>
            </div>

            <Image
              src="/images/mock-factory.jpg"
              alt="factory image"
              className="h-64 w-full object-cover rounded-xl sm:h-96 lg:h-full"
              width={1600}
              height={1008}
            />
          </div>
        </section>

        <Scooter/>
        <Network/>
        <Journal/>
        
      </MaxWidthWrapper>
      
    </div>
  );
}
