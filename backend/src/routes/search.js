const router = require("express").Router();
const prisma = require("../prisma");

/**
 * GET /search?q=keyword
 */
router.get("/", async (req, res) => {
  const q = req.query.q;

  // Safety check
  if (!q || q.trim() === "") {
    return res.json([]);
  }

  const projects = await prisma.project.findMany({
    where: {
      OR: [
        {
          title: {
            contains: q,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: q,
            mode: "insensitive",
          },
        },
        {
          skills: {
            some: {
              skill: {
                name: {
                  contains: q,
                  mode: "insensitive",
                },
              },
            },
          },
        },
      ],
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
