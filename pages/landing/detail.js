import Head from "next/head";
import Nav from "../../components/Nav";

export default function campaign_detail() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App222222</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Nav />
      <section className="bg-main pb40 pt40 ph80 content-section">
        <a href="/">
          <img src="/back.svg"></img>
        </a>
        <img src="/campaign-banner.png"></img>
        <h1>The Back Office for a Crypto-Exchange Platform</h1>
        <div className="nda">
          To comply with the NDA, all of the case study’s confidential contents
          have all been altered, and the interface was completely redesigned.
        </div>
        <h2 className="alata">Background</h2>
        <h3>
          The client was a marketing lead for a B2C application with 600k-700k
          MAU in 2021 Q3-Q4. To deliver and evaluate the campaigns to their app,
          a back office is needed to be developed. Hence my role as a Product
          Designer is to comprehend both business needs and how the microservice
          APIs can support prior to designing the back office.
        </h3>
      </section>
      <section className="bg-plain pb40 pt40 ph80 d-flex overflow-hidden">
        <h2 className="alata flex-shrink-0">My Process</h2>
        <div className="relative" style={{ marginLeft: 60, height: 200 }}>
          <img src="/process-6.svg"></img>
          <div
            style={{ left: 58, bottom: 60 }}
            className="absolute w100 process-steps text-center"
          >
            <img src="/interview-glow-vector.svg"></img>
            <h3 className="m0 bold glow">User Interview</h3>
          </div>
          <div
            style={{ left: 238, top: 60 }}
            className="absolute w100 process-steps text-center"
          >
            <img src="/document-glow-vector.svg"></img>
            <h3 className="m0 bold glow">Design Brief Document</h3>
          </div>
          <div
            style={{ left: 418, bottom: 60 }}
            className="absolute w100 process-steps text-center"
          >
            <img src="/idea-glow-vector.svg"></img>
            <h3 className="m0 bold glow">Workshop</h3>
          </div>
          <div
            style={{ left: 598, top: 60 }}
            className="absolute w100 process-steps text-center"
          >
            <img src="/wireframe-glow-vector.svg"></img>
            <h3 className="m0 bold glow">IA & Wireframe</h3>
          </div>
          <div
            style={{ left: 778, bottom: 60 }}
            className="absolute w100 process-steps text-center"
          >
            <img src="/testing-glow-vector.svg"></img>
            <h3 className="m0 bold glow">A/B/n Testing</h3>
          </div>
          <div
            style={{ left: 958, top: 60 }}
            className="absolute w100 process-steps text-center"
          >
            <img src="/design-glow-vector.svg"></img>
            <h3 className="m0 bold glow">Mockup</h3>
          </div>
          <img
            className="absolute"
            style={{ left: 12, top: 94 }}
            src="/process-circle.svg"
          ></img>
          <img
            className="absolute"
            style={{ right: 12, top: 94 }}
            src="/process-circle.svg"
          ></img>
        </div>
      </section>
      <div className="bg-main pb40 pt40 ph80 two-side-section">
        <div>
          <div className="d-flex align-items-center">
            <img className="mr10 w24" src="/interview-white.svg"></img>
            <h2 className="alata">User Interview</h2>
          </div>
          <h3>
            Interview was done in a semi-structured method after seeing the app
            mockup. The gathered insights, the client would like to hold some
            similar events as attached pictures. Therefore the back office has
            to support to:
            <ul>
              <li>
                Define different tasks for any day in a one or two week long
                campaigns (tasks might be very similar across campaigns)
              </li>
              <li>
                Make some tasks repeatable in a campaign, perhaps copy & paste
                functions
              </li>
              <li>
                Set the expiration time, any tasks always expire with the day
                (at midnight 24:00)
              </li>
              <li>
                Target some specific groups of customers or everyone in the app
              </li>
              <li>Track the changes made for each online campaign</li>
              <li>
                Have the final product as flexible as possible, but also
                straightforward
              </li>
            </ul>
          </h3>
          <h3 className="bold glow">
            The hypothesis was templates and duplicate functionality might be
            necessary as the tasks will be repetitive in a period and across
            campaigns.
          </h3>
        </div>
        <div className="right-side">
          <img style={{ marginBottom: 20 }} src="/campaign-interview (1).png" />
          <img src="/campaign-interview (2).png" />
          <div className="caption">
            Screenshots are sourced from Binance and only taken for references.
          </div>
        </div>
      </div>
      <div className="bg-main pb40 pt40 ph80">aaaaaa</div>
      <div className="bg-main pb40 pt40 ph80">aaaaaa</div>
      <div className="bg-main pb40 pt40 ph80">aaaaaa</div>
      <div className="bg-main pb40 pt40 ph80">aaaaaa</div>
      <div className="bg-main pb40 pt40 ph80">aaaaaa</div>
      <div className="bg-main pb40 pt40 ph80">aaaaaa</div>
      <div className="bg-main pb40 pt40 ph80">aaaaaa</div>
      <div className="bg-main pb40 pt40 ph80">aaaaaa</div>
      <div className="bg-main pb40 pt40 ph80">aaaaaa</div>
      <div className="bg-main pb40 pt40 ph80">aaaaaa</div>
      <div className="bg-main pb40 pt40 ph80">aaaaaa</div>
      <div className="bg-main pb40 pt40 ph80">aaaaaa</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <div> content</div>
      <style jsx>{`
        @media only screen and (min-width: 976px) {
          .two-side-section {
            display: flex;
            gap: 40px;
          }
          .two-side-section .right-side {
            flex-shrink: 0;
            width: 520px;
            margin-top: 104px;
          }
        }

        .two-side-section .right-side img {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
