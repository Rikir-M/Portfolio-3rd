import React from "react";

const ResumePart = () => {
  return (
    <div className="h-[95%] w-2/3 mx-auto text-white shadow-lg rounded-2xl py-6 pl-6 pr-3 glassy-card overflow-auto">
      <div className="custom-scrollbar pr-3 h-full overflow-auto">
        <h1 className="text-center text-3xl pb-6">Resume</h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Profile Summary</h2>
          <p className="text-white">
            I'm a <span className="text-primary">creative</span> and{" "}
            <span className="text-primary">detail-oriented</span>{" "}
            <span className="text-yellow">frontend web developer</span> with
            around <span className="text-primary">2 years of experience</span>{" "}
            building and improving user-friendly websites and apps. I enjoy
            working with{" "}
            <span className="text-primary">modern frontend tools</span>, making{" "}
            <span className="text-primary">responsive designs</span>, and
            bringing <span className="text-primary">interactive ideas</span> to
            life.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
          <ul className="list-disc pl-5 text-white">
            <li>
              <span className="text-primary">JavaScript, HTML5, CSS3</span>
            </li>
            <li>
              <span className="text-primary">React.js, GSAP</span>
            </li>
            <li>
              <span className="text-primary">
                Vite, Git, Tailwind CSS, Bootstrap, Figma
              </span>
            </li>
            <li>
              <span className="text-primary">MySQL, MongoDB</span>
            </li>
            <li>
              <span className="text-primary">
                Responsive Design, UI/UX Design, Cross-browser Compatibility,
                RESTful APIs
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Professional Experience
          </h2>
          <div>
            <h3 className="text-lg font-medium text-primary">
              Junior Web Developer
            </h3>
            <p className="text-sm text-white">ALJ Myanmar Co.,Ltd.</p>
            <p className="text-sm text-white mb-2">09/2023 - Current</p>
            <ul className="list-disc pl-5 text-white">
              <li>
                Assisting in{" "}
                <span className="text-primary">
                  e-commerce website development
                </span>
                , focusing on{" "}
                <span className="text-primary">frontend design</span> and{" "}
                <span className="text-primary">UI</span> enhancements.
              </li>
              <li>
                Utilizing Smarty templating to create{" "}
                <span className="text-primary">dynamic</span> and{" "}
                <span className="text-primary">customized</span> layouts.
              </li>
              <li>
                Participating in <span className="text-primary">CMS</span> and{" "}
                <span className="text-primary">
                  admin dashboard implementation
                </span>
                , ensuring usability and functionality.
              </li>
              <li>
                <span className="text-primary">
                  Improving page loading speeds
                </span>{" "}
                by optimizing images and minimizing scripts.
              </li>
              <li>
                Contributing to site renewals by implementing{" "}
                <span className="text-primary">design updates</span> and
                improving <span className="text-primary">user interfaces</span>.
              </li>
              <li>
                Developing new pages using the MVC pattern, improving{" "}
                <span className="text-primary">code maintainability</span> and{" "}
                <span className="text-primary">scalability</span>.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc pl-5 text-white">
            <li>
              <span className="text-primary">Personal Portfolio</span>: Designed and developed a
              portfolio showcasing interactive projects, integrated with React
              and Tailwind CSS.
            </li>
          </ul>
        </section>

        <button className="mt-6 w-full border border-gray-300 rounded-lg py-2 text-white">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default ResumePart;
