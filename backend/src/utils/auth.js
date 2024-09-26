import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const generateHashPassword = async (password) => {
  return bcrypt.hash(password, Number(process.env.SALTROUND));
};

export const compareHashPassword = async (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword);
};

export const generateJwt = (body) => {
  const token = jwt.sign(body, process.env.JWT_SECRET);
  return token;
};
