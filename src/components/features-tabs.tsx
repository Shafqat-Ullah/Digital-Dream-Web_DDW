"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/site";

const tabs = [
  {
    title: "Web Development",
    desc: "Professional, responsive and high-performance websites built around your business goals.",
    img: asset("/axiolance/691b691fd4e8df2c53622a35_Multitenancy (2).avif"),
    alt: "Web Development",
  },
  {
    title: "MERN Stack Development",
    desc: "Full-stack web applications built using MongoDB, Express.js, React and Node.js.",
    img: asset("/axiolance/691b69857f36dba853a8771f_Multilingual.avif"),
    alt: "MERN Stack Development",
  },
  {
    title: "React & Next.js Development",
    desc: "Modern, scalable and performance-focused websites and web applications.",
    img: asset("/axiolance/691b69d3d9e0a78fac1e3ccb_Single-Page-Application.avif"),
    alt: "React & Next.js Development",
  },
  {
    title: "E-Commerce Development",
    desc: "Professional online stores with product catalogs, shopping carts, checkout and payment integrations.",
    img: asset("/axiolance/691b6a557d08713cb399d8e2_Custom-Domain.avif"),
    alt: "E-Commerce Development",
  },
  {
    title: "UI/UX Design",
    desc: "Clean, user-friendly interfaces designed to make websites and applications easy to use.",
    img: asset("/axiolance/691b6abe4e0a84a165d65d40_Stripe-Billing.avif"),
    alt: "UI/UX Design",
  },
];

const Arrow = () => (
  <svg width="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.5574 10.9594L13.8404 6.24243L13.1334 6.94943L17.7494 11.5664H5.01645V12.5664H17.7514L13.1334 17.1834L13.8404 17.8904L18.5574 13.1744C18.8534 12.8784 19.0164 12.4844 19.0164 12.0664C19.0164 11.6484 18.8534 11.2544 18.5574 10.9604V10.9594Z"
      fill="currentColor"
    />
  </svg>
);

export function FeaturesTabs() {
  const [active, setActive] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const links = Array.from(menu.querySelectorAll<HTMLElement>(".tab-link"));
    links.forEach((link, i) => {
      const content = link.querySelector<HTMLElement>(".tab-button-content");
      const arrow = link.querySelector<HTMLElement>(".arrow-right");
      if (!content || !arrow) return;
      const isActive = i === active;
      const start = content.offsetHeight;
      const end = isActive ? content.scrollHeight : 0;
      content.animate(
        [
          { height: `${start}px` },
          { height: `${end}px`, easing: "ease" },
        ],
        { duration: 200 }
      ).onfinish = () => {
        content.style.height = isActive ? "auto" : "0px";
      };
      const arrowStart = start > 0 ? "rotate(-50deg)" : "rotate(0deg)";
      arrow.animate(
        [
          { transform: arrowStart },
          { transform: isActive ? "rotate(-50deg)" : "rotate(0deg)", easing: "ease" },
        ],
        { duration: 200 }
      ).onfinish = () => {
        arrow.style.transform = isActive ? "rotate(-50deg)" : "rotate(0deg)";
      };
    });
  }, [active]);

  return (
    <section className="section-features">
      <div className="padding-global">
        <div className="w-layout-blockcontainer container w-container">
          <div className="features-main-wrapper">
            <div className="section-header is-max">
              <div className="section-tag-wrapper">
                <img
                  src={asset("/axiolance/690f74385894ecf58abef4d1_68bfb430481fa3c0e8610f39_Vector (3) 1.svg")}
                  loading="lazy"
                  alt=""
                  className="star-tag"
                />
                <div className="tag-text">Main Services</div>
              </div>
              <h2
                className="sub-heading"
                data-w-id="aca55abb-644f-2c6b-9d99-e039275994f0"
              >
                Everything You Need to Build and Grow Online
              </h2>
            </div>
            <div
              className="features-tab-wrapper"
              data-w-id="aca55abb-644f-2c6b-9d99-e039275994ed"
            >
              <div className="tabs w-tabs">
                <div className="tabs-menu w-tab-menu" role="tablist" ref={menuRef}>
                  {tabs.map((t, i) => (
                    <a
                      key={t.title}
                      href="#Services"
                      role="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(i);
                      }}
                      className={
                        active === i
                          ? "tab-link w-inline-block w-tab-link w--current"
                          : "tab-link w-inline-block w-tab-link"
                      }
                    >
                      <div className="tab-title-wrap">
                        <div className="tab-title">{t.title}</div>
                        <div className="arrow-right">
                          <Arrow />
                        </div>
                      </div>
                      <div className="tab-button-content">
                        <div className="tab-description">{t.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="tabs-content w-tab-content">
                  {tabs.map((t, i) => (
                    <div
                      key={t.title}
                      className={
                        active === i ? "w-tab-pane w--tab-active" : "w-tab-pane"
                      }
                    >
                      <div className="tab-content-wrap">
                        <img key={`${t.title}-${active}`} src={t.img} loading="lazy" alt={t.alt} className="tab-image" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}