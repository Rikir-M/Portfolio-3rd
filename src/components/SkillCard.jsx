import React from "react";

const SkillCard = ({ icon, label, category }) => {
  return (
    <div className="shadow-lg rounded-2xl glassy-card flex flex-col justify-center items-center py-5 px-3">
      {icon}
      <p>{label}</p>
      <p className="mt-1 px-3 py-1 rounded-full bg-slate-500 text-white text-sm">{category}</p>
    </div>
  );
};

export default SkillCard;
