"use client";
import React from "react";
import Image from "next/image";
import { SkillsData } from "./skillsData";

export default function Data() {
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null);

  return (
    <div className=" w-11/12 p-8 top-0 flex mx-auto justify-center flex-wrap xl:h-[calc(100vh-70px)] items-center gap-10">
      {SkillsData.map((skill) => (
        <a
          href={skill.url}
          target="_blank"
          key={skill.name}
          className="flex flex-col justify-center items-center gap-5 relative "
          onMouseOver={() => setHoveredSkill(skill.name)}
          onMouseOut={() => setHoveredSkill(null)}
        >
          <Image
            src={skill.icon}
            alt={skill.name}
            width={75}
            height={75}
            style={{
              filter:
                hoveredSkill === skill.name
                  ? `drop-shadow(0 0 2em ${skill.color})`
                  : "none",
              transition: "all 0.3s ease",
            }}
          />
          <p className="mt-4">{skill.name}</p>
        </a>
      ))}
    </div>
  );
}
