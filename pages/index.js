import Link from "next/link";
import Layout from "../components/Layout";
import { useViewportScroll, useTransform, motion } from "framer-motion";

const PAGES = 2;

export default function Home() {
  const { scrollYProgress: progress } = useViewportScroll();
  const page1y = useTransform(
    progress,
    [0, 0.45, 0.55, 1],
    [0, 0, -1000, -1000],
    "easeInOut"
  );
  const page2y = useTransform(
    progress,
    [0, 0.45, 0.55, 1],
    [1000, 1000, 0, 0],
    "easeInOut"
  );

  return (
    <Layout>
      <section
        style={{ height: `${PAGES}00vh` }}
        className="bg-main min-page-height overflow-hidden mw-100vw relative"
      >
        <img
          style={{
            position: "fixed",
            right: -150,
            top: "calc(50% - 100px)",
          }}
          src="/polygon1.svg"
        />
        <img
          style={{
            position: "fixed",
            right: "30%",
            top: "calc(50% - 200px)",
          }}
          src="/polygon2.svg"
        />
        <div
          style={{
            position: "fixed",
            top: 100,
          }}
          className="content-wrapper"
        >
          <div className="carousel relative">
            <div style={{ width: 80 }} />
            <div className="slick">
              <div className="dot" active="active" />
              <div className="dot" />
            </div>
            <div className="slick-gap"></div>

            <div className="carousel-page relative">
              <motion.div
                layout
                style={{ y: page1y }}
                className={`carousel-page-content w100vw absolute min-page-height`}
              >
                <div className="rightsection sm-ph32">
                  <div className="bg-card mw-100 sm-br16">
                    <img className="mw-100" src="/campaign-banner.png" />
                  </div>
                </div>
                <div className="leftsection sm-ph32">
                  <h1 className="Alata section-title minw500 m0">
                    Crypto-Exchange Dashboard
                  </h1>
                  <div className="section-subtitle">
                    September 2021 - November 2021
                  </div>
                  <Link href="/case-studies/campaign">
                    <div className="section-btn">View Details</div>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                layout
                style={{ y: page2y }}
                className={`carousel-page-content w100vw absolute min-page-height`}
              >
                <div className="rightsection sm-ph32">
                  <div className="bg-card mw-100 sm-br16">
                    <img className="mw354" src="/access-banner.png" />
                  </div>
                </div>
                <div className="leftsection sm-ph32">
                  <h1 className="Alata section-title minw500 m0">
                    RBAC Refactor & Redesign
                  </h1>
                  <div className="section-subtitle">May 2020 - August 2021</div>
                  <Link href="/case-studies/access">
                    <div className="section-btn">View Details</div>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div style={{ width: 128 }} />
          </div>
        </div>
      </section>
      <style jsx>{`
        .section-title {
          font-size: 36px;
          line-height: 48px;
        }

        .section-subtitle {
          margin-top: 9px;
          line-height: 28px;
        }

        .section-btn {
          margin-top: 20px;
          padding: 16px;
          color: #2790dd;
          display: inline-block;
          border: 2px solid #2790dd;
          box-sizing: border-box;
          border-radius: 10px;
          cursor: pointer;
        }

        .leftsection {
          padding-top: 0;
        }

        @media only screen and (min-width: 768px) {
          .leftsection,
          .rightsection {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }
        }
        @media only screen and (max-width: 768px) {
          .leftsection {
            padding-top: 16px;
          }
          .section-title {
            display: inline;
            font-size: 36px;
          }
        }
      `}</style>
    </Layout>
  );
}
