import { MCPServer } from "@modelcontextprotocol/sdk";
import handler from "./dist/index.js"; // compiled TypeScript handler

const port = process.env.PORT || 3000;

async function startServer() {
  const server = new MCPServer({
    port,
    handlers: {
      fetch: handler
    }
  });

  await server.start();
  console.log(`MCP server running at http://localhost:${port}`);
}

startServer().catch(err => {
  console.error(err);
  process.exit(1);
});
