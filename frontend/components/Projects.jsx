"use client";
import { useEffect, useState } from "react";
import { getProjects } from "../lib/api";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [skill, setSkill] = useState("");

    useEffect(() => {
        getProjects().then(setProjects);
    }, []);

    async function searchBySkill() {
        try {
            const data = await getProjects(skill);
            setProjects(data);
        } catch (err) {
            console.error("Search failed:", err);
        }
    }


    return (
        <section>
            <h3 className="text-xl font-semibold mb-4">Projects</h3>

            <div className="flex gap-3 mb-6">
                <input
                    className="border rounded px-4 py-2 w-full"
                    placeholder="Search by skill (e.g. Python)"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                />
                <button
                    onClick={searchBySkill}
                    className="bg-black text-white px-5 py-2 rounded"
                >
                    Search
                </button>
            </div>

            <div className="space-y-5">
                {projects.map((project) => {
                    // 🔑 Parse links safely
                    let links = {};
                    try {
                        links = project.links ? JSON.parse(project.links) : {};
                    } catch {
                        links = {};
                    }

                    return (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl shadow p-5"
                        >
                            <h4 className="text-lg font-semibold">
                                {project.title}
                            </h4>

                            <p className="text-gray-700 mt-2">
                                {project.description}
                            </p>

                            {/* 🧠 Project Skills */}
                            {project.skills && project.skills.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.skills.map((ps) => (
                                        <span
                                            key={ps.skill.id}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                                        >
                                            {ps.skill.name}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* 🔗 Project Links */}
                            <div className="flex gap-4 mt-4">
                                {links.github && (
                                    <a
                                        href={links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        GitHub
                                    </a>
                                )}

                                {links.demo && (
                                    <a
                                        href={links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                )}

                                {links.report && (
                                    <a
                                        href={links.report}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Report
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
