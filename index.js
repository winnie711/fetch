export default async function handler(req, res) {
  try {
    // Example MCP fetch handler logic
    const data = { message: "MCP server running" };

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
