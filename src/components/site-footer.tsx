"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { asset, site } from "@/lib/site";

const mainPages = [
  { label: "Home", href: "/" },
  { label: "About ", href: "/#About" },
  { label: "Services", href: "/#Services" },
  { label: "Contact", href: "/#Contact" },
  { label: "Pricing", href: "/#Pricing" },
];

const utilityPages = [
  { label: "404 Error Page", href: "/404" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/privacy#terms" },
  { label: "FAQ", href: "/#Faq" },
];

const socials = [
  { label: "LINKEDIN", href: site.social.linkedin },
  { label: "GITHUB", href: site.social.github },
  { label: "WHATSAPP", href: `https://wa.me/${site.whatsapp}` },
];

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="footer">
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-main-wrapper">
          <div className="footer-upper-wrapper">
            <div className="inner-container top-left">
              <Link href="/" className="footer-logo w-inline-block">
                <img src={asset("/logo.png")} loading="lazy" alt="Digital Dream Web logo" className="logo-main" />
              </Link>
              <div className="newsletter-wrapper">
                <div className="text-regular is-white">Subscribe For Our Newsletter</div>
                {subscribed ? (
                  <div className="success-message w-form-done not-hidden">
                    <div className="message">Thank you! Your submission has been received!</div>
                  </div>
                ) : (
                  <div className="form-footer w-form">
                    <form onSubmit={handleSubscribe} name="wf-form-Newsletter" className="form-flex">
                      <div className="fild-wrapper">
                        <input
                          className="field-footer w-input"
                          maxLength={256}
                          name="email"
                          placeholder="Email"
                          type="email"
                          id="email"
                          required
                        />
                        <input type="submit" data-wait="..." className="button-submit-footer w-button" value="" aria-label="Subscribe" />
                      </div>
                      <div className="check-wrapper">
                        <label className="w-checkbox checkbox-field">
                          <input
                            type="checkbox"
                            name="privacy"
                            required
                            className="w-checkbox-input"
                            style={{ position: "absolute", opacity: 0 }}
                          />
                          <span className="w-form-label">I agree to the Privacy Policy</span>
                        </label>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
            <div className="inner-container top-right">
              <div className="footer-nav-container">
                <div className="footer-nav-wrapper">
                  <div className="text-small footer">Main Pages</div>
                  <div className="footer-nav-cover">
                    {mainPages.map((l) => (
                      <Link key={l.label} href={l.href} className="footer-nav">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="footer-nav-wrapper">
                  <div className="text-small footer">Utility Pages</div>
                  <div className="footer-nav-cover">
                    {utilityPages.map((l) => (
                      <Link key={l.label} href={l.href} className="footer-nav">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="footer-nav-wrapper">
                  <div className="text-small footer">Socials</div>
                  <div className="footer-nav-cover">
                    {socials.map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="footer-nav">
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrapper">
        <h2 className="footer-title">Digital Dream Web</h2>
        <img
          src={asset("/axiolance/692dca8a15c16b99bef22f51_Group-image-p-1080.png")}
          loading="lazy"
          alt=""
          className="union-image"
        />
        <div className="inner-container footer-bottom">
          <div className="copy-right-wrapper">
            <div className="text-regular is-gray">
              © Rights reserved by{" "}
              <Link href="/" className="footer-link">
                Digital Dream Web
              </Link>{" "}
              — Built with Next.js
            </div>
            <div className="text-regular is-gray">
              Building Digital Solutions That Help Businesses Grow
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}