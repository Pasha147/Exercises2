"use client";

import Header from "./ua/header.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto [&>section]:pt-8  [&>section]:min-h-[100vh]">
        <section
          id="home"   
          className="bg-resume-section bg-gradient-cover-grid bg-no-repeat-grid bg-center-grid"
          // widescreen:section-min-height tallscreen:section-min-height
        >
          <h1>Hi I'm Pasha</h1>
          <h2>Frontend Developer & Applied Mathematics PhD</h2>
          <p>Creating impactful web experiences with precision and style.</p>
          {/* Контент */}
          <img
            src="./img/me2.png"
            alt="Your Image"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 80%, transparent)",
              maskImage: "linear-gradient(to bottom, black 80%, transparent)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
            className="w-56"
          />
        </section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="skils" className="block widescreen:section-min-height tallscreen:section-min-height">skils</section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="education" className="widescreen:section-min-height tallscreen:section-min-height">education</section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="experience" className="widescreen:section-min-height tallscreen:section-min-height">Work experiences</section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="projects" className="widescreen:section-min-height tallscreen:section-min-height">Work projects</section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="contact" className="widescreen:section-min-height tallscreen:section-min-height">contact</section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
      </main>
      <footer>Footer</footer>
    </>
  );
}
