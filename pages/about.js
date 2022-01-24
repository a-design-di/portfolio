import { motion } from "framer-motion";
import EmailCopyButton from "../components/EmailCopyButton";
import Layout from "../components/Layout";
import LazyImg from "../components/LazyImg";

export default function About() {
  return (
    <Layout>
      <section id="top" className="bg-main relative">
        <div className="bg-main ph80 sm-ph16 d-flex w-100 flex-column justify-content-center align-items-center  border-box overflow-hidden">
          <div className="h120 sm-h20" />
          <div className="relative mw762 h296 w-100">
            <img
              src="/polygon-bg.svg"
              className="mw342 absolute t0"
              style={{
                right: 10,
              }}
            />
            <img
              src="/profpic_no-bg 1.png"
              className="w233 absolute b0"
              style={{
                right: 0,
              }}
            />
            <motion.div>
              <motion.div
                className="archivo fs40 lh44 sm-fs22 sm-lh28 absolute text-right"
                style={{
                  right: 218,
                  top: 78,
                }}
                animate={{ opacity: [1, 0, 0, 0, 0, 1, 1] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  times: [0.128, 0.205, 0.461, 0.538, 0.795, 0.872, 1],
                }}
              >
                Complex problem solver
              </motion.div>
              <motion.div
                className="archivo fs40 lh44 sm-fs22 sm-lh28 absolute text-right"
                style={{
                  right: 218,
                  top: 78,
                }}
                animate={{ opacity: [0, 1, 1, 0, 0, 0, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  times: [0.128, 0.205, 0.461, 0.538, 0.795, 0.872, 1],
                }}
              >
                Blockchain enthusiat
              </motion.div>
              <motion.div
                className="archivo fs40 lh44 sm-fs22 sm-lh28 absolute text-right"
                style={{
                  right: 218,
                  top: 78,
                }}
                animate={{ opacity: [0, 0, 0, 1, 1, 0, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  times: [0.128, 0.205, 0.461, 0.538, 0.795, 0.872, 1],
                }}
              >
                Business minded person
              </motion.div>
            </motion.div>
          </div>
          <div className="h120 sm-h20" />
          <div className="mw1024 h48 d-flex  align-items-center justify-content-center">
            <div className="d-flex relative overflow-hidden">
              <motion.div
                animate={{
                  x: ["0%", "-100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="nowrap"
              >
                0 notifications
                <div className="d-inline-block w24" />
                collaborating for something great
                <div className="d-inline-block w24" />
                asking questions
                <div className="d-inline-block w24" />
                knowing various web3.0 use-cases
                <div className="d-inline-block w24" />
              </motion.div>
              <motion.div
                animate={{
                  x: ["0%", "-100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="nowrap"
              >
                0 notifications
                <div className="d-inline-block w24" />
                collaborating for something great
                <div className="d-inline-block w24" />
                asking questions
                <div className="d-inline-block w24" />
                knowing various web3.0 use-cases
                <div className="d-inline-block w24" />
              </motion.div>
            </div>
            <img
              style={{ width: 32, height: 28 }}
              className="absolute"
              src="/heart.svg"
            />
          </div>
          <div className="h120 sm-h20" />

          <div className="mw1052 w-100  d-flex sm-flex-column align-items-center justify-content-between">
            <LazyImg
              className="w252 mr10 sm-mr0  sm-mb20"
              src="/dive-figma.png"
            />
            <div className="mw720">
              <div>
                Scuba diving taught me to be more aware with my surroundings. To
                navigate ourselves, we should focus on the underwater
                topography, the current direction, any visible fishes or the
                types of corrals, and many more.
              </div>
              <div style={{ height: 36 }} />
              <div className="alata fs24">
                This somehow helps me to become a better product designer.
              </div>
              <div style={{ height: 36 }} />
              <div>
                I consider myself quite sensitive with people’s behavior.
                Especially living in Taiwan, a beautiful country that ranked
                relatively high in “Power Distance” (
                <a href="https://www.hofstede-insights.com/country-comparison/taiwan/">
                  Hostede
                </a>
                ). It affects their straightforwardness and making us, the
                researchers, to focus on the user-quotes and to utilize our
                read-between-the-lines skill.
              </div>
            </div>
          </div>

          <div className="h120 sm-h20" />

          <div className="mw1052 w-100  d-flex sm-flex-column align-items-center justify-content-between">
            <div className="w252 sm-w-100 mr10  sm-mb20 sm-mr0">
              Books inspire me a lot to see things from different perspectives.
              I believe good UIUX, product owners, project managers, and even
              developers have ranging knowledge across psychology, business
              model, and technology.
            </div>
            <div className="mw720">
              <LazyImg className="br10 w-100 sm-mb20" src="/books 1.png" />
              <div className="caption">
                Feel free to click pause anytime and see the list!
              </div>
            </div>
          </div>

          <div className="h120 sm-h20" />

          <div className="mw1052 d-flex w-100 align-items-center">
            <div className="w10 sm-w0" />
            <div className="alata fs36">Let’s connect!</div>
            <div className="w24 sm-w10" />
            <motion.a
              initial={{
                background: "#C3C8CB",
              }}
              whileHover={{
                background: "#2790DD",
              }}
              whileTap={{
                background: "#2790DD",
              }}
              className="w36 h36 br-50 d-flex flex-shrink-0 align-items-center justify-content-center overflow-hidden cursor-pointer"
            >
              <img src="/linkedin.svg" className="w18" />
            </motion.a>
            <div className="w24 sm-w10" />
            <motion.a
              initial={{
                background: "#C3C8CB",
              }}
              whileHover={{
                background: "#EB4F8A",
              }}
              whileTap={{
                background: "#EB4F8A",
              }}
              className="w36 h36 br-50 d-flex flex-shrink-0 align-items-center justify-content-center overflow-hidden cursor-pointer"
            >
              <img src="/dribble.svg" className="w18" />
            </motion.a>
            <div className="w24 sm-w10" />
            <EmailCopyButton />
          </div>

          <div className="h120 sm-h20" />
        </div>
      </section>
    </Layout>
  );
}
