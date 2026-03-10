"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { UserIcon } from "@phosphor-icons/react/dist/ssr";
import {
  BellRing,
  Circle,
  CircleHelp,
  FileClock,
  FileText,
  FileX,
  Heart,
  Info,
  LogIn,
  Mail,
  MapPinned,
  Moon,
  ReceiptText,
  RotateCcw,
  Settings,
  ShieldCheck,
  Sun,
  TicketPercent,
  UserRound,
  UsersRound,
  Wallet,
  X,
} from "lucide-react";

import { useTheme } from "@actionverse/ui/theme";

import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const accountOptions: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Profile", href: "#", icon: UserRound },
  { label: "My Order", href: "#", icon: ReceiptText },
  { label: "Track Order", href: "#", icon: MapPinned },
  { label: "Favourite", href: "#", icon: Heart },
  { label: "Notification", href: "#", icon: BellRing },
  { label: "Wallet", href: "#", icon: Wallet },
  { label: "Loyalty Point", href: "#", icon: TicketPercent },
  { label: "Coupon", href: "#", icon: TicketPercent },
  { label: "Refer & Earn", href: "#", icon: UsersRound },
  { label: "Address", href: "#", icon: MapPinned },
  { label: "Message", href: "#", icon: Mail },
  { label: "About Us", href: "#", icon: Info },
  { label: "Help & Support", href: "#", icon: CircleHelp },
  { label: "Privacy Policy", href: "#", icon: ShieldCheck },
  { label: "Terms & Conditions", href: "#", icon: FileText },
  { label: "Return policy", href: "#", icon: FileX },
  { label: "Refund policy", href: "#", icon: RotateCcw },
  { label: "Cancellation policy", href: "#", icon: FileClock },
  { label: "Login", href: "#", icon: LogIn },
];

export const UserDropdown = () => {
  const { setTheme, themeMode } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Open user menu"
          className="focus-visible:border-ring focus-visible:ring-ring/40 inline-flex rounded-full outline-none focus-visible:ring-3"
        >
          <Avatar>
            <AvatarFallback>
              <UserIcon weight="bold" />
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={14}
        className="no-scrollbar max-h-[calc(100vh-6rem)] w-[300px] overflow-x-hidden overflow-y-auto rounded-[22px] border border-white/10 bg-zinc-900/95 p-0 text-zinc-100 shadow-2xl backdrop-blur-2xl"
      >
        <div className="flex gap-2 border-b border-white/12 p-5">
          <Button
            variant="secondary"
            className="h-11 flex-1 rounded-full bg-white/9 text-base text-white hover:bg-white/17"
          >
            Login
          </Button>
          <Button className="h-11 flex-1 rounded-full bg-white text-base text-black hover:bg-white/90">
            Sign up
          </Button>
        </div>

        <div className="border-b border-white/12 px-5 py-2.5">
          <DropdownMenuItem className="w-full cursor-pointer gap-3 rounded-lg px-0 py-2.5 text-base font-medium text-white focus:bg-white/10 focus:text-white">
            <Settings className="size-5 opacity-75" />
            Settings
          </DropdownMenuItem>
        </div>

        <div className="border-b border-white/12 px-5 py-3">
          <div className="flex items-center justify-between gap-4">
            <span className="text-base font-medium">Theme</span>
            <div className="flex h-10 items-center gap-1 rounded-full bg-white/9 px-1">
              <button
                type="button"
                aria-label="Light theme"
                onClick={() => setTheme("light")}
                className="grid size-8 place-items-center rounded-full hover:bg-white/10 data-[active=true]:bg-white/15"
                data-active={themeMode === "light"}
              >
                <Sun className="size-[18px]" />
              </button>
              <button
                type="button"
                aria-label="Dark theme"
                onClick={() => setTheme("dark")}
                className="grid size-8 place-items-center rounded-full hover:bg-white/10 data-[active=true]:bg-white/15"
                data-active={themeMode === "dark"}
              >
                <Moon className="size-[18px] opacity-75" />
              </button>
              <button
                type="button"
                aria-label="System theme"
                onClick={() => setTheme("auto")}
                className="grid size-8 place-items-center rounded-full hover:bg-white/10 data-[active=true]:bg-white/15"
                data-active={themeMode === "auto"}
              >
                <Circle className="size-[18px] opacity-75" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-1 border-b border-white/12 px-5 py-3">
          {accountOptions.map((item) => (
            <DropdownMenuItem
              key={item.label}
              asChild
              className="w-full cursor-pointer rounded-lg px-0 py-2 text-white focus:bg-white/10 focus:text-white"
            >
              <Link href={item.href} className="flex items-center gap-3">
                <item.icon className="size-[18px] opacity-80" />
                <span className="text-base font-medium">{item.label}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </div>

        <div className="sticky bottom-0 flex items-center justify-between bg-zinc-900/95 px-5 py-4 text-sm text-white/58">
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:text-white/80">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white/80">
              Terms
            </Link>
            <Link href="#" className="hover:text-white/80">
              Copyright
            </Link>
          </div>

          <Link
            href="#"
            aria-label="X"
            className="grid size-6 place-items-center rounded-full hover:bg-white/10"
          >
            <X className="size-4 opacity-70" />
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
