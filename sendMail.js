const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: '****@gmail.com',
        // your Gmail Address
        pass: '**** **** **** ****',
        //  This pass means : Open Gmail --> Manage Acc --> 2-Step Verification --> scroll Down and App Pasword --> Create New One

    },
});

let emailCounter = 1;  // Counter for email subjects

const mailOptions = {
    from: {
        name: "Nemesis Angell",
        address: '****@gmail.com',
        // Your Gmail Address
    },
    to: ["****@gmail.com"], // Receiver 
    subject: `test${emailCounter}`,  // Initial subject

    html: `Bye Bye World`
};

const sendMail = async () => {
    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent with subject: ${mailOptions.subject}`);
        emailCounter++;  // Increment the email counter
        mailOptions.subject = `test${emailCounter}`;  // Update the subject for the next email
    } catch (error) {
        console.error(error);
    }
}

// Set up interval to send email every 10 seconds
const intervalId = setInterval(() => {
    sendMail();
}, 10000);  // 10000 milliseconds = 10 seconds

// Stop sending emails after a certain number (e.g., 5 times in this example)
const numberOfEmailsToSend = 100;
let emailsSent = 0;

// Stop the interval after sending the desired number of emails
const stopSendingEmails = () => {
    clearInterval(intervalId);
    console.log(`Stopped sending emails after ${emailsSent} emails.`);
};

// Stop sending emails after a certain number of iterations
setTimeout(stopSendingEmails, numberOfEmailsToSend * 10000); 
