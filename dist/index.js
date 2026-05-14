import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes.js";
import { startTcpServer } from "./tcpServer.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use("/api", router);
const HTTP_PORT = Number(process.env.HTTP_PORT || 3000);
const TCP_PORT = Number(process.env.TCP_PORT || 5000);
app.listen(HTTP_PORT, "0.0.0.0", () => {
    console.log(`API HTTP escuchando en puerto ${HTTP_PORT}`);
});
startTcpServer(TCP_PORT);
//# sourceMappingURL=index.js.map