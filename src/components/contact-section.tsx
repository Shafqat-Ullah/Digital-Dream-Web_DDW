"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { asset, site } from "@/lib/site";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("Email") ?? "");
    const company = String(data.get("Company") ?? "");
    const phone = String(data.get("Phone") ?? "");
    const message = String(data.get("Message") ?? "");
    const subject = `[Digital Dream Web] Project inquiry from ${name || "a client"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Phone: ${phone}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="Contact" className="section-contact">
      <div className="padding-global is-contact">
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
                <div className="tag-text">Contact Now</div>
              </div>
              <h2
                className="sub-heading"
                data-w-id="0a953c4f-fb48-5964-5a72-d91491f4c999"
              >
                We&rsquo;d Love to Hear From You
              </h2>
            </div>
            <div className="contact-main-wrapper">
              <div
                className="contact-info-wrapper"
                data-w-id="02fd1182-22d9-0b95-d413-680c47e91800"
              >
                <div className="inner-container contact-info">
                  <div className="address-wrapper">
                    <div className="pricing-title is-white">Address</div>
                    {site.address.map((line) => (
                      <div key={line} className="text-regular is-white">
                        {line}
                      </div>
                    ))}
                  </div>
                  <div className="address-wrapper">
                    <div className="pricing-title is-white">Get in Touch</div>
                    <a href={`mailto:${site.email}`} className="contact-link w-inline-block">
                      <div className="text-regular">{site.email}</div>
                    </a>
                    <a href={`tel:${site.phone}`} className="contact-link w-inline-block">
                      <img
                        src={asset("/axiolance/68d2cece266dc46d193bac97_phone-call.svg")}
                        loading="lazy"
                        alt=""
                        className="phone-logo"
                      />
                      <div className="text-regular">{site.phoneDisplay}</div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="contact-form-wrapper"
                data-w-id="bab3f8d7-b0df-8831-6626-3322e43d6e0c"
              >
                <div className="inner-container contact">
                  <h2 className="sub-heading">Send Us a Message</h2>
                  <div className="text-regular">
                    Whether you have questions, need support, or want a quote — our team is here to
                    help.
                  </div>
                </div>
                <div className="contact-block w-form">
                  {sent ? (
                    <div className="w-form-done not-hidden">
                      <div>Thank you! Your submission has been received.</div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="form-block">
                      <div className="field-wrapper">
                        <div className="field-wrap">
                          <label htmlFor="name" className="field-label">
                            Name
                          </label>
                          <input
                            className="text-field w-input"
                            maxLength={256}
                            name="name"
                            placeholder="Your Name"
                            type="text"
                            id="name"
                            required
                          />
                        </div>
                        <div className="field-wrap">
                          <label htmlFor="Email" className="field-label">
                            Email
                          </label>
                          <input
                            className="text-field w-input"
                            maxLength={256}
                            name="Email"
                            placeholder="name@email.com"
                            type="email"
                            id="Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="field-wrapper">
                        <div className="field-wrap">
                          <label htmlFor="Company" className="field-label">
                            Company
                          </label>
                          <input
                            className="text-field w-input"
                            maxLength={256}
                            name="Company"
                            placeholder="Your Company"
                            type="text"
                            id="Company"
                          />
                        </div>
                        <div className="field-wrap">
                          <label htmlFor="Phone" className="field-label">
                            Phone
                          </label>
                          <input
                            className="text-field w-input"
                            maxLength={256}
                            name="Phone"
                            placeholder="Phone Number"
                            type="tel"
                            id="Phone"
                          />
                        </div>
                      </div>
                      <div className="text-area-wrap">
                        <div className="field-wrap">
                          <label htmlFor="Message" className="field-label">
                            Message
                          </label>
                          <textarea
                            placeholder="Message"
                            maxLength={5000}
                            id="Message"
                            name="Message"
                            className="text-field text-area w-input"
                          />
                        </div>
                      </div>
                      <div className="sybmit-button-wrap">
                        <input type="submit" data-wait="Please wait..." className="submit-button w-button" value="Send Message" />
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}