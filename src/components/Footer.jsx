import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-1 w-screen text-white text-center text-sm">
      <p>
        UI design inspired by{" "}
        <a
          href="https://honkaiimpact3.hoyoverse.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Honkai Impact 3rd
        </a>
        .
      </p>
      <p>© All rights reserved by COGNOSPHERE (HoYoverse).</p>
    </footer>
  );
};

export default Footer;
