import config from "../confiq/confiq.js";
import sql from "mssql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  console.log(req.body);
  // const {
  //   username,
  //   email,
  //   password,
  //   fullnames,
  //   coverpic,
  //   profilePic,
  //   city,
  //   website,
  // } = req.body;
  // const hashedpwd = bcrypt.hashSync(password, 10);
  // console.log(hashedpwd);
  // try {
  //   let pool = await sql.connect(config);
  //   let insertUser = await pool
  //     .request()
  //     .input("username", sql.VarChar, username)
  //     .input("email", sql.VarChar, email)
  //     .input("password", sql.VarChar, hashedpwd)
  //     .input("fullnames", sql.VarChar, fullnames)
  //     .input("coverpic", sql.VarChar, coverpic)
  //     .input("profilePic", sql.VarChar, profilePic)
  //     .input("city", sql.VarChar, city)
  //     .input("website", sql.VarChar, website)
  //     .query(
  //       "INSERT INTO users (username,email,password,fullnames,coverpic,profilePic,city,website) VALUES (@username,@email,@password,@fullnames,@coverpic,@profilePic,@city,@website)"
  //     );
  //   console.log(insertUser);
  //   res.status(200).json({
  //     status: "success",
  //     user: insertUser,
  //   });
  // } catch (err) {
  //   res.status(404).json(err);
  // }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  //connection db
  let pool = await sql.connect(config);
  const result = await pool
    .request()
    .input("username", sql.VarChar, username)
    .query("SELECT * FROM users WHERE username = @username");
  const user = result.recordset[0];
  console.log(user);
  if (!user) {
    res.status(404).json({
      status: "error",
      message: "user not found",
    });
  } else {
    if (!bcrypt.compareSync(password, user.password)) {
      res.status(404).json({
        status: "error",
        message: "password does not match",
      });
    } else {
      //create a jwt token store it
      const token = `${jwt.sign({ email: user.email }, process.env.SECRET, {
        expiresIn: process.env.EXPIRY,
      })}`;
      res.cookie("lets talk", token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      res.status(200).json({
        status: "success",
        data: user,
        accesToken: token,
      });
    }
  }
};

export const logOut = async (req, res) => {
  res
    .clearCookie("lets talk", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json({
      message: "user logged out",
    });
};
