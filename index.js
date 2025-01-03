const express = require("express");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");

const app = express();
app.use(cors()); // Habilitar CORS

// Configurar Cloudinary
cloudinary.config({
  cloud_name: "dcguf9eiv",
  api_key: "699241462972445",
  api_secret: "058v8FqV3cpv_JdbR2Kawx6isNM",
});

app.get("/getImages", async (req, res) => {
  try {
    const resources = await cloudinary.api.resources({
      type: "upload",
      prefix: "guest", // Carpeta en Cloudinary
      max_results: 10,
    });
    res.json(resources);
  } catch (error) {
    console.error("Error al obtener imágenes:", error);
    res.status(500).send("Error al obtener imágenes");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
