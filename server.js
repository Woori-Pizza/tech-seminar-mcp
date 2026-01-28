import express from "express";
import cors from "cors"

const app = express();
app.use(cors());

app.get("/api/user", (req, res) => {
  // 프론트는 userName을 기대하지만
  // 서버는 username을 내려줌 (의도적 불일치)
  res.json({
    username: "Jammin",
    age: 25
  });
});

app.listen(4000, () => {
  console.log("Mock API server running on http://localhost:4000");
});
