import { MCPServer } from "@modelcontextprotocol/typescript-sdk";
import fetchHandler from "./src/index.js"; 

new MCPServer(fetchHandler).start();

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
