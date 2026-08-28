"use client";

import { useState } from "react";

import { BOUNCE_PAST } from "@/lib/interactions";
import { asset } from "@/lib/site";

const faqIds = [
  "057c50d5-b19b-3d72-10c2-4f7be7482e4b",
  "2d220820-e136-c6e4-90fa-3bd809affc04",
  "a6a1a4fb-fb20-13f3-55bf-5a9a2954f588",
  "591de7e5-7da8-f3d9-ab5d-0415b4f4b6c3",
  "53c16dc1-c68e-831d-3e78-ec454fce2042",
];

const faqs = [
  {
    q: "What services does Digital Dream Web offer?",
    a: "We design and build websites, web apps, mobile apps, e-commerce stores, SaaS platforms, and AI-powered solutions.",
  },
  {
    q: "How much does a project cost?",
    a: "Every project is quoted individually. Simple sites start around $500, while larger apps and SaaS products range from $2,500 and up.",
  },
  {
    q: "How long does a project take?",
    a: "A marketing site typically takes 1–3 weeks, while complex apps and SaaS platforms take 4–12 weeks depending on scope.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Every project includes free post-launch support, plus optional monthly care and maintenance plans.",
  },
  {
    q: "Can you build a custom SaaS or AI product?",
    a: "Absolutely. We work with founders to turn MVPs into full multi-tenant products with billing, dashboards, and AI features.",
  },
];

function animateHeight(el: HTMLElement, open: boolean) {
  const from = open ? 70 : el.scrollHeight;
  const to = open ? el.scrollHeight : 70;
  el.animate(
    [
      { height: `${from}px`, easing: open ? BOUNCE_PAST : "ease" },
      { height: `${to}px`, easing: "ease" },
    ],
    { duration: open ? 1000 : 500, fill: "forwards" }
  ).onfinish = () => {
    el.style.height = open ? "auto" : "70px";
  };
}

export function FaqSection() {
  const [open, setOpen] = useState<boolean[]>(Array(faqs.length).fill(false));

  const toggle = (i: number, el: HTMLElement) => {
    const isOpen = open[i];
    setOpen((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
    animateHeight(el, !isOpen);
  };

  return (
    <section id="Faq" className="section-faq">
      <div className="padding-global">
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-main-wrapper">
            <div className="section-header is-max">
              <div className="section-tag-wrapper">
                <img
                  src={asset("/axiolance/690f74385894ecf58abef4d1_68bfb430481fa3c0e8610f39_Vector (3) 1.svg")}
                  loading="lazy"
                  alt=""
                  className="star-tag"
                />
                <div className="tag-text">Trending FAQs</div>
              </div>
              <h2 className="sub-heading" data-w-id="91836913-77ab-c48d-12b9-1a4f4efacd35">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="faq-main-wrapper" data-w-id="2f210b56-4dd7-067f-c786-a6cff9b97dad">
              {faqs.map((f, i) => {
                const isOpen = open[i];
                return (
                  <div
                    key={f.q}
                    data-w-id={faqIds[i]}
                    className={isOpen ? "faq-items-wrapper open" : "faq-items-wrapper"}
                    style={{ height: 70 }}
                    onClick={(e) => toggle(i, e.currentTarget)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle(i, e.currentTarget);
                      }
                    }}
                  >
                    <div className="question-wrapper">
                      <div className="question-text">Q{i + 1}</div>
                      <div className="question-cover">
                        <div className="question-text">{f.q}</div>
                      </div>
                    </div>
                    <div className="answear-wrapper">
                      <div className="answear-cover">
                        <div className="text-regular">{f.a}</div>
                      </div>
                      <div className="question-text">Ans</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}