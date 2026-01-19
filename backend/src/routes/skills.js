const router = require("express").Router();
const prisma = require("../prisma");

/**
 * GET /skills/top
 */
router.get("/top", async (req, res) => {
  const skills = await prisma.skill.findMany();
  res.json(skills);
});

module.exports = router;
