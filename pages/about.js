import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <section id="top" className="bg-main relative">
        <div className="content-container content-section pb40 pt40 ph80 d-flex flex-column justify-content-center">
          <h1>About A Design Dee</h1>
          <div style={{ height: 30 }} />
          <img className="mw520" src="/profpic_regular 1.png" />
        </div>
      </section>
    </Layout>
  );
}
