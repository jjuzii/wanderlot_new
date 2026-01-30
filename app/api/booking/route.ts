import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, date, guests, notes, tour } = body;

    // 优先使用 SYSTEM_EMAIL / SYSTEM_PASS 作为系统发件人
    const smtpUser = process.env.SYSTEM_EMAIL ;
    const smtpPass = process.env.SYSTEM_PASS;

    // --- 配置邮件发送器（使用 163 SMTP） ---
    const transporter = nodemailer.createTransport({
      host: 'smtp.163.com',
      port: 465,
      secure: true,
      auth: {
        user: smtpUser, // 系统发件人
        pass: smtpPass, // 系统发件人 SMTP 授权码
      },
    });

    // --- 邮件内容 (from 与 SMTP 登录保持一致) ---
    const mailOptions = {
      from: `Wanderlot <${smtpUser}>`,
      replyTo: email ,
      to: process.env.EMAIL_TO ,
      subject: `New Booking Request: ${tour}`,
      text: `
        New Booking Received!

        Tour: ${tour}
        Name: ${name}
        Email: ${email}
        Date: ${date}
        Guests: ${guests}
        Notes: ${notes}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #d97706;">New Booking Request</h2>
          <p><strong>Tour:</strong> ${tour}</p>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Guests:</strong> ${guests}</p>
          <p><strong>Notes:</strong> ${notes || "None"}</p>
        </div>
      `,
    };

    // --- 发送邮件（仅当已配置系统发件人时真正发送） ---
    if (smtpUser && smtpPass) {
      await transporter.sendMail(mailOptions);
      console.log(`Email sent successfully to ${mailOptions.to} using ${smtpUser}`);
    } else {
      console.log("Email configuration missing. Logging booking only:", body);
      console.log("To enable email, set SYSTEM_EMAIL & SYSTEM_PASS or EMAIL_USER & EMAIL_PASS in .env.local");
    }

    return NextResponse.json({ message: "Booking received successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ message: "Error processing booking" }, { status: 500 });
  }
}
