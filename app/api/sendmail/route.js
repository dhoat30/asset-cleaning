
import formData from 'form-data';
import { NextResponse } from 'next/server'
import Mailgun from 'mailgun.js';
const API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = 'noreply.webduel.co.nz';
const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: 'api', key: API_KEY });

export async function GET(req, res) {
    return NextResponse.json(response)
}

export async function POST(req, res) {
    const { emailTo, fromEmail, formName, mailText } = await req.json();
    console.log("this is email api")
    const messageData = {
        from: fromEmail,
        to: emailTo,
        subject: formName,
        text: mailText,
    };
    console.log(messageData)

    try {
        let response = await client.messages.create(DOMAIN, messageData)

        return NextResponse.json({ message: "This Worked", success: true, data: response });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: error, success: false });
        // res.status(500).send('Error sending email');

    }
};