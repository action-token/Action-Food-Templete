import Link from "next/link";

import { Facebook, Instagram, Twitter } from "../ui/icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Logo } from "../ui/logo";
import { GetItonGooglePlay, GetItOnApple } from "../ui/store-icon";

const linksShop = [
  {
    group: "Explore",
    items: [
      {
        title: "Today's Deals",
        href: "#",
      },
      {
        title: "Popular Restaurants",
        href: "#",
      },
      {
        title: "Fast Delivery",
        href: "#",
      },
      {
        title: "Healthy Picks",
        href: "#",
      },
      {
        title: "Desserts & Drinks",
        href: "#",
      },
    ],
  },
];

const linksCom = [
  {
    group: "Company",
    items: [
      {
        title: "About Us",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Help Center",
        href: "#",
      },
      {
        title: "Contact Us",
        href: "#",
      },
      {
        title: "Privacy Policy",
        href: "#",
      },
      {
        title: "Terms of Service",
        href: "#",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background text-foreground dark py-16">
      <div className="container">
        <div className="">
          <div className="grid grid-cols-2 gap-14 md:grid-cols-4 lg:grid-cols-6">
            <div className="grid gap-3 max-md:col-span-2">
              <figure>
                <Logo className="w-16 h-5" />
              </figure>
              <div className="max-w-sm space-y-2">
                <p className="text-muted-foreground text-sm">
                  Get weekly food drops and exclusive offers.
                </p>
                <div className="flex items-center gap-0">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-10 rounded-r-none"
                  />
                  <Button size="sm" className="h-10 rounded-l-none px-4">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid gap-3">
              {linksShop.map((link, index) => (
                <div key={index} className="space-y-3 text-sm">
                  <span className="block font-medium">{link.group}</span>
                  {link.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-muted-foreground hover:text-primary block duration-150"
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="grid gap-3">
              {linksCom.map((link, index) => (
                <div key={index} className="space-y-3 text-sm">
                  <span className="block font-medium">{link.group}</span>

                  {link.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-muted-foreground hover:text-primary block duration-150"
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="grid gap-3 max-md:col-span-2">
              <div className="space-y-3 text-sm">
                <span className="block font-medium">Social</span>
                <div className="flex items-center gap-3">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary block duration-150"
                  >
                    <span className="flex items-center gap-2">
                      <Facebook className="size-4.5" />
                      <span className="sr-only">Facebook</span>
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary block duration-150"
                  >
                    <span className="flex items-center gap-2">
                      <Twitter className="size-4.5 grayscale" />
                      <span className="sr-only">Twitter</span>
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary block duration-150"
                  >
                    <span className="flex items-center gap-2">
                      <Instagram className="size-4.5 grayscale" />
                      <span className="sr-only">Instagram</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid gap-3 max-md:col-span-2">
              <div className="space-y-4 text-sm">
                <span className="block font-medium">Download</span>
                <div className="grid max-w-[220px] gap-3">
                  <Link href="#" aria-label="Download on the App Store">
                    <GetItOnApple className="h-13 w-auto" />
                  </Link>
                  <Link href="#" aria-label="Get it on Google Play">
                    <GetItonGooglePlay className="h-13 w-auto" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6 py-6">
          <button className="text-tertiary flex cursor-pointer items-center gap-2">
            <span className="border-background bg-ring block size-3 rounded-full border" />
            All systems normal.
          </button>

          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Efood
          </p>
        </div>
      </div>
    </footer>
  );
}
