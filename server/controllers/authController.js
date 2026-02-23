import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import nodemailer from "nodemailer";

// Helper to generate JWT
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

let otpStore = {};

// 🔹 Signup
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    const token = generateToken(user._id);
    res.status(201).json({
      message: "Signup successful",
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password || "");
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user._id);
    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// 🔹 Step 1: Send OTP
export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found!" });

    const otp = Math.floor(100000 + Math.random() * 900000);
    otpStore[email] = otp;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "senoraluxe14@gmail.com",
        pass: "kmcc bgue ywgi bgia", // Use App Password (not your main password)
      },
    });

    await transporter.sendMail({
      from: "youremail@gmail.com",
      to: email,
      subject: "Password Reset OTP",
      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Reset Password</title>

<style>
@media only screen and (max-width: 600px) {
  .container {
    width: 95% !important;
  }
  .inner-padding {
    padding: 30px 20px !important;
  }
  .otp-box {
    font-size: 32px !important;
    letter-spacing: 10px !important;
    padding: 18px 30px !important;
  }
  .text-large {
    font-size: 18px !important;
  }
}
</style>
</head>

<body style="margin:0; padding:0; background-color:#e9e3de;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#e9e3de">
<tr>
<td align="center">

<!-- OUTER CONTAINER -->
<table class="container" width="700" cellpadding="0" cellspacing="0" border="0" 
style="max-width:700px; margin:40px auto; background:#f4efeb; border-radius:20px; box-shadow:0 20px 40px rgba(0,0,0,0.08);">

<tr>
<td class="inner-padding" style="padding:50px 60px; background:#faf7f5; border:1px solid #d8d2cc; border-radius:15px; font-family: Georgia, 'Times New Roman', serif;">

<p style="font-size:26px; color:#333333; margin-bottom:30px;">
Dear ${user.name || "User"},
</p>

<p class="text-large" style="font-size:20px; color:#555555; line-height:1.7;">
We received a request to reset the password for your 
<strong style="color:#2b2b2b;">Senora Luxe</strong> account.
</p>

<!-- OTP BOX -->
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" style="padding:40px 0;">
<div class="otp-box" style="
display:inline-block;
padding:25px 70px;
background:#efe9f3;
border:2px dashed #cbbfd6;
border-radius:18px;
font-size:48px;
letter-spacing:18px;
color:#4b365f;
font-weight:500;
box-shadow:0 8px 20px rgba(0,0,0,0.05);
">
${otp}
</div>
</td>
</tr>
</table>

<p class="text-large" style="font-size:20px; color:#555555; line-height:1.7;">
⏳ <strong>This OTP</strong> is valid for <strong>5 minutes</strong> only.
</p>

<p class="text-large" style="font-size:20px; color:#555555; line-height:1.7;">
For your security, never share this OTP with anyone.
</p>

<p class="text-large" style="font-size:20px; color:#555555; line-height:1.7;">
If you did not request this reset, please ignore this email or contact our support team immediately.
</p>

<div style="margin-top:20px;">
<p style="font-size:22px; color:#333333;">
Warm Regards,
</p>
<p style="font-size:24px; font-weight:bold; color:#2b2b2b;">
Senora Luxe Team
</p>
</div>

</td>
</tr>
</table>

</td>
</tr>
</table>

</body>
</html>
`,
    });

    res.status(200).json({ message: "OTP sent to email!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 Step 2: Reset Password (fixed with bcrypt)
export const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    // Validate OTP
    if (!otpStore[email] || otpStore[email] != otp) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found!" });

    // ✅ Hash new password before saving
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    // Clear OTP after successful reset
    delete otpStore[email];

    res.status(200).json({ message: "Password reset successful!" });
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.status(500).json({ message: error.message });
  }
};
