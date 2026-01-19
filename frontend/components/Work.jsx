"use client";
import { useEffect, useState } from "react";
import { getProfile } from "../lib/api";

export default function Work() {
  const [work, setWork] = useState([]);

  useEffect(() => {
    getProfile().then((profile) => {
      if (profile?.work) setWork(profile.work);
    });
  }, []);

  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
      <div className="space-y-4">
        {work.map((w) => (
          <div key={w.work.id} className="bg-white rounded-xl shadow p-5">
            <h4 className="text-lg font-semibold">{w.work.company}</h4>
            <p className="text-gray-600">{w.work.role}</p>
            <p className="text-gray-700 mt-2">{w.work.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
