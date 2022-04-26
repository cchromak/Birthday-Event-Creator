# Birthday-Event-Creator

## Description
Simple script made for my family to create Google calendar events via Google Sheets and Apps script.

All you need is a Google account and 10 minutes.

## Instructions For Creating Events

### Setting up a Google sheet
Create a google sheet and share it with everyone whose birthday you wish to create an event/reminder for. Ask them to input their own data.

The sheets formatting is as following: 
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/addSheet.png" width=700></p>

**Note the formatting of the date yyyy-mm-dd**

### Setting up a Google calendar

*It is highly suggested to create a unique calendar for these events in case you want to simply erase the calendar to remove all of the events. This will be discussed in the instrutions for deleting events portion of this readme.*

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

Copy and paste the code from [BirthdayEventCreator.js](https://github.com/cchromak/Birthday-Event-Creator/blob/main/BirthdayEventCreator.js) in the text editor overwritting the empty starter function.

There are two important must do's at this point.
Copy and paste your previously saved calender Id into two places in the code. They are on line 6 and 62. This id will take the place of the holder **YOUR_CALENDAR_ID_GOES_HERE_LEAVE_QUOTES**. As it says, leave the quotes.

Next, you must ensure on line 10 that your inputted range of the google sheet is correct. For instance, the range in this code is from A2 to F4. Refer to [brirthdaySheetTemplate](https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/addSheet.png). Your range must match the data in your google sheet.

Besides the *must do's* there are a few ways to augment the code to personalize it.
For instance, this code has set two email reminders for the event - day of and week before. This is the part of the code that does that:
```
reminders: {
          "useDefault": false,
          "overrides": [
            { "method": "email", "minutes": 10080 },
            { "method": "email", "minutes": 0 }
          ]
        }
```
You could adjust the "minutes" to the desired time.

You could also adjust the **colorId**. Right now it is set to 7 which is a blue.
You can choose from 1-11 inclusive.


Go to Add Services
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/addService.png" width=400></p>

Add both the Google Sheets API and Google Calendar API
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/addSheets.png" width=400></p>
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/addCalendar.png" width=400></p>

Save the project
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/saveProjecxt.png" width=400></p>

You will by default have **eventCreator** selected as the function you wish to run, but just in case ensure it is selected.
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/selectEventCreator.png" width=400></p>

Run it
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/selectRun.png" width=400></p>

You will be asked to give the project permission to use your data.
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/givePermission.png" width=400></p>

Then you will see a warning. Select **Advanced** in the bottom left corner.
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/goToAdvanced.png" width=400></p>

Then select **Go to birthdayEventCreator (unsafe)**
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/gotToUnsafe.png" width=400></p>

Choose the gmail account you are working with then scroll down and select **Allow**.

You may have to rerun the program at this point, so simply run it. at this point you have the events saved for the next 200 years (I'm optimistic).

Now you *hopefully* wont miss another birthday.

## Instructions For Deleting Events

You may find that you need to delete all of these events and recreate them all with additional people. For instance, a new baby is born in your family. You have two options:

The easiest is to delete the Google Calendar, receate a new one, and then follow these steps with your updated Google Sheet.

The second options is to use the second function **deleteEvents** within the code [BirthdayEventCreator.js](https://github.com/cchromak/Birthday-Event-Creator/blob/main/BirthdayEventCreator.js)

Open Apps script and select the deleteEvents function in the drop down.
<p><img src="https://github.com/cchromak/Birthday-Event-Creator/blob/main/images/selectEventCreator.png" width=400></p>

After that, follow the steps to recreate all of the events with the newly updated Google sheet.




