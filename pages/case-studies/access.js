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
          <div className="d-flex align-items-center sm-flex-column">
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
          <div className="d-flex gapx60 sm-flex-column">
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
        <div className="content-container pb40 pt40 ph80 sm-py16 sm-ph16 d-flex overflow-hidden sm-flex-column">
          <h2 className="alata flex-shrink-0">My Process</h2>
          <div className="relative process-image-container">
            <img src="/access-process.svg"></img>
          </div>
        </div>
      </section>
      <div id="interview" className="bg-main relative">
        <div className="content-container pb40 pt40 ph80 sm-py16 sm-ph16 two-side-section">
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
      <div
        id="brain"
        className="bg-plain pb34 pt40 ph80 sm-py16 sm-ph16 text-center"
      >
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

        <div className="d-flex gapx40 gapy30 justify-content-center flex-wrap">
          <div className="mw520">
            <LazyImg
              className="mw-100 br10 mr10"
              src="/access-contextual.jpg"
            />
          </div>
          <div className="mw520">
            <video
              className="mw520 br10"
              autoplay='1' muted loop 
              controls playsInline="1"
              src="/access-heuristic (3).mp4"
            />
            <div className="caption-14 text-left">
              Now that... is such a massive list to scroll without search
              functionality! Thank god browsers nowadays are equipped with
              build-in search function.
            </div>
          </div>
        </div>
      </div>
      <div id="ia" className="bg-main relative">
        <div className="content-container  pb40 pt40 ph80 sm-py16 sm-ph16 two-side-section">
          <div>
            <div className="d-flex align-items-center">
              <img className="mr10 w24" src="/idea-white.svg"></img>
              <h2 className="alata">Workshop</h2>
            </div>
            <h3>
              The previous steps informed us that multiple platforms were used
              in the user journey to grant access. Therefore, this workshop was
              necessary to break down the tasks, the persona and the platforms
              used to complete the journey.
              <br />
              We came up with a solution to integrate most of them into:
              <ul>
                <li>Connect to the 3rd party AD (Active Directory)</li>
                <li>SSO (Single Sign On) to prevent unknown users</li>
                <li>Activity logs</li>
                <li>Automated password reset</li>
                <li>Email notification</li>
                <li>Build-in batch selections instead of file upload, and</li>
                <li>
                  The concept of “Fixed User Groups” and “Customizable User
                  Groups”
                </li>
              </ul>
            </h3>
          </div>
          <div className="right-side">
            <LazyImg className="br10 w-100" src="/access-workshop.png" />
            <div style={{ marginBottom: 20 }} className="caption">
              The affinity diagram method was used to brainstorm.
            </div>
          </div>
        </div>
      </div>
      <div
        id="abn"
        className="bg-plain pb50 pt40 ph80  sm-py16 sm-ph16 text-center"
      >
        <h2 className="alata d-inline-flex align-items-center fs28">
          <img className="mr10 w24" src="/wireframe-white.svg"></img>
          Wireframe
        </h2>
        <div style={{ height: 24 }} />
        <div className="mw720 text-left mh-auto">
          It was quite a lot of new concept for the system hence we broke them
          down into three different main flows: general user, super admin, and
          the admin. Meaning, some of the pages cannot even be accessed by the
          admin.
        </div>
        <div style={{ height: 30 }} />
        <div className="d-flex gapx40 gapy30 justify-content-center flex-wrap">
          <div className="mw720">
            <LazyImg
              className="mw-100 br10 mr10"
              src="/access-wireframe (2).png"
            />
            <div className="caption-14 text-left">
              Super admin will first set up the connection with the
              organization’s directory.
            </div>
          </div>
          <div className="mw520">
            <LazyImg
              className="mw-100 br10 mr10"
              src="/access-wireframe (3).png"
            />
            <div className="caption-14 text-left">
              Only admin will have the access to assign users to the groups and
              adjust their access list.
            </div>
          </div>
          <div className="mw520">
            <LazyImg
              className="mw-100 br10 mr10"
              src="/access-wireframe (1).png"
            />
            <div className="caption-14 text-left">
              With the SSO method, users will be redirected to the pages they
              are assigned to.
            </div>
          </div>
        </div>
      </div>

      <div id="mockup" className="bg-main relative">
        <div className="content-container  pb40 pt40 ph80 sm-py16 sm-ph16">
          <h2 className="alata d-inline-flex align-items-center fs28 m0">
            <img className="mr10 w24" src="/mock.svg"></img>
            Mockup
          </h2>
          <div style={{ height: 24 }} />
          <h3 className="m0">
            Though we separated the flow into 3 main persona, they are all still
            in the same system. There were loads of edge-cases needed to be
            considered, but below are some of the main pages.
          </h3>

          <div style={{ height: 30 }} />
          <div className="d-flex gapx60 gapy30 justify-content-center flex-wrap">
            <div className="mw520">
              <LazyImg
                className="mw-100 br10 mr10"
                src="/access-mockup (1).png"
              />
              <div className="caption-14">
                A directory page for the super admin to connect to the third
                party.
              </div>
            </div>
            <div className="mw520">
              <LazyImg
                className="mw-100 br10 mr10"
                src="/access-mockup (2).png"
              />
              <div className="caption-14">
                Some required fields from one of the third parties.
              </div>
            </div>
            <div className="mw520">
              <LazyImg
                className="mw-100 br10 mr10"
                src="/access-mockup (3).png"
              />
              <div className="caption-14">
                A hierarchy tree for displaying the overall structure for admin
                to otganize the access. User can also change the business logic
                to apply some dependencies.
              </div>
            </div>
            <div className="mw520">
              <LazyImg
                className="mw-100 br10 mr10"
                src="/access-mockup (4).png"
              />
              <div className="caption-14">
                The detail page to track all of the access within an account.
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
              <img className="w36" src="/document-black.svg" />
            </motion.div>
            <motion.div
              initial={{ background: "#c4c4c4" }}
              whileHover={{ background: "#ffffff" }}
              onClick={() => scrollTo("#brain")}
              className="w46 h46 bg-c4 br-50 d-flex justify-content-center align-items-center cursor-pointer"
            >
              <img className="w36" src="/interview-black.svg" />
            </motion.div>
            <motion.div
              initial={{ background: "#c4c4c4" }}
              whileHover={{ background: "#ffffff" }}
              onClick={() => scrollTo("#ia")}
              className="w46 h46 bg-c4 br-50 d-flex justify-content-center align-items-center cursor-pointer"
            >
              <img className="w36" src="/idea-black.svg" />
            </motion.div>
            <motion.div
              initial={{ background: "#c4c4c4" }}
              whileHover={{ background: "#ffffff" }}
              onClick={() => scrollTo("#abn")}
              className="w46 h46 bg-c4 br-50 d-flex justify-content-center align-items-center cursor-pointer"
            >
              <img className="w36" src="/wireframe-black.svg" />
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
        <Link href="/case-studies/campaign">
          <span className="d-flex align-item-center cursor-pointer">
            <img
              className="w24"
              style={{ transform: "rotate(180deg)" }}
              src="/arrow-right.svg"
            />
            <div className="w24 " />
            <h2 className="alata normal fs36 m0">Previous case study</h2>
            <div className="flex-fill" />
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
