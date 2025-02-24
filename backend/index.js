import express, { Router } from "express";
import mongodb from "./config/mongodb.js";
import "dotenv/config";
import courserouter from "./routes/courseroutes.js";
import fileUpload from "express-fileupload";
import cloudinaryfunc from "./config/cloudinary.js";
import userrouter from "./routes/userrouter.js";
import adminrouter from "./routes/adminroute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/orderrouter.js";

const app = express();

// App Config
const PORT = process.env.PORT || 3051;
mongodb();
cloudinaryfunc();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(
  cors()
);
// API End points
app.use("/api/v1", courserouter);
app.use("/api/user", userrouter);
app.use("/api/admin", adminrouter);
app.use("/api/v1/order",router);

app.get("/", (req, res) => {
  res.send("API is Running");
});
app.listen(PORT, () => {
  console.log(`Server is Started at the Port is localhost:${PORT}`);
});
