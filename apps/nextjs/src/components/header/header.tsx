import Link from "next/link";
import {
  CallBellIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@phosphor-icons/react/ssr";

import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Logo } from "../ui/logo";

export const Header = () => {
  return (
    <header className="bg-background/95 sticky top-0 saturate-150 backdrop-blur-2xl">
      <div className="container flex h-15 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Logo className="text-accent h-5 w-16" />
            <span className="sr-only">Efood</span>
          </Link>

          <div className="text-sm">Categories</div>
        </div>

        <div className="absolute left-1/2 flex -translate-x-1/2 items-center">
          <MagnifyingGlassIcon
            weight="bold"
            className="text-muted-foreground absolute left-4 size-5"
          />
          <Input
            placeholder="Are you hungry?"
            className="bg-muted text-foreground! h-11 w-94 rounded-full border-transparent pr-4 pl-12"
          />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon-lg">
            <HeartIcon weight="bold" />
            <span className="sr-only">Wishlist</span>
          </Button>
          <Button variant="ghost" size="icon-lg">
            <CallBellIcon weight="bold" />
            <span className="sr-only">Wishlist</span>
            <Badge variant="secondary" className="absolute rounded top-0 -right-1/5 bg-muted/15">12</Badge>
          </Button>

          <Avatar>
            <AvatarFallback>
              <UserIcon weight="bold" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
