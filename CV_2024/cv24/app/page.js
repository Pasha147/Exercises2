"use client";

import Header from "./ua/header.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto">
        <section
          id="home"
          style={{
            backgroundImage: `
            
            linear-gradient(25deg, rgba(2,0,36,0.8) 28%, rgba(0,46,82,0.8) 67%, rgba(0,86,159,0.8) 100%), 
            url('/grid-pattern.svg') 
    `,
            backgroundSize: "cover, 40px 40px", // Градієнт "cover", сітка — фіксована
            backgroundRepeat: "no-repeat, repeat", // Градієнт без повтору, сітка повторюється
            backgroundPosition: "center, center", // Центрування для обох
          }}
          className="  block  widescreen:section-min-height tallscreen:section-min-height"
          
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

        <section id="work_exp" className="widescreen:section-min-height tallscreen:section-min-height">Work experiences</section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section id="contact" className="widescreen:section-min-height tallscreen:section-min-height">contact</section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
      </main>
      <footer>Footer</footer>
    </>
  );
}
