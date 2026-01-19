"use client";
import { useEffect, useState } from "react";
import { getProfile } from "../lib/api";

export default function ProfileCard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  if (!profile) {
    return <p className="text-gray-500">Loading profile...</p>;
  }

  return (
    <section className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-semibold">{profile.name}</h2>
      <p className="text-gray-600">{profile.education}</p>

      <p className="mt-4 text-gray-700">{profile.summary}</p>

      <div className="flex gap-6 mt-6">
        <a href={profile.github} className="text-blue-600 hover:underline">
          GitHub
        </a>
        <a href={profile.linkedin} className="text-blue-600 hover:underline">
          LinkedIn
        </a>
        <a href={profile.portfolio} className="text-blue-600 hover:underline">
          Portfolio
        </a>
      </div>
    </section>
  );
}
