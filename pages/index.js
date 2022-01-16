import Link from "next/link";
import Layout from "../components/Layout";
import ScrollIndicator from "../components/ScrollIndicator";

export default function Home() {
  return (
    <Layout>
      <section className="bg-main min-page-height overflow-hidden mw-100vw relative">
        <img
          style={{
            position: "absolute",
            right: -150,
          }}
          src="/polygon1.svg"
        />
        <img
          style={{
            position: "absolute",
            right: "30%",
          }}
          src="/polygon2.svg"
        />
        <div className="content-wrapper">
          <div className="carousel relative">
            <div style={{ width: 80 }} />
            <div className="slick">
              <div className="dot" active="active" />
              <div className="dot" />
            </div>
            <div className="slick-gap"></div>

            <div className="carousel-page">
              <div className="rightsection">
                <img src="/campaign-banner.png" />
              </div>
              <div className="leftsection">
                <h1 className="Alata section-title minw500 m0">
                  Crypto-Exchange Dashboard
                </h1>
                <div className="section-subtitle">
                  September 2021 - November 2021
                </div>
                <Link href="/landing/detail">
                <div className="section-btn">View Details</div>
                </Link>
              </div>
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

        @media only screen and (min-width: 200px) {
          .leftsection,
          .rightsection {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }
          .carousel-page {
            right: 48px;
            min-height: 50vh;
            display: flex;
            align-items: stretch;
            flex: 1;
            justify-content: center;
            flex-direction: row-reverse;
          }
          .carousel {
            flex: 1;
            margin: auto;
            display: flex;
            min-height: 50vh;
            align-items: stretch;
            flex-direction: row-reverse;
          }
          .slick {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 8px;
          }
          .dot {
            width: 8px;
            height: 16px;
            background: #565a6f;
            border-radius: 8px;
          }
          .dot[active="active"] {
            width: 8px;
            height: 16px;
            background: #ffffff;
            border-radius: 8px;
          }
          .slick-gap {
            width: 40px;
          }
          .content-wrapper {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
          }
        }
      `}</style>
    </Layout>
  );
}
