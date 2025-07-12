import React from "react";

const ResumePart = () => {
  return (
    <div className="h-[95%] w-2/3 mx-auto shadow-lg rounded-2xl py-6 pl-6 pr-3 glassy-card overflow-auto">
      <div className="custom-scrollbar pr-3 h-full overflow-auto">
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-primary mb-2">
            Professional Summary
          </h2>
          <p className="text-white">
            Creative and detail-oriented Frontend Web Developer with 2 years of
            experience designing, developing, and optimizing user-focused
            websites and applications. Skilled in modern frontend frameworks,
            responsive design, and creating interactive user experiences. Adept
            at collaborating with cross-functional teams to deliver innovative
            solutions that meet business needs and drive results.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-primary mb-2">
            Technical Skills
          </h2>
          <ul className="list-disc pl-5 text-white">
            <li>
              <strong>Languages:</strong> JavaScript, HTML5, CSS3
            </li>
            <li>
              <strong>Frameworks/Libraries:</strong> React, GSAP
            </li>
            <li>
              <strong>Tools:</strong> Vite, Git, Tailwind CSS, Bootstrap, Figma
            </li>
            <li>
              <strong>Database:</strong> MySQL, MongoDB
            </li>
            <li>
              <strong>Other Skills:</strong> Responsive Design, UI/UX Design,
              Cross-browser Compatibility, RESTful APIs
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-primary mb-2">
            Professional Experience
          </h2>
          <div>
            <h3 className="text-lg font-medium text-primary underline decoration-white">
              Junior Web Developer
            </h3>
            <p className="text-sm text-white">ALJ Myanmar Co.,Ltd.</p>
            <p className="text-sm text-white mb-2">09/2023 - Current</p>
            <ul className="list-disc pl-5 text-white">
              <li>
                Assisting in e-commerce website development, focusing on frontend
                design and UI enhancements.
              </li>
              <li>
                Utilizing Smarty templating to create dynamic and customized
                layouts.
              </li>
              <li>
                Participating in CMS and admin dashboard implementation, ensuring
                usability and functionality.
              </li>
              <li>
                Improving page loading speeds by optimizing images and minimizing
                scripts.
              </li>
              <li>
                Contributing to site renewals by implementing design updates and
                improving user interfaces.
              </li>
              <li>
                Developing new pages using the MVC pattern, improving code
                maintainability and scalability.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-primary mb-2">Projects</h2>
          <ul className="list-disc pl-5 text-white">
            <li>
              <strong>Personal Portfolio</strong>: Designed and developed a
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
