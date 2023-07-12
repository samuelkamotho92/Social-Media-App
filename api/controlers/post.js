import config from "../confiq/confiq.js";
import sql from "mssql";

export const createPost = async (req, res) => {
  console.log(req.body);
  try {
    let { description, image, userId, createdAt } = req.body;
    let pool = await sql.connect(config);
    let createdPost = await pool
      .request()
      .input("description", sql.VarChar, description)
      .input("image", sql.VarChar, image)
      .input("userId", sql.Int, userId)
      .input("createdAt", sql.DateTime, createdAt)
      .query(
        "INSERT INTO posts ( ,image,userId,createdAt) VALUES (@description, @image,@userId,@createdAt)"
      );
    console.log(createPost);
    res.status(200).json({
      data: createdPost,
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

export const getPosts = async (req, res) => {
  try {
    let pool = await sql.connect(config);
    let posts = await pool
      .request()
      .query(
        `SELECT p.*,u.id AS userId,username,profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`
      );
    console.log(posts);
    res.status(200).json(posts.recordset);
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};
//     userId =  COALESCE(@userId,userId)
export const updatePost = async (req, res) => {
  console.log("get data");
  try {
    const { id } = req.params;
    const { description } = req.body;
    console.log(description);
    let pool = await sql.connect(config.sql);
    const data = await pool
      .request()
      .input("id", sql.Int, id)
      .input("description", sql.VarChar, description)
      .query(` UPDATE posts SET description = @description  WHERE id = @id`);
    console.log(data);
    res.status(200).json({ message: "post updated successfully" });
  } catch (err) {
    res.status(404).json(err);
  }
};
