create table Users (
	userID uuid primary key default gen_random_uuid(),
	userName text not null unique,
	userPassword text not null
);

create domain byte as smallint check (value >= 0 and value <= 255);

create type color as (
	red byte,
	green byte,
	blue byte
);

create table Calendars (
	calendarID uuid primary key default gen_random_uuid(),
	calendarName text not null,
	calendarColor color default (0, 0, 0),
	isPublic bool default false,
	userID uuid not null references Users
);

create table Events (
	eventID uuid primary key default gen_random_uuid(),
	eventName text not null,
	eventDescription text,
	eventDate timestamp not null,
	calendarID uuid not null references Calendars
);

create table TodoEntries (
	entryID uuid primary key default gen_random_uuid(),
	entryText text not null,
	isCompleted bool default false,
	userID uuid not null references Users
);