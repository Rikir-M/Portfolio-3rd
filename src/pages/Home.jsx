import React from "react";
import ButtonSection from "../components/ButtonSection";
import Captain from "../components/Captain";
import Message from "../components/Message";
import Phone from "../components/Phone";

const Home = () => {
  return (
    <div className="background h-screen bg-center bg-cover px-[5%] py-3">
      <Captain />
      <ButtonSection />
      <Message />
      <Phone />
    </div>
  );
};

export default Home;
