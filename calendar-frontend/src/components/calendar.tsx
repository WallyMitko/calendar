import { useState } from "react";
import CalendarHeader from "./calendar-header";
import WeekdayHeader from "./weekday-header";
import CalendarGrid from "./calendar-grid";

export default function Calendar() {
	let [currentDate, setDate] = useState(new Date());
	
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
			<CalendarGrid date={currentDate}></CalendarGrid>
		</div>
	)
}