const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // Habilitar CORS

app.get("/getImages", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.cloudinary.com/v1_1/drbvcuaak/resources/image",
      {
        params: {
          folder: "guest",
          max_results: 10,
        },
        headers: {
          "Authorization": `Basic ${Buffer.from(
            "285915571483646:xhFxxPOHrx9mqNNW3p1K2q3_w0k",
          ).toString("base64")}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error al obtener imágenes:", error);
    res.status(500).send("Error al obtener imágenes");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
