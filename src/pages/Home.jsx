import React from "react";
import ButtonSection from "../components/ButtonSection";
import Captain from "../components/Captain";
import Message from "../components/Message";
import Phone from "../components/Phone";

const Home = () => {
  return (
    <div className="background h-screen bg-center bg-cover font-Rubik">
      <Captain />
      <ButtonSection />
      <Message />
      <Phone />
    </div>
  );
};

export default Home;
