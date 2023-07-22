import config from "../confiq/confiq.js";
import sql from "mssql";
import jwt from "jsonwebtoken";
import moment from "moment";

let token;
export const createPost = async (req, res) => {
  // console.log(req.body);
  // console.log(token);
  const createdAt = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
  console.log(createdAt);
  try {
    let { description, image, userId } = req.body;
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
      status: "success",
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

export const deletePost = async (req, res) => {
  //pass token  check if token does match the user then delete
  token = req.body.token;
  const id = req.params.id;
  jwt.verify(token, "letstalk2023", async (err, decode) => {
    if (err) {
      res.status(403).json({
        status: "unauthorized",
      });
    } else {
      console.log(decode.id, "decode token");
      let pool = await sql.connect(config);
      let posts = await pool
        .request()
        .query(`DELETE FROM posts WHERE id = ${id} AND userId=${decode.id}`);
      res.status(204),
        json({
          status: "success",
          message: "successfully deleted",
          posts,
        });
    }
  });
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
    comment: updatedPosts,
  });
};

//UPDATE posts SET description = @description WHERE id = @id

// JOIN relationships AS r ON (p.userId=r.followedeuserId AND r.followeruserId=?)
