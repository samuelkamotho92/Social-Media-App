import config from "../confiq/confiq.js";
import sql from "mssql";
import moment from "moment";
import bcrypt from "bcrypt";
export const accessChat = async (req, res) => {
  //get user id

  const id = req.body.id;
  console.log(id);
  //check chat has the id==userId  and isGroupchat=false
  //get user info except password
  //get lates message
  console.log("get access to chat");
};
export const getChats = async (req, res) => {
  try {
    const id = req.params.userId;
    let pool = await sql.connect(config);
    let posts = await pool
      .request()
      .query(`SELECT * FROM chat WHERE userId=${id} OR members LIKE '%${id}%'`);
    console.log(posts);
    res.status(200).json({
      status: "success",
      data: posts.recordsets[0],
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

export const createChat = async (req, res) => {
  try {
    const createdAt = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    //create chat
    const { senderId, receiverId, userId } = req.body;
    let pool = await sql.connect(config);
    let createdChat = await pool
      .request()
      .input("userId", sql.Int, userId)
      .input("members", sql.NVarChar, `[${senderId},${receiverId}]`)
      .input("createdAt", sql.DateTime, createdAt)
      .query(
        "INSERT INTO chat(members,userId,createdAt)VALUES(@members,@userId,@createdAt)"
      );
    console.log(createdChat);
    res.status(200).json({
      status: "success",
      data: createdChat,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      err,
    });
  }
};
export const findChat = async (req, res) => {
  try {
    const firstId = req.params.firstId;
    const secondId = req.params.secondId;
    let pool = await sql.connect(config);
    let post = await pool
      .request()
      .input("members", sql.NVarChar, `[${firstId},${secondId}]`)
      .query(`SELECT * FROM chat WHERE members=@members`);
    console.log(post);
    res.status(200).json({
      status: "success",
      data: post.recordsets,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};

export const createGroup = async (req, res) => {
  console.log("create group");
};
export const updateGroup = async (req, res) => {
  console.log("update group");
};
export const removeFromGroup = async (req, res) => {
  console.log("update group");
};
export const addToGroup = async (req, res) => {
  console.log("update group");
};
