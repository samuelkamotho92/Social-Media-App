const io = require("socket.io")(8080, {
  cors: {
    origin: "http://localhost:5173",
  },
});
let activeUsers = [];
io.on("connection",(socket)=>{
//add new user

socket.on("new-user-add",())
})