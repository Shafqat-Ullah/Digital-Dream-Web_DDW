import { asset } from "@/lib/site";
export function LogoStrip() {
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
            <img
              src={asset("/logo.png")}
              loading="lazy"
              alt="Digital Dream Web logo"
              className="trust-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}