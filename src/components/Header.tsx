"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/construction", "Construction"],
  ["/hospitality", "Hospitality"],
  ["/logistics", "Logistics"],
  ["/careers", "Careers"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link key={href} href={href} className={`nav-link ${active ? "active" : ""}`}>
                {label}
              </Link>
            );
          })}
        </nav>

        <Link className="nav-cta" href="/contact">Talk to our team</Link>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="mobile-link"
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="mobile-cta">
            Talk to our team
          </Link>
        </nav>
      )}
    </header>
  );
}
