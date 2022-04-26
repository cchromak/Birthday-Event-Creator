# Birthday-Event-Creator

## Description
Simple script made for my family to create Goolge calendar events via Google Sheets and Apps script.

All you need is a Google account and 10 minutes.

## Instructions

### Setting up a Google sheet
Create a google sheet and share it with everyone whose birthday you wish to create an event/reminder for. Ask them to input their own data.

The sheets formatting is as following: 
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/addSheet.png" width=900></p>

**Note the formatting of the date yyyy-mm-dd**

### Setting up a Google calendar

Go to Google Calendar

Create a Calendar
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/createCalendar.png" width=400></p>

Select Calendar Options
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/selectCalendarOptions.png" width=400></p>

Scroll down until you find calendar Id. Copy and paste it for temporary holding.
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/grabId.png" width=400></p>

### Setting up Apps script

Go back to the already open Google sheet. 

Open up Apps scripts
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/appsScript.png" width=700></p>

This is what you will see:
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/appSheet.png" width=700></p>

Copy and paste the code from [BirthdayEventCreator.js](https://github.com/cchromak/Birthday-Event-Creator/blob/main/BirthdayEventCreator.js)

There are two important must do's at this point.
Copy and paste your previously saved calender Id into two places in the code. They are on line 6 and 62. This id will take the place of the holder **YOUR_CALENDAR_ID_GOES_HERE_LEAVE_QUOTES**. As it says, leave the quotes.

Next, you must ensure on line 10 that your inputted range of the google sheet is correct. For instance, the range in this code is from A2 to F4. Refer to [brirthdaySheetTemplate](https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/addSheet.png). Your range must match the data in your google sheet.