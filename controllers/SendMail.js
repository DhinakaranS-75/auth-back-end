const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "dhinakaran75493@gmail.com",
    pass: "xugvgykvjsjeyof",
  },
});

function sendMail(toEmail, subject, content) {
  const mailOptions = {
    from: "dhinakaran75493@gmail.com",
    to: toEmail,
    subject: subject,
    html: content,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`Error occurred while sending email ${error}`);
    } else {
      console.log("Email Sent", info.response);
    }
  });
}

module.exports = { sendMail };
