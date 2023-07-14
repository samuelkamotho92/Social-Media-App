import config from "../confiq/confiq.js";
import sql from "mssql";
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

export const updateUser = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);
  const {
    username,
    email,
    password,
    fullnames,
    coverpic,
    profilePic,
    city,
    website,
  } = req.body;
  let pool = await sql.connect(config);
  let updatedUser = await pool
    .request()
    .input("id", sql.Int, id)
    .input("username", sql.VarChar, username)
    .input("email", sql.VarChar, email)
    .input("password", sql.VarChar, password)
    .input("fullnames", sql.VarChar, fullnames)
    .input("coverpic", sql.VarChar, coverpic)
    .input("profilePic", sql.VarChar, profilePic)
    .input("city", sql.VarChar, city)
    .input("website", sql.VarChar, website).query(`UPDATE users
 SET username = COALESCE(@username, username),
 email = COALESCE(@email, email),
 password = COALESCE(@password, password),
 fullnames = COALESCE(@fullnames, fullnames),
 coverpic = COALESCE(@coverpic, coverpic),
 profilePic = COALESCE(@profilePic, profilePic),
 city = COALESCE(@city, city),
 website = COALESCE(@website, website)
 WHERE id = @id
 `);
  console.log(updatedUser);
  res.status(200).json({
    status: "success",
    user: updatedUser,
  });
};
