import config from "../confiq/confiq.js";
import mssql from "mssql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const getAllUsers = async (req, res) => {
  try {
    let pool = await sql.connect(config);
    let users = await pool.request().query("SELECT * FROM users");
    res.status(200).json({
      status: "success",
      data: users.recordsets,
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

export const getOneUser = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    let pool = await sql.connect(config);
    let userOne = await pool
      .request()
      .input("id", sql.Int, id)
      .query("SELECT * from users WHERE id = @id");
    console.log(userOne.recordset[0]);
    !userOne.recordset[0]
      ? res.status(404).json({ message: "user not found" })
      : res.status(200).json({
          status: "success",
          user: userOne.recordset[0],
        });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
