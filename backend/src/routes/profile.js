const router = require("express").Router();
const prisma = require("../prisma");

// Create profile
router.post("/", async (req, res) => {
  try {
    const profile = await prisma.profile.create({
      data: req.body,
    });
    res.json(profile);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Get profile
router.get("/", async (req, res) => {
  const profile = await prisma.profile.findFirst({
    include: {
      skills: { include: { skill: true } },
      projects: { include: { project: true } },
      work: { include: { work: true } },
    },
  });
  res.json(profile);
});

// Update profile
router.put("/", async (req, res) => {
  const { id, ...data } = req.body;
  const updated = await prisma.profile.update({
    where: { id },
    data,
  });
  res.json(updated);
});

module.exports = router;
