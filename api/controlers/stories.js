import config from "../confiq/confiq.js";
import sql from "mssql";

export const createStory = async (req, res) => {
  try {
    let { storyuserId, image } = req.body;
    let pool = await sql.connect(config);
    let createdStory = await pool
      .request()
      .input("image", sql.VarChar, image)
      .input("storyuserId", sql.Int, storyuserId)
      .query(
        "INSERT INTO stories (image,storyuserId) VALUES (@image,@storyuserId)"
      );
    console.log(createdStory);
    res.status(200).json({
      status: "success",
      data: createdStory,
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

export const getStory = async (req, res) => {
  try {
    let pool = await sql.connect(config);
    let stories = await pool.request().query(`SELECT * FROM stories`);
    console.log(stories);
    res.status(200).json(stories.recordset);
  } catch (err) {
    res.status(404).json(err);
  }
};
