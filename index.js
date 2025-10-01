import { MCPServer } from "@modelcontextprotocol/typescript-sdk";
import fetchHandler from "./src/index.js"; // Adjust if your handler path is different

const port = process.env.PORT || 3000;

async function startServer() {
  const server = new MCPServer({
    port,
    handlers: {
      fetch: fetchHandler
    }
  });

  await server.start();
  console.log(`MCP server running at http://localhost:${port}`);
}

startServer().catch(err => {
  console.error("Server failed to start:", err);
  process.exit(1);
});
