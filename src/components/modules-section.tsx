import { asset } from "@/lib/site";
const services = [
  {
    title: "Web Development",
    icon: asset("/axiolance/68d278779785b179d264103a_users-alt.svg"),
    desc: "Professional, responsive and high-performance websites built around your business goals.",
  },
  {
    title: "Custom Web Applications",
    icon: asset("/axiolance/68d27dd5c35246398a105bd1_signal-alt-2 1.svg"),
    desc: "Custom digital platforms, dashboards, booking systems, management systems and business applications.",
  },
  {
    title: "E-Commerce Solutions",
    icon: asset("/axiolance/68d27dd5e2c959af427992b9_grocery-basket 1.svg"),
    desc: "Professional online stores with product catalogs, shopping carts, checkout and payment integrations.",
  },
  {
    title: "UI/UX Design",
    icon: asset("/axiolance/68d27bf4cf1c732c2caf4415_user-suitcase 1.svg"),
    desc: "Clean, user-friendly interfaces designed to make websites and applications easy to use.",
  },
  {
    title: "Website Maintenance",
    icon: asset("/axiolance/68d27dd5cf1c732c2cafe90e_calculator-math-tax 1.svg"),
    desc: "Bug fixing, performance optimization, updates, technical support and ongoing improvements.",
  },
  {
    title: "Graphic Design",
    icon: asset("/axiolance/68d27bc1fb5a0b3f61eb62c5_person-dolly 1.svg"),
    desc: "Professional digital graphics, social media banners, promotional visuals and business designs.",
  },
];

const cardIds = [
  "7144a621-2252-478b-f755-29822ede5881",
  "6cca1398-1997-2ef3-9cb9-b1548b6ea886",
  "2e6380df-0d15-44b4-4c19-082d0cc9b085",
  "59ca1c89-692e-0e7b-2eb0-46a204db282f",
  "0c85ea81-d72c-1c98-3af0-3c2e655c355f",
  "db5442ab-93b9-6394-8c0a-f9fbb14de3ba",
];

export function ModulesSection() {
  return (
    <section id="Services" className="section-modules">
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
                <div className="tag-text">Core Services</div>
              </div>
              <h2
                className="sub-heading"
                data-w-id="d4a43a74-eda1-db2b-bb18-1a3120b5d8f5"
              >
                Core Services to Simplify and Grow Your Business
              </h2>
            </div>
            <div className="module-card-wrapper" data-w-id="d4a43a74-eda1-db2b-bb18-1a3120b5d8f7">
              {services.map((s, i) => (
                <div
                  className={`module-card _0${i + 1}`}
                  key={s.title}
                  data-w-id={cardIds[i]}
                >
                  <div className="module-logo-wrap">
                    <div className="logo-box">
                      <img src={s.icon} loading="lazy" alt="" className="module-logo" />
                      <img src={s.icon} loading="lazy" alt="" className="module-logo _2nd" />
                    </div>
                  </div>
                  <div className="logo-title">{s.title}</div>
                  <div className="text-regular">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}