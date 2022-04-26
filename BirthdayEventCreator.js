function eventCreator() {

  
    // Open event calendar.
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var calendarId = "YOUR_CALENDAR_ID_GOES_HERE_LEAVE_QUOTES";
    var eventCal = CalendarApp.getCalendarById(calendarId);
  
    // Gather data from spreadsheet.
    var data = spreadsheet.getRange("A2:F4").getValues();
  
    // Loop through list of lists creating eaach event.
    for (i = 0; i < data.length; i++) {
      var person = data[i];
  
      var start = person[5]
      var end = start;
      var apostrophe = "'s";
      if (person[1].charAt(person[1].length - 1) == 's') {
        apostrophe = "'";
      }
      var summary = person[0] + " " + person[1] + apostrophe + " Birthday";
  
      var event = {
        summary: summary,
        location: person[4],
        description: person[3] + "\n" + person[2],
        start: {
          date: start,
          timeZone: eventCal.getTimeZone()
        },
        end: {
          date: end,
          timeZone: eventCal.getTimeZone()
        },
        recurrence: [
          `RRULE:FREQ=YEARLY;UNTIL=21200701T170000Z`,
        ],
        colorId: 7,
        reminders: {
          "useDefault": false,
          "overrides": [
            { "method": "email", "minutes": 10080 },
            { "method": "email", "minutes": 0 }
          ]
        }
      };
      event = Calendar.Events.insert(event, calendarId);
    }
  
  }
  
  // Added this function to delete all events, though it is easier
  // to simply delete the calendar.
  function deleteEvents() {
  
    // Set period of time that covers the events you set.
    var fromDate = new Date(1900, 0, 1, 0, 0, 0);
    var toDate = new Date(2121, 0, 4, 0, 0, 0);
  
    // Open event calendar.
    var calendarId = "YOUR_CALENDAR_ID_GOES_HERE_LEAVE_QUOTES";
    var eventCal = CalendarApp.getCalendarById(calendarId);
  
    // Get events/loop through and delete.
    var events = eventCal.getEvents(fromDate, toDate);
    for (i = 0; i < events.length; i++) {
      var ev = events[i];
      ev.deleteEvent();
    }
  }
    