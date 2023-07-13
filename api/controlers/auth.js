import config from "../confiq/confiq.js";
import sql from "mssql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
export const register = async (req, res) => {
  console.log(req.body);
  const { username, email, password, fullnames } = req.body;
  const hashedpwd = bcrypt.hashSync(password, 10);
  console.log(hashedpwd);
  try {
    let pool = await sql.connect(config);
    let insertUser = await pool
      .request()
      .input("username", sql.VarChar, username)
      .input("email", sql.VarChar, email)
      .input("password", sql.VarChar, hashedpwd)
      .input("fullnames", sql.VarChar, fullnames)
      .query(
        "INSERT INTO users (username,email,password,fullnames) VALUES (@username,@email,@password,@fullnames)"
      );
    console.log(insertUser);
    res.status(200).json({
      status: "success",
      user: insertUser,
    });
  } catch (err) {
    res.status(404).json(err);
  }
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
      const token = `${jwt.sign(
        { email: user.email, id: user.id },
        process.env.SECRET,
        {
          expiresIn: process.env.EXPIRY,
        }
      )}`;
      // res.cookie("token", token, {
      //   maxAge: 30 * 24 * 60 * 60 * 1000,
      // });
      res.cookie(`Cookie token name`, `encrypted cookie string Value`);

      // console.log(res.cookies, "get user");
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
    .clearCookie("token", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json({
      message: "user logged out",
    });
};
