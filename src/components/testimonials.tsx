"use client";

import { useState } from "react";
import { asset } from "@/lib/site";

const items = [
  {
    quote:
      "At Digital Dream Web, we build professional, modern and responsive digital solutions that help businesses create a strong online presence and achieve their goals. We are committed to quality, detail and long-term client satisfaction.",
    name: "Digital Dream Web",
    role: "Your Trusted Digital Solutions Partner",
    photo: asset("/logo.png"),
    logo: asset("/logo.png"),
  },
];

const Arrow = ({ rotated = false }: { rotated?: boolean }) => (
  <svg
    width="100%"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={rotated ? { transform: "rotate(180deg)" } : undefined}
  >
    <path
      d="M18.5574 10.9594L13.8404 6.24243L13.1334 6.94943L17.7494 11.5664H5.01645V12.5664H17.7514L13.1334 17.1834L13.8404 17.8904L18.5574 13.1744C18.8534 12.8784 19.0164 12.4844 19.0164 12.0664C19.0164 11.6484 18.8534 11.2544 18.5574 10.9604V10.9594Z"
      fill="currentColor"
    />
  </svg>
);

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = items.length;

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <section className="section-testimonials">
      <div className="padding-global">
        <div className="w-layout-blockcontainer container lg w-container">
          <div
            className="testimonials-main-wrapper"
            data-w-id="7652ffc4-a06b-6afc-64e8-1f8c722d1375"
          >
            <div className="slider w-slider">
              <div className="mask w-slider-mask">
                <div
                  className="slider-track"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {items.map((t) => (
                    <div className="w-slide" key={t.name}>
                      <div className="testimonials-card">
                        <div className="author-image-wrap">
                          <img src={t.photo} loading="lazy" alt={t.name} className="author-image" />
                        </div>
                        <div className="testimonials-content">
                          <div className="testimonials-logo">
                            <img
                              src={asset("/axiolance/691098581efb36ab68c4bb37_quotation-marks (1) 1.avif")}
                              loading="lazy"
                              alt=""
                              className="quation-logo"
                            />
                            <img src={t.logo} loading="lazy" alt={t.role.split(" at ")[1] ?? ""} className="logo-testimonials" />
                          </div>
                          <div className="author-info-wrapper">
                            <div className="inner-container testimonials">
                              <h3 className="small-heading is-white">{t.quote}</h3>
                            </div>
                            <div className="author-name">{t.name}</div>
                            <div className="author-info">{t.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button type="button" aria-label="Previous testimonial" onClick={prev} className="left-arrow is-testimonial w-slider-arrow-left">
                <div className="slider-arrow">
                  <Arrow />
                </div>
              </button>
              <button type="button" aria-label="Next testimonial" onClick={next} className="right-arrow is-testimonial w-slider-arrow-right">
                <div className="slider-arrow">
                  <Arrow />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}