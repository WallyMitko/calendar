import CalendarWeek from "./calendar-week";
import { getWeekStartDates } from "../utils/month-utils";

export default function CalendarGrid(props: {date: Date}) {
	let firstDay = new Date(props.date);
	firstDay.setDate(1);
	let weekStartDates = getWeekStartDates(firstDay);

	let weeks = weekStartDates.map(startDate =>
		<CalendarWeek key={startDate.valueOf()} startDate={startDate}></CalendarWeek>
	);

	return (
		<div className="calendar-grid">
			{weeks}
		</div>
	)
}