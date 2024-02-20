import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", async (socket) => {
  socket.on("connect", async () => {});

  socket.on("sendMessage", async (data) => {
    console.log("data", data);

    io.emit("responseEvent", data);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

httpServer.listen(5000, () => {
  console.log(`Server started on server with port = 5000`);
});
