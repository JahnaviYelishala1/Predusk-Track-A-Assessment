const API_BASE = "https://predusk-track-a-backend.onrender.com"; 
// change after deployment

export async function getProfile() {
  try {
    const res = await fetch(`${API_BASE}/profile`);
    const data = await res.json();

    // Fallback if DB is empty (Render reset)
    if (!data) {
      return {
        name: "Yelishala Jahnavi",
        education: "B.Tech in CSE (2023–2027), NIT Delhi",
        summary:
          "Software & AI Developer with strong foundations in backend development, machine learning, and scalable system design.",
        github: "https://github.com/JahnaviYelishala1",
        linkedin: "https://linkedin.com/in/jahnavi-yelishala-3121b9325",
        portfolio: "https://jahnaviyelishala1.github.io/my-portfolio/",
        work: [],
      };
    }

    return data;
  } catch {
    // Network / cold start fallback
    return {
      name: "Yelishala Jahnavi",
      education: "B.Tech in CSE (2023–2027), NIT Delhi",
      summary:
        "Software & AI Developer with strong foundations in backend development, machine learning, and scalable system design.",
      github: "https://github.com/JahnaviYelishala1",
      linkedin: "https://linkedin.com/in/jahnavi-yelishala-3121b9325",
      portfolio: "https://jahnaviyelishala1.github.io/my-portfolio/",
      work: [],
    };
  }
}


export async function getSkills() {
  const res = await fetch(`${API_BASE}/skills/top`);
  return res.json();
}

export async function getProjects(skill) {
  const url = skill
    ? `${API_BASE}/projects?skill=${encodeURIComponent(skill)}`
    : `${API_BASE}/projects`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}