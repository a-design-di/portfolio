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
        <div className="content-container content-section pb40 pt40 ph80 d-flex flex-column justify-content-center">
          <Link href="/">
            <img className="absolute t0" src="/back.svg"></img>
          </Link>
          <div className="d-flex align-items-center ">
            <div className="flex-fill" />
            <img src="/access-banner.png" className="mh16 mw354"></img>
            <div className="flex-fill" />
            <div className="mw580">
              <h1>RBAC Refactor & Redesign</h1>
              <div className="nda">
                To comply with the NDA, all of the case study’s confidential
                contents have all been altered, and the interface was completely
                redesigned.
              </div>
            </div>
          </div>
          <div className="d-flex gapx60">
            <h2 className="alata">Background</h2>
            <h3 className="mw1080">
              The client was an admin department that was managing around 2,300
              active (and around 1,750 inactive) accounts with 55 roles. The
              product had been around for about 10 years and improvement was
              desperately needed. Hence my role as a Product Designer was to
              evaluate the main user flow and point out all the pain points to
              plan out the next iteration.
            </h3>
          </div>
        </div>
      </section>
      <section id="process" className="bg-plain relative">
        <div className="content-container pb40 pt40 ph80 d-flex overflow-hidden">
          <h2 className="alata flex-shrink-0">My Process</h2>
          <div className="relative" style={{ marginLeft: 60, height: 200 }}>
            <img src="/access-process.svg"></img>
          </div>
        </div>
      </section>
      <div id="interview" className="bg-main relative">
        <div className="content-container pb40 pt40 ph80 two-side-section">
          <div>
            <div className="d-flex align-items-center">
              <img className="mr10 w24" src="/document-white.svg"></img>
              <h2 className="alata">Heuristic Evaluation</h2>
            </div>
            <h3>
              In order to prepare talking to the user for an in-depth
              understanding, heuristic evaluation was done to get a grasp of the
              specific terminologies and the available functions. The picture is
              an example
            </h3>
            <div style={{ height: 40 }} />
            <h3 className="bold glow">
              The hypothesis was users would have to have an external
              memory-aids system to help them completing the tasks. We had to
              focus on the indicators of poor supports such as external notes,
              cross referencing, manual work, etc.
            </h3>
          </div>
          <div className="right-side">
            <LazyImg
              className="br10 w-100"
              style={{ marginBottom: 20 }}
              src="/access-heuristic (1).png"
            />
            <LazyImg className="br10 w-100" src="/access-heuristic (2).png" />
            <div className="caption">
              One of the many sections which was being evaluated.
            </div>
          </div>
        </div>
      </div>
      <div id="brain" className="bg-plain pb34 pt40 ph80 text-center">
        <h2 className="alata d-inline-flex align-items-center">
          <img className="mr10 w24" src="/interview-white.svg"></img>
          Contextual Inquiry
        </h2>
        <div style={{ height: 24 }} />
        <div className="mw720 text-left  mh-auto">
          To understand the underlying motives and more detailed steps, I
          conducted this research. It took in place in the users’ working
          environment. The findings of this study was surprisingly rich as not
          only did we find the indicators mentioned in Heuristic Evaluation, but
          also more internal procedures needed to be done like using emails to
          request, and manual work even to reset user’s password.
        </div>
        <div style={{ height: 30 }} />
        <LazyImg className="mw640" src="/workshop-pic.jpg" />
      </div>
      <div id="ia" className="bg-main relative">
        <div className="content-container  pb40 pt40 ph80 two-side-section">
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
      <div id="abn" className="bg-plain pb50 pt40 ph80 text-center">
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
        <div className="content-container  pb40 pt40 ph80">
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
              <LazyImg className="mr10" src="/campaign-mockup-1.png" />
              <div className="caption-14">
                The system has the flexibility to support different AND/OR
                relations. Based on the example, it will cost more for people on
                the Silver level than Gold to accomplish the tasks.
              </div>
            </div>
            <div className="mw610">
              <LazyImg className="mr10" src="/campaign-mockup-2.png" />
              <div className="caption-14">
                The creation page, where users customize their campaign tasks,
                available in 3 repetition choices: 7 day, 14 day, and none (not
                repeating).
              </div>
            </div>
            <div className="mw610">
              <LazyImg className="mr10" src="/campaign-mockup-3.png" />
              <div className="caption-14">
                Although the “Task Bank” menu provides the same function, here
                is a shortcut in case users can’t find a suitable task during
                the campaign creation.
              </div>
            </div>
            <div className="mw610">
              <LazyImg className="mr10" src="/campaign-mockup-4.png" />
              <div className="caption-14">
                The last step consists of preview to let users verify their
                campaign rules.
              </div>
            </div>
            <div className="mw1100">
              <LazyImg className="mr10" src="/campaign-mockup-5.png" />
              <div className="caption-14">
                The dashboard explains the campaign performance across its
                period. Beside shows the quick glance of financial summary to
                assess the campaign performance.
              </div>
            </div>
            <div className="mw1100">
              <LazyImg className="mr10" src="/campaign-mockup-6.png" />
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
        <h2 className="alata normal fs36 m0">Next case study</h2>
        <div className="w24 " />
        <img className="w24" src="/arrow-right.svg" />
      </div>
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
    </Layout>
  );
}
