const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {

  await prisma.profileWork.deleteMany();
  await prisma.profileProject.deleteMany();
  await prisma.projectSkill.deleteMany();
  await prisma.profileSkill.deleteMany();
  await prisma.work.deleteMany();
  await prisma.project.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.profile.deleteMany();


  const profile = await prisma.profile.create({
    data: {
      name: "Yelishala Jahnavi",
      email: "yelishalajahnavi2020@gmail.com",
      education:
        "B.Tech in Computer Science and Engineering (2023–2027), NIT Delhi",
      summary:
        "Software & AI Developer with strong foundations in backend development, machine learning, and scalable system design.",
      github: "https://github.com/JahnaviYelishala1",
      linkedin: "https://linkedin.com/in/jahnavi-yelishala-3121b9325",
      portfolio: "https://jahnaviyelishala1.github.io/my-portfolio/",
    },
  });


  const skillNames = [
    "Python",
    "C",
    "C++",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Express",
    "FastAPI",
    "Tailwind CSS",
    "SQL",
    "PostgreSQL",
    "Git",
    "Machine Learning",
    "Data Structures and Algorithms",
  ];

  await prisma.skill.createMany({
    data: skillNames.map((name) => ({ name })),
  });

  const allSkills = await prisma.skill.findMany();


  const getSkillId = (name) =>
    allSkills.find((s) => s.name === name)?.id;

  const project1 = await prisma.project.create({
    data: {
      title: "Smart Grid Energy Demand Forecasting",
      description:
        "Developed a Short-Term Load Forecasting system using XGBoost and stacked LSTM models to predict hourly electricity demand.",
      links: JSON.stringify({
        github:
          "https://github.com/JahnaviYelishala1/smart-grid-energy-demand-forecasting",
        report:
          "https://drive.google.com/file/d/16TXNASRwRB1gP9PkGYNCcFjxZQPYuZJO/view",
      }),
    },
  });

  const project2 = await prisma.project.create({
    data: {
      title: "AI Course Generator",
      description:
        "AI-driven platform that generates personalized course content using Gemini API and YouTube Data API.",
      links: JSON.stringify({
        github:
          "https://github.com/JahnaviYelishala1/ai-course-generator",
        demo:
          "https://ai-course-generator-jahnavi-yelisha.vercel.app/",
      }),
    },
  });

  const project3 = await prisma.project.create({
    data: {
      title: "MovieBinge",
      description:
        "Content-based movie recommendation system using vectorization and cosine similarity.",
      links: JSON.stringify({
        github:
          "https://github.com/JahnaviYelishala1/movie-recommendation-system",
        demo:
          "https://movie-recommendation-system-fhehcj84hnnkunuhgktmra.streamlit.app/",
      }),
    },
  });


  await prisma.profileSkill.createMany({
    data: allSkills.map((skill) => ({
      profileId: profile.id,
      skillId: skill.id,
    })),
  });


  await prisma.profileProject.createMany({
    data: [
      { profileId: profile.id, projectId: project1.id },
      { profileId: profile.id, projectId: project2.id },
      { profileId: profile.id, projectId: project3.id },
    ],
  });

 
  await prisma.projectSkill.createMany({
    data: [
      // Smart Grid Forecasting
      { projectId: project1.id, skillId: getSkillId("Python") },
      { projectId: project1.id, skillId: getSkillId("Machine Learning") },
      { projectId: project1.id, skillId: getSkillId("SQL") },

      // AI Course Generator
      { projectId: project2.id, skillId: getSkillId("JavaScript") },
      { projectId: project2.id, skillId: getSkillId("Next.js") },
      { projectId: project2.id, skillId: getSkillId("PostgreSQL") },
      { projectId: project2.id, skillId: getSkillId("Git") },

      // MovieBinge
      { projectId: project3.id, skillId: getSkillId("Python") },
      { projectId: project3.id, skillId: getSkillId("Machine Learning") },
    ],
  });


  const work = await prisma.work.create({
    data: {
      company: "Salesforce – Futureforce Tech Accelerator",
      role: "Tech Accelerator Participant (2025)",
      description:
        "Selected among top 115 students across India. Worked on AI systems, scalable backend design, and cloud fundamentals.",
    },
  });

  await prisma.profileWork.create({
    data: {
      profileId: profile.id,
      workId: work.id,
    },
  });

  console.log(" Database seeded successfully with correct project-skill mapping.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
