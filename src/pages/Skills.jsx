import React from "react";
import SubButton from "../components/SubButton";
import SkillCard from "../components/SkillCard";
import Back from "../assets/icons/Back.svg";
import skillData from "../data/skills";
import useDrag from "../hooks/useDrag";

const Skills = () => {
  const [skills, dragProps, draggedIndex] = useDrag(skillData);
  return (
    <div className="background h-screen bg-center bg-cover">
      <div className="h-screen px-[5%] py-3 backdrop-blur-xl">
        <div className="nav">
          <SubButton
            bgColor="#FFE900"
            navigateTo="/"
            icon={
              <img src={Back} alt="Back icon" className="-ml-2 skew-x-12" />
            }
            text="BACK"
          />
        </div>
        <div className="h-[85%] flex justify-center items-center">
          <div className="h-[95%] w-2/3 mx-auto text-white pl-6 pr-3 overflow-auto">
            <div className="custom-scrollbar pr-3 h-full overflow-auto grid grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.id}
                  {...dragProps(index)}
                  className={`cursor-move transition duration-150 ${
                    index === draggedIndex ? "opacity-40 scale-95" : ""
                  }`}
                >
                  <SkillCard
                    icon={
                      <img
                        src={skill.icon}
                        className="max-w-24"
                        alt={`${skill.label} icon`}
                      />
                    }
                    label={skill.label}
                    category={skill.category}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
