import { useRouter } from "next/router";

export default function nav() {
  const router = useRouter();
  const isAboutPage = /^about/gi.test(router.pathname) ? "true" : "false";
  return (
    <>
      <div className="nav">
        <img src="/logo.svg"></img>
        <div className="w16"></div>
        <h3>Vigor Arisandi</h3>
        <div className="space"></div>
        <a href="About" active={isAboutPage}>
          <h3>About</h3>
        </a>
        <div className="w20"></div>
        <div className="divider"></div>
        <div className="w20"></div>
        <a href="/my-resume.pdf" target="_blank">
          <h3>Resume</h3>
        </a>
      </div>
      <div className="h100"></div>
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
        a:hover, a[active="true"] {
            color: white;
          }

        }
      `}</style>
    </>
  );
}
