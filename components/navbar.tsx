"use client";

import { useEffect, useState } from "react";
import { Menu, X, Globe, HelpCircle, UserRound } from "lucide-react";
import Link from "next/link";

const NAV = [
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  // { label: "Network", href: "#network" },
  // { label: "Company", href: "#about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur">
      <div className="relative mx-auto flex h-14 max-w-[1600px] items-center justify-between gap-4 px-4 lg:h-16 lg:px-8">
        <Link
          href="/"
          className="min-w-0 text-[1.05rem] font-semibold tracking-[0.42em] uppercase"
        >
          Big Bull
        </Link>

        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-7 text-sm font-medium">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href}>
              <span className="relative inline-block py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <div className="hidden lg:flex items-center gap-1 text-muted-foreground">
            <span className="grid size-9 place-items-center rounded-full hover:bg-muted">
              <HelpCircle className="size-[18px]" aria-hidden />
            </span>
            <span className="grid size-9 place-items-center rounded-full hover:bg-muted">
              <Globe className="size-[18px]" aria-hidden />
            </span>
            <span className="grid size-9 place-items-center rounded-full hover:bg-muted">
              <UserRound className="size-[18px]" aria-hidden />
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded bg-muted px-4 py-2 text-sm font-medium lg:hidden"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] h-[100dvh] w-screen overflow-y-auto bg-background px-5 pt-5 lg:hidden">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-10 place-items-center rounded-full hover:bg-muted"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>
          <nav className="mt-4 flex flex-col">
            {[...NAV, { label: "Dealership Enquiry", href: "#dealership" }].map(
              (item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-4 text-lg font-medium"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <Menu className="size-4" aria-hidden />
            <span>+91 93309 00491</span>
          </div>
        </div>
      )}
    </header>
  );
}
