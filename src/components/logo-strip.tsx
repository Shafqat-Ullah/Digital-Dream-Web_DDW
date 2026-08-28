import { asset } from "@/lib/site";
export function LogoStrip() {
  const logos = [
    "68d25330b01bba41673186a3_Logo (1).svg",
    "68d25330d070d05c6d18d307_Logo (3).svg",
    "68d253302b60f325552035a1_Logo (2).svg",
    "68d253300f87b6205fff9049_Logo (4).svg",
    "68d25330d19ea221f0d4fda4_Logo (5).svg",
    "68d2533082188ef43cc1b4e6_Logo.svg",
    "68d25331fed7f946306aa435_Logo (6).svg",
    "68d2533123b02165634935b9_Logo (7).svg",
    "68d2533170dca4466a5164b8_Logo (8).svg",
  ];
  return (
    <section className="section-logo">
      <div className="w-layout-blockcontainer container w-container">
        <div className="logo-main-wrapper">
          <div className="logo-header">
            <div className="logo-title" data-w-id="9329c20e-2809-7b4b-2cc8-207944dc70bf">
              Trusted by the world&rsquo;s most innovative teams
            </div>
          </div>
          <div className="logo-wrapper" data-w-id="188cafa7-c96d-05f2-93a1-32690787c53a">
            {logos.map((l, i) => (
              <img
                key={l}
                src={asset(`/axiolance/${l}`)}
                loading="lazy"
                alt="Client logo"
                className={i === logos.length - 1 ? "trust-logo is-sm" : "trust-logo"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}