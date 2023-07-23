const io = require("socket.io")(8080, {
  cors: {
    origin: "http://localhost:5173",
  },
});
let activeUsers = [];

io.on("connection", (socket) => {
  //get data from client
  //add new user if he does not exist in connection
  socket.on("new-user-add", (newUserId) => {
    if (!activeUsers.some((user) => user.userId === newUserId)) {
      activeUsers.push({
        userId: newUserId,
        socketId: socket.id,
      });
    }
    console.log("active users", activeUsers);
    //send to client
    io.emit("get-users", activeUsers);
  });
  //disconnect
  socket.on("disconnect", () => {
    activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
    console.log("disconnected", activeUsers);
    //send back active users
    io.emit("get-users", activeUsers);
  });
});
