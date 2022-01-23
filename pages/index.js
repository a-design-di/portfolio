import Link from "next/link";
import Layout from "../components/Layout";
import { useViewportScroll, useTransform, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const PAGES = 2;
const ALL_PAGES = ["page1", "page2"];

export default function Home() {
  const [page, setPage] = useState(ALL_PAGES[0]);
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(
    () =>
      (window.onscroll = () => {
        const newPage = parseInt(document.documentElement.scrollTop / 100);
        setPage(ALL_PAGES[newPage] || ALL_PAGES[ALL_PAGES.length - 1]);
      }),
    [page]
  );

  useEffect(() => {
    setPageHeight(window.innerWidth < 1280 ? 700 : 400);
  }, []);

  if (!pageHeight) {
    return null;
  }
  return (
    <Layout>
      <section
        style={{ height: `calc(100vh - 100px + ${PAGES * 100 - 1}px)` }}
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
        <div className="content-wrapper">
          <motion.div animate={page} className="carousel relative">
            <div className="slick-gap-right" />
            <div className="slick">
              <motion.div
                className="dot cursor-pointer z2"
                variants={{
                  page1: { background: "#ffffff" },
                  page2: { background: "#565a6f" },
                }}
                onClick={() =>
                  window.scrollTo({ left: 0, top: 50, behavior: "smooth" })
                }
              />
              <motion.div
                className="dot cursor-pointer z2"
                variants={{
                  page1: { background: "#565a6f" },
                  page2: { background: "#ffffff" },
                }}
                onClick={() =>
                  window.scrollTo({ left: 0, top: 150, behavior: "smooth" })
                }
              />
            </div>
            <div className="slick-gap-left" />

            <div className="carousel-page relative">
              <motion.div
                layout
                animate={page}
                transition={{ duration: 0.5, type: "tween" }}
                initial={{ opacity: 0, y: -pageHeight }}
                variants={{
                  page1: { y: 0, opacity: 1, x: 0 },
                  page2: { y: -pageHeight, opacity: 0.4, x: 0, scale: 0.85 },
                }}
                onClick={() =>
                  window.scrollTo({ left: 0, top: 50, behavior: "smooth" })
                }
                className={`carousel-page-content w-100 absolute`}
              >
                <div className="rightsection sm-ph32">
                  <div className="home-card mw-100 sm-br16 br32 d-flex align-items-center justify-content-center relative overflow-hidden">
                    <div className="bg-card2 z0 abs-fill sm-d-none"></div>
                    <div className="bg-card z0 abs-fill sm-d-none"></div>
                    <img className="mw354 z1" src="/campaign-banner.png" />
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
                    <div className="btn mt20">View Details</div>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                animate={page}
                initial={{ opacity: 0, y: pageHeight }}
                transition={{ duration: 0.5, type: "tween" }}
                variants={{
                  page1: { y: pageHeight, opacity: 0.4, x: 0, scale: 0.85 },
                  page2: { y: 0, opacity: 1, x: 0 },
                }}
                onClick={() =>
                  window.scrollTo({ left: 0, top: 150, behavior: "smooth" })
                }
                className={`carousel-page-content w-100 absolute`}
              >
                <div className="rightsection sm-ph32">
                  <div className="home-card mw-100 sm-br16 br32 d-flex align-items-center justify-content-center relative overflow-hidden">
                    <div className="bg-card2 z0 abs-fill sm-d-none"></div>
                    <div className="bg-card z0 abs-fill sm-d-none"></div>
                    <img className="mw354 z1" src="/access-banner.png" />
                  </div>
                </div>
                <div className="leftsection sm-ph32">
                  <h1 className="Alata section-title minw500 m0">
                    RBAC Refactor & Redesign
                  </h1>
                  <div className="section-subtitle">May 2020 - August 2021</div>
                  <Link href="/case-studies/access">
                    <div className="btn mt20">View Details</div>
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="slick-gap-oppsite" />
          </motion.div>
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

        .leftsection {
          padding-top: 0;
        }
        .leftsection,
        .rightsection {
          max-width: 100%;
          box-sizing: border-box;
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
