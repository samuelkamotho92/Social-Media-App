import config from "../confiq/confiq.js";
import sql from "mssql";
import moment from "moment";
export const createMessage = async (req, res) => {
  try {
    const { chatId, senderId, content, createdAt } = req.body;
    console.log(chatId, senderId, content, createdAt);
    let pool = await sql.connect(config);
    let message = await pool
      .request()
      .input("content", sql.VarChar, content)
      .input("chatId", sql.Int, chatId)
      .input("senderId", sql.Int, senderId)
      .input("createdAt", sql.DateTime, createdAt)
      .query(
        "INSERT INTO message(content,chatId,senderId,createdAt) VALUES (@content,@chatId,@senderId,@createdAt)"
      );
    console.log(message);
    res.status(200).json({
      status: "success",
      data: message,
    });
  } catch (err) {
    res.status(404).json({
      status: "failure",
      err,
    });
  }
};
export const getMessage = async (req, res) => {
  try {
    const id = req.params.chatId;
    let pool = await sql.connect(config);
    let message = await pool
      .request()
      .query(`SELECT * FROM message WHERE chatId=${id}`);
    res.status(200).json(message.recordsets[0]);
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};
