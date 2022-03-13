const express = require("express");
const app = express();
require("./src/db/conn");
const port = process.env.PORT || 8000;
const hbs = require("hbs");
const Register = require("./src/models/register");
const fridge_items = require("./src/models/fridge_items");
const auth = require("./src/middleware/auth");
const nodemailer = require("nodemailer");
const path = require("path");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const static_path = path.join(__dirname, "/public");
const template_path = path.join(__dirname, "/templates/views");
const partials_path = path.join(__dirname, "/templates/partials");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const formData = require("form-data");
const fs = require("fs");
const https = require("https");
const mailer = "newbiesthealgorithmic@gmail.com";
var item_ai;
// const scanner=require "receipt-scanner";
const multer = require("multer");
const storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
    console.log("ll");
  },
});
const upload = multer({
  storage: storage1,
});
// const upload = multer({ dest: "./public/data/uploads/" });
const { Mongoose } = require("mongoose");
const { render } = require("express/lib/response");
const { json } = require("body-parser");
var email1;
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
// app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/home", auth, async (req, res) => {
  // console.log(req.cookies.jwt);
  const token = req.cookies.jwt;
  // console.log(req.cookies.jwt);
  // console.log(token);
  const verifyUser = jwt.verify(token, "mmmmmmmmmmmmmmmmmmmmmmm");
  // console.log(verifyUser);
  var id = await Register.findOne({ _id: verifyUser._id });

  // var id = await Register.findOne({ email: email });
  // console.log(id.items[0][1].item_name);
  var len = id.items[0];
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var date = d.getDate();
  if (month > 0 && month <= 9) {
    month = `0${month}`;
  }
  if (date >= 0 && month <= 9) {
    date = `0${date}`;
  }
  console.log(month, "jj");
  console.log(month, "jj");
  var dateString2 = `${date}-${month}-${year}`;
  dateString2 = dateString2.split("-").reverse().join("-");
  var t = new Date();

  t.setDate(t.getDate() + 5);
  var tDate = t.getDate();
  var tMonth = t.getMonth() + 1;
  if (tDate >= 0 && tDate <= 9) {
    tDate = `0${t.getDate}`;
  }
  console.log(tDate, "tDate");

  if (tMonth > 0 && tMonth <= 9) {
    tMonth = `0${tMonth}`;
  }
  console.log(tMonth, "tMonth");
  var expiry_date = `${tDate}-${tMonth}-${t.getFullYear()}`;
  expiry_date = expiry_date.split("-").reverse().join("-");
  console.log(dateString2);
  console.log(expiry_date);
  var arr = [];
  // console.log(len.length);
  function isLater(dateString1, dateString2) {
    if (dateString1 > dateString2 && dateString1 < expiry_date) {
      return true;
    } else {
      return false;
    }
    // return dateString1 > dateString2;
  }
  for (var i = 0; i < len.length; i++) {
    var dateString1 = id.items[0][i].item_expiry_date;
    dateString1 = dateString1.split("-").reverse().join("-");
    console.log(dateString1);

    var a = isLater(dateString1, "2022-01-16");
    if (a == true) {
      arr.push(id.items[0][i]);
    }

    console.log(a);
  }
  console.log(arr.length);
  console.log("jj");
  if (arr.length > 0) {
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: mailer,
        pass: "Thealgo@212",
      },
    });

    let mailDetails = {
      from: mailer,
      to: `${id.email}`,

      subject: "Items in your fridge are about to get expired",
      // text: `The following items in your fridge are about to get expired
      // ${arr}`,
      text: `Your food ingredient is about to expire!
      Regards, My Fridge.`,
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log("Error Occurs " + err);
      } else {
        console.log("Email sent successfully");
      }
    });
  }

  res.render("home");
});
app.get("/about_us", (req, res) => {
  res.render("about_us");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/login", (req, res) => {
  console.log(req.cookies.jwt);
  res.render("login");
});
app.get("/add_items", (req, res) => {
  res.render("add_items");
});

