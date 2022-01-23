import Link from "next/link";
import Layout from "../../components/Layout";
import LazyImg from "../../components/LazyImg";
import LazySection from "../../components/LazySection";
import { motion } from "framer-motion";
import { useCallback } from "react";

export default function campaign_detail() {
  const scrollTo = useCallback((selector) => {
    const target = document.querySelector(selector);
    if (target)
      window.scrollTo({
        left: 0,
        top: target.offsetTop - 100,
        behavior: "smooth",
      });
  }, []);

  return (
    <Layout>
      <section id="top" className="bg-main relative">
        <div className="content-container content-section pb40 pt40 ph80 sm-py16 sm-ph16 d-flex flex-column justify-content-center">
          <Link href="/">
            <img className="absolute t0 cursor-pointer" src="/back.svg"></img>
          </Link>
          <div className="d-flex align-items-center sm-flex-column ">
            <div className="flex-fill" />
            <img src="/campaign-banner.png" className="mh16"></img>
            <div className="flex-fill" />
            <div className="mw580">
              <h1>Crypto-Exchange Dashboard</h1>
              <div className="nda">
                To comply with the NDA, all of the case study’s confidential
                contents have all been altered, and the interface was completely
                redesigned.
              </div>
            </div>
          </div>
          <div className="d-flex gapx60 sm-flex-column">
            <h2 className="alata">Background</h2>
            <h3 className="mw1080">
              The client was a marketing lead for a B2C application with
              600k-700k MAU in 2021 Q3-Q4. To deliver and evaluate the campaigns
              to their app, a back office is needed to be developed. Hence my
              role as a Product Designer is to comprehend both business needs
              and how the microservice APIs can support prior to designing the
              back office.
            </h3>
          </div>
        </div>
      </section>
      <section id="process" className="bg-plain relative">
        <div className="content-container pb40 pt40 ph80  sm-py16 sm-ph16  d-flex overflow-hidden sm-flex-column">
          <h2 className="alata flex-shrink-0">My Process</h2>
          <div className="process-image-container">
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
              style={{ left: 1092, top: 94 }}
              src="/process-circle.svg"
            ></img>
          </div>
        </div>
      </section>
      <div id="interview" className="bg-main relative">
        <div className="content-container pb40 pt40 ph80 sm-py16 sm-ph16 two-side-section">
          <div>
            <div className="d-flex align-items-center">
              <img className="mr10 w24" src="/interview-white.svg"></img>
              <h2 className="alata">User Interview</h2>
            </div>
            <h3>
              Interview was done in a semi-structured method after seeing the
              app mockup. The gathered insights, the client would like to hold
              some similar events as attached pictures. Therefore the back
              office has to support to:
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
                  Target some specific groups of customers or everyone in the
                  app
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
            <LazyImg
              className="br10 w-100"
              style={{ marginBottom: 20 }}
              src="/campaign-interview (1).png"
            />
            <LazyImg className="br10 w-100" src="/campaign-interview (2).png" />
            <div className="caption">
              Screenshots are sourced from Binance and only taken for
              references.
            </div>
          </div>
        </div>
      </div>
      <div id="brain" className="bg-plain pb34 pt40 ph80 sm-py16 sm-ph16  text-center">
        <h2 className="alata d-inline-flex align-items-center">
          <img className="mr10 w24" src="/brain.svg"></img>
          Brainstorming Workshop
        </h2>
        <div style={{ height: 24 }} />
        <div className="mw720 text-left  mh-auto">
          After a few revisions of the doc and confirmation with the client, I
          collected the UXR, frontend, and backend developers to brainstorm how
          to approach with this project. I facilitated the discussion by
          presenting the Design Brief doc.
        </div>
        <div style={{ height: 30 }} />
        <LazyImg className=" br10 mw640" src="/workshop-pic.jpg" />
      </div>
      <div id="ia" className="bg-main relative">
        <div className="content-container  pb40 pt40 ph80 sm-py16 sm-ph16  two-side-section">
          <div>
            <div className="d-flex align-items-center">
              <img className="mr10 w24" src="/ia.svg"></img>
              <h2 className="alata">IA& Wireframe</h2>
            </div>
            <h3>
              One of the most important consensus coming from the workshop is,
              the concept of 3 layers:
              <ul>
                <li>Campaign</li>
                <li>Day, and</li>
                <li>Task</li>
              </ul>
            </h3>

            <h3>
              <br />
              The most outter layer (campaign) is a seasonal event that the
              customer sees probably in a web hero banner or inbox. Inside it
              there will be specific dates (day) that the customers have to
              perform some actions (task).
            </h3>
            <h3>
              <br />
              In the workshop, most people agreed with the structure and general
              flow, but we produced a few ideas in particular for step 2, where
              selecting tasks takes in place.
            </h3>
          </div>
          <div className="right-side">
            <LazyImg
              className="br10 w-100"
              src="/campaign-ia-n-wireframe (1).png"
            />
            <div style={{ marginBottom: 20 }} className="caption">
              Click here for a higher resolution preview of information
              architecture (not sitemap).
            </div>

            <LazyImg
              className="br10 w-100"
              src="/campaign-ia-n-wireframe (2).png"
            />
            <div className="caption">
              Snippet of the wireframe that was discussed rigorously.
            </div>
          </div>
        </div>
      </div>
      <div id="abn" className="bg-plain pb50 pt40 ph80 sm-py16 sm-ph16  text-center">
        <h2 className="alata d-inline-flex align-items-center fs28">
          <img className="mr10 w24" src="/abn.svg"></img>
          A/B/n Testing
        </h2>
        <div style={{ height: 24 }} />
        <div className="mw720 text-left mh-auto">
          This was a small preliminary test where we aimed to find the most
          suitable design for the users to execute the second step in creating a
          campaign. This testing was done as there was multiple approaches
          generated in the workshop. Since the sample could not be big, the
          method was combined with usability test where tasks were provided, and
          followed by more in-depth interview. The metrics for evaluating the
          test were findability and speed of completion.
        </div>

        <div style={{ height: 40 }} />
        <div className="mw720 text-left glow bold mh-auto">
          The hypothesis was, having a calendar layout that has the familiar
          format (MTWTFSS or SMTWTFS) would fit user’s mental model better.{" "}
        </div>
        <div style={{ height: 30 }} />

        <div className="d-flex gapx60 justify-content-center flex-wrap">
          <video
            className="mw520 br10"
            controls
            src="/campaign-testing (1).mp4"
          />
          <video
            className="mw520 br10"
            controls
            src="/campaign-testing (2).mp4"
          />
        </div>
      </div>

      <div id="mockup" className="bg-main relative">
        <div className="content-container  pb40 pt40 ph80 sm-py16 sm-ph16 ">
          <h2 className="alata d-inline-flex align-items-center fs28 m0">
            <img className="mr10 w24" src="/mock.svg"></img>
            Mockup
          </h2>
          <div style={{ height: 24 }} />
          <h3 className="m0">
            After a few iterations of the wireframe and the low-fidelity
            prototype, here was the approach we decided to take.
          </h3>

          <div style={{ height: 30 }} />
          <div className="d-flex gapx60 gapy30 justify-content-center flex-wrap">
            <div className="mw610">
              <LazyImg
                className="mw-100 br10 mr10"
                src="/campaign-mockup-1.png"
              />
              <div className="caption-14">
                The system has the flexibility to support different AND/OR
                relations. Based on the example, it will cost more for people on
                the Silver level than Gold to accomplish the tasks.
              </div>
            </div>
            <div className="mw610">
              <LazyImg
                className="mw-100 br10 mr10"
                src="/campaign-mockup-2.png"
              />
              <div className="caption-14">
                The creation page, where users customize their campaign tasks,
                available in 3 repetition choices: 7 day, 14 day, and none (not
                repeating).
              </div>
            </div>
            <div className="mw610">
              <LazyImg
                className="mw-100 br10 mr10"
                src="/campaign-mockup-3.png"
              />
              <div className="caption-14">
                Although the “Task Bank” menu provides the same function, here
                is a shortcut in case users can’t find a suitable task during
                the campaign creation.
              </div>
            </div>
            <div className="mw610">
              <LazyImg
                className="mw-100 br10 mr10"
                src="/campaign-mockup-4.png"
              />
              <div className="caption-14">
                The last step consists of preview to let users verify their
                campaign rules.
              </div>
            </div>
            <div className="mw1100">
              <LazyImg
                className="mw-100 br10 mr10"
                src="/campaign-mockup-5.png"
              />
              <div className="caption-14">
                The dashboard explains the campaign performance across its
                period. Beside shows the quick glance of financial summary to
                assess the campaign performance.
              </div>
            </div>
            <div className="mw1100">
              <LazyImg
                className="mw-100 br10 mr10"
                src="/campaign-mockup-6.png"
              />
              <div className="caption-14">
                On the same detail page, user can see the details of each
                transaction for deeper analysis of client behavior.
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial="normal"
        whileHover="expand"
        className="scroll-menu-wrapper"
      >
        <div className="scroll-menu">
          <motion.div
            variants={{
              normal: { height: 0, opacity: 0 },
              expand: { height: "auto", opacity: 1 },
            }}
            className="scroll-menu-items d-flex justify-content-center align-items-center flex-column py7 overflow-hidden bg-white-60 br30 w60"
          >
            <motion.div
              initial={{ background: "#c4c4c4" }}
              whileHover={{ background: "#ffffff" }}
              onClick={() => scrollTo("#interview")}
              className="w46 h46 bg-c4 br-50 d-flex justify-content-center align-items-center cursor-pointer"
            >
              <img src="/ui-link.svg" />
            </motion.div>
            <motion.div
              initial={{ background: "#c4c4c4" }}
              whileHover={{ background: "#ffffff" }}
              onClick={() => scrollTo("#brain")}
              className="w46 h46 bg-c4 br-50 d-flex justify-content-center align-items-center cursor-pointer"
            >
              <img src="/brain-link.svg" />
            </motion.div>
            <motion.div
              initial={{ background: "#c4c4c4" }}
              whileHover={{ background: "#ffffff" }}
              onClick={() => scrollTo("#ia")}
              className="w46 h46 bg-c4 br-50 d-flex justify-content-center align-items-center cursor-pointer"
            >
              <img src="/ia-link.svg" />
            </motion.div>
            <motion.div
              initial={{ background: "#c4c4c4" }}
              whileHover={{ background: "#ffffff" }}
              onClick={() => scrollTo("#abn")}
              className="w46 h46 bg-c4 br-50 d-flex justify-content-center align-items-center cursor-pointer"
            >
              <img src="/abn-link.svg" />
            </motion.div>
            <motion.div
              initial={{ background: "#c4c4c4" }}
              whileHover={{ background: "#ffffff" }}
              onClick={() => scrollTo("#mockup")}
              className="w46 h46 bg-c4 br-50 d-flex justify-content-center align-items-center cursor-pointer"
            >
              <img src="/mockup-link.svg" />
            </motion.div>
          </motion.div>
          <motion.div
            variants={{
              normal: { height: 0 },
              expand: { height: 19 },
            }}
          />
          <motion.div
            variants={{
              normal: { opacity: 0.6 },
              expand: { opacity: 1 },
            }}
            onClick={() => scrollTo("#top")}
            className="scroll-menu-btn cursor-pointer"
          >
            <img
              className="cursor-pointer"
              variants={{
                normal: { opacity: 0.6 },
                expand: { opacity: 1 },
              }}
              src="/to-top.svg"
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="bg-plain pb50 pt40 ph80 d-flex">
        <div className="flex-fill" />
        <Link href="/case-studies/access">
          <span className="d-flex align-item-center cursor-pointer">
            <h2 className="alata normal fs36 m0">Next case study</h2>
            <div className="w24 " />
            <img className="w24" src="/arrow-right.svg" />
          </span>
        </Link>
      </div>
      <style jsx>{`
        .process-image-container {
          position: relative;
          margin-left: 60px;
          height: 200px;
        }

        @media only screen and (max-width: 767px) {
          .process-image-container {
            margin-left: 0;
            height: 220px;
            overflow-x: scroll;
          }
        }
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
    </Layout>
  );
}
