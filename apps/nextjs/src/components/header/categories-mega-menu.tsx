"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";

const featured = [
  "New Arrivals",
  "Most Popular",
  "Chef Specials",
  "Meal Deals",
  "Family Packs",
  "Gift Cards",
];

const quickMeals = [
  "Burgers",
  "Bowls",
  "Wraps",
  "Sandwiches",
  "Ramen",
  "Pasta",
  "Shop all",
];

const sweetAndDrinks = [
  "Desserts",
  "Cheesecakes",
  "Ice Cream",
  "Smoothies",
  "Coffee",
  "Fresh Juices",
  "Shop all",
];

const popularRightNow = [
  { label: "Ring", image: "/foods/cheesecake.jpg" },
  { label: "Tray", image: "/foods/pasta.jpg" },
  { label: "Block", image: "/foods/salmon-bowl.jpg" },
  { label: "Cable", image: "/foods/ramen.jpg" },
];

export function CategoriesMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenu = useCallback(() => {
    if (!isOpen) return;
    setIsClosing(true);
  }, [isOpen]);

  useEffect(() => {
    if (!isClosing) return;
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);

    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, [isClosing]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const onClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        wrapperRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      ) {
        return;
      }
      if (!wrapperRef.current?.contains(target)) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [closeMenu, isOpen]);

  return (
    <div ref={wrapperRef}>
      <button
        type="button"
        aria-expanded={isOpen && !isClosing}
        aria-label="Open categories menu"
        onClick={() => {
          if (isOpen && !isClosing) {
            closeMenu();
            return;
          }
          setIsOpen(true);
          setIsClosing(false);
        }}
        className="text-foreground hover:text-accent inline-flex items-center gap-1.5 text-sm font-medium outline-none"
      >
        Categories
        <CaretDownIcon weight="bold" className="size-3.5" />
      </button>

      {typeof document !== "undefined" && isOpen
        ? createPortal(
            <div ref={panelRef} className="fixed inset-x-0 top-15 z-40">
              <div
                className={
                  isClosing
                    ? "animate-out slide-out-to-top-2 bg-background border-y relative z-10 duration-200"
                    : "animate-in slide-in-from-top-2 bg-background border-y relative z-10 duration-200"
                }
              >
                <div className="container py-3">
                  <div className="grid min-h-[520px] gap-0 lg:grid-cols-[1.6fr_390px]">
                    <section className="space-y-12 p-3">
                      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                          <h3 className="text-muted-foreground mb-2 text-xs font-semibold tracking-wide uppercase">
                            Featured
                          </h3>
                          <ul className="space-y-1">
                            {featured.map((item) => (
                              <li key={item}>
                                <Link href="#" className="hover:text-accent text-sm">
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-muted-foreground mb-2 text-xs font-semibold tracking-wide uppercase">
                            Quick Meals
                          </h3>
                          <ul className="space-y-1">
                            {quickMeals.map((item) => (
                              <li key={item}>
                                <Link href="#" className="hover:text-accent text-sm">
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-muted-foreground mb-2 text-xs font-semibold tracking-wide uppercase">
                            Sweet & Drinks
                          </h3>
                          <ul className="space-y-1">
                            {sweetAndDrinks.map((item) => (
                              <li key={item}>
                                <Link href="#" className="hover:text-accent text-sm">
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-muted-foreground mb-2 text-xs font-semibold tracking-wide uppercase">
                          Popular Right Now
                        </h3>
                        <div className="flex items-center gap-2">
                          {popularRightNow.map((item) => (
                            <Link
                              key={item.label}
                              href="#"
                              className="bg-muted relative size-14 overflow-hidden"
                              aria-label={item.label}
                            >
                              <Image
                                src={item.image}
                                alt={item.label}
                                fill
                                className="object-cover"
                                sizes="56px"
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </section>

                    <section className="border-border/80 border-l p-3">
                      <Link
                        href="#"
                        className="bg-muted relative block h-full min-h-[470px] overflow-hidden"
                      >
                        <Image
                          src="/foods/salmon-bowl.jpg"
                          alt="Discover food picks"
                          fill
                          className="object-cover"
                          sizes="390px"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                        <p className="absolute bottom-3 left-3 text-2xl font-medium text-white">
                          Discover Food
                        </p>
                      </Link>
                    </section>
                  </div>

                  <div className="border-border/70 bg-muted border px-6 py-3 text-center">
                    <Link href="#" className="text-sm font-semibold">
                      Shop all
                      <sup className="ml-1 align-top text-[10px] font-medium">28</sup>
                    </Link>
                  </div>
                </div>
              </div>

              <button
                type="button"
                aria-label="Close categories menu"
                onClick={closeMenu}
                className="fixed inset-0 z-0 h-[100svh] w-screen bg-black/28 backdrop-blur-2xl saturate-150"
              />
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
