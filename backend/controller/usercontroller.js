import usermodel from "../models/usermodel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import { z } from "zod";
import jwt from "jsonwebtoken";
import config from "../config.js";
import Purchasemodel from "../models/Purchase.js";
import coursemodel from "../models/coursemodel.js";

const signup = async (req, res) => {

  const { email, password } = req.body;
  // console.log(email, password);
  const userSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 8 char long" }),
  });

  const validateData = userSchema.safeParse(req.body);

  if (!validateData.success) {
    return res
      .status(400)
      .json({ error: validateData.error.issues.map((err) => err.message) });
  }

  const hashsalt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, hashsalt);
  try {
    const Exists = await usermodel.findOne({ email });

    if (Exists) {
      return res.status(400).json({ error: "Email already Exists!" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    if (password.length < 8) {
      return res.status(400).json({
        error: "Please Enter a Strong Password!",
      });
    }

    const userData = {
      email,
      password: hashedPassword,
    };
    if (!email || !password) {
      return res.status(400).json({ error: "All fields required!" });
    }
    const user = await usermodel.create(userData);
    return res.status(200).json({ user });
  } catch (e) {
    return res.status(500).json({ error: "Errors in Signup" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Email Does'nt Exists!" });
    }
    const matchpass = await bcrypt.compare(password, user.password);
    if (matchpass) {
      return res.status(400).json({ error: "Invalid Credentials!" });
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      config.JWT_USERPASSWORD,
      { expiresIn: "1d" }
    );
    const cookieOption = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), //1 day
      httpOnly: true, //CAN'T BE ACCESS VIA JS DIRECTLY
      secure: process.env.NODE_ENV === "production", //true for https only
      sameSite: "Strict", //CFRF ATTACK
    };
    res.cookie("jwt", token, cookieOption);
    return res
      .status(200)
      .json({ success: true, message: "Login Sucessfully..", user, token });
  } catch (e) {
    return res.status(500).json({ error: "Error in user login", e });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    return res
      .status(200)
      .json({ success: true, message: "Logout Successfull!" });
  } catch (e) {
    return res.status(500).json({ success: false, error: "Errors in Logout!" });
  }
};

const purchases = async (req, res) => {
  const { userId } = req;
  try {
    const purchased = await Purchasemodel.find({ userId });
    let purchasesecourseid = [];
    for (let i = 0; i < purchased.length; i++) {
      purchasesecourseid.push(purchased[i].courseId);
    }
    const courseData = await coursemodel.find({
      _id: { $in: purchasesecourseid },
    });

    res.status(200).json({ purchased, courseData });
  } catch (e) {
    return res.status(500).json({ error: "Error in purchase!" });
  }
};

export { signup, login, logout, purchases };
