import jwt from "jsonwebtoken";

const generateToken = (res, id, logger) => {
  const token = jwt.sign({ id }, process.env.JWT_SEcret);

  res.cookie(logger === "user" ? "user" : "admin", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
    maxAge: 2 * 60 * 60 * 1000,
  });
};

export default generateToken;
