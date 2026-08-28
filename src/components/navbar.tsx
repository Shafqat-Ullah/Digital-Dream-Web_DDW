"use client";

import { useState } from "react";
import Link from "next/link";
import { asset } from "@/lib/site";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#About" },
  { label: "Services", href: "/#Services" },
  { label: "Pricing", href: "/#Pricing" },
  { label: "FAQ", href: "/#Faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div data-animation="default" role="banner" className="navbar w-nav">
      <div className="container navbar-container">
        <div className="w-layout-grid navbar-wrapper">
          <Link href="/" aria-current="page" className="navbar-brand w-nav-brand w--current">
            <img
              loading="eager"
              src={asset("/logo.png")}
              alt="Digital Dream Web logo"
              className="nav-image"
            />
          </Link>
          <nav role="navigation" className={open ? "nav-menu-wrapper open" : "nav-menu-wrapper"}>
            <ul role="list" className={"nav-menu w-list-unstyled"}>
              {links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={l.href === "/" ? "nav-link w--current" : "nav-link"}>
                    {l.label}
                  </Link>
                  <div className="nav-line" />
                </li>
              ))}
              <li className="mobile-margin-top">
                <div className="nav-button-wrapper">
                  <Link href="/#Contact" className="primary-btn w-inline-block">
                    <p className="primary-text">Get a Quote</p>
                      <div className="primary-abs" />
                    </Link>
                </div>
              </li>
            </ul>
          </nav>
          <div className="contact-us-lg">
            <div className="mode-wrapper mode-wrapper-desktop">
              <div className="mode-switch" />
            </div>
            <div className="nav-button-wrapper">
              <Link href="/#Contact" className="button-primary is-nav w-button">
                Contact Now
              </Link>
            </div>
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="menu-button w-nav-button"
          >
            <div className="lottie-animation">
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="22" height="2" rx="1" fill="#012b54" />
                <rect y="7" width="22" height="2" rx="1" fill="#2684FC" />
                <rect y="14" width="22" height="2" rx="1" fill="#012b54" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}