"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const selections = [
  {
    id: "truffle-burger",
    name: "Truffle Smash Burger",
    description: "Double patty, roasted onion, truffle aioli.",
    rating: "4.9",
    price: "$14.90",
    image: "/foods/burger.jpg",
    badge: "Chef's pick",
  },
  {
    id: "salmon-bowl",
    name: "Crispy Salmon Bowl",
    description: "Sesame rice, avocado, cucumber, chili crunch.",
    rating: "4.8",
    price: "$16.40",
    image: "/foods/salmon-bowl.jpg",
    badge: "Fresh today",
  },
  {
    id: "pesto-pasta",
    name: "Creamy Pesto Pasta",
    description: "Basil pesto, parmesan cloud, toasted walnuts.",
    rating: "4.7",
    price: "$13.20",
    image: "/foods/pasta.jpg",
    badge: "Popular",
  },
  {
    id: "spicy-ramen",
    name: "Black Garlic Ramen",
    description: "Umami broth, soy egg, pork belly, scallions.",
    rating: "4.9",
    price: "$15.60",
    image: "/foods/ramen.jpg",
    badge: "Late-night fave",
  },
  {
    id: "berry-cheesecake",
    name: "Berry Swirl Cheesecake",
    description: "Silky vanilla cream cheese, seasonal berry jam.",
    rating: "4.8",
    price: "$9.80",
    image: "/foods/cheesecake.jpg",
    badge: "Sweet drop",
  },
];

export function TodaysSelectionSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    loop: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
            Today's Selection
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={emblaApi ? !emblaApi.canScrollPrev() : true}
            aria-label="Previous selection"
            className="size-10 rounded-full"
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={emblaApi ? !emblaApi.canScrollNext() : true}
            aria-label="Next selection"
            className="size-10 rounded-full"
          >
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-6 flex">
          {selections.map((item) => (
            <article
              key={item.id}
              className="min-w-0 flex-[0_0_88%] pl-6 sm:flex-[0_0_58%] lg:flex-[0_0_35%]"
            >
              <div className="bg-card text-card-foreground overflow-hidden">
                <div className="bg-muted relative rounded-[30px] p-4 sm:p-5">
                  <div className="bg-card group relative mx-auto aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 88vw, (max-width: 1024px) 58vw, 35vw"
                      priority={item.id === "truffle-burger"}
                    />
                  </div>
                </div>

                <div className="space-y-4 px-2 pt-5">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-sm font-normal">
                      {item.badge}
                    </Badge>
                    <span className="inline-flex items-center gap-1 text-sm">
                      <Star className="text-accent fill-accent size-4" />
                      {item.rating}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl leading-tight font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xl leading-none font-medium">
                      {item.price}
                    </p>
                    <Button size="sm" className="rounded-full px-4">
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="bg-muted ring-border inline-flex items-center gap-1 rounded-full px-1.5 py-1 ring-1">
          {selections.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "rounded-full transition-all",
                index === selectedIndex
                  ? "bg-accent h-2 w-8"
                  : "bg-muted-foreground/45 hover:bg-muted-foreground/70 size-2",
              )}
              aria-label={`Go to ${item.name}`}
              aria-current={index === selectedIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
