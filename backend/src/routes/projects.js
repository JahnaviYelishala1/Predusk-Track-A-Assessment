const router = require("express").Router();
const prisma = require("../prisma");

/**
 * GET /projects
 * GET /projects?skill=Python
 */
router.get("/", async (req, res) => {
  const { skill } = req.query;

  // ✅ Return all projects
  if (!skill) {
    const projects = await prisma.project.findMany({
      include: {
        skills: {
          include: {
            skill: true,
          },
        },
      },
    });
    return res.json(projects);
  }

  // ✅ REAL skill-based filtering
  const projects = await prisma.project.findMany({
    where: {
      skills: {
        some: {
          skill: {
            name: {
              equals: skill
            },
          },
        },
      },
    },
    include: {
      skills: {
        include: {
          skill: true,
        },
      },
    },
  });

  res.json(projects);
});

module.exports = router;
