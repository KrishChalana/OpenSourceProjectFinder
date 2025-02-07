const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/search", async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).send({ error: "Query parameter is required" });
  }

  try {
    const response = await axios.get(
      "https://api.github.com/search/repositories",
      {
        params: {
          q: `${query} is:public stars:>400 forks:>250`,
          per_page: 50,
        },
        headers: { Accept: "application/vnd.github.v3+json" },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching repositories:", error);
    if (error.response) {
      res
        .status(error.response.status)
        .send({ error: error.response.data.message });
    } else {
      res.status(500).send({ error: "Failed to fetch repositories" });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
