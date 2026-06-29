"use client"

import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

type SidebarNavItem = {
  label: string
  href: string
  iconActive: string
  iconInactive: string
  isActive?: boolean
}

const NAV_ITEMS: SidebarNavItem[] = [
  {
    label: "Home",
    href: "/",
    iconActive: "/assets/sidebar/home-active.png",
    iconInactive: "/assets/sidebar/home-active.png",
    isActive: true,
  },
  {
    label: "Cards",
    href: "/",
    iconActive: "/assets/sidebar/cards-inactive.png",
    iconInactive: "/assets/sidebar/cards-inactive.png",
  },
  {
    label: "Transactions",
    href: "/",
    iconActive: "/assets/sidebar/transactions-inactive.png",
    iconInactive: "/assets/sidebar/transactions-inactive.png",
  },
  {
    label: "Payments",
    href: "/",
    iconActive: "/assets/sidebar/payments-inactive.png",
    iconInactive: "/assets/sidebar/payments-inactive.png",
  },
  {
    label: "Recipients",
    href: "/",
    iconActive: "/assets/sidebar/recipients-inactive.png",
    iconInactive: "/assets/sidebar/recipients-inactive.png",
  },
  {
    label: "Insights",
    href: "/",
    iconActive: "/assets/sidebar/insights-inactive.png",
    iconInactive: "/assets/sidebar/insights-inactive.png",
  },
]

function SidebarNavIcon({
  iconActive,
  iconInactive,
  isActive,
}: {
  iconActive: string
  iconInactive: string
  isActive: boolean
}) {
  const src = isActive ? iconActive : iconInactive

  return (
    <span
      aria-hidden
      className={cn(
        "sidebar-icon",
        isActive ? "bg-green-700" : "bg-grey-400"
      )}
      style={{
        WebkitMaskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskImage: `url(${src})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    />
  )
}

/**
 * DESIGNER NOTE: Wise-style app sidebar (left navigation)
 * — Flat list only: Home, Cards, Transactions, Payments, Recipients, Insights (no sub-navigation).
 * — Icons: grey-400 (inactive), green-700 (active). Text: regular (inactive), semibold (active).
 */
export function AppSidebar() {
  return (
    <Sidebar collapsible="none" className="min-h-svh shrink-0 border-r-0">
      <SidebarHeader className="px-6 pb-6 pt-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logo/logo-light.png"
          alt="Wise"
          width={106}
          height={24}
          className="logo-theme-light h-6 w-[106px] object-contain object-left"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logo/logo-dark.png"
          alt="Wise"
          width={106}
          height={24}
          className="logo-theme-dark h-6 w-[106px] object-contain object-left"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className="font-normal data-[active=true]:font-semibold"
                  >
                    <Link href={item.href} className="flex items-center gap-3">
                      <SidebarNavIcon
                        iconActive={item.iconActive}
                        iconInactive={item.iconInactive}
                        isActive={item.isActive ?? false}
                      />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
