import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/site-footer";
import { asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms",
  description:
    "Privacy policy and terms of service for Digital Dream Web — how we handle your data, project terms, and service agreements.",
};

export default function PrivacyPage() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="main-werapper">
        <section className="section-content-banner">
          <div className="w-layout-blockcontainer container w-container">
            <div className="section-main-wrapper">
              <div className="inner-container is-license">
                <div className="section-tag-wrapper">
                  <img
                    src={asset("/axiolance/690f74385894ecf58abef4d1_68bfb430481fa3c0e8610f39_Vector (3) 1.svg")}
                    loading="lazy"
                    alt=""
                    className="star-tag"
                  />
                  <div className="tag-text">Legal</div>
                </div>
                <h1 className="sub-heading">Privacy Policy &amp; Terms</h1>
                <div className="text-large">
                  Last updated: August 2026. Please read these terms carefully before working with
                  Digital Dream Web.
                </div>

                <div className="text-regular">
                  <strong>Privacy.</strong> We collect only the information you choose to share with
                  us through our contact form — such as your name, email, company, and message. We
                  use this information solely to respond to your inquiry and to provide the services
                  you request. We never sell or share your personal information with third parties
                  for marketing purposes.
                </div>

                <div className="text-regular">
                  <strong>Data &amp; project files.</strong> For client projects, you own your
                  content and data. We keep project files confidential and use them only to complete
                  and maintain the work you&apos;ve commissioned. On request, and after final
                  payment, the complete source code is delivered to you per the agreed license.
                </div>

                <div className="text-regular">
                  <strong>Payments &amp; revisions.</strong> Most projects start with a 50% deposit
                  before work begins; the balance is due on completion. Each plan includes a fixed
                  number of revision rounds. Additional change requests are scoped and priced
                  separately with your approval before any extra work is done.
                </div>

                <div className="text-regular">
                  <strong>Cookies.</strong> This website does not use tracking cookies or third-party
                  analytics. Your browsing here stays private.
                </div>

                <div className="text-regular" id="terms">
                  <strong>Terms of service.</strong> All projects are delivered subject to the
                  agreed timeline and scope. While we work hard to deliver on time, delays caused by
                  late client feedback, third-party integrations, or changing requirements may
                  extend the schedule. Warranties are limited to defects reported within 30 days of
                  delivery; beyond that we offer optional care and maintenance plans. We are not
                  liable for indirect or consequential damages.
                </div>

                <div className="text-regular">
                  <strong>Questions?</strong> Contact us at{" "}
                  <a href="mailto:qazithekingston@gmail.com" className="footer-link" style={{ color: "#2684FC" }}>
                    qazithekingston@gmail.com
                  </a>{" "}
                  and we&apos;ll be happy to clarify anything.
                </div>

                <Link href="/#Contact" className="button-primary w-button" style={{ alignSelf: "flex-start" }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}