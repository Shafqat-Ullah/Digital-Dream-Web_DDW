import { asset } from "@/lib/site";
function BorderDots() {
  return (
    <>
      <div className="border-line-animation">
        <div className="border-dot _01">
          <div className="dot-border" />
        </div>
        <div className="border-dot _01">
          <div className="dot-border" />
        </div>
      </div>
      <div className="border-line-animation none">
        <div className="border-dot _02">
          <div className="dot-border" />
        </div>
        <div className="border-dot _02">
          <div className="dot-border" />
        </div>
      </div>
      <div className="border-line-animation">
        <div className="border-dot _03">
          <div className="dot-border" />
        </div>
        <div className="border-dot _03">
          <div className="dot-border" />
        </div>
      </div>
      <div className="border-line-animation">
        <div className="border-dot _04">
          <div className="dot-border" />
        </div>
        <div className="border-dot _04">
          <div className="dot-border" />
        </div>
      </div>
      <div className="border-line-animation none">
        <div className="border-dot _05">
          <div className="dot-border" />
        </div>
        <div className="border-dot _05">
          <div className="dot-border" />
        </div>
      </div>
      <div className="border-line-animation">
        <div className="border-dot _06">
          <div className="dot-border" />
        </div>
        <div className="border-dot _06">
          <div className="dot-border" />
        </div>
      </div>
    </>
  );
}

export function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-top-border-wrap">
        <div className="navbar-border-area">
          <div
            className="navbar-border-line-animation"
            data-w-id="d5504ce9-62f9-6152-69f6-19b3d1c7918c"
          >
            <div className="border-dot-block">
              <div className="nav-dot-border" />
            </div>
          </div>
        </div>
        <div className="border-line" data-w-id="d5504ce9-62f9-6152-69f6-19b3d1c7918f">
          <BorderDots />
        </div>
      </div>

      <div className="container banner">
        <div className="hero-all-content-area">
          <div className="hero-content-block">
            <div
              className="banner-badge-wrapper"
              data-w-id="abf002c0-a56c-0d8f-2c89-321507cb5015"
            >
              <div className="author-wraper">
                <img
                  src={asset("/axiolance/68d21a39b20d9e053aabf81a_Rectangle 190.avif")}
                  loading="lazy"
                  alt="Happy client"
                  className="badge-image"
                />
                <img
                  src={asset("/axiolance/68d21a3835139974b9276b06_Rectangle 189.avif")}
                  loading="lazy"
                  alt="Happy client"
                  className="badge-image"
                />
                <img
                  src={asset("/axiolance/68d21a38bf14e7cc65f87b19_Rectangle 188.avif")}
                  loading="lazy"
                  alt="Happy client"
                  className="badge-image"
                />
              </div>
              <div className="text-small">Trusted by 100+ clients</div>
            </div>

            <div className="inner-container banner">
              <h1 className="main-heading" data-w-id="3b1dac7c-d603-ed44-5bc3-410a0ce5b3ec">
                We Build Websites, Apps
              </h1>
              <div className="inner-container is-flex" data-w-id="005a2ab4-8bf8-7792-5da0-5fdcb15167a4">
                <div className="inner-container">
                  <div className="main-heading">&amp; Software That</div>
                </div>
                <div className="inner-container text-frame">
                  <div className="main-heading">
                    <span className="text-blue">Convert</span>
                  </div>
                  <img
                    src={asset("/axiolance/690f57590170aec328525866_Group 1261153753.svg")}
                    loading="lazy"
                    alt=""
                    className="text-cover"
                    data-w-id="5cc9496a-63de-ee71-93d7-937c8ebb52b7"
                  />
                </div>
              </div>
            </div>

            <p className="text-large" data-w-id="f89eaf18-b426-df3a-579f-5be37945ddc6">
              A full-service software agency helping startups and growing businesses launch fast,
              secure websites, apps, and AI-powered products that drive revenue.
            </p>

            <div
              className="banner-button-wrapper"
              data-w-id="2e584957-d1fb-7f92-dee1-ee5777ab2f65"
            >
              <a href="#Contact" className="button-primary w-button">
                Start Your Project
              </a>
              <a
                href="#Services"
                className="button-primary w-variant-4f002c81-1fc6-364c-3605-7f3374a06f02 w-button"
              >
                See Our Work
              </a>
            </div>
          </div>

          <div className="border-line" data-w-id="d5504ce9-62f9-6152-69f6-19b3d1c7919a">
            <BorderDots />
          </div>
        </div>

        <img
          src={asset("/axiolance/68d249cfe01ab88e0c969d88_Mask group.avif")}
          loading="lazy"
          alt="Digital Dream Web hero background"
          className="banner-bg-image"
        />
      </div>
    </section>
  );
}

export function DashbordOverlay() {
  return (
    <div className="dashbord-image-wrapper" data-w-id="f125550c-4eb5-5fa6-74d2-ee4a75889afb">
      <img
        src={asset("/ddw/overview-card.png")}
        loading="lazy"
        alt="Project dashboard overview"
        className="overview-image"
        data-w-id="c7eab989-4257-52fa-44ba-40b2ef0ee44c"
      />
      <div className="dashbord-image-cover">
        <img
          src={asset("/ddw/hero-dashboard.png")}
          loading="lazy"
          alt="Dashboard"
          className="dashbord-image"
        />
      </div>
      <img
        src={asset("/ddw/progress-card.png")}
        loading="lazy"
        alt="Project progress"
        className="progress-image"
        data-w-id="13d0759a-7e3e-0383-c05e-858629ed74bf"
      />
      <div className="dashbord-image-overly" />
    </div>
  );
}