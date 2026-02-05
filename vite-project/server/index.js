import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import customerRoutes from "./routes/customer.routes.js";
import agentRoutes from "./routes/agent.routes.js";


const app = express();
app.use(cors()); // allow requests from frontend
app.use(bodyParser.json()); // parse JSON requests


// --- Test endpoint ---
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.use("/api/customers", customerRoutes);
app.use("/api/agents", agentRoutes);


// --- Start the server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
