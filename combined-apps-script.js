function doPost(e) {
  try {
    Logger.log('doPost called');

    // Handle case where e is undefined or doesn't have postData
    if (!e) {
      Logger.log('Event object is undefined');
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, message: 'Invalid request format' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    Logger.log('Event object exists: ' + typeof e);

    // Try to get data from different possible sources
    let requestData = null;

    if (e.postData && e.postData.contents) {
      Logger.log('Using e.postData.contents');
      requestData = e.postData.contents;
    } else if (e.parameter && e.parameter.data) {
      Logger.log('Using e.parameter.data');
      requestData = e.parameter.data;
    } else if (e.parameters && e.parameters.data) {
      Logger.log('Using e.parameters.data');
      requestData = e.parameters.data[0];
    } else {
      Logger.log('No data found in request');
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, message: 'No data received' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    Logger.log('Raw request data: ' + requestData);

    // Open the spreadsheet by ID
    const spreadsheetId = '1e7YXZ_B_i4WbGr_ZptoJpuMKW_r31X5RnLF7TD-AszM';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);

    // Parse the incoming data
    const data = JSON.parse(requestData);
    Logger.log('Parsed data: ' + JSON.stringify(data));

    // Get response data
    const responseData = getResponse(data, spreadsheet);

    // Return JSON response
    return ContentService
      .createTextOutput(JSON.stringify(responseData))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: 'An error occurred: ' + error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    Logger.log('doGet called');

    // Handle case where e is undefined
    if (!e) {
      Logger.log('Event object is undefined');
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, message: 'Invalid request format' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    Logger.log('Event object exists: ' + typeof e);

    // Get action from parameters
    const action = e.parameter.action;
    Logger.log('Action parameter: ' + action);

    if (!action) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, message: 'No action specified' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Open the spreadsheet by ID
    const spreadsheetId = '1e7YXZ_B_i4WbGr_ZptoJpuMKW_r31X5RnLF7TD-AszM';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);

    // Create data object for getResponse
    const data = { action };

    // Get response data
    const responseData = getResponse(data);

    // Return JSON response
    return ContentService
      .createTextOutput(JSON.stringify(responseData))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error in doGet: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: 'An error occurred: ' + error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}



function getResponse(data, spreadsheet) {
  // Check if it's a newsletter subscription (only email field)
  if (data.email && !data.name && !data.subject && !data.message && !data.action) {
    // Handle Newsletter Subscription
    const email = data.email;

    // Validate email
    if (!email.includes('@')) {
      return { success: false, message: 'Invalid email address' };
    }

    // Get or create Newsletter sheet
    let sheet = spreadsheet.getSheetByName('Newsletter');
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Newsletter');
      sheet.appendRow(['Email', 'Timestamp']);
    }

    // Append data
    const timestamp = new Date();
    sheet.appendRow([email, timestamp]);

    // Send notification email
    const recipient = 'mailtrash939@gmail.com';
    const subject = 'New Newsletter Subscription';
    const body = `A new user has subscribed to the newsletter:\n\nEmail: ${email}\nTimestamp: ${timestamp}`;

    MailApp.sendEmail(recipient, subject, body);

    return { success: true, message: 'Subscription successful' };

  } else if (data.name && data.email && data.subject && data.message) {
    // Handle Contact Form Submission
    const { name, email, subject, message } = data;

    // Validate email
    if (!email.includes('@')) {
      return { success: false, message: 'Invalid email address' };
    }

    // Get or create Contact sheet
    let sheet = spreadsheet.getSheetByName('Contact');
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Contact');
      sheet.appendRow(['Name', 'Email', 'Subject', 'Message', 'Timestamp']);
    }

    // Append data
    const timestamp = new Date();
    sheet.appendRow([name, email, subject, message, timestamp]);

    // Send notification email
    const recipient = 'mailtrash939@gmail.com';
    const emailSubject = 'New Contact Form Submission';
    const body = `A new contact form submission has been received:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\nTimestamp: ${timestamp}`;

    MailApp.sendEmail(recipient, emailSubject, body);

    return { success: true, message: 'Message sent successfully' };

  } else if (data.action === 'request_otp') {
    // Handle OTP Request
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP

    // Store OTP temporarily (in a sheet for simplicity, in production use cache or database)
    let otpSheet = spreadsheet.getSheetByName('OTP');
    if (!otpSheet) {
      otpSheet = spreadsheet.insertSheet('OTP');
      otpSheet.appendRow(['OTP', 'Timestamp']);
    }
    // Clear old OTPs (simple cleanup)
    const lastRow = otpSheet.getLastRow();
    if (lastRow > 1) {
      otpSheet.deleteRows(2, lastRow - 1);
    }
    otpSheet.appendRow([otp, new Date()]);

    // Send OTP email
    const recipient = 'mohithchalamcharla@gmail.com';
    const subject = 'EARTHNESS Admin Login OTP';
    const body = `Your OTP for EARTHNESS admin login is: ${otp}\n\nThis OTP will expire in 10 minutes.`;

    MailApp.sendEmail(recipient, subject, body);

    return { success: true, message: 'OTP sent successfully' };

  } else if (data.action === 'verify_otp' && data.otp) {
    // Handle OTP Verification
    const otpSheet = spreadsheet.getSheetByName('OTP');
    if (!otpSheet) {
      return { success: false, message: 'No OTP requested' };
    }

    const lastRow = otpSheet.getLastRow();
    if (lastRow < 2) {
      return { success: false, message: 'No OTP found' };
    }

    const storedOtp = otpSheet.getRange(lastRow, 1).getValue().toString();
    const timestamp = otpSheet.getRange(lastRow, 2).getValue();
    const now = new Date();
    const diffMinutes = (now - timestamp) / (1000 * 60);

    if (diffMinutes > 10) {
      return { success: false, message: 'OTP expired' };
    }

    if (storedOtp === data.otp) {
      // Clear OTP after successful verification
      otpSheet.deleteRows(2, lastRow - 1);
      return { success: true, message: 'OTP verified successfully' };
    } else {
      return { success: false, message: 'Invalid OTP' };
    }

  } else {
    // Invalid data
    return { success: false, message: 'Invalid request data' };
  }
}
