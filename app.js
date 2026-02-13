// =====================================
// API de organización de partidos de pádel
// Proyecto en Node.js con Express
// Permite crear jugadores y partidos
// =====================================

const express = require("express");
const app = express();

app.use(express.json());

const jugadoresRoutes = require("./routes/jugadores");
const partidosRoutes = require("./routes/partidos");

app.use("/jugadores", jugadoresRoutes);
app.use("/partidos", partidosRoutes);

app.get("/", (req, res) => {
    res.send("API de Pádel funcionando 🎾");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
