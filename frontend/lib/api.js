const API_BASE = "http://localhost:4000"; // change after deployment

export async function getProfile() {
  const res = await fetch(`${API_BASE}/profile`);
  return res.json();
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