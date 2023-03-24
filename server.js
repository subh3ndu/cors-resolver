import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 5432;

app.use(cors());
const corsOptions = {
  origin: "http://localhost:5173", // your frontend fetching port
};

// const requestURL = "YOUR_URL";
const requestURL = "https://api.frontendexpert.io/api/fe/wordle-words";

app.get("/api", cors(corsOptions), (req, res) => {
  fetch(requestURL, { method: "GET" })
    .then((response) => response.json())
    .then((data) => res.json(data));
});

app.listen(PORT, () => {
  console.log(`Cors-Resolver is running on port: http://localhost:${PORT}`);
});