app.post("/register", async (req, res) => {
  try {
    // res.send(req.body.email);
    // console.log(req.body.email);
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;
    if (password == cpassword) {
      //   console.log("hi");
      //   const securepassword = async (password) => {
      //     var passwordHash = await bcrypt.hash(password, 10);
      //     console.log(passwordHash);
      //     return String(passwordHash);
      //   };
      email1 = req.body.email;
      const registerEmployee = new Register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        phone: req.body.phone,
        age: req.body.age,
        email: req.body.email,
        // password: securepassword(password),
        password: password,
        confirmpassword: cpassword,
      });
      const token = await registerEmployee.generateAuthToken();
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 50000),
        httpOnly: true,
      });
      const registered = await registerEmployee.save();
      res.status(201).render("home");
    } else {
      res.send("password not matching");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get("/secrets", auth, (req, res) => {
  res.render("secrets");
});
app.get("/logout", auth, async (req, res) => {
  try {
    //for deleting from all devices
    // req.user.tokens = [];

    res.clearCookie("jwt");

    console.log("loged out");
    await req.user.save();
    res.render("login");
  } catch (err) {
    console.log("log", err);
    res.status(500).send(err);
  }
});
app.post("/login", async (req, res) => {
  try {
    email1 = req.body.email;
    const email = req.body.uname;
    const password = req.body.psw;
    const useremail = await Register.findOne({ email: email });

    console.log(useremail, useremail.password);
    const isMatch = await bcrypt.compare(password, useremail.password);
    const id = useremail._id;

    const token = await useremail.generateAuthToken();
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 50000),
      httpOnly: true,
    });
    if (isMatch) {
      res.status(201).redirect("home");
    } else {
      res.send("password not matching");
    }
    console.log(`${email} and ${password} and ${useremail._id}`);
  } catch (erroe) {
    res.status(400).send("invalid Email");
  }
});
app.get("/edit_items", auth, async (req, res) => {
  // const email = "abhishekdarak0@gmail.com";
  console.log(req.cookies.jwt);
  const token = req.cookies.jwt;
  console.log(req.cookies.jwt);
  console.log(token);
  const verifyUser = jwt.verify(token, "mmmmmmmmmmmmmmmmmmmmmmm");
  console.log(verifyUser);
  const user = await Register.findOne({ _id: verifyUser._id });
  // console.log(find.items[0][1].item_name);
  console.log(user);
  // console.log(find);
  const at = "";
  res.render("edit_items", { da: user.items, ba: at });
  // res.render("edit_items");
  //   const id = await Register.findOne({ email: email });
  // const email1 = req.cookies.jwt;
  // const find = await Register.findOne({ email1: email1 });
  // // console.log(find.items[0][1].item_name);
  // console.log(email1);
  // // console.log(find);

  // res.render("edit_items", { da: find.items });
  // // res.render("edit_items");
  // //   const id = await Register.findOne({ email: email });
});
app.post("/edit_items", auth, async (req, res) => {
  //   console.log(req);
  //   console.log(res.body);
  // console.log(req.body[0].item_name);
  //   res.send("hi");
  // await Register.findOneAndUpdate(
  //   {
  //     email: "abhishekdarak0@gmail.com",
  //   },
  //   {
  //     $addToSet: {
  //       items: req.body,
  //     },
  //   }
  // );
  console.log(req.cookies.jwt);
  const token = req.cookies.jwt;
  console.log(req.cookies.jwt);
  console.log(token);
  const verifyUser = jwt.verify(token, "mmmmmmmmmmmmmmmmmmmmmmm");
  console.log(verifyUser);
  const user = await Register.findOne({ _id: verifyUser._id });
  // const email1 =req.cookies.jwt;
  // const find = await Register.findOne({ email1: email1 });
  // await Register.insertMany();
  await Register.findOneAndUpdate(
    {
      email: `${user.email}`,
    },
    {
      $pull: {
        items: user.items[0],
      },
    }
  );
  await Register.findOneAndUpdate(
    {
      email: `${user.email}`,
    },
    {
      $addToSet: {
        items: req.body,
      },
    }
  );
  await Register.findOneAndUpdate(
    {
      email: `${user.email}`,
    },
    {
      $addToSet: {
        past: req.body,
      },
    }
  );
  // await Register.replaceOne(
  //   {
  //     email: "abhishekdarak0@gmail.com",
  //   },
  //   {
  //     items: req.body,
  //   }
  // );
  //   const got = await Register.findOne({ email: email });
  //   email.items = req.body;
});
app.get("/expired_items", auth, async (req, res) => {
  console.log(req.cookies.jwt);
  const token = req.cookies.jwt;
  console.log(req.cookies.jwt);
  console.log(token);
  const verifyUser = jwt.verify(token, "mmmmmmmmmmmmmmmmmmmmmmm");
  console.log(verifyUser);
  var id = await Register.findOne({ _id: verifyUser._id });

  // var id = await Register.findOne({ email: email });
  // console.log(id.items[0][1].item_name);
  var len = id.items[0];
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var date = d.getDate();
  if (month > 0 && month <= 9) {
    month = `0${month}`;
  }
  if (date >= 0 && month <= 9) {
    date = `0${date}`;
  }
  console.log(month, "jj");
  console.log(month, "jj");
  var dateString2 = `${date}-${month}-${year}`;
  dateString2 = dateString2.split("-").reverse().join("-");
  var t = new Date();

  t.setDate(t.getDate() + 5);
  var tDate = t.getDate();
  var tMonth = t.getMonth() + 1;
  if (tDate >= 0 && tDate <= 9) {
    tDate = `0${t.getDate}`;
  }
  console.log(tDate, "tDate");

  if (tMonth > 0 && tMonth <= 9) {
    tMonth = `0${tMonth}`;
  }
  console.log(tMonth, "tMonth");
  var expiry_date = `${tDate}-${tMonth}-${t.getFullYear()}`;
  expiry_date = expiry_date.split("-").reverse().join("-");
  console.log(dateString2);
  console.log(expiry_date);
  var arr = [];
  // console.log(len.length);
  function isLater(dateString1, dateString2) {
    if (dateString1 > dateString2 && dateString1 < expiry_date) {
      return true;
    } else {
      return false;
    }
    // return dateString1 > dateString2;
  }
  for (var i = 0; i < len.length; i++) {
    var dateString1 = id.items[0][i].item_expiry_date;
    dateString1 = dateString1.split("-").reverse().join("-");
    console.log(dateString1);

    var a = isLater(dateString1, "2022-01-16");
    if (a == true) {
      arr.push(id.items[0][i]);
    }

    console.log(a);
  }
  console.log(arr);

  // const date1 = id.items[0][1].item_expiry_date;
  // const date1 = id.items[0];

  // console.log(date1);
  // const date = await Register.find({
  //   date1: { $lte: new Date("1-01-2022") },
  // });

  // const item = id.items[0][1].item_name;
  // res.render("expired_items", { idd: item });
  res.render("expired_items", { da: arr });
});
app.get("/image_up", (req, res) => {
  res.render("image_up");
});
app.get("/temp", (req, res) => {
  res.send("kk");
});
// app.get("/food_array_send",(req,res)=>{
//   console.log(req.cookies.jwt);
//   const token = req.cookies.jwt;
//   console.log(req.cookies.jwt);
//   console.log(token);
//   const verifyUser = jwt.verify(token, "mmmmmmmmmmmmmmmmmmmmmmm");
//   console.log(verifyUser);
//   var id = await Register.findOne({ _id: verifyUser._id });

