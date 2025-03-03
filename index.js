import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/webhook", (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    res.send("Webhook received!");
});

const PORT=process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
