import CalendarWeek from "./calendar-week";
import { getWeekStartDates } from "../utils/month-utils";
import { EventInfo } from "../utils/connection-utils";

export default function CalendarGrid(props: {date: Date, events: EventInfo[]}) {

	console.log(props.events)
	let firstDay = new Date(props.date);
	firstDay.setDate(1);
	let weekStartDates = getWeekStartDates(firstDay);


	let weeks = weekStartDates.map(startDate =>
		<CalendarWeek key={startDate.valueOf()} startDate={startDate} events={props.events.filter(event => isThisWeek(event.date, weekStartDates.indexOf(startDate), weekStartDates))}></CalendarWeek>
	);

	return (
		<div className="calendar-grid">
			{weeks}
		</div>
	)
}

// Returns true if a date falls within the specified week according to a list of week start dates
function isThisWeek(date: Date, week: number, weekStartDates: Date[]): boolean {
	//console.log(typeof date)
	if (date.getFullYear() !== weekStartDates[0].getFullYear() ||
		date.getMonth() !== weekStartDates[0].getMonth() ||
		week >= weekStartDates.length) return false;
	else if (week === weekStartDates.length - 1 && date >= weekStartDates[week]) return true;
	else if (date >= weekStartDates[week] && date < weekStartDates[week + 1]) return true;
	return false;
}