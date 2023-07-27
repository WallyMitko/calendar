insert into Users(userName, userPassword) values ('TestUser', 'Password');
insert into Users(userName, userPassword) values ('TestUser2', 'Password');
-- select * from Users;

insert into Calendars(calendarName, calendarColor, userID) values (
	'TestCalendar',
	(0, 255, 0),
	'1088d031-219c-4a6a-96f1-a5fa8a35a88d'
);
insert into Calendars(calendarName, calendarColor, userID) values (
	'TestCalendar2',
	(255, 100, 0),
	'3dd6d6ff-fc30-41be-8ec9-580101d256a4'
);
-- select * from Calendars;

insert into Events(eventName, eventDate, calendarID) values (
	'Meeting',
	'2023-07-27 13:30',
	'b45b44e8-34f6-443c-b539-ac5d70be295b'
);
insert into Events(eventName, eventDescription, eventDate, calendarID) values (
	'Dentist Appt',
	'Cleaning and check-up @ Main St Family Dental',
	'2023-07-28 15:00',
	'b45b44e8-34f6-443c-b539-ac5d70be295b'
);
insert into Events(eventName, eventDescription, eventDate, calendarID) values (
	'Movie Night',
	'Remember to buy snacks',
	'2023-07-28 19:00',
	'454686c3-1cd1-4285-ae30-c17f3651b227'
);
insert into Events(eventName, eventDescription, eventDate, calendarID) values (
	'Job Interview',
	'Backend dev @ Inertia - leave 2h early in case of traffic',
	'2023-07-31 10:45',
	'454686c3-1cd1-4285-ae30-c17f3651b227'
);
-- select * from Events;

select e.eventID, e.eventName, e.eventDescription, e.eventDate, cal.calendarName, cal.calendarColor from Events e, Calendars cal where
	e.calendarID = cal.calendarID
	and cal.userID = '3dd6d6ff-fc30-41be-8ec9-580101d256a4';