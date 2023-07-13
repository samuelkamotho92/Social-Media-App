import config from "../confiq/confiq.js";
import sql from "mssql";
import jwt from "jsonwebtoken";
import moment from "moment";
let token;
export const createPost = async (req, res) => {
  // console.log(req.body);
  console.log(token);
  try {
    let { description, image, userId, createdAt } = req.body;
    let pool = await sql.connect(config);
    let createdPost = await pool
      .request()
      .input("description", sql.VarChar, description)
      .input("image", sql.NVarChar, image)
      .input("userId", sql.Int, userId)
      .input("createdAt", sql.DateTime, createdAt)
      .query(
        "INSERT INTO posts (description,image,userId,createdAt) VALUES (@description, @image,@userId,@createdAt)"
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
    token = req.body.accesToken;
    jwt.verify(token, "letstalk2023", async (err, decode) => {
      if (err) {
        res.status(403).json({
          status: "Not logged in",
        });
      } else {
        console.log(decode.id, "decode token");
        let pool = await sql.connect(config);
        let posts = await pool.request().query(
          `SELECT p.*,u.id AS userId,username,profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
         LEFT JOIN relationships AS r ON (p.userId = r.followeduserId) WHERE r.followeruserId=${decode.id} OR p.userId=${decode.id} ORDER BY p.createdAt DESC
          `
        );
        console.log(posts);
        res.status(200).json(posts.recordset);
      }
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

//check localstorage or cookie

//     userId =  COALESCE(@userId,userId)
// export const updatePost = async (req, res) => {
//   console.log("get data");
//   const id = req.params.id;
//   try {
//     const pool = await sql.connect(config);
//     let post = await pool
//       .request()
//       .input("id", sql.Int, id)
//       .query("SELECT * FROM posts WHERE id = @id");
//     res.status(200).json({
//       status: "success",
//       posts: post.recordset[0],
//     });
//   } catch (error) {
//     res.status(404).json({ error });
//   }
// };
export const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    await sql.connect(config);
    await sql.query(`DELETE FROM posts WHERE id = ${id}`);
    res.status(200).json({
      status: "success",
      message: "Posts deleted successfully",
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

export const updatePosts = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);
  const { description, image, userId, createdAt } = req.body;
  let pool = await sql.connect(config);
  let updatedPosts = await pool
    .request()
    .input("id", sql.Int, id)
    .input("description", sql.VarChar, description)
    .input("image", sql.NVarChar, image)
    .input("userId", sql.Int, userId)
    .input("createdAt", sql.VarChar, createdAt).query(`UPDATE posts
 SET description = COALESCE(@description, description),
 image = COALESCE(@image, image),
 userId = COALESCE(@userId, userId),
 createdAt = COALESCE(@createdAt, createdAt)
 WHERE id = @id
 `);
  console.log(updatedPosts);
  res.status(200).json({
    status: "success",
    auction: updatedPosts,
  });
};

//UPDATE posts SET description = @description WHERE id = @id

// JOIN relationships AS r ON (p.userId=r.followedeuserId AND r.followeruserId=?)
