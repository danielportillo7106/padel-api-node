// Rutas relacionadas con partidos de pádel
// Permite crear y consultar partidos

const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const archivo = path.join(__dirname, "../data/partidos.json");

// Obtener partidos
router.get("/", (req, res) => {
    const data = JSON.parse(fs.readFileSync(archivo));
    res.json(data);
});

// Crear partido
router.post("/", (req, res) => {
    const partidos = JSON.parse(fs.readFileSync(archivo));

    const nuevoPartido = {
        id: Date.now(),
        equipoA: req.body.equipoA,
        equipoB: req.body.equipoB,
        cancha: req.body.cancha,
        fecha: req.body.fecha
    };

    partidos.push(nuevoPartido);

    fs.writeFileSync(archivo, JSON.stringify(partidos, null, 2));
    res.json(nuevoPartido);
});

module.exports = router;
