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
  console.log("A user connected!");
  S;

  socket.on("join", (room) => {
    console.log("A user joined the room " + room);
    // Join the socket to the specified room
    socket.join(room);
    // Send a welcome message to the socket
    socket.emit("notification", {
      name: "admin",
      content: `Welcome to the room ${room}`,
    });
    // Broadcast a message to the other sockets in the room
    socket.broadcast.to(room).emit("notification", {
      name: "admin",
      content: `A new user has joined the room ${room}`,
    });
  });

  socket.on("chat", (data) => {
    console.log("A user sent a message");
    // Send the message to all the sockets in the room
    io.to(data.chatId).emit("message", {
      authorId: data.author.id,
      content: data.content,
    });
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

httpServer.listen(5000, () => {
  console.log(`Server started on server with port = 5000`);
});
