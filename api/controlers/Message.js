import config from "../confiq/confiq.js";
import sql from "mssql";
export const createMessage = async (req, res) => {
  try {
    const { chatId, senderId, content } = req.body;
    let pool = await sql.connect(config);
    let message = await pool
      .request()
      .input("content", sql.VarChar, content)
      .input("chatId", sql.Int, chatId)
      .input("senderId", sql.Int, senderId)
      .query(
        "INSERT INTO message(content,chatId,senderId) VALUES (@content,@chatId,@senderId)"
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
    res.status(200).json({
      status: "success",
      data: message.recordsets,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};
