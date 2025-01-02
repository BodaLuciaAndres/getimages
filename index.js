const express = require("express");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");

const app = express();
app.use(cors()); // Habilitar CORS

// Configurar Cloudinary
cloudinary.config({
  cloud_name: "drbvcuaak",
  api_key: "285915571483646",
  api_secret: "xhFxxPOHrx9mqNNW3p1K2q3_w0k",
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