// })
app.get("/expired_items_check", async (req, res) => {
  console.log(req.cookies.jwt);
  const token = req.cookies.jwt;
  console.log(req.cookies.jwt);
  console.log(token);
  const verifyUser = jwt.verify(token, "mmmmmmmmmmmmmmmmmmmmmmm");
  console.log(verifyUser);
  var id = await Register.findOne({ _id: verifyUser._id });

  // var id = await Register.findOne({ email: email });
  // console.log(id.items[0][1].item_name);
  var len = id.items[0];
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var date = d.getDate();
  if (month > 0 && month <= 9) {
    month = `0${month}`;
  }
  if (date >= 0 && month <= 9) {
    date = `0${date}`;
  }
  console.log(month, "jj");
  console.log(month, "jj");
  var dateString2 = `${date}-${month}-${year}`;
  dateString2 = dateString2.split("-").reverse().join("-");
  var t = new Date();

  t.setDate(t.getDate() + 5);
  var tDate = t.getDate();
  var tMonth = t.getMonth() + 1;
  if (tDate >= 0 && tDate <= 9) {
    tDate = `0${t.getDate}`;
  }
  console.log(tDate, "tDate");

  if (tMonth > 0 && tMonth <= 9) {
    tMonth = `0${tMonth}`;
  }
  console.log(tMonth, "tMonth");
  var expiry_date = `${tDate}-${tMonth}-${t.getFullYear()}`;
  expiry_date = expiry_date.split("-").reverse().join("-");
  console.log(dateString2);
  console.log(expiry_date);
  var arr = [];
  // console.log(len.length);
  function isLater(dateString1, dateString2) {
    if (dateString1 > dateString2 && dateString1 < expiry_date) {
      return true;
    } else {
      return false;
    }
    // return dateString1 > dateString2;
  }
  for (var i = 0; i < len.length; i++) {
    var dateString1 = id.items[0][i].item_expiry_date;
    dateString1 = dateString1.split("-").reverse().join("-");
    console.log(dateString1);

    var a = isLater(dateString1, "2022-01-16");
    if (a == true) {
      arr.push(id.items[0][i]);
    }

    console.log(a);
  }
  console.log(arr);
  res.send(arr);
});
app.post("/temp", auth, upload.single("image_input"), async (req, res) => {
  console.log(req.body.image_input, "ii");
  var un = req.file;
  console.log(un);
  var foodimg = `./images/${req.file.filename}`;
  // var foodimg = `images/${req.file}`;
  console.log(foodimg, "foodimg");
  var form = new formData();
  form.append("image", fs.createReadStream(foodimg));
  console.log("11");
  console.log(req.cookies.jwt);
  const token = req.cookies.jwt;
  console.log(req.cookies.jwt);
  console.log(token);
  const verifyUser = jwt.verify(token, "mmmmmmmmmmmmmmmmmmmmmmm");
  console.log(verifyUser);
  const user = await Register.findOne({ _id: verifyUser._id });
  // console.log(find.items[0][1].item_name);
  console.log(user);
  // console.log(find);
  const at = "";

  var headers = form.getHeaders();
  headers["Authorization"] = "Bearer fd5744b48d55d8757ec47a55891e1a5f40428bc7";
  console.log("22");
  const options = {
    hostname: "api.logmeal.es",
    path: "/v2/image/recognition/complete",
    method: "POST",
    headers: headers,
  };
  console.log("33");
  const req1 = https.request(options, (res1) => {
    res1.on("data", (d) => {
      console.log("in");
      // process.stdout.write(d.foodFamily);
      console.log(JSON.parse(d), "ji");
      console.log(JSON.parse(d).recognition_results[0].name);
      let item_ai = JSON.parse(d).recognition_results[0].name;
      res.render("edit_items", { da: user.items, ba: item_ai });
      console.log("44");
      // res.send(`${item_ai}`);
    });
  });

  form.pipe(req1);
});
app.get("/amazon_try", (req, res) => {
  res.render("amazon_try");
});
app.get("/edit_items1", (req, res) => {
  res.render("edit_items");
});
app.get("/product_recommendation", auth, async (req, res) => {
  // console.log(req.cookies.jwt);
  const token = req.cookies.jwt;
  // console.log(req.cookies.jwt);
  // console.log(token);
  const verifyUser = jwt.verify(token, "mmmmmmmmmmmmmmmmmmmmmmm");
  console.log(verifyUser);
  var id = await Register.findOne({ _id: verifyUser._id });
  var len = id.items;
  console.log(len.length);
  // console.log(len[0].length);
  // console.log();
  // console.log(len[0][0].length);
  var arr = [];
  // for (var j = 0; j < len.length; j++) {
  for (var i = 0; i < len[0].length; i++) {
    //   console.log(i, j);
    console.log(len[0].length);
    console.log(id.items[0][i].item_name);

    //   // id.items[0][1].item_expiry_date
    //   // console.log(id.items[0][i].item_name);
    arr.push(id.items[0][i].item_name);
  }

  console.log(arr, "aaaaaaaaaaa");

  // console.log(arr, "arr");
  // let items = ["rice", "butter", "bread"];
  res.send(arr);
});
app.get("/rec", (req, res) => {
  res.render("product_recommendation");
});
app.get("/spoonucular", (req, res) => {
  res.render("spoonucular");
});
app.get("/recipe_arr", (req, res) => {
  res.render("recipe_arr");
});
app.get("/amazon_recommendation", (req, res) => {
  res.render("amazon_recommendation");
});
app.get("/recipe_one", (req, res) => {
  res.render("recipe_one");
});
app.get("/main_reccommendation", (req, res) => {
  res.render("spoonucular");
});
app.listen(port, () => {
  console.log(`is listening at port${port}`);
});
