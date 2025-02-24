import coursemodel from "../models/coursemodel.js";
import { v2 as cloudinary } from "cloudinary";
import Purchasemodel from "../models/Purchase.js";

const createcourse = async (req, res) => {
  const { adminId } = req;
  const { title, description, price } = req.body;
  console.log(title, description, price)
  try {
    if (!title || !description || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const { image } = req.files;
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: "No File Uploaded!" });
    }
    const allowedformat = ["image/png", "image/jpeg"];
    if (!allowedformat.includes(image.mimetype)) {
      return res
        .status(400)
        .json({ error: "Only png and jpg files are allowed!" });
    }

    // cloudinary code
    const cloud_response = await cloudinary.uploader.upload(image.tempFilePath);

    // console.log(image);
    // console.log(cloud_response);
    if (!cloud_response || cloud_response.error) {
      return res
        .status(400)
        .json({ error: "Error while Uploading to cloudinary!" });
    }

    const courseData = {
      title,
      description,
      price,
      image: {
        public_id: cloud_response.public_id,
        url: cloud_response.url,
      },
      creatorId: adminId,
    };
    const course = await coursemodel.create(courseData);
    // coonsole.log(course);
    res.json({ message: "Course created Sucessfully", course });
  } catch (e) {
    return res.status(500).json({ error: "Error in addding a course" });
  }
};

const updatecourse = async (req, res) => {
  const { courseId } = req.params;
  const { adminId } = req;
  const { title, description, price } = req.body;
  try {
    const coursefound = await coursemodel.findById(courseId);
    const image = coursefound;
    // const { image } = req.files;
    // console.log(image)
    if (!coursefound) {
      return res.status(400).json({ error: "Course is not Found!" });
    }
    const course = await coursemodel.findOneAndUpdate(
      {
        _id: courseId,
        creatorId: adminId,
      },
      {
        title,
        description,
        price,
        image: {
          public_id: image?.public_id,
          url: image?.url,
        },
      }
    );
    if(!course){
      return res.status(201).json({error:"Can't update created by other admin!"});
    }
    console.log(image?.url);
    return res.status(201).json({ message: "Updated Sucessfully!", course });
  } catch (e) {
    return res.status(500).json({ error: "Error in course Updating" });
  }
};

const coursedelete = async (req, res) => {
  const { courseId } = req.params;
  const { adminId } = req;
  try {
    const course = await coursemodel.findOneAndDelete({
      _id: courseId,
      creatorId: adminId,
    });
    if (!course) {
      return res.status(400).json({ error: "Course not found created by other admin!" });
    }
    return res.status(200).json({ message: "Course Sucessfully Deleted.." });
  } catch (e) {
    return res.status(500).json({ error: "Error in course Deleting.." });
  }
};

const getcourse = async (req, res) => {
  try {
    const course = await coursemodel.find({});
    if (!course) {
      return res.status(400).json({ error: "Courses is Not available!" });
    }
    res.status(200).json({ message: "Your Courses are listed..", course });
  } catch (e) {
    return res.status(500).json({ error: "Error in List of Corse.." });
  }
};

const getsinglecourse = async (req, res) => {
  const { courseId } = req.params;
  try {
    const course = await coursemodel.findById(courseId);
    if (!course) {
      return res.status(400).json({ error: "Course is not found" });
    }
    return res.status(200).json({ message: "Your Course is..", course });
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Error in Getting a Single Course!", e });
  }
};

import Stripe from "stripe";
import config from "../config.js";
const stripe = new Stripe(config.STRIPE_SECCRET);
console.log(config.STRIPE_SECCRET);
const buycourse = async (req, res) => {
  const { userId } = req;
  const { courseId } = req.params;
  try {
    const course = await coursemodel.findById(courseId);
    if (!course) {
      return res.status(401).json({ error: "Course not found" });
    }
    const existingpurchase = await Purchasemodel.findOne({ userId, courseId });
    if (existingpurchase) {
      return res.status(400).json({ error: "Course already purshased.." });
    }

    // Stripe Payment Gateway
    const amount = course.price;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      payment_method_types: ["card"],
    });

    const newpurchase = Purchasemodel({ userId, courseId });
    await newpurchase.save();
    return res.status(200).json({
      message: "Course purshased Successfully..",
      course,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(500).json({ error: "Error in Course Buying" });
  }
};

export {
  createcourse,
  updatecourse,
  coursedelete,
  getcourse,
  getsinglecourse,
  buycourse,
};
