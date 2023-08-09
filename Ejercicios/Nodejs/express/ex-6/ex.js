const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/pokemon", async (req, res) => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
    );
    res.json(response.data);
  } catch (e) {
    console.log("El error es:", e);
    res.status(500).json({ error: "Hubo un error en la solicitud a la API" });
  }
});

app.listen(port, () => {
  console.log(`Se esta escuchando el servidor http://localhost:${port}`);
});
