const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const cron = require("node-cron");
const bodyParser = require("body-parser");

// Utility Functions
const sendEmail = require("./utils/sendEmail");
const connectDB = require("./utils/connect");

// Create Server + DB
const app = express();
connectDB();

// Configure View Engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

// Middleware
app.use(expressLayouts);
app.use(bodyParser.json());

// Setup Static Folder
app.use("/public", express.static(path.join(__dirname, "public")));

// CRON Job
cron.schedule("* * * * *", () => {
  sendEmail();
});

// Routing
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const { name, student_id, signature } = req.body;

  res.end();
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
