import jwt from "jsonwebtoken";
export const verifyToken = async (req, resp, next) => {
  //get from header
  const autheader = req.headers.token;

  if (autheader) {
    const tk = autheader.split(" ")[1];
    console.log(tk);
    jwt.verify(tk, process.env.SECRET, (err, user) => {
      console.log(user);
      if (err) {
        console.log(err);
        return resp.status(403).json("Token is not valid!");
      } else {
        req.user = user;
        console.log(user, "gotten user");
      }
    });
  } else {
    req.user = undefined;
    return resp.status(403).json("Token is not valid!");
  }
  next();
};

//only admins
export const verifyTokenAdmin = async (req, res) => {
  console.log(req.user.isAdmin);
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({
      message: "not authorised to do that",
    });
  }
};
