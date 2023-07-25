import { useState, useEffect } from "react";
import CalendarHeader from "./calendar-header";
import WeekdayHeader from "./weekday-header";
import CalendarGrid from "./calendar-grid";
import { EventInfo, getEvents } from "../utils/connection-utils";

export default function Calendar(props: {date: Date}) {
	let [currentDate, setDate] = useState(props.date);
	let [events, setEvents] = useState<EventInfo[]>([]);
	useEffect(() => {
		getEvents(currentDate.getFullYear(), currentDate.getMonth() + 1)	// Add one since the Date object indexes months from zero
		.then((results) => setEvents(results));
	}, [currentDate])
	
	let prevMonth = () => {
		let newDate = new Date(currentDate);
		let newMonth = currentDate.getMonth() - 1;
		if (newMonth < 0) {
			newMonth += 12;
			newDate.setFullYear(currentDate.getFullYear() - 1);
		}
		newDate.setMonth(newMonth);
		setDate(newDate);
	}
	let nextMonth = () => {
		let newDate = new Date(currentDate);
		let newMonth = currentDate.getMonth() + 1;
		if (newMonth > 11) {
			newMonth -= 12;
			newDate.setFullYear(currentDate.getFullYear() + 1);
		}
		newDate.setMonth(newMonth);
		setDate(newDate);
	}

	return (
		<div className="calendar-container">
			<CalendarHeader date={currentDate} prevMonth={prevMonth} nextMonth={nextMonth}></CalendarHeader>
			<WeekdayHeader></WeekdayHeader>
			<CalendarGrid date={currentDate} events={events}></CalendarGrid>
		</div>
	)
}