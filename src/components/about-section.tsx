import { asset } from "@/lib/site";
export function AboutSection() {
  return (
    <section id="About" className="section-about">
      <div className="padding-global">
        <div className="w-layout-blockcontainer container small w-container">
          <div className="about-main-wrapper">
            <div className="about-content">
              <div className="inner-container">
                <div className="section-tag-wrapper">
                  <img
                    src={asset("/axiolance/690f74385894ecf58abef4d1_68bfb430481fa3c0e8610f39_Vector (3) 1.svg")}
                    loading="lazy"
                    alt=""
                    className="star-tag"
                  />
                  <div className="tag-text">About Digital Dream Web</div>
                </div>
              </div>
              <h2 className="sub-heading" data-w-id="f413ce83-000a-55c6-1b97-ca71ed641af9">
                A Full-Service Agency for Digital Products &amp; Growth
              </h2>
              <p className="text-large" data-w-id="2a0f10d4-c964-8d55-9344-1297faf8e170">
                Digital Dream Web is a full-service software agency helping businesses design,
                build, and scale digital products. From marketing websites to complex SaaS
                platforms, we handle strategy, design, development, and growth — so you can focus
                on running your business.
              </p>
              <div
                className="inner-container about"
                data-w-id="1f6e3ad5-5543-5eab-d3eb-9c8df254e3e0"
              >
                <div className="about-count">
                  <h2 className="sub-heading">
                    2.5<span className="text-blue">x</span>
                  </h2>
                  <div className="text-large">Faster Delivery</div>
                </div>
                <div className="about-count">
                  <h2 className="sub-heading">
                    $2.5M<span className="text-blue">+</span>
                  </h2>
                  <div className="text-large">Client Revenue Generated</div>
                </div>
              </div>
            </div>
            <div
              className="about-image"
              data-w-id="39da0660-16d6-84d3-34b2-edceed664141"
            >
              <img
                src={asset("/axiolance/691b629732d913f2c2326410_Ultimate-Application-for-Managing (2).avif")}
                loading="lazy"
                alt="Digital Dream Web product showcase"
                className="image-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}