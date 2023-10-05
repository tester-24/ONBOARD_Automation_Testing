const cron = require('node-cron');
const nodemailer = require('nodemailer');

// Create a transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Set to true if using a secure connection (e.g., SSL/TLS)
  auth: {
    user: 'tester3.elitetechno@gmail.com',
    pass: 'turlhuuhgdlyglnx ',
  },
});

// Define the email options
const mailOptions = {
  from: 'tester3.elitetechno@gmail.com',
  to: 'brijal.pachchigar@jainam.biz',
  to: 'tester3.elitetechno@gmail.com',
  subject: 'This is Automation Testing Report',
  text: 'Automationn Testing report for Comet web app',
  attachments: [
    {
      filename: 'index.html',
      path: './index.html'
    },

  //   {
  //     filename: 'comet.cy.js.mp4',//failed screenshots
  //     path: './comet.cy.js.mp4',
  // },

  // {
  //     filename: 'comet.cy.js.mp4' ,
  //     path: './comet.cy.js.mp4',

  // },
  {

      filename: 'Report_Dividend_Report.cy.js.mp4 ' ,
      path: './Report_Dividend_Report.cy.js.mp4',
  },

  {

      filename: 'Report_FNO.cy.js.mp4 ' ,
      path: './Report_FNO.cy.js.mp4',
  },

  {

      filename: 'Report_GLobal_Report.cy.js.mp4 ' ,
      path: './Report_GLobal_Report.cy.js.mp4',
  },

  {

      filename: 'Report_Ledger.cy.js.mp4' ,
      path: './Report_Ledger.cy.js.mp4',
  },
  {

      filename: 'Report_Portfolio.cy.js.mp4 ' ,
      path: './Report_Portfolio.cy.js.mp4',
  },

  {

      filename: 'Report_Tax_Report.cy.js.mp4 ' ,
      path: './Report_Tax_Report.cy.js.mp4',
  },
  {

      filename: 'Report_Tradelog.cy.js.mp4' ,
      path: './Report_Tradelog.cy.js.mp4',
  },
  {

    filename: 'Utilities.cy.js.mp4' ,
    path: './Utilities.cy.js.mp4',
},

{

  filename: 'CURRENCY_J33_2021.pdf' ,
  path: './CURRENCY_J33_2021.pdf',
},


{

  filename: 'EquityScriptwiseGlobalReport_J33_2023.pdf' ,
  path: './EquityScriptwiseGlobalReport_J33_2023.pdf',
},
{

  filename: 'Holding.pdf' ,
  path: './Holding.pdf',
},
{

  filename: 'LedgerReport.pdf' ,
  path: './LedgerReport.pdf',
},
// {

//   filename: 'MCX_J33_2021.pdf' ,
//   path: './MCX_J33_2021.pdf',
// },
{

  filename: 'NSE_FNO_J33_2021.pdf' ,
  path: './NSE_FNO_J33_2021.pdf',
}]

 

};


// Schedule the task to run every 30 minutes
cron.schedule('*/30 * * * *', () => {
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(`Error sending email: ${error}`);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
});
