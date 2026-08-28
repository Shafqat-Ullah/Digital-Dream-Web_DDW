import { asset } from "@/lib/site";
function Check({ x = false }: { x?: boolean }) {
  return (
    <img
      src={x ? asset("/axiolance/69136fb4f5f158d84bba7b4e_circle-xmark.svg") : asset("/axiolance/68d2b34bfb2dd7c6d7396c07_check-circle.svg")}
      loading="lazy"
      alt={x ? "Not included" : "Included"}
      className="check-icon"
    />
  );
}

const Items = ({ items }: { items: { t: string; x?: boolean }[] }) => (
  <div className="pricing-items-wrapper">
    {items.map((it) => (
      <div className="items" key={it.t}>
        <Check x={it.x} />
        <div className="text-regular">{it.t}</div>
      </div>
    ))}
  </div>
);

export function PricingSection() {
  return (
    <section id="Pricing" className="section-pricing">
      <div className="padding-global">
        <div className="w-layout-blockcontainer container w-container">
          <div className="pricing-main-wrapper">
            <div className="section-header is-max">
              <div className="section-tag-wrapper">
                <img
                  src={asset("/axiolance/690f74385894ecf58abef4d1_68bfb430481fa3c0e8610f39_Vector (3) 1.svg")}
                  loading="lazy"
                  alt=""
                  className="star-tag"
                />
                <div className="tag-text">Pricing Plan</div>
              </div>
              <h2
                className="sub-heading"
                data-w-id="f1b8522e-9d21-a712-e6aa-9d8b252ea55e"
              >
                Choose the Perfect Plan for Your Business Needs
              </h2>
            </div>
            <div className="pricing-card-wrapper">
              <div className="pricing-card" data-w-id="28f8c424-5a0c-1696-3f28-892e9e672694">
                <div className="pricing-title">Website Project</div>
                <div className="text-regular">
                  All the basics for your business. Ideal for landing pages, portfolios, and small
                  business websites.
                </div>
                <div className="price-wrap">
                  <div className="price">$500</div>
                  <div className="text-regular">Project</div>
                </div>
                <a href="#Contact" className="button-primary w-variant-c773d453-327c-dd9b-3a94-7270ab807b10 w-button">
                  Start Your Project
                </a>
                <div className="pricing-title is-small">What&apos;s Included</div>
                <Items
                  items={[
                    { t: "Custom responsive design (up to 5 pages)." },
                    { t: "Mobile & tablet optimized." },
                    { t: "Basic on-page SEO." },
                    { t: "WhatsApp chat & contact form." },
                    { t: "Speed & Core Web Vitals optimization." },
                    { t: "2 revision rounds included." },
                    { t: "E-commerce & payments.", x: true },
                    { t: "CMS / blog management.", x: true },
                    { t: "Extended after-launch support.", x: true },
                  ]}
                />
              </div>

              <div
                className="pricing-card _2nd"
                data-w-id="386414eb-c014-ab10-626c-a898664d37b0"
              >
                <div className="pricing-title is-light">Business Growth</div>
                <div className="text-regular is-white">
                  Everything a growing business needs. Perfect for e-commerce stores, SaaS apps,
                  and custom platforms.
                </div>
                <div className="price-wrap">
                  <div className="price is-light">$2,500</div>
                  <div className="text-regular is-white">Project</div>
                </div>
                <a href="#Contact" className="button-primary w-button">
                  Get a Free Consultation
                </a>
                <div className="pricing-title is-small is-light">What&apos;s Included</div>
                <div className="pricing-items-wrapper is-light">
                  <Items
                    items={[
                      { t: "Custom web app development." },
                      { t: "E-commerce & payment gateways." },
                      { t: "CMS & admin dashboard." },
                      { t: "Mobile-app-ready API." },
                      { t: "Advanced SEO & performance." },
                      { t: "Priority support (1 business day)." },
                      { t: "Full source code & documentation." },
                      { t: "Slack / WhatsApp support." },
                      { t: "Free installation & setup." },
                      { t: "6 hours free customization work." },
                      { t: "1 month free support after launch." },
                    ]}
                  />
                </div>
              </div>

              <div
                className="pricing-bg-cover"
                data-w-id="10d601c9-9854-a2af-5786-ea92e1d450d1"
              >
                <div className="bg-right" />
                <div className="bg-left" />
                <div className="pricing-card">
                  <div className="pricing-title">Custom / Enterprise</div>
                  <div className="text-regular">
                    Have a unique idea in mind? Tell us about it — we&apos;ll reply within 24 hours
                    with a plan and a clear quote.
                  </div>
                  <a href="#Contact" className="button-primary w-variant-c773d453-327c-dd9b-3a94-7270ab807b10 w-button">
                    Contact Now
                  </a>
                  <div className="pricing-title is-small">We would love to assist you via</div>
                  <Items
                    items={[
                      { t: "Email support (1 business day)." },
                      { t: "WhatsApp support." },
                      { t: "Slack / Skype support." },
                      { t: "Zoom / Meet consultation." },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}