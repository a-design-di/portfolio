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
        <div className="carousel relative">
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
              <div className="Alata section-title">
                Crypto-Exchange Dashboard
              </div>
              <div className="section-subtitle">
                September 2021 - November 2021
              </div>
              <div className="section-btn">View Details</div>
            </div>
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
            position: absolute;
            right: 48px;
            min-height: 50vh;
            display: flex;
            align-items: stretch;
            flex: 1;
            justify-content: space-between;
            flex-direction: row-reverse;
          }
          .carousel {
            margin: auto;
            max-width: 1280px;
            display: flex;
            min-height: 50vh;
            align-items: stretch;
            flex-direction: row-reverse;
          }
          .slick {
            position: absolute;
            top: 50%;
            transform: translateX(-50%);
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
        }
      `}</style>
    </Layout>
  );
}
