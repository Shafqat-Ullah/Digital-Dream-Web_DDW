"use client";

import { useState } from "react";
import { asset } from "@/lib/site";

const items = [
  {
    quote:
      "I build professional, modern and responsive websites and web applications that help businesses create a strong online presence, earn customer trust and grow.",
    name: "Shafqat Ullah",
    role: "Founder & MERN Stack Developer",
    photo: asset("/axiolance/691b7052290656743802fd3f_Henry D. Suza (1).avif"),
    logo: asset("/logo.png"),
  },
  {
    quote:
      "I design and develop clean, user-friendly interfaces and e-commerce stores that convert visitors into customers.",
    name: "Web Developer",
    role: "Web Development & E-Commerce",
    photo: asset("/axiolance/691b70e664e52cd4085c9962_Muntaha-Moon (1).avif"),
    logo: asset("/logo.png"),
  },
  {
    quote:
      "I craft custom web applications and digital solutions tailored to each client's business goals and long-term growth.",
    name: "UI/UX Designer",
    role: "UI/UX & Custom Web Apps",
    photo: asset("/axiolance/691b71942179e869b8e78d46_Nishant Monacha (1).avif"),
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
          <div className="section-header is-max">
            <div className="section-tag-wrapper">
              <img
                src={asset("/axiolance/690f74385894ecf58abef4d1_68bfb430481fa3c0e8610f39_Vector (3) 1.svg")}
                loading="lazy"
                alt=""
                className="star-tag"
              />
              <div className="tag-text">Our Team</div>
            </div>
            <h2 className="sub-heading" data-w-id="7652ffc4-a06b-6afc-64e8-1f8c722d1375">
              Meet the Team Behind Digital Dream Web
            </h2>
          </div>
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