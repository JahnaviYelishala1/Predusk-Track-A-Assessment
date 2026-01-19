"use client";
import { useEffect, useState } from "react";
import { getSkills } from "../lib/api";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills().then(setSkills);
  }, []);

  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Skills</h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className="bg-white shadow px-4 py-2 rounded-full text-sm"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
