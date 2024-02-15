import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    withCredentials: true,
  },
});

io.on("connection", async (socket) => {
  console.log(socket.id);
});

httpServer.listen(5000, () => {
  console.log(`Server started on server with port = 5000`);
});
