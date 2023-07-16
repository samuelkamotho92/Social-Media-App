import config from "../confiq/confiq.js";
import sql from "mssql";
export const createRelationship = async (req, res) => {
  console.log(req.body);
  try {
    let { followeruserId, followeduserId } = req.body;
    let pool = await sql.connect(config);
    let createdRelationship = await pool
      .request()
      .input("followeruserId", sql.Int, followeruserId)
      .input("followeduserId", sql.Int, followeduserId)
      .query(
        "INSERT INTO relationships (followeruserId,followeduserId) VALUES (@followeruserId, @followeduserId)"
      );
    console.log(createdRelationship);
    res.status(200).json({
      data: createdRelationship,
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

export const getrelationships = async (req, res) => {
  try {
    const followeduserId = req.params.id;
    let pool = await sql.connect(config);
    let followers = await pool
      .request()
      .query(
        `SELECT followeruserId FROM relationships WHERE followeduserId=${followeduserId}`
      );
    console.log(followers);
    res
      .status(200)
      .json(
        followers.recordset.map((relationship) => relationship.followeruserId)
      );
  } catch (err) {
    res.status(404).json(err);
  }
};
