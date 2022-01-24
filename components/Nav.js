import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function nav() {
  const router = useRouter();
  const isAboutPage = /^about/gi.test(router.pathname) ? "true" : "false";
  return (
    <>
      <div className="nav">
        <Link href="/">
          <img className="cursor-pointer" src="/logo.svg"></img>
        </Link>
        <div className="w16"></div>
        <Link href="/">
          <h3 className="cursor-pointer">Vigor Arisandi</h3>
        </Link>
        <div className="space"></div>
        <Link href="/about" active={isAboutPage}>
          <a>
            <h3>About</h3>
          </a>
        </Link>
        <div className="w20"></div>
        <div className="divider"></div>
        <div className="w20"></div>
        <a href="/vigor-resume.pdf" target="_blank">
          <h3>Resume</h3>
        </a>
      </div>
      <div className="h100 sm-h44"></div>
      <style jsx>{`
        h3 {
          margin: 0;
        }
        .nav {
          background: #000626;
          color: #ffffff;
          inline-size: auto;
          display: flex;
          padding-top: 36px;
          padding-bottom: 36px;
          padding-left: 80px;
          padding-right: 80px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          align-items: center;
        }
        .divider {
          background-color: #424f77;
          height: 22px;
          width: 1px;
        }
        .space {
          flex-grow: 1;
        }
        a {
          color: #424f77;
          text-decoration: none;
          transition: color 0.5s;
        }
        a:hover,
        a[active="true"] {
          color: white;
        }

        @media only screen and (max-width: 768px) {
          .nav {
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 8px;
            padding-bottom: 8px;
          }
        }
      `}</style>
    </>
  );
}
