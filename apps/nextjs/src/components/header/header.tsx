import Link from "next/link";
import {
  CallBellIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react/ssr";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Logo } from "../ui/logo";
import { UserDropdown } from "./user-dropdown";

export const Header = () => {
  return (
    <header className="bg-background/95 sticky top-0 saturate-150 backdrop-blur-2xl">
      <div className="container flex h-15 items-center justify-between gap-3">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Logo className="text-accent h-5 w-16" />
            <span className="sr-only">Efood</span>
          </Link>

          <div className="text-sm">Categories</div>
        </div>

        <div className="relative flex items-center md:absolute md:left-1/2 md:-translate-x-1/2">
          <MagnifyingGlassIcon
            weight="bold"
            className="text-muted-foreground absolute left-4 size-5"
          />
          <Input
            placeholder="Are you hungry?"
            className="bg-muted text-foreground! h-11 w-full rounded-full border-transparent pr-4 pl-12 md:w-94"
          />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon-lg" className="max-md:hidden">
            <HeartIcon weight="bold" />
            <span className="sr-only">Wishlist</span>
          </Button>
          <Button variant="ghost" size="icon-lg">
            <CallBellIcon weight="bold" />
            <span className="sr-only">Wishlist</span>
            <Badge
              variant="secondary"
              className="bg-muted/15 absolute top-0 -right-1/5 rounded"
            >
              12
            </Badge>
          </Button>

          <UserDropdown />
        </div>
      </div>
    </header>
  );
};
