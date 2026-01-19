const API_BASE = "https://predusk-track-a-backend.onrender.com";

/* ---------------- PROFILE ---------------- */
export async function getProfile() {
  try {
    const res = await fetch(`${API_BASE}/profile`);
    const data = await res.json();

    if (!data) throw new Error("Empty profile");

    return data;
  } catch {
    // ✅ Fallback (stable demo)
    return {
      name: "Yelishala Jahnavi",
      education: "B.Tech in CSE (2023–2027), NIT Delhi",
      summary:
        "Software & AI Developer with strong foundations in backend development, machine learning, and scalable system design.",
      github: "https://github.com/JahnaviYelishala1",
      linkedin: "https://linkedin.com/in/jahnavi-yelishala-3121b9325",
      portfolio: "https://jahnaviyelishala1.github.io/my-portfolio/",
      work: [
        {
          work: {
            id: "fallback-work",
            company: "Salesforce – Futureforce Tech Accelerator",
            role: "Tech Accelerator Participant (2025)",
            description:
              "Selected among the top 115 students across India. Worked on AI systems, scalable backend design, and cloud fundamentals.",
          },
        },
      ],
    };
  }
}

/* ---------------- SKILLS ---------------- */
export async function getSkills() {
  try {
    const res = await fetch(`${API_BASE}/skills/top`);
    const data = await res.json();

    if (!data || data.length === 0) throw new Error("Empty skills");

    return data;
  } catch {
    // ✅ Fallback skills
    return [
      { id: "1", name: "Python" },
      { id: "2", name: "JavaScript" },
      { id: "3", name: "Machine Learning" },
      { id: "4", name: "SQL" },
      { id: "5", name: "Next.js" },
      { id: "6", name: "FastAPI" },
      { id: "7", name: "PostgreSQL" },
      { id: "8", name: "Git" },
    ];
  }
}

/* ---------------- PROJECTS ---------------- */
export async function getProjects(skill) {
  try {
    const url = skill
      ? `${API_BASE}/projects?skill=${encodeURIComponent(skill)}`
      : `${API_BASE}/projects`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data || data.length === 0) throw new Error("Empty projects");

    return data;
  } catch {
    // ✅ Fallback projects (resume-aligned)
    const allProjects = [
      {
        id: "p1",
        title: "Smart Grid Energy Demand Forecasting",
        description:
          "Short-Term Load Forecasting system using XGBoost and stacked LSTM models for hourly electricity demand prediction.",
        links: JSON.stringify({
          github:
            "https://github.com/JahnaviYelishala1/smart-grid-energy-demand-forecasting",
          report:
            "https://drive.google.com/file/d/16TXNASRwRB1gP9PkGYNCcFjxZQPYuZJO/view",
        }),
        skills: [
          { skill: { id: "s1", name: "Python" } },
          { skill: { id: "s2", name: "Machine Learning" } },
          { skill: { id: "s3", name: "SQL" } },
        ],
      },
      {
        id: "p2",
        title: "AI Course Generator",
        description:
          "AI-driven platform that generates personalized course content using Gemini API and YouTube Data API.",
        links: JSON.stringify({
          github:
            "https://github.com/JahnaviYelishala1/ai-course-generator",
          demo:
            "https://ai-course-generator-jahnavi-yelisha.vercel.app/",
        }),
        skills: [
          { skill: { id: "s4", name: "JavaScript" } },
          { skill: { id: "s5", name: "Next.js" } },
          { skill: { id: "s6", name: "PostgreSQL" } },
          { skill: { id: "s7", name: "Git" } },
        ],
      },
      {
        id: "p3",
        title: "MovieBinge",
        description:
          "Content-based movie recommendation system using vectorization and cosine similarity.",
        links: JSON.stringify({
          github:
            "https://github.com/JahnaviYelishala1/movie-recommendation-system",
          demo:
            "https://movie-recommendation-system-fhehcj84hnnkunuhgktmra.streamlit.app/",
        }),
        skills: [
          { skill: { id: "s1", name: "Python" } },
          { skill: { id: "s2", name: "Machine Learning" } },
        ],
      },
    ];

    // Apply client-side filtering if skill searched
    if (skill) {
      return allProjects.filter((p) =>
        p.skills.some((ps) =>
          ps.skill.name.toLowerCase().includes(skill.toLowerCase())
        )
      );
    }

    return allProjects;
  }
}
