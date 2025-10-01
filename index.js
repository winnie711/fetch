import fetchHandler from "./src/index.js"; // Adjust path if needed

export default async function handler(req, res) {
  try {
    const result = await fetchHandler(req);
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
