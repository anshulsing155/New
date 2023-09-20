import nodemailer from "nodemailer";
// import { GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD } from "$env/static/private";
let GOOGLE_EMAIL= "billing@hostingfighter.com" 
let GOOGLE_EMAIL_PASSWORD = "6S&h!Ze#*Sdw"
let transporter = nodemailer.createTransport({
  host: "server107.nethost.in",
  port: 587,
  secure: false,
  auth: {
    user: GOOGLE_EMAIL,
    pass: GOOGLE_EMAIL_PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.error(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

export default transporter;
