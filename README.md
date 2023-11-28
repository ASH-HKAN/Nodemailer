# nodeMailer
# Email Sender Script

A Node.js script using Nodemailer to send emails periodically.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [License](#license)

## Features

- Sends emails using Gmail's SMTP server.
- Periodic email sending every 10 seconds.
- Stops after a certain number of emails.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- Gmail account with 2-Step Verification enabled
- App-specific password generated for the Gmail account

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ASH-HKAN/nodeMailer.git



## Configuration

GMAIL_USER=your-gmail@gmail.com
GMAIL_PASS=your-app-specific-password

Replace your-gmail@gmail.com with your Gmail address and your-app-specific-password with the generated app-specific password.

Update the recipient email address in the script (index.js) if needed.


## Usage
Run the script with the following command:

npm .\sendMail.js


## License
This project is licensed under the MIT License - see the LICENSE file for details.


Make sure to replace placeholders like `your-username`, `email-sender-script`, `your-gmail@gmail.com`, and `your-app-specific-password` with your actual information.

This template provides sections for features, prerequisites, installation, configuration, usage, stopping the script, and license information. Feel free to customize it further based on the specific details of your project.








