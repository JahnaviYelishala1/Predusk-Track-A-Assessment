const express = require("express");
const cors = require("cors");
require("../prisma/seed");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/health", require("./routes/health"));
app.use("/profile", require("./routes/profile"));
app.use("/projects", require("./routes/projects"));
app.use("/skills", require("./routes/skills"));
app.use("/search", require("./routes/search"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
