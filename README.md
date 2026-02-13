# API de Organización de Partidos de Pádel 🎾

Proyecto creado con Node.js y Express que permite gestionar jugadores y partidos de pádel.

## Funcionalidades
- Crear jugadores
- Ver jugadores
- Crear partidos
- Ver partidos
- Guardado en archivos JSON

## Instalación
1. Clonar repositorio
2. Instalar dependencias:
   npm install
3. Ejecutar servidor:
   npm run dev

## Endpoints

GET /jugadores  
POST /jugadores  

GET /partidos  
POST /partidos  

## Ejemplo POST /partidos
{
  "equipoA": ["Carlos", "Luis"],
  "equipoB": ["Ana", "Sofia"],
  "cancha": 2,
  "fecha": "2026-02-10"
}
