import config from "../confiq/confiq.js";
import sql from "mssql";
import moment from "moment";
export const createLikes = async (req, res) => {
  try {
    let { likesuserId, likespostId } = req.body;
    let pool = await sql.connect(config);
    let createdLikes = await pool
      .request()
      .input("likesuserId", sql.Int, likesuserId)
      .input("likespostId", sql.Int, likespostId)
      .query(
        "INSERT INTO likes (likesuserId,likespostId) VALUES (@likesuserId, @likespostId)"
      );
    console.log(createdLikes);
    res.status(200).json({
      status: "success",
      data: createdLikes,
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

export const getLikes = async (req, res) => {
  try {
    const postId = req.params.id;
    let pool = await sql.connect(config);
    let likes = await pool
      .request()
      .query(`SELECT likesuserId FROM likes WHERE likespostId=${postId}`);
    console.log(likes);
    res.status(200).json(likes.recordset);
  } catch (err) {
    res.status(404).json(err);
  }
};
