// Rutas relacionadas con jugadores
// Permite obtener y crear jugadores

const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const archivo = path.join(__dirname, "../data/jugadores.json");

// Obtener jugadores
router.get("/", (req, res) => {
    const data = JSON.parse(fs.readFileSync(archivo));
    res.json(data);
});

// Crear jugador
router.post("/", (req, res) => {
    const jugadores = JSON.parse(fs.readFileSync(archivo));

    const nuevoJugador = {
        id: Date.now(),
        nombre: req.body.nombre
    };

    jugadores.push(nuevoJugador);

    fs.writeFileSync(archivo, JSON.stringify(jugadores, null, 2));
    res.json(nuevoJugador);
});

module.exports = router;
