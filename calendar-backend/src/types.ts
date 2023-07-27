const crypto = require('crypto')

type CalendarEvent = {
	name: string,
	uuid: string,
	color: {red: number, green: number, blue: number},
	date: Date
};

const sampleEvents: CalendarEvent[] = [
	{
		name: "Boring Meeting",
		uuid: crypto.randomUUID(),
		color: {red: 255, green: 255, blue: 0},
		date: new Date(2023, 6, 25, 12, 30)
	},
	{
		name: "Dentist Appointment",
		uuid: crypto.randomUUID(),
		color: {red: 0, green: 255, blue: 0},
		date: new Date(2023, 6, 25, 15, 0)
	},
	{
		name: "Job Interview",
		uuid: crypto.randomUUID(),
		color: {red: 0, green: 255, blue: 120},
		date: new Date(2023, 6, 20, 13, 30)
	},
	{
		name: "Nothing",
		uuid: crypto.randomUUID(),
		color: {red: 255, green: 100, blue: 0},
		date: new Date(2023, 6, 29, 8, 0)
	},
	{
		name: "Vacation Starts",
		uuid: crypto.randomUUID(),
		color: {red: 0, green: 0, blue: 255},
		date: new Date(2023, 6, 30, 0, 0)
	},
	{
		name: "Vacation Ends",
		uuid: crypto.randomUUID(),
		color: {red: 0, green: 0, blue: 255},
		date: new Date(2023, 7, 10, 0, 0)
	},
	{
		name: "Another Boring Meeting",
		uuid: crypto.randomUUID(),
		color: {red: 255, green: 255, blue: 0},
		date: new Date(2023, 7, 12, 12, 30)
	}
];

export {CalendarEvent, sampleEvents};