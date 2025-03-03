import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let data="";

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/data", (req, res) => {
  res.send(data);
});

app.post("/webhook", (req, res) => {
    data = JSON.stringify(req.body, null, 2);
    console.log(JSON.stringify(req.body, null, 2));
    res.send("Webhook received!");
});

const PORT=process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
